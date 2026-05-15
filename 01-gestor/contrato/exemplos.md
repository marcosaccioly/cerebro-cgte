# Exemplos -- 01-gestor

Três exemplos da perspectiva do gestor, cobrindo as três chains V0.

---

## Exemplo 1: Receber `anotar_tarefa_propria` e criar card

**Entrega recebido (EN-001 de `00-orquestrador`):**
```yaml
id_entrega: EN-001
id_caso: CASO-2026-0002-slides-mooc-x
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Criar card no projeto 47 para slides do MOOC X com Marquito como responsável."
carga:
  routing_rationale:
    situacao: "Marquito mesmo vai preparar slides do MOOC X, prazo 2026-05-23."
    especialista: 01-gestor
    por_que: "Trabalho do próprio gestor; chain anotar_tarefa_propria; categoria MOOC."
  tarefa_propria:
    titulo: "Preparar slides do MOOC X"
    categoria_board_47: "MOOC"
    prazo: 2026-05-23
    descricao: "Slides para o módulo de abertura do MOOC X. Material de referência disponível em pasta institucional."
```

**Ação do gestor:**

1. Status do EN-001 -> `in_progress`.
2. Mapear categoria "MOOC" para `category_id` via `../referencias/projetos-cgte.yaml`.
3. Mapear responsável "marquito" para `owner_id` via `../../_pontes/kanboard/usuarios-cgte.yaml`.
4. Preencher `kanboard_card_request` completo.
5. Chamar `../../_pontes/kanboard/criar-tarefa` que mostra o payload e pede HITL.
6. Gestor lê, aprova com `y`.
7. Bridge cria o card, retorna `card_id`.

**Entrega produzido (EN-002):**
```yaml
id_entrega: EN-002
id_caso: CASO-2026-0002-slides-mooc-x
papel_origem: 01-gestor
papel_destino: ../../_pontes/kanboard
dono_agente: marquito
criado_em: 2026-05-14
status: done
pedido: "Criar card aprovado no projeto 47, categoria MOOC, coluna Início autorizado."
carga:
  kanboard_card_request:
    operacao: criar-tarefa
    projeto_id: 47
    card_id: null
    campos:
      title: "Preparar slides do MOOC X"
      description: "Slides para o módulo de abertura do MOOC X. Material de referência disponível em pasta institucional."
      category_id: 12              # MOOC
      owner_id: 5                  # marquito
      column_id: 3                 # Início autorizado
      date_due: "2026-05-23"
    hitl_aprovado_em: "2026-05-14T15:42:18"
    hitl_aprovado_por: marquito
  resultado_bridge:
    card_id: 1487
    link: "https://board.cefor.ifes.edu.br/?controller=TaskViewController&action=show&task_id=1487"
```

Status do EN-001 vira `done`. Case fica `active` até o card chegar em coluna terminal.

---

## Exemplo 2: Receber `distribuir_tarefa` com responsável a decidir

**Entrega recebido (EN-001 de `00-orquestrador`):**
```yaml
id_entrega: EN-001
id_caso: CASO-2026-0003-noticia-programa-y
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Distribuir notícia sobre Programa Y; precisa de responsável da área de Comunicação."
carga:
  tarefa_distribuir:
    titulo: "Notícia institucional sobre lançamento do Programa Y"
    categoria_board_47: "Conteúdo Digital"
    responsavel: "a_decidir"
    prazo: 2026-05-22
    descricao: "..."
    coluna_destino: "Início autorizado"
```

**Ação do gestor:**

1. EN-001 -> `in_progress`.
2. Olhar capacidade da semana de quem cobre Comunicação na CGTE (consultar `../../_pontes/kanboard/listar-tarefas-projeto` para a coluna "Em execução" do projeto 47, filtrar por owner).
3. Decidir: é a Servidora A. Documentar critério: "Servidora A cobre Conteúdo Digital, está com 2 cards em execução, capacidade ok."
4. Preencher `kanboard_card_request` com `owner_id` da Servidora A.
5. HITL na CLI, gestor aprova.
6. Bridge cria card. Card vai para "Início autorizado" do board (gate institucional -- só depois que a Servidora A confirmar e mover, vira "Em execução").

**Entrega produzido (EN-002):**
```yaml
id_entrega: EN-002
id_caso: CASO-2026-0003-noticia-programa-y
papel_origem: 01-gestor
papel_destino: ../../_pontes/kanboard
dono_agente: marquito
criado_em: 2026-05-14
status: done
pedido: "Criar card aprovado no projeto 47, categoria Conteúdo Digital, owner Servidora A."
carga:
  kanboard_card_request:
    operacao: criar-tarefa
    projeto_id: 47
    card_id: null
    campos:
      title: "Notícia institucional sobre lançamento do Programa Y"
      description: "Demanda da Reitoria. Texto noticioso para o site do Ifes..."
      category_id: 21               # Conteúdo Digital
      owner_id: 8                   # servidora-a (placeholder; ajustar com lista real)
      column_id: 3                  # Início autorizado
      date_due: "2026-05-22"
    hitl_aprovado_em: "2026-05-14T15:47:33"
    hitl_aprovado_por: marquito
  alocacao_criterio: "Servidora A cobre Conteúdo Digital; 2 cards em execução; capacidade ok."
  resultado_bridge:
    card_id: 1488
    link: "https://board.cefor.ifes.edu.br/?controller=TaskViewController&action=show&task_id=1488"
```

Em V1+, quando 04-comunicacao estiver ativo, o orchestrator poderia rotear direto para ele e o gestor entraria só para aprovar o gate "Início autorizado" -> "Em execução".

---

## Exemplo 3: Receber `demanda_extraordinaria` e decidir

**Entrega recebido (EN-001 de `00-orquestrador`):**
```yaml
id_entrega: EN-001
id_caso: CASO-2026-0004-piloto-ia-revisao
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Decidir: criar nova categoria (ex: 'Experimento Aplicado'), aceitar como Inteligência Artificial, ou redirecionar."
carga:
  demanda_extraordinaria:
    descricao: "Pro-Reitoria de Pesquisa pediu piloto controlado de uso de IA para revisão..."
    categorias_consideradas: ["Produção Científica", "Inteligência Artificial", "Formação e Capacitação"]
    por_que_nenhuma_serve: "..."
    sugestao: "criar nova categoria no board 47"
```

**Ação do gestor:**

1. EN-001 -> `in_progress`.
2. Decisão: aceitar como "Inteligência Artificial" com escopo de piloto. Criar nova categoria só após friday-review se padrão se repetir.
3. Definir responsável: o gestor mesmo coordena o piloto, com participação do servidor da área de IA quando ativado.
4. Atualizar este case com a decisão no `caso.md` em "Notas".
5. Preencher `kanboard_card_request`.
6. HITL. Aprovar.

**Entrega produzido (EN-002):**
```yaml
id_entrega: EN-002
id_caso: CASO-2026-0004-piloto-ia-revisao
papel_origem: 01-gestor
papel_destino: ../../_pontes/kanboard
dono_agente: marquito
criado_em: 2026-05-14
status: done
pedido: "Criar card aprovado no projeto 47, categoria Inteligência Artificial, owner marquito, descrição com escopo de piloto."
carga:
  kanboard_card_request:
    operacao: criar-tarefa
    projeto_id: 47
    card_id: null
    campos:
      title: "Piloto IA para revisão de textos acadêmicos (Pro-Reitoria Pesquisa)"
      description: "Piloto controlado, 2 meses, 5-10 pessoas, com métricas. Demanda externa Pro-Reitoria Pesquisa. ESCOPO: experimento aplicado; resultado vira insumo para decidir se criar categoria 'Experimento Aplicado' no board."
      category_id: 24               # Inteligência Artificial
      owner_id: 5                   # marquito
      column_id: 3                  # Início autorizado
      date_due: "2026-07-15"
    hitl_aprovado_em: "2026-05-14T15:53:09"
    hitl_aprovado_por: marquito
  decisao_extraordinaria:
    decisao: "aceitar como Inteligência Artificial com escopo de piloto"
    motivo: "Cabe em IA com nota de escopo; criar nova categoria precisa de mais de 1 ocorrência para justificar; sera discutido em friday-review."
  resultado_bridge:
    card_id: 1489
    link: "https://board.cefor.ifes.edu.br/?controller=TaskViewController&action=show&task_id=1489"
```

A decisão "criar nova categoria" eventual vai pra `../../_configuracao/regras-negocio.md` e `../referencias/taxonomia-board-47.md` -- e isso entra no `../../operacoes/revisao-sexta.md` da semana.

---

## O que esses exemplos tem em comum

- HITL e o passo mais importante. Sem ele, V0 falha mesmo que a chain inteira funcione.
- O `caso.md` fica atualizado em cada entrega. Auditoria depende disso.
- Categoria do board e mapeada explicitamente, nunca inferida. `../referencias/taxonomia-board-47.md` e a fonte.
- Em V0, o destino do `papel_destino` do gestor e quase sempre `../../_pontes/kanboard`. Em V1+, pode ser também um especialista ativo.
- Decisões extraordinárias geram entrada para o `friday-review`.
