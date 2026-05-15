# 01-gestor

Marquito como gestor. O especialista que decide e aprova.

## O que esta pasta é

O ponto onde demanda roteada vira decisão concreta: vira card no Kanboard? Com qual categoria? Com qual responsável? Em que coluna? Toda decisão passa por aqui em V0. Em V1+, demandas claramente de uma área podem começar a passar direto pelo especialista da área, mas o gestor continua sendo o aprovador final de gates institucionais.

## Como usar

1. Leia `identidade.md` -- quem o gestor é, no contexto do workspace.
2. Leia `regras.md` -- como decide. Sempre / nunca / casos de borda.
3. Leia `exemplos.md` -- três exemplos das chains V0 da perspectiva do gestor.
4. Leia `entrega.md` -- o que recebe e o que produz.
5. Consulte `reference/taxonomia-board-47.md` -- as categorias ativas do board 47.
6. Consulte `reference/projetos-cgte.yaml` -- projetos do Kanboard institucional e mapeamento.

## Onde se encaixa

Em V0, o gestor recebe entrega de `00-orquestrador` (sempre) e produz chamada a `_pontes/kanboard/` (sempre, com HITL). Em V1+, começa a produzir também entregas para especialistas ativos quando a tarefa vai ser executada por outro servidor com pasta-especialista.

## Index de arquivos

- `identidade.md` -- quem sou (como gestor)
- `regras.md` -- como decido (sempre / nunca / casos de borda)
- `exemplos.md` -- 3 exemplos das chains V0 da perspectiva do gestor
- `entrega.md` -- o que recebo e o que produzo
- `reference/taxonomia-board-47.md` -- categorias ativas do board 47
- `reference/projetos-cgte.yaml` -- projetos Kanboard e mapeamento
- `output/` -- onde o gestor deposita rascunhos antes de aprovar HITL
