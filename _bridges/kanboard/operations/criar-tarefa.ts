/**
 * criar-tarefa.ts -- cria card novo no projeto 47 (ou outro projeto explicito).
 *
 * Fluxo:
 *   1. Le o ultimo handoff aberto do case que aponta para _bridges/kanboard.
 *   2. Valida que o payload e um kanboard_card_request com operacao=criar-tarefa.
 *   3. HITL: mostra payload, pede aprovacao.
 *   4. Chama Kanboard API (createTask).
 *   5. Atualiza o handoff com resultado_bridge (card_id, link) e status=done.
 */

import { JsonRpcClient } from "../jsonrpc-client.ts";
import { requireHitl } from "../facade.ts";

interface CliArgs {
  case?: string;
}

export async function criarTarefa(client: JsonRpcClient, args: CliArgs): Promise<void> {
  if (!args.case) {
    console.error("criar-tarefa exige --case <CASE-ID>");
    process.exit(2);
  }

  // V0: leitura / escrita do handoff e feita pelo agente Claude que invoca
  // a operacao, nao por este script. Este script foca em validar payload,
  // pedir HITL e tocar a API. O Claude le o handoff, monta o payload,
  // executa este script com o payload como variavel de ambiente / stdin,
  // e re-escreve o handoff com resultado_bridge. Padrao adaptado de Austin:
  // tooling fino, orquestracao pelo agente.
  //
  // Em V1.X esta funcao pode ler / escrever o YAML direto, caso a chain de
  // ferramentas estabilize.

  const payloadRaw = process.env.KANBOARD_PAYLOAD;
  if (!payloadRaw) {
    console.error("KANBOARD_PAYLOAD ausente. Esperado JSON do kanboard_card_request via env.");
    process.exit(2);
  }

  const payload = JSON.parse(payloadRaw) as KanboardCardRequest;

  if (payload.operacao !== "criar-tarefa") {
    console.error(`Operacao esperada: criar-tarefa. Recebido: ${payload.operacao}`);
    process.exit(2);
  }

  const aprovado = await requireHitl(payload, `criar-tarefa no projeto ${payload.projeto_id}`);
  if (!aprovado) {
    console.log("HITL recusado. Operacao cancelada.");
    process.exit(1);
  }

  const params = {
    project_id: payload.projeto_id,
    title: payload.campos.title,
    description: payload.campos.description,
    category_id: payload.campos.category_id,
    owner_id: payload.campos.owner_id,
    column_id: payload.campos.column_id,
    date_due: payload.campos.date_due,
  };

  const taskId = await client.call<number>("createTask", params);

  if (!taskId || taskId === 0) {
    console.error("Kanboard retornou taskId=0 (criacao falhou). Verifique campos obrigatorios.");
    process.exit(1);
  }

  const baseUrl = process.env.KANBOARD_API_URL?.replace(/\/jsonrpc\.php$/, "") ?? "";
  const link = `${baseUrl}/?controller=TaskViewController&action=show&task_id=${taskId}`;

  console.log(`\nCard criado. card_id=${taskId}`);
  console.log(`Link: ${link}`);
  console.log("\nAtualize o handoff com resultado_bridge:");
  console.log(JSON.stringify({ card_id: taskId, link }, null, 2));
}

interface KanboardCardRequest {
  operacao: "criar-tarefa" | "mover-tarefa" | "adicionar-comentario" | "listar-tarefas-projeto";
  projeto_id: number;
  card_id: number | null;
  campos: {
    title: string;
    description: string;
    category_id: number;
    owner_id: number;
    column_id: number;
    date_due?: string;
  };
  hitl_aprovado_em: string;
  hitl_aprovado_por: string;
}
