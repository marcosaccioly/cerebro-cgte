/**
 * facade.ts -- ponto de entrada do bridge Kanboard
 *
 * Dispatch das 4 operacoes V0:
 *   criar-tarefa | mover-tarefa | adicionar-comentario | listar-tarefas-projeto
 *
 * Toda operacao de escrita passa por HITL antes de tocar a API.
 * A operacao de leitura (listar-tarefas-projeto) nao passa por HITL.
 *
 * Uso:
 *   bun run _bridges/kanboard/facade.ts <operacao> [opcoes]
 *
 * Exemplos:
 *   bun run facade.ts criar-tarefa --case CASE-2026-0001-validacao-v0
 *   bun run facade.ts listar-tarefas-projeto --projeto 47
 *
 * V0: usa jsonrpc-client.ts.
 * V1+: troca para mcp-client.ts em uma linha quando issue upstream #11 fixar.
 */

import { criarTarefa } from "./operations/criar-tarefa.ts";
import { moverTarefa } from "./operations/mover-tarefa.ts";
import { adicionarComentario } from "./operations/adicionar-comentario.ts";
import { listarTarefasProjeto } from "./operations/listar-tarefas-projeto.ts";
import { JsonRpcClient } from "./jsonrpc-client.ts";

const WRITE_OPERATIONS = new Set([
  "criar-tarefa",
  "mover-tarefa",
  "adicionar-comentario",
]);

type Operacao =
  | "criar-tarefa"
  | "mover-tarefa"
  | "adicionar-comentario"
  | "listar-tarefas-projeto";

interface CliArgs {
  operacao: Operacao;
  case?: string;
  projeto?: string;
  raw: string[];
}

function parseArgs(argv: string[]): CliArgs {
  const [_, __, operacao, ...rest] = argv;
  if (!operacao) {
    console.error("Uso: bun run facade.ts <operacao> [opcoes]");
    console.error("Operacoes: criar-tarefa | mover-tarefa | adicionar-comentario | listar-tarefas-projeto");
    process.exit(2);
  }

  const args: CliArgs = { operacao: operacao as Operacao, raw: rest };
  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (arg === "--case") args.case = rest[++i];
    else if (arg === "--projeto") args.projeto = rest[++i];
  }
  return args;
}

/**
 * HITL: imprime o payload final na CLI e pede aprovacao explicita.
 * Retorna `true` apenas se o usuario digitou exatamente `y`.
 * Qualquer outra entrada (`n`, `editar`, ENTER vazio) e tratada como recusa.
 *
 * A escolha de exigir exatamente `y` e proposital: anti-autopilot. O ponto do
 * HITL e o gestor ler o payload. Aceitar default ENTER converte HITL em
 * formalidade vazia.
 */
export async function requireHitl(payload: unknown, descricao: string): Promise<boolean> {
  console.log("\n=== HITL ===");
  console.log(`Operacao: ${descricao}`);
  console.log("Payload:");
  console.log(JSON.stringify(payload, null, 2));
  console.log("\nAprovar? Digite `y` para confirmar, qualquer outra coisa cancela.");
  process.stdout.write("> ");

  const decoder = new TextDecoder();
  const buf = new Uint8Array(1024);
  const n = (await Bun.stdin.stream().getReader().read()).value;
  const resposta = n ? decoder.decode(n).trim() : "";

  return resposta === "y";
}

async function main() {
  const args = parseArgs(process.argv);
  const client = new JsonRpcClient();

  switch (args.operacao) {
    case "criar-tarefa":
      await criarTarefa(client, args);
      break;
    case "mover-tarefa":
      await moverTarefa(client, args);
      break;
    case "adicionar-comentario":
      await adicionarComentario(client, args);
      break;
    case "listar-tarefas-projeto":
      await listarTarefasProjeto(client, args);
      break;
    default:
      console.error(`Operacao desconhecida: ${args.operacao}`);
      process.exit(2);
  }
}

if (import.meta.main) {
  await main();
}
