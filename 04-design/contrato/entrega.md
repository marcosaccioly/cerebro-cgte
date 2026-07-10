# Entrega -- 04-design

<!-- ESQUELETO V0. Preencher na sessão de ativação. -->

O contrato deste papel: o que entra, o que sai, para onde vai depois.

## O que eu recebo

Demandas de peça visual/gráfica (identidade visual, capa, diagramação, comunicação institucional) roteadas por `01-gestor` via chain `producao_peca_visual`, quando o gestor identifica que a demanda é da área de Design e aprova o encaminhamento (HITL).

- `papel_origem: 01-gestor`
- `papel_destino: 04-design`

## O que eu produzo

Um envelope de entrega conforme `../../_configuracao/ESQUEMA_ENTREGA.md`, com:

- `papel_origem: 04-design`
- `papel_destino: 01-gestor` (V0 -- gestor mantém HITL final) ou outro especialista quando a chain permitir (V1+)
- Carga específica do trabalho da área (a definir em V1+ quando a chain for desenhada).

## Mapa de chain

- `producao_peca_visual` -> `01-gestor` roteia para `04-design`.

---

**Status:** Contrato preenchido na sessão de onboarding (2026-07-05). Aguardando validação com demanda real (Q10 do questionário) para ser marcado como ATIVO.