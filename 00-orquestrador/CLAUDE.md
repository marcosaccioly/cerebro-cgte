# 00-orquestrador

Workspace MWP do especialista orquestrador do cerebro-cgte. Ponto de entrada do sistema: toda demanda nova passa por aqui antes de virar entrega para outro especialista.

## Folder Map

```
00-orquestrador/
├── CLAUDE.md          (você está aqui)
├── CONTEXTO.md        (fluxo de trabalho dentro deste workspace)
├── README.md
├── contrato/          (contrato local do papel)
│   ├── identidade.md  (quem o orquestrador é, o que possui)
│   ├── regras.md      (sempre / nunca / casos de borda)
│   ├── exemplos.md    (três entregas reais de roteamento)
│   └── entrega.md     (formato da entrega de saída)
├── configuracao/
│   └── questionario.md  (onboarding deste papel)
├── etapas/            (vazio em V0 -- stages desenhadas em V1+)
├── entrada/           (demandas capturadas ainda não roteadas)
└── referencias/
    └── arvore-decisao-roteamento.md
```

## Triggers

| Comando | Ação |
|---------|------|
| `setup` | Roda o questionário em `configuracao/questionario.md` |
| `status` | Mostra estado dos contratos e demandas em `entrada/` |
| `nova-demanda` | Captura uma demanda nova e produz a entrega de roteamento |

## Routing

| Tarefa | Ir para |
|--------|---------|
| Entender o papel do orquestrador | `contrato/identidade.md` |
| Aplicar regras de roteamento | `contrato/regras.md` |
| Ver exemplos de entregas reais | `contrato/exemplos.md` |
| Formato do envelope de saída | `contrato/entrega.md` |
| Triagem estruturada (decisão ambígua) | `referencias/arvore-decisao-roteamento.md` |

## O que carregar

| Tarefa | Carregar | NÃO carregar |
|--------|----------|--------------|
| Rotear demanda nova | `contrato/identidade.md` + `contrato/regras.md` + `../_configuracao/ESQUEMA_ENTREGA.md` + `../_configuracao/cadeias-fluxo.yaml` | `etapas/`, `referencias/` (a menos que a decisão seja ambígua) |
| Decidir entre dois destinos | os quatro acima + `referencias/arvore-decisao-roteamento.md` | exemplos completos |
| Onboarding deste papel | `configuracao/questionario.md` + `contrato/identidade.md` | tudo o resto |

## Etapas

Em V0, o trabalho do orquestrador é uma decisão única (capturar → rotear) e o workspace não tem stages internos. `etapas/` está vazio.

Em V1+, conforme o papel ganhar nuance (filtros automáticos, classificadores, escalonamento), `etapas/` pode receber stages como `01-capturar/`, `02-classificar/`, `03-empacotar/`. O desenho vai junto com a expansão.

## Relação com cerebro-cgte

Workspace dentro do cerebro-cgte (container de 9 workspaces MWP). Infra compartilhada vive na raiz:

- `../_configuracao/` -- schemas, regras de negócio, padrões, voz
- `../_pontes/` -- bridges Kanboard / GitLab
- `../casos/` -- trabalho em curso, com entregas em YAML
- `../operacoes/` -- friday review e rotinas

Mapa geral em `../CLAUDE.md`.
