# Taxonomia do board 47 (CGTE - Atividades)

Categorias ativas e mapeamento para os especialistas. Esta e a fonte de verdade local da taxonomia institucional. Se uma categoria mudar no Kanboard, atualize aqui primeiro -- outros arquivos apontam para este.

> Os IDs de categoria abaixo sao placeholders. A primeira chamada de `listar-tarefas-projeto` do `_bridges/kanboard/` traz os IDs reais, que ai sao escritos em `_bridges/kanboard/projetos-cgte.yaml`. Este arquivo lista os nomes legiveis e a quem cada categoria pertence.

## Eixos e categorias

### Eixo Educacao -> `02_educacao/` (V1+)

| Categoria do board 47 | Descricao curta |
|---|---|
| MOOC | Cursos online massivos abertos. Slides, roteiros, gravacoes, plataforma. |
| Conteudo Educacional | Material didatico geral nao-MOOC. Ebooks, apostilas, atividades. |
| Formacao e Capacitacao | Treinamentos institucionais para servidores. |
| Programacao Visual Educacional | Layout / diagramacao especifica de material didatico. |

### Eixo Audiovisual -> `03_audiovisual/` (V1+)

| Categoria | Descricao curta |
|---|---|
| Producao Audiovisual | Videos curtos / longos institucionais e educacionais. |
| Evento / Transmissao | Lives, transmissoes, eventos com producao audiovisual. |

### Eixo Comunicacao -> `04_comunicacao/` (V1+)

| Categoria | Descricao curta |
|---|---|
| Comunicacao Visual | Banners, identidade visual, layout de pecas. |
| Conteudo Digital | Noticias, posts, materiais para canais digitais oficiais. |

### Eixo Acessibilidade -> `05_acessibilidade/` (V1+)

| Categoria | Descricao curta |
|---|---|
| Acessibilidade | Adequacao geral, audiodescricao, legendagem (alem de libras). |
| Libras Interpretacao | Interpretacao em libras ao vivo ou gravada. |
| Libras Traducao | Traducao previa de roteiros e materiais para libras. |

### Eixo Tech / Sistemas -> `06_tech_sistemas/` (V1+)

| Categoria | Descricao curta |
|---|---|
| Interface Digital | Desenvolvimento e ajustes de interfaces (sistemas internos, sites). |
| Inteligencia Artificial | Aplicacao / piloto / desenvolvimento de IA em contexto educacional. |

### Eixo Institucional -> `07_institucional/` (V1+)

| Categoria | Descricao curta |
|---|---|
| Gestao / PGD | Programa de Gestao por Desempenho, relatorios institucionais. |
| Comissao | Trabalhos de comissao institucional, reunioes, atas, documentos. |
| Colaboracao Institucional | Acoes em parceria com outras coordenadorias, pro-reitorias, parceiros. |

### Eixo Ciencia -> `08_ciencia/` (V1+)

| Categoria | Descricao curta |
|---|---|
| Producao Cientifica | Artigos, papers, submissoes academicas em nome da CGTE. |

## Como esta lista evolui

- Categoria nova so e criada apos `demanda_extraordinaria` aparecer e o gestor decidir criar (registrado em `friday-review.md`).
- Categoria existente que parou de ser usada por 3+ meses entra em revisao no friday-review. Nao remova sem discutir -- pode ser ciclo sazonal.
- Atualizar este arquivo, depois `_config/business-rules.md` (espelho), depois `_bridges/kanboard/projetos-cgte.yaml` se o `category_id` mudar.

## Colunas do board 47 (ordem)

(Validar com Marquito apos primeira chamada de `_bridges/kanboard/` -- os nomes / ordem aqui sao a melhor reconstrucao a partir do handoff.)

1. **Backlog** -- demanda registrada mas nao priorizada.
2. **Inicio autorizado** -- gate institucional. Card pronto para comecar. Padrao de destino V0 para `criar-tarefa`.
3. **Em execucao** -- trabalho ativo.
4. **Em aprovacao** -- gate institucional. Card aguardando aprovacao do gestor / chefia.
5. **Concluido** -- terminado.

A coluna destino em criar-tarefa e quase sempre "Inicio autorizado" (gate inicial).
