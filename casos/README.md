# casos/

Cada demanda real vira um case aqui. Um case por tema.

## Nomeacao

`CASO-YYYY-NNNN-shortslug/`

- `YYYY` -- ano em 4 digitos.
- `NNNN` -- sequencial dentro do ano, 4 digitos zero-padded.
- `shortslug` -- 1-3 palavras em kebab-case que identifiquem o tema.

Exemplos: `CASO-2026-0001-validacao-v0`, `CASO-2026-0007-slides-mooc-x`, `CASO-2026-0023-noticia-programa-y`.

## Estrutura de cada case

```
CASO-YYYY-NNNN-shortslug/
|-- caso.md                       state file -- diz onde a demanda esta agora
|-- entregas/
|   |-- EN-001.yaml
|   |-- EN-002.yaml
|   `-- ...
`-- artefatos/                    rascunhos, comunicações, materiais produzidos no case
    `-- .gitkeep
```

## Ordem de leitura ao abrir um case pela primeira vez

1. `caso.md` -- estado atual, parties, datas, status.
2. Seção "Log de entregas" em `caso.md` -- resumo cronologico.
3. `entregas/EN-001.yaml` em diante, em ordem.
4. `artefatos/` -- abra os artefatos quando os entregas apontarem.

Não leia artefatos antes dos entregas. Os entregas são a narrativa; os artefatos são os produtos.

## Quando um case "termina"

Status muda para `closed` (deu certo) ou `dead` (recusada / abandonada) em `caso.md`. Cases não são deletados. Servem como histórico para reuse-before-rebuild quando outra demanda parecida aparecer.

## Cases pre-carregados (V0)

- `CASO-2026-0001-validacao-v0/` -- case didático que mostra a equipe como uma demanda real percorre os agentes nas 3 chains V0. Não apagar.
