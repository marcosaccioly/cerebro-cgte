# Análise pendente — síntese do histórico da CGTE

> **Status:** PENDENTE (gestor vai rodar depois). Registrado em 2026-06-26.
> Objetivo: a partir do corpus de tarefas do board 47, entender os **tipos de trabalho
> que a CGTE faz** e gerar insumo para decidir como seguir em frente (inclusive o
> redesenho do uso do Kanboard).

## Insumos (já exportados nesta pasta)

- `eixo-*.md` — tarefas **categorizadas** (rótulo dado pela própria equipe). Atenção:
  ~520 das 574 estão sob a taxonomia ANTIGA (`eixo-legado.md`, prefixo `x_`) — é o
  registro mais rico do que a CGTE de fato fez.
- `sem-categoria-01..04.md` — 981 tarefas **sem categoria**; o eixo deve ser **inferido
  pelo título/descrição**.
- `INDEX.md` — índice com contagens.

Total: 1.555 tarefas (108 abertas + 1.447 fechadas). ~880 KB — grande demais para ler de
uma vez; processar em fatias.

## Como rodar (sugestão: fan-out de leitores em paralelo)

1. Disparar um leitor por fatia (cada `eixo-*.md` e cada `sem-categoria-*.md`). Para os
   chunks sem categoria, o leitor **infere o eixo** de cada tarefa pelo conteúdo.
2. Cada leitor devolve, de forma estruturada: por eixo, os **tipos de trabalho recorrentes**
   + 3-5 **exemplos reais** (com #id) que ilustram cada tipo.
3. Fazer o merge num documento único, consolidando por eixo
   (design-educacional, audiovisual, comunicação, acessibilidade-libras, tecnologia,
   institucional, ciência) e marcando o que é legado.
4. Fechar com uma leitura de gestão: o que esses dados sugerem sobre **como a CGTE deveria
   usar o Kanboard** (ver memória `cgte-frentes-de-melhoria`).

> Pode ser feito com a ferramenta de agentes (fan-out) ou, se o gestor optar, via workflow.
> O corpus é regenerável: `bun run _pontes/kanboard/exportar-historico.ts`.

## Saída

- **Decisão pendente do gestor:** onde guardar a síntese.
  - Opção A (sugerida): `historico-cgte/sintese-por-eixo.md` (junto do corpus).
  - Opção B: distribuída em cada `<workspace>/referencias/` (ex.: `02-design-educacional/referencias/`).

## Gatilho

Quando o gestor disser para rodar, executar os passos acima. Confirmar a Opção A/B antes de escrever.
