# CONTEXT -- roteamento de workflow

Como demandas se movem pelas pastas. Leia na entrada de qualquer tarefa: diz qual especialista possui o que e como o handoff entre eles funciona.

## Os 9 especialistas (V0: 2 ativos + 7 esqueletos)

| Pasta | Status V0 | Proposito | Inputs | Outputs |
|---|---|---|---|---|
| `00_orchestrator/` | ATIVO | Roteia demanda nova para o especialista certo | Demanda externa (email, conversa, reuniao, novo card chegando) | Handoff YAML para `01_gestor/` (em V0, todas as rotas terminam aqui) |
| `01_gestor/` | ATIVO | Marquito como gestor. Anota tarefa propria, distribui, aprova HITL no Kanboard | Handoff de `00_orchestrator/` | Chamada a `_bridges/kanboard/` (criar/mover/comentar card); ou (V1+) handoff para especialista executar |
| `02_educacao/` | esqueleto | Cobre MOOC, Conteudo Educacional, Formacao e Capacitacao, Programacao Visual Educacional | (ativa em V1.X) | (ativa em V1.X) |
| `03_audiovisual/` | esqueleto | Cobre Producao Audiovisual, Evento / Transmissao | (V1.X) | (V1.X) |
| `04_comunicacao/` | esqueleto | Cobre Comunicacao Visual, Conteudo Digital | (V1.X) | (V1.X) |
| `05_acessibilidade/` | esqueleto | Cobre Acessibilidade, Libras Interpretacao, Libras Traducao | (V1.X) | (V1.X) |
| `06_tech_sistemas/` | esqueleto | Cobre Interface Digital, Inteligencia Artificial | (V1.X) | (V1.X) |
| `07_institucional/` | esqueleto | Cobre Gestao / PGD, Comissao, Colaboracao Institucional | (V1.X) | (V1.X) |
| `08_ciencia/` | esqueleto | Cobre Producao Cientifica | (V1.X) | (V1.X) |

## Como os handoffs funcionam

Todo handoff e um arquivo YAML que segue `_config/HANDOFF_SCHEMA.md`. O arquivo vive na pasta do case relevante:

```
cases/CASE-YYYY-NNNN-shortslug/handoffs/HO-001.yaml
cases/CASE-YYYY-NNNN-shortslug/handoffs/HO-002.yaml
...
```

Nomeacao: `HO-NNN` numerado sequencialmente dentro do case. O log de handoffs em `case.md` resume cada um em uma linha.

O envelope tem 9 campos obrigatorios (handoff_id, case_id, from_role, to_role, agent_owner, created_at, status, ask, payload) e um payload com formato que varia por tipo. Ver `_config/HANDOFF_SCHEMA.md` para o schema canonico e os formatos de payload comuns.

## Chains de workflow (V0)

Uma "chain" e uma sequencia nomeada de handoffs. Estao documentadas em `_config/workflow-chains.yaml`. Em V0, tres chains cobrem 100% das situacoes:

- `anotar_tarefa_propria` -- gestor descreve trabalho proprio em linguagem natural. Vira card no Kanboard apos HITL.
- `distribuir_tarefa` -- gestor recebe demanda externa, descreve, indica responsavel. Vira card no Kanboard com assignee apos HITL.
- `demanda_extraordinaria` -- demanda que nao se encaixa em nenhuma categoria ativa. Orchestrator nao decide sozinho -- pede ao gestor para criar / recusar / redirecionar.

Em V1+, conforme servidores entram, novas chains atravessam multiplos especialistas. Exemplo previsto (V2): `transcricao_reuniao_multi_especialista` (reuniao gera saidas em paralelo: PGD, email, video, noticia, artigo).

## Bridges (V0)

Bridges nao sao especialistas. Sao modulos de infraestrutura que o `01_gestor/` chama.

- **`_bridges/kanboard/`** -- TypeScript que fala com a API JSON-RPC do Kanboard institucional. Toda escrita passa por HITL (gestor aprova o payload antes do envio). 4 operacoes em V0: `criar-tarefa`, `listar-tarefas-projeto`, `adicionar-comentario`, `mover-tarefa`.
- **`_bridges/gitlab/`** -- TypeScript que envelopa `git push` / `git pull` com HITL em merges sensiveis. Lista minima de arquivos sensiveis: `_config/voice/`, `_config/business-rules.md`, `_config/HANDOFF_SCHEMA.md`, `.env*`.

## Quando ativar um especialista (V1.X)

Ativacao acontece quando o servidor da area entra. Servidor + gestor sentam ~3h e preenchem os 4 arquivos: `identity.md`, `rules.md`, `examples.md`, `handoff.md`. Onboarding referenciado em `ops/new-hire-day-one.md` (a criar em V1.X).

A pasta-esqueleto so vira ativa quando:

- O servidor existe e e o owner do conteudo (gestor pode rascunhar `identity.md` antes, mas o servidor edita / valida).
- O especialista tem pelo menos 1 chain V1+ que termina nele em `_config/workflow-chains.yaml`.
- O servidor sabe que existe um workspace, sabe como abrir um case e validou em uma demanda real (com gestor olhando junto).

Sem esses tres, e prematuro.

## Ordem de leitura para um case

Ao abrir uma pasta de case pela primeira vez:

1. `case.md` -- o state file. Leia primeiro. Diz onde a demanda esta.
2. A secao "Log de handoffs" em `case.md` -- resumo cronologico.
3. `handoffs/HO-001.yaml` ate o ultimo. Leia em ordem.
4. `artifacts/` -- abra os artefatos referenciados nos handoffs.

Nao leia artefatos antes dos handoffs. Os handoffs sao a narrativa; os artefatos sao os produtos. A narrativa da sentido aos artefatos.

## Quando algo nao se encaixa

`00_orchestrator/reference/routing-decision-tree.md` tem a triagem estruturada. Passo final cobre o caso "na duvida": roteia para o `01_gestor/` decidir. O sistema tolera "duvida -> humano" muito melhor do que tolera "chutei errado -> especialista errado fez trabalho parcial -> retrabalho".
