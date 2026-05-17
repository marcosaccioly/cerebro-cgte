# Questionário de Onboarding -- 04-comunicacao

<!-- Lido quando o usuário digita "setup" dentro deste workspace.
     Este é o onboarding do servidor da área de Comunicação. Preenche os 4 arquivos
     de contrato com o conteúdo real, validado pelo gestor. -->

## Antes de começar

Você está ativando o especialista **04-comunicacao** (Comunicação). Esta sessão dura ~3h e produz:

0. **Decisão de nome** -- Marquito sinalizou em 2026-05-17 que o nome "comunicacao" pode estar errado para o escopo real (banners + identidade visual + layout + conteúdo de canais). Avaliar renomear para `04-design/` -- ver Q0.
1. `contrato/identidade.md` preenchido (quem você é no papel).
2. `contrato/regras.md` preenchido (sempre / nunca / casos de borda).
3. `contrato/exemplos.md` preenchido (3 exemplos reais).
4. `contrato/entrega.md` preenchido (o que entra, o que sai).
5. Pelo menos 1 chain V1+ em `../_configuracao/cadeias-fluxo.yaml` que termina neste papel.

Depois desta sessão, este workspace **deixa de ser esqueleto**. Você passa a receber entregas de `../00-orquestrador/` (ou outros) e produz entregas que vão para o gestor ou direto para bridges.

## Perguntas

### Q0: O nome "comunicacao" ainda é o melhor para este workspace?

- **Contexto da dúvida (registrada por Marquito em 2026-05-17):** o escopo concreto deste workspace -- banners, identidade visual, layout de peças, capas, thumbnails (Comunicação Visual) + notícias, posts, materiais de canais (Conteúdo Digital) -- é o que o MEC chama de **Design** no ensino superior brasileiro. O nome "comunicacao" pega bem a parte de "Conteúdo Digital" mas perde a parte visual / de design. Hipótese a avaliar: renomear `04-comunicacao/` → `04-design/`.
- **Decisão a tomar nesta sessão:** servidor + gestor decidem se renomeiam ou mantêm. Se renomear, fazer com `git mv` (preserva histórico) e atualizar refs cruzadas listadas abaixo.
- **Refs cruzadas que precisariam ser atualizadas se renomear:** `CLAUDE.md` raiz (mapa + L0), `CONTEXTO.md` raiz (tabela 9 workspaces), `README.md` raiz, `_configuracao/cadeias-fluxo.yaml`, `00-orquestrador/contrato/entrega.md` + `exemplos.md`, `00-orquestrador/referencias/arvore-decisao-roteamento.md`, `01-gestor/contrato/exemplos.md`, `01-gestor/referencias/taxonomia-board-47.md`, `02-design-educacional/` (CLAUDE.md, CONTEXTO.md, README.md, identidade.md, entrega.md, exemplos.md, questionario.md, glossario, tipologia).
- **Categorias do board 47 não mudam:** "Comunicação Visual" e "Conteúdo Digital" são a verdade institucional. A decisão é só sobre o nome interno da pasta.
- **Onde grava a decisão:** atualizar este arquivo (remover Q0 ou registrar que foi mantido), atualizar nome em `CLAUDE.md` deste workspace, e -- se renomeado -- atualizar todas as refs acima.

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