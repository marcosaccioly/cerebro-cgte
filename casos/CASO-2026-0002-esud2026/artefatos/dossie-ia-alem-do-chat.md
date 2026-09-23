---

# ARQUIVO: 00_LEIA_PRIMEIRO.md

# Dossiê de continuidade — ESUD 2026
## Projeto: “IA além do chat” — IA generativa + metodologia de Pastas/ICM + materiais interativos no Moodle

Este dossiê reúne o contexto útil da conversa de planejamento do relato de experiência para o **ESUD | CIESUD 2026**, Trilha Temática IV — Transformação Digital, Inteligência Artificial e Inovação na Educação.

O objetivo é permitir que outra IA continue o trabalho **sem perder decisões, referências, lacunas, limites metodológicos ou requisitos do evento**.

---

## 1. Situação atual do projeto

O trabalho será submetido, a princípio, como **Relato de Experiência**.

A direção escolhida evoluiu assim:

1. Tema inicial amplo: IA generativa na produção de materiais didáticos para EaD.
2. Refinamento: uso da IA para transformar materiais estáticos (PDF, PowerPoint, texto, gráficos, exercícios) em **recursos HTML interativos para Moodle**.
3. Referência inspiradora: **Arin Mizouri (2026)**, que mostra como educadores podem usar LLMs, via linguagem natural, para transformar PDFs/PowerPoints em materiais HTML interativos e acessíveis.
4. Diferencial do Cefor: incorporar à proposta a **metodologia de Pastas / Interpretable Context Methodology (ICM)**, de **Jake Van Clief e David McDermott (2026)**.
5. Tese atual: a inovação não está simplesmente em “a IA gerar HTML”, mas em **transformar essa capacidade em um processo educacional estruturado, transparente, auditável, reproduzível e com revisão humana**, organizado por pastas e contextos por etapa.

---

## 2. Título preferido até o momento

**IA além do chat: pastas e contexto na produção de materiais interativos e acessíveis para Moodle**

Contagem: 16 palavras, no limite informado pelo ESUD.

Outras opções discutidas:
- IA além do chat: ICM e engenharia de contexto na produção de materiais interativos para Moodle
- IA além do chat: engenharia de contexto para criar materiais interativos e acessíveis no Moodle
- IA além do chat: uma metodologia de pastas para produzir materiais interativos no Moodle
- IA além do chat: da engenharia de contexto à produção de materiais interativos no Moodle

O usuário gosta de manter o prefixo **“IA além do chat:”**.

---

## 3. Formulação central atual

### Questão orientadora principal
**Como uma metodologia de engenharia de contexto baseada em pastas pode estruturar o uso da IA generativa na produção de materiais didáticos interativos para Moodle?**

Questões secundárias possíveis:
- Em quais etapas a intervenção humana se mostra necessária?
- Que vantagens operacionais e pedagógicas a estruturação do contexto em etapas oferece em relação a um processo baseado apenas em prompts isolados?
- Como incorporar critérios pedagógicos, técnicos e de acessibilidade como referências persistentes do processo?

### Objetivo sugerido
**Relatar a experiência de aplicação de uma metodologia de engenharia de contexto baseada em pastas na produção, com inteligência artificial generativa, de recursos didáticos HTML interativos para Moodle, analisando suas contribuições para a organização do processo, a intervenção humana, a qualidade pedagógica e a acessibilidade.**

### Ideia central / tese
A IA generativa pode reduzir a barreira técnica entre a intenção pedagógica de professores/designers e a implementação de recursos interativos no AVA. Porém, o valor da experiência não está na geração automática em si, mas em **estruturar o contexto e o workflow de modo que cada etapa seja especializada, inspecionável e revisável por humanos**.

---

## 4. O que NÃO inventar

A outra IA NÃO deve afirmar sem evidência:
- que os materiais melhoraram a aprendizagem;
- que aumentaram engajamento;
- que reduziram tempo em X%;
- que os recursos atendem integralmente WCAG 2.1 AA;
- que o processo é superior a prompting monolítico;
- que houve avaliação com estudantes, docentes ou designers;
- que houve teste com leitor de tela, navegação por teclado ou ferramenta automática;
- que determinados modelos de IA foram usados;
- que foram produzidos X materiais;
- que houve economia de custos;
- que ICM foi formalmente “validada” no Cefor.

Esses pontos só entram no artigo se houver dados reais.

---

## 5. Arquivos deste dossiê

- `01_ESUD2026_REGRAS_E_ENQUADRAMENTO.md` — exigências do evento e implicações para a escrita.
- `02_PROPOSTA_CONCEITUAL_DO_RELATO.md` — objeto, tese, workflow e arquitetura de Pastas adaptada à produção educacional.
- `03_ESTADO_DA_ARTE_2025_2026.md` — papers e trabalhos diretamente relacionados.
- `04_LACUNAS_E_POSICIONAMENTO.md` — o que já está ocupado e onde está o diferencial.
- `05_DADOS_E_EVIDENCIAS_A_COLETAR.md` — checklist para documentar a experiência sem inventar resultados.
- `06_ROTEIRO_DE_ESCRITA_5_A_7_PAGINAS.md` — esqueleto do relato.
- `07_CONTEXTO_CEFOR_RELEVANTE.md` — contexto institucional útil, com alerta de anonimização.
- `08_REFERENCIAS_E_LINKS.md` — referências-chave e URLs.
- `09_PROMPT_DE_CONTINUIDADE_PARA_OUTRA_IA.md` — texto pronto para entregar a outra IA.

---

## 6. Prioridade imediata

Antes da redação final, a prioridade é documentar **3 a 5 casos reais de material** que tenham passado (ou que possam passar dentro da experiência relatada) pelo fluxo:

**material fonte → análise pedagógica → design da interação → geração HTML → validação → correção → Moodle**

Para cada caso, registrar:
- material original;
- objetivo pedagógico;
- modelo/ferramenta usada;
- prompts/contextos usados;
- quantidade de ciclos;
- artefatos intermediários;
- problemas encontrados;
- correções humanas;
- resultado final;
- evidências de validação técnica/pedagógica/acessibilidade realmente realizadas.


---

# ARQUIVO: 01_ESUD2026_REGRAS_E_ENQUADRAMENTO.md

# ESUD | CIESUD 2026 — regras e enquadramento do relato

## Evento
**22º Congresso Brasileiro de Ensino Superior a Distância (ESUD)** e **11º Congresso Internacional de Educação Superior a Distância (CIESUD)**.

Tema geral informado:
**“EaD Pública em Transformação: valorizando trajetórias e desenhando futuros sustentáveis e inovadores”**.

Realização prevista: **16 a 20 de novembro de 2026**, UFSC, Florianópolis.

Prazo de submissão informado na chamada: **20 de setembro de 2026**.

> Atenção: houve uma divergência nas informações do site sobre a data-limite de inscrição de autores aprovados (a chamada citada na conversa traz 30/10; outra parte das diretrizes mostrava 20/10). Isso não afeta a submissão imediata, mas deve ser conferido no site oficial quando chegar a fase de inscrição.

Site de submissões:
https://submissao-esud.ufms.br/home/about/submissions

---

## Modalidade escolhida
**ESUD2026 — Relatos de Experiência | Trilha Temática IV — Transformação Digital, Inteligência Artificial e Inovação na Educação**

### Escopo oficial relevante da Trilha IV
A trilha reúne pesquisas, experiências e reflexões sobre incorporação de tecnologias digitais emergentes em processos educacionais, com ênfase em:
- Inteligência Artificial;
- competências digitais;
- inovação pedagógica;
- cultura digital;
- educação midiática;
- formação docente;
- desafios éticos, sociais, multiculturais e de governança;
- EaD, semipresencial e presencial.

Entre os temas explicitamente listados:
- Inteligência Artificial na Educação;
- Inteligência Artificial Generativa (ChatGPT, Gemini, Claude, DeepSeek etc.);
- agentes inteligentes;
- LLMs;
- tutores inteligentes;
- sistemas adaptativos;
- Learning Analytics com IA;
- IA para avaliação;
- automação;
- IA responsável/confiável;
- modelos de educação aberta e a distância.

**A proposta “IA além do chat” tem aderência direta.**

---

## Requisitos formais relevantes

### Extensão
- **Relato de experiência: 5 a 7 páginas**, contando figuras, quadros, gráficos e referências.

### Resumo
- **200 a 300 palavras**.

### Título
- **máximo de 16 palavras**.

Título atual:
**IA além do chat: pastas e contexto na produção de materiais interativos e acessíveis para Moodle**
= 16 palavras.

### Palavras-chave
- 3 a 5.
- separadas por ponto final.

Sugestões iniciais:
**Inteligência Artificial Generativa. Engenharia de Contexto. Moodle. Materiais Didáticos Interativos. Educação a Distância.**

### Autoria
- máximo de 4 autores.
- os autores devem constar nos metadados do sistema, não no manuscrito cego.

### Anonimização / avaliação cega
- Não identificar autoria ou instituição no corpo do texto da versão submetida.
- O site reconhece que, em alguns casos, a experiência pode permitir identificação indireta, mas recomenda evitar detalhes desnecessários.

**Implicação:** mesmo que o trabalho seja sobre o Cefor/Ifes, na versão cega escrever algo como:
- “uma instituição federal de educação”;
- “uma equipe multidisciplinar responsável por educação a distância”;
- “um centro de referência em formação e educação a distância” somente se isso não tornar a autoria óbvia.

Na versão final, após aprovação, inserir autores/instituição segundo o modelo do evento.

### Formato
- arquivo `.docx`;
- A4;
- margens: superior 3 cm, inferior 2 cm, esquerda 3 cm, direita 3 cm;
- cabeçalho 2 cm; rodapé 1,25 cm;
- fonte Roboto 12;
- texto justificado;
- espaçamento 1,5;
- recuo de 1,25 cm na primeira linha.

### Figuras, quadros, tabelas e gráficos
- numerados e citados no texto;
- figuras: JPG a partir de 300 dpi;
- imagens enviadas também em ZIP como suplementares;
- tabelas/quadros/gráficos devem permanecer editáveis, não como imagem.

### Referências
- ABNT NBR 6023:2018.
- citações: ABNT NBR 10520:2023.
- incluir URLs quando aplicável.

---

## Avaliação

Critérios gerais informados:
1. Clareza, organização e linguagem.
2. Relevância do tema.
3. Aderência à trilha.
4. Referencial teórico.
5. Objetivos.
6. Metodologia.
7. Resultados e análise.
8. Considerações finais.
9. Formatação/normas.
10. Recomendação geral.

**Importante:** o formulário específico dos **Relatos de Experiência não possui os itens 6 e 7**, por causa das particularidades da modalidade.

### Implicação estratégica
Não transformar artificialmente a experiência em “pesquisa experimental”.
O texto precisa ter:
- contexto claro;
- objetivo;
- base conceitual suficiente;
- descrição rigorosa da experiência;
- análise crítica dos aprendizados;
- limites;
- considerações finais alinhadas ao objetivo.

Não é necessário inventar desenho experimental, grupo controle ou significância estatística.


---

# ARQUIVO: 02_PROPOSTA_CONCEITUAL_DO_RELATO.md

# Proposta conceitual do relato

## Título preferido
**IA além do chat: pastas e contexto na produção de materiais interativos e acessíveis para Moodle**

---

## 1. Objeto do relato

Relatar uma experiência de **produção de materiais didáticos interativos em HTML para Moodle**, apoiada por IA generativa, estruturada não por um único prompt, mas por uma **arquitetura de Pastas inspirada na Interpretable Context Methodology (ICM)**.

Materiais de entrada possíveis:
- PDF;
- PowerPoint;
- texto didático;
- gráfico;
- tabela;
- exercício;
- diagrama;
- material produzido pelo professor/conteudista.

Materiais de saída possíveis:
- atividade autocorretiva;
- gráfico explorável;
- diagrama interativo;
- acordeão/tabs;
- sequência explorável;
- simulação simples;
- recurso HTML responsivo;
- recurso incorporável à página/atividade do Moodle.

---

## 2. Duas referências estruturantes

### A. Mizouri (2026): O QUE produzir
Arin Mizouri apresenta um fluxo baseado em prompting em que educadores sem conhecimentos de programação transformam materiais estáticos, como PDFs e PowerPoints, em **recursos HTML interativos**, incluindo:
- figuras exploráveis;
- atividades self-check;
- temas ajustáveis;
- layouts responsivos;
- diagramas interativos;
- equipamentos virtuais;
- gráficos interativos.

O contexto é um AVA (Blackboard). A ideia central é que a GenAI reduz a barreira técnica para que educadores criem recursos que antes exigiriam competências de programação.

### B. Van Clief & McDermott (2026): COMO organizar
A **Interpretable Context Methodology (ICM)** usa:
- pastas numeradas como etapas;
- arquivos Markdown com instruções/contexto;
- escopo de contexto por etapa;
- artefatos intermediários;
- revisão humana entre etapas;
- separação entre referências estáveis e artefatos variáveis.

A combinação dessas duas referências gera o diferencial do relato:
**Mizouri → produção de materiais interativos**
+
**ICM → workflow estruturado, auditável e reproduzível**

---

## 3. Problema que o trabalho quer enfrentar

Um uso comum de GenAI para produção de materiais é:

**professor → mega-prompt → IA → produto final**

Esse modelo concentra, na mesma interação:
- conteúdo;
- objetivo educacional;
- linguagem;
- design;
- interação;
- código;
- acessibilidade;
- requisitos do Moodle.

O relato propõe experimentar uma lógica diferente:

**equipe → contexto estruturado → IA → artefato intermediário → revisão humana → nova etapa → IA → produto final**

A hipótese prática/conceitual é que a arquitetura por etapas:
- torna o processo mais legível;
- permite revisão humana em pontos naturais;
- separa tarefas;
- torna regras institucionais reutilizáveis;
- favorece rastreabilidade;
- facilita replicação por outras pessoas/equipes.

**Não afirmar superioridade causal sem comparação empírica.**

---

## 4. Questão orientadora

**Como uma metodologia de engenharia de contexto baseada em pastas pode estruturar o uso da IA generativa na produção de materiais didáticos interativos para Moodle?**

Questões derivadas:
- Em quais etapas a intervenção humana se mostra necessária?
- Como referências pedagógicas, técnicas e de acessibilidade podem ser incorporadas como contexto persistente?
- Como os artefatos intermediários ajudam a tornar o processo inspecionável e corrigível?
- Que limites surgem quando a IA é usada para gerar HTML educacional?

---

## 5. Objetivo

**Relatar a experiência de aplicação de uma metodologia de engenharia de contexto baseada em pastas na produção, com inteligência artificial generativa, de recursos didáticos HTML interativos para Moodle, analisando suas contribuições para a organização do processo, a intervenção humana, a qualidade pedagógica e a acessibilidade.**

---

## 6. Tese central possível

> A inovação não reside apenas na capacidade de um LLM gerar HTML educacional, mas na possibilidade de transformar essa geração em um processo estruturado, transparente, revisável e transferível para equipes de EaD por meio de engenharia de contexto e artefatos intermediários.

Versão mais curta:
> **IA além do chat** significa substituir o uso pontual de prompts por um processo de produção baseado em contexto, etapas e revisão humana.

---

## 7. Workflow educacional proposto/adaptado

Fluxo-base:

1. **Material fonte**
2. **Análise pedagógica**
3. **Design da interação**
4. **Produção HTML**
5. **Validação**
6. **Correção/refinamento**
7. **Publicação no Moodle**

Representação:

`material estático → análise → especificação da interação → HTML → validação → correção → Moodle`

Em cada passagem:
`IA gera/transforma → humano inspeciona/edita → próxima etapa`

---

## 8. Arquitetura de Pastas sugerida

```text
MATERIAL_INTERATIVO_MOODLE/
│
├── 00_config/
│   ├── identidade.md
│   ├── principios_design_educacional.md
│   ├── acessibilidade.md
│   ├── moodle.md
│   ├── padrao_visual.md
│   └── convencoes_html.md
│
├── 01_material_fonte/
│   ├── CONTEXT.md
│   └── input/
│       ├── slides.pdf
│       ├── texto.md
│       └── imagens/
│
├── 02_analise_pedagogica/
│   ├── CONTEXT.md
│   └── output/
│       └── analise.md
│
├── 03_design_interacao/
│   ├── CONTEXT.md
│   └── output/
│       └── especificacao.md
│
├── 04_producao_html/
│   ├── CONTEXT.md
│   └── output/
│       └── recurso.html
│
├── 05_validacao/
│   ├── CONTEXT.md
│   ├── checklist_pedagogico.md
│   ├── checklist_acessibilidade.md
│   ├── checklist_moodle.md
│   └── output/
│       └── relatorio_validacao.md
│
└── 06_moodle/
    ├── CONTEXT.md
    └── output/
        └── versao_final.html
```

**Atenção:** essa estrutura é uma adaptação proposta na conversa; confirmar quais pastas já são efetivamente utilizadas no Cefor antes de apresentar como prática consolidada.

---

## 9. Tradução das camadas ICM para o contexto educacional

### Referências estáveis (equivalente a Layer 3)
Podem permanecer entre diferentes materiais:
- princípios de design educacional;
- orientações de linguagem;
- DUA/UDL;
- acessibilidade;
- regras HTML;
- identidade visual;
- restrições/possibilidades do Moodle;
- convenções de interface;
- critérios de qualidade.

### Artefatos de trabalho (equivalente a Layer 4)
Mudam a cada material:
- PDF do professor;
- PPT;
- texto da disciplina;
- gráfico;
- imagem;
- atividade original;
- objetivos específicos;
- saída da etapa anterior.

A distinção é importante:
- referências = **restrições/padrões da “fábrica”**;
- artefatos = **material específico a ser transformado**.

---

## 10. Human-in-the-loop como princípio

Cada etapa deve terminar em um artefato humano-legível, que possa ser:
- aberto;
- revisado;
- corrigido;
- aprovado;
- versionado.

Isso evita apresentar a IA como produtora autônoma.

Exemplo:
1. IA identifica possibilidades de interação.
2. designer educacional corrige a análise.
3. IA produz especificação com base na versão corrigida.
4. humano valida.
5. IA gera HTML.
6. humano audita funcionamento e adequação.
7. versão final vai ao Moodle.

---

## 11. Três dimensões de validação

### Pedagógica
- a interação tem função educacional?
- está alinhada ao objetivo?
- evita interatividade decorativa?
- feedback é adequado?
- linguagem é apropriada?

### Técnica
- HTML funciona?
- é responsivo?
- funciona dentro das restrições do Moodle?
- não depende de recursos proibidos/inseguros?
- comportamento é consistente?

### Acessibilidade
- semântica HTML;
- headings;
- labels;
- foco;
- teclado;
- contraste;
- alternativas textuais;
- comportamento de componentes;
- leitor de tela, se realmente testado;
- critérios WCAG relevantes.

**Não afirmar conformidade WCAG completa somente por geração da IA ou por ferramenta automática.**


---

# ARQUIVO: 03_ESTADO_DA_ARTE_2025_2026.md

# Estado da arte direcionado — 2025–2026
## GenAI + produção de materiais + EaD/MOOC/AVA

Este arquivo reúne os trabalhos discutidos durante a conversa e indica sua função no posicionamento do relato.

---

# 1. Referência inspiradora principal

## Mizouri, Arin (2026)
**Prompting Your Way to Better Learning: How Generative AI Empowers Educators to Create Interactive, Accessible Teaching Materials**

Evento: **The 1st International Online Conference on Education Sciences**, sessão Technology Enhanced Education.

Link:
https://sciforum.net/paper/31969

Ideias centrais verificadas:
- LLMs permitem que educadores sem programação produzam materiais interativos via linguagem natural.
- PDFs e PowerPoints podem ser convertidos em HTML interativo.
- Exemplos: figuras exploráveis, self-check, temas ajustáveis, layouts responsivos, gráficos/diagramas interativos e equipamentos virtuais.
- O artigo enfatiza incorporação direta em AVA (Blackboard).
- Relata casos de ensino de matemática.
- Feedback inicial de estudantes sugere maior engajamento, mas isso é evidência preliminar do trabalho de Mizouri, não do Cefor.

### Como nosso trabalho avança
Não apenas prompting para gerar HTML:
**produção estruturada por engenharia de contexto/ICM + Moodle + artefatos intermediários + validação humana**.

---

# 2. Referência conceitual central — metodologia de Pastas

## Van Clief, Jake; McDermott, David (2026)
**Interpretable Context Methodology: Folder Structure as Agent Architecture**
arXiv:2603.16021v2.

Link:
https://arxiv.org/html/2603.16021v2

Pontos fundamentais:
- ICM substitui parte da orquestração em código por uma estrutura de arquivos/pastas.
- pastas numeradas representam etapas;
- Markdown contém prompts/contexto;
- o mesmo agente recebe contexto diferente em cada etapa;
- scripts locais lidam com tarefas mecânicas;
- adequado a workflows sequenciais com revisão humana.

Cinco princípios:
1. **One stage, one job** — uma etapa, uma função.
2. **Plain text as the interface** — texto simples como interface.
3. **Layered context loading** — contexto carregado por camadas, apenas o necessário.
4. **Every output is an edit surface** — toda saída intermediária é editável por humanos.
5. **Configure the factory, not the product** — configurar padrões persistentes do processo, não reconstruir tudo em cada execução.

Arquitetura em camadas:
- Layer 0: identidade global do workspace.
- Layer 1: roteamento da tarefa.
- Layer 2: contrato específico da etapa.
- Layer 3: **reference material** — regras estáveis, design system, convenções, conhecimento.
- Layer 4: **working artifacts** — material específico da execução e outputs intermediários.

Relevância educacional:
- separar “regras da fábrica” (design educacional, acessibilidade, Moodle, estilo) dos “ingredientes” (PDF, PPT, texto, gráfico da aula).
- criar pontos naturais de revisão humana.

### Implementação particularmente relevante no artigo
O ICM inclui um workspace de **Course Deck Production**:
- entrada: PDFs, papers, lecture notes, rough outlines;
- cinco etapas: extração de conteúdo, planejamento estrutural, elaboração de slides, especificação visual, montagem final;
- o artigo argumenta que tornar o plano estrutural um artefato editável permite corrigir rumos antes das etapas posteriores.

### Limitações do próprio ICM que devemos reconhecer
- evidência empírica ainda inicial;
- boa parte dos relatos de uso vem de comunidade de praticantes, não estudo controlado;
- não houve comparação controlada ICM vs. prompting monolítico;
- testes relatados concentraram-se na família Claude;
- é mais apropriado para workflows sequenciais/revisáveis/repetíveis do que para alta concorrência ou colaboração multiagente em tempo real.

**Importante:** nosso artigo deve apresentar o uso educacional como **adaptação/experiência**, não como prova definitiva de superioridade da ICM.

---

# 3. ESUD 2025 — antecedente direto

## Neves Junior et al. (ESUD 2025; anais publicados em 2026)
**Uso da Inteligência Artificial Generativa na produção de disciplina para cursos na modalidade a distância (EaD)**

Link:
https://submissoes.site.ufabc.edu.br/index.php/esud2025/article/view/85

Modalidade:
Relato de Experiência — Trilha IV.

Usos relatados:
- estruturar unidades;
- definir tópicos;
- criar títulos;
- introduções/conclusões;
- indicar vídeos/aplicativos/ferramentas;
- esclarecer dúvidas;
- sugerir referências;
- gerar avaliações de múltipla escolha;
- revisão com fontes confiáveis.

### Implicação
“Usamos IA para produzir uma disciplina EaD” **já foi publicado no próprio ESUD**.

Nosso relato deve avançar para:
- material interativo;
- HTML;
- Moodle;
- engenharia de contexto;
- workflow por etapas;
- rastreabilidade;
- revisão humana;
- acessibilidade.

---

# 4. EMOOCS 2025

## Haugsbakken, Hagelia & Nagel
**The Role of Generative AI in SPOC-Making: Student Perception of Partially AI-Generated Learning Resources**

Evento:
EMOOCS 2025 — publicado em LNCS.

DOI:
https://doi.org/10.1007/978-3-032-00056-9_1

Link:
https://link.springer.com/chapter/10.1007/978-3-032-00056-9_1

Relevância:
- produção de recursos parcialmente gerados por IA em dois SPOCs;
- textos e testes foram geralmente percebidos positivamente;
- imagens geradas por IA foram menos centrais;
- autores enfatizam salvaguarda por educadores e julgamento pedagógico;
- concluem que a vantagem da GenAI está mais em **eficiência de produção** do que em mudança pedagógica fundamental;
- indicam como pesquisa futura estudar melhor **a experiência dos docentes na criação**.

### Lacuna aproveitável
Nosso relato olha para o **processo do produtor/designer**, não apenas a percepção discente.

---

# 5. ECEL 2025

## Hatakka & Ask
**Lessons Learned from Creating Course Content using Generative AI**

Evento:
24th European Conference on e-Learning (ECEL 2025).

Link:
https://papers.academic-conferences.org/index.php/ecel/article/view/3939

Relevância:
- ChatGPT na reformulação de disciplina;
- produção de casos, scripts SQL e requisitos;
- bons rascunhos iniciais;
- problemas de alinhamento pedagógico e falhas lógicas;
- reforça prompt engineering, revisão crítica e human-in-the-loop.

### Limite
Focado em conteúdos específicos e em prompting; não estrutura pipeline de produção institucional/AVA.

---

# 6. AICSET 2025 / publicação 2026

## Hajar & Soumia
**Instructional Design Supported by Generative AI: Towards Human-Machine Synergy in the Creation of Educational Content Scenarios**

DOI:
https://doi.org/10.1007/978-3-032-14430-0_6

Relevância:
- compara storyboard humano e storyboard criado por ChatGPT;
- observa coerência, relevância das atividades, conteúdo e tempo de concepção.

### Limite
Analisa storyboard, não fluxo completo até implantação no AVA.

---

# 7. Learning@Scale 2026 — integração com LMS

## Gupta et al.
**TEACHMate: Designing In-Context Instructor-Centered GenAI Support for Learning Management Systems**

Evento:
ACM Learning @ Scale 2026.

DOI:
https://doi.org/10.1145/3774398.3811617

Relevância:
- assistente GenAI incorporado ao **Canvas LMS**;
- foco em trabalho preparatório do professor;
- estudo formativo com 10 docentes;
- avaliação com 12 docentes;
- três valores identificados: **personalização, transparência e controle**;
- destaca apoio contextualizado dentro do fluxo do LMS.

### Lacuna
Não trata workflow multiprofissional completo de produção de material nem Moodle.

---

# 8. Learning@Scale 2026 — momento do controle humano

## Li, Wang & Wang
**When Should Teachers Control AI Generation for Mathematics Visuals?**

Preprint:
https://arxiv.org/abs/2605.10672

DOI do congresso:
https://doi.org/10.1145/3774398.3811626

Relevância:
- 24 professores de matemática;
- três estágios de controle:
  - pré-geração;
  - durante geração;
  - pós-geração;
- controle pós-geração teve avaliações mais altas para previsibilidade/correção;
- mostra que automação e agência humana devem ser calibradas por etapa.

### Relação com nosso trabalho
Dá base para discutir por que **review gates** são importantes em produção educacional.

---

# 9. AIED 2026 — avaliação da interatividade

## Wang, Wang & Wen
**Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations**

Preprint:
https://arxiv.org/abs/2606.31012

Conference paper: AIED 2026.

Relevância:
- problema já não é apenas “gerar recursos interativos”;
- problema é avaliar a **qualidade da interação**;
- EE-Eval modela interatividade como estados/transições;
- milhares de explicações exploráveis, 127 conceitos, 6 modelos.

### Implicação
Nosso trabalho deve evitar assumir que “funciona tecnicamente” = “é pedagogicamente interativo”.

---

# 10. Moodle + Claude (2026) — artigo de periódico

## Beltrán Lizárraga, Niebla Zatarain & Ojeda Campaña
**Desarrollo de aula iconográfica en Moodle utilizando Claude para mejorar su usabilidad**

Periódico: Apertura, 2026.

DOI:
https://doi.org/10.32870/Ap.v18n1.2723

Relevância:
- Claude gera HTML5 para Moodle;
- ADDIE;
- princípios de DUA;
- 19 participantes;
- resultados positivos de usabilidade/design.

### Implicação
Somente “usar Claude para gerar HTML no Moodle” já tem antecedente.
Nosso diferencial precisa ser **ICM/engenharia de contexto + produção interativa + validação em etapas**.

---

# 11. Framework de produção de e-learning (2026) — periódico

## Choi, Kang & Shin
**A Functional Framework for E-Learning Content Creation Using Generative AI Tools**

Applied Sciences, 2026.

DOI:
https://doi.org/10.3390/app16021124

Relevância:
- framework centrado na produção de e-learning;
- etapas funcionais desde planejamento até edição, automação e revisão final;
- mapeia diferentes ferramentas GenAI ao workflow;
- separa input, AI processing e output no LMS.

### Implicação
“Criar um framework genérico de produção com GenAI” já tem antecedente forte.
Nosso relato deve ser **uma experiência concreta, situada e operacional**.

---

# 12. REA/MOOC — produção comparativa

## Carbonell-Alcocer et al.
**Impact of Generative Artificial Intelligence on the efficiency, quality, and innovation in the production of Open Educational Resources for MOOCs**

DOI:
https://doi.org/10.32870/cys.v2025.8784

Acesso:
https://burjcdigital.urjc.es/bitstreams/e8143932-d262-4076-8c3f-529dfc3bef66/download

Relevância:
- compara 121 recursos audiovisuais/multimídia de dois MOOCs;
- um processo usou GenAI e outro não;
- examina eficiência, qualidade e inovação.

### Implicação
Se o Cefor tiver dados de tempo/retrabalho, esse estudo pode ser base comparativa conceitual. Não inventar métricas se não existirem.

---

# Síntese do estado da arte

## Já bastante explorado
- IA gerando textos;
- IA criando questões;
- IA produzindo rascunhos;
- comparação humano vs. IA;
- ganho de tempo percebido;
- prompting;
- “human-in-the-loop” em sentido geral.

## Fronteira mais recente
- controle humano em estágios;
- suporte GenAI dentro do LMS;
- quality assurance da interatividade;
- context-aware authoring;
- workflows de produção;
- rastreabilidade;
- integração das regras de design ao contexto;
- acessibilidade como parte do processo.

## Espaço mais promissor para o relato
**Adaptar a ICM/metodologia de Pastas para um workflow real de produção de recursos HTML interativos no Moodle, documentando como contextos persistentes, artefatos intermediários e pontos de revisão humana organizam a prática de uma equipe de EaD.**


---

# ARQUIVO: 04_LACUNAS_E_POSICIONAMENTO.md

# Lacunas e posicionamento do relato

## 1. O que evitar como contribuição principal

### “Usamos ChatGPT/Claude para produzir material EaD”
Já ocupado.

### “A IA ajuda a escrever textos/questões”
Muito ocupado.

### “A IA economiza tempo”
Pode aparecer como achado se houver dado, mas não deve ser a novidade principal.

### “A IA consegue gerar HTML no Moodle”
Já há antecedente publicado em 2026.

### “Criamos um framework de IA para e-learning”
Já existe literatura conceitual forte.

### “Human-in-the-loop é importante”
É consenso emergente; precisa ser operacionalizado.

---

## 2. Lacuna que o trabalho pode ocupar

### Engenharia de contexto aplicada ao Design Educacional
A literatura educacional fala muito em prompt engineering. A proposta desloca o foco para:
- seleção de contexto;
- separação de regras persistentes e material de trabalho;
- contratos de etapa;
- outputs intermediários;
- handoffs;
- auditabilidade;
- reuso institucional.

### Workflow real para produção interativa no Moodle
Em vez de estudar uma saída isolada, acompanhar:
`fonte → análise pedagógica → design de interação → implementação → validação → Moodle`

### Human-in-the-loop operacional
Não apenas afirmar que o humano revisa, mas mostrar:
- **onde** revisa;
- **o que** revisa;
- **qual artefato** recebe;
- **qual decisão** toma;
- **o que acontece depois da revisão**.

### Regras institucionais como contexto reutilizável
Transformar:
- acessibilidade;
- design;
- Moodle;
- linguagem;
- padrões de interface;
- critérios pedagógicos

em **referências persistentes do workspace**, e não pedaços repetidos em todo prompt.

### Rastreabilidade
Pasta + arquivos + outputs intermediários podem tornar visível:
- como a saída final surgiu;
- em que etapa houve desvio;
- onde ocorreu correção;
- qual regra orientou uma decisão.

---

## 3. Contribuição acadêmico-prática sugerida

O relato pode contribuir com uma **arquitetura de produção educacional inspirada na ICM**, adaptada a materiais interativos para Moodle.

Não apresentar como “modelo validado”.
Termos mais seguros:
- proposta operacional;
- adaptação;
- sistematização da experiência;
- arquitetura de trabalho;
- workflow;
- organização do processo;
- protocolo experimental/inicial, se pertinente.

---

## 4. Diferencial frente a Mizouri (2026)

### Mizouri
`material estático → prompting → HTML interativo → Blackboard`

### Nosso relato
`material estático → contexto organizado por pastas → etapas especializadas → artefatos intermediários → revisão humana → HTML interativo → validação → Moodle`

O avanço não é “um HTML melhor” por definição.
O avanço é **tornar o processo de produção mais estruturado, inspecionável e transferível**.

---

## 5. Diferencial frente ao ESUD 2025

### Relato já publicado
`IA → estrutura e produz componentes de uma disciplina EaD`

### Nosso relato
`ICM/engenharia de contexto → workflow de transformação de materiais em recursos interativos → Moodle → validação humana`

---

## 6. Diferencial frente ao artigo Moodle + Claude (2026)

### Beltrán et al.
`Claude → HTML5/iconografia Moodle → usabilidade`

### Nosso relato
`ICM/pastas → intenção pedagógica → especificação da interação → HTML → validação pedagógica/técnica/acessibilidade → Moodle`

---

## 7. Riscos conceituais

1. **Confundir interatividade com aprendizagem.**
   - interação tecnicamente sofisticada não garante aprendizagem.

2. **Confundir acessibilidade com geração automática.**
   - IA pode gerar HTML com erros semânticos/teclado/labels/contraste.

3. **Chamar um processo de “metodologia validada” sem validação.**
   - usar “adaptação da ICM” ou “workflow inspirado na ICM”.

4. **Superestimar a evidência do ICM.**
   - o próprio paper reconhece limitações empíricas.

5. **Tratar uma ferramenta/modelo específico como o foco.**
   - o foco deve ser o processo; ICM é model-agnostic em princípio.

6. **Fazer propaganda tecnológica.**
   - documentar falhas, retrabalho, limites e decisões humanas.

---

## 8. Formulação de contribuição recomendada

> O relato sistematiza uma experiência de adaptação de princípios da Interpretable Context Methodology à produção de recursos didáticos interativos no Moodle, organizando referências pedagógicas, técnicas e de acessibilidade como contexto persistente e estruturando a produção em etapas com artefatos intermediários e pontos de revisão humana.

Essa formulação é forte porque descreve o que o trabalho faz sem alegar causalidade não demonstrada.


---

# ARQUIVO: 05_DADOS_E_EVIDENCIAS_A_COLETAR.md

# Dados e evidências a coletar antes da redação final

A qualidade do relato depende de **casos reais e evidência de processo**. Não inventar resultados.

---

## 1. Caracterização da experiência

Preencher:
- Período em que a experiência ocorreu:
- Quantidade de profissionais envolvidos:
- Papéis envolvidos (professor/conteudista, designer educacional, programador visual, TI, acessibilidade etc.):
- Quantidade de cursos/disciplina(s):
- Quantidade de materiais produzidos:
- Tipos de materiais-fonte:
- Modelos/ferramentas de IA usados:
- Versões/modelos, se registradas:
- Como a IA acessou as pastas/contextos:
- Como o HTML foi incorporado ao Moodle:
- Versão do Moodle:
- Restrições técnicas relevantes do Moodle:

---

## 2. Escolher 3 a 5 casos fortes

Idealmente, materiais diferentes.

### Caso A — exercício estático → atividade self-check
- Fonte:
- Objetivo:
- Interação desejada:
- Etapas:
- Problemas:
- Correções:
- Validação:
- Resultado:

### Caso B — gráfico/tabela estática → explorável
- Fonte:
- Objetivo:
- Interação:
- Etapas:
- Problemas:
- Correções:
- Resultado:

### Caso C — slide/processo → diagrama interativo
- Fonte:
- Objetivo:
- Interação:
- Etapas:
- Problemas:
- Correções:
- Resultado:

### Caso D — opcional
### Caso E — opcional

---

## 3. Registro mínimo por caso

Criar uma tabela:

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

---

## 4. Evidência especialmente valiosa

### Antes → intermediário → depois
Guardar:
1. material original;
2. output inicial;
3. comentário/correção humana;
4. output refinado;
5. captura da versão no Moodle.

Isso demonstra **human-in-the-loop** sem depender de opinião abstrata.

---

## 5. Evidência de engenharia de contexto

Documentar quais arquivos realmente existiam/foram usados, por exemplo:
- `CONTEXT.md`;
- `acessibilidade.md`;
- `moodle.md`;
- `design-educacional.md`;
- `identidade.md`;
- output da etapa anterior.

Registrar:
- o que cada arquivo continha;
- para quais etapas ele era carregado;
- o que era persistente;
- o que mudava por material.

---

## 6. Evidência de revisão humana

Para cada stage/review gate:
- Quem revisou?
- O que observou?
- O que modificou?
- O erro era:
  - pedagógico?
  - factual?
  - visual?
  - técnico?
  - acessibilidade?
  - compatibilidade com Moodle?
- A correção foi feita diretamente no artefato ou via nova instrução à IA?

---

## 7. Acessibilidade: somente relatar o que foi realmente verificado

Possíveis verificações:
- estrutura semântica;
- headings;
- labels;
- alt text;
- contraste;
- foco visível;
- navegação por teclado;
- uso sem mouse;
- leitura por leitor de tela;
- responsividade;
- ferramenta automática (qual?).

**Não transformar validação automática em declaração de conformidade total com WCAG.**

Se a acessibilidade não tiver sido testada sistematicamente:
- mudar a redação para “orientada por critérios de acessibilidade”;
- relatar a acessibilidade como dimensão de projeto/validação em desenvolvimento;
- não prometer “material acessível”.

---

## 8. Métricas opcionais — apenas se houver registro confiável

- tempo até primeiro protótipo;
- tempo total;
- número de iterações;
- quantidade de correções;
- quantidade de erros;
- etapas em que mais houve intervenção;
- retrabalho;
- reutilização da estrutura em materiais posteriores.

Se não houver baseline, usar descrição qualitativa e evitar percentuais.

---

## 9. Dados de percepção — somente se já existirem ou forem coletados de modo adequado

Possíveis públicos:
- designers educacionais;
- professores;
- equipe técnica;
- estudantes.

Perguntas possíveis:
- facilidade de produzir;
- controle percebido;
- previsibilidade;
- utilidade dos artefatos intermediários;
- confiança;
- clareza do workflow;
- facilidade de corrigir;
- qualidade percebida;
- usabilidade.

**Atenção ética:** se houver coleta sistemática com pessoas para fins de pesquisa, avaliar necessidade de procedimentos éticos/CEP conforme natureza e desenho. Para um relato de prática, não converter informalmente feedbacks privados em “dados de pesquisa” sem analisar essa questão.

---

## 10. Figuras que podem fortalecer o relato

1. **Fluxo macro**: material → análise → interação → HTML → validação → Moodle.
2. **Arquitetura de Pastas**.
3. **Antes/depois** de um recurso.
4. **Review gates** humanos.
5. Quadro “referências persistentes vs. artefatos de trabalho”.
6. Quadro com casos produzidos e principais ajustes.

Como o relato tem 5–7 páginas, escolher no máximo 2–3 figuras/quadro realmente informativos.


---

# ARQUIVO: 06_ROTEIRO_DE_ESCRITA_5_A_7_PAGINAS.md

# Roteiro de escrita do relato — 5 a 7 páginas

O ESUD limita relatos a 5–7 páginas, incluindo figuras e referências. O texto precisa ser compacto.

---

# Estrutura recomendada

## Título
**IA além do chat: pastas e contexto na produção de materiais interativos e acessíveis para Moodle**

---

## Resumo — 200 a 300 palavras

Estrutura em 5 movimentos, sem tópicos:
1. contexto/problema;
2. objetivo;
3. descrição breve da experiência;
4. principais aprendizados/resultados observados;
5. contribuição.

**Não escrever resultados antes de os dados da experiência estarem consolidados.**

---

## 1. Introdução — ~0,75 a 1 página

### Parágrafo 1
Problema:
- GenAI reduziu a barreira técnica para criação digital;
- educadores podem gerar código/HTML por linguagem natural;
- isso abre possibilidades para AVAs.

### Parágrafo 2
Limite do uso baseado apenas em chat/prompt:
- contextos muito amplos;
- tarefas heterogêneas no mesmo prompt;
- baixa rastreabilidade;
- dificuldade de padronização/reuso;
- necessidade de revisão.

### Parágrafo 3
Referência Mizouri:
- transformar materiais estáticos em HTML interativo;
- potencial para AVAs;
- interatividade como design de aprendizagem.

### Parágrafo 4
Referência ICM:
- engenharia de contexto;
- pastas;
- etapa/função;
- artefatos intermediários;
- human-in-the-loop.

### Parágrafo 5
Lacuna e objetivo:
- adaptação desses princípios ao contexto de produção EaD/Moodle;
- objetivo do relato.

---

## 2. Fundamentos conceituais — ~1 página

### 2.1 IA generativa e autoria de materiais interativos
Usar:
- Mizouri (2026);
- TEACHMate (2026);
- Haugsbakken et al. (EMOOCS);
- Choi et al. (framework e-learning), se couber.

Ponto:
não é só geração de texto; IA está entrando no **authoring** de materiais e no LMS.

### 2.2 Engenharia de contexto e ICM
Explicar sucintamente:
- prompt engineering ≠ context engineering;
- cinco princípios;
- referências estáveis vs. artefatos de trabalho;
- review gates.

Ponto de transição:
a ICM não é originalmente um modelo pedagógico; o relato testa/adapta seus princípios em um workflow educacional.

---

## 3. Contexto e descrição da experiência — ~2 páginas

### 3.1 Contexto institucional
Na versão cega:
- equipe de uma instituição pública/federal de EaD;
- produção de cursos e materiais no Moodle;
- necessidade de materiais interativos com menor dependência de codificação manual.

Evitar nomear Cefor/Ifes no manuscrito cego.

### 3.2 Organização do workspace
Apresentar a arquitetura de Pastas realmente utilizada.

### 3.3 Etapas
Exemplo:
1. entrada;
2. análise pedagógica;
3. design de interação;
4. produção HTML;
5. validação;
6. Moodle.

### 3.4 Casos
Descrever 3–5 recursos:
- o que eram;
- no que foram transformados;
- principais iterações.

Inserir uma figura/quadro central.

---

## 4. Aprendizados e análise crítica — ~1 a 1,5 página

Organizar por achados, não por ferramenta.

Possíveis eixos, se confirmados pelos dados:

### A. Redução da barreira técnica
GenAI torna implementação HTML mais acessível.

### B. Contexto segmentado
Separar análise, design e código reduz mistura de papéis/tarefas.

### C. Artefatos intermediários
Permitem corrigir decisões antes da geração final.

### D. Papel do humano
Maior relevância em:
- definição de intenção;
- validação pedagógica;
- verificação final;
- acessibilidade;
- troubleshooting no Moodle.

### E. Limites
- código que funciona fora e falha no Moodle;
- dependências;
- acessibilidade;
- comportamento inconsistente;
- excesso de interatividade;
- erros factuais;
- necessidade de expertise do DE.

Comparar com:
- ICM;
- Mizouri;
- Li et al. (controle humano);
- TEACHMate;
- EE-Eval;
- Moodle + Claude.

---

## 5. Considerações finais — ~0,5 página

Voltar ao objetivo.

Mensagem sugerida:
- a principal mudança não é “IA escreve HTML”;
- é a possibilidade de estruturar a produção como um pipeline humano–IA;
- pastas/contexto tornam o processo legível, compartilhável e revisável;
- aplicabilidade potencial a equipes de EaD;
- limites da experiência;
- próximos passos: mais casos, avaliação formal, acessibilidade, comparação de workflows/modelos.

---

# Possível figura principal

```text
MATERIAL FONTE
      ↓
ANÁLISE PEDAGÓGICA
      ↓
[REVISÃO HUMANA]
      ↓
DESIGN DA INTERAÇÃO
      ↓
[REVISÃO HUMANA]
      ↓
GERAÇÃO HTML
      ↓
VALIDAÇÃO
pedagógica | técnica | acessibilidade
      ↓
[CORREÇÃO]
      ↓
MOODLE
```

Ao lado, mostrar que cada estágio recebe:
- `CONTEXT.md`;
- referências persistentes adequadas;
- output da etapa anterior.

---

# Possível quadro conceitual

| Tipo de contexto | Exemplos | Função |
|---|---|---|
| Persistente | acessibilidade, Moodle, design, estilo | restrições e padrões |
| De trabalho | PDF, PPT, texto, gráfico | material a transformar |
| Intermediário | análise.md, especificacao.md | handoff entre etapas |
| Validação | checklist/relatório | revisão antes da publicação |

---

# Estilo de escrita

- linguagem acadêmica, mas concreta;
- evitar jargão tecnológico sem função;
- sempre conectar tecnologia a processo educacional;
- não antropomorfizar a IA;
- não chamar output de “acessível” sem validação;
- usar “apoio”, “mediação”, “workflow”, “contexto”, “artefatos”, “revisão”;
- diferenciar achado da experiência de afirmação da literatura.


---

# ARQUIVO: 07_CONTEXTO_CEFOR_RELEVANTE.md

# Contexto do Cefor/Ifes útil ao relato
## Uso interno para a IA que dará continuidade

**Atenção:** essas informações podem orientar a redação, mas a versão submetida ao ESUD é duplo-cega e não deve identificar autores/instituição diretamente.

---

## Unidade e atuação
- Instituição: Instituto Federal do Espírito Santo (Ifes).
- Centro: Centro de Referência em Formação e Educação a Distância (Cefor).
- Área citada: CGTE — Coordenadoria Geral de Tecnologias Educacionais.
- Atuação envolve:
  - apoio a docentes EaD;
  - Moodle;
  - design educacional;
  - capacitações;
  - eventos;
  - suporte tecnológico/pedagógico.

## Ambiente virtual
- Moodle é ambiente central.
- Tema institucional citado anteriormente: Boost Union.
- Há experiência de customização, suporte e produção de salas/recursos.
- Não assumir versão exata utilizada na experiência do artigo sem confirmação.

## Perfil profissional do autor principal
- atuação como Programador Visual/TAE e em design educacional/tecnologias educacionais;
- experiência técnica e pedagógica com Moodle;
- pesquisa e formação em IA aplicada à educação.

## Contexto de IA
O Cefor vem trabalhando com:
- oficinas e formação em IA;
- IA para educadores;
- design educacional apoiado por IA;
- produção/revisão de atividades;
- discussão sobre agentes/RAG;
- processos de produção de materiais.

**Neste relato, porém, NÃO incluir todas essas iniciativas.**
O recorte deve permanecer:
**metodologia de Pastas/ICM + produção de recursos HTML interativos + Moodle + revisão humana**.

---

## Elemento institucional distintivo informado pelo usuário
A equipe do Cefor está **focada no uso da metodologia de Pastas** e percebe inúmeras vantagens dela para educação.

A referência conceitual indicada pelo usuário é:
**Van Clief & McDermott (2026), Interpretable Context Methodology: Folder Structure as Agent Architecture**
https://arxiv.org/html/2603.16021v2

Antes da redação final, confirmar:
- há quanto tempo o Cefor usa a lógica de Pastas;
- em quais fluxos;
- quem utiliza;
- se a implementação segue ICM literalmente ou é adaptação;
- quais arquivos/pastas já existem;
- quais regras/CONTEXT.md reais;
- que materiais já foram produzidos;
- quais modelos de IA foram usados.

---

## Como anonimizar no manuscrito cego

Possíveis formulações:
- “uma instituição federal de educação brasileira”;
- “uma equipe multidisciplinar dedicada à educação a distância”;
- “uma unidade responsável por formação e tecnologias educacionais”.

Evitar, na primeira versão:
- Ifes;
- Cefor;
- CGTE;
- nomes de projetos que tornem a autoria óbvia;
- links institucionais próprios.

Na versão final aprovada, restaurar a identificação conforme orientações do evento.


---

# ARQUIVO: 08_REFERENCIAS_E_LINKS.md

# Referências e links centrais

Este arquivo não substitui uma revisão bibliográfica final em ABNT. Ele serve como base verificada de continuidade.

---

## 1. ICM / metodologia de Pastas

VAN CLIEF, Jake; MCDERMOTT, David. **Interpretable Context Methodology: Folder Structure as Agent Architecture**. arXiv:2603.16021v2, 2026.

HTML:
https://arxiv.org/html/2603.16021v2

Abstract:
https://arxiv.org/abs/2603.16021

Pontos a citar:
- numbered folders represent stages;
- Markdown carries prompts/context;
- one stage, one job;
- layered context loading;
- reference material vs working artifacts;
- every output is an edit surface;
- configure the factory, not the product;
- human review at boundaries;
- course deck production as working implementation;
- limits empíricos reconhecidos pelos autores.

---

## 2. Materiais interativos via GenAI

MIZOURI, Arin. **Prompting Your Way to Better Learning: How Generative AI Empowers Educators to Create Interactive, Accessible Teaching Materials**. Proceedings of The 1st International Online Conference on Education Sciences, 2026.

Link:
https://sciforum.net/paper/31969

Pontos:
- PDF/PPT → HTML interativo;
- figuras/gráficos exploráveis;
- self-check;
- diagramas interativos;
- layouts responsivos;
- Blackboard;
- educadores sem programação.

**Cuidado:** a afirmação de WCAG 2.1 AA é do trabalho de Mizouri. Nosso relato precisa verificar acessibilidade de forma independente.

---

## 3. ESUD 2025 — antecedente direto

NEVES JUNIOR, Afranio Ferreira et al. **Uso da Inteligência Artificial Generativa na produção de disciplina para cursos na modalidade a distância (EaD)**. Anais ESUD|CIESUD 2025.

Link:
https://submissoes.site.ufabc.edu.br/index.php/esud2025/article/view/85

Uso:
- mostrar que “GenAI para produzir disciplina EaD” já apareceu no ESUD.

---

## 4. SPOC/MOOC

HAUGSBAKKEN, Halvdan; HAGELIA, Marianne; NAGEL, Ilka. **The Role of Generative AI in SPOC-Making: Student Perception of Partially AI-Generated Learning Resources**. EMOOCS 2025.

DOI:
https://doi.org/10.1007/978-3-032-00056-9_1

Link:
https://link.springer.com/chapter/10.1007/978-3-032-00056-9_1

---

## 5. Course content / ECEL

HATAKKA, Mathias; ASK, Andreas. **Lessons Learned from Creating Course Content using Generative AI**. European Conference on e-Learning, 2025.

Link:
https://papers.academic-conferences.org/index.php/ecel/article/view/3939

---

## 6. Instructional design + GenAI

HAJAR, Ward; SOUMIA, Tamani. **Instructional Design Supported by Generative AI: Towards Human-Machine Synergy in the Creation of Educational Content Scenarios**.

DOI:
https://doi.org/10.1007/978-3-032-14430-0_6

---

## 7. GenAI no LMS

GUPTA, Aham et al. **TEACHMate: Designing In-Context Instructor-Centered GenAI Support for Learning Management Systems**. ACM Learning @ Scale 2026.

DOI:
https://doi.org/10.1145/3774398.3811617

Pontos:
- Canvas;
- instructor-centered;
- contextualização no curso;
- personalization, transparency, control.

---

## 8. Controle humano na geração

LI, Zhengxu; WANG, Junling; WANG, April Yi. **When Should Teachers Control AI Generation for Mathematics Visuals?** ACM Learning @ Scale 2026.

Preprint:
https://arxiv.org/abs/2605.10672

DOI:
https://doi.org/10.1145/3774398.3811626

Pontos:
- controle pré, durante e pós-geração;
- 24 professores;
- post-generation control favoreceu percepção de previsibilidade/correção.

---

## 9. Avaliação da interatividade

WANG, Xiaozao; WANG, Zhewei; WEN, Hongyi. **Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations**. AIED 2026.

Preprint:
https://arxiv.org/abs/2606.31012

Pontos:
- interatividade não deve ser julgada apenas por execução/visual;
- estados, transições e respostas ao estudante;
- alinhamento a intenção pedagógica.

---

## 10. Moodle + Claude

BELTRÁN LIZÁRRAGA, María Guadalupe; NIEBLA ZATARAIN, Virginia Berenice; OJEDA CAMPAÑA, José Ismael. **Desarrollo de aula iconográfica en Moodle utilizando Claude para mejorar su usabilidad**. Apertura, 2026.

DOI:
https://doi.org/10.32870/Ap.v18n1.2723

Pontos:
- Claude;
- HTML5;
- Moodle;
- DUA;
- avaliação de usabilidade.

---

## 11. Framework de e-learning

CHOI, Sung-Wook; KANG, Bongsoo; SHIN, Yong Jae. **A Functional Framework for E-Learning Content Creation Using Generative AI Tools**. Applied Sciences, 2026, 16(2), 1124.

DOI:
https://doi.org/10.3390/app16021124

Link:
https://www.mdpi.com/2076-3417/16/2/1124

Pontos:
- workflow de criação de e-learning;
- papel de instrutor e suporte técnico;
- etapas funcionais;
- IA mapeada a diferentes atividades;
- output em LMS.

---

## 12. REA/MOOCs — impacto na produção

CARBONELL-ALCOCER, Alejandro et al. **Impact of Generative Artificial Intelligence on the efficiency, quality, and innovation in the production of Open Educational Resources for MOOCs**.

DOI:
https://doi.org/10.32870/cys.v2025.8784

PDF:
https://burjcdigital.urjc.es/bitstreams/e8143932-d262-4076-8c3f-529dfc3bef66/download

Ponto:
comparação de 121 REA audiovisuais/multimídia em dois MOOCs.

---

## 13. Diretrizes ESUD 2026

Submissões:
https://submissao-esud.ufms.br/home/about/submissions

Modelo de relato (link disponível na página de submissões):
Google Docs/cópia e DOCX devem ser obtidos do site oficial.

---

# Referências secundárias potenciais a recuperar do ICM, se houver espaço

O artigo ICM se apoia em:
- context engineering;
- “lost in the middle”;
- human-AI interaction;
- mixed-initiative systems;
- Human-Centered AI;
- automation levels;
- AI Chains;
- Unix pipeline/composability.

Para um relato de 5–7 páginas, não é necessário importar todo esse referencial. Priorizar:
1. ICM;
2. Mizouri;
3. 2–4 trabalhos educacionais diretamente comparáveis.


---

# ARQUIVO: 09_PROMPT_DE_CONTINUIDADE_PARA_OUTRA_IA.md

# Prompt de continuidade para outra IA

Copie este texto junto com os demais arquivos do dossiê.

---

Você está dando continuidade à elaboração de um **Relato de Experiência para o ESUD | CIESUD 2026**, Trilha IV — Transformação Digital, Inteligência Artificial e Inovação na Educação.

Leia TODOS os arquivos deste dossiê antes de redigir.

## Tema escolhido
O relato trata do uso de **IA generativa para produzir materiais didáticos HTML interativos para Moodle**, com o processo estruturado por uma **metodologia de Pastas inspirada na Interpretable Context Methodology (ICM)** de Jake Van Clief e David McDermott (2026).

## Título preferido
**IA além do chat: pastas e contexto na produção de materiais interativos e acessíveis para Moodle**

Não altere esse título sem uma razão forte; o autor gosta do prefixo **“IA além do chat:”**.

## Referências conceituais centrais

1. Arin Mizouri (2026), *Prompting Your Way to Better Learning: How Generative AI Empowers Educators to Create Interactive, Accessible Teaching Materials*:
https://sciforum.net/paper/31969

Use para fundamentar:
- GenAI reduz a barreira de programação;
- PDF/PPT → HTML interativo;
- materiais exploráveis/self-check;
- uso dentro de AVA.

2. Jake Van Clief & David McDermott (2026), *Interpretable Context Methodology: Folder Structure as Agent Architecture*:
https://arxiv.org/html/2603.16021v2

Use para fundamentar:
- engenharia de contexto;
- pastas numeradas;
- uma etapa/uma função;
- Markdown como interface;
- referências persistentes vs artefatos de trabalho;
- outputs intermediários editáveis;
- revisão humana;
- pipeline sequencial;
- “configure the factory, not the product”.

## Pergunta orientadora
**Como uma metodologia de engenharia de contexto baseada em pastas pode estruturar o uso da IA generativa na produção de materiais didáticos interativos para Moodle?**

## Objetivo
**Relatar a experiência de aplicação de uma metodologia de engenharia de contexto baseada em pastas na produção, com inteligência artificial generativa, de recursos didáticos HTML interativos para Moodle, analisando suas contribuições para a organização do processo, a intervenção humana, a qualidade pedagógica e a acessibilidade.**

## Contribuição pretendida
Não é demonstrar que “IA escreve HTML”.
A contribuição é mostrar como transformar essa capacidade em um processo:
- estruturado;
- transparente;
- revisável;
- auditável;
- reutilizável;
- transferível para uma equipe de EaD.

Workflow conceitual:
`material fonte → análise pedagógica → design da interação → geração HTML → validação → correção → Moodle`

Em cada transição:
`IA produz artefato → humano revisa/edita → próxima etapa`

## Diferencial em relação à literatura
Já existem:
- ESUD 2025 sobre GenAI na produção de disciplina EaD;
- Mizouri 2026 sobre material estático → HTML interativo;
- Claude + Moodle 2026;
- TEACHMate no Canvas;
- frameworks de produção de e-learning com GenAI;
- trabalhos sobre controle humano e avaliação de interatividade.

A lacuna explorada é:
**adaptação de uma metodologia explícita de engenharia de contexto/pastas ao workflow real de produção de materiais interativos no Moodle, com artefatos intermediários e review gates humanos.**

## Regras do ESUD
- relato: 5–7 páginas incluindo referências/figuras;
- resumo: 200–300 palavras;
- título: até 16 palavras;
- máximo 4 autores;
- manuscrito inicial sem identificação da instituição/autores;
- DOCX;
- ABNT;
- Trilha IV.

## Contexto institucional
A experiência é do **Cefor/Ifes**, equipe que atua com EaD, Moodle, design educacional e tecnologias educacionais.
PORÉM, na versão cega do artigo não escrever Cefor/Ifes diretamente.

## Regra mais importante
**NÃO INVENTE DADOS.**

Não afirme, sem dados fornecidos:
- ganho de aprendizagem;
- engajamento;
- redução percentual de tempo;
- conformidade WCAG;
- número de recursos;
- número de usuários;
- testes com estudantes;
- modelos usados;
- satisfação;
- eficácia comparativa ICM vs mega-prompt.

Quando faltar um dado, marque no texto:
`[DADO A CONFIRMAR]`
ou peça ao autor o dado correspondente.

## Tom desejado
- acadêmico;
- preciso;
- concreto;
- crítico;
- sem propaganda de IA;
- valorizar human-in-the-loop;
- distinguir claramente experiência, inferência e evidência da literatura.

## Antes de escrever o manuscrito completo
1. confira `05_DADOS_E_EVIDENCIAS_A_COLETAR.md`;
2. verifique quais casos reais podem ser documentados;
3. defina quais afirmações têm evidência;
4. só então redija resumo/resultados/aprendizados.
