# CASE-2026-0001-validacao-v0

> Case didático de validação da V0. Demanda fictícia mas plausível (slides para MOOC X) que percorre as 3 chains V0 do orchestrator ao bridge Kanboard. Não apagar: serve como referência para a equipe quando alguem precisa lembrar como uma demanda real flui.

**Parties:** Marquito (gestor / executor), CGTE (coordenadoria)
**Demanda:** Preparar slides do MOOC X para abertura
**Categoria board 47:** MOOC
**Status:** done (case fechado após validação da chain V0)

## Datas chave

- Demanda chegou: 2026-05-14 (reunião de coordenação 14/05)
- Orchestrator roteou: 2026-05-14
- Gestor aprovou HITL e criou card: 2026-05-14
- Card criado no board 47: 2026-05-14 (placeholder; ajustar com card_id real após primeira execução real)
- Prazo da demanda: 2026-05-23

## Open items

- [x] Roteamento -- 00_orchestrator escreveu HO-001 (owed by: 00_orchestrator, due: 2026-05-14)
- [x] Decisão + HITL -- 01_gestor escreveu HO-002 (owed by: 01_gestor, due: 2026-05-14)
- [x] Card criado no board 47 -- _bridges/kanboard executou criar-tarefa após HITL (owed by: _bridges/kanboard, due: 2026-05-14)

## Documentos / Cards relacionados

- Card Kanboard board 47 -- placeholder `card_id: TBD` (preencher após primeira execução real do bridge na infra do Ifes)
- Material de referência do MOOC X -- pasta institucional (fora do escopo do workspace; referenciado apenas)

## Log de handoffs

- HO-001 (2026-05-14): 00_orchestrator -> 01_gestor, status: done -- Roteamento da demanda "slides MOOC X" como tarefa própria do gestor.
- HO-002 (2026-05-14): 01_gestor -> _bridges/kanboard, status: done -- HITL aprovado, criar card no projeto 47 categoria MOOC coluna Início autorizado.

## Notas

Este case existe como **validação didática**. Mostra a chain `anotar_tarefa_propria` end-to-end:

```
demanda (reunião 14/05)
   |
   v
00_orchestrator
   |  HO-001 -- 3-line plan, tarefa_propria, route 01_gestor
   v
01_gestor
   |  HO-002 -- kanboard_card_request preenchido, HITL aprovado
   v
_bridges/kanboard
   |  HITL: payload mostrado, gestor aprovou com `y`
   v
Kanboard board 47
   `  card criado em coluna "Início autorizado"
```

Momentos relevantes de design visiveis aqui:

- **HO-001 sempre tem `payload.routing_rationale`.** O 3-line plan do orchestrator e a primeira coisa que o gestor le.
- **HO-002 sempre tem `hitl_aprovado_em` e `hitl_aprovado_por`.** Sem isso, o bridge não deveria nem ter sido chamado. Auditoria depende desses dois campos.
- **`category_id`, `owner_id`, `column_id` são IDs do Kanboard, não strings.** O mapeamento de string para ID acontece dentro de `01_gestor/` usando `_bridges/kanboard/projetos-cgte.yaml` e `usuarios-cgte.yaml`. Se um ID estiver desatualizado, o bridge falha com mensagem clara -- ai e hora de atualizar o yaml.

## Por que este case esta com status `done` mesmo sendo didático

Em V0, o case so foi declarado `done` após o teste end-to-end real ter rodado na infra do Ifes -- ou seja, o `card_id` placeholder vira o id real após a primeira execução com credenciais reais. Antes disso, o case fica em status `validation_pending`. Após rodar e gerar card real, atualize as duas linhas no topo (Status + `Card criado no board 47`) e o `card_id` aqui.

Em treinamento, abrir este case com a equipe e percorrer os 2 handoffs YAML em `handoffs/` ja basta para entender V0 inteira.
