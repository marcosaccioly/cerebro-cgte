/**
 * adicionar-comentario.ts -- adiciona comentario em card existente.
 *
 * V0: passa por HITL como qualquer outra escrita. Comentarios sao publicos
 * dentro da CGTE; voz importa.
 */

import { JsonRpcClient } from "../jsonrpc-client.ts";
import { requireHitl } from "../facade.ts";

interface CliArgs {
  case?: string;
}

export async function adicionarComentario(client: JsonRpcClient, args: CliArgs): Promise<void> {
  if (!args.case) {
    console.error("adicionar-comentario exige --case <CASE-ID>");
    process.exit(2);
  }

  const payloadRaw = process.env.KANBOARD_PAYLOAD;
  if (!payloadRaw) {
    console.error("KANBOARD_PAYLOAD ausente.");
    process.exit(2);
  }

  const payload = JSON.parse(payloadRaw) as ComentarioPayload;

  if (payload.operacao !== "adicionar-comentario") {
    console.error(`Operacao esperada: adicionar-comentario. Recebido: ${payload.operacao}`);
    process.exit(2);
  }

  if (!payload.card_id) {
    console.error("adicionar-comentario precisa de card_id.");
    process.exit(2);
  }

  if (!payload.campos.content || payload.campos.content.trim().length === 0) {
    console.error("Comentario vazio. Recusado antes do HITL.");
    process.exit(2);
  }

  const aprovado = await requireHitl(payload, `comentar em card ${payload.card_id}`);
  if (!aprovado) {
    console.log("HITL recusado. Operacao cancelada.");
    process.exit(1);
  }

  const params = {
    task_id: payload.card_id,
    user_id: payload.campos.user_id,
    content: payload.campos.content,
  };

  const commentId = await client.call<number>("createComment", params);

  if (!commentId || commentId === 0) {
    console.error("createComment retornou 0. Falha ao criar comentario.");
    process.exit(1);
  }

  console.log(`\nComentario adicionado. comment_id=${commentId}`);
}

interface ComentarioPayload {
  operacao: "adicionar-comentario";
  projeto_id: number;
  card_id: number;
  campos: {
    user_id: number;
    content: string;
  };
  hitl_aprovado_em: string;
  hitl_aprovado_por: string;
}
