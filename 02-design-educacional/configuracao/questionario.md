# Questionário de Validação -- 02-design-educacional

<!-- Lido quando o usuário digita "setup" dentro deste workspace.
     Esta NÃO é mais a sessão de preenchimento do zero -- os contratos foram
     rascunhados pelo gestor em 2026-05-15. Esta é a sessão de VALIDAÇÃO pelo
     servidor da área quando ele entrar. -->

## Antes de começar

Você é o servidor responsável pela área de **Design Educacional** na CGTE. Os contratos deste workspace já existem em **rascunho V1** -- foram preenchidos pelo gestor (Marquito) em 2026-05-15 com base no escopo "design educacional + atendimento a profissionais da educação + co-criação".

Esta sessão dura **~2h** (não 3h, porque a maior parte do trabalho de descoberta já foi feita no rascunho). Você produz:

1. `contrato/identidade.md` **validado** -- preenche seu nome em "Quem eu sou" e ajusta o que não casa com como você trabalha.
2. `contrato/regras.md` **validado** -- confirma cada regra "sempre" / "nunca" / caso de borda, ou substitui.
3. `contrato/exemplos.md` **substituído** -- os 3 exemplos atuais são plausíveis mas rascunhados; substituir por 3 atendimentos reais que você tenha em mente.
4. `contrato/entrega.md` **validado** -- confere os 5 formatos de saída e suas cargas.
5. `../_configuracao/cadeias-fluxo.yaml` **atualizado** -- adicionar a chain `atendimento_pedagogico_co_criacao` que está rascunhada em `contrato/entrega.md`.

Depois desta sessão, este workspace deixa de ser **rascunho V1** e vira **ATIVO**.

## Perguntas (modo validação)

### Q1: Seu nome + arquivo de voz

- Substituir `[A definir]` em `contrato/identidade.md` (seção "Quem eu sou") pelo seu nome.
- Criar `../_configuracao/voz/<seu-nome>.md` a partir do template (sessão de voz separada, ~45 min com Marquito).

### Q2: O que você possui (responsabilidades concretas) -- valida

- Lista atual está em `contrato/identidade.md` (seção "O que eu possuo"), 7 itens.
- Para cada item: **mantém / ajusta / remove**.
- Se faltar item importante, adicionar.
- Critério: cada item deve ser algo que **você faz de fato no dia a dia** ou que **fará** quando este papel virar parte do seu trabalho.

### Q3: O que você NÃO possui (fronteiras) -- valida

- Lista atual em `contrato/identidade.md` (seção "O que eu NÃO possuo"), 7 itens.
- Atenção especial:
  - **"Não mexer no Moodle pelo professor"** -- coluna vertebral do papel. Confirma?
  - **"Conteúdo técnico volta para o conteudista"** -- confirma?
  - **"Programação Visual Educacional cobre estrutura, produção visual vai para 04-comunicacao"** -- confirma o split?

### Q4: Modelo mental -- valida

- "Personal trainer pedagógico" (rascunho atual). Casa? Se não casar, propor outra analogia curta (1-2 frases).

### Q5: Regras "sempre" -- valida 8 itens

- Lista em `contrato/regras.md` (seção "Sempre"). Para cada: mantém / ajusta / remove.
- Atenção: "Comece pela reunião de escuta" é uma regra forte. Se você não acha que toda demanda merece reunião, este item precisa ser ajustado.

### Q6: Regras "nunca" -- valida 7 itens

- Lista em `contrato/regras.md` (seção "Nunca"). Mesma rotina de Q5.

### Q7: Casos de borda -- valida e adiciona

- Lista atual: 7 casos rascunhados. Para cada: mantém / ajusta / remove.
- Adicionar casos de borda que você já viu acontecer e o rascunho não cobriu.

### Q8: Três exemplos reais -- substitui

- Os 3 exemplos atuais em `contrato/exemplos.md` são rascunhados. **Substituir** pelos 3 primeiros atendimentos reais que você puder.
- Mínimo: 1 exemplo de cada categoria (`recomendacao_pedagogica`, `projeto_pedagogico`, `produto_pedagogico` ou caso de borda).

### Q9: Chain V1+ na `cadeias-fluxo.yaml`

- Rascunho já está em `contrato/entrega.md` (seção "Mapa de chain"). Falta migrar para `../_configuracao/cadeias-fluxo.yaml`.
- Decisão a validar com você + gestor: a chain começa em `00-orquestrador` ou em `01-gestor`? (Em V1+, demandas claras podem ir direto; em V1 inicial, gestor ainda filtra.)
- Onde grava: `../_configuracao/cadeias-fluxo.yaml` (adicionar entrada `atendimento_pedagogico_co_criacao`).

### Q10: Validação em uma demanda real

- Antes de marcar como **ATIVO**, rode pelo menos 1 demanda real do board 47 (categoria MOOC, Conteúdo Educacional, Formação e Capacitação, ou Programação Visual Educacional) pela chain nova, com Marquito olhando junto.
- Onde grava: cria um `../casos/CASO-YYYY-NNNN-shortslug/` real e percorre os 4 passos (reunião → anotação → trabalho → entrega).

### Q11 (novo): Referências adicionais que faltam

- Os 4 arquivos em `referencias/` (`protocolo-reuniao-escuta.md`, `tipologia-saida-pedagogica.md`, `arvore-decisao-co-criacao.md`, `glossario-design-educacional-cefor.md`) são rascunhos do gestor. Você pode:
  - Corrigir definições erradas no glossário (provável -- algumas vão estar imprecisas).
  - Adicionar referência específica que vai te ajudar e o gestor não conseguiu antecipar (ex: template de matriz pedagógica do Cefor, tabela de carga horária por modalidade, banco de rubricas vivido).
  - Remover/colapsar referência que na prática não se usa.

## O que NÃO precisa fazer agora

- Sessão de voz CGTE (`../_configuracao/voz/cgte.md`) -- é V0, mas independente deste workspace. Continua bloqueando saídas que viram comunicação institucional.
- Stages internas em `etapas/` -- só desenhar se com o uso aparecer pipeline. Por enquanto, os 4 passos (reunião → anotação → trabalho → entrega) cobrem tudo.

## Após validação

1. Marcar status como **ATIVO** em `CLAUDE.md`, `README.md` deste workspace.
2. Atualizar `../CLAUDE.md`, `../CONTEXTO.md`, `../README.md` na raiz indicando que `02-design-educacional` está ATIVO.
3. Apagar `configuracao/em-curso.md` (estado da ativação não é mais necessário).
4. Commit explícito: `feat(02-design-educacional): validação do servidor, workspace ATIVO`.

---

**Status:** RASCUNHO V1 aguardando validação do servidor da área.
