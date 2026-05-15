# 01-gestor

Workspace MWP do especialista gestor do cerebro-cgte. Recebe entregas roteadas, decide se viram card no Kanboard, e aprova HITL antes de qualquer escrita externa.

## Folder Map

```
01-gestor/
├── CLAUDE.md          (você está aqui)
├── CONTEXTO.md        (fluxo de trabalho dentro deste workspace)
├── README.md
├── contrato/          (contrato local do papel)
│   ├── identidade.md  (quem o gestor é, o que possui)
│   ├── regras.md      (sempre / nunca / casos de borda)
│   ├── exemplos.md    (decisões reais de aprovação HITL)
│   └── entrega.md     (formato da entrega de saída para o bridge)
├── configuracao/
│   └── questionario.md  (onboarding deste papel)
├── etapas/            (vazio em V0 -- stages desenhadas em V1+)
├── saida/             (estado intermediário antes do bridge -- ex: payload aprovado aguardando rede)
└── referencias/
    ├── projetos-cgte.yaml   (IDs de projeto do board institucional)
    └── taxonomia-board-47.md (categorias ativas do board principal)
```

## Triggers

| Comando | Ação |
|---------|------|
| `setup` | Roda o questionário em `configuracao/questionario.md` |
| `status` | Mostra estado dos contratos e cards aprovados aguardando bridge |
| `aprovar-hitl` | Revisa um `kanboard_card_request` e marca aprovação |

## Routing

| Tarefa | Ir para |
|--------|---------|
| Entender o papel do gestor | `contrato/identidade.md` |
| Aplicar regras de HITL e aprovação | `contrato/regras.md` |
| Ver decisões reais de aprovação | `contrato/exemplos.md` |
| Formato da entrega para o bridge | `contrato/entrega.md` |
| Conferir taxonomia do board 47 | `referencias/taxonomia-board-47.md` |
| Mapear projeto/IDs do Kanboard | `referencias/projetos-cgte.yaml` |

## O que carregar

| Tarefa | Carregar | NÃO carregar |
|--------|----------|--------------|
| Aprovar HITL de criação de card | `contrato/regras.md` + `contrato/entrega.md` + entrega de entrada + `referencias/projetos-cgte.yaml` | `contrato/exemplos.md` (só se ambíguo) |
| Decidir `demanda_extraordinaria` | `contrato/regras.md` + entrega de entrada + `referencias/taxonomia-board-47.md` | exemplos completos |
| Distribuir tarefa para a equipe | `contrato/regras.md` + `referencias/projetos-cgte.yaml` + `../_configuracao/cadeias-fluxo.yaml` | `contrato/exemplos.md` (só se ambíguo) |
| Onboarding deste papel | `configuracao/questionario.md` + `contrato/identidade.md` | tudo o resto |

## Etapas

Em V0, o gestor faz revisão + decisão + chamada de bridge -- sem stages internos. `etapas/` está vazio.

Em V1+, conforme o trabalho do gestor ganhar estrutura (ex: triagem prévia automatizada, escalonamento, dashboards), `etapas/` pode receber stages como `01-revisar/`, `02-aprovar/`, `03-emitir/`.

## Relação com cerebro-cgte

Workspace dentro do cerebro-cgte (container de 9 workspaces MWP). Infra compartilhada vive na raiz:

- `../_configuracao/` -- schemas, regras de negócio, padrões, voz
- `../_pontes/kanboard/` -- bridge para o board institucional (chamado a partir daqui)
- `../_pontes/gitlab/` -- bridge para sync git com HITL em merges sensíveis
- `../casos/` -- trabalho em curso
- `../operacoes/` -- friday review e rotinas

Mapa geral em `../CLAUDE.md`.
