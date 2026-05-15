# Taxonomia do board 47 (CGTE - Atividades)

Categorias ativas e mapeamento para os especialistas. Esta e a fonte de verdade local da taxonomia institucional. Se uma categoria mudar no Kanboard, atualize aqui primeiro -- outros arquivos apontam para este.

> Os IDs de categoria abaixo são placeholders. A primeira chamada de `listar-tarefas-projeto` do `_pontes/kanboard/` traz os IDs reais, que ai são escritos em `_pontes/kanboard/projetos-cgte.yaml`. Este arquivo lista os nomes legíveis e a quem cada categoria pertence.

## Eixos e categorias

### Eixo Design Educacional -> `02-design-educacional/` (V1+)

| Categoria do board 47 | Descrição curta |
|---|---|
| MOOC | Cursos online massivos abertos. Slides, roteiros, gravações, plataforma. |
| Conteúdo Educacional | Material didático geral nao-MOOC. Ebooks, apostilas, atividades. |
| Formação e Capacitação | Treinamentos institucionais para servidores. |
| Programação Visual Educacional | Layout / diagramação específica de material didático. |

### Eixo Audiovisual -> `03-audiovisual/` (V1+)

| Categoria | Descrição curta |
|---|---|
| Produção Audiovisual | Vídeos curtos / longos institucionais e educacionais. |
| Evento / Transmissão | Lives, transmissões, eventos com produção audiovisual. |

### Eixo Comunicação -> `04-comunicacao/` (V1+)

| Categoria | Descrição curta |
|---|---|
| Comunicação Visual | Banners, identidade visual, layout de pecas. |
| Conteúdo Digital | Notícias, posts, materiais para canais digitais oficiais. |

### Eixo Acessibilidade -> `05-acessibilidade/` (V1+)

| Categoria | Descrição curta |
|---|---|
| Acessibilidade | Adequacao geral, audiodescrição, legendagem (além de libras). |
| Libras Interpretacao | Interpretacao em libras ao vivo ou gravada. |
| Libras Traducao | Traducao previa de roteiros e materiais para libras. |

### Eixo Tech / Sistemas -> `06-tecnologia/` (V1+)

| Categoria | Descrição curta |
|---|---|
| Interface Digital | Desenvolvimento e ajustes de interfaces (sistemas internos, sites). |
| Inteligência Artificial | Aplicação / piloto / desenvolvimento de IA em contexto educacional. |

### Eixo Institucional -> `07-institucional/` (V1+)

| Categoria | Descrição curta |
|---|---|
| Gestao / PGD | Programa de Gestao por Desempenho, relatorios institucionais. |
| Comissão | Trabalhos de comissão institucional, reuniões, atas, documentos. |
| Colaboracao Institucional | Ações em parceria com outras coordenadorias, pro-reitorias, parceiros. |

### Eixo Ciência -> `08-ciencia/` (V1+)

| Categoria | Descrição curta |
|---|---|
| Produção Científica | Artigos, papers, submissões acadêmicas em nome da CGTE. |

## Como esta lista evolui

- Categoria nova so e criada após `demanda_extraordinaria` aparecer e o gestor decidir criar (registrado em `revisao-sexta.md`).
- Categoria existente que parou de ser usada por 3+ meses entra em revisão no friday-review. Não remova sem discutir -- pode ser ciclo sazonal.
- Atualizar este arquivo, depois `_configuracao/regras-negocio.md` (espelho), depois `_pontes/kanboard/projetos-cgte.yaml` se o `category_id` mudar.

## Colunas do board 47 (ordem)

(Validar com Marquito após primeira chamada de `_pontes/kanboard/` -- os nomes / ordem aqui são a melhor reconstrução a partir do entrega.)

1. **Backlog** -- demanda registrada mas não priorizada.
2. **Início autorizado** -- gate institucional. Card pronto para comecar. Padrão de destino V0 para `criar-tarefa`.
3. **Em execução** -- trabalho ativo.
4. **Em aprovação** -- gate institucional. Card aguardando aprovação do gestor / chefia.
5. **Concluído** -- terminado.

A coluna destino em criar-tarefa e quase sempre "Início autorizado" (gate inicial).
