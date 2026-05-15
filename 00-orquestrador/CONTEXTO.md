# CONTEXTO -- 00-orquestrador

Como uma demanda flui por este workspace.

## Fluxo da tarefa

1. **Captura.** A demanda chega de fora (email, conversa, reunião da coordenação, notificação do board 47) e é registrada como texto em `entrada/`.
2. **Triagem.** Aplica o 3-line plan (situação / especialista / por que) usando `contrato/regras.md` e, se a decisão for ambígua, `referencias/arvore-decisao-roteamento.md`.
3. **Validação da chain.** Confirma em `../_configuracao/cadeias-fluxo.yaml` que o `papel_destino` escolhido é um próximo-passo válido a partir de `00-orquestrador`.
4. **Empacotamento.** Escreve a entrega seguindo `contrato/entrega.md` + o envelope canônico em `../_configuracao/ESQUEMA_ENTREGA.md`. Salva em `../casos/CASO-YYYY-NNNN-shortslug/entregas/EN-001.yaml`.
5. **Saída.** A demanda sai de `entrada/` (arquivada ou apagada) e o case fica visível para o destinatário em `../casos/`.

## Ordem de leitura ao assumir o papel

| Passo | Arquivo |
|-------|---------|
| 1 | `contrato/identidade.md` -- quem o orquestrador é |
| 2 | `contrato/regras.md` -- sempre / nunca / casos de borda |
| 3 | `contrato/exemplos.md` -- três entregas reais |
| 4 | `contrato/entrega.md` -- formato da saída |
| 5 | `../_configuracao/ESQUEMA_ENTREGA.md` -- schema canônico do envelope |

## Recursos compartilhados

| Recurso | Local | Para que |
|---------|-------|----------|
| Schema canônico do envelope | `../_configuracao/ESQUEMA_ENTREGA.md` | Validar campos obrigatórios e formatos de carga |
| Chains válidas | `../_configuracao/cadeias-fluxo.yaml` | Confirmar que `papel_destino` é próximo-passo válido |
| Voz CGTE / Marquito | `../_configuracao/voz/` | Tom para entregas que viram comunicação externa |
| Bridges | `../_pontes/` | Onde a entrega aprovada é executada (Kanboard / GitLab) |
| Trabalho em curso | `../casos/` | Onde cada demanda mora durante a vida útil |
