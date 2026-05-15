# 00-orquestrador

O roteador. A porta de entrada do cérebro.

## O que esta pasta é

Um especialista que lê demanda nova (de qualquer fonte: email, conversa com servidor, reunião, novo card chegando), decide qual outro especialista possui o trabalho, e empacota um envelope de entrega. Não executa o trabalho. Roteia.

Em V0, todos os caminhos possíveis terminam em `../01-gestor/`. Em V1+, conforme servidores ativam suas pastas, o orquestrador passa a rotear direto para o especialista da área, sem necessariamente passar pelo gestor primeiro.

## Como usar

1. Leia `CLAUDE.md` -- folder map + triggers + routing deste workspace.
2. Leia `contrato/identidade.md` -- quem este especialista é e o que possui.
3. Leia `contrato/regras.md` -- como opera. Sempre / nunca / casos de borda.
4. Leia `contrato/exemplos.md` -- três exemplos de roteamento: tarefa própria do gestor, distribuir, extraordinária.
5. Leia `contrato/entrega.md` -- o contrato do que esta pasta recebe e produz.
6. Consulte `referencias/arvore-decisao-roteamento.md` -- heurística para escolher especialista por tipo de input.

## Onde se encaixa no sistema

Roteamento segue `../_configuracao/cadeias-fluxo.yaml`. Envelopes seguem `../_configuracao/ESQUEMA_ENTREGA.md`. Para a visão geral, ver `../CLAUDE.md` e `../CONTEXTO.md` na raiz do cerebro-cgte.

## Index de arquivos

- `CLAUDE.md` -- mapa local do workspace
- `CONTEXTO.md` -- fluxo de trabalho deste workspace
- `contrato/identidade.md` -- quem sou
- `contrato/regras.md` -- como opero (sempre / nunca / casos de borda / formato do 3-line plan)
- `contrato/exemplos.md` -- 3 exemplos de roteamento
- `contrato/entrega.md` -- o que recebo e o que produzo
- `configuracao/questionario.md` -- onboarding deste papel
- `referencias/arvore-decisao-roteamento.md` -- árvore de decisão por tipo de demanda
- `entrada/` -- onde demandas externas pousam antes de virarem entrega
- `etapas/` -- (vazio em V0) stages internas em V1+
