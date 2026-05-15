# Cérebro CGTE -- Sistema Operacional Digital

O cérebro institucional da Coordenadoria do Cefor / Ifes (CGTE). 10 servidores, 8 eixos de produção, um Kanboard institucional vivo, e um gestor (Marquito) que precisa registrar e distribuir trabalho sem virar gargalo.

As pastas SÃO o sistema. Nada para rodar. Nada para fazer deploy. Sem mensalidade.

## Para quem é

- **Marquito (gestor)** -- registra demandas, distribui trabalho, aprova HITL nos gates do Kanboard. Acompanha tudo via cases + git.
- **Servidores da CGTE** -- (V1.X em diante) cada um ativa seu especialista quando entra. Onboarding de ~3h.
- **AI agente (Claude Code)** -- lê `CLAUDE.md` na entrada e roteia pela hierarquia de camadas.

## Versão atual: V0

V0 entrega o mínimo viável:

- **2 especialistas ativos:** `00-orquestrador/` (roteia) e `01-gestor/` (decide / aprova).
- **7 esqueletos:** `02-educacao/` a `08-ciencia/`. Cada um vira ativo quando o servidor da área sentar com Marquito ~3h.
- **Bridge Kanboard** -- TypeScript que fala JSON-RPC com `board.cefor.ifes.edu.br`. 4 operações essenciais. HITL obrigatório.
- **Bridge GitLab** -- envelopa `git push` / `git pull` com HITL em arquivos sensíveis.
- **Case de validação** -- `casos/CASO-2026-0001-validacao-v0/` mostra a equipe como uma demanda real percorre os agentes.

## Os 3 fluxos da V0

```
demanda externa
   |
   v
00-orquestrador  (3-line plan: situação / especialista / por que)
   |
   v
01-gestor
   |
   +--> anotar tarefa própria (gestor mesmo executa)
   +--> distribuir tarefa (assignee na equipe)
   +--> demanda extraordinária (sem categoria ativa)
   |
   v
_pontes/kanboard  (HITL antes de escrever)
   |
   v
Kanboard institucional (board 47)
```

Todos os três fluxos terminam num card aprovado no board 47, com entregas YAML versionados no git para auditoria.

## Setup

Pre-requisitos: `bun`, `git`, `claude-code`, acesso a rede do Ifes (para `board.cefor.ifes.edu.br`).

1. Clone o repo.
2. Rode `setup` no Claude Code. O agente lê `configuracao/questionario.md` e pergunta as configurações faltantes (credenciais Kanboard, voz, etc.).
3. Copie `.env.example` para `.env` e preencha credenciais. Não commitar.
4. Sente com o agente para a sessão de voz CGTE + Marquito (~1h). Sem isso, qualquer chain que escreva em nome da CGTE fica bloqueada.
5. Rode `status` para confirmar o estado V0.

## O que NÃO é

- **Não é CRM** -- sem banco de contatos, sem pipeline visual, sem integrações pagas.
- **Não é SaaS** -- nada para logar, nada para manter, sem mensalidade.
- **Não é substituto do Kanboard** -- o Kanboard institucional permanece a verdade oficial. O workspace orquestra a escrita no board, nunca paralelo.
- **Não é autopilot** -- toda escrita no board e toda comunicação em nome da CGTE passa por HITL.

## Mapa do repo

```
cerebro-cgte/
|-- README.md                       (este arquivo)
|-- CLAUDE.md                       (L0 -- mapa para AI)
|-- CONTEXTO.md                      (L1 -- roteamento)
|-- .env.example                    (template de credenciais; copiar para .env e preencher)
|-- .gitignore
|-- configuracao/questionario.md          (onboarding)
|-- _configuracao/
|   |-- ESQUEMA_ENTREGA.md           (envelope YAML canônico)
|   |-- cadeias-fluxo.yaml        (chains V0 + previsão V1+)
|   |-- regras-negocio.md           (HITL, gates, escopo)
|   |-- padroes-qualidade.md        (bar de qualidade por especialista)
|   `-- voz/
|       |-- cgte.md                 (voz institucional; placeholder bloqueante em V0)
|       `-- marquito.md             (voz pessoal do gestor; placeholder bloqueante em V0)
|-- 00-orquestrador/                (ATIVO V0 -- roteia)
|-- 01-gestor/                      (ATIVO V0 -- Marquito)
|-- 02-educacao/                    (esqueleto V0 -- ativa em V1.X)
|-- 03-audiovisual/                 (esqueleto V0)
|-- 04-comunicacao/                 (esqueleto V0)
|-- 05-acessibilidade/              (esqueleto V0)
|-- 06-tecnologia/               (esqueleto V0)
|-- 07-institucional/               (esqueleto V0)
|-- 08-ciencia/                     (esqueleto V0)
|-- _pontes/                       (infra, não especialista)
|   |-- kanboard/
|   `-- gitlab/
|-- casos/                          (cada demanda real é um case)
|   `-- CASO-2026-0001-validacao-v0/
`-- operacoes/
    `-- revisao-sexta.md
```

## Como uma demanda flui (case de validação)

Walk pelo `casos/CASO-2026-0001-validacao-v0/`:

```
demanda nova: "preparar slides do MOOC X"
   |
   v
00-orquestrador
   |  EN-001 -- 3-line plan, roteia para 01-gestor
   v
01-gestor
   |  EN-002 -- payload kanboard_card_request,
   |          chamada a _pontes/kanboard/criar-tarefa
   v
_pontes/kanboard
   |  HITL: gestor confere payload, aprova
   v
Kanboard board 47
   `  card criado, coluna "Início autorizado"
```

Todo arrow é um arquivo YAML em `casos/.../entregas/`. Abra os arquivos. O trabalho é o artefato; o artefato é o trabalho.

## Caminho de V0 para V1.X

Cada servidor que entra ativa um especialista:

1. Servidor lê `operacoes/new-hire-day-one.md` (criar em V1.X) antes de sentar com Marquito.
2. Sessão de ~3h: preenche `contrato/identidade.md`, `contrato/regras.md`, `contrato/exemplos.md`, `contrato/entrega.md` da pasta dele.
3. Atualiza `_configuracao/cadeias-fluxo.yaml` com a chain que termina no novo especialista.
4. Valida em uma demanda real, gestor olhando junto.
5. A partir daí, `00-orquestrador/` passa a rotear demandas daquela área direto para o novo especialista (sem passar pelo gestor primeiro).

## Origem

Saiu do pipeline de Solution Design (`solution-design/cgte-icm-kanboard-bridge/`). Arquitetura escolhida no Stage 03: ICM Padrão B Austin-puro (referência viva em `dianas-real-estate-austin`). Entrega completo em `solution-design/stages/04-brief/output/cgte-icm-kanboard-bridge-entrega-builder.md`.
