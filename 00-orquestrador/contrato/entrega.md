# Entrega -- 00-orquestrador

O contrato do orchestrator. O que entra, o que sai, para onde vai depois.

## O que eu recebo

O orchestrator é a **porta de entrada**. Eu não recebo entregas de outros especialistas no fluxo normal. O que eu recebo é **input bruto de fora do sistema**:

- Um email encaminhado para `../entrada/`
- Uma nota de uma reunião da coordenação (Marquito ou outro servidor escreve em texto e deposita em `../entrada/`)
- Um pedido de chefia ou parceiro chegando por canal informal (Telegram, conversa de corredor) e transformado em texto para o inbox
- Uma notificação do Kanboard institucional avisando que um card chegou para a coordenação decidir (raro mas possível)

Esses inputs não chegam estruturados. Chegam na forma natural. **Meu trabalho é converter para um envelope de entrega.**

## O que eu produzo

Um envelope de entrega conforme `../../_configuracao/ESQUEMA_ENTREGA.md`, com:

- `papel_origem: 00-orquestrador`
- `papel_destino: 01-gestor` (em V0, sempre; em V1+, pode ser um especialista ativo)
- `payload.routing_rationale:` sempre presente, contendo o 3-line plan (situação / especialista / por que) -- ver `regras.md`
- Um dos três payloads V0:
  - `tarefa_propria` -- gestor mesmo vai executar
  - `tarefa_distribuir` -- precisa ir para alguém da equipe (responsável pode ser `a_decidir` se não for óbvio)
  - `demanda_extraordinaria` -- não casa com nenhuma categoria ativa

Eu também crio a pasta do case se for tema novo: `../../casos/CASO-YYYY-NNNN-shortslug/caso.md` com status de 1 linha, mais `entregas/EN-001.yaml` (este entrega).

## Mapa de chain

Eu apareço em `../../_configuracao/cadeias-fluxo.yaml` como ponto de entrada das três chains V0:

- `anotar_tarefa_propria` -> roteia para `01-gestor`
- `distribuir_tarefa` -> roteia para `01-gestor`
- `demanda_extraordinaria` -> roteia para `01-gestor`

Em V1+, com especialistas ativos, novas chains entram, e algumas das minhas saídas vão direto para a área sem passar pelo gestor primeiro. Mas isso é V1+; em V0, todas as três terminam em `../../01-gestor/`.

## Formato de entrada (ilustrativo)

```
Email do servidor X da Pro-Reitoria de Y:
"Pode a CGTE preparar material visual para o evento ABC de 25/05?
Precisariamos de banners e identidade visual."
```

## Formato de saída (o entrega que eu escrevo)

```yaml
id_entrega: EN-001
id_caso: CASO-2026-0005-banners-evento-abc
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Distribuir produção visual do evento ABC (banners + identidade), prazo 2026-05-25."
carga:
  routing_rationale:
    situacao: "Pro-Reitoria Y pediu banners + identidade visual para evento ABC, prazo 11 dias."
    especialista: 01-gestor
    por_que: "Distribuir; categoria Comunicação Visual; servidor de design ainda não ativado em V0."
  tarefa_distribuir:
    titulo: "Banners e identidade visual do evento ABC"
    categoria_board_47: "Comunicação Visual"
    responsavel: "a_decidir"
    prazo: 2026-05-25
    descricao: "Banners web + impressos + identidade visual aplicada para o evento ABC da Pro-Reitoria Y."
    coluna_destino: "Início autorizado"
    fonte: "Email Pro-Reitoria Y, 2026-05-14"
```

Para três exemplos completos cobrindo as três chains (tarefa própria, distribuir, extraordinária), ver `exemplos.md`.
