# Ativação em curso -- 02-educacao

<!-- Arquivo temporário de estado da ativação. Apagar quando o questionário
     completar e os 4 arquivos de contrato + chain estiverem preenchidos. -->

**Status:** Pausada por Marquito em 2026-05-15, antes da Q1.

## Modo escolhido

**Rascunho parcial + chain (Fases A+B).** Marquito rascunha como gestor (servidor da área de Educação ainda não está presente). Validação pelo servidor real fica para depois (Fase C / Q10).

- Fase A — Q1-Q8 → preenche os 4 arquivos em `../contrato/` (`identidade.md`, `regras.md`, `exemplos.md`, `entrega.md`)
- Fase B — Q9 → adiciona chain V1+ em `../../_configuracao/cadeias-fluxo.yaml` que termina em `02-educacao`
- Fase C — Q10 → **pulada** nesta sessão (precisa de servidor + demanda real)

## Tarefas pendentes (em ordem)

1. **Q1-Q4 → `contrato/identidade.md`** (próximo passo)
   - Q1: servidor responsável (nome real ou `a-definir`)
   - Q2: responsabilidades concretas (5-10 itens imperativos)
   - Q3: fronteiras (3-5 itens, defaults documentados)
   - Q4: modelo mental (analogia 1-2 frases)

2. **Q5-Q7 → `contrato/regras.md`**
   - Q5: sempre (5-8 itens)
   - Q6: nunca (3-6 itens)
   - Q7: casos de borda (3-5 situações)

3. **Q8 → `contrato/exemplos.md`** (3 exemplos reais da área)

4. **Derivar `contrato/entrega.md`** (do que sai de Q2 e Q8)

5. **Q9 → `../../_configuracao/cadeias-fluxo.yaml`** (chain V1+ que termina em 02-educacao)

6. **Marcar como ATIVO em rascunho** + commit + push
   - Atualizar `../../CLAUDE.md` e `../../README.md` indicando que 02-educacao saiu de "esqueleto" para "ativo em rascunho (aguardando validação do servidor)".
   - Atualizar `../README.md` para refletir o novo estado.

## Como retomar

1. Reabrir esta sessão dizendo "continuar ativação do 02-educacao".
2. Claude lê este arquivo + o questionário em `questionario.md` ao lado.
3. Próxima ação: Q1-Q4 (rascunhar `contrato/identidade.md`).

## Contexto institucional para guiar o rascunho

- **Eixo:** Educação
- **Cobertura no board 47:** MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional
- **Fronteiras genéricas (default para Q3):** não escreve direto no Kanboard (passa por bridge), não decide escopo (gestor decide), não produz comunicação pública sem voz CGTE preenchida
