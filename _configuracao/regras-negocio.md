# Business Rules

As restrições que definem o que a CGTE faz e não faz neste workspace. Especialistas checam aqui quando o trabalho toca um limite.

## O que somos

Coordenadoria do Cefor / Ifes (CGTE). Setor educacional institucional. 10 servidores, 8 eixos de produção: educação, audiovisual, libras, design educacional, comunicação, acessibilidade, institucional, ciência. Sem cliente externo. Demanda institucional interna.

## Verdade institucional do Kanboard

- **O Kanboard institucional (board 47 -- "CGTE - Atividades") e a verdade oficial.** O workspace não cria checkpoint paralelo. Toda escrita gera card / movimentação / comentario no board real.
- **Os gates do board são a verdade de aprovação.** Colunas "Início autorizado" e "Em aprovação" são gates institucionais. O workspace não duplica esses gates internamente -- usa os do board.
- **Projetos secundarios existem mas não geram chain V0.** `58 CGTE - Projetos`, `60 CGTE - Audiovisual`, `73 CGTE - Informações fixas e recorrentes` existem; em V0, toda escrita comeca no projeto 47. Cards podem ser MOVIDOS para os secundarios depois (manualmente ou em chain V1+).

## HITL (Human in the Loop) -- não negociavel

Toda escrita no Kanboard passa por HITL antes de chegar na API:

1. O especialista (em V0, sempre o gestor) preenche um `kanboard_card_request` completo.
2. O bridge mostra o payload final na CLI: título, descrição, categoria, responsavel, prazo, coluna destino.
3. O gestor confirma explicitamente (ou edita o payload, ou recusa).
4. So depois o bridge chama a API JSON-RPC.

Os campos `hitl_aprovado_em` e `hitl_aprovado_por` do payload ficam no entrega YAML para auditoria. Versionado no git.

**Exceção zero.** Nem operação simples (mover card uma coluna) escapa do HITL. A justificativa: V0 esta provando confianca. Sem HITL, autopilot vira o default e a auditoria some.

## Anti-autopilot

- Não escreva vários cards em batch sem o gestor ver cada um.
- Não mova cards entre colunas com base em sinais inferidos ("parece que terminou"). So move se houve confirmação explicita.
- Não adicione comentarios automáticos. Cada comentario passa por HITL.
- Não gere comunicação em nome da CGTE antes de `_configuracao/voz/cgte.md` estar preenchida. Bloqueia a chain.

## Sensibilidade de arquivos

Estes arquivos exigem HITL especial em merges git (ver `_pontes/gitlab/sincronizar.md`):

- `_configuracao/voz/cgte.md` -- voz institucional
- `_configuracao/voz/marquito.md` -- voz pessoal do gestor
- `_configuracao/regras-negocio.md` -- este arquivo
- `_configuracao/ESQUEMA_ENTREGA.md` -- contrato canonico
- `.env*` -- credenciais (nunca commitar; .gitignore cobre)

Auto-merge so em arquivos nao-sensiveis sem conflito. Qualquer outro caso pede aprovação do gestor.

## Categorias ativas do board 47

A taxonomia ativa do board 47 cobre os 8 eixos. Cada categoria mapeia para um especialista (V0: todos roteados via gestor; V1+: para o especialista direto):

- **MOOC** -> `02-design-educacional/` (V1+)
- **Conteúdo Educacional** -> `02-design-educacional/` (V1+)
- **Formação e Capacitação** -> `02-design-educacional/` (V1+)
- **Programação Visual Educacional** -> `02-design-educacional/` (V1+) -- *estrutura pedagógica; produção visual em `04-comunicacao/`*
- **Produção Audiovisual** -> `03-audiovisual/` (V1+)
- **Evento / Transmissão** -> `03-audiovisual/` (V1+)
- **Comunicação Visual** -> `04-comunicacao/` (V1+)
- **Conteúdo Digital** -> `04-comunicacao/` (V1+)
- **Acessibilidade** -> `05-acessibilidade/` (V1+)
- **Libras Interpretacao** -> `05-acessibilidade/` (V1+)
- **Libras Traducao** -> `05-acessibilidade/` (V1+)
- **Interface Digital** -> `06-tecnologia/` (V1+)
- **Inteligência Artificial** -> `06-tecnologia/` (V1+)
- **Gestao / PGD** -> `07-institucional/` (V1+)
- **Comissão** -> `07-institucional/` (V1+)
- **Colaboracao Institucional** -> `07-institucional/` (V1+)
- **Produção Científica** -> `08-ciencia/` (V1+)

Lista canonica em `01-gestor/referencias/taxonomia-board-47.md`. Se uma categoria mudar no board, atualize la primeiro e este arquivo aponta.

## Demanda extraordinária

Quando uma demanda não se encaixa em nenhuma categoria ativa:

- Orchestrator NÃO inventa. Roteia para o gestor com payload `demanda_extraordinaria`.
- Gestor decide: criar nova categoria no board, recusar, ou redirecionar para outro setor (CGTE não serve sozinha; alguem fora pode ser o dono certo).
- Se criar nova categoria: atualize também `_configuracao/regras-negocio.md` (esta seção) e `01-gestor/referencias/taxonomia-board-47.md`.

## Limites de escopo do workspace

- **Sim:** orquestrar a escrita no board 47, registrar trabalho do gestor, distribuir tarefas para a equipe, manter rastreabilidade via cases + git, futura produção multi-área conforme V1+.
- **Não:** substituir o Kanboard, gerar comunicação publica sem voz definida, executar fora dos eixos cobertos pela CGTE, tomar decisão sem HITL.

## Cadencia mínima

- **Sessão de voz CGTE + Marquito** -- antes de V0 ser declarada operacional. Sem isso, nenhuma comunicação em nome da CGTE pode ser gerada.
- **Friday review** -- toda sexta. Vai em `operacoes/revisao-sexta.md`. Inclui: cases ativos, padrões que surgiram, sugestões de chain nova, e o que esta puxando o gestor para fora do papel.
- **Onboarding de especialista (V1.X)** -- ~3h. Servidor + gestor preenchem os 4 arquivos em `<workspace>/contrato/` (`identidade.md`, `regras.md`, `exemplos.md`, `entrega.md`) do especialista da área. Sem essa sessão, o workspace fica esqueleto.
