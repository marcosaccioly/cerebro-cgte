# Análise — 08-ciencia

**Artigo:** "Ecossistema de Inteligência Artificial em uma Instituição de Educação a Distância: experiência da CGTE no Cefor/Ifes"
**Fonte analisada:** `08-ciencia/_inbox/splnproc1703_mac.docm.md`
**Especialista:** 08-ciencia (Produção Científica)
**Método aplicado:** `08-ciencia/referencias/` (gêneros-e-formatos, anatomia-das-secoes, veiculos-brasileiros, perguntas-estruturadas-por-genero)
**Data:** 2026-06-06

> Ordem da análise = ordem do que mais derruba um trabalho, conforme `referencias/generos-e-formatos.md:3`.

---

## 1. Gênero: a escolha está certa — com uma tensão a administrar

O artigo se declara **relato de experiência analítico enquadrado em EDR**. Escolha defensável: bate com todos os critérios de `generos-e-formatos.md:23-37` — intervenção conduzida pela própria equipe, sem delineamento prévio de pesquisa, com reflexão posterior e dados qualitativos (registros, materiais, observações).

**Tensão:** vocês mobilizam **EDR como metodologia**, e EDR exige *ciclos iterativos com avaliação sistemática*. O próprio artigo admite (linha 70) que "os dados disponíveis neste relato são ainda de natureza qualitativa e descritiva" e que a avaliação de impacto "constitui o próximo ciclo". Um parecerista que conhece EDR vai cutucar exatamente aí: *"isto ainda não é um ciclo completo de EDR, é a fase de design/análise."*

**Recomendação:** posicionar com firmeza como **relato analítico que usa EDR como lente** (não como prova de rigor de pesquisa) e declarar o limite cedo — o que já é feito na linha 70. Não deixar o abstract prometer mais rigor do que o corpo entrega.

---

## 2. Veículo e idioma — confirmar antes de mexer no resto

O template é **Springer LNCS** (cabeçalho "First Author[ORCID]", "Springer Heidelberg", `lncs@springer.com`). Isso muda várias coisas e tem uma incoerência grave:

- **Abstract e keywords em inglês, corpo inteiro em português.** A maioria dos eventos LNCS exige texto integral em inglês. Se for o caso, o corpo precisa ser traduzido — e o registro muda (LNCS é mais conciso e direto que periódico brasileiro de educação).
- **Formato de referências.** Hoje em estilo APA; LNCS usa numeração própria no estilo Springer. Conversão necessária se confirmado.
- **Limite de páginas.** LNCS costuma ser rígido (12–15 pp.), o que condiciona quanto dá para expandir a análise.

`veiculos-brasileiros.md:3` é explícito: *"Sempre verificar o site do veículo antes de submeter."*

**Pendências a confirmar:** qual evento, idioma exigido, limite de páginas.

---

## 3. Bloqueios duros (resolver cedo, custam pouco)

- **Anonimização quebrada.** Autores e instituição foram cegados com `[Autores omitidos]`/`[Instituição omitida]`, mas o **título** diz "experiência da CGTE no Cefor/Ifes", o corpo nomeia CGTE/Cefor/Ifes/Espírito Santo dezenas de vezes, e a **referência 18 (Silva, Accioly, & Fávero, 2025)** nomeia um autor. Se a revisão for **cega dupla**, isso desanonimiza por completo.
- **Datas inconsistentes.** Abstract: "between 2025 and 2026"; Introdução (linha 19): "ao longo de 2024–2026"; Metodologia (linha 43): "entre 2025 e 2026". Três janelas. Padronizar — é conteúdo, não artefato de exportação.
- **Seções ainda sem título.** Cabeçalhos placeholder: "1.1 xxx", "2.1 xxx", "4.2 xxx", e — mais sério — a **seção de Discussão inteira está titulada "Xxxxxx"** (linha 65) e a final "5.1 xxxx". A numeração bagunçada *não* é cobrada aqui (é `.docm.md` exportado, provável artefato); mas os títulos "xxx" são lacunas reais de redação.
- **Referências.** A nº 19 está vazia; McKenney (2020) aparece na lista mas não parece citada no texto (só McKenney & Reeves 2012). Conferir — parte pode ser ruído de exportação.

---

## 4. Problema de fundo: o artigo **descreve**, ainda não **analisa**

Maior risco de rejeição. `generos-e-formatos.md:25`: relato analítico *"não é 'contamos o que fizemos' descritivo simples — é descrição **com análise**."*

A seção 4 ("Algumas análises") é hoje um **catálogo das seis frentes** — o que cada uma é e faz. Falta o passo analítico e faltam **indicadores como contexto** (`generos-e-formatos.md:31`): quantos participantes nos encontros de quinta? Que alcance tiveram vídeos/podcasts? Quantos cursos usaram os Custom GPTs? Que retornos concretos? Hoje o único número é "oito publicações no Instagram".

**Bom seed:** a tese está certa e consistente (sinergia entre frentes; nenhuma basta isolada), e o parágrafo da Discussão (linha 67) já tem o *embrião* da análise real, com raciocínio contrafactual ("os Custom GPTs sem o Manual… adoção acrítica; o Manual sem as ferramentas… documento formal"). **Esse parágrafo é o modelo** a estender para as seis frentes: mostrar a sinergia com evidência, não só afirmá-la.

---

## 5. Teoria: cortar o floreio

`anatomia-das-secoes.md:41`: *"Se um autor aparece uma vez no referencial e nunca mais, ele não está fazendo trabalho — corte."*

- **Aristóteles (1987):** aparece só na seção de ética (linha 31), não retorna. Decorativo.
- **Floridi (2022):** aparece só na introdução (linha 16), não retorna. Decorativo.
- **Freire (1996)** e **EDR (McKenney & Reeves):** retornam na Discussão — fazendo trabalho. ✓

**Decidir:** cada autor decorativo ou volta na análise fazendo tarefa argumentativa, ou sai.

---

## Forças a preservar (não mexer)

- **Pergunta de pesquisa + quatro objetivos** (linha 20): explícitos e bem formados. Ponto mais forte do texto.
- **Parágrafo de limites** (linha 70): faz exatamente o que um bom relato deve fazer — declara a natureza qualitativa/descritiva.

---

## Perguntas que destravam a próxima rodada

1. **Qual o evento/veículo, em que idioma ele exige o texto, e qual o limite de páginas?** (LNCS confirmado?)
2. **A revisão é cega dupla?** (decide o tamanho da cirurgia de anonimização)
3. **Que indicadores vocês têm em mãos hoje?** — nº de participantes nos encontros, alcance dos vídeos/podcasts, quantos cursos usaram cada GPT, depoimentos/retornos registrados. É isso que transforma o catálogo em análise.

**Próximo passo sugerido:** atacar primeiro o item 4 (descrição → análise), que é o que de fato decide o parecer.
