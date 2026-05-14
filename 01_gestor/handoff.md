# Handoff -- 01_gestor

O contrato do gestor. O que entra, o que sai, para onde vai depois.

## O que eu recebo

Um handoff de `00_orchestrator/` (em V0, sempre). O envelope traz:

- `payload.routing_rationale:` o 3-line plan do orchestrator (situacao / especialista / por que). Leia primeiro.
- Um dos tres payloads V0:
  - `tarefa_propria` -- gestor mesmo vai executar
  - `tarefa_distribuir` -- precisa de alguem da equipe; pode vir com `responsavel: a_decidir`
  - `demanda_extraordinaria` -- categoria nao mapeada, gestor decide o caminho

Em V1+, alem do orchestrator, eu posso receber:

- Handoff de especialista ativo pedindo aprovacao em gate institucional (ex: especialista terminou e quer mover card para "Em aprovacao").
- Handoff de `_bridges/gitlab/` sobre merge sensivel que pede HITL.

## O que eu produzo

Em V0, quase sempre uma chamada para `_bridges/kanboard/`:

```yaml
handoff_id: HO-NNN
case_id: CASE-YYYY-NNNN-shortslug
from_role: 01_gestor
to_role: _bridges/kanboard
agent_owner: marquito
created_at: YYYY-MM-DD
status: done                                    # depois que o bridge confirmou
ask: "<uma frase descrevendo a operacao>"
payload:
  kanboard_card_request:
    operacao: "criar-tarefa | mover-tarefa | adicionar-comentario | listar-tarefas-projeto"
    projeto_id: 47
    card_id: null                                # ou id, conforme operacao
    campos:
      title: "..."
      description: "..."
      category_id: ...
      owner_id: ...
      column_id: ...
      date_due: "..."
    hitl_aprovado_em: "YYYY-MM-DDTHH:MM:SS"
    hitl_aprovado_por: marquito
  resultado_bridge:
    card_id: ...
    link: "..."
```

Em V1+, eu produzo tambem handoffs para especialistas ativos:

```yaml
handoff_id: HO-NNN
from_role: 01_gestor
to_role: 03_audiovisual                         # exemplo
agent_owner: <servidor_ativo>
ask: "Executar producao de video curto a partir do roteiro aprovado no case X."
payload:
  # payload especifico ao especialista, definido em V1+ quando a chain for desenhada
```

## Mapa de chain

Em V0, eu apareco em todas as tres chains como passo do meio:

- `anotar_tarefa_propria`: `00_orchestrator -> 01_gestor -> _bridges/kanboard`
- `distribuir_tarefa`: `00_orchestrator -> 01_gestor -> _bridges/kanboard`
- `demanda_extraordinaria`: `00_orchestrator -> 01_gestor -> _bridges/kanboard`

Toda chain V0 passa por mim e termina no bridge.

Em V1+, novas chains aparecem com saidas para especialistas ativos, mas eu continuo nos gates institucionais.

## Formato de entrada (ilustrativo)

```yaml
handoff_id: HO-001
from_role: 00_orchestrator
to_role: 01_gestor
ask: "Criar card no projeto 47 para slides do MOOC X com Marquito como responsavel."
payload:
  routing_rationale: { ... }
  tarefa_propria: { ... }
```

## Formato de saida (o que eu escrevo)

```yaml
handoff_id: HO-002
from_role: 01_gestor
to_role: _bridges/kanboard
ask: "Criar card aprovado no projeto 47, categoria MOOC, coluna Inicio autorizado."
payload:
  kanboard_card_request: { ... com hitl_aprovado_em e hitl_aprovado_por preenchidos ... }
  resultado_bridge: { card_id: 1487, link: "..." }
```

## Atualizacao do case

Toda vez que eu produzo um handoff, atualizo o `case.md`:

- Adicionar uma linha no "Log de handoffs" descrevendo o handoff em uma frase.
- Se foi criar card: registrar o `card_id` em "Documentos / Cards relacionados".
- Se foi decisao extraordinaria: anotar a decisao em "Notas" com motivo.

Para 3 exemplos completos cobrindo as tres chains da perspectiva do gestor, ver `examples.md`.
