# Plano — camada de gestão em volta do Kanboard

> **Status:** PENDENTE de avaliação (Elton + Marquito). Nada aqui foi executado.
> **Origem:** conversa Marquito + Elton de 2026-09-28 ("cérebro da CGTE"), transcrita em
> `_inbox/2026-09-29-1213 - 2026-09-28 cérebro da CGTE.md`. Plano registrado em 2026-09-29.
> **Resolve:** a decisão contingente "como a CGTE deveria usar o Kanboard?" citada em
> `01-gestor/referencias/plano-trabalho-raquel.md`.

## O que a conversa diz

- **Dor central:** o gestor começa o dia pelo e-mail e tenta lembrar quem faz o quê; usa 4–5 ferramentas desconectadas (agenda, lista de tarefas, Obsidian, PGD, Kanboard, WhatsApp). Autorrelato da equipe não funciona.
- **Decisão:** o Kanboard continua fonte da verdade — é o único acessível a quem não usa IA (Eliana, Carol). O modelo "cérebro como fonte da verdade + agente commitando sozinho" foi descartado para a CGTE.
- **Ideia:** uma camada em volta do Kanboard — captura (e-mail, WhatsApp, reuniões) → processamento → painel da manhã. A gestão pode atualizar cards pelos outros. Sync de 10 min a 1 h basta; nada precisa ser em tempo real.
- **Por card:** próximo passo, o que veio antes, %, quem pediu, contato e um link que já abre a conversa.
- **Colunas = etapas.** O board de vídeo funcionou porque mapeava as etapas; o board 47 só diz "em andamento". Piloto sugerido: comunicação (a publicar / publicados / aguardando aprovação). Libras e audiovisual se cruzam — entender antes de separar.
- **Indicadores:** prazo cumprido, volume, capacidade — sobretudo Libras e vídeo — sem tratar pessoas como máquinas.
- **Combinado:** sessão Elton + Marquito para preencher o cérebro (29/09, ~14h, depois da reunião geral do Cefor).
- **Ignorado da transcrição:** trecho a partir de 23:31 (jogos) e linhas repetidas "Encontro Bimestral Synkra…" (ruído do Whisper).

## Encaixe no cérebro

| Pedido | Já existe | Falta |
|---|---|---|
| Kanboard como verdade | `_configuracao/regras-negocio.md` | Formalizar boards por subsetor (hoje "toda escrita começa no 47") |
| Captura | transcritor → `_inbox/`; `00-orquestrador/entrada/` | Rotina que transforma entrada em propostas |
| Painel da manhã | `_pontes/kanboard/diagnostico.ts` (read-only) | Versão diária com prazos, carga por pessoa, links |
| Gestão atualiza pelos outros | 4 operações com HITL | Fila de propostas aprovadas item a item |
| Etapas por subsetor | `etapas/` vazios; projeto 60 "CGTE - Audiovisual" existe | Colunas desenhadas por área |
| Contato/link no card | — | Campos no card + cadastro de contatos |
| Prazo/volume | `date_due` na API | 96 de 108 cards abertos sem prazo (diagnóstico de jun/2026) — prazo precisa virar obrigatório |

## Fases

### Fase 0 — Registrar e preparar a sessão

- Abrir `casos/CASO-2026-0003-camada-gestao/` (chain `anotar_tarefa_propria`): transcrição e síntese em `artefatos/`, `caso.md` com próximos passos.
- Pauta de 1 h: validar o modelo (Fase 1), desenhar colunas do piloto, fechar campos obrigatórios do card, listar quem precisa sentar para audiovisual e Libras.

### Fase 1 — Decidir o modelo de uso do Kanboard (destrava o resto)

- Novo `01-gestor/referencias/modelo-uso-kanboard.md`:
  - board 47 = entrada/triagem + visão geral;
  - boards por subsetor com colunas = etapas;
  - cérebro = camada de leitura + propostas;
  - gestão atualiza pelos outros, sempre via HITL.
- Ajustar `_configuracao/regras-negocio.md` (arquivo sensível — merge com HITL).
- Tirar o aviso "contingente" de `plano-trabalho-raquel.md` → faxina do board liberada.
- Template de card em `_pontes/kanboard/operacoes/criar-tarefa.ts`: Solicitante · Contato (`mailto:` / `https://wa.me/55…`) · Origem · Próximo passo · Prazo acordado. % = subtarefas concluídas; "o que veio antes" = comentários. Conferir suporte a links externos e subtarefas na versão institucional do Kanboard.

### Fase 2 — Painel da manhã (read-only, sem HITL)

- `_pontes/kanboard/painel.ts` (evolução do `diagnostico.ts`) gera `operacoes/painel/AAAA-MM-DD.md` com:
  - vence hoje / na semana; atrasados;
  - parados há +N dias sem movimento;
  - carga aberta por pessoa ("quem está livre");
  - contagem por coluna dos boards de subsetor;
  - pendências em `_inbox/` e `00-orquestrador/entrada/`;
  - casos abertos com próximo passo.
- Cada linha com link do card e do contato.
- Atualização sob demanda + opcional Agendador do Windows a cada 30–60 min.
- Aproveitar para centralizar os mapas de IDs hoje duplicados em `diagnostico.ts` e `exportar-historico.ts`, lendo de `projetos-cgte.yaml` / `usuarios-cgte.yaml` (o painel seria a terceira cópia; os scripts ainda chamam o eixo de "comunicação" após o rename para design).

### Fase 3 — Piloto Comunicação

- Colunas propostas (validar): Solicitado → Em produção → Em aprovação → Agendado → Publicado.
- Projeto novo no Kanboard (como o 60 do audiovisual) — depende de admin do Kanboard.
- Espelhar as colunas em `04-design/etapas/` e registrar em `projetos-cgte.yaml`.
- Checar contra `historico-cgte/eixo-comunicacao.md` se as colunas cobrem o trabalho real.
- Critério de sucesso: em 4 semanas o painel responde "quantos a publicar / aguardando aprovação" sem perguntar no WhatsApp.
- Operação: Elton se ofereceu para ajudar na caixa da comunicação (a confirmar).

### Fase 4 — Captura → propostas (com HITL)

- Nova chain `atualizacao_por_captura` em `_configuracao/cadeias-fluxo.yaml` (sensível): `00-orquestrador` → `01-gestor` → `_pontes/kanboard`.
- Comando `processar-entrada`: lê transcrições (já chegam em `_inbox/`) e e-mail/WhatsApp colados em `entrada/`; gera `01-gestor/saida/propostas-AAAA-MM-DD.yaml` com cards novos, movimentações, prazos combinados e comentários.
- Gestor aprova item a item (y/n/editar) — respeita "nada em batch sem ver cada um".
- Cobrança sem atrito: para card parado, rascunho na voz do Marquito + link `wa.me/…?text=` pré-preenchido; ele só clica e envia.

### Fase 5 — Audiovisual + Libras (descoberta antes de board)

- Varredura read-only do projeto 60 para recuperar as colunas do board de vídeo que funcionou.
- Sessões com Tiago/Léo/Darlan e Eliana/Carol pelos questionários de `03-audiovisual/` e `05-acessibilidade/`: mapear etapas e onde Libras entra (vídeo com Libras × interpretação de evento × tradução avulsa).
- Opção a avaliar depois: raia de Libras no board de vídeo + board próprio de interpretação, ligados por links entre cards.

### Fase 6 — Indicadores e rotina do gestor

- Seção semanal no painel alimentando `operacoes/revisao-sexta.md`: prazos cumpridos, volume por eixo, carga aberta, tempo por etapa.
- Regra: agregado por eixo; por pessoa só carga atual (para distribuir, não para ranquear).
- Depois: relatório PGD gerado dos cards finalizados do gestor (`07-institucional/`), prazos na agenda, envio do painel por e-mail/Telegram.

## Atritos com as regras atuais

1. **"Gestão atualiza automaticamente" × anti-autopilot** → resolvido por propostas com HITL item a item. Relaxar para operações de baixo risco só por decisão na Friday review.
2. **"Toda escrita começa no projeto 47"** → vira regra de triagem: nasce no 47, move para o board do subsetor.
3. **Telefones no git** → LGPD. Recomendação: cadastro de contatos em arquivo local fora do git (como o `.env`) ou só e-mail institucional.
4. **Gratuito / institucional** → tudo roda com Bun + Kanboard; a equipe não precisa de assinatura de IA — só o gestor usa o cérebro.

## Decisões em aberto

- [ ] Confirmar o modelo da Fase 1
- [ ] Colunas do piloto comunicação e quem opera
- [ ] Campos obrigatórios do card
- [ ] Onde fica o cadastro de contatos
- [ ] Datas das sessões com audiovisual e Libras
