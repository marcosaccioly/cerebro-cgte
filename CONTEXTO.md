# CONTEXTO -- roteamento de workflow entre os 9 workspaces

Como demandas se movem pelos workspaces do cerebro-cgte. Leia na entrada de qualquer tarefa cross-workspace: diz qual especialista possui o que e como a entrega entre eles funciona.

Cada um dos 9 especialistas é um **workspace MWP próprio** com seu `CLAUDE.md`, `CONTEXTO.md`, `contrato/`, `configuracao/questionario.md`, `etapas/` e `referencias/`. Este arquivo coordena entre eles.

## Os 9 workspaces (V0: 2 ativos + 7 esqueletos)

| Pasta | Status V0 | Propósito | Inputs | Outputs |
|---|---|---|---|---|
| `00-orquestrador/` | ATIVO | Roteia demanda nova para o especialista certo | Demanda externa (email, conversa, reunião, novo card chegando) | Entrega YAML para `01-gestor/` (em V0, todas as rotas terminam aqui) |
| `01-gestor/` | ATIVO | Marquito como gestor. Anota tarefa própria, distribui, aprova HITL no Kanboard | Entrega de `00-orquestrador/` | Chamada a `_pontes/kanboard/` (criar/mover/comentar card); ou (V1+) entrega para especialista executar |
| `02-educacao/` | esqueleto | Cobre MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional | (ativa em V1.X) | (ativa em V1.X) |
| `03-audiovisual/` | esqueleto | Cobre Produção Audiovisual, Evento / Transmissão | (V1.X) | (V1.X) |
| `04-comunicacao/` | esqueleto | Cobre Comunicação Visual, Conteúdo Digital | (V1.X) | (V1.X) |
| `05-acessibilidade/` | esqueleto | Cobre Acessibilidade, Libras Interpretação, Libras Tradução | (V1.X) | (V1.X) |
| `06-tecnologia/` | esqueleto | Cobre Interface Digital, Inteligência Artificial | (V1.X) | (V1.X) |
| `07-institucional/` | esqueleto | Cobre Gestão / PGD, Comissão, Colaboração Institucional | (V1.X) | (V1.X) |
| `08-ciencia/` | esqueleto | Cobre Produção Científica | (V1.X) | (V1.X) |

## Como os entregas funcionam

Todo entrega é um arquivo YAML que segue `_configuracao/ESQUEMA_ENTREGA.md`. O arquivo vive na pasta do case relevante:

```
casos/CASO-YYYY-NNNN-shortslug/entregas/EN-001.yaml
casos/CASO-YYYY-NNNN-shortslug/entregas/EN-002.yaml
...
```

Nomeação: `EN-NNN` numerado sequencialmente dentro do case. O log de entregas em `caso.md` resume cada um em uma linha.

O envelope tem 9 campos obrigatórios (id_entrega, id_caso, papel_origem, papel_destino, dono_agente, criado_em, status, pedido, carga) e uma carga com formato que varia por tipo. Ver `_configuracao/ESQUEMA_ENTREGA.md` para o schema canônico e os formatos de carga comuns.

## Chains de workflow (V0)

Uma "chain" é uma sequência nomeada de entregas. Estão documentadas em `_configuracao/cadeias-fluxo.yaml`. Em V0, três chains cobrem 100% das situações:

- `anotar_tarefa_propria` -- gestor descreve trabalho próprio em linguagem natural. Vira card no Kanboard após HITL.
- `distribuir_tarefa` -- gestor recebe demanda externa, descreve, indica responsável. Vira card no Kanboard com assignee após HITL.
- `demanda_extraordinaria` -- demanda que não se encaixa em nenhuma categoria ativa. Orchestrator não decide sozinho -- pede ao gestor para criar / recusar / redirecionar.

Em V1+, conforme servidores entram, novas chains atravessam múltiplos especialistas. Exemplo previsto (V2): `transcricao_reuniao_multi_especialista` (reunião gera saídas em paralelo: PGD, email, vídeo, notícia, artigo).

## Bridges (V0)

Bridges não são especialistas. São módulos de infraestrutura que o `01-gestor/` chama.

- **`_pontes/kanboard/`** -- TypeScript que fala com a API JSON-RPC do Kanboard institucional. Toda escrita passa por HITL (gestor aprova o payload antes do envio). 4 operações em V0: `criar-tarefa`, `listar-tarefas-projeto`, `adicionar-comentario`, `mover-tarefa`.
- **`_pontes/gitlab/`** -- TypeScript que envelopa `git push` / `git pull` com HITL em merges sensíveis. Lista mínima de arquivos sensíveis: `_configuracao/voz/`, `_configuracao/regras-negocio.md`, `_configuracao/ESQUEMA_ENTREGA.md`, `.env*`.

## Quando ativar um workspace esqueleto (V1.X)

Ativação acontece quando o servidor da área entra. Servidor + gestor sentam ~3h e preenchem os 4 arquivos em `<workspace>/contrato/`: `identidade.md`, `regras.md`, `exemplos.md`, `entrega.md`. O passo a passo está no questionário do workspace: `<workspace>/configuracao/questionario.md`. Onboarding institucional referenciado em `operacoes/new-hire-day-one.md` (a criar em V1.X).

O workspace esqueleto só vira ativo quando:

- O servidor existe e é o owner do conteúdo (gestor pode rascunhar `contrato/identidade.md` antes, mas o servidor edita / valida).
- O especialista tem pelo menos 1 chain V1+ que termina nele em `_configuracao/cadeias-fluxo.yaml`.
- O servidor sabe que existe um workspace, sabe como abrir um case e validou em uma demanda real (com gestor olhando junto).

Sem esses três, é prematuro.

## Ordem de leitura para um case

Ao abrir uma pasta de case pela primeira vez:

1. `caso.md` -- o state file. Leia primeiro. Diz onde a demanda está.
2. A seção "Log de entregas" em `caso.md` -- resumo cronológico.
3. `entregas/EN-001.yaml` até o último. Leia em ordem.
4. `artefatos/` -- abra os artefatos referenciados nos entregas.

Não leia artefatos antes dos entregas. Os entregas são a narrativa; os artefatos são os produtos. A narrativa dá sentido aos artefatos.

## Quando algo não se encaixa

`00-orquestrador/referencias/arvore-decisao-roteamento.md` tem a triagem estruturada. Passo final cobre o caso "na dúvida": roteia para o `01-gestor/` decidir. O sistema tolera "dúvida -> humano" muito melhor do que tolera "chutei errado -> especialista errado fez trabalho parcial -> retrabalho".
