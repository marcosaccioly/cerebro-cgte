/**
 * varredura.ts -- leitura read-only de metadata do Kanboard institucional.
 *
 * Objetivo: capturar os IDs REAIS (colunas, categorias, usuarios) do projeto
 * principal para popular projetos-cgte.yaml e usuarios-cgte.yaml, que hoje
 * estao com IDs placeholder.
 *
 * NAO escreve nada no board. Nao passa por HITL. Apenas lê e imprime.
 *
 * Uso:
 *   bun run _pontes/kanboard/varredura.ts            # usa KANBOARD_PROJETO_PRINCIPAL (47)
 *   bun run _pontes/kanboard/varredura.ts --projeto 47
 */

import { JsonRpcClient } from "./jsonrpc-client.ts";

interface Coluna { id: number; title: string; position: number }
interface Categoria { id: number; name: string }
interface Usuario { id: number; username: string; name?: string }
interface Tarefa { id: number; title: string; column_name?: string; category_name?: string; owner_name?: string }

function parseProjeto(argv: string[]): number {
  let projetoStr = process.env.KANBOARD_PROJETO_PRINCIPAL ?? "47";
  const idx = argv.indexOf("--projeto");
  if (idx !== -1 && argv[idx + 1]) projetoStr = argv[idx + 1];
  const projeto = Number.parseInt(projetoStr, 10);
  if (Number.isNaN(projeto)) {
    console.error(`Projeto invalido: ${projetoStr}`);
    process.exit(2);
  }
  return projeto;
}

async function main() {
  const projeto = parseProjeto(process.argv);
  const client = new JsonRpcClient();

  console.log(`\n=== VARREDURA DE METADATA -- projeto ${projeto} ===\n`);

  // 1. Colunas reais (com IDs)
  const colunas = await client.call<Coluna[]>("getColumns", { project_id: projeto });
  console.log("COLUNAS:");
  for (const c of colunas) console.log(`  id=${c.id}  pos=${c.position}  "${c.title}"`);

  // 2. Categorias reais (com IDs)
  const categorias = await client.call<Categoria[]>("getAllCategories", { project_id: projeto });
  console.log("\nCATEGORIAS:");
  for (const cat of categorias) console.log(`  id=${cat.id}  "${cat.name}"`);

  // 3. Usuarios do projeto (com IDs)
  const usuarios = await client.call<Record<string, string>>("getProjectUsers", { project_id: projeto });
  console.log("\nUSUARIOS DO PROJETO (id -> nome):");
  for (const [id, nome] of Object.entries(usuarios)) console.log(`  id=${id}  "${nome}"`);

  // 4. Resumo de tarefas ativas (contexto, nao para mapeamento)
  const tarefas = await client.call<Tarefa[]>("getAllTasks", { project_id: projeto, status_id: 1 });
  console.log(`\nTAREFAS ATIVAS: ${tarefas.length}`);

  console.log("\n=== FIM DA VARREDURA ===");
  console.log("Use os IDs acima para corrigir projetos-cgte.yaml e usuarios-cgte.yaml.\n");
}

if (import.meta.main) {
  await main();
}
