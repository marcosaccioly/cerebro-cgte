# _pontes/gitlab

Bridge que envelopa `git push` / `git pull` com HITL em merges sensiveis. Não e especialista. E infraestrutura.

> O nome "gitlab" e histórico: o destino institucional planejado e `gitlab.ifes.edu.br/cefor/cerebro-cgte.git`. Em fevereiro de 2026 o repo local aponta para `github.com/marcosaccioly/cerebro-cgte.git`. O bridge funciona com qualquer remote git. Após a migração para GitLab, o nome da pasta pode permanecer; o que importa e o remote configurado em `.env` / `git remote -v`.

## Para que serve

O cerebro-cgte versiona tudo no git: entregas YAML, cases, decisões, voz, business rules. Isso e a auditoria. Mas:

- Não e desejavel auto-merge cego em arquivos sensiveis (voz, regras de negocio, schema, credenciais).
- E desejavel auto-pull / auto-push em arquivos de trabalho (entregas novos, atualizações de case, novos cards).

O bridge fica no meio: detecta arquivos sensiveis no diff, pede HITL, e so depois aplica.

## Regras de auto vs HITL

Em `sincronizar.md` esta a tabela autoritativa. Resumo:

- **Auto-merge / auto-push:** arquivos em `casos/`, `00-orquestrador/entrada/`, `01-gestor/saida/`, READMEs novos de esqueleto.
- **HITL obrigatório:** mudanças em `_configuracao/voz/*`, `_configuracao/regras-negocio.md`, `_configuracao/ESQUEMA_ENTREGA.md`, `_configuracao/padroes-qualidade.md`, `.env*` (que nem deveria entrar -- coberto por .gitignore).
- **Em conflito de merge:** sempre HITL, independente do arquivo. Conflito significa duas pessoas / duas sessões mexeram no mesmo lugar; precisa de decisão humana.

## Uso

```
bun run _pontes/gitlab/sincronizar.ts pull
bun run _pontes/gitlab/sincronizar.ts push
bun run _pontes/gitlab/sincronizar.ts status
```

`pull` busca remote, mostra diff, pede HITL se houver arquivo sensivel mudado, e ai sim merge.

`push` mostra os arquivos changed local, pede HITL se houver arquivo sensivel, e ai sim push.

`status` mostra estado sem tocar nada.

## Sem deploy / sem CI

V0 não tem CI. O workspace não precisa rodar nada no servidor. O `sync` e local. Se a chefia quiser audit log centralizado, vem em V1.X via webhook do GitLab para algum endpoint interno.

## Arquivos

- `sincronizar.md` -- regras autoritativas de sensibilidade + fluxo de HITL.
- `sincronizar.ts` -- implementação TypeScript usando comandos git locais.
