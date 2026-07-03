# Questionário de Onboarding -- 04-design

<!-- Lido quando o usuário digita "setup" dentro deste workspace.
     Este é o onboarding do servidor da área de Design. Preenche os 4 arquivos
     de contrato com o conteúdo real, validado pelo gestor. -->

## Antes de começar

Você está ativando o especialista **04-design** (Design). Esta sessão dura ~3h e produz:

0. **Nome já decidido** -- a pasta foi renomeada de `04-comunicacao/` → `04-design/` em 2026-07-03 (decisão de Marquito). Não é mais questão em aberto; ver Q0 (registro) abaixo.
1. `contrato/identidade.md` preenchido (quem você é no papel).
2. `contrato/regras.md` preenchido (sempre / nunca / casos de borda).
3. `contrato/exemplos.md` preenchido (3 exemplos reais).
4. `contrato/entrega.md` preenchido (o que entra, o que sai).
5. Pelo menos 1 chain V1+ em `../_configuracao/cadeias-fluxo.yaml` que termina neste papel.

Depois desta sessão, este workspace **deixa de ser esqueleto**. Você passa a receber entregas de `../00-orquestrador/` (ou outros) e produz entregas que vão para o gestor ou direto para bridges.

## Perguntas

### Q0 (RESOLVIDA em 2026-07-03): pasta renomeada para `04-design/`

- **Decisão:** a pasta passou de `04-comunicacao/` → `04-design/`. Motivos: (1) o escopo real -- banners, identidade visual, layout de peças, capas, thumbnails (Comunicação Visual) + notícias, posts, materiais de canais (Conteúdo Digital) -- é o que o MEC chama de **Design** no ensino superior brasileiro; (2) diferencia de `02-design-educacional/`; (3) politicamente, evita confundir com a Assessoria de Comunicação do Cefor -- a CGTE luta para não parecer o setor de comunicação, e uma pasta "comunicação" dentro do cérebro não ajudava.
- **Como foi feito:** `git mv 04-comunicacao 04-design` (preserva histórico) + atualização de todas as refs cruzadas: `CLAUDE.md` raiz, `CONTEXTO.md` raiz, `README.md` raiz, `_configuracao/cadeias-fluxo.yaml`, `_configuracao/regras-negocio.md`, `00-orquestrador/` (exemplos, entrega, árvore de decisão), `01-gestor/` (exemplos, taxonomia-board-47), `02-design-educacional/`, e os YAMLs do Kanboard (`projetos-cgte.yaml`, `usuarios-cgte.yaml`).
- **O que NÃO mudou:** as categorias do board 47 -- "Comunicação Visual" e "Conteúdo Digital" -- continuam sendo a verdade institucional. O rename atingiu só o nome interno da pasta e o rótulo do eixo/papel ("Comunicação" → "Design").

### Q1: Quem é o servidor responsável?

- Tipo: nome + arquivo de voz em `../_configuracao/voz/<nome>.md`
- Onde grava: `contrato/identidade.md` (seção "Quem eu sou")

### Q2: O que este papel possui (responsabilidades concretas)?

- Tipo: lista de 5-10 itens em formato imperativo ("decidir X", "produzir Y", "revisar Z")
- Onde grava: `contrato/identidade.md` (seção "O que eu possuo")

### Q3: O que este papel NÃO possui (fronteiras)?

- Tipo: lista de 3-5 itens
- Default: não escreve direto em Kanboard (passa por bridge), não decide escopo (gestor decide), não produz comunicação pública sem voz CGTE preenchida
- Onde grava: `contrato/identidade.md` (seção "O que eu NÃO possuo")

### Q4: Modelo mental do papel

- Tipo: uma analogia curta (1-2 frases)
- Onde grava: `contrato/identidade.md` (seção "Modelo mental")

### Q5: Regras "sempre" (5-8 itens)

- Tipo: ação imperativa + razão curta
- Onde grava: `contrato/regras.md` (seção "Sempre")

### Q6: Regras "nunca" (3-6 itens)

- Tipo: o que este papel não faz mesmo sob pressão
- Onde grava: `contrato/regras.md` (seção "Nunca")

### Q7: Casos de borda (3-5 situações ambíguas frequentes)

- Tipo: situação -> decisão padrão -> motivo
- Onde grava: `contrato/regras.md` (seção "Casos de borda")

### Q8: Três exemplos reais

- Tipo: entrega de entrada + trabalho feito + entrega de saída
- Onde grava: `contrato/exemplos.md`

### Q9: Chain V1+ ativa que termina neste papel

- Tipo: nome da chain + sequência `from` -> `to` + condição
- Onde grava: `../_configuracao/cadeias-fluxo.yaml` (adicionar entrada)

### Q10: Validação em uma demanda real

- Antes de "ativado", rodar pelo menos uma demanda real do board 47 pela chain nova, com gestor olhando junto.
- Onde grava: cria um `../casos/CASO-YYYY-NNNN-shortslug/` real e percorre.

---

**Status:** Workspace esqueleto. Aguardando preenchimento via esta sessão de onboarding.