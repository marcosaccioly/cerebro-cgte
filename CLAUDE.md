# CLAUDE.md -- mapa do cerebro-cgte para agentes AI

Você está operando dentro do Cérebro CGTE: o sistema operacional digital da Coordenadoria do Cefor / Ifes. Este arquivo orienta. Diz onde as coisas vivem e como navegar.

## O que este workspace é

Um cérebro institucional baseado em pastas para a CGTE (10 servidores, 8 eixos de produção: educação, audiovisual, libras, design educacional, comunicação, acessibilidade, institucional, ciência). Especialistas organizados como pastas, conectados por um schema YAML de entrega. As pastas SÃO o sistema. Não há runtime.

O alvo da V0 é dar ao gestor (Marquito) condição de registrar e distribuir trabalho sem virar gargalo, mantendo o Kanboard institucional (board 47 -- "CGTE - Atividades") sempre vivo, com auditoria completa via git.

## Estado V0 vs V1+

- **V0 (esta versão):** 2 workspaces ativos (`00-orquestrador/`, `01-gestor/`) + 7 esqueletos (`02-educacao/` a `08-ciencia/`).
- **V1+:** Conforme cada servidor de área entra, ativa o workspace correspondente em ~3h de onboarding (preencher os 4 arquivos em `<workspace>/contrato/` -- `identidade.md`, `regras.md`, `exemplos.md`, `entrega.md`).

## Folder Map

O cerebro-cgte é um **container de 9 workspaces MWP**, com infra institucional compartilhada na raiz. Padrão equivalente ao `Interpreted-Context-Methdology/workspaces/`.

```
cerebro-cgte/
├── CLAUDE.md              (você está aqui)
├── CONTEXTO.md            (roteamento de workflow entre workspaces)
├── README.md
│
├── 00-orquestrador/       ATIVO V0  -- roteia demanda nova
├── 01-gestor/             ATIVO V0  -- HITL, decide cards no Kanboard
├── 02-educacao/           esqueleto -- MOOC, Conteúdo Educacional, Formação
├── 03-audiovisual/        esqueleto -- Produção Audiovisual, Evento
├── 04-comunicacao/        esqueleto -- Comunicação Visual, Conteúdo Digital
├── 05-acessibilidade/     esqueleto -- Acessibilidade, Libras
├── 06-tecnologia/         esqueleto -- Interface Digital, IA
├── 07-institucional/      esqueleto -- Gestão / PGD, Comissão
├── 08-ciencia/            esqueleto -- Produção Científica
│
├── _configuracao/         (schemas, regras de negócio, padrões, voz)
├── _pontes/               (bridges Kanboard / GitLab)
├── casos/                 (trabalho em curso -- CASO-YYYY-NNNN-shortslug/)
├── operacoes/             (friday review e rotinas)
└── configuracao/          (setup institucional -- credenciais Kanboard, sessão de voz)
```

Cada workspace tem seu próprio `CLAUDE.md` + `CONTEXTO.md` + `contrato/` + `configuracao/questionario.md` + `etapas/` + `referencias/`. O servidor da área abre só a pasta dele.

## Hierarquia de camadas (carregue só o que a tarefa atual precisa)

- **L0 raiz -- `CLAUDE.md` (este arquivo).** Sempre carregado. O mapa do container. Diz qual workspace abrir.
- **L1 raiz -- `CONTEXTO.md` (raiz).** Como demanda flui entre workspaces. Lido na entrada de qualquer tarefa cross-workspace.
- **L0 workspace -- `<workspace>/CLAUDE.md`.** O mapa local de um especialista. Quando você está operando como aquele especialista.
- **L1 workspace -- `<workspace>/CONTEXTO.md`.** Fluxo de trabalho dentro de um workspace.
- **L2 -- Contratos do especialista.** Os 4 arquivos em `<workspace>/contrato/`: `identidade.md`, `regras.md`, `exemplos.md`, `entrega.md`. São o contrato local do papel.
- **L3 -- Material de referência.** `_configuracao/` (compartilhado) e `<workspace>/referencias/` (local). Carregue seletivamente. Não carregue todos os arquivos de `_configuracao/voz/` -- só o do agente da tarefa atual.
- **L4 -- Arquivos de trabalho.** O case ativo em `casos/CASO-YYYY-NNNN-shortslug/` e o envelope de entrega de entrada. Carregados para a peça atual, depois liberados.

Se você está carregando L3 + L4 de vários cases ao mesmo tempo, provavelmente está fazendo duas tarefas. Separe.

## Como navegar por intenção

| Se a tarefa é... | Comece em | Depois carregue |
|---|---|---|
| Rotear uma demanda nova | `00-orquestrador/CLAUDE.md` | `00-orquestrador/contrato/identidade.md` + `regras.md`, depois `_configuracao/cadeias-fluxo.yaml` |
| Anotar tarefa própria do gestor | `01-gestor/CLAUDE.md` | `01-gestor/contrato/identidade.md` + `regras.md` + `exemplos.md`, depois `01-gestor/referencias/taxonomia-board-47.md` |
| Distribuir uma tarefa para a equipe | `01-gestor/CLAUDE.md` | `01-gestor/contrato/identidade.md` + `regras.md`, depois `01-gestor/referencias/projetos-cgte.yaml` e `_pontes/kanboard/README.md` |
| Criar ou atualizar card no Kanboard | `_pontes/kanboard/README.md` | `_pontes/kanboard/operacoes/<operação>.ts`, `_pontes/kanboard/projetos-cgte.yaml` |
| Sincronizar com git | `_pontes/gitlab/sincronizar.md` | `_pontes/gitlab/sincronizar.ts` |
| Escrever um entrega | `_configuracao/ESQUEMA_ENTREGA.md` (sempre antes de escrever) | O `<workspace>/contrato/entrega.md` do especialista atual |
| Ativar um especialista esqueleto (V1+) | `<workspace>/configuracao/questionario.md` | Os 4 arquivos em `<workspace>/contrato/` |

## Regras de carregamento

1. **Sempre carregue L0 raiz (`CLAUDE.md`) e L1 raiz (`CONTEXTO.md`).** São pequenos e orientam.
2. **Carregue L0 + L1 do workspace ativo, não de dois ao mesmo tempo.** Você está fazendo o trabalho de um especialista.
3. **Carregue L2 do workspace ativo (`contrato/`) inteiro.** São 4 arquivos curtos -- formam o contrato do papel.
4. **Carregue L3 seletivamente.** Só o arquivo de regra, voz ou referência relevante para a tarefa, não todos.
5. **Carregue L4 para o case atual.** Quando terminar com um case, solte-o antes de pegar o próximo.
6. **Sempre carregue `_configuracao/ESQUEMA_ENTREGA.md` antes de escrever um entrega.** Schema é barato; escrever sem ele é como o envelope desliza com o tempo.

## O que NÃO fazer

- **Não opere como vários especialistas na mesma sessão.** Se a tarefa atravessa papéis, faça via entrega, não virando os dois. O entrega é o artefato; fazer os dois trabalhos invisivelmente é como o sistema perde rastreabilidade.
- **Não escreva entrega em prosa.** Todo entrega vai em YAML, na pasta `casos/CASO-YYYY-NNNN-shortslug/entregas/` do case relevante. Ver `_configuracao/ESQUEMA_ENTREGA.md`.
- **Não escreva no Kanboard sem HITL.** Toda operação de escrita (criar card, mover, comentar) mostra o payload primeiro, gestor aprova, aí sim envia. Ver `_configuracao/regras-negocio.md`.
- **Não invente especialistas.** V0 tem 2 ativos. V1+ ativa mais conforme servidor entra. Se a demanda não se encaixa em nenhum ativo, roteia para `01-gestor/` decidir.
- **Não crie checkpoint paralelo aos gates do Kanboard.** Os gates institucionais ("Início autorizado", "Em aprovação") são a verdade de aprovação. O workspace não duplica.
- **Não gere comunicação em nome da CGTE antes da sessão de voz.** `_configuracao/voz/cgte.md` e `_configuracao/voz/marquito.md` precisam estar preenchidos. Sem isso, bloqueie a chain.

## Triggers do workspace

| Comando | Ação |
|---------|------|
| `setup` | Roda o questionário institucional em `configuracao/questionario.md` (credenciais Kanboard, sessão de voz) |
| `status` | Mostra V0/V1.X, workspaces ativos vs esqueleto, cases abertos |
| `nova-demanda` | Entra em `00-orquestrador/`, captura demanda, roteia |
| `ativar-especialista <NN-nome>` | V1.X: onboarding de ~3h via `<workspace>/configuracao/questionario.md` |
| `sync` | Dispara `_pontes/gitlab/sincronizar.ts` com HITL em merges sensíveis |
| `friday-review` | Abre `operacoes/revisao-sexta.md` da semana |

Cada workspace também tem seus próprios triggers (ver `<workspace>/CLAUDE.md`).

## Relação com ICM / MWP

O cerebro-cgte segue o modelo MWP (Model Workspace Protocol) do projeto `Interpreted-Context-Methdology`. Adaptação consciente em relação ao MWP canônico:

- **Multi-workspace container.** O cerebro-cgte é um repo guarda-chuva com 9 workspaces MWP internos, mesmo padrão de `Interpreted-Context-Methdology/workspaces/`.
- **Role-based, não pipeline puro.** Cada workspace representa um papel institucional (orquestrador, gestor, especialistas de área), conectados por entregas YAML em `casos/`. As "stages" (etapas/) internas a cada workspace são opcionais e desenhadas conforme o papel ganha nuance.
- **Contratos em vez de Inputs/Process/Outputs.** Cada workspace tem `contrato/` com 4 arquivos (identidade, regras, exemplos, entrega) que substituem o `CONTEXT.md` Inputs/Process/Outputs do MWP canônico para esse domínio multi-agente.
- **Handoffs nomeados "entregas".** O envelope YAML compartilhado em `casos/CASO-.../entregas/EN-NNN.yaml` cumpre o papel do `output/` folder do MWP, mas carrega contexto institucional rico (papéis, HITL, gates do board 47).

Para o MWP canônico, ver `D:/dev/Interpreted-Context-Methdology/_core/CONVENTIONS.md`.

## Quando estiver confuso

Leia `CONTEXTO.md` (raiz), depois a chain em `_configuracao/cadeias-fluxo.yaml` que casa com sua situação. Se ainda estiver confuso, você está fora da cobertura do sistema -- escale por escrito para o gestor em vez de improvisar.
