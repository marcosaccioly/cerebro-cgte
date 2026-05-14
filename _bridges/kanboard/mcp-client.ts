/**
 * mcp-client.ts -- cliente MCP para o Kanboard.
 *
 * DESABILITADO EM V0.
 *
 * Motivo: o servidor MCP do Kanboard tem issue upstream #11 que afeta o envio
 * de campos opcionais em criar-tarefa (ex: date_due, owner_id chegam null
 * mesmo quando passados). Em V0 usamos jsonrpc-client.ts direto.
 *
 * Quando o issue for fixado:
 *   1. Implementar este modulo casando a interface JsonRpcClient.
 *   2. No facade.ts, trocar `new JsonRpcClient()` por `new McpClient()`.
 *   3. Validar com case de teste antes de declarar swap completo.
 *   4. Manter jsonrpc-client.ts como fallback por 30 dias antes de remover.
 */

export class McpClient {
  constructor() {
    throw new Error(
      "mcp-client.ts esta desabilitado em V0. Use JsonRpcClient. Veja README.md secao 'MCP vs JSON-RPC direto'."
    );
  }
}
