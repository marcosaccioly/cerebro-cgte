# Levantamento de casos reais do pipeline ICM → Moodle

**Status: pendente de preenchimento pela equipe.** Este arquivo é o bloqueador da redação do relato (ver `caso.md`, open items, e `tema-decidido-ia-alem-do-chat.md`). Nenhum dado abaixo foi inventado; campos vazios ou marcados `[DADO A CONFIRMAR]` precisam de resposta de quem participou do trabalho antes de entrar no texto.

Adaptado de `dossie-ia-alem-do-chat.md`, arquivo 05 (`05_DADOS_E_EVIDENCIAS_A_COLETAR.md`).

## Por que este arquivo existe

O tema decidido em 2026-09-15 exige relatar 3 a 5 casos reais de material que passaram (ou possam passar, dentro da experiência relatada) pelo fluxo:

`material fonte → análise pedagógica → design da interação → geração HTML → validação → correção → Moodle`

Uma busca no repositório (`02-design-educacional/`, `artefatos/inventario-evidencias.md`, `historico-cgte/`) não encontrou esse pipeline documentado literalmente como prática já executada com pastas numeradas ao estilo ICM. Existem, porém, **candidatos a evidência parcial** que podem ter passado por um processo equivalente sem terem sido registrados nesse formato. Confirmar caso a caso.

## Candidatos a reenquadrar (evidência parcial, do inventário do outro tema)

Extraído de `artefatos/inventario-evidencias.md`. Para cada um, confirmar com a equipe se o processo real teve etapas equivalentes ao pipeline (mesmo sem pastas numeradas formais) e se o resultado foi de fato um recurso HTML interativo (não H5P nativo, não só um GPT conversacional).

| Candidato | Card | Ano | Por que pode servir | O que falta confirmar |
|---|---|---|---|---|
| Sumarizador H5P | -- | -- | Transforma texto educacional em objeto interativo -- mas H5P, não necessariamente HTML autoral | O objeto é HTML editável fora do H5P? Houve etapas separadas de análise pedagógica e design de interação, ou foi um prompt único? |
| Gerador de Questionários para o Moodle (GPT) | #7404 | 2024 | Produz atividade a partir de objetivos de aprendizagem -- interatividade self-check | O output é HTML interativo ou só texto/estrutura de quiz nativa do Moodle? Houve validação humana em etapa separada? |
| Gerador de Rubricas | #7659 | 2025 | Instrumento avaliativo estruturado | Rubrica é HTML interativo ou documento estático? Provavelmente não se encaixa -- confirmar antes de descartar |
| Assistente de Design Educacional (DEIA) | #7493 | 2024 | Apoio ao design instrucional -- pode ter gerado especificações usadas depois para produzir HTML | Chegou a gerar ou orientar produção de recurso HTML de fato? Por quem? |
| Plugin de IA no AVA MOOC | #7788 | 2026 | Testagem de plugin no Moodle | Envolveu produção de material interativo ou é infraestrutura/tutoria? |

Se nenhum desses corresponder de fato ao pipeline (material → análise → design → HTML → validação → Moodle), **isso também é uma resposta válida** -- nesse caso, avaliar com o autor se o relato deve descrever o pipeline como proposta testada agora, e não como prática já consolidada (ajustar tom e tempo verbal no manuscrito).

## 1. Caracterização da experiência

- Período em que a experiência ocorreu: [DADO A CONFIRMAR]
- Quantidade de profissionais envolvidos: [DADO A CONFIRMAR]
- Papéis envolvidos (professor/conteudista, designer educacional, programador visual, TI, acessibilidade etc.): [DADO A CONFIRMAR]
- Quantidade de cursos/disciplina(s): [DADO A CONFIRMAR]
- Quantidade de materiais produzidos: [DADO A CONFIRMAR]
- Tipos de materiais-fonte: [DADO A CONFIRMAR]
- Modelos/ferramentas de IA usados: [DADO A CONFIRMAR]
- Versões/modelos, se registradas: [DADO A CONFIRMAR]
- Como a IA acessou as pastas/contextos: [DADO A CONFIRMAR]
- Como o HTML foi incorporado ao Moodle: [DADO A CONFIRMAR]
- Versão do Moodle: [DADO A CONFIRMAR]
- Restrições técnicas relevantes do Moodle: [DADO A CONFIRMAR]

## 2. Registro por caso (preencher 3 a 5)

### Caso A
| Campo | Registro |
|---|---|
| Material original | |
| Objetivo pedagógico | |
| Tipo de transformação | |
| Ferramenta/modelo | |
| Pastas/etapas utilizadas | |
| Contexto persistente utilizado | |
| Artefatos intermediários | |
| Nº de ciclos/iterações | |
| Tempo aproximado | |
| Erros da IA | |
| Correções humanas | |
| Problemas de Moodle | |
| Problemas de acessibilidade | |
| Validações executadas | |
| Versão final | |

### Caso B
*(mesma tabela)*

### Caso C
*(mesma tabela)*

### Caso D (opcional)
### Caso E (opcional)

## 3. Evidência de engenharia de contexto

Documentar quais arquivos realmente existiam/foram usados (ex.: `CONTEXT.md`, `acessibilidade.md`, `moodle.md`, `identidade.md`, output da etapa anterior), para quais etapas eram carregados, o que era persistente e o que mudava por material. Se a resposta for "nenhum arquivo formal, o processo era mental/informal", isso também precisa constar -- muda o enquadramento do relato de "aplicação de metodologia" para "adaptação em curso".

## 4. Evidência de revisão humana

Para cada review gate identificado: quem revisou, o que observou, o que modificou, se o erro era pedagógico/factual/visual/técnico/acessibilidade/Moodle, e se a correção foi direta no artefato ou via nova instrução à IA.

## 5. Acessibilidade -- só relatar o que foi de fato verificado

Não transformar validação automática em declaração de conformidade WCAG. Se não houve teste sistemático (leitor de tela, navegação por teclado, ferramenta automática), a redação do relato deve dizer "orientado por critérios de acessibilidade", nunca "material acessível" ou "conforme WCAG".

## 6. Métricas opcionais -- só se houver registro confiável

Tempo até primeiro protótipo, tempo total, nº de iterações, nº de correções, etapas com mais intervenção, retrabalho, reuso da estrutura em materiais posteriores. Sem baseline, preferir descrição qualitativa a percentuais.

## Próximo passo

Depois de preenchido (mesmo que parcialmente), voltar a `tema-decidido-ia-alem-do-chat.md` → "Ordem de trabalho antes de redigir o manuscrito completo", passo 2, e decidir com o autor se o recorte segue como está ou se recua para as opções registradas em `opcoes-tema.md`.
