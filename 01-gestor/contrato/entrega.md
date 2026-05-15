# Entrega -- 01-gestor

O contrato do gestor. O que entra, o que sai, para onde vai depois.

## O que eu recebo

Um entrega de `../../00-orquestrador/` (em V0, sempre). O envelope traz:

- `payload.routing_rationale:` o 3-line plan do orchestrator (situação / especialista / por que). Leia primeiro.
- Um dos três payloads V0:
  - `tarefa_propria` -- gestor mesmo vai executar
  - `tarefa_distribuir` -- precisa de alguém da equipe; pode vir com `responsavel: a_decidir`
  - `demanda_extraordinaria` -- categoria não mapeada, gestor decide o caminho

Em V1+, além do orchestrator, eu posso receber:

- Entrega de especialista ativo pedindo aprovação em gate institucional (ex: especialista terminou e quer mover card para "Em aprovação").
- Entrega de `../../_pontes/gitlab/` sobre merge sensível que pede HITL.

## O que eu produzo

Em V0, quase sempre uma chamada para `../../_pontes/kanboard/`:

```yaml
id_entrega: EN-NNN
id_caso: CASO-YYYY-NNNN-shortslug
papel_origem: 01-gestor
papel_destino: ../../_pontes/kanboard
dono_agente: marquito
criado_em: YYYY-MM-DD
status: done                                    # depois que o bridge confirmou
pedido: "<uma frase descrevendo a operação>"
carga:
  kanboard_card_request:
    operacao: "criar-tarefa | mover-tarefa | adicionar-comentario | listar-tarefas-projeto"
    projeto_id: 47
    card_id: null                                # ou id, conforme operação
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

Em V1+, eu produzo também entregas para especialistas ativos:

```yaml
id_entrega: EN-NNN
papel_origem: 01-gestor
papel_destino: 03-audiovisual                         # exemplo
dono_agente: <servidor_ativo>
pedido: "Executar produção de vídeo curto a partir do roteiro aprovado no case X."
carga:
  # payload específico ao especialista, definido em V1+ quando a chain for desenhada
```

## Mapa de chain

Em V0, eu apareço em todas as três chains como passo do meio:

- `anotar_tarefa_propria`: `00-orquestrador -> 01-gestor -> ../../_pontes/kanboard`
- `distribuir_tarefa`: `00-orquestrador -> 01-gestor -> ../../_pontes/kanboard`
- `demanda_extraordinaria`: `00-orquestrador -> 01-gestor -> ../../_pontes/kanboard`

Toda chain V0 passa por mim e termina no bridge.

Em V1+, novas chains aparecem com saídas para especialistas ativos, mas eu continuo nos gates institucionais.

## Formato de entrada (ilustrativo)

```yaml
id_entrega: EN-001
papel_origem: 00-orquestrador
papel_destino: 01-gestor
pedido: "Criar card no projeto 47 para slides do MOOC X com Marquito como responsável."
carga:
  routing_rationale: { ... }
  tarefa_propria: { ... }
```

## Formato de saída (o que eu escrevo)

```yaml
id_entrega: EN-002
papel_origem: 01-gestor
papel_destino: ../../_pontes/kanboard
pedido: "Criar card aprovado no projeto 47, categoria MOOC, coluna Início autorizado."
carga:
  kanboard_card_request: { ... com hitl_aprovado_em e hitl_aprovado_por preenchidos ... }
  resultado_bridge: { card_id: 1487, link: "..." }
```

## Atualização do case

Toda vez que eu produzo um entrega, atualizo o `caso.md`:

- Adicionar uma linha no "Log de entregas" descrevendo o entrega em uma frase.
- Se foi criar card: registrar o `card_id` em "Documentos / Cards relacionados".
- Se foi decisão extraordinária: anotar a decisão em "Notas" com motivo.

Para 3 exemplos completos cobrindo as três chains da perspectiva do gestor, ver `exemplos.md`.
