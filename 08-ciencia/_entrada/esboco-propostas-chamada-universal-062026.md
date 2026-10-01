# Esboço de propostas — Chamada Universal CNPq/FNDCT 06/2026

**Especialista:** 08-ciencia (Produção Científica)
**Data:** 2026-07-08 — **restam ~4 semanas** para a submissão (03/08/2026, 23h59).
**Base:** [analise-08-ciencia_chamada-universal-062026.md](analise-08-ciencia_chamada-universal-062026.md) + edital oficial em [ChamadaUniversal062026.md](ChamadaUniversal062026.md).

> **Status honesto:** estes são **esqueletos para reação e discussão**, não propostas prontas. Onde falta fato, marquei `[CONFIRMAR: ...]`. Valores de bolsa e limites orçamentários devem ser conferidos nas tabelas vigentes do CNPq antes de colar no formulário.

> **⇢ Atualização 2026-07-08 — o nó eliminatório destravou.** O projeto é **interinstitucional/multiequipe** (CGTI + CGTE + outros servidores), coordenado por **Saymon (dr., CGTI)**. Isso resolve o gargalo que gateava tudo (existência de doutor-coordenador) e **reforça fortemente a Proposta C** (IA soberana), cujo maior risco era justamente falta de braço de engenharia — agora suprido pela CGTI. Pendências que restam: (1) **data do doutorado do Saymon** → define Faixa B (≥ jan/2016) ou C (≤ dez/2015); (2) fechar os **demais doutores** com Lattes; (3) **atenção à faixa** — CGTI e CGTE são a mesma ICT (Ifes); a Faixa C exige **5 doutores de 2 ICTs distintas**, o que só se aplica se houver **parceiro externo** (outra IF/universidade). Sem parceiro externo, o caminho natural é **Faixa B** (3 doutores, mesma ICT).

---

## 0. A restrição que decide "uma ou duas propostas"

O edital (3.3.2 / 4.6 / 6.8) impõe:

- **Uma proposta por proponente.**
- **Nenhum membro pode estar em duas propostas** desta chamada — se estiver, *todas* as propostas em que ele aparece são consideradas **inelegíveis**.

Consequência prática para a CGTE/Cefor: submeter **as duas** propostas abaixo exige **dois coordenadores doutores diferentes** e **duas equipes de doutores 100% disjuntas** (nenhum nome repetido, incluindo colaboradores doutores). Com o time atual, o mais provável é que só haja doutores suficientes para **uma** equipe bem formada.

**Recomendação:** tratar A e B como **candidatas concorrentes**, escolher a mais forte na reunião com Ju e Elton, e concentrar as 4 semanas nela. Só ir com as duas se — e somente se — o mapa de doutores fechar duas equipes sem sobreposição. Ver §4 (comparativo).

---

## 1. Benefícios concretos para o Cefor (independente de qual proposta vença)

Isto responde diretamente à pergunta "o que trazemos para o Cefor?" — e é o material bruto do **Critério A (peso 3)** e da justificativa.

1. **Capital que fica no patrimônio.** Até ~R$ 200 mil (Faixa B), descontado o custeio, podem virar **equipamento incorporado ao Ifes/Cefor** (5.3.1) — estação de trabalho com GPU para rodar/avaliar modelos, equipamento de produção audiovisual para a divulgação, material bibliográfico. Ativo permanente, não gasto que evapora.
2. **Uma bolsa formando gente.** 1 bolsa (IC/ITI/AT) por até 36 meses (5.4.2) — forma um jovem pesquisador/técnico e traz mão de obra dedicada que hoje o Cefor não tem folga para alocar.
3. **Institucionalização do que já roda informalmente.** Custom GPTs, Manual de IA, encontros de quinta, produção avaliativa com IA passam de prática tácita a **programa de pesquisa formal** — com metas, indicadores, monitoramento anual (item 11) e prestação de contas. Ganha legitimidade e sobrevive à troca de pessoas.
4. **Evidência de impacto que hoje falta.** A análise do artigo já apontou: o Cefor pratica muito e **mede pouco** ("o único número é oito publicações no Instagram"). O projeto *obriga* a medir — participantes, alcance, adoção, ganho de aprendizagem. Esse dado alimenta editais futuros, relatório de gestão, PDI e o próprio PGD.
5. **Posição de "Centro de Referência" de fato.** Método validado e ecossistema documentado viram **modelo replicável por outras EaD públicas** — exatamente a missão do Cefor. Produção com selo CNPq eleva a visibilidade institucional.
6. **Divulgação científica financiada.** O Critério E paga a CGTE para fazer o que já sabe (audiovisual, podcast, redes) como **comunicação pública de ciência** — algo que normalmente sai do próprio bolso institucional.
7. **Rede interinstitucional.** Se for Faixa C, o requisito de 2 ICTs (1.2.3.1) força parcerias que ficam para o Cefor depois do projeto (Critério F).
8. **Bens públicos.** Itens/enunciados, prompts, manual e OERs em **acesso aberto** (5.2.3 / 14.3) — retorno direto à rede pública de ensino.

---

## PROPOSTA A — Geração e validação de itens avaliativos com IA
### *(continuação do projeto da Juliana — candidata mais madura)*

**Por que é a mais forte:** já existe *prior art* (protótipo, método, resultados preliminares), o que puxa o Critério D, e há **coordenadora natural** — a Juliana — se ela for doutora `[CONFIRMAR: Juliana é doutora? doutorado ≥ jan/2016?]`.

**Objeto.** Desenvolver e validar um **método assistido por IA para geração, revisão e calibração de itens/enunciados avaliativos** para cursos de EaD do Cefor/Ifes, com avaliação de qualidade psicométrica e de impacto no trabalho docente.

**Problema / justificativa.** Elaborar boa avaliação em escala é gargalo caro na EaD pública: itens enviesados, baixa variabilidade, retrabalho docente. A IA generativa promete escala, mas **adoção acrítica degrada qualidade**. Falta método validado, com professor no circuito, que garanta rigor.

**Pergunta de pesquisa.** Em que condições a geração assistida por IA produz itens avaliativos válidos e confiáveis para a EaD pública, e qual seu efeito sobre a carga e a prática do professor?

**Objetivos específicos (viram metas):**
1. Consolidar e documentar o método/prompt-chain de geração e revisão de itens.
2. Produzir um banco de itens gerado+validado em ≥ `[N]` disciplinas de cursos do Cefor.
3. Validar qualidade (revisão por especialistas + indicadores psicométricos em aplicação real).
4. Medir efeito sobre o trabalho docente (tempo, confiança, aceitação).
5. Formar 1 bolsista e publicar método + banco em acesso aberto.

**Método.** Pesquisa de desenvolvimento (Design-Based Research) em ciclos: (i) engenharia do método; (ii) geração; (iii) validação por juízes; (iv) aplicação com estudantes e análise psicométrica; (v) revisão. `[CONFIRMAR: aprovação em Comitê de Ética se houver dados de estudantes.]`

**Metas e indicadores (exemplos a calibrar):** método documentado e versionado; ≥ `[N]` itens validados; taxa de aprovação por juízes ≥ `[X]%`; parâmetros psicométricos dentro de faixa aceitável; ≥ `[N]` docentes participantes; 1 dissertação/IC concluída; ≥ 2 produtos de divulgação.

**Plano de popularização (Critério E — onde a CGTE ganha):** série de vídeos curtos "como a IA ajuda (e onde atrapalha) a fazer prova"; episódios de podcast com professores; card/carrossel nas redes do Cefor; **oficina aberta** para professores da rede; repositório público de exemplos comentados. Tudo para **público não especializado** (7.1.1.4) — sem anais nem palestra técnica, que o edital exclui.

**Equipe mínima (Faixa B):** coordenador(a) doutor(a) recente `[Juliana?]` + 2 doutores com Lattes `[CONFIRMAR nomes]` + 1 bolsista + colaboradores (professores, equipe CGTE de audiovisual/design).

---

## PROPOSTA B — Ecossistema de IA em instituição de EaD pública
### *(o próximo ciclo EDR do artigo do ecossistema)*

**Por que faz sentido:** o próprio artigo admite que "a avaliação de impacto constitui o próximo ciclo" (EDR). **O Universal financia exatamente esse próximo ciclo.** Encaixe conceitual quase perfeito; base empírica de *impacto* ainda menos madura que a da Proposta A.

**Objeto.** Investigar a implantação, a adoção e o **impacto** de um ecossistema institucional de IA (Custom GPTs + Manual de IA + formação continuada + produção de conteúdo) na EaD pública, medindo sinergia entre as frentes.

**Problema / justificativa.** Instituições de EaD adotam IA de forma fragmentada. A hipótese do Cefor é que **o valor está na sinergia** entre ferramentas, governança (manual/ética) e formação — nenhuma frente basta isolada. Falta evidência sistemática dessa sinergia e de seu impacto.

**Pergunta de pesquisa.** Como um ecossistema integrado de IA afeta a adoção, a prática docente e a qualidade da produção educacional numa instituição de EaD pública — e quais componentes explicam o efeito?

**Objetivos específicos (viram metas):**
1. Documentar o ecossistema como modelo replicável (arquitetura, governança, papéis).
2. Medir adoção e uso real (quantos cursos/professores usam cada componente).
3. Avaliar impacto na prática docente e na produção (qualidade, tempo, satisfação).
4. Testar a hipótese de sinergia entre as frentes (contrafactual: componentes isolados vs. integrados).
5. Publicar o modelo + evidências em acesso aberto; formar 1 bolsista.

**Método.** EDR com ciclo completo de **avaliação** (o que faltava no artigo): instrumentos de adoção, entrevistas/questionários com docentes, análise de artefatos, estudo comparativo de componentes.

**Metas e indicadores (exemplos a calibrar):** modelo publicado; ≥ `[N]` cursos mapeados; taxa de adoção por componente; ≥ `[N]` docentes avaliados; evidência de sinergia; 1 IC concluída; ≥ 3 produtos de divulgação.

**Plano de popularização (Critério E):** documentário curto do ecossistema; série "IA no Cefor" para redes; **guia público** de implantação para outras EaD; webinário aberto de resultados; repositório do Manual e dos GPTs (versão pública). Público não especializado.

**Equipe mínima (Faixa B):** coordenador(a) doutor(a) recente `[CONFIRMAR — quem, se não for a Juliana]` + 2 doutores com Lattes + 1 bolsista + colaboradores CGTE.

---

## PROPOSTA C — IA soberana instalada no Cefor, aplicada à EaD e ao AVA
### *(infraestrutura própria de modelos abertos — encaixe de capital excepcional)*

**Por que este tema é forte justamente NESTE edital:** IA soberana significa modelos de peso aberto rodando **on-premise, dentro do Cefor**, sem enviar dados a APIs comerciais estrangeiras. Isso exige **hardware (GPU)** — e o edital financia **capital incorporado ao patrimônio do Ifes/Cefor** (5.3.1). A rubrica de capital deixa de ser acessória e vira **o próprio objeto**: a justificativa de capital mais sólida das três propostas. O enquadramento (soberania tecnológica, autonomia de dados, LGPD, redução de dependência de fornecedor estrangeiro, sustentabilidade de custo para instituição pública) cai direto no **Critério A (peso 3)** — "desenvolvimento científico, tecnológico e de inovação **do País**".

**Sacada estratégica — C como substrato de A e B.** A infra soberana é a **camada de base** sobre a qual a geração de itens (A) e o ecossistema (B) podem rodar sem custo por token. Framing mais potente de todos: **infra soberana como objeto + geração de itens no AVA como aplicação-vitrine validável**. Une a melhor justificativa de capital (C) à melhor maturidade de aplicação (A).

**Objeto.** Implantar e avaliar uma **infraestrutura soberana de IA** (modelos de peso aberto self-hosted) no Cefor/Ifes e sua **integração ao AVA** (Moodle), medindo qualidade, custo, privacidade e adoção em tarefas reais de EaD pública.

**Problema / justificativa.** Instituições públicas de EaD dependem de APIs comerciais estrangeiras: custo por uso crescente, **dados sensíveis de estudantes saindo da instituição** (tensão com a LGPD), e ausência de reprodutibilidade/controle. Modelos de peso aberto self-hosted prometem soberania — mas falta evidência de que rodam com **qualidade suficiente em português** e **custo viável** para o AVA de uma instituição pública.

**Pergunta de pesquisa.** É viável — em qualidade, custo e privacidade — sustentar uma infraestrutura soberana de IA integrada ao AVA de uma EaD pública, e como ela se compara a soluções comerciais em tarefas educacionais reais?

**Objetivos específicos (viram metas):**
1. Implantar a infra (servidor GPU + stack de inferência de modelos abertos) no Cefor.
2. Integrar ao AVA/Moodle ≥ `[N]` casos de uso (ex.: apoio a itens avaliativos, tutoria, feedback, geração de conteúdo).
3. Avaliar qualidade em português, **latência e custo por tarefa** vs. API comercial.
4. Avaliar **privacidade/soberania** (dados permanecem on-premise) e conformidade LGPD.
5. Medir adoção e satisfação docente/discente; formar 1 bolsista de perfil técnico (ITI).
6. Publicar arquitetura de referência + benchmarks em acesso aberto.

**Método.** Pesquisa de desenvolvimento + estudo comparativo (aberto self-hosted vs. comercial) em tarefas educacionais reais no AVA, com métricas objetivas (qualidade, latência, custo, privacidade) e subjetivas (aceitação).

**Metas e indicadores (exemplos a calibrar):** infra operacional; ≥ `[N]` casos integrados ao Moodle; benchmark PT-BR publicado; custo/tarefa medido vs. comercial; 100% dos dados dos casos permanecendo on-premise; 1 ITI concluída; arquitetura de referência replicável publicada; ≥ 2 produtos de divulgação.

**Orçamento — observação crítica de dimensionamento.** O teto da Faixa B (R$ 200 mil, custeio+capital+1 bolsa **somados**) **não** compra cluster de ponta. Comporta um servidor de inferência para **modelos abertos de porte pequeno-médio** (quantizados, na faixa 8B–70B) — ex.: 1–2 GPUs profissionais de VRAM alta. A proposta precisa **assumir explicitamente** essa classe de modelo; prometer rodar modelos de fronteira on-premise com esse orçamento seria irrealista e vulnerável no Critério B (adequação orçamentária; corte > 15% derruba).

**Plano de popularização (Critério E):** série "IA que roda no Ifes, com nossos dados"; vídeo explicando soberania de dados para leigos; podcast sobre dependência tecnológica e educação pública; **guia aberto** de implantação de IA soberana para outras EaD públicas; demonstração pública no AVA.

**Equipe (definida em parte):** **coordenador Saymon (dr., CGTI)** — perfil técnico ideal para o objeto; produção de TI puxa o Critério D neste tema. + 2 doutores com Lattes `[CONFIRMAR nomes]` + 1 bolsista ITI (perfil dev/infra) + colaboradores CGTE (audiovisual/design para divulgação) e demais servidores. Projeto **interinstitucional CGTI + CGTE**.

**Risco principal — bastante mitigado.** Era a proposta mais dependente de capacidade de engenharia (infra, inferência, integração Moodle); com a **CGTI coordenando**, esse braço passa a existir de fato. Resta dimensionar bem o orçamento de GPU e mapear quem opera a infra no dia a dia (a bolsa ITI ajuda, mas 1 bolsa pode ser pouco).

---

## 4. Comparativo e recomendação

| | A — itens avaliativos | B — ecossistema IA | C — IA soberana / AVA |
|---|---|---|---|
| *Prior art* / Critério D | **Alta** (protótipo + resultados) | Média (falta medir impacto) | Baixa-Média (depende de infra a montar) |
| Justificativa de **capital** | Média | Média | **Excepcional** (hardware É o objeto) |
| Relevância nacional / Critério A | Alta | Alta | **Muito alta** (soberania, LGPD, inovação do País) |
| Coordenador natural | Juliana `[se doutora]` | `[a definir]` | perfil técnico `[Elton?]` |
| Hipótese testável | Alta (psicometria) | Média (sinergia) | Alta (qualidade/custo/privacidade mensuráveis) |
| Divulgação / Critério E | Forte | Forte | Forte |
| Risco principal | dados de estudantes / ética | medir sinergia em 36 meses | **capacidade de engenharia** + orçamento de GPU apertado |

**Recomendação (revisada 2026-07-08, com Saymon/CGTI coordenando):** o movimento mais forte é uma **proposta única combinada**: **C (infra soberana) como objeto e base de capital**, com **A (geração/validação de itens no AVA) como aplicação-vitrine validável**. Reúne a justificativa de capital mais sólida (C), a maturidade de aplicação mais alta (A) e a relevância nacional mais forte (C) — sob um só coordenador e uma só equipe (respeita a regra de proposta única, §0).

Com **Saymon (dr., CGTI)** no comando, essa combinação fica ainda mais coerente: o coordenador vem da TI, então (i) o Critério D (produção do proponente na área) é puxado pelo eixo técnico de C, e (ii) o antigo risco de execução de C — braço de engenharia — está coberto. As **duas perguntas de time** que antes decidiam agora estão em boa parte respondidas; sobram: **data do doutorado do Saymon** (Faixa B vs C) e **fechar os 2 doutores restantes** com Lattes. B permanece reserva conceitual, absorvível como contexto do estudo.

---

## 5. Checklist de elegibilidade (fazer ANTES de escrever a proposta final)

- [x] **Coordenador doutor definido: Saymon (CGTI).** `[eliminatório — resolvido]`
- [ ] **Data do doutorado do Saymon** confirmada → define Faixa B (≥ jan/2016) ou C (≤ dez/2015). `[eliminatório]`
- [ ] **Lattes do Saymon** atualizado até 03/08/2026, com vínculo estatutário no Ifes informado (Atuação Profissional).
- [ ] **+2 doutores** com Lattes (Faixa B, mesma ICT) — ou **+4 doutores de outra ICT** se for Faixa C com parceiro externo. Mapear e obter disposição.
- [ ] **Anuência formal por escrito** de cada membro, datada ≤ 03/08/2026 (3.3.4).
- [ ] Nenhum membro repetido em outra proposta desta chamada (3.3.2).
- [ ] Ifes cadastrado no **Diretório de Instituições** do CNPq (3.4.1) — provável que sim, confirmar.
- [ ] Coordenador sem inadimplência com CNPq / Adm. Pública Federal (3.2.2).
- [ ] Orçamento por rubrica sem itens vedados (sem salário de servidor, sem taxa de administração — 5.5).
- [ ] `[CONFIRMAR: necessidade de Comitê de Ética]` se houver coleta com estudantes.

## 6. Próximo passo

Na reunião com Ju e Elton, resolver **§5 linha 1 e 2** (coordenador + equipe de doutores) e **§4** (qual proposta). Com isso travado, eu detalho a escolhida no formato do formulário do CNPq: objeto, objetivos, metas, **orçamento por rubrica** (custeio/capital/bolsa), cronograma de 36 meses e o plano de popularização completo.
