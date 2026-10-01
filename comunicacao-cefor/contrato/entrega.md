# Entrega -- comunicacao-cefor

O que entra, o que sai e em que formato. Todo formato aqui é YAML (ou Markdown com frontmatter YAML) para o próximo passo saber o que esperar.

## O que eu recebo

E-mails da Caixa de Entrada de `cso.cefor@ifes.edu.br`, capturados pela etapa 01 (`_pontes/email/facade.ts varrer`) em `../_entrada/`. Não recebo entregas de outros workspaces no fluxo normal.

### Arquivo de captura -- `_entrada/AAAA-MM-DD_HHMM_<chave>.md`

Gerado pelo script (1 arquivo por mensagem; a triagem agrupa por `conversa_id`):

```markdown
---
mensagem_id: "<2f7c...@ifes.edu.br>"   # Internet Message-ID -- chave de deduplicação
conversa_id: "AAQkAG..."                # agrupa mensagens da mesma conversa
ews_item_id: "AAMkAG..."                # id no Exchange -- usado para salvar o rascunho de resposta
recebido_em: "2026-09-24T13:41:53Z"
dia: "2026-09-24"
remetente: "Napne <napne.cefor@ifes.edu.br>"
para: ["Notícias Cefor <cso.cefor@ifes.edu.br>"]
cc: []
assunto: "Solicitação de publicação de matérias — ..."
anexos: ["materia.docx"]                # só nomes; anexos não são baixados
lida_na_caixa: true
capturado_em: "2026-09-29T20:29:50Z"
fonte: "ews-inbox"                      # ews-inbox | manual | manual-whatsapp | manual-conversa
---

<corpo da mensagem em texto, sem o histórico citado>
```

`_entrada/` é local e está no `.gitignore`: guarda o corpo inteiro, com possíveis dados pessoais. O que vai para o git é o resumo da triagem.

## O que eu produzo

### 1. Registro de triagem -- `triagem/AAAA-MM-DD-HHMM.yaml`

Um arquivo por varredura. É proposta (etapa 02) e depois auditoria (etapa 03 preenche HITL e resultado).

```yaml
varredura: 2026-09-29T14:30
caixa: cso.cefor@ifes.edu.br
janela: 7d
fonte_captura: ews
operador: elton                      # quem aprovou o HITL desta varredura (marquito | elton)
itens:
  - id: TRI-20260929-01
    conversa_id: "AAQkAG..."
    mensagem_id: "<...@ifes.edu.br>"   # mensagem mais recente da conversa
    mensagens: ["<...>", "<...>"]      # todas as mensagens da conversa cobertas por este item
    arquivo_entrada: "2026-09-24_1041_ada3ae20.md"   # usado pelo rascunho (ews_item_id)
    atualiza: null                   # id de item anterior quando a conversa ganhou mensagem nova
    recebido_em: 2026-09-28
    remetente: "Fulana de Tal <fulana@ifes.edu.br>"
    assunto: "Divulgação do II Seminário ..."
    resumo: "2-3 frases: quem pede, o quê, para quando."
    decisao:
      tipo: publicacao               # informe | publicacao | demanda | sem_acao
      tambem: [informe]              # sinalizações extras (opcional)
      subdestino: null               # só para demanda: comunicacao | cgte | outro_setor
      confianca: alta                # alta | media | baixa
      por_que: "Pedido explícito de divulgação de evento do Cefor com data."
      pergunta: null                 # obrigatória quando confianca = baixa
    propostas:                       # uma por destino; cada uma tem HITL próprio
      - destino: board-comunicacao   # board-comunicacao | informe-pauta | cgte | resposta
        kanboard_card_request: { ... }   # formato 3 abaixo
        hitl: pendente               # pendente | aprovado | editado | recusado | aguardando_board
        hitl_aprovado_em: null
        hitl_aprovado_por: null
        resultado: null              # card_id + link | PAU-id | CASO-id/EN-id | caminho do rascunho
        motivo_recusa: null
      - destino: informe-pauta
        item_pauta: { ... }          # formato 2 abaixo
        hitl: pendente
        hitl_aprovado_em: null
        hitl_aprovado_por: null
        resultado: null
      - destino: resposta
        rascunho_resposta: { ... }   # formato 5 abaixo
        hitl: pendente
        hitl_aprovado_em: null
        hitl_aprovado_por: null
        resultado: null              # "rascunho salvo em <data>" | "entregue no chat"
```

Itens `sem_acao` não têm `propostas`; ficam só com `decisao` para registro.

### 2. Item de pauta do informe -- `informe/pauta.yaml`

```yaml
itens:
  - id: PAU-20260929-01
    titulo: "II Seminário Pros@tec reúne pesquisadores em Vila Velha"
    resumo: "O que aconteceu / vai acontecer, em 1-2 frases."
    secao: vem_ai                    # destaque | aconteceu | vem_ai | prazos | avisos | especial (informe/README.md)
    janela: "2026-10-31"             # data do fato; define em qual edição cabe
    fonte: TRI-20260929-01           # item da triagem de origem (ou manual)
    link: "https://..."              # página/inscrição, se houver
    falta: []                        # ex.: ["foto", "link de inscrição"]
    status: candidato                # candidato | aprovado | publicado | descartado
    edicao: null                     # AAAA-MM-DD da edição em que entrou
```

### 3. Proposta de card -- `kanboard_card_request` no board da comunicação

Mesmo formato do `../../_configuracao/ESQUEMA_ENTREGA.md`, com o projeto da comunicação (`../../_pontes/kanboard/projetos-cgte.yaml`, bloco "Comunicação Cefor").

```yaml
kanboard_card_request:
  operacao: criar-tarefa             # ou adicionar-comentario quando o card já existe
  projeto_id: 30                     # board da Comunicação Social (colunas sem id -> hitl = aguardando_board)
  card_id: null
  campos:
    title: "[Site + Instagram] II Seminário Pros@tec -- 31/10"
    description: |
      **Solicitante:** Fulana de Tal (Grupo Pros@tec)
      **Contato:** fulana@ifes.edu.br
      **Origem:** e-mail para cso.cefor em 2026-09-28, assunto "Divulgação do II Seminário ..."
      **Pedido:** divulgar o seminário no site e no Instagram.
      **Canais:** notícia no site; post no Instagram (feed + story)
      **Publicar até:** 2026-10-20
      **Material recebido:** programacao.pdf (anexo no e-mail)
      **Falta:** foto dos palestrantes
      **Próximo passo:** redigir notícia e pedir arte à CGTE (EN-001 de CASO-...)
      **Triagem:** TRI-20260929-01
    column_id: null                  # coluna de entrada do board 30 (id após varredura)
    category_id: null                # se o board usar categorias
    owner_id: null                   # responsável na comunicação, se já definido
    date_due: "2026-10-20"
  hitl_aprovado_em: null
  hitl_aprovado_por: null
```

Título: `[Canal(is)] Assunto -- data relevante`. Descrição sempre com Solicitante, Contato, Origem, Pedido, Próximo passo.

### 4. Pedido de produção à CGTE -- entrega para `00-orquestrador`

Quando a publicação precisa de arte, vídeo ou Libras. Abre `../../casos/CASO-AAAA-NNNN-slug/` com `caso.md` + `entregas/EN-001.yaml`, no envelope canônico:

```yaml
id_entrega: EN-001
id_caso: CASO-2026-0004-arte-seminario-prosatec
papel_origem: comunicacao-cefor
papel_destino: 00-orquestrador
dono_agente: a_definir               # operador da comunicação
criado_em: 2026-09-29
status: open
pedido: "Produzir arte para divulgação do II Seminário Pros@tec (site + Instagram) até 2026-10-15."
carga:
  demanda_comunicacao:
    tipo_producao: peca_visual       # peca_visual | audiovisual | libras | outro
    pecas: ["banner site 750x425", "post feed 4:5", "story"]
    prazo: 2026-10-15
    publicar_em: 2026-10-20
    briefing: "Evento de pesquisa do Cefor, 31/10, auditório do Campus Vila Velha. Programação no anexo."
    solicitante_original: "Fulana de Tal <fulana@ifes.edu.br>"
    origem: "triagem TRI-20260929-01"
    card_comunicacao: null           # card_id no board da comunicação, se já criado
```

Daí em diante segue as chains da CGTE (`00-orquestrador` → `01-gestor` → board 47 / `04-design`).

### 5. Rascunho de resposta -- `rascunho_resposta`

Para todo item que não seja `sem_acao`, na voz "resposta de caixa" (`../../_configuracao/voz/comunicacao-cefor.md`). Fica no registro da triagem (auditoria do que foi proposto e aprovado) e, aprovado, é salvo na pasta **Rascunhos** da caixa via `_pontes/email/facade.ts rascunho`. O envio é humano, pelo webmail.

```yaml
rascunho_resposta:
  responder_a_todos: false           # true quando quem está em cópia precisa saber
  texto: |
    Boa tarde.
    Recebido. Vamos publicar no site e nas redes do Cefor.

    Atenciosamente,
    Elton

    Comunicação Social - Cefor
    Centro de Referência em Formação e em Educação a Distância - Ifes
    27 3198-0933
```

## Mapa de chain

Em `../../_configuracao/cadeias-fluxo.yaml`:

- `triagem_caixa_noticias` -- `comunicacao-cefor` → `_pontes/kanboard` (card no board 30) e → `_pontes/email` (rascunho de resposta).
- `pauta_informe_cefor` -- `comunicacao-cefor` → `comunicacao-cefor` (pauta) e → `_pontes/kanboard` (1 card por edição).
- `pedido_producao_comunicacao` -- `comunicacao-cefor` → `00-orquestrador` → `01-gestor` → `_pontes/kanboard` / `04-design`.
