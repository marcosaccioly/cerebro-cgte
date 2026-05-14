# Cerebro CGTE -- Sistema Operacional Digital

O cerebro institucional da Coordenadoria do Cefor / Ifes (CGTE). 10 servidores, 8 eixos de producao, um Kanboard institucional vivo, e um gestor (Marquito) que precisa registrar e distribuir trabalho sem virar gargalo.

As pastas SAO o sistema. Nada para rodar. Nada para fazer deploy. Sem mensalidade.

## Para quem e

- **Marquito (gestor)** -- registra demandas, distribui trabalho, aprova HITL nos gates do Kanboard. Acompanha tudo via cases + git.
- **Servidores da CGTE** -- (V1.X em diante) cada um ativa seu especialista quando entra. Onboarding de ~3h.
- **AI agente (Claude Code)** -- le `CLAUDE.md` na entrada e roteia pela hierarquia de camadas.

## Versao atual: V0

V0 entrega o minimo viavel:

- **2 especialistas ativos:** `00_orchestrator/` (roteia) e `01_gestor/` (decide / aprova).
- **7 esqueletos:** `02_educacao/` a `08_ciencia/`. Cada um vira ativo quando o servidor da area sentar com Marquito ~3h.
- **Bridge Kanboard** -- TypeScript que fala JSON-RPC com `board.cefor.ifes.edu.br`. 4 operacoes essenciais. HITL obrigatorio.
- **Bridge GitLab** -- envelopa `git push` / `git pull` com HITL em arquivos sensiveis.
- **Case de validacao** -- `cases/CASE-2026-0001-validacao-v0/` mostra a equipe como uma demanda real percorre os agentes.

## Os 3 fluxos da V0

```
demanda externa
   |
   v
00_orchestrator  (3-line plan: situacao / especialista / por que)
   |
   v
01_gestor
   |
   +--> anotar tarefa propria (gestor mesmo executa)
   +--> distribuir tarefa (assignee na equipe)
   +--> demanda extraordinaria (sem categoria ativa)
   |
   v
_bridges/kanboard  (HITL antes de escrever)
   |
   v
Kanboard institucional (board 47)
```

Todos os tres fluxos terminam num card aprovado no board 47, com handoffs YAML versionados no git para auditoria.

## Setup

Pre-requisitos: `bun`, `git`, `claude-code`, acesso a rede do Ifes (para `board.cefor.ifes.edu.br`).

1. Clone o repo.
2. Rode `setup` no Claude Code. O agente le `setup/questionnaire.md` e pergunta as configuracoes faltantes (credenciais Kanboard, voz, etc.).
3. Copie `.env.example` para `.env` e preencha credenciais. Nao commitar.
4. Sente com o agente para a sessao de voz CGTE + Marquito (~1h). Sem isso, qualquer chain que escreva em nome da CGTE fica bloqueada.
5. Rode `status` para confirmar o estado V0.

## O que NAO e

- **Nao e CRM** -- sem banco de contatos, sem pipeline visual, sem integracoes pagas.
- **Nao e SaaS** -- nada para logar, nada para manter, sem mensalidade.
- **Nao e substituto do Kanboard** -- o Kanboard institucional permanece a verdade oficial. O workspace orquestra a escrita no board, nunca paralelo.
- **Nao e autopilot** -- toda escrita no board e toda comunicacao em nome da CGTE passa por HITL.

## Mapa do repo

```
cerebro-cgte/
|-- README.md                       (este arquivo)
|-- CLAUDE.md                       (L0 -- mapa para AI)
|-- CONTEXT.md                      (L1 -- roteamento)
|-- .env.example                    (template de credenciais; copiar para .env e preencher)
|-- .gitignore
|-- setup/questionnaire.md          (onboarding)
|-- _config/
|   |-- HANDOFF_SCHEMA.md           (envelope YAML canonico)
|   |-- workflow-chains.yaml        (chains V0 + previsao V1+)
|   |-- business-rules.md           (HITL, gates, escopo)
|   |-- quality-standards.md        (bar de qualidade por especialista)
|   `-- voice/
|       |-- cgte.md                 (voz institucional; placeholder bloqueante em V0)
|       `-- marquito.md             (voz pessoal do gestor; placeholder bloqueante em V0)
|-- 00_orchestrator/                (ATIVO V0 -- roteia)
|-- 01_gestor/                      (ATIVO V0 -- Marquito)
|-- 02_educacao/                    (esqueleto V0 -- ativa em V1.X)
|-- 03_audiovisual/                 (esqueleto V0)
|-- 04_comunicacao/                 (esqueleto V0)
|-- 05_acessibilidade/              (esqueleto V0)
|-- 06_tech_sistemas/               (esqueleto V0)
|-- 07_institucional/               (esqueleto V0)
|-- 08_ciencia/                     (esqueleto V0)
|-- _bridges/                       (infra, nao especialista)
|   |-- kanboard/
|   `-- gitlab/
|-- cases/                          (cada demanda real e um case)
|   `-- CASE-2026-0001-validacao-v0/
`-- ops/
    `-- friday-review.md
```

## Como uma demanda flui (case de validacao)

Walk pelo `cases/CASE-2026-0001-validacao-v0/`:

```
demanda nova: "preparar slides do MOOC X"
   |
   v
00_orchestrator
   |  HO-001 -- 3-line plan, roteia para 01_gestor
   v
01_gestor
   |  HO-002 -- payload kanboard_card_request,
   |          chamada a _bridges/kanboard/criar-tarefa
   v
_bridges/kanboard
   |  HITL: gestor confere payload, aprova
   v
Kanboard board 47
   `  card criado, coluna "Inicio autorizado"
```

Todo arrow e um arquivo YAML em `cases/.../handoffs/`. Abra os arquivos. O trabalho e o artefato; o artefato e o trabalho.

## Caminho de V0 para V1.X

Cada servidor que entra ativa um especialista:

1. Servidor le `ops/new-hire-day-one.md` (criar em V1.X) antes de sentar com Marquito.
2. Sessao de ~3h: preenche `identity.md`, `rules.md`, `examples.md`, `handoff.md` da pasta dele.
3. Atualiza `_config/workflow-chains.yaml` com a chain que termina no novo especialista.
4. Valida em uma demanda real, gestor olhando junto.
5. A partir dai, `00_orchestrator/` passa a rotear demandas daquela area direto para o novo especialista (sem passar pelo gestor primeiro).

## Origem

Saiu do pipeline de Solution Design (`solution-design/cgte-icm-kanboard-bridge/`). Arquitetura escolhida no Stage 03: ICM Padrao B Austin-puro (referencia viva em `dianas-real-estate-austin`). Handoff completo em `solution-design/stages/04-brief/output/cgte-icm-kanboard-bridge-handoff-builder.md`.
