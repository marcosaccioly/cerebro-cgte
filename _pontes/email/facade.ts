/**
 * facade.ts -- ponto de entrada da ponte de e-mail (caixa da Comunicação Social do Cefor).
 *
 * Operações:
 *   testar                                   -- confere login e mostra totais das pastas (leitura)
 *   varrer   [--dias N | --desde AAAA-MM-DD] [--limite N] [--forcar]
 *                                            -- Caixa de Entrada -> comunicacao-cefor/_entrada/ (leitura)
 *   enviadas [--dias N] [--limite N]         -- Itens Enviados -> comunicacao-cefor/_entrada/_enviadas/ (leitura;
 *                                               referência de tom para rascunhos)
 *   rascunho --entrada <arquivo.md> --corpo <arquivo.txt> --aprovado-por <nome> [--todos]
 *                                            -- salva rascunho de resposta na pasta Rascunhos (NÃO envia)
 *
 * Rode a partir da raiz do cerebro-cgte:
 *   bun run _pontes/email/facade.ts varrer --dias 7
 *
 * Nada aqui envia, move, marca como lido ou apaga mensagem. O único write é
 * `rascunho`, chamado só depois do HITL do operador (aprovação no chat), e o
 * envio continua sendo humano, pelo webmail.
 */

import { mkdir, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { EwsClient, type Mensagem, type Pasta } from "./ews-client.ts";

const RAIZ = resolve(import.meta.dir, "..", "..");
const ENTRADA = join(RAIZ, "comunicacao-cefor", "_entrada");
const ENVIADAS = join(ENTRADA, "_enviadas");
const TRIAGEM = join(RAIZ, "comunicacao-cefor", "triagem");

type Args = Record<string, string | true>;

function parseArgs(argv: string[]): { operacao: string; args: Args } {
  const [operacao, ...resto] = argv.slice(2);
  const args: Args = {};
  for (let i = 0; i < resto.length; i++) {
    if (!resto[i].startsWith("--")) continue;
    const chave = resto[i].slice(2);
    const valor = resto[i + 1];
    if (valor === undefined || valor.startsWith("--")) args[chave] = true;
    else {
      args[chave] = valor;
      i++;
    }
  }
  return { operacao: operacao ?? "", args };
}

/** Bun só carrega o .env do diretório atual; garante o da raiz do cérebro. */
async function carregarEnvDaRaiz(): Promise<void> {
  if (process.env.CSO_EWS_URL) return;
  const arquivo = Bun.file(join(RAIZ, ".env"));
  if (!(await arquivo.exists())) return;
  for (const linha of (await arquivo.text()).split(/\r?\n/)) {
    const m = linha.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m || process.env[m[1]]) continue;
    process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
  }
}

function desdeDe(args: Args, diasPadrao: number): Date {
  if (typeof args.desde === "string") return new Date(`${args.desde}T00:00:00-03:00`);
  const dias = typeof args.dias === "string" ? Number.parseInt(args.dias, 10) : diasPadrao;
  return new Date(Date.now() - dias * 24 * 60 * 60 * 1000);
}

function limiteDe(args: Args, padrao: number): number {
  return typeof args.limite === "string" ? Number.parseInt(args.limite, 10) : padrao;
}

/** Data/hora local (America/Sao_Paulo) no formato AAAA-MM-DD e HHMM. */
function dataLocal(iso: string): { dia: string; hora: string } {
  const partes = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
  const [dia, hora] = partes.split(" ");
  return { dia, hora: hora.replace(":", "") };
}

function chave(internetMessageId: string): string {
  return Bun.hash(internetMessageId).toString(16).slice(0, 8);
}

function pessoaStr(p: { nome: string; email: string } | null): string {
  if (!p) return "";
  return p.nome && p.nome !== p.email ? `${p.nome} <${p.email}>` : p.email;
}

function limparCorpo(texto: string): string {
  return texto
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function paraMarkdown(m: Mensagem, fonte: string, extra: Record<string, unknown> = {}): string {
  const { dia } = dataLocal(m.recebidoEm);
  const fm: Record<string, unknown> = {
    mensagem_id: m.internetMessageId,
    conversa_id: m.conversaId,
    ews_item_id: m.itemId,
    recebido_em: m.recebidoEm,
    dia,
    remetente: pessoaStr(m.de),
    para: m.para.map(pessoaStr),
    cc: m.cc.map(pessoaStr),
    assunto: m.assunto,
    anexos: m.anexos,
    lida_na_caixa: m.lida,
    capturado_em: new Date().toISOString(),
    fonte,
    ...extra,
  };
  const yaml = Object.entries(fm)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join("\n");
  const citado = limparCorpo(m.corpoCompleto).slice(limparCorpo(m.corpo).length).trim();
  const partes = [`---\n${yaml}\n---`, "", limparCorpo(m.corpo)];
  if (fonte === "ews-enviadas" && citado) {
    partes.push("", "### Mensagem respondida (trecho)", "", citado.slice(0, 1500));
  }
  return partes.join("\n") + "\n";
}

async function jaTriados(): Promise<string> {
  try {
    const arquivos = (await readdir(TRIAGEM)).filter((f) => f.endsWith(".yaml"));
    const textos = await Promise.all(arquivos.map((f) => Bun.file(join(TRIAGEM, f)).text()));
    return textos.join("\n");
  } catch {
    return "";
  }
}

async function jaCapturados(pasta: string): Promise<Set<string>> {
  try {
    return new Set((await readdir(pasta)).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "").split("_").pop() ?? ""));
  } catch {
    return new Set();
  }
}

async function capturar(cliente: EwsClient, pasta: Pasta, destino: string, fonte: string, args: Args, diasPadrao: number) {
  const desde = desdeDe(args, diasPadrao);
  const limite = limiteDe(args, 30);
  await mkdir(destino, { recursive: true });

  const ids = await cliente.listarIds(pasta, desde, limite);
  const mensagens = await cliente.obter(ids.map((i) => i.itemId));
  const triados = pasta === "inbox" ? await jaTriados() : "";
  const capturados = await jaCapturados(destino);

  const novos: string[] = [];
  let jaTriado = 0;
  let jaCapturado = 0;
  for (const m of mensagens) {
    const k = chave(m.internetMessageId || m.itemId);
    if (!args.forcar && triados.includes(m.internetMessageId)) {
      jaTriado++;
      continue;
    }
    if (!args.forcar && capturados.has(k)) {
      jaCapturado++;
      continue;
    }
    const { dia, hora } = dataLocal(m.recebidoEm);
    const nome = `${dia}_${hora}_${k}.md`;
    await Bun.write(join(destino, nome), paraMarkdown(m, fonte));
    novos.push(nome);
  }

  console.log(
    JSON.stringify(
      {
        pasta,
        desde: desde.toISOString(),
        encontradas: ids.length,
        limite_atingido: ids.length >= limite,
        novas_capturadas: novos.length,
        ja_triadas: jaTriado,
        ja_capturadas: jaCapturado,
        destino: destino.replace(RAIZ, "").replace(/^[\\/]/, ""),
        arquivos: novos,
      },
      null,
      2,
    ),
  );
}

function textoParaHtml(texto: string): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return texto
    .trim()
    .split(/\n{2,}/)
    .map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`)
    .join("\n");
}

async function rascunho(cliente: EwsClient, args: Args) {
  const entrada = typeof args.entrada === "string" ? resolve(RAIZ, args.entrada) : "";
  const corpoArq = typeof args.corpo === "string" ? resolve(RAIZ, args.corpo) : "";
  const aprovadoPor = typeof args["aprovado-por"] === "string" ? args["aprovado-por"] : "";
  if (!entrada || !corpoArq || !aprovadoPor) {
    console.error("rascunho exige --entrada <arquivo.md> --corpo <arquivo.txt> --aprovado-por <nome>");
    process.exit(2);
  }
  const fm = (await Bun.file(entrada).text()).match(/^ews_item_id:\s*(.+)$/m);
  if (!fm) {
    console.error(`ews_item_id não encontrado em ${entrada}`);
    process.exit(2);
  }
  const itemId = JSON.parse(fm[1]) as string;
  const corpo = await Bun.file(corpoArq).text();
  const r = await cliente.salvarRascunhoResposta(itemId, textoParaHtml(corpo), args.todos === true);
  console.log(
    JSON.stringify(
      { rascunho_salvo: true, pasta: "Rascunhos", rascunho_item_id: r.itemId, aprovado_por: aprovadoPor, salvo_em: new Date().toISOString() },
      null,
      2,
    ),
  );
}

async function main() {
  const { operacao, args } = parseArgs(process.argv);
  await carregarEnvDaRaiz();
  const cliente = new EwsClient();

  switch (operacao) {
    case "testar": {
      const pastas = await Promise.all((["inbox", "sentitems", "drafts"] as Pasta[]).map((p) => cliente.resumoPasta(p)));
      console.log(JSON.stringify({ caixa: cliente.caixa, login_ok: true, pastas }, null, 2));
      break;
    }
    case "varrer":
      await capturar(cliente, "inbox", ENTRADA, "ews-inbox", args, 7);
      break;
    case "enviadas":
      await capturar(cliente, "sentitems", ENVIADAS, "ews-enviadas", args, 90);
      break;
    case "rascunho":
      await rascunho(cliente, args);
      break;
    default:
      console.error("Uso: bun run _pontes/email/facade.ts <testar | varrer | enviadas | rascunho> [opcoes]");
      process.exit(2);
  }
}

if (import.meta.main) {
  try {
    await main();
  } catch (e) {
    console.error(`ERRO: ${(e as Error).message}`);
    process.exit(1);
  }
}
