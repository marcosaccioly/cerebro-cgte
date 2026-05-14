# _bridges/kanboard

Bridge TypeScript que fala com o Kanboard institucional. NÃO e especialista. E infraestrutura -- módulos chamados pelo `01_gestor/` após HITL aprovado.

## Por que TypeScript dentro do workspace, não skill

Nenhum skill oficial cobre "bridge institucional para Kanboard". Em vez de criar dependencia externa, este bridge fica versionado junto com o workspace. Mudanças na infra do board ficam visiveis no git do cerebro-cgte.

Tudo aqui usa Bun (`bun run ...`). Não usar npm / npx.

## API alvo

JSON-RPC do Kanboard. Endpoint configurado em `.env` como `KANBOARD_API_URL`. Autenticação basica via `KANBOARD_API_USER` + `KANBOARD_API_TOKEN`.

Em V0, falamos com o board real (produção). Não ha mock / sandbox. Por isso o HITL e nao-negociavel.

## MCP vs JSON-RPC direto

Existe um servidor MCP para Kanboard, mas ele tem issue upstream (#11) que afeta o envio de campos opcionais. Em V0 usamos JSON-RPC direto via `jsonrpc-client.ts`. Quando o issue for fixado, `mcp-client.ts` (desabilitado em V0) pode substituir o jsonrpc -- swap de uma linha no `facade.ts`.

## Operações V0 (4)

| Operação | Arquivo | Para que serve |
|---|---|---|
| `criar-tarefa` | `operations/criar-tarefa.ts` | Cria card novo. Padrão destino: coluna "Início autorizado". |
| `mover-tarefa` | `operations/mover-tarefa.ts` | Move card entre colunas. Útil quando gestor aprova gate. |
| `adicionar-comentario` | `operations/adicionar-comentario.ts` | Comenta em card. Voz CGTE / Marquito conforme caso. |
| `listar-tarefas-projeto` | `operations/listar-tarefas-projeto.ts` | Le tarefas do projeto. Única operação read; não precisa HITL. |

Outras operações entram em V1.X conforme padrões emergirem (mover entre projetos, anexar arquivo, criar subtask, etc.).

## HITL obrigatório em escrita

Toda operação de escrita (`criar-tarefa`, `mover-tarefa`, `adicionar-comentario`) chama `facade.requireHitl(payload)` antes de tocar a API. O facade:

1. Imprime o payload completo formatado na CLI.
2. Pergunta `Aprovar? (y/n/editar)`.
3. Se `y`: chama a API.
4. Se `n`: aborta, registra motivo no handoff.
5. Se `editar`: devolve o controle ao caller para corrigir.

A operação `listar-tarefas-projeto` e read-only -- não passa por HITL.

## Mapeamento de IDs

`projetos-cgte.yaml` e `usuarios-cgte.yaml` mantem o mapeamento entre nomes legíveis (categoria "MOOC") e IDs do Kanboard (12). Esses arquivos são gerados / atualizados manualmente após a primeira chamada de `listar-tarefas-projeto` retornar metadata real.

Em V0, o gestor edita esses arquivos a mao se algo mudar. Em V1.X, pode entrar um script `sync-metadata.ts` que regenera automaticamente quando alguma categoria sumir / surgir.

## Como usar via CLI

```
bun run _bridges/kanboard/facade.ts criar-tarefa --case CASE-2026-0001-validacao-v0
```

O facade le o handoff aberto do case que aponta para `_bridges/kanboard` e executa a operação com HITL.

## Tratamento de falha

- **Falha de rede / API offline:** registra erro no handoff (`status: open` mantido, `error_log` adicionado em payload). Gestor retentea quando rede voltar.
- **Falha de autenticação:** mensagem clara para validar `.env`. Não retentea.
- **Card duplicado:** retorno da API e capturado. Bridge informa o `card_id` existente. Gestor decide se atualiza o card existente ou re-titula este.

## Arquivos

- `facade.ts` -- ponto de entrada. CLI + dispatcher + HITL.
- `jsonrpc-client.ts` -- cliente JSON-RPC direto (uso em V0).
- `mcp-client.ts` -- cliente MCP (desabilitado em V0; ativar quando upstream issue #11 fixar).
- `operations/criar-tarefa.ts`
- `operations/mover-tarefa.ts`
- `operations/adicionar-comentario.ts`
- `operations/listar-tarefas-projeto.ts`
- `projetos-cgte.yaml` -- mapeamento de IDs de projeto + categoria + coluna.
- `usuarios-cgte.yaml` -- mapeamento de usuarios CGTE para `owner_id` do Kanboard.
