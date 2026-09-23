# Tema decidido -- "IA além do chat" (substitui a Opção B)

Decidido em 2026-09-15, fora desta sessão de análise, e trazido pronto via `prompt-continuidade-ia-alem-do-chat.md` e `dossie-ia-alem-do-chat.md` (ambos movidos do `08-ciencia/_inbox/` para cá em 2026-09-15). Este arquivo sintetiza a decisão para uso rápido dentro do caso; o dossiê completo é a fonte, não este resumo.

## Título (fixo -- 16 palavras, no limite do ESUD)

**IA além do chat: pastas e contexto na produção de materiais interativos e acessíveis para Moodle**

Não alterar sem razão forte. Manter o prefixo "IA além do chat:".

## Tema

Uso de IA generativa para produzir materiais didáticos HTML interativos para Moodle, com o processo estruturado por uma metodologia de Pastas inspirada na **Interpretable Context Methodology (ICM)** de Van Clief & McDermott (2026) -- a mesma linhagem conceitual que inspira o modelo MWP usado pelo próprio cerebro-cgte (ver `../../CLAUDE.md`, seção "Relação com ICM / MWP").

## Referências conceituais centrais

1. MIZOURI, Arin (2026) -- *Prompting Your Way to Better Learning*. https://sciforum.net/paper/31969 -- fundamenta: GenAI reduz barreira de programação; PDF/PPT → HTML interativo; materiais exploráveis/self-check; uso dentro de AVA.
2. VAN CLIEF, Jake; MCDERMOTT, David (2026) -- *Interpretable Context Methodology: Folder Structure as Agent Architecture*. https://arxiv.org/html/2603.16021v2 -- fundamenta: engenharia de contexto; pastas numeradas; uma etapa/uma função; Markdown como interface; referências persistentes vs. artefatos de trabalho; outputs intermediários editáveis; revisão humana; "configure the factory, not the product".

Lista completa de referências comparáveis (ESUD 2025, EMOOCS, ECEL, AICSET, Learning@Scale, AIED, Moodle+Claude, framework de e-learning, REA/MOOC) em `dossie-ia-alem-do-chat.md`, arquivos 03, 04 e 08.

## Pergunta orientadora

Como uma metodologia de engenharia de contexto baseada em pastas pode estruturar o uso da IA generativa na produção de materiais didáticos interativos para Moodle?

## Objetivo

Relatar a experiência de aplicação de uma metodologia de engenharia de contexto baseada em pastas na produção, com inteligência artificial generativa, de recursos didáticos HTML interativos para Moodle, analisando suas contribuições para a organização do processo, a intervenção humana, a qualidade pedagógica e a acessibilidade.

## Contribuição pretendida

Não é demonstrar que "IA escreve HTML". É mostrar como transformar essa capacidade em um processo estruturado, transparente, revisável, auditável, reutilizável e transferível para uma equipe de EaD.

Workflow conceitual: `material fonte → análise pedagógica → design da interação → geração HTML → validação → correção → Moodle`, com `IA produz artefato → humano revisa/edita → próxima etapa` em cada transição.

## Diferencial em relação à literatura

Já ocupado: ESUD 2025 (GenAI para produção de disciplina EaD, inclusive antecedente próprio da CGTE -- *Papo com IA.IÁ*); Mizouri 2026 (estático → HTML interativo); Moodle+Claude 2026; TEACHMate; frameworks de produção de e-learning; controle humano e avaliação de interatividade.

Lacuna: adaptação de uma metodologia explícita de engenharia de contexto/pastas ao workflow real de produção de materiais interativos no Moodle, com artefatos intermediários e review gates humanos.

## Regra mais importante -- NÃO INVENTAR DADOS

Não afirmar sem dado fornecido e confirmado: ganho de aprendizagem; engajamento; redução percentual de tempo; conformidade WCAG; número de recursos; número de usuários; testes com estudantes; modelos usados; satisfação; eficácia comparativa ICM vs. mega-prompt.

Onde faltar dado, marcar `[DADO A CONFIRMAR]` no texto ou perguntar ao autor -- nunca inferir silenciosamente.

**Status atual (2026-09-15): evidência do pipeline é parcial.** Ver `levantamento-casos-reais-pipeline.md` -- é o bloqueador para iniciar a redação.

## Tom desejado

Acadêmico, preciso, concreto, crítico, sem propaganda de IA; valorizar human-in-the-loop; distinguir claramente experiência, inferência e evidência da literatura.

## Anonimização (duplo-cega)

Não escrever Cefor/Ifes/CGTE no manuscrito. Usar formulações como "uma instituição federal de educação" / "uma equipe multidisciplinar responsável por educação a distância" -- ver `dossie-ia-alem-do-chat.md`, arquivo 07, para o detalhamento completo. O template exige ainda "Filiação Institucional por Extenso **sem SIGLA**", substituída por "(omitted by blind review)" na versão cega.

## Regras formais do ESUD aplicáveis

Já registradas de forma canônica em `requisitos-submissao.md` (mesmo evento, mesma trilha, mesma modalidade) -- não duplicar aqui.

## Ordem de trabalho antes de redigir o manuscrito completo

1. Preencher `levantamento-casos-reais-pipeline.md` com a equipe.
2. Verificar quais casos reais podem de fato ser documentados (mesmo que parcialmente/retroativamente).
3. Definir quais afirmações têm evidência e quais precisam de `[DADO A CONFIRMAR]`.
4. Só então redigir resumo, descrição da experiência e aprendizados, seguindo o roteiro do arquivo 06 do dossiê.
