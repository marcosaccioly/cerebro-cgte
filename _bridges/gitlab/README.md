# _bridges/gitlab

Bridge que envelopa `git push` / `git pull` com HITL em merges sensiveis. Nao e especialista. E infraestrutura.

> O nome "gitlab" e historico: o destino institucional planejado e `gitlab.ifes.edu.br/cefor/cerebro-cgte.git`. Em fevereiro de 2026 o repo local aponta para `github.com/marcosaccioly/cerebro-cgte.git`. O bridge funciona com qualquer remote git. Apos a migracao para GitLab, o nome da pasta pode permanecer; o que importa e o remote configurado em `.env` / `git remote -v`.

## Para que serve

O cerebro-cgte versiona tudo no git: handoffs YAML, cases, decisoes, voz, business rules. Isso e a auditoria. Mas:

- Nao e desejavel auto-merge cego em arquivos sensiveis (voz, regras de negocio, schema, credenciais).
- E desejavel auto-pull / auto-push em arquivos de trabalho (handoffs novos, atualizacoes de case, novos cards).

O bridge fica no meio: detecta arquivos sensiveis no diff, pede HITL, e so depois aplica.

## Regras de auto vs HITL

Em `sync.md` esta a tabela autoritativa. Resumo:

- **Auto-merge / auto-push:** arquivos em `cases/`, `00_orchestrator/inbox/`, `01_gestor/output/`, READMEs novos de esqueleto.
- **HITL obrigatorio:** mudancas em `_config/voice/*`, `_config/business-rules.md`, `_config/HANDOFF_SCHEMA.md`, `_config/quality-standards.md`, `.env*` (que nem deveria entrar -- coberto por .gitignore).
- **Em conflito de merge:** sempre HITL, independente do arquivo. Conflito significa duas pessoas / duas sessoes mexeram no mesmo lugar; precisa de decisao humana.

## Uso

```
bun run _bridges/gitlab/sync.ts pull
bun run _bridges/gitlab/sync.ts push
bun run _bridges/gitlab/sync.ts status
```

`pull` busca remote, mostra diff, pede HITL se houver arquivo sensivel mudado, e ai sim merge.

`push` mostra os arquivos changed local, pede HITL se houver arquivo sensivel, e ai sim push.

`status` mostra estado sem tocar nada.

## Sem deploy / sem CI

V0 nao tem CI. O workspace nao precisa rodar nada no servidor. O `sync` e local. Se a chefia quiser audit log centralizado, vem em V1.X via webhook do GitLab para algum endpoint interno.

## Arquivos

- `sync.md` -- regras autoritativas de sensibilidade + fluxo de HITL.
- `sync.ts` -- implementacao TypeScript usando comandos git locais.
