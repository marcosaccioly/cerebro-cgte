# CONTEXTO -- 02-educacao

Como o trabalho vai fluir por este workspace **quando ele for ativado** (V1+).

## Status atual: ESQUELETO

Em V0, este workspace é placeholder. Toda demanda da área de **Educação** ainda passa por `../01-gestor/` para distribuição manual.

A ativação acontece quando:

1. O servidor responsável pela área entra (existe e é o owner do conteúdo).
2. Existe pelo menos 1 chain V1+ em `../_configuracao/cadeias-fluxo.yaml` que termina em `02-educacao`.
3. Servidor + gestor sentam ~3h para preencher `contrato/identidade.md`, `contrato/regras.md`, `contrato/exemplos.md`, `contrato/entrega.md`.

## Fluxo previsto (V1+, esboço)

1. **Entrada.** Uma entrega chega de `../00-orquestrador/` (ou de outro especialista) com `papel_destino: 02-educacao`. Vive em `../casos/CASO-YYYY-NNNN-shortslug/entregas/EN-NNN.yaml`.
2. **Leitura.** Lê o `routing_rationale` e a carga específica. Confere se a área cobre a demanda (vs `demanda_extraordinaria`).
3. **Execução.** Faz o trabalho da área (a desenhar em V1+).
4. **Saída.** Produz a próxima entrega: para `../01-gestor/` (HITL + Kanboard) ou direto para um bridge se a chain permitir.

## Ordem de leitura ao assumir o papel (V1+)

| Passo | Arquivo |
|-------|---------|
| 1 | `contrato/identidade.md` |
| 2 | `contrato/regras.md` |
| 3 | `contrato/exemplos.md` |
| 4 | `contrato/entrega.md` |
| 5 | `../_configuracao/ESQUEMA_ENTREGA.md` |

## Recursos compartilhados

| Recurso | Local | Para que |
|---------|-------|----------|
| Schema canônico do envelope | `../_configuracao/ESQUEMA_ENTREGA.md` | Validar entregas que chegam |
| Padrões de qualidade | `../_configuracao/padroes-qualidade.md` | Checklist do que conta como entrega boa |
| Chains válidas | `../_configuracao/cadeias-fluxo.yaml` | Conferir próximos-passos válidos |
| Voz CGTE | `../_configuracao/voz/cgte.md` | Tom para entregas que viram comunicação externa |
| Trabalho em curso | `../casos/` | Onde cada entrega mora |

## Categorias do board 47 que este papel cobre

- MOOC
- Conteúdo Educacional
- Formação e Capacitação
- Programação Visual Educacional