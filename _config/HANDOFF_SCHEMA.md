# Handoff Schema

O handoff e o contrato entre especialistas. Quando o contrato segura, o sistema segura.

Este arquivo define o envelope canonico que todo handoff deve usar. Mudanças neste schema são deliberadas e raras -- se um handoff real não se encaixa, e o schema que precisa ser atualizado, não o handoff.

## Por que YAML e não prosa

Handoffs em prosa derivam. Um especialista diz "tarefa nova: preparar slides do MOOC X, prioridade alta, prazo próxima sexta, executor sou eu mesmo" e o próximo tem que reverter para estrutura. YAML mantem a estrutura estavel entre handoffs e entre pessoas. Um novo servidor le três handoffs e sabe a forma para sempre.

## O envelope

```yaml
handoff_id: HO-001                              # incremental dentro do case
case_id: CASE-2026-0001-validacao-v0            # CASE-YYYY-NNNN-shortslug
from_role: 00_orchestrator                      # uma das pastas-especialista
to_role: 01_gestor                              # uma das pastas-especialista
agent_owner: marquito                           # humano que possui o handoff; casa com arquivo em _config/voice/
created_at: 2026-05-14                          # ISO date (YYYY-MM-DD)
status: open                                    # open | in_progress | done
ask: "Criar card no projeto 47 para preparar slides do MOOC X."
payload:
  tarefa_distribuir:
    titulo: "Preparar slides do MOOC X"
    categoria_board_47: "MOOC"
    responsavel: marquito
    prazo: 2026-05-23
    descricao: "..."
    coluna_destino: "Início autorizado"
```

## Os campos

| Campo | Obrigatório | O que e |
|---|---|---|
| `handoff_id` | sim | Formato `HO-NNN`. Numerado dentro de um case na ordem de criação. |
| `case_id` | sim | Formato `CASE-YYYY-NNNN-shortslug`. Mesmo valor em todos os handoffs do mesmo case. |
| `from_role` | sim | Nome da pasta-especialista origem. Um de: `00_orchestrator`, `01_gestor`, `02_educacao`, ..., `08_ciencia`, `_bridges/kanboard`, `_bridges/gitlab`. |
| `to_role` | sim | Nome da pasta-especialista destino. Mesma lista. Deve ser um proximo-passo válido de `from_role` em `workflow-chains.yaml`. |
| `agent_owner` | sim | Qual humano possui o handoff. Casa com filename em `_config/voice/` (sem o `.md`). Em V0, quase sempre `marquito`. Em V1+, vira o servidor da área. |
| `created_at` | sim | ISO date (`YYYY-MM-DD`). Quando o emissor escreveu o handoff. |
| `status` | sim | `open` (enviado, ainda não retirado), `in_progress` (receptor confirmou, trabalhando), `done` (receptor concluiu, pode ter gerado handoff downstream). |
| `ask` | sim | Uma frase em portugues claro. O que esta sendo pedido. Se você precisa de três frases, o handoff esta fazendo demais -- divida. |
| `payload` | sim | Objeto estruturado livre. Formato depende do tipo do handoff. Formatos comuns documentados abaixo. |

## Formatos de payload comuns (V0)

Estas são convenções, não contratos rigidos. Adapte ao que o handoff específico precisa. O ponto e: o mesmo TIPO de handoff entre os mesmos dois papéis usa o mesmo formato, para o receptor saber o que esperar.

### `routing_rationale` (sempre presente no handoff de saída do orchestrator)
```yaml
routing_rationale:
  situacao: "demanda em uma frase, nas palavras do orchestrator"
  especialista: 01_gestor               # qual pasta
  por_que: "razão da escolha em uma linha"
```

### `tarefa_propria` (tipico: 00_orchestrator -> 01_gestor)
Quando a demanda e trabalho que o próprio gestor vai executar.
```yaml
tarefa_propria:
  titulo: "Título curto, virara título do card no board 47"
  categoria_board_47: "MOOC | Produção Audiovisual | Comunicação Visual | ..."
  prazo: 2026-05-23                     # ISO date; opcional se não houver prazo
  descricao: "Contexto + entregaveis em 1-3 paragrafos"
  link_origem: "email://... | reunião://... | conversa://..."
```

### `tarefa_distribuir` (tipico: 00_orchestrator -> 01_gestor)
Quando a demanda precisa ser distribuida para alguem da equipe (em V0, o gestor decide quem; em V1+ pode ser o próprio orchestrator).
```yaml
tarefa_distribuir:
  titulo: "..."
  categoria_board_47: "..."
  responsavel: "username_kanboard | a_decidir"
  prazo: 2026-05-23
  descricao: "..."
  coluna_destino: "Início autorizado"   # gate institucional
```

### `demanda_extraordinaria` (tipico: 00_orchestrator -> 01_gestor)
Quando a demanda não se encaixa em nenhuma categoria ativa do board 47. Orchestrator não roteia sozinho.
```yaml
demanda_extraordinaria:
  descricao: "O que chegou, em 2-4 frases"
  categorias_consideradas: ["..."]      # categorias ativas que orchestrator pesou e descartou
  por_que_nenhuma_serve: "..."
  sugestao: "criar nova categoria | recusar | redirecionar para X"
```

### `kanboard_card_request` (tipico: 01_gestor -> _bridges/kanboard)
Payload que o gestor aprovou (HITL) para o bridge executar.
```yaml
kanboard_card_request:
  operacao: "criar-tarefa | mover-tarefa | adicionar-comentario | listar-tarefas-projeto"
  projeto_id: 47
  card_id: null                          # null em criar-tarefa; preenchido em mover / comentar
  campos:
    title: "..."
    description: "..."
    category_id: 12                      # mapeado de categoria_board_47 via _bridges/kanboard/projetos-cgte.yaml
    owner_id: 5                          # mapeado de responsavel via _bridges/kanboard/usuarios-cgte.yaml
    column_id: 3                          # mapeado de coluna_destino
    date_due: "2026-05-23"
  hitl_aprovado_em: "2026-05-14T15:42:00"
  hitl_aprovado_por: marquito
```

### `case_status_update` (uso interno; qualquer especialista -> mesmo especialista ou para o case.md)
Quando algo importante muda fora do fluxo normal de handoffs.
```yaml
case_status_update:
  novo_status: "active | at_risk | blocked | closed"
  motivo: "..."
  proxima_acao: "..."
```

## Regras

1. **Um handoff, um pedido.** Se você esta escrevendo duas frases em `ask`, você tem dois handoffs. Divida.
2. **Status flui so para frente.** `open` -> `in_progress` -> `done`. Sem reabrir. Se um handoff precisa ser revisitado, crie um novo.
3. **Referencie em vez de duplicar.** Se um handoff precisa de informação de um anterior, referencie o `handoff_id` em vez de copiar o payload.
4. **O receptor edita o status.** O emissor escreve com `status: open`. O receptor move para `in_progress` ao pegar e `done` ao terminar.
5. **Se o schema não se encaixa, mude o schema.** Não force o handoff. Documente a mudança em `ops/friday-review.md`.
6. **Toda escrita no Kanboard passa por HITL.** Antes de chamar `_bridges/kanboard/`, o gestor confere o `kanboard_card_request` completo e aprova explicitamente. O HITL aparece nos campos `hitl_aprovado_em` e `hitl_aprovado_por` do payload.
