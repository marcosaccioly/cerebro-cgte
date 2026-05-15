# 01-gestor

Marquito como gestor. O especialista que decide e aprova.

## O que esta pasta é

O ponto onde demanda roteada vira decisão concreta: vira card no Kanboard? Com qual categoria? Com qual responsável? Em que coluna? Toda decisão passa por aqui em V0. Em V1+, demandas claramente de uma área podem começar a passar direto pelo especialista da área, mas o gestor continua sendo o aprovador final de gates institucionais.

## Como usar

1. Leia `CLAUDE.md` -- folder map + triggers + routing deste workspace.
2. Leia `contrato/identidade.md` -- quem o gestor é, no contexto do workspace.
3. Leia `contrato/regras.md` -- como decide. Sempre / nunca / casos de borda.
4. Leia `contrato/exemplos.md` -- três exemplos das chains V0 da perspectiva do gestor.
5. Leia `contrato/entrega.md` -- o que recebe e o que produz.
6. Consulte `referencias/taxonomia-board-47.md` -- as categorias ativas do board 47.
7. Consulte `referencias/projetos-cgte.yaml` -- projetos do Kanboard institucional e mapeamento.

## Onde se encaixa

Em V0, o gestor recebe entrega de `../00-orquestrador/` (sempre) e produz chamada a `../_pontes/kanboard/` (sempre, com HITL). Em V1+, começa a produzir também entregas para especialistas ativos quando a tarefa vai ser executada por outro servidor com workspace-especialista.

## Index de arquivos

- `CLAUDE.md` -- mapa local do workspace
- `CONTEXTO.md` -- fluxo de trabalho deste workspace
- `contrato/identidade.md` -- quem sou (como gestor)
- `contrato/regras.md` -- como decido (sempre / nunca / casos de borda)
- `contrato/exemplos.md` -- 3 exemplos das chains V0 da perspectiva do gestor
- `contrato/entrega.md` -- o que recebo e o que produzo
- `configuracao/questionario.md` -- onboarding deste papel (sucessão / replicação)
- `referencias/taxonomia-board-47.md` -- categorias ativas do board 47
- `referencias/projetos-cgte.yaml` -- projetos Kanboard e mapeamento
- `saida/` -- onde o gestor deposita rascunhos antes de aprovar HITL
- `etapas/` -- (vazio em V0) stages internas em V1+
