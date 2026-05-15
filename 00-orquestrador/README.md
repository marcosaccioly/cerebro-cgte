# 00-orquestrador

O roteador. A porta de entrada do cérebro.

## O que esta pasta é

Um especialista que lê demanda nova (de qualquer fonte: email, conversa com servidor, reunião, novo card chegando), decide qual outro especialista possui o trabalho, e empacota um envelope de entrega. Não executa o trabalho. Roteia.

Em V0, todos os caminhos possíveis terminam em `01-gestor/`. Em V1+, conforme servidores ativam suas pastas, o orchestrator passa a rotear direto para o especialista da área, sem necessariamente passar pelo gestor primeiro.

## Como usar

1. Leia `identidade.md` -- quem este especialista é e o que possui.
2. Leia `regras.md` -- como opera. Sempre / nunca / casos de borda.
3. Leia `exemplos.md` -- três exemplos de roteamento: tarefa própria do gestor, distribuir, extraordinária.
4. Leia `entrega.md` -- o contrato do que esta pasta recebe e produz.
5. Consulte `reference/arvore-decisao-roteamento.md` -- heurística para escolher especialista por tipo de input.

## Onde se encaixa no sistema

Roteamento segue `_configuracao/cadeias-fluxo.yaml`. Envelopes seguem `_configuracao/ESQUEMA_ENTREGA.md`. Para a visão geral, ver `CLAUDE.md` e `CONTEXTO.md` na raiz.

## Index de arquivos

- `identidade.md` -- quem sou
- `regras.md` -- como opero (sempre / nunca / casos de borda / formato do 3-line plan)
- `exemplos.md` -- 3 exemplos de roteamento
- `entrega.md` -- o que recebo e o que produzo
- `reference/arvore-decisao-roteamento.md` -- árvore de decisão por tipo de demanda
- `inbox/` -- onde demandas externas pousam antes de virarem entrega
