# CONTEXTO -- 01-gestor

Como uma entrega flui por este workspace.

## Fluxo da tarefa

1. **Entrada.** Uma entrega chega de `00-orquestrador/` (V0) ou de um especialista de área (V1+) com `papel_destino: 01-gestor`. Vive em `../casos/CASO-YYYY-NNNN-shortslug/entregas/EN-NNN.yaml`.
2. **Leitura.** Lê `carga.routing_rationale` primeiro (o 3-line plan do orquestrador). Depois lê o payload específico (`tarefa_propria`, `tarefa_distribuir`, `demanda_extraordinaria` ou outro).
3. **Decisão.**
   - Se for `demanda_extraordinaria`, decide: criar nova categoria no board 47, recusar, ou redirecionar.
   - Se for tarefa normal, monta o `kanboard_card_request` (categoria, responsável, prazo, coluna destino) usando `referencias/projetos-cgte.yaml` e `referencias/taxonomia-board-47.md`.
4. **HITL.** O bridge `../_pontes/kanboard/` mostra o `kanboard_card_request` final na CLI. Confere campo por campo. Sem autopilot.
5. **Aprovação ou recusa.** Aprovado, registra `hitl_aprovado_em` e `hitl_aprovado_por` na carga e chama o bridge. Recusado, devolve a entrega para o orquestrador ou para o especialista de origem com motivo.
6. **Saída.** Após o bridge executar, atualiza o status da entrega para `done` e adiciona `resultado_bridge` (card_id + link).

## Ordem de leitura ao assumir o papel

| Passo | Arquivo |
|-------|---------|
| 1 | `contrato/identidade.md` -- quem o gestor é, modelo mental |
| 2 | `contrato/regras.md` -- HITL, casos de borda, conflitos |
| 3 | `contrato/exemplos.md` -- decisões reais de aprovação |
| 4 | `contrato/entrega.md` -- formato da chamada para o bridge |
| 5 | `../_configuracao/ESQUEMA_ENTREGA.md` -- schema canônico do envelope |
| 6 | `referencias/taxonomia-board-47.md` -- categorias ativas |

## Recursos compartilhados

| Recurso | Local | Para que |
|---------|-------|----------|
| Schema canônico do envelope | `../_configuracao/ESQUEMA_ENTREGA.md` | Validar entregas que chegam |
| Regras de negócio (HITL, gates) | `../_configuracao/regras-negocio.md` | Saber quando HITL é obrigatório |
| Padrões de qualidade | `../_configuracao/padroes-qualidade.md` | Checklist do que conta como entrega boa |
| Chains válidas | `../_configuracao/cadeias-fluxo.yaml` | Conferir próximos-passos válidos a partir de 01-gestor |
| Voz CGTE / Marquito | `../_configuracao/voz/` | Tom para comentários no board em nome da CGTE |
| Bridge Kanboard | `../_pontes/kanboard/` | Operações de escrita no board institucional |
| Bridge GitLab | `../_pontes/gitlab/` | Sync git com HITL em merges sensíveis |
| Trabalho em curso | `../casos/` | Onde cada entrega mora durante a vida útil |
