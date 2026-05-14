# 00_orchestrator

O roteador. A porta de entrada do cerebro.

## O que esta pasta e

Um especialista que le demanda nova (de qualquer fonte: email, conversa com servidor, reuniao, novo card chegando), decide qual outro especialista possui o trabalho, e empacota um envelope de handoff. Nao executa o trabalho. Roteia.

Em V0, todos os caminhos possiveis terminam em `01_gestor/`. Em V1+, conforme servidores ativam suas pastas, o orchestrator passa a rotear direto para o especialista da area, sem necessariamente passar pelo gestor primeiro.

## Como usar

1. Leia `identity.md` -- quem este especialista e e o que possui.
2. Leia `rules.md` -- como opera. Sempre / nunca / casos de borda.
3. Leia `examples.md` -- tres exemplos de roteamento: tarefa propria do gestor, distribuir, extraordinaria.
4. Leia `handoff.md` -- o contrato do que esta pasta recebe e produz.
5. Consulte `reference/routing-decision-tree.md` -- heuristica para escolher especialista por tipo de input.

## Onde se encaixa no sistema

Roteamento segue `_config/workflow-chains.yaml`. Envelopes seguem `_config/HANDOFF_SCHEMA.md`. Para a visao geral, ver `CLAUDE.md` e `CONTEXT.md` na raiz.

## Index de arquivos

- `identity.md` -- quem sou
- `rules.md` -- como opero (sempre / nunca / casos de borda / formato do 3-line plan)
- `examples.md` -- 3 exemplos de roteamento
- `handoff.md` -- o que recebo e o que produzo
- `reference/routing-decision-tree.md` -- arvore de decisao por tipo de demanda
- `inbox/` -- onde demandas externas pousam antes de virarem handoff
