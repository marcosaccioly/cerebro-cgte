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
  date_creation?: number | string; // unix timestamp (segundos)
}

/** Corte de data por projeto (`ignorar_antes_de` em projetos-cgte.yaml). Ex.: board 30 ignora antes de 2023. */
async function corteDoProjeto(projeto: number): Promise<number | null> {
  const arquivo = Bun.file(new URL("../projetos-cgte.yaml", import.meta.url));
  const mapa = Bun.YAML.parse(await arquivo.text()) as { projetos: { id: number | null; ignorar_antes_de?: string }[] };
  const corte = mapa.projetos.find((p) => p.id === projeto)?.ignorar_antes_de;
  return corte ? Math.floor(new Date(`${corte}T00:00:00-03:00`).getTime() / 1000) : null;
}

export async function listarTarefasProjeto(client: JsonRpcClient, args: CliArgs): Promise<void> {
  const projetoStr = args.projeto ?? process.env.KANBOARD_PROJETO_PRINCIPAL ?? "47";
  const projeto = Number.parseInt(projetoStr, 10);

  if (Number.isNaN(projeto)) {
    console.error(`Projeto invalido: ${projetoStr}`);
    process.exit(2);
  }

  // status_id=1 e o filtro de tarefas ativas (não fechadas) no Kanboard.
  const todas = await client.call<KanboardTask[]>("getAllTasks", {
    project_id: projeto,
    status_id: 1,
  });

  const corte = await corteDoProjeto(projeto);
  const tarefas = corte ? todas.filter((t) => Number(t.date_creation ?? 0) >= corte) : todas;
  const ignoradas = corte ? ` (${todas.length - tarefas.length} anteriores ao corte ignoradas)` : "";

  console.log(`\nProjeto ${projeto} -- ${tarefas.length} tarefas ativas${ignoradas}\n`);
  for (const t of tarefas) {
    const prazo = t.date_due ? ` [prazo ${t.date_due}]` : "";
    const owner = t.owner_name ? ` (${t.owner_name})` : "";
    const cat = t.category_name ? ` [${t.category_name}]` : "";
    console.log(`  #${t.id} ${t.title}${cat}${owner}${prazo}`);
    console.log(`     coluna: ${t.column_name}`);
  }
}
