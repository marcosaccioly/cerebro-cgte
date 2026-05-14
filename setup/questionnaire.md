# Questionario de Onboarding -- cerebro-cgte

<!-- Instrucoes para o agente: leia este arquivo quando o usuario digitar "setup".
     Faça TODAS as perguntas em uma única passada conversacional. O usuario deve
     poder responder tudo numa mensagem so. Colete respostas. Substitua placeholders
     nos arquivos especificados. Após substituições, verifique que nenhum padrão
     {{PLACEHOLDER}} sobrou. -->

V0 do cerebro-cgte ja vem com defaults preenchidos para Marquito + CGTE / Cefor / Ifes. Este questionario cobre apenas:

1. Credenciais do Kanboard institucional (entram em `.env`).
2. Mapeamento real de IDs do Kanboard (entram em `_bridges/kanboard/projetos-cgte.yaml` e `usuarios-cgte.yaml`).
3. Marcacao da sessão de voz CGTE + Marquito (bloqueio explicito).
4. Confirmação do remote git.

Se você vai usar este workspace para outra coordenadoria / outro setor, primeiro derive de cerebro-cgte (fork ou copia) e altere as constantes institucionais antes de rodar este setup.

---

### Q1: Endpoint do Kanboard institucional

- Placeholder: `KANBOARD_API_URL` em `.env`
- Default: `https://board.cefor.ifes.edu.br/jsonrpc.php`
- Tipo: texto livre

### Q2: Usuario da API do Kanboard

- Placeholder: `KANBOARD_API_USER` em `.env`
- Default: `api.cgte`
- Tipo: texto livre

### Q3: Token da API do Kanboard

- Placeholder: `KANBOARD_API_TOKEN` em `.env`
- Default: nenhum (gerar no painel admin do Kanboard institucional)
- Tipo: texto livre / secreto

### Q4: Confirmação do projeto principal

- Placeholder: `KANBOARD_PROJETO_PRINCIPAL` em `.env`
- Default: `47`
- Tipo: numerico
- Nota: V0 assume projeto 47 ("CGTE - Atividades"). Se mudou, atualize também `_config/business-rules.md` e `_bridges/kanboard/projetos-cgte.yaml`.

### Q5: Projetos secundarios ativos

- Placeholder: `KANBOARD_PROJETOS_SECUNDARIOS` em `.env`
- Default: `58,60,73`
- Tipo: lista separada por virgula
- Nota: V0 não escreve nos secundarios automaticamente, mas o gestor pode mover cards entre eles manualmente.

### Q6: Você ja rodou a sessão de voz CGTE + Marquito?

- Tipo: sim / não
- Se NÃO: deixe `_config/voice/cgte.md` e `_config/voice/marquito.md` como estão (placeholder com nota BLOQUEADOR). Marque sessão para a próxima semana e atualize este questionario com a data.
- Se SIM: o agente solicita os arquivos preenchidos / informações para preencher direto e remove o bloco "Como preencher" + a nota BLOQUEADOR.

### Q7: Remote git deste workspace

- Placeholder: `GIT_REMOTE` em `.env`
- Default: o que estiver em `git remote get-url origin` (atualmente `https://github.com/marcosaccioly/cerebro-cgte.git`)
- Tipo: texto livre
- Nota: se for migrar para `https://gitlab.ifes.edu.br/cefor/cerebro-cgte.git`, escreva o GitLab. O bridge `_bridges/gitlab/sync.ts` funciona com qualquer remote.

### Q8: Primeira chamada do bridge ja rodou? (para preencher IDs reais)

- Tipo: sim / não
- Se NÃO: o agente roda `bun run _bridges/kanboard/facade.ts listar-tarefas-projeto --projeto 47` com as credenciais preenchidas, captura categorias / colunas / usuarios reais, e popula `_bridges/kanboard/projetos-cgte.yaml` e `usuarios-cgte.yaml` substituindo os placeholders.
- Se SIM: pular -- presumir que os arquivos ja estão certos.

---

## Após onboarding

Após preencher tudo:

1. Rodar `git status` para conferir o que mudou.
2. Rodar `bun run _bridges/gitlab/sync.ts push`. Como `.env` esta gitignored e voz CGTE provavelmente ainda esta como placeholder, isso vira mudanças não sensiveis -- auto-push.
3. Rodar `bun run _bridges/kanboard/facade.ts listar-tarefas-projeto --projeto 47` para validação end-to-end de credenciais.
4. Abrir `cases/CASE-2026-0001-validacao-v0/case.md` e walkar pela chain de validação com o agente.
5. Marcar Friday review da próxima sexta.

Após todas as substituições, escaneie o workspace por padrões `{{` remanescentes. Se sobrar algum, peca a informação faltante ao usuario.
