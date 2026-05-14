# CLAUDE.md -- mapa do cerebro-cgte para agentes AI

Voce esta operando dentro do Cerebro CGTE: o sistema operacional digital da Coordenadoria do Cefor / Ifes. Este arquivo orienta. Diz onde as coisas vivem e como navegar.

## O que este workspace e

Um cerebro institucional baseado em pastas para a CGTE (10 servidores, 8 eixos de producao: educacao, audiovisual, libras, design educacional, comunicacao, acessibilidade, institucional, ciencia). Especialistas organizados como pastas, conectados por um schema YAML de handoff. As pastas SAO o sistema. Nao ha runtime.

O alvo da V0 e dar ao gestor (Marquito) condicao de registrar e distribuir trabalho sem virar gargalo, mantendo o Kanboard institucional (board 47 -- "CGTE - Atividades") sempre vivo, com auditoria completa via git.

## Estado V0 vs V1+

- **V0 (esta versao):** 2 agentes ativos (`00_orchestrator/`, `01_gestor/`) + 7 esqueletos (`02_educacao/` a `08_ciencia/`).
- **V1+:** Conforme cada servidor de area entra, ativa o especialista correspondente em ~3h de onboarding (preencher `identity.md` + `rules.md` + `examples.md` + `handoff.md`).

## Hierarquia de camadas (carregue so o que a tarefa atual precisa)

- **L0 -- `CLAUDE.md` (este arquivo).** Sempre carregado. O mapa. Diz onde navegar. Nao expandir.
- **L1 -- `CONTEXT.md` (raiz).** Roteamento de workflow. Lido na entrada de qualquer tarefa.
- **L2 -- Contratos do especialista.** Quando voce assume um especialista (orchestrator, gestor, etc.), leia os 4 arquivos da pasta dele: `identity.md`, `rules.md`, `examples.md`, `handoff.md`. Sao o contrato local.
- **L3 -- Material de referencia.** Arquivos em `_config/` e `reference/` dentro de cada especialista. Carregue seletivamente. Nao carregue todos os arquivos de `_config/voice/` -- so o do agente da tarefa atual.
- **L4 -- Arquivos de trabalho.** O case ativo em `cases/CASE-YYYY-NNNN-shortslug/` e o envelope de handoff de entrada. Carregados para a peca atual, depois liberados.

Se voce esta carregando L3 + L4 de varios cases ao mesmo tempo, provavelmente esta fazendo duas tarefas. Separe.

## Como navegar por intencao

| Se a tarefa e... | Comece em | Depois carregue |
|---|---|---|
| Rotear uma demanda nova | `00_orchestrator/identity.md` + `rules.md` | `_config/workflow-chains.yaml`, `00_orchestrator/reference/routing-decision-tree.md` |
| Anotar tarefa propria do gestor | `01_gestor/identity.md` + `rules.md` + `examples.md` | `01_gestor/reference/taxonomia-board-47.md`, o handoff de entrada |
| Distribuir uma tarefa para a equipe | `01_gestor/identity.md` + `rules.md` | `01_gestor/reference/projetos-cgte.yaml`, `_bridges/kanboard/README.md` |
| Criar ou atualizar card no Kanboard | `_bridges/kanboard/README.md` | `_bridges/kanboard/operations/<operacao>.ts`, `_bridges/kanboard/projetos-cgte.yaml` |
| Sincronizar com git | `_bridges/gitlab/sync.md` | `_bridges/gitlab/sync.ts` |
| Escrever um handoff | `_config/HANDOFF_SCHEMA.md` (sempre antes de escrever) | O `handoff.md` do especialista atual para o contrato local |

## Regras de carregamento

1. **Sempre carregue L0 (`CLAUDE.md`) e L1 (`CONTEXT.md`).** Sao pequenos e orientam.
2. **Carregue L2 de um especialista por vez.** Nao carregue dois especialistas em paralelo. Voce esta fazendo o trabalho de um.
3. **Carregue L3 seletivamente.** So o playbook ou voice file relevante para a tarefa, nao todos.
4. **Carregue L4 para o case atual.** Quando terminar com um case, solte-o antes de pegar o proximo.
5. **Sempre carregue `_config/HANDOFF_SCHEMA.md` antes de escrever um handoff.** Schema e barato; escrever sem ele e como o envelope desliza com o tempo.

## O que NAO fazer

- **Nao opere como varios especialistas na mesma sessao.** Se a tarefa atravessa papeis, faca via handoff, nao virando os dois. O handoff e o artefato; fazer os dois trabalhos invisivelmente e como o sistema perde rastreabilidade.
- **Nao escreva handoff em prosa.** Todo handoff vai em YAML, na pasta `cases/CASE-YYYY-NNNN-shortslug/handoffs/` do case relevante. Ver `_config/HANDOFF_SCHEMA.md`.
- **Nao escreva no Kanboard sem HITL.** Toda operacao de escrita (criar card, mover, comentar) mostra o payload primeiro, gestor aprova, ai sim envia. Ver `_config/business-rules.md`.
- **Nao invente especialistas.** V0 tem 2 ativos. V1+ ativa mais conforme servidor entra. Se a demanda nao se encaixa em nenhum ativo, roteia para `01_gestor/` decidir.
- **Nao crie checkpoint paralelo aos gates do Kanboard.** Os gates institucionais ("Inicio autorizado", "Em aprovacao") sao a verdade de aprovacao. O workspace nao duplica.
- **Nao gere comunicacao em nome da CGTE antes da sessao de voz.** `_config/voice/cgte.md` e `_config/voice/marquito.md` precisam estar preenchidos. Sem isso, bloqueie a chain.

## Triggers do workspace

| Comando | Acao |
|---------|------|
| `setup` | Roda o questionario de onboarding em `setup/questionnaire.md` |
| `status` | Mostra V0/V1.X, especialistas ativos vs esqueleto, cases abertos |
| `nova-demanda` | Entra em `00_orchestrator/`, captura demanda, roteia |
| `ativar-especialista <N>` | V1.X: onboarding de ~3h do servidor de uma area |
| `sync` | Dispara `_bridges/gitlab/sync.ts` com HITL em merges sensiveis |
| `friday-review` | Abre `ops/friday-review.md` da semana |

## Quando estiver confuso

Leia `CONTEXT.md` (raiz), depois a chain em `_config/workflow-chains.yaml` que casa com sua situacao. Se ainda estiver confuso, voce esta fora da cobertura do sistema -- escale por escrito para o gestor em vez de improvisar.
