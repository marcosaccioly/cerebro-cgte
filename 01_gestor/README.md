# 01_gestor

Marquito como gestor. O especialista que decide e aprova.

## O que esta pasta e

O ponto onde demanda roteada vira decisao concreta: vira card no Kanboard? Com qual categoria? Com qual responsavel? Em que coluna? Toda decisao passa por aqui em V0. Em V1+, demandas claramente de uma area podem comecar a passar direto pelo especialista da area, mas o gestor continua sendo o aprovador final de gates institucionais.

## Como usar

1. Leia `identity.md` -- quem o gestor e, no contexto do workspace.
2. Leia `rules.md` -- como decide. Sempre / nunca / casos de borda.
3. Leia `examples.md` -- tres exemplos das chains V0 da perspectiva do gestor.
4. Leia `handoff.md` -- o que recebe e o que produz.
5. Consulte `reference/taxonomia-board-47.md` -- as categorias ativas do board 47.
6. Consulte `reference/projetos-cgte.yaml` -- projetos do Kanboard institucional e mapeamento.

## Onde se encaixa

Em V0, o gestor recebe handoff de `00_orchestrator` (sempre) e produz chamada a `_bridges/kanboard/` (sempre, com HITL). Em V1+, comeca a produzir tambem handoffs para especialistas ativos quando a tarefa vai ser executada por outro servidor com pasta-especialista.

## Index de arquivos

- `identity.md` -- quem sou (como gestor)
- `rules.md` -- como decido (sempre / nunca / casos de borda)
- `examples.md` -- 3 exemplos das chains V0 da perspectiva do gestor
- `handoff.md` -- o que recebo e o que produzo
- `reference/taxonomia-board-47.md` -- categorias ativas do board 47
- `reference/projetos-cgte.yaml` -- projetos Kanboard e mapeamento
- `output/` -- onde o gestor deposita rascunhos antes de aprovar HITL
