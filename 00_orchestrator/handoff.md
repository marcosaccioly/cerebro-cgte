# Handoff -- 00_orchestrator

O contrato do orchestrator. O que entra, o que sai, para onde vai depois.

## O que eu recebo

O orchestrator e a **porta de entrada**. Eu nao recebo handoffs de outros especialistas no fluxo normal. O que eu recebo e **input bruto de fora do sistema**:

- Um email encaminhado para `00_orchestrator/inbox/`
- Uma nota de uma reuniao da coordenacao (Marquito ou outro servidor escreve em texto e deposita em `inbox/`)
- Um pedido de chefia ou parceiro chegando por canal informal (Telegram, conversa de corredor) e transformado em texto para o inbox
- Uma notificacao do Kanboard institucional avisando que um card chegou para a coordenacao decidir (raro mas possivel)

Esses inputs nao chegam estruturados. Chegam na forma natural. **Meu trabalho e converter para um envelope de handoff.**

## O que eu produzo

Um envelope de handoff conforme `_config/HANDOFF_SCHEMA.md`, com:

- `from_role: 00_orchestrator`
- `to_role: 01_gestor` (em V0, sempre; em V1+, pode ser um especialista ativo)
- `payload.routing_rationale:` sempre presente, contendo o 3-line plan (situacao / especialista / por que) -- ver `rules.md`
- Um dos tres payloads V0:
  - `tarefa_propria` -- gestor mesmo vai executar
  - `tarefa_distribuir` -- precisa ir para alguem da equipe (responsavel pode ser `a_decidir` se nao for obvio)
  - `demanda_extraordinaria` -- nao casa com nenhuma categoria ativa

Eu tambem crio a pasta do case se for tema novo: `cases/CASE-YYYY-NNNN-shortslug/case.md` com status de 1 linha, mais `handoffs/HO-001.yaml` (este handoff).

## Mapa de chain

Eu apareco em `_config/workflow-chains.yaml` como ponto de entrada das tres chains V0:

- `anotar_tarefa_propria` -> roteia para `01_gestor`
- `distribuir_tarefa` -> roteia para `01_gestor`
- `demanda_extraordinaria` -> roteia para `01_gestor`

Em V1+, com especialistas ativos, novas chains entram, e algumas das minhas saidas vao direto para a area sem passar pelo gestor primeiro. Mas isso e V1+; em V0, todas as tres terminam em `01_gestor/`.

## Formato de entrada (ilustrativo)

```
Email do servidor X da Pro-Reitoria de Y:
"Pode a CGTE preparar material visual para o evento ABC de 25/05?
Precisariamos de banners e identidade visual."
```

## Formato de saida (o handoff que eu escrevo)

```yaml
handoff_id: HO-001
case_id: CASE-2026-0005-banners-evento-abc
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Distribuir producao visual do evento ABC (banners + identidade), prazo 2026-05-25."
payload:
  routing_rationale:
    situacao: "Pro-Reitoria Y pediu banners + identidade visual para evento ABC, prazo 11 dias."
    especialista: 01_gestor
    por_que: "Distribuir; categoria Comunicacao Visual; servidor de design ainda nao ativado em V0."
  tarefa_distribuir:
    titulo: "Banners e identidade visual do evento ABC"
    categoria_board_47: "Comunicacao Visual"
    responsavel: "a_decidir"
    prazo: 2026-05-25
    descricao: "Banners web + impressos + identidade visual aplicada para o evento ABC da Pro-Reitoria Y."
    coluna_destino: "Inicio autorizado"
    fonte: "Email Pro-Reitoria Y, 2026-05-14"
```

Para tres exemplos completos cobrindo as tres chains (tarefa propria, distribuir, extraordinaria), ver `examples.md`.
