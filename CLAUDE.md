# CLAUDE.md -- mapa do cerebro-cgte para agentes AI

Você está operando dentro do Cérebro CGTE: o sistema operacional digital da Coordenadoria do Cefor / Ifes. Este arquivo orienta. Diz onde as coisas vivem e como navegar.

## O que este workspace é

Um cérebro institucional baseado em pastas para a CGTE (10 servidores, 8 eixos de produção: educação, audiovisual, libras, design educacional, comunicação, acessibilidade, institucional, ciência). Especialistas organizados como pastas, conectados por um schema YAML de entrega. As pastas SÃO o sistema. Não há runtime.

O alvo da V0 é dar ao gestor (Marquito) condição de registrar e distribuir trabalho sem virar gargalo, mantendo o Kanboard institucional (board 47 -- "CGTE - Atividades") sempre vivo, com auditoria completa via git.

## Estado V0 vs V1+

- **V0 (esta versão):** 2 agentes ativos (`00-orquestrador/`, `01-gestor/`) + 7 esqueletos (`02-educacao/` a `08-ciencia/`).
- **V1+:** Conforme cada servidor de área entra, ativa o especialista correspondente em ~3h de onboarding (preencher `identidade.md` + `regras.md` + `exemplos.md` + `entrega.md`).

## Hierarquia de camadas (carregue só o que a tarefa atual precisa)

- **L0 -- `CLAUDE.md` (este arquivo).** Sempre carregado. O mapa. Diz onde navegar. Não expandir.
- **L1 -- `CONTEXTO.md` (raiz).** Roteamento de workflow. Lido na entrada de qualquer tarefa.
- **L2 -- Contratos do especialista.** Quando você assume um especialista (orchestrator, gestor, etc.), leia os 4 arquivos da pasta dele: `identidade.md`, `regras.md`, `exemplos.md`, `entrega.md`. São o contrato local.
- **L3 -- Material de referência.** Arquivos em `_configuracao/` e `reference/` dentro de cada especialista. Carregue seletivamente. Não carregue todos os arquivos de `_configuracao/voz/` -- só o do agente da tarefa atual.
- **L4 -- Arquivos de trabalho.** O case ativo em `casos/CASO-YYYY-NNNN-shortslug/` e o envelope de entrega de entrada. Carregados para a peça atual, depois liberados.

Se você está carregando L3 + L4 de vários cases ao mesmo tempo, provavelmente está fazendo duas tarefas. Separe.

## Como navegar por intenção

| Se a tarefa é... | Comece em | Depois carregue |
|---|---|---|
| Rotear uma demanda nova | `00-orquestrador/identidade.md` + `regras.md` | `_configuracao/cadeias-fluxo.yaml`, `00-orquestrador/referencias/arvore-decisao-roteamento.md` |
| Anotar tarefa própria do gestor | `01-gestor/identidade.md` + `regras.md` + `exemplos.md` | `01-gestor/referencias/taxonomia-board-47.md`, o entrega de entrada |
| Distribuir uma tarefa para a equipe | `01-gestor/identidade.md` + `regras.md` | `01-gestor/referencias/projetos-cgte.yaml`, `_pontes/kanboard/README.md` |
| Criar ou atualizar card no Kanboard | `_pontes/kanboard/README.md` | `_pontes/kanboard/operacoes/<operação>.ts`, `_pontes/kanboard/projetos-cgte.yaml` |
| Sincronizar com git | `_pontes/gitlab/sincronizar.md` | `_pontes/gitlab/sincronizar.ts` |
| Escrever um entrega | `_configuracao/ESQUEMA_ENTREGA.md` (sempre antes de escrever) | O `entrega.md` do especialista atual para o contrato local |

## Regras de carregamento

1. **Sempre carregue L0 (`CLAUDE.md`) e L1 (`CONTEXTO.md`).** São pequenos e orientam.
2. **Carregue L2 de um especialista por vez.** Não carregue dois especialistas em paralelo. Você está fazendo o trabalho de um.
3. **Carregue L3 seletivamente.** Só o playbook ou voice file relevante para a tarefa, não todos.
4. **Carregue L4 para o case atual.** Quando terminar com um case, solte-o antes de pegar o próximo.
5. **Sempre carregue `_configuracao/ESQUEMA_ENTREGA.md` antes de escrever um entrega.** Schema é barato; escrever sem ele é como o envelope desliza com o tempo.

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
| `setup` | Roda o questionário de onboarding em `configuracao/questionario.md` |
| `status` | Mostra V0/V1.X, especialistas ativos vs esqueleto, cases abertos |
| `nova-demanda` | Entra em `00-orquestrador/`, captura demanda, roteia |
| `ativar-especialista <N>` | V1.X: onboarding de ~3h do servidor de uma área |
| `sync` | Dispara `_pontes/gitlab/sincronizar.ts` com HITL em merges sensíveis |
| `friday-review` | Abre `operacoes/revisao-sexta.md` da semana |

## Quando estiver confuso

Leia `CONTEXTO.md` (raiz), depois a chain em `_configuracao/cadeias-fluxo.yaml` que casa com sua situação. Se ainda estiver confuso, você está fora da cobertura do sistema -- escale por escrito para o gestor em vez de improvisar.
