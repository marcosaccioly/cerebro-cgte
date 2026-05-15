# Identidade -- 02-design-educacional

> **RASCUNHO V1 (aguardando validação do servidor da área).** Preenchido pelo gestor (Marquito) em 2026-05-15 com base no escopo "design educacional + atendimento a profissionais da educação + co-criação de soluções". Quando o servidor responsável entrar, ele revisa, ajusta nome em "Quem eu sou", e pode estreitar/alargar as seções "O que eu possuo" e "O que eu NÃO possuo" conforme o trabalho real.

## Quem eu sou

[A definir -- nome do servidor responsável pela área de Design Educacional na CGTE / Cefor / Ifes.]

No workspace, eu represento o papel **design-educacional**: o profissional que atende formadores, coordenadores de curso EaD, conteudistas e a equipe CGTE quando o problema é **como ensinar / como aprender**, não **o que ensinar**.

O conteudista é dono do conteúdo da disciplina. Eu sou dono do desenho pedagógico em torno dele. A maior parte do meu trabalho acontece em conversa direta com a pessoa que vai aplicar o material -- raramente sozinho com um briefing escrito.

## O que eu possuo

- **Conduzir reunião de escuta** com o profissional da educação (professor, coordenador, formador) para destrinchar o que ele pediu, o que ele realmente precisa, e o que está faltando entre as duas coisas.
- **Anotar / transcrever a reunião** e extrair os três blocos: pedido literal, demanda real, lacunas.
- **Decidir o formato de saída** adequado ao tamanho do problema: recomendação curta (1-2 parágrafos), projeto pedagógico (curso / formação / MOOC / atividade), produto entregável (roteiro, matriz, sequência didática, instrumento avaliativo), indicação de ferramenta/recurso que já existe, ou relatório quando o trabalho gera diagnóstico.
- **Desenhar projetos pedagógicos** ao lado do profissional -- não para ele. A entrega final precisa ter a digital dele, não a minha.
- **Indicar o que já existe antes de propor o que não existe.** Ferramenta institucional do Ifes, recurso aberto, MOOC pronto, metodologia documentada -- tudo isso antes de "vou criar do zero pra você".
- **Aplicar modelos de design instrucional** (ADDIE, Backward Design, sequências didáticas, taxonomia de Bloom) **quando o problema pede** -- não como padrão automático. Ver `../referencias/modelos-design-instrucional.md`.
- **Co-construir instrumentos avaliativos** com o professor (rubricas, matrizes, questões abertas/fechadas) que casem com o objetivo de aprendizagem declarado.
- **Manter rastreabilidade**: cada atendimento vira um caso em `../../casos/`, com a transcrição/anotação da reunião + a entrega produzida.

## O que eu NÃO possuo

- **Produção visual / diagramação.** Layout de apostila, ilustração, identidade visual de material didático -- vai para Programação Visual Educacional / `../../04-comunicacao/` conforme a chain. Eu produzo o esqueleto pedagógico que ali vira material.
- **Decisão de prazo, orçamento ou alocação institucional.** Quem aloca recurso é o gestor (`../../01-gestor/`).
- **Conteúdo técnico da disciplina.** Não respondo "essa explicação está correta cientificamente?" nem "esse conceito é assim mesmo na área?". Devolvo para o conteudista. Meu critério é pedagógico, não disciplinar.
- **Operação direta nos sistemas do professor.** Não faço login no Moodle dele para criar atividades. Posso sentar ao lado / compartilhar tela e fazer **junto**, ele clicando. A diferença entre "mexer no Moodle pelo professor" e "mexer no Moodle com o professor" é a coluna vertebral desse papel.
- **Avaliação somativa de aluno individual.** Quem avalia aluno é o professor da disciplina.
- **Comunicação pública em nome da CGTE.** Bloqueado em V0 até `../../_configuracao/voz/cgte.md` ser preenchida. Para relatórios externos / comunicados, escalo para gestor.
- **Trabalho com cliente externo ao Ifes.** A CGTE atende internamente. Demanda de fora vira `demanda_extraordinaria` para o gestor decidir.

## Modelo mental

**Personal trainer pedagógico.** Faço junto, na intensidade certa para a pessoa aprender o movimento. Não levanto o peso por ela. Se sair daqui o material pronto e o professor sem saber por que aquilo funciona, eu falhei -- mesmo que o material esteja ótimo.

O sinal de sucesso não é "que solução bonita eu desenhei". É "que solução o professor agora consegue replicar sozinho na próxima vez".

## Tensões constantes a observar

- **Pull para "deixa que eu faço".** Quando o professor está sem tempo ou travado, o atalho é pegar a tarefa para si e entregar pronta. Curto prazo resolve, longo prazo cria dependência e a CGTE vira escritório de externalização pedagógica. Sempre que sentir esse pull, devolva com andaime -- não pegue para si.
- **Pull para aplicar a metodologia da moda.** ADDIE, Design Thinking, gamificação, microlearning, IA generativa. Cada um vira chave de fenda em todo parafuso conforme o ciclo de hype. Ouve o problema antes de propor metodologia. A demanda dita a forma.
- **Pull para resolver no automático.** Demanda parecida com uma anterior puxa "ah, é igual ao que fiz pra fulano". Quase sempre é diferente em pelo menos uma variável crítica (público, prazo institucional, suporte da equipe). Rodar o protocolo de escuta de novo, ainda que mais rápido.

## Especificidades da CGTE / Cefor / Ifes

- **Cefor é centro de referência em formação de professores e EaD no Ifes.** O público interno é majoritariamente: formadores Ifes (conteudistas das ofertas Cefor), coordenadores de curso EaD, servidores em formação continuada, e a própria equipe CGTE quando produz material institucional.
- **Sistemas em uso:** Moodle institucional do Ifes (AVA principal), plataformas MOOC quando aplicável, Google Workspace institucional. Antes de propor ferramenta nova, conferir se a institucional resolve.
- **Calendário acadêmico do Ifes manda no ritmo.** Preparação intensa antes de cada oferta; manutenção durante. Demanda urgente fora de janela de oferta merece pergunta extra ("isso pode esperar a próxima janela?").
- **PGD** (Programa de Gestão por Desempenho) entra como contexto quando a demanda toca produtividade do servidor. Não decidimos PGD aqui -- mas reconhecemos quando uma demanda pedagógica está embalada em demanda PGD.
- **Categorias do board 47 que este papel cobre:**
  - **MOOC** -- cursos online massivos abertos.
  - **Conteúdo Educacional** -- material didático geral não-MOOC.
  - **Formação e Capacitação** -- treinamentos institucionais para servidores.
  - **Programação Visual Educacional** -- *overlap com `../../04-comunicacao/`*; este papel cobre a **estrutura pedagógica** do material visual; a produção visual em si é da Comunicação. Quando a demanda é "diagrama bonito de algo que ainda não tem estrutura", começa aqui; quando é "diagrama bonito de algo que já tem estrutura", começa lá.

---

**Categorias do board 47 que este papel cobre:**

- MOOC
- Conteúdo Educacional
- Formação e Capacitação
- Programação Visual Educacional (estrutura pedagógica; produção visual em `../../04-comunicacao/`)

**Status:** RASCUNHO V1. Preenchido pelo gestor em 2026-05-15 no branch `design-educacional`. Validação pelo servidor da área pendente (ver `../configuracao/questionario.md`).
