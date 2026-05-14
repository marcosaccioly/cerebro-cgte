/**
 * mover-tarefa.ts -- move card entre colunas do mesmo projeto.
 *
 * V0: alvo principal e atravessar gates institucionais
 *   ("Inicio autorizado" -> "Em execucao", "Em execucao" -> "Em aprovacao", etc).
 */

import { JsonRpcClient } from "../jsonrpc-client.ts";
import { requireHitl } from "../facade.ts";

interface CliArgs {
  case?: string;
}

export async function moverTarefa(client: JsonRpcClient, args: CliArgs): Promise<void> {
  if (!args.case) {
    console.error("mover-tarefa exige --case <CASE-ID>");
    process.exit(2);
  }

  const payloadRaw = process.env.KANBOARD_PAYLOAD;
  if (!payloadRaw) {
    console.error("KANBOARD_PAYLOAD ausente.");
    process.exit(2);
  }

  const payload = JSON.parse(payloadRaw) as MoverTarefaPayload;

  if (payload.operacao !== "mover-tarefa") {
    console.error(`Operacao esperada: mover-tarefa. Recebido: ${payload.operacao}`);
    process.exit(2);
  }

  if (!payload.card_id) {
    console.error("mover-tarefa precisa de card_id no payload.");
    process.exit(2);
  }

  const aprovado = await requireHitl(payload, `mover card ${payload.card_id} -> coluna ${payload.campos.column_id}`);
  if (!aprovado) {
    console.log("HITL recusado. Operacao cancelada.");
    process.exit(1);
  }

  // Kanboard API: moveTaskPosition
  const params = {
    project_id: payload.projeto_id,
    task_id: payload.card_id,
    column_id: payload.campos.column_id,
    position: payload.campos.position ?? 1,
    swimlane_id: payload.campos.swimlane_id ?? 0,
  };

  const ok = await client.call<boolean>("moveTaskPosition", params);

  if (!ok) {
    console.error("moveTaskPosition retornou false. Card ou coluna invalida?");
    process.exit(1);
  }

  console.log(`\nCard ${payload.card_id} movido para coluna ${payload.campos.column_id}.`);
}

interface MoverTarefaPayload {
  operacao: "mover-tarefa";
  projeto_id: number;
  card_id: number;
  campos: {
    column_id: number;
    position?: number;
    swimlane_id?: number;
  };
  hitl_aprovado_em: string;
  hitl_aprovado_por: string;
}
