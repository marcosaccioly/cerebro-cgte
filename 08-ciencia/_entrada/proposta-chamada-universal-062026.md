# Proposta — Chamada Universal CNPq/FNDCT 06/2026 (Faixa B)

**Coordenador:** Saymon (dr., CGTI/Ifes) — Faixa B confirmada (doutorado ≥ jan/2016, vínculo estatutário).
**Instituição executora:** Ifes (ICT federal), via CGTI + CGTE / Cefor.
**Faixa:** B — vigência 36 meses, teto R$ 200.000,00 (custeio + capital + 1 bolsa).
**Data do rascunho:** 2026-07-08 · **Submissão até:** 03/08/2026, 23h59.

> **Rascunho para preenchimento do Formulário online (Plataforma Integrada Carlos Chagas).** Campos com `[CONFIRMAR]` dependem de dado que ainda falta (nomes dos 2 doutores, valores de bolsa vigentes, cotações de equipamento). Orçamento é **indicativo** — conferir tabelas do CNPq e cotações reais antes de submeter; lembrar que corte > 15% "não recomenda" a proposta (7.2.1.5.2), então pedir justo.

---

## 1. Título

**Inteligência Artificial como co-designer do professor na Educação a Distância pública: um ecossistema soberano e ancorado para o design educacional no Cefor/Ifes.**

> **Recorte adotado (2026-07-08): AMPLO — co-design.** Objeto = o ecossistema como co-designer do professor em **múltiplas dores de design**. Para caber em 36 meses, o estudo se concentra num conjunto tratável de **três dores**: (D1) planejar/desenhar sequências didáticas; (D2) produzir material/OER; (D3) elaborar avaliação/itens (medição mais aprofundada, expertise da Juliana). A infra soberana é o **meio** (ancoragem, privacidade, custo), não o fim. `[CONFIRMAR conjunto de dores com a equipe]`

## 2. Área do conhecimento

Grande área: Ciências Exatas e da Terra — **Ciência da Computação**, com interface em **Educação** (EaD, avaliação da aprendizagem). `[CONFIRMAR classificação/áreas no formulário]`

## 3. Resumo (objeto)

Professores da educação pública enfrentam a **intensificação do trabalho docente**: mais tarefas de design educacional — planejar, produzir material, avaliar, dar feedback — no mesmo tempo escasso. A IA generativa promete alívio, mas as ferramentas genéricas **falham em especificidade e frustram**, além de atuarem como meros geradores de conteúdo, não como parceiras de design ancoradas no contexto. Este projeto investiga e desenvolve, por **Design-Based Research**, um **ecossistema de IA soberano e ancorado** — modelos de peso aberto executados *on-premise* no Ifes, ancorados no material, na matriz curricular e na voz institucional do Cefor — que apoie o professor da EaD pública **como designer educacional** na resolução de dores reais (planejamento de sequências, produção de material/OER e elaboração de avaliação). Avalia-se o efeito sobre **carga de trabalho, qualidade do design e adoção** (TPACK/UTAUT), comparando a ancoragem soberana a soluções genéricas. A soberania é a condição que garante ancoragem, privacidade (LGPD) e custo sustentável. Entrega, ao final: infraestrutura incorporada ao patrimônio do Ifes, **arquitetura de referência replicável** por outras instituições de EaD pública, evidências de impacto no trabalho docente, e um programa de **popularização científica** (MOOCs e cursos abertos à comunidade) que leva os resultados ao público não especializado.

## 4. Introdução e justificativa (Critério A — relevância e impacto, peso 3)

> Referencial detalhado e mapa da literatura em [referencial-problema-pesquisa-062026.md](referencial-problema-pesquisa-062026.md).

> **Orientação Saymon (reunião #02):** o avaliador é um pesquisador e procura *contribuição científica* e *problema de pesquisa bem desenhado*. A IA soberana, os enunciados e o MOOC são a **camada de solução** — não o objeto. O objeto é um **problema de pesquisa educacional** ancorado na literatura, cuja solução é contemplada por esse conjunto. A infraestrutura é **efeito colateral** desejável, não o fim. As três subseções abaixo sobem o problema para o topo; a infra desce para §6 (a intervenção estudada).

**Problema de pesquisa (a camada de cima).** A EaD pública enfrenta dificuldade persistente de **adequação pedagógica e de sustentação de engajamento/permanência**, fenômeno já estudado na literatura. Uma lacuna concreta — teórica e institucional — a agrava: **falta o profissional que faz a ponte entre o pedagógico e o tecnológico**, a função de **design educacional**, que o Cefor não tem provida por servidor dedicado. Ferramentas de IA generativa surgem para preencher essa lacuna, mas (a) **falham em especificidade** por não serem ancoradas no contexto e (b) trazem o **problema de soberania** (dados sensíveis, dependência). Daí a pergunta que o projeto investiga: *como um ecossistema de IA soberano e ancorado no contexto institucional pode assumir o papel de **co-designer** — suprindo parcialmente a função ausente de design educacional — para apoiar professores da EaD pública, e com que efeito sobre a qualidade do design, a carga de trabalho docente e o engajamento/permanência, preservando a soberania de dados?*

**A dor.** O professor da educação pública opera sob **intensificação do trabalho docente** (Hargreaves, 1994): acumulam-se as tarefas de **design educacional** — planejar sequências, produzir material, elaborar avaliação, dar feedback, diferenciar para a diversidade — sem que o tempo acompanhe. Na EaD pública, a escala agrava a pressão. Ensinar é, nesse sentido, uma **ciência do design** (Laurillard, 2012): o professor projeta, testa e refina soluções — mas sem ferramenta nem tempo para fazê-lo bem.

**Por que a IA genérica não resolve.** Revisões sistemáticas recentes (2022–2025) mostram que a IA generativa pode aliviar planejamento, produção de material, avaliação e feedback — **mas** um achado se repete: as ferramentas **falham em fornecer o detalhe específico que o educador precisa, gerando frustração**; e a IA tende a atuar como **gerador de conteúdo, raramente como co-designer ou parceiro dialógico** do professor — papel que a literatura aponta como **sub-pesquisado**. A causa da frustração é a **falta de ancoragem no contexto**: a ferramenta não conhece a matriz, o material nem a voz da instituição.

**A hipótese e a lacuna.** Um **ecossistema de IA soberano e ancorado** — modelos abertos *on-premise*, alimentados pelo acervo, pela matriz e pelos padrões do Cefor — ataca exatamente essa falha: gera apoio específico ao contexto e pode assumir o papel de **co-designer** do professor, não de gerador genérico. A soberania deixa de ser bandeira técnica e vira **condição de possibilidade pedagógica** (ancoragem, privacidade LGPD, qualidade em **português**, custo sustentável) — articulação que a literatura de IA na educação, centrada no humano (UNESCO/Miao & Holmes, 2023), valoriza mas raramente estuda em EaD pública do Sul Global. Aí está a originalidade.

**A relevância nacional (Critério A).** O projeto ataca uma dor social concreta — o trabalho do professor da escola pública — com um caminho **replicável e de baixo custo** que reduz dependência de fornecedor estrangeiro e protege dados de estudantes. Impacto **social** (professor e estudante), **econômico** (custo para o serviço público) e **tecnológico** (arquitetura aberta soberana) — os três eixos que o edital pontua, alinhados a "desenvolvimento científico, tecnológico e de inovação do País" (1.1).

**Por que o Ifes/CGTI/Cefor.** O Ifes opera a EaD em rede com AVA institucional; a CGTI detém a capacidade de infraestrutura e engenharia (viabiliza a soberania); a CGTE/Cefor detém a expertise em design educacional, avaliação e **comunicação pública** (audiovisual, design, redes) — rara em grupos de pesquisa e decisiva no Critério E.

## 5. Objetivos

**Objetivo geral.** Investigar e desenvolver, por Design-Based Research, um ecossistema de IA soberano e ancorado que apoie professores da EaD pública como designers educacionais na resolução de dores reais de design, avaliando seu efeito sobre carga de trabalho, qualidade do design e adoção, e disseminando arquitetura de referência e resultados à comunidade.

**Objetivos específicos (viram metas — §7):**
1. Mapear e caracterizar as **dores de design** dos professores da EaD do Cefor e priorizar o conjunto tratável (D1 planejamento de sequências; D2 produção de material/OER; D3 elaboração de avaliação).
2. Implantar o **ecossistema soberano ancorado** (infra *on-premise* + modelos abertos + ancoragem no acervo/matriz/voz do Cefor + integração ao AVA/Moodle) — meio que viabiliza os objetivos seguintes.
3. Desenvolver, em ciclos de DBR, o apoio da IA como **co-designer** para cada dor priorizada, com o professor no circuito.
4. Avaliar o **efeito sobre o trabalho docente** (carga/tempo, confiança, qualidade do design produzido) e a **adoção** (TPACK/UTAUT).
5. Avaliar comparativamente a **ancoragem soberana vs. IA genérica** (especificidade percebida, qualidade em PT-BR, custo por tarefa, privacidade/dados on-premise).
6. Validar em profundidade a dor D3 (avaliação): qualidade dos itens por juízes + indicadores psicométricos em aplicação real.
7. **Formar recursos humanos em vários níveis** (objetivo central de um projeto de pesquisa): 1 bolsista (ITI/AT) + estudantes de IC vinculáveis via **PIBIC/Ifes e FAPS** usando o projeto como guarda-chuva + professores da rede formados nas ações de divulgação (§9).
8. Publicar **arquitetura de referência** e resultados em **acesso aberto**.
9. Popularizar os resultados junto ao público não especializado (MOOCs, websérie, Pint of Science — §9).

## 6. Metodologia

**Design-Based Research** (McKenney & Reeves) em ciclos iterativos, com o professor no circuito, articulando quatro eixos:

- **Eixo diagnóstico (dores).** Levantamento e priorização das dores de design com os docentes da EaD do Cefor (entrevistas, questionários, análise de artefatos) → conjunto tratável D1/D2/D3.
- **Eixo meio (ecossistema soberano ancorado).** Servidor GPU on-premise; stack de inferência de **modelos abertos de porte pequeno-médio** (ex.: 8B–34B em precisão plena/quantizada; até ~70B quantizados, conforme o hardware); **ancoragem** no acervo, matriz e voz do Cefor (recuperação sobre base institucional); integração ao AVA/Moodle; governança e segurança (dados on-premise, LGPD). **Parte-se de um piloto já em lançamento pela CGTI** — uma versão pequena de IA executada internamente, interconectada ao AVA — como *prior art* e pontapé (fortalece a viabilidade / Critério C).
- **Ancoragem por contexto versionado (diferencial de originalidade).** A ancoragem se dá por **contexto interpretado**: o acervo de trabalho do professor como pastas/repositório versionado (Git) que a IA lê e sobre o qual atua — rastreável, auditável e **agnóstico ao modelo**. Isso torna o apoio (i) durável e reprodutível ao longo do tempo (não se perde entre sessões de chatbot) e (ii) resiliente à troca de modelo — se amanhã surgir uma IA soberana nacional, o contexto mapeado migra sem retrabalho. É o mecanismo concreto que operacionaliza "co-designer ancorado".
- **Eixo co-design (a intervenção).** Ciclos de DBR desenvolvendo o apoio da IA como **co-designer** para cada dor priorizada — o professor projeta *com* a IA ancorada, não recebe conteúdo pronto. Para D3 (avaliação), aprofundamento com **validação por juízes** e **análise psicométrica** em aplicação real.
- **Eixo avaliação.** (a) **Efeito no trabalho docente** — carga/tempo, confiança, qualidade do design produzido (rubricas); adoção por **TPACK/UTAUT**. (b) **Comparação ancoragem soberana vs. IA genérica** — especificidade percebida, qualidade em PT-BR, custo/tarefa, % de dados retidos on-premise.

`[CONFIRMAR: submissão ao Comitê de Ética em Pesquisa — provável necessidade, por haver coleta com docentes e estudantes.]`

## 7. Metas, indicadores e cronograma (36 meses)

| # | Meta | Indicador | Janela |
|---|---|---|---|
| M1 | Dores de design mapeadas e priorizadas | ≥ `[N]` docentes ouvidos; conjunto D1/D2/D3 definido com evidência | Meses 1–6 |
| M2 | Ecossistema soberano ancorado operacional e incorporado ao Ifes | servidor em produção; ancoragem no acervo do Cefor; integração ao AVA; nota de incorporação patrimonial | Meses 2–12 |
| M3 | Apoio de co-design desenvolvido para D1/D2/D3 (ciclos DBR) | ≥ 2 ciclos por dore; artefatos versionados; método documentado | Meses 8–28 |
| M4 | Efeito no trabalho docente medido | ≥ `[N]` docentes (carga/tempo, confiança, qualidade do design por rubrica); adoção via TPACK/UTAUT | Meses 14–30 |
| M5 | Comparação ancoragem soberana vs. IA genérica | especificidade percebida; qualidade PT-BR; custo/tarefa; % dados on-premise | Meses 14–28 |
| M6 | Validação aprofundada de D3 (avaliação) | ≥ `[N]` itens; aprovação por juízes ≥ `[X]%`; parâmetros psicométricos em faixa aceitável | Meses 12–30 |
| M7 | Formação do bolsista | 1 ITI concluída com produto técnico | Meses 1–36 |
| M8 | Popularização à comunidade | 1–2 MOOCs publicados; ≥ `[N]` cursos/turmas à comunidade; produtos audiovisuais (§9) | Meses 12–36 |
| M9 | Arquitetura de referência + resultados em acesso aberto | repositório público (arquitetura, método, evidências) | Meses 24–36 |

## 8. Resultados esperados e produtos

- **Ecossistema de IA soberano e ancorado** incorporado ao patrimônio do Ifes (infra permanente) + **arquitetura de referência** replicável por outras EaD públicas (acesso aberto).
- **Método/padrões de co-design professor–IA** para as dores D1/D2/D3, documentados e versionados.
- **Evidências de impacto** no trabalho docente (carga, qualidade do design, adoção) e **estudo comparativo** ancoragem soberana vs. IA genérica (especificidade, PT-BR, custo, privacidade).
- Para D3: **banco de itens** validado (juízes + psicometria).
- **MOOCs e cursos** à comunidade (também produto educacional, além de popularização).
- Formação de 1 bolsista técnico; dissertações/TCCs associados `[CONFIRMAR]`.

## 9. Plano de popularização e divulgação científica (Critério E — peso 1, onde a CGTE ganha)

O edital exige ações para **público não especializado** (7.1.1.4) e **exclui** anais, palestras técnicas, artigos e sites de eventos acadêmicos (7.1.1.4.2). O plano abaixo é todo voltado ao público leigo, em linguagem acessível — aproveitando a capacidade instalada da CGTE (audiovisual, design, redes):

- **MOOCs abertos à comunidade.** 1–2 cursos massivos, gratuitos e autoinstrucionais, no AVA do Cefor, do tipo *"IA na educação pública: o que é, como usamos e o que muda para você"* e *"Seus dados e a IA: por que soberania importa"* — linguagem simples, sem pré-requisito técnico. Levam os resultados do projeto ao público não especializado e ficam como acervo aberto. Podem ter ofertas repetidas ao longo dos 3 anos (potencial acompanhamento longitudinal dos participantes).
- **Websérie e cortes nos canais do Cefor** — o canal do Cefor no YouTube tem ~30 mil inscritos e o Instagram é ativo: série de vídeos curtos/*shorts* explicando, em um minuto e em linguagem leiga, o que a pesquisa faz (formato que o próprio edital valoriza). **Números de alcance já existentes** demonstram, no Critério E, capacidade real de popularizar — o que a maioria dos concorrentes não tem.
- **Pint of Science** e formatos de ciência para público geral (Marquito já organizou a edição local duas vezes): levar a pesquisa a espaços não acadêmicos (bar, praça) ao longo das três edições anuais.
- **Cards/carrosséis e materiais gráficos** de divulgação dos resultados parciais e finais.
- **Demonstração pública** da IA soberana rodando no AVA, em evento aberto à comunidade.

> **Nota de enquadramento (Saymon):** evitar o termo **"extensão"** — há edital de extensão específico nas FAPs, e o avaliador de pesquisa pode estranhar. As ações à comunidade entram como **divulgação/popularização científica** (para público não especializado) ou, quando forem formação mais técnica de professores, como **produto educacional/meta** (M8/§8) — nunca como item do Critério E, para não colidir com a exclusão de "público especializado" (7.1.1.4.1).

## 10. Equipe e capacidade (Critério C — peso 2; Critério D — peso 1)

- **Coordenador — Saymon (dr., CGTI/Ifes).** Faixa B (doutorado ≥ jan/2016, vínculo estatutário). Perfil técnico/TI que puxa o Critério D no eixo de infra e soberania. Lattes atualizado até 03/08/2026, com vínculo no campo Atuação Profissional. `[CONFIRMAR: linha de produção do Lattes na área de IA/sistemas]`
- **Equipe de doutores ainda em fechamento** (Faixa B exige mínimo 3, incluindo o coordenador). `[CONFIRMAR]`
  - Juliana — expertise em avaliação/itens e experiência de pesquisa (já passou 3× por CEP); membro-chave. `[CONFIRMAR titulação — é doutora?]`
  - Candidatos discutidos na reunião #02: **Vanessa**, **Mariela** (Mariela com afinidade ao eixo soberania/infra — ajuda a justificar equipamentos maiores). Rute **indisponível** (já vinculada a outra proposta); Aline sem resposta até agora. `[CONFIRMAR disponibilidade e Lattes]`
- **Vito Franzosi (Mestre)** — professor experiente, mestrado com interface **matemática + educação** (ex-Faculdade Salesiana); traz a perspectiva educacional e pode ancorar um caso disciplinar. Conta para o Critério C (equipe pode ter mestres); **não** conta para o mínimo de 3 doutores.
- **Equipe CGTE/Cefor** — audiovisual, design, produção EaD (popularização e integração AVA).
- **1 bolsista ITI** — perfil dev/infra, operação da infra soberana e conectores do AVA. Estudantes adicionais de IC via **PIBIC/FAPS** (guarda-chuva do projeto).
- **Demais servidores** (CGTI + CGTE) como colaboradores.

> **Nota estratégica sobre os critérios (reunião #02).** Os critérios de julgamento **não têm um peso isolado de currículo do pesquisador** (o que favorece a equipe frente a grupos de pós-graduação consolidados). Mas o **Critério D** (produção/formação de RH do *proponente* na área, peso 1) ainda é o ponto mais fraco — reforça (i) o Lattes do Saymon na linha do projeto e (ii) a formação de RH via bolsista + PIBIC. Força total nos Critérios **A** (peso 3) e **E**, onde a equipe é forte. Contexto: a Faixa B distribui ~R$ 125 mi (estimados ~700 projetos), com **30% reservados a Norte/Nordeste/Centro-Oeste** — o Ifes/ES concorre no bolo geral (não reservado).

## 11. Parcerias institucionais (Critério F — peso 1)

CGTI + CGTE/Cefor (Ifes) como núcleo. `[OPORTUNIDADE: parceiro externo — outra IF/universidade/programa de pós. Não é necessário na Faixa B, mas soma no Critério F; se entrar com doutores de 2ª ICT, abre inclusive a possibilidade de Faixa C — decisão a tomar antes de submeter.]`

## 12. Orçamento por rubrica (Critério B — peso 2) — teto R$ 200.000,00

> **Indicativo.** Conferir valores de bolsa na tabela vigente do CNPq e obter **cotações reais** do equipamento (GPUs têm forte variação e carga tributária no Brasil). Pedir justo — corte > 15% "não recomenda" a proposta.

| Rubrica | Item | Valor estimado |
|---|---|---|
| **Capital** | Servidor de inferência com 1 GPU profissional de VRAM alta (ex.: 48 GB), CPU/RAM/armazenamento | R$ 85.000 |
| **Capital** | Armazenamento adicional + no-break/UPS + rede | R$ 20.000 |
| **Capital** | Material bibliográfico | R$ 5.000 |
| **Custeio** | Material de consumo | R$ 6.000 |
| **Custeio** | Serviços de terceiros PJ (produção audiovisual dos MOOCs, legendagem/acessibilidade, apoio a desenvolvimento pontual) | R$ 16.000 |
| **Custeio** | Diárias e passagens (coleta em polos, apresentação de resultados) | R$ 10.000 |
| **Custeio** | Despesas de publicação em **acesso aberto** | R$ 4.000 |
| **Bolsa** | 1 bolsa ITI (ou AT), 36 meses — `[CONFIRMAR valor mensal vigente]` | R$ 54.000 |
| | **TOTAL** | **R$ 200.000** |

Vedações observadas (5.5): sem salário/complementação de servidor, sem taxa de administração, sem veículo, sem alimentação/coquetel. Bens de capital incorporados ao Ifes (5.3.1).

## 13. Plano de Gestão de Dados (PGD)

Dados de pesquisa (itens gerados, avaliações de juízes, métricas de uso, respostas de estudantes anonimizadas) geridos com princípios FAIR e **retenção on-premise** — coerente com o próprio objeto de soberania. Dados sensíveis protegidos conforme LGPD; dados abertos (benchmark, método, arquitetura) depositados em repositório público. `[Detalhar no formulário de PGD do CNPq — 6.6.3.]`

## 14. Pendências antes de submeter (checklist final)

- [ ] **Fechar 3 doutores** (Saymon + 2). Confirmar titulação da Juliana; sondar Vanessa/Mariela; Rute fora, Aline sem resposta. `[gargalo ativo]`
- [ ] **Âncoras de literatura do PROBLEMA** (não só da solução): 3–5 referências recentes sobre adequação pedagógica/engajamento/permanência na EaD + ausência do profissional de design + co-designer de IA (tarefa pedida pelo Saymon).
- [ ] **Anuência formal escrita** de cada membro, datada ≤ 03/08/2026 (3.3.4), guardada pelo coordenador.
- [ ] Confirmar Ifes no **Diretório de Instituições** do CNPq (3.4.1).
- [ ] Lattes do Saymon atualizado; sem inadimplência com CNPq/Adm. Federal (3.2.2).
- [ ] **Cotações** do servidor GPU e **valor vigente** da bolsa ITI/AT.
- [ ] Calibrar os `[N]` e `[X%]` das metas (nº de casos no AVA, nº de itens, nº de docentes, taxa de aprovação).
- [ ] Decidir sobre **parceiro externo** (Critério F / eventual Faixa C).
- [ ] Verificar necessidade de **Comitê de Ética** (coleta com estudantes).
- [ ] Anexo PDF OCR (≤ 1 Mb) com figuras essenciais, se houver (6.6.2).
