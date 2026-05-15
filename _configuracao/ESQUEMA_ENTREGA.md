# Esquema de Entrega

O entrega e o contrato entre especialistas. Quando o contrato segura, o sistema segura.

Este arquivo define o envelope canonico que todo entrega deve usar. Mudanças neste schema são deliberadas e raras -- se um entrega real não se encaixa, e o schema que precisa ser atualizado, não o entrega.

## Por que YAML e não prosa

Entregas em prosa derivam. Um especialista diz "tarefa nova: preparar slides do MOOC X, prioridade alta, prazo próxima sexta, executor sou eu mesmo" e o próximo tem que reverter para estrutura. YAML mantem a estrutura estavel entre entregas e entre pessoas. Um novo servidor le três entregas e sabe a forma para sempre.

## O envelope

```yaml
id_entrega: EN-001                              # incremental dentro do case
id_caso: CASO-2026-0001-validacao-v0            # CASO-YYYY-NNNN-shortslug
papel_origem: 00-orquestrador                      # uma das pastas-especialista
papel_destino: 01-gestor                              # uma das pastas-especialista
dono_agente: marquito                           # humano que possui o entrega; casa com arquivo em _configuracao/voz/
criado_em: 2026-05-14                          # ISO date (YYYY-MM-DD)
status: open                                    # open | in_progress | done
pedido: "Criar card no projeto 47 para preparar slides do MOOC X."
carga:
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
| `id_entrega` | sim | Formato `EN-NNN`. Numerado dentro de um case na ordem de criação. |
| `id_caso` | sim | Formato `CASO-YYYY-NNNN-shortslug`. Mesmo valor em todos os entregas do mesmo case. |
| `papel_origem` | sim | Nome da pasta-especialista origem. Um de: `00-orquestrador`, `01-gestor`, `02-design-educacional`, `03-audiovisual`, ..., `08-ciencia`, `_pontes/kanboard`, `_pontes/gitlab`. |
| `papel_destino` | sim | Nome da pasta-especialista destino. Mesma lista. Deve ser um proximo-passo válido de `papel_origem` em `cadeias-fluxo.yaml`. |
| `dono_agente` | sim | Qual humano possui o entrega. Casa com filename em `_configuracao/voz/` (sem o `.md`). Em V0, quase sempre `marquito`. Em V1+, vira o servidor da área. |
| `criado_em` | sim | ISO date (`YYYY-MM-DD`). Quando o emissor escreveu o entrega. |
| `status` | sim | `open` (enviado, ainda não retirado), `in_progress` (receptor confirmou, trabalhando), `done` (receptor concluiu, pode ter gerado entrega downstream). |
| `pedido` | sim | Uma frase em portugues claro. O que esta sendo pedido. Se você precisa de três frases, o entrega esta fazendo demais -- divida. |
| `carga` | sim | Objeto estruturado livre. Formato depende do tipo do entrega. Formatos comuns documentados abaixo. |

## Formatos de carga comuns (V0)

Estas são convenções, não contratos rigidos. Adapte ao que o entrega específico precisa. O ponto e: o mesmo TIPO de entrega entre os mesmos dois papéis usa o mesmo formato, para o receptor saber o que esperar.

### `routing_rationale` (sempre presente no entrega de saída do orchestrator)
```yaml
routing_rationale:
  situacao: "demanda em uma frase, nas palavras do orchestrator"
  especialista: 01-gestor               # qual pasta
  por_que: "razão da escolha em uma linha"
```

### `tarefa_propria` (tipico: 00-orquestrador -> 01-gestor)
Quando a demanda e trabalho que o próprio gestor vai executar.
```yaml
tarefa_propria:
  titulo: "Título curto, virara título do card no board 47"
  categoria_board_47: "MOOC | Produção Audiovisual | Comunicação Visual | ..."
  prazo: 2026-05-23                     # ISO date; opcional se não houver prazo
  descricao: "Contexto + entregaveis em 1-3 paragrafos"
  link_origem: "email://... | reunião://... | conversa://..."
```

### `tarefa_distribuir` (tipico: 00-orquestrador -> 01-gestor)
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

### `demanda_extraordinaria` (tipico: 00-orquestrador -> 01-gestor)
Quando a demanda não se encaixa em nenhuma categoria ativa do board 47. Orchestrator não roteia sozinho.
```yaml
demanda_extraordinaria:
  descricao: "O que chegou, em 2-4 frases"
  categorias_consideradas: ["..."]      # categorias ativas que orchestrator pesou e descartou
  por_que_nenhuma_serve: "..."
  sugestao: "criar nova categoria | recusar | redirecionar para X"
```

### `kanboard_card_request` (tipico: 01-gestor -> _pontes/kanboard)
Payload que o gestor aprovou (HITL) para o bridge executar.
```yaml
kanboard_card_request:
  operacao: "criar-tarefa | mover-tarefa | adicionar-comentario | listar-tarefas-projeto"
  projeto_id: 47
  card_id: null                          # null em criar-tarefa; preenchido em mover / comentar
  campos:
    title: "..."
    description: "..."
    category_id: 12                      # mapeado de categoria_board_47 via _pontes/kanboard/projetos-cgte.yaml
    owner_id: 5                          # mapeado de responsavel via _pontes/kanboard/usuarios-cgte.yaml
    column_id: 3                          # mapeado de coluna_destino
    date_due: "2026-05-23"
  hitl_aprovado_em: "2026-05-14T15:42:00"
  hitl_aprovado_por: marquito
```

### `case_status_update` (uso interno; qualquer especialista -> mesmo especialista ou para o caso.md)
Quando algo importante muda fora do fluxo normal de entregas.
```yaml
case_status_update:
  novo_status: "active | at_risk | blocked | closed"
  motivo: "..."
  proxima_acao: "..."
```

## Regras

1. **Um entrega, um pedido.** Se você esta escrevendo duas frases em `pedido`, você tem dois entregas. Divida.
2. **Status flui so para frente.** `open` -> `in_progress` -> `done`. Sem reabrir. Se um entrega precisa ser revisitado, crie um novo.
3. **Referencie em vez de duplicar.** Se um entrega precisa de informação de um anterior, referencie o `id_entrega` em vez de copiar o payload.
4. **O receptor edita o status.** O emissor escreve com `status: open`. O receptor move para `in_progress` ao pegar e `done` ao terminar.
5. **Se o schema não se encaixa, mude o schema.** Não force o entrega. Documente a mudança em `operacoes/revisao-sexta.md`.
6. **Toda escrita no Kanboard passa por HITL.** Antes de chamar `_pontes/kanboard/`, o gestor confere o `kanboard_card_request` completo e aprova explicitamente. O HITL aparece nos campos `hitl_aprovado_em` e `hitl_aprovado_por` do payload.
