# Quality Standards

O que "bom" significa para a saída de cada especialista. Especialistas checam o próprio trabalho contra estes critérios antes de marcar entregas como `done`. O gestor revisita durante o `friday-review` da semana.

## Entrega (todos os especialistas)

Um entrega e **bom** quando:

- Os 9 campos obrigatórios estão preenchidos (id_entrega, id_caso, papel_origem, papel_destino, dono_agente, criado_em, status, pedido, carga).
- `pedido` cabe em uma frase. Se você esta escrevendo duas frases, o entrega esta fazendo demais -- divida.
- `papel_destino` e um proximo-passo válido em `_configuracao/cadeias-fluxo.yaml`. Se não for, primeiro adicione a chain (Friday review).
- O payload usa um dos formatos nomeados em `_configuracao/ESQUEMA_ENTREGA.md` ou um novo formato que cabe ali (e atualiza o schema na próxima Friday review).
- Status inicia em `open`. So o receptor move para `in_progress` ou `done`.

Um entrega e **não bom** quando:

- Esta em prosa em vez de YAML.
- Mistura dois pedidos.
- O receptor precisa adivinhar a categoria do board ou o responsavel.
- O HITL não foi registrado quando havia escrita no Kanboard envolvida.

## Roteamento (`00-orquestrador/`)

Um roteamento e **bom** quando:

- O 3-line plan (situação / especialista / por que) esta em `payload.routing_rationale`.
- O destino casa com uma das chains V0 (em V1+, com qualquer chain documentada).
- O contexto mínimo viável foi passado -- não um email inteiro colado, e sim um sumario.
- O case folder foi criado se era contato novo (`casos/CASO-YYYY-NNNN-shortslug/`).

Um roteamento e **não bom** quando:

- Roteou para o gestor sem 3-line plan ("você decide tudo").
- Inventou um especialista (ex: routear para `02-design-educacional/` em V0 quando esta pasta ainda e esqueleto).
- Tentou qualificar / decidir em vez de rotear.

## Decisão do gestor (`01-gestor/`)

Uma decisão e **boa** quando:

- O `kanboard_card_request` esta completo e corretamente mapeado (categoria, responsavel, prazo, coluna).
- O HITL foi explicito antes de chamar `_pontes/kanboard/` (campos `hitl_aprovado_em` e `hitl_aprovado_por` preenchidos).
- Se a demanda era extraordinária, a decisão (criar / recusar / redirecionar) esta registrada no payload e o motivo aparece em uma linha.
- Para `tarefa_distribuir`: o responsavel foi escolhido com base em critério claro (a área dele cobre, ele tem capacidade, etc.) e o critério esta no payload.

Uma decisão e **não boa** quando:

- Aprovou HITL sem ler o payload.
- Distribuiu sem nomear responsavel ("alguem faz isso").
- Aceitou uma demanda extraordinária sem registrar a categoria que criou.
- Pulou HITL "porque era simples".

## Escrita no Kanboard (`_pontes/kanboard/`)

Uma escrita e **boa** quando:

- O payload `kanboard_card_request` chegou completo e auditado.
- A operação casa com uma das 4 suportadas em V0: `criar-tarefa`, `mover-tarefa`, `adicionar-comentario`, `listar-tarefas-projeto`.
- A resposta da API foi lida e o entrega foi atualizado para `done` com o `card_id` retornado (se criar) ou confirmação (se mover / comentar).
- Falha foi capturada e reportada com mensagem clara para o gestor.

Uma escrita e **não boa** quando:

- Passou direto sem HITL.
- Ignorou erro de API ("deve ter funcionado").
- Escreveu em projeto errado por mapeamento desatualizado de `projetos-cgte.yaml`.

## Sistema-level (a chain inteira)

O sistema esta **bom** quando:

- Toda demanda nova entra pelo `00-orquestrador/`, gera entrega YAML, e termina em card no board com HITL registrado.
- Friday review aconteceu na sexta. Padrões surgindo viraram nota.
- Cases ficam com `caso.md` atualizado em até 7 dias para tudo que esta `active`.
- A voz da CGTE esta preenchida (ou bloqueando explicitamente todas as chains de comunicação se ainda não foi).

O sistema esta **não bom** quando:

- Entregas estão acontecendo em conversa / email / Telegram em vez de YAML.
- Especialistas estão saindo do papel ("orchestrator que decide", "gestor que rotea").
- O mesmo problema surge em múltiplos cases sem nunca chegar ao Friday review.
- Cards aparecem no board sem case correspondente.

## Como usar este arquivo

- Especialistas leem durante o trabalho como self-check antes de marcar entrega como `done`.
- Gestor revisita no Friday review.
- Time revisita junto se algum critério drifta ou novos padrões pedem novos critérios.
- Servidor novo le no `operacoes/new-hire-day-one.md` (V1.X).
