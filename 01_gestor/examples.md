# Exemplos -- 01_gestor

Tres exemplos da perspectiva do gestor, cobrindo as tres chains V0.

---

## Exemplo 1: Receber `anotar_tarefa_propria` e criar card

**Handoff recebido (HO-001 de `00_orchestrator`):**
```yaml
handoff_id: HO-001
case_id: CASE-2026-0002-slides-mooc-x
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Criar card no projeto 47 para slides do MOOC X com Marquito como responsavel."
payload:
  routing_rationale:
    situacao: "Marquito mesmo vai preparar slides do MOOC X, prazo 2026-05-23."
    especialista: 01_gestor
    por_que: "Trabalho do proprio gestor; chain anotar_tarefa_propria; categoria MOOC."
  tarefa_propria:
    titulo: "Preparar slides do MOOC X"
    categoria_board_47: "MOOC"
    prazo: 2026-05-23
    descricao: "Slides para o modulo de abertura do MOOC X. Material de referencia disponivel em pasta institucional."
```

**Acao do gestor:**

1. Status do HO-001 -> `in_progress`.
2. Mapear categoria "MOOC" para `category_id` via `reference/projetos-cgte.yaml`.
3. Mapear responsavel "marquito" para `owner_id` via `_bridges/kanboard/usuarios-cgte.yaml`.
4. Preencher `kanboard_card_request` completo.
5. Chamar `_bridges/kanboard/criar-tarefa` que mostra o payload e pede HITL.
6. Gestor le, aprova com `y`.
7. Bridge cria o card, retorna `card_id`.

**Handoff produzido (HO-002):**
```yaml
handoff_id: HO-002
case_id: CASE-2026-0002-slides-mooc-x
from_role: 01_gestor
to_role: _bridges/kanboard
agent_owner: marquito
created_at: 2026-05-14
status: done
ask: "Criar card aprovado no projeto 47, categoria MOOC, coluna Inicio autorizado."
payload:
  kanboard_card_request:
    operacao: criar-tarefa
    projeto_id: 47
    card_id: null
    campos:
      title: "Preparar slides do MOOC X"
      description: "Slides para o modulo de abertura do MOOC X. Material de referencia disponivel em pasta institucional."
      category_id: 12              # MOOC
      owner_id: 5                  # marquito
      column_id: 3                 # Inicio autorizado
      date_due: "2026-05-23"
    hitl_aprovado_em: "2026-05-14T15:42:18"
    hitl_aprovado_por: marquito
  resultado_bridge:
    card_id: 1487
    link: "https://board.cefor.ifes.edu.br/?controller=TaskViewController&action=show&task_id=1487"
```

Status do HO-001 vira `done`. Case fica `active` ate o card chegar em coluna terminal.

---

## Exemplo 2: Receber `distribuir_tarefa` com responsavel a decidir

**Handoff recebido (HO-001 de `00_orchestrator`):**
```yaml
handoff_id: HO-001
case_id: CASE-2026-0003-noticia-programa-y
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Distribuir noticia sobre Programa Y; precisa de responsavel da area de Comunicacao."
payload:
  tarefa_distribuir:
    titulo: "Noticia institucional sobre lancamento do Programa Y"
    categoria_board_47: "Conteudo Digital"
    responsavel: "a_decidir"
    prazo: 2026-05-22
    descricao: "..."
    coluna_destino: "Inicio autorizado"
```

**Acao do gestor:**

1. HO-001 -> `in_progress`.
2. Olhar capacidade da semana de quem cobre Comunicacao na CGTE (consultar `_bridges/kanboard/listar-tarefas-projeto` para a coluna "Em execucao" do projeto 47, filtrar por owner).
3. Decidir: e a Servidora A. Documentar criterio: "Servidora A cobre Conteudo Digital, esta com 2 cards em execucao, capacidade ok."
4. Preencher `kanboard_card_request` com `owner_id` da Servidora A.
5. HITL na CLI, gestor aprova.
6. Bridge cria card. Card vai para "Inicio autorizado" do board (gate institucional -- so depois que a Servidora A confirmar e mover, vira "Em execucao").

**Handoff produzido (HO-002):**
```yaml
handoff_id: HO-002
case_id: CASE-2026-0003-noticia-programa-y
from_role: 01_gestor
to_role: _bridges/kanboard
agent_owner: marquito
created_at: 2026-05-14
status: done
ask: "Criar card aprovado no projeto 47, categoria Conteudo Digital, owner Servidora A."
payload:
  kanboard_card_request:
    operacao: criar-tarefa
    projeto_id: 47
    card_id: null
    campos:
      title: "Noticia institucional sobre lancamento do Programa Y"
      description: "Demanda da Reitoria. Texto noticioso para o site do Ifes..."
      category_id: 21               # Conteudo Digital
      owner_id: 8                   # servidora-a (placeholder; ajustar com lista real)
      column_id: 3                  # Inicio autorizado
      date_due: "2026-05-22"
    hitl_aprovado_em: "2026-05-14T15:47:33"
    hitl_aprovado_por: marquito
  alocacao_criterio: "Servidora A cobre Conteudo Digital; 2 cards em execucao; capacidade ok."
  resultado_bridge:
    card_id: 1488
    link: "https://board.cefor.ifes.edu.br/?controller=TaskViewController&action=show&task_id=1488"
```

Em V1+, quando 04_comunicacao estiver ativo, o orchestrator poderia rotear direto para ele e o gestor entraria so para aprovar o gate "Inicio autorizado" -> "Em execucao".

---

## Exemplo 3: Receber `demanda_extraordinaria` e decidir

**Handoff recebido (HO-001 de `00_orchestrator`):**
```yaml
handoff_id: HO-001
case_id: CASE-2026-0004-piloto-ia-revisao
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Decidir: criar nova categoria (ex: 'Experimento Aplicado'), aceitar como Inteligencia Artificial, ou redirecionar."
payload:
  demanda_extraordinaria:
    descricao: "Pro-Reitoria de Pesquisa pediu piloto controlado de uso de IA para revisao..."
    categorias_consideradas: ["Producao Cientifica", "Inteligencia Artificial", "Formacao e Capacitacao"]
    por_que_nenhuma_serve: "..."
    sugestao: "criar nova categoria no board 47"
```

**Acao do gestor:**

1. HO-001 -> `in_progress`.
2. Decisao: aceitar como "Inteligencia Artificial" com escopo de piloto. Criar nova categoria so apos friday-review se padrao se repetir.
3. Definir responsavel: o gestor mesmo coordena o piloto, com participacao do servidor da area de IA quando ativado.
4. Atualizar este case com a decisao no `case.md` em "Notas".
5. Preencher `kanboard_card_request`.
6. HITL. Aprovar.

**Handoff produzido (HO-002):**
```yaml
handoff_id: HO-002
case_id: CASE-2026-0004-piloto-ia-revisao
from_role: 01_gestor
to_role: _bridges/kanboard
agent_owner: marquito
created_at: 2026-05-14
status: done
ask: "Criar card aprovado no projeto 47, categoria Inteligencia Artificial, owner marquito, descricao com escopo de piloto."
payload:
  kanboard_card_request:
    operacao: criar-tarefa
    projeto_id: 47
    card_id: null
    campos:
      title: "Piloto IA para revisao de textos academicos (Pro-Reitoria Pesquisa)"
      description: "Piloto controlado, 2 meses, 5-10 pessoas, com metricas. Demanda externa Pro-Reitoria Pesquisa. ESCOPO: experimento aplicado; resultado vira insumo para decidir se criar categoria 'Experimento Aplicado' no board."
      category_id: 24               # Inteligencia Artificial
      owner_id: 5                   # marquito
      column_id: 3                  # Inicio autorizado
      date_due: "2026-07-15"
    hitl_aprovado_em: "2026-05-14T15:53:09"
    hitl_aprovado_por: marquito
  decisao_extraordinaria:
    decisao: "aceitar como Inteligencia Artificial com escopo de piloto"
    motivo: "Cabe em IA com nota de escopo; criar nova categoria precisa de mais de 1 ocorrencia para justificar; sera discutido em friday-review."
  resultado_bridge:
    card_id: 1489
    link: "https://board.cefor.ifes.edu.br/?controller=TaskViewController&action=show&task_id=1489"
```

A decisao "criar nova categoria" eventual vai pra `_config/business-rules.md` e `reference/taxonomia-board-47.md` -- e isso entra no `friday-review.md` da semana.

---

## O que esses exemplos tem em comum

- HITL e o passo mais importante. Sem ele, V0 falha mesmo que a chain inteira funcione.
- O `case.md` fica atualizado em cada handoff. Auditoria depende disso.
- Categoria do board e mapeada explicitamente, nunca inferida. `reference/taxonomia-board-47.md` e a fonte.
- Em V0, o destino do `to_role` do gestor e quase sempre `_bridges/kanboard`. Em V1+, pode ser tambem um especialista ativo.
- Decisoes extraordinarias geram entrada para o `friday-review`.
