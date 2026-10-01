# Questionário de setup -- comunicacao-cefor

<!-- Lido quando o usuário digita "setup" dentro deste workspace.
     Registra as decisões da área e o que ainda falta. -->

## Situação

| Pendência | Status | O que bloqueia enquanto aberta |
|---|---|---|
| Q1 operadores | resolvida | -- |
| Q2 acesso à caixa | resolvida | -- |
| Q3 board 30 | **parcial** | criação de card (`hitl: aguardando_board`) |
| Q4 responsáveis | parcial (sugestões) | nada -- o operador confirma no HITL |
| Q5 informe | resolvida | -- |
| Q6 canais | resolvida (observado) | -- |
| Q7 voz | resolvida (v1) | -- |
| Q8 validação | em andamento | -- |

## Perguntas

### Q1: Quem opera a caixa e aprova o HITL? -- RESOLVIDA (2026-09-29)

Marquito e/ou Elton. Gravado em `caixa.yaml` → `hitl.operadores`.

### Q2: Como o agente lê a caixa? -- RESOLVIDA (2026-09-29)

- Caixa: `cso.cefor@ifes.edu.br`; login do webmail `noticias.cefor`; servidor Exchange 2019 on-premise (`webmail.ifes.edu.br`).
- Acesso via EWS com Basic auth, domínio Windows `UPD1` (`_pontes/email/`). Login testado: Caixa de Entrada ~1000 mensagens, Enviados ~640.
- Credenciais só no `.env` da raiz. **Recomendado trocar a senha** (foi compartilhada em conversa) e atualizar `CSO_SENHA`.

### Q3: Board da comunicação -- PARCIAL

- Projeto **30** (`https://board.cefor.ifes.edu.br/?controller=BoardViewController&action=show&project_id=30`).
- Ignorar cards criados antes de 2023 (`ignorar_antes_de: 2023-01-01` em `_pontes/kanboard/projetos-cgte.yaml`).
- **Falta:** `KANBOARD_API_TOKEN` no `.env` e o usuário `api.cgte` como membro do projeto 30. Depois: `bun run _pontes/kanboard/varredura.ts --projeto 30` e preencher colunas, categorias e coluna de entrada em `projetos-cgte.yaml`.

### Q4: Quem recebe card (owner)? -- PARCIAL

Sugestões por canal em `../referencias/canais-cefor.md` (site → Elton; informe → Marquito), tiradas das respostas da caixa. **Redes sociais: a definir** -- quem publica no Instagram do Cefor? Até lá, o card de redes vai sem responsável e o operador escolhe no HITL.

### Q5: Como é o Informe Cefor? -- RESOLVIDA

Estrutura, cadência (1ª e 3ª semana), numeração (#56 foi a última) e critério editorial oficial em `../informe/README.md`, a partir das edições #51-#56. A #57 sai na **1ª semana de outubro de 2026** (definido em 2026-09-29; `caixa.yaml` → `informe`). **Falta:** de onde vem a lista de aniversariantes.

### Q6: Canais e regras de publicação -- RESOLVIDA (observado)

`../referencias/canais-cefor.md`. Revisar se algo mudou.

### Q7: Voz -- RESOLVIDA (v1)

`../../_configuracao/voz/comunicacao-cefor.md`, a partir de ~100 respostas enviadas pela caixa e das edições #51-#56.

### Q8: Validação com a caixa real -- EM ANDAMENTO

- Captura testada em 2026-09-29 (19 e-mails de 15 a 28/09).
- Próximo: rodar `/processar-noticias 14d` com um operador aprovando, anotar decisões corrigidas e ajustar `../referencias/criterios-triagem.md` e `../contrato/exemplos.md`.
