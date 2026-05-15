# sync -- regras de sensibilidade e HITL

Fonte autoritativa das regras que `sincronizar.ts` aplica. Mudanças aqui são mudanças no comportamento.

## Lista de arquivos sensiveis

Arquivos que disparam HITL obrigatório antes de auto-merge ou auto-push:

```
_configuracao/voz/cgte.md
_configuracao/voz/marquito.md
_configuracao/regras-negocio.md
_configuracao/ESQUEMA_ENTREGA.md
_configuracao/padroes-qualidade.md
_configuracao/cadeias-fluxo.yaml
.env
.env.*
```

Patterns / globs equivalentes:

```
_configuracao/voz/**
_configuracao/regras-negocio.md
_configuracao/ESQUEMA_ENTREGA.md
_configuracao/padroes-qualidade.md
_configuracao/cadeias-fluxo.yaml
.env*
```

`.env*` so deveria ser visto se alguem cometeu erro de commit. O .gitignore cobre, mas o bridge dobra a guarda.

## Arquivos nao-sensiveis (auto-merge / auto-push OK)

Tudo que não bate com a lista acima. Em prática:

```
casos/**
00-orquestrador/**
01-gestor/identidade.md, regras.md, exemplos.md, entrega.md, README.md
01-gestor/referencias/**
01-gestor/saida/**
02-educacao/** a 08-ciencia/**
operacoes/**
README.md (raiz)
CLAUDE.md, CONTEXTO.md
_pontes/kanboard/operacoes/**
_pontes/kanboard/projetos-cgte.yaml, usuarios-cgte.yaml
```

Os arquivos `_pontes/kanboard/facade.ts` e `_pontes/gitlab/sincronizar.ts` em si são infra -- não são "sensiveis institucionais" no sentido do HITL, mas tem que rodar sempre. Em uma equipe maior, alterações neles passariam por PR. Em V0 com 1 dev (Marquito), auto-merge OK.

## Fluxo de HITL no sync

### `pull`

1. `git fetch` -- traz remote.
2. `git diff HEAD..origin/<branch> --name-only` -- lista arquivos que mudariam.
3. Filtra a lista contra a regra de sensibilidade.
4. Se houver arquivo sensivel: mostra o diff completo dos arquivos sensiveis, pede HITL (`y` para aceitar, `n` para abortar).
5. Se não houver: auto-merge (fast-forward) sem perguntar.
6. Se houver conflito de merge (independente de sensibilidade): HITL com diff dos arquivos em conflito.

### `push`

1. `git status --short` + `git diff --cached --name-only` -- lista arquivos staged.
2. Filtra contra a regra de sensibilidade.
3. Se houver arquivo sensivel: mostra o diff dos sensiveis, pede HITL.
4. Se não houver: auto-push.

### `status`

Read-only. Mostra estado local e remote. Sem HITL.

## O que o HITL mostra

Padrão consistente com o bridge Kanboard: imprime o conteúdo, pede `y` para confirmar (qualquer outra coisa cancela).

```
=== HITL git push ===
Arquivos sensiveis modificados:
  _configuracao/voz/cgte.md
  _configuracao/regras-negocio.md

Diff:
(diff -u completo dos sensiveis)

Aprovar push? Digite `y` para confirmar, qualquer outra coisa cancela.
> 
```

## Onde a regra evolui

- Adicionou novo arquivo sensivel? Atualize a lista neste arquivo. `sincronizar.ts` carrega a lista daqui (parseada do markdown ou copiada na implementação).
- Mudança não trivial nas regras: discutir no `revisao-sexta.md` antes.
- Em V1.X, se o time crescer, pode entrar PR no GitLab Ifes como gate adicional (substitui HITL local em parte). Mas isso e V1.X+.
