# 02-educacao

Workspace MWP do especialista de **Educação** do cerebro-cgte. **ESQUELETO V0** -- ativação prevista em V1+ via sessão de ~3h com o servidor da área + gestor.

Cobertura: MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional.

## Folder Map

```
02-educacao/
├── CLAUDE.md          (você está aqui)
├── CONTEXTO.md        (fluxo de trabalho dentro deste workspace)
├── README.md
├── contrato/          (contrato local do papel -- esqueleto, preencher em V1+)
│   ├── identidade.md
│   ├── regras.md
│   ├── exemplos.md
│   └── entrega.md
├── configuracao/
│   └── questionario.md  (onboarding do servidor da área)
├── etapas/            (vazio em V0 -- stages desenhadas conforme o papel se concretiza)
└── referencias/       (material de apoio -- ex: glossário, padrões da área)
```

## Triggers

| Comando | Ação |
|---------|------|
| `setup` | Roda o questionário em `configuracao/questionario.md` |
| `status` | Mostra se o esqueleto já foi preenchido ou continua placeholder |

## Routing

| Tarefa | Ir para |
|--------|---------|
| Entender o papel (V1+) | `contrato/identidade.md` |
| Regras de execução do papel | `contrato/regras.md` |
| Ver exemplos reais | `contrato/exemplos.md` |
| Formato da entrega de saída | `contrato/entrega.md` |
| Onboarding do servidor | `configuracao/questionario.md` |

## Etapas

Em V0, este workspace é esqueleto. Não há trabalho ativo passando por aqui ainda. `etapas/` está vazio.

Quando o servidor da área entrar (V1+), as stages internas vão depender do tipo de trabalho que o papel faz. Pode ser uma pipeline simples (ex: `01-receber-entrega → 02-planejar → 03-produzir → 04-revisar → 05-entregar`) ou múltiplas chains paralelas. O desenho vai junto com o onboarding.

## Relação com cerebro-cgte

Workspace dentro do cerebro-cgte (container de 9 workspaces MWP). Infra compartilhada vive na raiz:

- `../_configuracao/` -- schemas, regras de negócio, padrões, voz
- `../_pontes/` -- bridges Kanboard / GitLab (V0: chamados pelo gestor; V1+ pode ser direto)
- `../casos/` -- trabalho em curso
- `../operacoes/` -- friday review e rotinas

Mapa geral em `../CLAUDE.md`.