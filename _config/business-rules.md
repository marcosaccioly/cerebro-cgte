# Business Rules

As restricoes que definem o que a CGTE faz e nao faz neste workspace. Especialistas checam aqui quando o trabalho toca um limite.

## O que somos

Coordenadoria do Cefor / Ifes (CGTE). Setor educacional institucional. 10 servidores, 8 eixos de producao: educacao, audiovisual, libras, design educacional, comunicacao, acessibilidade, institucional, ciencia. Sem cliente externo. Demanda institucional interna.

## Verdade institucional do Kanboard

- **O Kanboard institucional (board 47 -- "CGTE - Atividades") e a verdade oficial.** O workspace nao cria checkpoint paralelo. Toda escrita gera card / movimentacao / comentario no board real.
- **Os gates do board sao a verdade de aprovacao.** Colunas "Inicio autorizado" e "Em aprovacao" sao gates institucionais. O workspace nao duplica esses gates internamente -- usa os do board.
- **Projetos secundarios existem mas nao geram chain V0.** `58 CGTE - Projetos`, `60 CGTE - Audiovisual`, `73 CGTE - Informacoes fixas e recorrentes` existem; em V0, toda escrita comeca no projeto 47. Cards podem ser MOVIDOS para os secundarios depois (manualmente ou em chain V1+).

## HITL (Human in the Loop) -- nao negociavel

Toda escrita no Kanboard passa por HITL antes de chegar na API:

1. O especialista (em V0, sempre o gestor) preenche um `kanboard_card_request` completo.
2. O bridge mostra o payload final na CLI: titulo, descricao, categoria, responsavel, prazo, coluna destino.
3. O gestor confirma explicitamente (ou edita o payload, ou recusa).
4. So depois o bridge chama a API JSON-RPC.

Os campos `hitl_aprovado_em` e `hitl_aprovado_por` do payload ficam no handoff YAML para auditoria. Versionado no git.

**Excecao zero.** Nem operacao simples (mover card uma coluna) escapa do HITL. A justificativa: V0 esta provando confianca. Sem HITL, autopilot vira o default e a auditoria some.

## Anti-autopilot

- Nao escreva varios cards em batch sem o gestor ver cada um.
- Nao mova cards entre colunas com base em sinais inferidos ("parece que terminou"). So move se houve confirmacao explicita.
- Nao adicione comentarios automaticos. Cada comentario passa por HITL.
- Nao gere comunicacao em nome da CGTE antes de `_config/voice/cgte.md` estar preenchida. Bloqueia a chain.

## Sensibilidade de arquivos

Estes arquivos exigem HITL especial em merges git (ver `_bridges/gitlab/sync.md`):

- `_config/voice/cgte.md` -- voz institucional
- `_config/voice/marquito.md` -- voz pessoal do gestor
- `_config/business-rules.md` -- este arquivo
- `_config/HANDOFF_SCHEMA.md` -- contrato canonico
- `.env*` -- credenciais (nunca commitar; .gitignore cobre)

Auto-merge so em arquivos nao-sensiveis sem conflito. Qualquer outro caso pede aprovacao do gestor.

## Categorias ativas do board 47

A taxonomia ativa do board 47 cobre os 8 eixos. Cada categoria mapeia para um especialista (V0: todos roteados via gestor; V1+: para o especialista direto):

- **MOOC** -> `02_educacao/` (V1+)
- **Conteudo Educacional** -> `02_educacao/` (V1+)
- **Formacao e Capacitacao** -> `02_educacao/` (V1+)
- **Programacao Visual Educacional** -> `02_educacao/` (V1+)
- **Producao Audiovisual** -> `03_audiovisual/` (V1+)
- **Evento / Transmissao** -> `03_audiovisual/` (V1+)
- **Comunicacao Visual** -> `04_comunicacao/` (V1+)
- **Conteudo Digital** -> `04_comunicacao/` (V1+)
- **Acessibilidade** -> `05_acessibilidade/` (V1+)
- **Libras Interpretacao** -> `05_acessibilidade/` (V1+)
- **Libras Traducao** -> `05_acessibilidade/` (V1+)
- **Interface Digital** -> `06_tech_sistemas/` (V1+)
- **Inteligencia Artificial** -> `06_tech_sistemas/` (V1+)
- **Gestao / PGD** -> `07_institucional/` (V1+)
- **Comissao** -> `07_institucional/` (V1+)
- **Colaboracao Institucional** -> `07_institucional/` (V1+)
- **Producao Cientifica** -> `08_ciencia/` (V1+)

Lista canonica em `01_gestor/reference/taxonomia-board-47.md`. Se uma categoria mudar no board, atualize la primeiro e este arquivo aponta.

## Demanda extraordinaria

Quando uma demanda nao se encaixa em nenhuma categoria ativa:

- Orchestrator NAO inventa. Roteia para o gestor com payload `demanda_extraordinaria`.
- Gestor decide: criar nova categoria no board, recusar, ou redirecionar para outro setor (CGTE nao serve sozinha; alguem fora pode ser o dono certo).
- Se criar nova categoria: atualize tambem `_config/business-rules.md` (esta secao) e `01_gestor/reference/taxonomia-board-47.md`.

## Limites de escopo do workspace

- **Sim:** orquestrar a escrita no board 47, registrar trabalho do gestor, distribuir tarefas para a equipe, manter rastreabilidade via cases + git, futura producao multi-area conforme V1+.
- **Nao:** substituir o Kanboard, gerar comunicacao publica sem voz definida, executar fora dos eixos cobertos pela CGTE, tomar decisao sem HITL.

## Cadencia minima

- **Sessao de voz CGTE + Marquito** -- antes de V0 ser declarada operacional. Sem isso, nenhuma comunicacao em nome da CGTE pode ser gerada.
- **Friday review** -- toda sexta. Vai em `ops/friday-review.md`. Inclui: cases ativos, padroes que surgiram, sugestoes de chain nova, e o que esta puxando o gestor para fora do papel.
- **Onboarding de especialista (V1.X)** -- ~3h. Servidor + gestor preenchem `identity.md`, `rules.md`, `examples.md`, `handoff.md` do especialista da area. Sem essa sessao, a pasta fica esqueleto.
