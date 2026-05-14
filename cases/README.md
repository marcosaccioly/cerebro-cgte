# cases/

Cada demanda real vira um case aqui. Um case por tema.

## Nomeacao

`CASE-YYYY-NNNN-shortslug/`

- `YYYY` -- ano em 4 digitos.
- `NNNN` -- sequencial dentro do ano, 4 digitos zero-padded.
- `shortslug` -- 1-3 palavras em kebab-case que identifiquem o tema.

Exemplos: `CASE-2026-0001-validacao-v0`, `CASE-2026-0007-slides-mooc-x`, `CASE-2026-0023-noticia-programa-y`.

## Estrutura de cada case

```
CASE-YYYY-NNNN-shortslug/
|-- case.md                       state file -- diz onde a demanda esta agora
|-- handoffs/
|   |-- HO-001.yaml
|   |-- HO-002.yaml
|   `-- ...
`-- artifacts/                    rascunhos, comunicacoes, materiais produzidos no case
    `-- .gitkeep
```

## Ordem de leitura ao abrir um case pela primeira vez

1. `case.md` -- estado atual, parties, datas, status.
2. Secao "Log de handoffs" em `case.md` -- resumo cronologico.
3. `handoffs/HO-001.yaml` em diante, em ordem.
4. `artifacts/` -- abra os artefatos quando os handoffs apontarem.

Nao leia artefatos antes dos handoffs. Os handoffs sao a narrativa; os artefatos sao os produtos.

## Quando um case "termina"

Status muda para `closed` (deu certo) ou `dead` (recusada / abandonada) em `case.md`. Cases nao sao deletados. Servem como historico para reuse-before-rebuild quando outra demanda parecida aparecer.

## Cases pre-carregados (V0)

- `CASE-2026-0001-validacao-v0/` -- case didatico que mostra a equipe como uma demanda real percorre os agentes nas 3 chains V0. Nao apagar.
