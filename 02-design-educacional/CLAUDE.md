# 02-design-educacional

Workspace MWP do especialista de **Design Educacional + Atendimento Pedagógico + Co-criação** do cerebro-cgte.

**Estado:** RASCUNHO V1 -- contratos preenchidos pelo gestor (Marquito) em 2026-05-15 no branch `design-educacional`. Aguardando validação do servidor da área para virar ATIVO. Em quanto isso, demandas da área continuam passando por `../01-gestor/` para distribuição manual.

Cobertura no board 47: MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional (estrutura pedagógica -- produção visual em `../04-comunicacao/`).

## Folder Map

```
02-design-educacional/
├── CLAUDE.md          (você está aqui)
├── CONTEXTO.md        (fluxo de trabalho dentro deste workspace)
├── README.md
├── contrato/          (contrato local do papel -- RASCUNHO V1)
│   ├── identidade.md  (quem o servidor é; o que possui; modelo mental)
│   ├── regras.md      (sempre / nunca / casos de borda)
│   ├── exemplos.md    (3 exemplos rascunhados; substituir por reais)
│   └── entrega.md     (formatos de saída + cargas YAML)
├── configuracao/
│   ├── questionario.md  (validação pelo servidor da área quando entrar)
│   └── em-curso.md      (estado da ativação)
├── etapas/            (vazio em V0/V1 -- stages internas se ganhar nuance)
└── referencias/
    ├── protocolo-reuniao-escuta.md       (o ritual fundador)
    ├── tipologia-saida-pedagogica.md     (os 5 formatos + árvore de decisão)
    ├── arvore-decisao-co-criacao.md      (FAZ COM / ORIENTA / OBSERVA; padrões de recuperação)
    └── glossario-design-educacional-cefor.md  (termos com sentido institucional)
```

## Triggers

| Comando | Ação |
|---------|------|
| `setup` | Roda o questionário em `configuracao/questionario.md` (validação pelo servidor) |
| `status` | Mostra se o rascunho V1 foi validado pelo servidor ou continua aguardando |
| `escutar <slug>` | Abre um case novo para atendimento via reunião de escuta |

## Routing

| Tarefa | Ir para |
|--------|---------|
| Entender o papel | `contrato/identidade.md` |
| Aplicar regras de execução | `contrato/regras.md` |
| Ver exemplos (rascunho) | `contrato/exemplos.md` |
| Formato da entrega de saída | `contrato/entrega.md` |
| Como rodar a reunião de escuta | `referencias/protocolo-reuniao-escuta.md` |
| Decidir formato da saída | `referencias/tipologia-saida-pedagogica.md` |
| Detectar e corrigir "faço pelo" | `referencias/arvore-decisao-co-criacao.md` |
| Conferir termo institucional | `referencias/glossario-design-educacional-cefor.md` |
| Onboarding/validação do servidor | `configuracao/questionario.md` |

## O que carregar

| Tarefa | Carregar | NÃO carregar |
|--------|----------|--------------|
| Rodar reunião de escuta | `referencias/protocolo-reuniao-escuta.md` + `contrato/regras.md` + entrada do case | `referencias/glossario-*` (só se ambíguo) |
| Decidir formato de saída pós-reunião | `referencias/tipologia-saida-pedagogica.md` + `contrato/entrega.md` | exemplos completos |
| Detectar escorregão "faço pelo" | `referencias/arvore-decisao-co-criacao.md` + `contrato/regras.md` | tudo o resto |
| Validar termo institucional | `referencias/glossario-design-educacional-cefor.md` | tudo o resto |
| Validação do papel (servidor entrando) | `configuracao/questionario.md` + os 4 contratos | exemplos só depois |

## Etapas

Em V0/V1 rascunho, este workspace não tem stages internas em `etapas/`. O trabalho é: reunião → anotação → trabalho → entrega. Quatro passos cabem em qualquer atendimento.

Se com o uso aparecer pipeline interna (ex: triagem prévia, revisão entre pares, banco de templates), `etapas/` pode receber stages como `01-receber/`, `02-rodar-escuta/`, `03-produzir/`, `04-entregar/`.

## Relação com cerebro-cgte

Workspace dentro do cerebro-cgte (container de 9 workspaces MWP). Infra compartilhada vive na raiz:

- `../_configuracao/` -- schemas, regras de negócio, padrões, voz
- `../_pontes/` -- bridges Kanboard / GitLab (V0: chamados pelo gestor; V1+ pode ser direto)
- `../casos/` -- trabalho em curso (cada atendimento vira case)
- `../operacoes/` -- friday review e rotinas

Mapa geral em `../CLAUDE.md`.

## Vizinhança imediata

- `../01-gestor/` -- entrega que abre gate institucional (orçamento, prazo, voz CGTE) volta pra cá.
- `../03-audiovisual/` -- entrega downstream quando projeto pedagógico exige videoaula / evento.
- `../04-comunicacao/` -- entrega downstream para produção visual / identidade / comunicação digital. Atenção ao overlap em "Programação Visual Educacional".
- `../05-acessibilidade/` -- envolver desde o desenho, não no final.
