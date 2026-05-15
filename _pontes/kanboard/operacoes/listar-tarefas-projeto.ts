/**
 * listar-tarefas-projeto.ts -- le tarefas de um projeto. ÚNICA operação read-only.
 *
 * Não passa por HITL (não escreve nada). Útil para:
 *   - Ver capacidade da equipe antes de distribuir.
 *   - Conferir estado de cards relacionados a um case.
 *   - Auditar diff entre o que o workspace pensa que escreveu e o que o board mostra.
 */

import { JsonRpcClient } from "../jsonrpc-client.ts";

interface CliArgs {
  projeto?: string;
}

interface KanboardTask {
  id: number;
  title: string;
  column_name: string;
  category_name?: string;
  owner_name?: string;
  date_due?: string;
}

export async function listarTarefasProjeto(client: JsonRpcClient, args: CliArgs): Promise<void> {
  const projetoStr = args.projeto ?? process.env.KANBOARD_PROJETO_PRINCIPAL ?? "47";
  const projeto = Number.parseInt(projetoStr, 10);

  if (Number.isNaN(projeto)) {
    console.error(`Projeto invalido: ${projetoStr}`);
    process.exit(2);
  }

  // status_id=1 e o filtro de tarefas ativas (não fechadas) no Kanboard.
  const tarefas = await client.call<KanboardTask[]>("getAllTasks", {
    project_id: projeto,
    status_id: 1,
  });

  console.log(`\nProjeto ${projeto} -- ${tarefas.length} tarefas ativas\n`);
  for (const t of tarefas) {
    const prazo = t.date_due ? ` [prazo ${t.date_due}]` : "";
    const owner = t.owner_name ? ` (${t.owner_name})` : "";
    const cat = t.category_name ? ` [${t.category_name}]` : "";
    console.log(`  #${t.id} ${t.title}${cat}${owner}${prazo}`);
    console.log(`     coluna: ${t.column_name}`);
  }
}
