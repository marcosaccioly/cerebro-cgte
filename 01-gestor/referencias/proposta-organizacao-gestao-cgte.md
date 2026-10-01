# Proposta — organizar o trabalho e a gestão da CGTE

**Kanboard no centro, cérebro em volta, Painel CGTE como porta de entrada do dia.**

> **Status:** PROPOSTA para avaliação (Elton + Marquito). Nada aqui foi executado.
> **Data:** 2026-10-01 (revisão 3, no mesmo dia).
> **O que mudou na revisão 2:** o sistema `sistema-gestao-cgte` foi descartado (painel e relatórios são construídos do zero); a Comunicação do Cefor (`comunicacao-cefor/`, board 30, Informe Cefor) entrou no painel, na rotina e nos relatórios; o texto foi alinhado aos commits de 29/09 e 01/10 (`_entrada/`, ponte do Kanboard corrigida, ponte de e-mail).
> **O que mudou na revisão 3:** entrou o fluxo de divulgação da comunicação (`/divulgar`, que publica no site e no Instagram) e a ponte que falta entre ele e o Kanboard.
> **Relação com os planos anteriores:** absorve e estende `plano-camada-gestao-kanboard.md` (29/09). Destrava `plano-trabalho-raquel.md` e `historico-cgte/ANALISE-PENDENTE.md`, que esperavam a decisão sobre como usar o Kanboard.
> **Fontes:** as 8 transcrições em `mmos/clientes/cerebro-empresa/` (Bruno Okamoto ×5, Leonardo Oliveira ×2, Jake Van Clief ×1); o estado atual deste repositório; e os documentos de gestão de 2025 (Relatório de Gestão, Plano de Entregas do PGD, registros do Petrvs e export do Kanboard).

---

## 1. Resumo

A proposta em seis pontos:

1. **O Kanboard continua sendo a única fonte da verdade.** Ele é reorganizado para que cada card concluído já carregue o que o relatório precisa: categoria, dono, prazo, data de conclusão e, quando fizer sentido, quantidade.
2. **O Painel CGTE é a porta de entrada do dia.** Uma página com o que depende do gestor, o que vence, o que está parado, quem está com o quê e como está a comunicação do Cefor.
3. **O relatório de gestão deixa de ser escrito e passa a ser gerado.** PGD trimestral, registro individual no Petrvs e "O setor em números" do relatório anual saem do board por script. A pessoa revisa, não redige.
4. **Delegar vira um gesto de dois minutos:** descrever a demanda, aprovar a proposta de card (dono, prazo, etapas) e enviar o recado já redigido.
5. **A comunicação entra na mesma rotina.** Caixa `cso.cefor`, fila de divulgação, board 30 e Informe Cefor aparecem no painel e nos relatórios, sem misturar a área com a CGTE.
6. **Sem Hermes e sem VPS.** Três camadas, cada uma opcional: Kanboard (funciona sozinho), scripts de leitura (não usam IA) e IA sob demanda (captura, rascunhos, propostas). Tudo construído do zero dentro do cérebro.

O que muda para cada pessoa:

| Quem | Hoje | Com a proposta |
|---|---|---|
| Gestor | Começa pelo e-mail, lembra de cabeça quem faz o quê, monta relatório à mão, acumula a comunicação | Painel do dia com CGTE e comunicação, delegação com proposta pronta, relatório gerado |
| Equipe que não usa IA | Cria card do próprio jeito; redige o PGD individual no Petrvs à parte | Mesmo Kanboard, com um padrão curto de card; recebe o texto do PGD pronto para colar |
| Equipe que quer usar IA | Cada pessoa por conta própria | Uma `_entrada/` no próprio workspace e comandos prontos (`meu-dia`, `registrar`, `meu-pgd`) |

Primeiros resultados visíveis: **o Informe Cefor #57 fechado nesta semana** (a janela vai até 07/10), **o Painel CGTE funcionando até 16/10** e **o relatório do trimestre em curso gerado pelo sistema** no fechamento do ciclo do PGD.

As decisões que dependem de vocês estão na seção 14.

---

## 2. Diagnóstico: onde estamos

### 2.1 O board hoje

| Fato | Número | Fonte |
|---|---|---|
| Cards de 2025 sem categoria | 128 de 176 (73%) | export do Kanboard 2025 |
| Cards de 2025 sem prazo | 140 de 176 (80%) | idem |
| Cards na coluna "Finalizado" que nunca foram fechados (sem data de conclusão) | 31 de 124 (25%) | idem |
| Cards com etiqueta | 1 de 176 | idem |
| Quem criou cards em 2025 | 6 pessoas: o gestor, a área de design e uma bolsista | idem |
| Cards em que quem criou é quem executa | 156 de 176 (89%) | idem |
| Cards atribuídos à equipe de audiovisual ou de Libras | 0 de 176 | idem |
| Cards abertos sem prazo | 96 de 108 | diagnóstico de 26/06/2026 |
| Cards abertos parados há mais de um ano | 37 | idem |
| Cards abertos sem dono | 18 | idem |
| Histórico total sem categoria | 981 de 1.555 (63%) | `historico-cgte/` |

Leitura: o board funciona como **diário pessoal da área de design**. Nove em cada dez cards são criados por quem vai executá-los. Ele não é usado para distribuir trabalho, não mostra a etapa (só "Em andamento") e não serve de base para relatório.

### 2.2 Os relatórios hoje

A gestão presta contas em três formatos, todos montados à mão:

- **Plano de Entregas do PGD (trimestral):** 29 entregas genéricas ("Conteúdo para Comunicação Visual elaborado", "Edital traduzido para Libras", "Conselho superior transmitido"…).
- **Registro individual no Petrvs:** cada pessoa narra o que fez. Muita coisa cai em "Atividade sem previsão – extraordinárias", com descrições longas, em formato de diário.
- **Relatório de Gestão anual:** "boas práticas em destaque" e "O setor em números", por área.

O ponto central: **os maiores números do relatório de 2025 não saíram do board.** Mais de 700 vídeos publicados, mais de 375 publicações de vídeo em Libras, 111 traduções, 54 interpretações e 157 checklists de MOOC foram reportados em um ano em que o board registrou 176 cards, nenhum deles atribuído ao audiovisual ou à equipe de Libras. Esses números foram levantados por fora (falta confirmar de onde: agenda, planilhas, canal do YouTube).

A mesma informação é registrada em até quatro lugares: no card (às vezes), na planilha do Plano de Entregas, no Petrvs e de novo no relatório anual.

### 2.3 O cérebro hoje

O que existe é sólido: mapa de pastas, contratos do gestor e do orquestrador, vozes em v1, ponte do Kanboard (corrigida em 01/10), ponte de e-mail, histórico de 1.555 tarefas exportado, taxonomia de 18 categorias configurada no board e, desde 29/09, a área da comunicação.

O que os arquivos mostram sobre o uso:

- **Três planos pendentes** e nenhum executado: análise do histórico (26/06), faxina do board (26/06) e camada de gestão (29/09).
- **A Friday review nunca rodou.** Estava marcada para 10/07; `operacoes/revisao-sexta.md` não tem nenhuma entrada.
- **Captura sem rotina perde prazo.** `00-orquestrador/_entrada/` guarda desde 06/08 os itens da reunião de gestores, incluindo um com prazo de 25/08 que passou sem virar card.
- **Nenhum card real foi criado pelo cérebro.** Os dois casos existentes têm `card_id: TBD` e as propostas da comunicação estão em `aguardando_board`.
- **Criar um card pelo cérebro custa caro na CGTE:** pasta de caso, dois envelopes YAML (`EN-001`, `EN-002`) e aprovação. No Kanboard são 15 segundos.
- **Contexto fora do repositório.** Dois arquivos citam a memória `cgte-frentes-de-melhoria`, que não está aqui; a transcrição da conversa de 28/09 vive no transcritor do Elton.
- **Documentos que divergem entre si** (lista na seção 9.5).

### 2.4 A comunicação hoje

A Comunicação Social do Cefor virou área separada em 29/09 (`comunicacao-cefor/`), com caixa `cso.cefor@ifes.edu.br`, board próprio (projeto 30) e Informe Cefor quinzenal. Ela tem dois fluxos:

- **Caixa** (`/processar-noticias`): decide o que cada e-mail é e para onde vai. Já resolve, para a comunicação, o que esta proposta chama de captura.
- **Divulgação** (`/divulgar` e `/publicar-banner`): publica de fato o pedido no banner do site e no feed do Instagram, pelo navegador, com aprovação do plano e confirmação antes de cada publicação. Cada pedido fica registrado em `divulgacao/pedidos/`.

O estado em 01/10:

- **A divulgação já funciona.** Em 28/09 os editais 89, 90 e 91 foram publicados no site e no Instagram por esse fluxo. As respostas aos solicitantes ficaram salvas como rascunho; falta conferir se foram enviadas.
- **A caixa tem cerca de 1.000 mensagens** na entrada. A primeira varredura (29/09) triou 12 conversas: 5 pedidos de publicação e 7 sem ação. As propostas ainda aguardam aprovação.
- **O board 30 não está ligado.** Falta o token da API no `.env`, o usuário `api.cgte` como membro do projeto e o mapeamento das colunas. Até lá, nenhum card da comunicação é criado.
- **A divulgação não chega ao Kanboard.** O `/divulgar` registra o pedido em arquivos, mas não cria nem fecha card no board 30 e não alimenta a pauta do Informe. As três publicações de 28/09 existem só no repositório: quem olha o board não as vê, e um relatório tirado do board não as contaria.
- **A divulgação roda em uma máquina só.** Depende do Chrome com as sessões do site e do Instagram, da unidade `Z:\` e da assinatura do webmail, todos no computador do Elton.
- **O Informe Cefor está parado.** A última edição conhecida é a #56, enviada em 05/03/2026, e a cadência oficial é quinzenal. A #57 está prevista para a janela de 01 a 07/10 e a pauta está vazia.
- **Redes sociais não têm responsável definido.**
- **A senha da caixa precisa ser trocada** (foi compartilhada em conversa).
- **Os operadores são Marquito e Elton:** as mesmas duas pessoas que respondem pela gestão da CGTE e pela manutenção do cérebro.

### 2.5 Seis causas

1. **Registrar não devolve nada a quem registra.** O card não poupa o trabalho do Petrvs, então vira burocracia a mais.
2. **Colunas genéricas não mostram etapa.** O gestor precisa perguntar no WhatsApp o que o board deveria responder.
3. **Não há rotina.** O cérebro tem contexto, mas nada roda em dia e hora certos.
4. **Muito desenho, pouca operação.** A cerimônia de entregas YAML foi pensada para trabalho que atravessa especialistas; aplicada a um card simples, ninguém usa.
5. **O relatório está descolado do board.** Enquanto for assim, não há motivo para manter o board em dia.
6. **O gestor acumula dois chapéus sem uma visão única.** CGTE e comunicação têm caixas, boards e prazos diferentes, e hoje nada os mostra lado a lado.

---

## 3. O que as referências ensinam e o que serve para a CGTE

| Princípio | De onde vem | Aplicação na CGTE |
|---|---|---|
| Todo cérebro precisa de três pilares: **contexto, skills e rotinas** | Okamoto | Temos contexto. A comunicação já tem as primeiras skills (`/processar-noticias`, `/divulgar`). Faltam as skills da gestão e as rotinas: algo que roda toda manhã e toda sexta |
| **Três camadas de memória:** bruto → ledger → canônico. O ledger é um índice de uma linha por captura | Okamoto | Bruto = `_entrada/`. Canônico = Kanboard. O registro `comunicacao-cefor/triagem/` já é um ledger; a gestão adota o mesmo formato |
| **Entrada por escopo** e consolidação periódica | Okamoto | A convenção `_entrada/` por workspace já foi adotada; falta a rotina que esvazia cada uma |
| Ordem de entrada do agente: **ler → revisar → relatar → automatizar.** "Agente em estrutura bagunçada automatiza bagunça" | Okamoto | Primeiro arrumar o board e ligar a leitura (painel, relatório). Escrita assistida depois |
| **Menos é mais:** menos agentes, menos manutenção | Okamoto | Não ativar os 6 workspaces-esqueleto por ativar. Um fluxo bem feito antes |
| **Cérebros separados por permissão,** não por assunto | Okamoto | Anotações de gestão sobre pessoas e contatos pessoais saem do repositório compartilhado (seção 9.6) |
| A ferramenta não importa; **o contexto é seu** | Okamoto | Tudo em arquivos de texto e no Kanboard. Serve para Claude, Codex, Gemini ou nenhuma IA |
| **"Eupresa":** processo que depende de uma cabeça para | L. Oliveira | É a dor do gestor como gargalo, agravada pelo acúmulo da comunicação |
| Filtro **EAD: eliminar → automatizar → delegar,** nessa ordem | L. Oliveira | Eliminar o registro duplicado e a cerimônia; automatizar painel e relatório; delegar triagem e cuidado dos boards |
| **Orçamento de tempo** do gestor | L. Oliveira | Uma sessão de 1 hora para listar as tarefas recorrentes do gestor, incluindo as da comunicação, e classificá-las em E, A ou D (seção 7.6) |
| **Máquina de processos:** o processo já existe espalhado; extrair de gravações e histórico em vez de mapear à mão | L. Oliveira | Etapas de cada área saem do histórico de 1.555 tarefas e de uma conversa gravada de 40 minutos. Foi assim que a voz e os canais da comunicação foram levantados: das respostas reais da caixa |
| Automatizar **regras de governança,** não só tarefas | L. Oliveira | Regra de abertura de sessão ("comece pelas pendências de ontem") e regra de melhoria contínua em cada comando |
| **Medir pouco e mostrar simples:** painel "zen" e um bloco curto por dia | L. Oliveira | Painel de uma página; seis indicadores (seção 12) |
| Segundo cérebro **não é depósito de notas.** Começar pela dor, não pelo plano | J. Van Clief | O foco é um fluxo: capturar → distribuir → acompanhar → relatar |
| **A estrutura decide o que é sinal.** Sessões futuras leem a conclusão, não a transcrição | J. Van Clief | Material bruto fica em `_entrada/` e sai de lá depois de triado; o que segue adiante é a linha do registro e o card |
| **Humano no circuito** como parte do sistema, não como freio | J. Van Clief | HITL mantido, mas de quem é dono da ação (seção 9.7) |
| Cada pessoa pode ter **seu próprio cérebro pequeno** | J. Van Clief | Quem quer usar IA ganha três comandos, sem precisar entender o repositório todo |

**O que não vamos copiar:** agente ligado 24 horas, leitura automática de WhatsApp por API não oficial, dezenas de crons, agente fazendo commit e escrevendo no board sozinho, envio automático de e-mail ou post. Nada disso cabe na CGTE agora — por custo, por LGPD e porque a equipe precisa conseguir operar sem IA.

**O que substitui o Hermes:**

| Função do Hermes no modelo de referência | Substituto na CGTE |
|---|---|
| Cron 24/7 em VPS | Agendador de Tarefas do Windows no PC do gestor; depois, se fizer sentido, GitHub Actions agendado (seção 9.4) |
| Captura automática de e-mail | Ponte de e-mail (`_pontes/email/`), que lê a caixa sob demanda e só salva rascunho. Já funciona para `cso.cefor` |
| Captura automática de WhatsApp | Colar o trecho ou ditar um resumo. É limite assumido |
| Agente cobrando pessoas em grupos | Rascunho de cobrança na voz do Marquito com link pronto; ele clica e envia |
| Memória persistente do agente | O próprio repositório (registros de triagem, decisões) e o Kanboard |
| Consolidação noturna das entradas | Rotina semanal, antes da revisão de sexta |

---

## 4. Princípios da proposta

1. **O Kanboard é a verdade.** O cérebro lê, propõe e relata; não guarda estado de tarefa.
2. **Funciona sem IA, melhora com IA.** Se a assinatura acabar, os scripts continuam; se os scripts quebrarem, os filtros do Kanboard continuam.
3. **Registrar uma vez.** Do card saem o PGD, o registro individual e o relatório anual.
4. **Eliminar antes de automatizar; automatizar antes de delegar.**
5. **Ler antes de escrever.** Painel e relatório primeiro; escrita assistida depois.
6. **Crescer por dor.** Novo board, novo workspace, nova regra ou um sistema próprio só quando houver um problema real que os justifique.
7. **Quem é dono da ação aprova.** O gestor não precisa aprovar o card que a pessoa cria para o próprio trabalho.
8. **Comunicação e CGTE são áreas distintas com uma visão comum.** Boards e caixas separados; painel e relatório juntos.

---

## 5. O modelo em três camadas

```
  E-mail da CGTE · WhatsApp · reuniões · conversas      Caixa cso.cefor
                    │ captura                                 │ /processar-noticias
                    ▼                                         ▼
┌──────────────────────────────────────────────────────────────────────┐
│ CAMADA 3 — IA sob demanda (gestor, operadores e quem quiser)          │
│ transforma captura em propostas · redige recados, respostas, informes │
│ publica no site e no Instagram · tudo com aprovação humana            │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ propostas aprovadas
┌─────────────────────────────▼────────────────────────────────────────┐
│ CAMADA 1 — KANBOARD (fonte da verdade, todo mundo)                    │
│ board 47 e esteiras da CGTE · board 30 da comunicação                 │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ leitura (API, sem aprovação)
┌─────────────────────────────▼────────────────────────────────────────┐
│ CAMADA 2 — Scripts de leitura (Bun, sem IA)                           │
│ Painel CGTE · higiene do board · relatórios PGD e anual               │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 6. Kanboard reorganizado

### 6.1 Boards

| Board | Papel | Quem usa |
|---|---|---|
| **47 CGTE – Atividades** | Porta de entrada de toda demanda que chega pela gestão. Casa do trabalho de design, design educacional, tecnologia/IA, institucional e ciência | Toda a CGTE |
| **30 Comunicação do Cefor** | Esteira de publicações e edições do Informe. Área separada, com operador próprio | Operadores da comunicação |
| **60 CGTE – Audiovisual** | Esteira de vídeo com colunas = etapas, a definir na descoberta com a área (inclui onde a Libras entra) | Audiovisual e Libras |
| **58 CGTE – Projetos** | Projetos grandes com card organizador (Cefor 20 anos, Concefor, Livro) | Gestor e responsáveis |
| **73 Informações fixas e recorrentes** | Referência e modelos de tarefas recorrentes | Todos |

Regras que mantêm isso simples:

- Um card vive em **um board só.** Demanda que chega pelo gestor nasce no 47 e é movida na triagem; trabalho registrado pela própria pessoa nasce direto no board dela.
- **A comunicação nunca escreve no 47.** Quando uma publicação precisa de arte, vídeo ou Libras, nasce um card no 47 ligado ao card do 30 (link interno do Kanboard). O painel mostra as publicações que estão esperando peça da CGTE.
- **Toda publicação termina em card no board 30.** O `/divulgar` fecha o pedido propondo o card já em "Publicado", com os links do site e do post (ou movendo o card que a triagem criou). O registro em `divulgacao/pedidos/` continua sendo o detalhe; o card é o que todo mundo vê e o que o relatório conta.
- **Categorias com o mesmo nome nos boards da CGTE.** No Kanboard a categoria é por projeto; ao mover, ela é casada pelo nome. O relatório também lê por nome.
- Coluna final com fechamento automático em todos os boards.
- **Sem board novo por enquanto.** O board 30 é o piloto de "colunas = etapas"; o 60 só é redesenhado depois da conversa com audiovisual e Libras. Libras-interpretação (escala de eventos) só ganha board próprio se a raia no board de vídeo não bastar.

Alternativa considerada para a CGTE: **um board único com raias por área.** É mais simples e dá ao gestor tudo em uma tela nativa do Kanboard, mas continua sem mostrar etapa e fica ilegível se audiovisual e Libras passarem a registrar o volume real. Recomendo manter o 47 como entrada e usar esteiras só onde há fluxo repetitivo. É a decisão D2.

### 6.2 Colunas

**Board 47.** As colunas atuais ficam; o que muda é o significado combinado de cada uma.

| Coluna | Significado combinado | Quem move para cá |
|---|---|---|
| Baú de tarefas | Registrado, ainda sem prioridade. Pode não ter dono | Qualquer pessoa |
| Início autorizado | **Fila delegada:** tem dono e prazo, aguardando começar | Gestor (ou a própria pessoa, para trabalho próprio de rotina) |
| Em andamento | A pessoa aceitou e está fazendo. **Mover para cá é o aceite** | Dono do card |
| Aguardando terceiros *(nova, opcional)* | Parado esperando solicitante ou outro setor | Dono do card |
| Em aprovação | Pronto, esperando o gestor ou o solicitante | Dono do card |
| Congelado | Pausado por decisão, com motivo no comentário | Gestor |
| Finalizado | Entregue. Fecha sozinho e entra no relatório | Gestor ou dono, conforme o combinado |

**Board 30.** As colunas reais só serão conhecidas depois da varredura. O alvo é que elas respondam, sem perguntar a ninguém, "quantos a publicar, quantos esperando, quantos publicados":

| Coluna-alvo | Significado |
|---|---|
| Solicitado | Pedido triado e aprovado, com canal e prazo. Corresponde ao pedido na fila de divulgação |
| Aguardando peça ou informação | Falta arte da CGTE, correção do solicitante ou dado |
| Em aprovação | Plano de divulgação, texto ou peça pronta, esperando o operador |
| Agendado | Aprovado, com data de publicação |
| Publicado | No ar e verificado, com os links no card. Fecha sozinho e entra no relatório |

### 6.3 Contrato do card

O Kanboard não obriga campo nenhum. O padrão se sustenta por três coisas: modelo de descrição, verificação diária de higiene no painel e curadoria semanal.

| Campo | Regra | Para que serve |
|---|---|---|
| Título | `Projeto ou solicitante: verbo + objeto` (ex.: "TMD: artes para e-mail marketing 2026/2"). No board 30, o canal vem na frente: `[Site + Instagram] Edital 91.2026` | Vira o texto do relatório |
| Categoria | Obrigatória no 47: uma das 18 | Define área e entrega do PGD |
| Responsável | Obrigatório a partir de "Início autorizado" | Carga por pessoa; PGD individual |
| Prazo | Obrigatório a partir de "Início autorizado"; é o prazo combinado com o solicitante | Painel; indicador de prazo cumprido |
| Etiqueta | Sugerida quando a categoria cobre mais de uma entrega (seção 6.4) | Linha exata do relatório |
| Complexidade | Usada como **quantidade** em cards de lote (ex.: 42 vídeos) | "O setor em números" conta unidades, não cards |
| Descrição | Modelo fixo: Solicitante · Contato · Origem (link do e-mail ou da reunião) · O que é "pronto" · Próximo passo | Quem pediu, como falar, o que falta |
| Subtarefas | As etapas do trabalho | A barra de progresso do card é o "%" |
| Comentários | O histórico | "O que veio antes" |

Granularidade: um card é uma unidade de trabalho que cabe em uma frase e tem um dono. Trabalho recorrente gera um card por ocorrência. Trabalho em lote gera um card com quantidade. Ficam proibidos cards de período ("atividades extraordinárias de março") e cards sem categoria. Na comunicação vale a regra já escrita: tema de informe vai para a pauta, não vira card; o card é um por edição.

### 6.4 Categoria + etiqueta → relatório

As 18 categorias do board 47 foram desenhadas para cobrir as 29 entregas do PGD, mas algumas categorias cobrem mais de uma entrega (MOOC cobre "checklist realizada", "curso atualizado" e "curso traduzido"), e o relatório anual tem linhas mais finas que as categorias ("Banners site e AVA: 24" e "Peças para campanhas: 127" são ambas Comunicação Visual).

Solução: um arquivo único, `_configuracao/mapa-relatorio.yaml`, diz de onde vem cada linha de relatório. Ele é montado do zero a partir do Plano de Entregas e do Relatório de Gestão 2025, e validado pelo gestor.

```yaml
linhas:
  - id: pecas-campanha
    area: design
    rotulo_relatorio: "Peças para campanhas, redes sociais e thumbnails"
    entrega_pgd: "Conteúdo para Comunicação Visual elaborado"
    fonte: kanboard
    projeto: 47
    categoria: "Comunicação Visual"      # padrão da categoria
  - id: banners
    area: design
    rotulo_relatorio: "Banners site e AVA"
    entrega_pgd: "Conteúdo para Comunicação Visual elaborado"
    fonte: kanboard
    projeto: 47
    categoria: "Comunicação Visual"
    etiqueta: "banner"
  - id: informe-cefor
    area: comunicacao
    rotulo_relatorio: "Edições do Informe Cefor"
    fonte: kanboard
    projeto: 30
    titulo_comeca_com: "[Informe]"
  - id: divulgacoes
    area: comunicacao
    rotulo_relatorio: "Divulgações publicadas no site e no Instagram"
    fonte: arquivos                       # provisório, até o board 30 estar ligado
    pasta: "comunicacao-cefor/divulgacao/pedidos"
    conta_quando: "verificação com resultado: publicado"
  - id: videos-publicados
    area: audiovisual
    rotulo_relatorio: "Vídeos postados no canal do Cefor e do Ifes"
    fonte: manual                         # enquanto a área não registra no board
    informa: "referência do audiovisual"
    quando: "fechamento do trimestre"
```

Dois efeitos importantes:

- **O relatório fica completo desde o primeiro dia.** Linha que ainda não tem dado no board aparece como "a informar por…", em vez de sumir.
- **A adoção pelas outras áreas é medida:** cada linha que troca de `manual` para `kanboard` é um avanço visível.

Uma etiqueta extra, `destaque`, marca ao longo do ano os candidatos a "boas práticas em destaque". Em janeiro a lista já existe.

### 6.5 O que o próprio Kanboard já faz

Vale configurar antes de escrever qualquer código. Disponibilidade a conferir na versão institucional.

| Recurso nativo | Uso proposto |
|---|---|
| Ação automática: fechar tarefa ao entrar na coluna final | Resolve os 25% de cards concluídos sem data |
| Ação automática: gravar data de início ao entrar em "Em andamento" | Tempo de ciclo sem ninguém digitar |
| Ação automática: comentar a cada mudança de coluna | Histórico do card de graça |
| Ação automática: cor por categoria | A cor passa a indicar área; a pessoa já aparece como responsável |
| Modelos de tarefa (conteúdo predefinido) | O modelo de descrição da seção 6.3 a um clique |
| Filtros personalizados compartilhados | "Sem dono", "Sem categoria", "Atrasados", "Aguardando aprovação": o painel básico de quem não usa IA |
| Análises do projeto | Tempo médio por coluna, lead time, distribuição por pessoa e por categoria, sem script |
| Links internos entre tarefas | Card do board 30 ligado ao card de produção no 47 |
| Feed iCal do projeto | Prazos dos cards na agenda do gestor, se a agenda aceitar assinatura iCal |
| Tarefas recorrentes | CONSUP mensal, Papo com IA.IÁ semanal, edição do Informe a cada quinzena |
| Token de API por usuário | Quem usa IA cria cards em nome próprio, sem compartilhar o token da coordenação |
| Limite de tarefas por coluna | Sinal visual de sobrecarga em "Em andamento" |

### 6.6 Faxina do board 47 (agora liberada)

A faxina estava esperando o modelo de uso. Com ele definido, a ordem é:

1. Ligar as ações automáticas.
2. Categorizar os cards **concluídos em 2026** sem categoria. É o que alimenta o relatório anual; vem antes dos abertos.
3. Categorizar os abertos sem categoria (cerca de 68 em junho).
4. Triar os 37 parados há mais de um ano: fechar, congelar ou reativar.
5. Fechar ou migrar os 22 de categoria legada (`x_`), incluindo os de "x_CSO do Cefor", que agora têm casa no board 30.
6. Dar dono aos 18 sem dono.

Método: a IA propõe em **tabela** (card, categoria sugerida, etiqueta, motivo), Raquel revisa, Marquito aprova a tabela olhando linha a linha, e o script aplica. Isso respeita "nada em lote sem ver cada um" sem exigir 150 confirmações separadas. Vale só para correção de cards existentes no 47; na comunicação a aprovação segue item a item.

---

## 7. A rotina do gestor

O desenho abaixo resume o fluxo de uso: o dia em quatro passos, o Kanboard no meio e os ritmos mais longos, todos gerados a partir dele. As seções seguintes detalham cada parte.

![Fluxo de uso do gestor: abrir o Painel CGTE, decidir o que só o gestor destrava, capturar ao longo do dia e fechar a sessão; as decisões são escritas no Kanboard com aprovação, e a revisão de sexta, o Informe, o PGD e o Relatório de Gestão são gerados a partir dele](fluxo-uso-gestor.svg)

### 7.1 Painel CGTE

Uma página, gerada por script a partir dos boards e dos registros do cérebro. É a peça central da proposta: tudo o mais existe para que ele seja confiável.

Exemplo ilustrativo, com dados fictícios:

```
PAINEL CGTE — quinta 01/10/2026 · leitura do Kanboard às 07:40

PRECISA DE VOCÊ (6)
  aprovar    #0001 Banner da campanha X — em aprovação há 2 dias (Andréia)
  aprovar    4 propostas da caixa da comunicação (varredura de 29/09)
  aprovar    1 plano de divulgação (edital X)
  decidir    2 itens novos na entrada (reunião de gestores)
  sem dono   #0002 Atualizar página de dados de avaliação
  fechar     Informe #57 — janela termina em 07/10 · 0 itens na pauta

CGTE
  Vence hoje ou nesta semana (4) · Atrasados (2) · Parados há +10 dias (5)
  Quem está com o quê
    Andréia   4 em andamento · 1 vence nesta semana
    Elton     3 em andamento · 0 vence nesta semana
    ...
  Fora do padrão (7): 3 sem categoria · 4 sem prazo

COMUNICAÇÃO DO CEFOR
  Caixa       última varredura há 2 dias · 6 conversas aguardando aprovação
  Divulgação  2 pedidos na fila · 1 aguardando confirmação · 3 publicados na semana
              3 respostas em rascunho, ainda não enviadas
  Board 30    3 solicitadas · 2 aguardando peça da CGTE · 1 agendada
  Informe     #57 em aberto · última edição enviada há 210 dias
```

Como ele é montado:

| Bloco | De onde vem |
|---|---|
| Precisa de você | Cards em "Em aprovação" e sem dono (boards 47 e 30); propostas pendentes em `comunicacao-cefor/triagem/`; planos de divulgação com `aprovado: false`; itens em `00-orquestrador/_entrada/`; janela do Informe em `caixa.yaml` |
| CGTE | Boards 47, 58 e 60: prazos, última movimentação, responsável, campos faltando |
| Comunicação do Cefor | Board 30 por coluna; último registro de triagem; `divulgacao/pedidos/` (a etapa de cada pedido sai dos arquivos que existem); `informe/pauta.yaml` |

Cada linha leva o link do card e, quando houver, o do contato. A ordem é proposital: primeiro o que só o gestor pode destravar.

Carga por pessoa mostra só o trabalho aberto, para distribuir. Não vira ranking.

Formatos: um arquivo Markdown no repositório e a mesma página em HTML, para abrir no navegador. Uma versão sem o bloco "Precisa de você" pode ser projetada na reunião geral.

### 7.2 Delegar em dois minutos

1. O gestor descreve a demanda (digita, cola ou dita).
2. O cérebro propõe o card: título, categoria, etiqueta, etapas, prazo e **dono sugerido** pelo eixo e pela carga atual.
3. O gestor aprova ou ajusta. O card nasce em "Início autorizado".
4. O cérebro entrega o recado na voz do Marquito, com o link do card e o link que abre a conversa.
5. A pessoa aceita movendo o card para "Em andamento". O aceite fica no board, não no WhatsApp.
6. Card parado aparece no painel; o comando `cobrar` redige a mensagem.
7. Entrega vai para "Em aprovação"; aprovado, vai para "Finalizado" e entra no relatório.

### 7.3 Captura

| Canal | Como entra | Observação |
|---|---|---|
| Caixa da comunicação (`cso.cefor`) | `/processar-noticias` para triar; pedido com artes vai para a fila do `/divulgar` | Já existe |
| E-mail da CGTE (`cgte.cefor`) | Estender a ponte de e-mail a esta caixa, com as mesmas garantias: só leitura e rascunho | Decisão D9. O webmail do Ifes é Exchange; a ponte já fala com ele |
| Reunião | Transcrição em `00-orquestrador/_entrada/` e comando `processar-entrada` | A transcrição é feita no transcritor do Elton |
| WhatsApp | Colar o trecho ou ditar um resumo | Sem integração; é limite assumido |
| Ideia ou lembrança | Comando `capturar` (uma frase) | Substitui a lista de tarefas e as notas soltas |
| Pessoa da equipe | Cria o card direto no Baú | Caminho universal, sem IA |
| Solicitante externo | Avaliar um formulário de solicitação que já preenche o modelo do card | Só se o volume justificar |

Toda captura da gestão gera uma linha no **registro de entrada** (`operacoes/registro/AAAA-MM.yaml`), no mesmo formato do registro de triagem da comunicação: quando, de onde veio, de quem, um resumo factual e para onde foi (número do card, descartado ou pendente). É o que impede o caso de 06/08 de se repetir: item pendente aparece no painel até virar card ou ser descartado.

### 7.4 Revisão de sexta, enxuta

Vinte minutos, com um retrato semanal já pronto: o que foi concluído por área, o que entrou, o que está em risco, a higiene do board, as capturas pendentes e o estado da comunicação. Gestor e curadoria decidem; o que for decisão de sistema vai para `operacoes/decisoes.md`. Uma vez por mês a revisão inclui a **poda:** cards parados, documentos velhos, comandos que ninguém usa.

### 7.5 Rotina da comunicação

A área já tem fluxo desenhado; o que falta é ritmo.

- **Caixa:** `/processar-noticias` em dias fixos (sugestão: segunda, quarta e sexta), com um operador aprovando item a item.
- **Divulgação:** logo depois da caixa, `/divulgar` sobre a fila. O operador aprova o plano e confirma cada publicação.
- **Fechamento de cada pedido, em três gestos:** enviar a resposta que ficou em rascunho, registrar o card em "Publicado" no board 30 e, quando couber, pôr o tema na pauta do Informe. Hoje só o primeiro existe no fluxo; os outros dois são a ponte a construir.
- **Informe:** `fechar-informe` na 1ª e na 3ª semana. O painel avisa quando a janela abre e quantos itens há na pauta.
- **Publicação que depende de peça:** vira card no 47 ligado ao do 30, e aparece no painel até a peça chegar.
- **Um operador por dia.** Marquito e Elton combinam quem aprova em cada dia fixo, para a caixa não depender dos dois ao mesmo tempo.

Três pontos a decidir (D8): quem responde pelas redes sociais, agora que o post no feed sai pelo `/divulgar`; se um terceiro operador pode fazer a primeira passada da triagem, que é proposta com aprovação e por isso boa candidata a delegação; e se a divulgação deve poder rodar também na máquina do Marquito.

### 7.6 Orçamento de tempo do gestor

Uma sessão de uma hora (pode ser gravada e transcrita): listar as tarefas recorrentes do gestor nos dois chapéus, quanto tempo cada uma toma por semana e classificar em **eliminar, automatizar ou delegar.** O resultado vira `01-gestor/referencias/orcamento-tempo.md` e orienta o que construir depois. Candidatos óbvios: eliminar o registro duplicado; automatizar painel, relatório e cobrança; delegar a curadoria do board (Raquel), o cuidado das esteiras (uma referência por área) e a primeira passada da caixa da comunicação.

---

## 8. Relatórios de gestão

### 8.1 Cinco saídas do mesmo dado

| Saída | Para quem | Quando | Conteúdo |
|---|---|---|---|
| Retrato semanal | Gestor | Sexta | Concluídos por área, entradas, riscos, higiene, comunicação |
| PGD da unidade | Gestor | Fim do trimestre | Por entrega do PGD: quantidade, lista de cards e texto pronto para o Petrvs |
| PGD individual | Cada pessoa | Mensal | "O que eu concluí", agrupado por entrega, pronto para colar |
| Balanço da comunicação | Operadores e Diretoria | Mensal | Divulgações por canal (site, Instagram), edições do Informe, pedidos atendidos e recusados, tempo entre pedido e publicação |
| Relatório de Gestão | Gestor e Diretoria | Janeiro | "O setor em números" por área, candidatos a destaque e rascunho da introdução na voz da CGTE |

O **PGD individual é a peça que faz o resto funcionar.** É a contrapartida que falta hoje: quem mantém o card em dia deixa de redigir narrativa no Petrvs. A adoção vem do benefício, não da cobrança.

Exemplo ilustrativo de um trecho do PGD da unidade, com dados fictícios:

```
Conteúdo para Comunicação Visual elaborado — 14 entregas
  Texto para o Petrvs: "14 atividades realizadas: artes para e-mail marketing do TMD;
  campanha do Mês das Mulheres; banner do edital 02/2026; ..."
  Cards: #0003, #0004, #0005, ...

Evento interpretado em Libras — a informar pela referência de Libras
```

### 8.2 Regras de contagem

- **Concluído em:** data de fechamento do card; se o card está na coluna final mas aberto, vale a data em que entrou na coluna. Isso recupera os cards antigos sem distorcer o trimestre.
- **Quantidade:** valor do campo Complexidade; se vazio, conta 1.
- **Períodos do PGD:** configuráveis no mapa. Os registros mostram ciclos de 01/03 a 31/05/2025 e de 01/11/2025 a 31/01/2026; o ciclo atual precisa ser confirmado no Petrvs.
- **Board 30:** cards criados antes de 2023 são ignorados, como já está em `projetos-cgte.yaml`.
- **Texto:** o script gera lista e contagem; a IA, se usada, só melhora a redação. Os números nunca vêm da IA.

### 8.3 Construção do zero, em degraus

Nada do `sistema-gestao-cgte` é reaproveitado. Painel e relatórios nascem dentro do cérebro, usando a ponte do Kanboard que já existe:

| Degrau | O que é | Quando subir |
|---|---|---|
| 1 | Scripts Bun em `_pontes/kanboard/` que leem os boards e escrevem Markdown | Agora |
| 2 | A mesma saída em uma página HTML estática, aberta no navegador | Assim que o painel estabilizar |
| 3 | Um sistema próprio, com tela e acesso para a equipe | Só se, depois de um trimestre de uso, houver uma necessidade que arquivos não resolvem: edição pela tela, acesso por quem não tem o repositório, histórico navegável |

Se chegarmos ao degrau 3, os requisitos saem do uso real dos degraus 1 e 2, e o `mapa-relatorio.yaml` continua sendo a única definição do que cada número significa.

Os modelos de relatório (Relatório de Gestão 2025 e Plano de Entregas) devem ser copiados para `01-gestor/referencias/`, para que o cérebro não dependa de uma pasta de projeto descartado.

---

## 9. O cérebro reorganizado

### 9.1 O que simplificar

- **Via rápida para o card simples.** Criar, mover ou comentar um card passa a ser uma proposta, uma aprovação e uma linha no registro. Caso com entregas YAML fica para o trabalho que atravessa especialistas e gera artefatos (como o relato do ESUD). A comunicação já funciona assim: publicação simples vive no card e no registro da triagem, sem caso.
- **Pedido simples da comunicação à CGTE.** Hoje abre caso e `EN-001`. Como são as mesmas pessoas dos dois lados, vale avaliar: peça avulsa vira card no 47 ligado ao do 30; caso só para campanha com várias peças e envolvidos.
- **Workspaces-esqueleto ficam dormentes.** Não se apaga nada; só se para de tratar a ativação dos seis como meta. Um workspace acorda quando a área tiver um fluxo real a apoiar.
- **Ativação por conversa gravada.** Quarenta minutos de conversa com a área, transcrita; a IA rascunha os quatro arquivos do contrato; a pessoa valida.

### 9.2 O que entra na estrutura

```
cerebro-cgte/
├── <workspace>/_entrada/    convenção já adotada: material bruto de cada escopo
├── operacoes/
│   ├── painel/hoje.md       gerado, sobrescrito a cada leitura
│   ├── painel/hoje.html     a mesma página, para o navegador
│   ├── painel/semanas/      um retrato por semana (versionado)
│   ├── registro/AAAA-MM.yaml  uma linha por captura da gestão, com o destino
│   ├── decisoes.md          decisões de gestão, datadas
│   ├── relatorios/pgd/      um arquivo por trimestre
│   ├── relatorios/gestao/   um arquivo por ano
│   ├── relatorios/comunicacao/  um arquivo por mês
│   └── revisao-sexta.md
├── _configuracao/
│   └── mapa-relatorio.yaml  categoria e etiqueta → entrega PGD → linha do relatório
├── _pontes/kanboard/
│   ├── painel.ts · higiene.ts · relatorio.ts     (somente leitura)
│   └── ids.ts               lê os YAML de projetos e usuários; fim dos mapas copiados
├── .claude/skills/          os comandos abaixo, versionados (já existe `processar-noticias`)
└── 01-gestor/privado/       anotações de gestão sobre pessoas e contatos (fora do git)
```

### 9.3 Comandos

Cada comando é um processo repetido, congelado em arquivo, que qualquer ferramenta de IA consegue seguir. Os de leitura rodam também sem IA, como script.

| Comando | O que faz | Precisa de IA? | Escreve fora do repositório? |
|---|---|---|---|
| `bom-dia` | Roda o painel e lembra o que ficou pendente na última sessão | Não | Não |
| `capturar` | Guarda uma nota, um áudio ou um arquivo em `_entrada/` e registra | Não | Não |
| `processar-entrada` | Lê o que foi capturado e propõe cards, movimentos, prazos e comentários | Sim | Kanboard, com aprovação |
| `delegar` | Proposta de card com dono sugerido e recado redigido | Sim | Kanboard, com aprovação |
| `cobrar` | Rascunho de cobrança para card parado | Sim | Não |
| `higiene` | Lista cards fora do padrão e propõe correção em tabela | Lista: não. Proposta: sim | Kanboard, com aprovação |
| `relatorio-pgd` | PGD da unidade ou de uma pessoa, por período | Não | Não |
| `relatorio-gestao` | "O setor em números" e rascunho do texto anual | Números: não. Texto: sim | Não |
| `revisao-sexta` | Retrato semanal e pauta da revisão | Não | Não |
| `salvar` | Fecha a sessão: decisões para `decisoes.md`, pendências viram propostas de card | Sim | Kanboard, com aprovação |
| `/processar-noticias` *(já existe)* | Varre a caixa da comunicação, tria e encaminha | Sim | Board 30 e rascunho na caixa, com aprovação |
| `/divulgar`, `/publicar-banner` *(já existem)* | Publica o pedido no banner do site e no feed do Instagram | Sim | Site, Instagram e rascunho de resposta, com confirmação antes de cada publicação. Falta: card no board 30 |
| `pauta-informe`, `fechar-informe` *(já existem)* | Pauta e montagem da edição do Informe | Sim | Board 30, com aprovação |

Cada comando termina com uma linha de aprendizado: o que deu errado nesta execução e o que mudar no próprio comando. É assim que eles melhoram sem ninguém reescrever do zero.

### 9.4 Rotinas sem VPS

| Nível | Como roda | Quando faz sentido |
|---|---|---|
| 0 | Sob demanda: o gestor digita `bom-dia` | Desde o primeiro dia |
| 1 | Agendador de Tarefas do Windows no PC do gestor gera o painel ao ligar a máquina | Assim que o painel estabilizar |
| 2 | GitHub Actions agendado gera painel e higiene uma ou duas vezes por dia, mesmo com o PC desligado | Se o gestor sentir falta. Exige que a API do Kanboard seja alcançável pela internet, token guardado como segredo e aval da TI |
| 3 | Rotina em nuvem com IA para `processar-entrada` | Só se os níveis anteriores provarem valor |

A recomendação é começar nos níveis 0 e 1. Atualização uma vez por dia já resolve; o próprio gestor disse que nada precisa ser em tempo real. A leitura das caixas de e-mail fica sempre sob demanda, porque depende da rede do Ifes e da presença de um operador.

### 9.5 Fonte única: divergências a corrigir

| Onde | Problema |
|---|---|
| `01-gestor/referencias/taxonomia-board-47.md` | Lista colunas que não existem ("Backlog", "Em execução", "Concluído"). As reais estão em `_pontes/kanboard/projetos-cgte.yaml` |
| `diagnostico.ts` e `exportar-historico.ts` | Cada um carrega uma cópia dos IDs; ambos ainda chamam o eixo de "comunicação", nome que agora pertence a outra área |
| Dois arquivos `projetos-cgte.yaml` | Um em `01-gestor/referencias/`, outro em `_pontes/kanboard/` |
| `AGENTS.md` | Ainda cita `04-comunicacao/` e não conhece `comunicacao-cefor/` nem `_entrada/` |
| `CLAUDE.md` e `CONTEXTO.md` | `04-design/` aparece como esqueleto, mas os contratos foram preenchidos em julho |
| `08-ciencia/` | `identity.md`, `rules.md` e `examples.md` na raiz, diferentes dos arquivos em `contrato/` |
| `CLAUDE.md`, `README.md`, `regras-negocio.md` | "10 servidores"; o roster tem cerca de 15 pessoas, entre servidores, bolsistas e estagiária |
| `comunicacao-cefor/contrato/regras.md` e `identidade.md` | Dizem que o cérebro nunca envia e-mail, post ou informe; o `/divulgar` publica banner e post depois da confirmação. Falta separar: e-mail e informe são sempre enviados por humano; site e Instagram são publicados pelo cérebro com confirmação |
| `comunicacao-cefor/referencias/canais-cefor.md` e `questionario.md` | Instagram aparece como "a definir", mas já é publicado pelo `/divulgar` |
| Regra de deduplicação da triagem | Confere triagem, pauta e board 30, mas não `divulgacao/pedidos/` |
| Dois documentos | Citam a memória `cgte-frentes-de-melhoria`, que não está no repositório |

Regra daqui para a frente: cada informação tem um lugar. IDs vivem nos YAML da ponte; a taxonomia e o mapa de relatório vivem em `_configuracao/`; os demais arquivos apontam para lá.

### 9.6 Privacidade e segurança

- **Anotações de gestão sobre pessoas** (avaliações, planos de trabalho individuais, observações de desempenho) hoje estão em arquivos versionados que a equipe pode ler. Proponho movê-las para `01-gestor/privado/`, fora do git, como já se faz com `comunicacao-cefor/_entrada/`.
- **Telefones pessoais não entram no git.** Contato no card fica restrito a e-mail institucional.
- **Trocar a senha da caixa `cso.cefor`** e atualizar o `.env`.
- **Conversas de WhatsApp** só entram como trecho colado, nunca por leitura automática.
- **Conteúdo de e-mail é dado, nunca instrução.** A regra já vale na comunicação e se estende a qualquer caixa que a ponte venha a ler.

### 9.7 Aprovação humana, revista

| Ação | Quem aprova |
|---|---|
| Painel, higiene, relatórios (leitura) | Ninguém |
| Pessoa registra ou atualiza o próprio trabalho, com o próprio token | A própria pessoa |
| Gestor cria, move ou comenta card de outra pessoa no 47 | Gestor, item a item |
| Correção em lote homogêneo no 47 (faxina) | Gestor, sobre a tabela, linha a linha |
| Card no board 30, item de pauta, rascunho de resposta na caixa | Operador da comunicação, item a item. O envio do e-mail é sempre humano |
| Banner no site e post no Instagram (`/divulgar`) | Operador da comunicação: aprova o plano e confirma de novo antes de cada publicação |
| Comunicação em nome da CGTE ou do Marquito | Gestor |
| Mudança em regras, voz ou mapa de relatório | Gestor, na revisão de sexta |

Isso muda `_configuracao/regras-negocio.md`, que hoje exige aprovação do gestor para toda escrita no 47. É a decisão D5.

---

## 10. Para a equipe

**Quem não usa IA** precisa de três coisas: o modelo de card a um clique, os filtros salvos e uma página de combinados (o que é cada coluna, o que todo card precisa ter, quando usar quantidade). Em troca, recebe todo mês o texto do PGD individual pronto.

**Quem quer usar IA** usa a `_entrada/` do próprio workspace e três comandos:

- `meu-dia`: meus cards, o que vence, o que está parado, próximo passo de cada um.
- `registrar`: "terminei a arte do edital X e publiquei o banner" vira proposta de card com categoria e etiqueta; a pessoa aprova e o card nasce no nome dela.
- `meu-pgd`: o texto do mês para o Petrvs.

Ninguém é obrigado a usar o repositório. O cérebro é da gestão e de quem quiser; o Kanboard é de todos.

---

## 11. Roteiro

Estimativas de esforço são aproximadas e pressupõem Elton na construção, Marquito nas decisões e Raquel na curadoria.

| Fase | Até | O que entrega | Esforço |
|---|---|---|---|
| **0. Decidir e destravar** | 09/10 | Decisões D1 a D5; token da API no `.env`; `api.cgte` como membro do projeto 30 e varredura das colunas; senha da caixa trocada; versão do Kanboard e ciclo do PGD confirmados. **Informe #57:** rodar `/processar-noticias 14d` com um operador e fechar a edição na janela de 01 a 07/10. Conferir se as três respostas em rascunho de 28/09 foram enviadas | 1 sessão de 1 h, mais a operação do Informe |
| **1. Base confiável e painel** | 23/10 (painel até 16/10) | Ações automáticas e filtros salvos nos boards 47 e 30; `painel.ts` com os blocos CGTE e comunicação; `higiene.ts`; `ids.ts`; divergências da seção 9.5 corrigidas; faxina dos concluídos de 2026; ponte do `/divulgar` com o board 30 e com a pauta do Informe, incluindo os três pedidos de 28/09 | 14 a 18 h |
| **2. Delegar e capturar** | 06/11 | Comandos `capturar`, `processar-entrada`, `delegar`, `cobrar`, `salvar`; registro de entrada; via rápida nas regras; primeira revisão de sexta real; orçamento de tempo do gestor; dias fixos da caixa da comunicação | 8 a 12 h |
| **3. Relatório** | fechamento do trimestre | `mapa-relatorio.yaml` montado e validado; `relatorio.ts`; PGD da unidade e individual do trimestre em curso gerados e conferidos contra o que foi lançado à mão; primeiro balanço mensal da comunicação | 10 a 14 h |
| **4. Esteiras** | novembro | Colunas do board 30 ajustadas ao alvo da seção 6.2; conversas gravadas com audiovisual e com Libras; análise do histórico para extrair as etapas reais | 6 a 8 h, mais 2 conversas de 40 min |
| **5. Fechamento do ano** | janeiro/2027 | "O setor em números" de 2026 gerado; decisão sobre o board de audiovisual e a raia de Libras; avaliar o degrau 2 do painel e o nível 2 de agendamento | 4 a 6 h |

Datas já conhecidas que o roteiro ajuda: a janela do Informe #57 (até 07/10), a visita da Reitoria ao Cefor em 26/11 e o período de relatórios no início do ano.

**Primeira quinzena, em concreto:** fechar o Informe #57, ligar o board 30, ligar o fechamento automático, publicar os filtros, rodar o painel pela primeira vez e categorizar os concluídos de 2026. Nenhum desses passos depende de decisão nova além de D1.

---

## 12. Como saber que funcionou

1. O gestor abre o dia pelo painel em pelo menos quatro de cinco dias.
2. Mais de 90% dos cards fora do Baú têm categoria, dono e prazo.
3. O PGD do trimestre é gerado e conferido em menos de uma hora.
4. Ao menos uma linha do relatório de audiovisual ou de Libras passa de `manual` para `kanboard` até janeiro.
5. Nenhuma captura fica mais de sete dias pendente, na entrada da gestão ou na triagem da comunicação.
6. O Informe Cefor sai nas duas janelas de cada mês.

---

## 13. Riscos

| Risco | Mitigação |
|---|---|
| Virar o quarto plano pendente | Fase 1 pequena, com o painel rodando na primeira quinzena e sem depender de decisão além de D1 |
| Gestão, comunicação e manutenção do cérebro nas mesmas duas pessoas | Painel único para os dois chapéus; dias fixos e um operador por dia; orçamento de tempo para decidir o que delegar |
| Divulgação presa a uma máquina e a sessões de navegador | `referencias/sistemas.md` já documenta o ambiente; decidir em D8 se a máquina do Marquito também roda; se o navegador falhar, os mesmos passos podem ser feitos à mão |
| Audiovisual e Libras não adotarem | O relatório não depende disso (linhas `manual`); a esteira é desenhada com a área, não para a área; o PGD individual é o benefício |
| Dependência de uma pessoa para manter os scripts | Scripts curtos, somente leitura, lendo um YAML; se pararem, o Kanboard e os filtros continuam |
| Credenciais | Token por usuário para quem escreve; token de serviço só para leitura; senha da caixa trocada; nada versionado |
| Mais boards fragmentarem a visão | Nenhum board novo agora; o painel lê todos |
| Padrão de card não pegar | Modelo a um clique, verificação diária no painel e curadoria semanal em vez de cobrança |

---

## 14. Decisões para avaliarmos

- [ ] **D1. Modelo geral.** Kanboard como verdade, cérebro em três camadas, Painel CGTE como porta de entrada, relatório gerado do board. *Recomendo aprovar; tudo o mais depende disso.*
- [ ] **D2. Estrutura de boards.** Manter o 47 como entrada e usar esteiras só onde há fluxo repetitivo (30 agora, 60 depois da descoberta), ou board único da CGTE com raias por área. *Recomendo a primeira opção.*
- [ ] **D3. Contrato do card.** Campos da seção 6.3, incluindo Complexidade como quantidade e a coluna opcional "Aguardando terceiros". *Recomendo aprovar e revisar em 30 dias.*
- [ ] **D4. Painel e relatórios do zero.** Scripts e arquivos agora; página HTML em seguida; sistema próprio só se o uso mostrar necessidade (seção 8.3). *Recomendo.*
- [ ] **D5. Regras de aprovação.** Tabela da seção 9.7, via rápida sem caso para cards simples e para pedido avulso da comunicação à CGTE. *Recomendo aprovar; mexe em arquivo sensível.*
- [ ] **D6. Privacidade.** Anotações de gestão sobre pessoas em pasta fora do git ou em repositório separado. *Recomendo pasta fora do git agora.*
- [ ] **D7. Papéis na CGTE.** Raquel como curadora do board; uma referência por área para cuidar da esteira. *A confirmar com as pessoas.*
- [ ] **D8. Papéis na comunicação.** Quem responde pelas redes sociais; dias fixos e operador de cada dia; um terceiro operador para a primeira passada da caixa; a divulgação rodar também na máquina do Marquito. *Recomendo definir redes e dias agora, e os outros dois depois do orçamento de tempo.*
- [ ] **D9. E-mail da CGTE.** Estender a ponte de e-mail à caixa `cgte.cefor`, só leitura e rascunho. *Recomendo, depois que a rotina da caixa da comunicação estiver estável.*
- [ ] **D10. Agendamento.** Ficar nos níveis 0 e 1 até janeiro. *Recomendo.*
- [ ] **D11. Divulgação no Kanboard.** Todo pedido do `/divulgar` termina em card no board 30 e, quando couber, em item da pauta do Informe. *Recomendo: é o que mantém o Kanboard como verdade também na comunicação.*

### A confirmar antes de começar

- Versão do Kanboard institucional e quais recursos da seção 6.5 estão disponíveis.
- Quem tem permissão de administrador nos projetos 30, 47, 58, 60 e 73.
- Colunas e categorias reais do board 30.
- Se a API do Kanboard responde de fora da rede do Ifes.
- Datas do ciclo atual do PGD e do período do relatório anual.
- Se mover card entre projetos preserva categoria e etiquetas na versão instalada (testar com um card).
- De onde saíram, em 2025, os números de audiovisual e de Libras do relatório.
- Onde o trabalho da comunicação é reportado: no relatório da CGTE, no do Cefor ou nos dois.
