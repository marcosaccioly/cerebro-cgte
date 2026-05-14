# CLAUDE.md -- mapa do cerebro-cgte para agentes AI

Você está operando dentro do Cérebro CGTE: o sistema operacional digital da Coordenadoria do Cefor / Ifes. Este arquivo orienta. Diz onde as coisas vivem e como navegar.

## O que este workspace é

Um cérebro institucional baseado em pastas para a CGTE (10 servidores, 8 eixos de produção: educação, audiovisual, libras, design educacional, comunicação, acessibilidade, institucional, ciência). Especialistas organizados como pastas, conectados por um schema YAML de handoff. As pastas SÃO o sistema. Não há runtime.

O alvo da V0 é dar ao gestor (Marquito) condição de registrar e distribuir trabalho sem virar gargalo, mantendo o Kanboard institucional (board 47 -- "CGTE - Atividades") sempre vivo, com auditoria completa via git.

## Estado V0 vs V1+

- **V0 (esta versão):** 2 agentes ativos (`00_orchestrator/`, `01_gestor/`) + 7 esqueletos (`02_educacao/` a `08_ciencia/`).
- **V1+:** Conforme cada servidor de área entra, ativa o especialista correspondente em ~3h de onboarding (preencher `identity.md` + `rules.md` + `examples.md` + `handoff.md`).

## Hierarquia de camadas (carregue só o que a tarefa atual precisa)

- **L0 -- `CLAUDE.md` (este arquivo).** Sempre carregado. O mapa. Diz onde navegar. Não expandir.
- **L1 -- `CONTEXT.md` (raiz).** Roteamento de workflow. Lido na entrada de qualquer tarefa.
- **L2 -- Contratos do especialista.** Quando você assume um especialista (orchestrator, gestor, etc.), leia os 4 arquivos da pasta dele: `identity.md`, `rules.md`, `examples.md`, `handoff.md`. São o contrato local.
- **L3 -- Material de referência.** Arquivos em `_config/` e `reference/` dentro de cada especialista. Carregue seletivamente. Não carregue todos os arquivos de `_config/voice/` -- só o do agente da tarefa atual.
- **L4 -- Arquivos de trabalho.** O case ativo em `cases/CASE-YYYY-NNNN-shortslug/` e o envelope de handoff de entrada. Carregados para a peça atual, depois liberados.

Se você está carregando L3 + L4 de vários cases ao mesmo tempo, provavelmente está fazendo duas tarefas. Separe.

## Como navegar por intenção

| Se a tarefa é... | Comece em | Depois carregue |
|---|---|---|
| Rotear uma demanda nova | `00_orchestrator/identity.md` + `rules.md` | `_config/workflow-chains.yaml`, `00_orchestrator/reference/routing-decision-tree.md` |
| Anotar tarefa própria do gestor | `01_gestor/identity.md` + `rules.md` + `examples.md` | `01_gestor/reference/taxonomia-board-47.md`, o handoff de entrada |
| Distribuir uma tarefa para a equipe | `01_gestor/identity.md` + `rules.md` | `01_gestor/reference/projetos-cgte.yaml`, `_bridges/kanboard/README.md` |
| Criar ou atualizar card no Kanboard | `_bridges/kanboard/README.md` | `_bridges/kanboard/operations/<operação>.ts`, `_bridges/kanboard/projetos-cgte.yaml` |
| Sincronizar com git | `_bridges/gitlab/sync.md` | `_bridges/gitlab/sync.ts` |
| Escrever um handoff | `_config/HANDOFF_SCHEMA.md` (sempre antes de escrever) | O `handoff.md` do especialista atual para o contrato local |

## Regras de carregamento

1. **Sempre carregue L0 (`CLAUDE.md`) e L1 (`CONTEXT.md`).** São pequenos e orientam.
2. **Carregue L2 de um especialista por vez.** Não carregue dois especialistas em paralelo. Você está fazendo o trabalho de um.
3. **Carregue L3 seletivamente.** Só o playbook ou voice file relevante para a tarefa, não todos.
4. **Carregue L4 para o case atual.** Quando terminar com um case, solte-o antes de pegar o próximo.
5. **Sempre carregue `_config/HANDOFF_SCHEMA.md` antes de escrever um handoff.** Schema é barato; escrever sem ele é como o envelope desliza com o tempo.

## O que NÃO fazer

- **Não opere como vários especialistas na mesma sessão.** Se a tarefa atravessa papéis, faça via handoff, não virando os dois. O handoff é o artefato; fazer os dois trabalhos invisivelmente é como o sistema perde rastreabilidade.
- **Não escreva handoff em prosa.** Todo handoff vai em YAML, na pasta `cases/CASE-YYYY-NNNN-shortslug/handoffs/` do case relevante. Ver `_config/HANDOFF_SCHEMA.md`.
- **Não escreva no Kanboard sem HITL.** Toda operação de escrita (criar card, mover, comentar) mostra o payload primeiro, gestor aprova, aí sim envia. Ver `_config/business-rules.md`.
- **Não invente especialistas.** V0 tem 2 ativos. V1+ ativa mais conforme servidor entra. Se a demanda não se encaixa em nenhum ativo, roteia para `01_gestor/` decidir.
- **Não crie checkpoint paralelo aos gates do Kanboard.** Os gates institucionais ("Início autorizado", "Em aprovação") são a verdade de aprovação. O workspace não duplica.
- **Não gere comunicação em nome da CGTE antes da sessão de voz.** `_config/voice/cgte.md` e `_config/voice/marquito.md` precisam estar preenchidos. Sem isso, bloqueie a chain.

## Triggers do workspace

| Comando | Ação |
|---------|------|
| `setup` | Roda o questionário de onboarding em `setup/questionnaire.md` |
| `status` | Mostra V0/V1.X, especialistas ativos vs esqueleto, cases abertos |
| `nova-demanda` | Entra em `00_orchestrator/`, captura demanda, roteia |
| `ativar-especialista <N>` | V1.X: onboarding de ~3h do servidor de uma área |
| `sync` | Dispara `_bridges/gitlab/sync.ts` com HITL em merges sensíveis |
| `friday-review` | Abre `ops/friday-review.md` da semana |

## Quando estiver confuso

Leia `CONTEXT.md` (raiz), depois a chain em `_config/workflow-chains.yaml` que casa com sua situação. Se ainda estiver confuso, você está fora da cobertura do sistema -- escale por escrito para o gestor em vez de improvisar.
