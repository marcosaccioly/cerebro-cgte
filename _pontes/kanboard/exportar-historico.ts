/**
 * exportar-historico.ts -- exporta o historico de tarefas do board 47 para disco.
 *
 * READ-ONLY no Kanboard. Escreve arquivos em historico-cgte/ para servir de
 * corpus de contexto (o que a CGTE faz). Agrupa por eixo/categoria quando o card
 * tem categoria; os sem categoria saem em chunks para sintese por inferencia.
 *
 * Uso: bun run _pontes/kanboard/exportar-historico.ts
 */

import { JsonRpcClient } from "./jsonrpc-client.ts";
import { mkdirSync, writeFileSync } from "node:fs";

const COLUNAS: Record<number, string> = {
  235: "Baú de tarefas", 236: "Início autorizado", 237: "Em andamento",
  240: "Em aprovação", 238: "Congelado", 239: "Finalizado",
};
const CATEGORIAS: Record<number, { nome: string; eixo: string }> = {
  156: { nome: "MOOC", eixo: "educacao" }, 157: { nome: "Conteúdo Educacional", eixo: "educacao" },
  155: { nome: "Formação e Capacitação", eixo: "educacao" }, 152: { nome: "Programação Visual Educacional", eixo: "educacao" },
  160: { nome: "Produção Audiovisual", eixo: "audiovisual" }, 161: { nome: "Evento / Transmissão", eixo: "audiovisual" },
  151: { nome: "Comunicação Visual", eixo: "comunicacao" }, 153: { nome: "Conteúdo Digital", eixo: "comunicacao" },
  164: { nome: "Acessibilidade", eixo: "acessibilidade" }, 163: { nome: "Libras Interpretação", eixo: "acessibilidade" },
  162: { nome: "Libras Tradução", eixo: "acessibilidade" }, 154: { nome: "Interface Digital", eixo: "tecnologia" },
  158: { nome: "Inteligência Artificial", eixo: "tecnologia" }, 166: { nome: "Gestão / PGD", eixo: "institucional" },
  165: { nome: "Comissão", eixo: "institucional" }, 59: { nome: "Colaboração Institucional", eixo: "institucional" },
  159: { nome: "Produção Científica", eixo: "ciencia" }, 167: { nome: "Demanda Extraordinária", eixo: "transversal" },
  54: { nome: "x_CSO do Cefor", eixo: "legado" }, 55: { nome: "x_Demandas da diretoria", eixo: "legado" },
  53: { nome: "x_Estudos e aprendizado", eixo: "legado" }, 61: { nome: "x_Ferramenta / Sistema / Serviço", eixo: "legado" },
  60: { nome: "x_Guias, modelos e tutoriais", eixo: "legado" }, 58: { nome: "x_Recurso educacional", eixo: "legado" },
  57: { nome: "x_Salas Virtuais", eixo: "legado" }, 62: { nome: "x_Projetos-piloto", eixo: "legado" },
};

interface Tarefa {
  id: number; title: string; description: string; column_id: number;
  category_id: number; status: number; date_creation: number;
}

const limpa = (s: string) => (s ?? "").replace(/\r/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
const ano = (ts: number) => (ts ? new Date(ts * 1000).getFullYear() : "?");

function linhaCard(t: Tarefa, fechada: boolean): string {
  const desc = limpa(t.description);
  const status = fechada ? "fechada" : `aberta/${COLUNAS[t.column_id] ?? t.column_id}`;
  const corpo = desc ? `\n  ${desc.slice(0, 600).replace(/\n/g, "\n  ")}` : "";
  return `\n### #${t.id} (${ano(t.date_creation)}, ${status}) ${t.title}${corpo}\n`;
}

async function main() {
  const client = new JsonRpcClient();
  const abertas = await client.call<Tarefa[]>("getAllTasks", { project_id: 47, status_id: 1 });
  const fechadas = await client.call<Tarefa[]>("getAllTasks", { project_id: 47, status_id: 0 });
  const fechadasIds = new Set(fechadas.map((t) => t.id));
  const todas = [...abertas, ...fechadas];

  const dir = "historico-cgte";
  mkdirSync(dir, { recursive: true });

  // 1. Agrupar por eixo (so cards com categoria conhecida)
  const porEixo = new Map<string, Tarefa[]>();
  const semCategoria: Tarefa[] = [];
  for (const t of todas) {
    const cat = CATEGORIAS[t.category_id];
    if (!cat) { semCategoria.push(t); continue; }
    if (!porEixo.has(cat.eixo)) porEixo.set(cat.eixo, []);
    porEixo.get(cat.eixo)!.push(t);
  }

  const index: string[] = [`# Historico de tarefas -- board 47 (CGTE)\n`,
    `Exportado read-only do Kanboard. ${todas.length} tarefas (${abertas.length} abertas + ${fechadas.length} fechadas).`,
    `Corpus para o cerebro entender os tipos de trabalho da CGTE.\n`, `## Arquivos\n`];

  // Arquivos por eixo (cards categorizados = exemplos rotulados pela equipe)
  for (const [eixo, tarefas] of [...porEixo.entries()].sort()) {
    const porCat = new Map<string, Tarefa[]>();
    for (const t of tarefas) {
      const nome = CATEGORIAS[t.category_id]!.nome;
      if (!porCat.has(nome)) porCat.set(nome, []);
      porCat.get(nome)!.push(t);
    }
    let out = `# Eixo: ${eixo} (${tarefas.length} tarefas categorizadas)\n`;
    for (const [nome, ts] of [...porCat.entries()].sort()) {
      out += `\n## ${nome} (${ts.length})\n`;
      for (const t of ts) out += linhaCard(t, fechadasIds.has(t.id));
    }
    const arq = `${dir}/eixo-${eixo}.md`;
    writeFileSync(arq, out, "utf-8");
    index.push(`- ${arq} -- ${tarefas.length} tarefas`);
  }

  // Sem categoria em chunks (para sintese por inferencia)
  const CHUNK = 250;
  for (let i = 0; i < semCategoria.length; i += CHUNK) {
    const fatia = semCategoria.slice(i, i + CHUNK);
    const n = String(i / CHUNK + 1).padStart(2, "0");
    let out = `# Sem categoria -- parte ${n} (${fatia.length} tarefas)\n# Eixo a inferir pelo titulo/descricao.\n`;
    for (const t of fatia) out += linhaCard(t, fechadasIds.has(t.id));
    const arq = `${dir}/sem-categoria-${n}.md`;
    writeFileSync(arq, out, "utf-8");
    index.push(`- ${arq} -- ${fatia.length} tarefas (eixo a inferir)`);
  }

  writeFileSync(`${dir}/INDEX.md`, index.join("\n") + "\n", "utf-8");
  console.log(`Exportado ${todas.length} tarefas para ${dir}/`);
  console.log(`Categorizadas: ${todas.length - semCategoria.length} | Sem categoria: ${semCategoria.length}`);
  for (const [eixo, ts] of [...porEixo.entries()].sort()) console.log(`  eixo ${eixo}: ${ts.length}`);
}

if (import.meta.main) await main();
