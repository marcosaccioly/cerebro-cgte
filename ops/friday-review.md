# Friday Review

A cadencia semanal que mantem o sistema honesto. Toda sexta, ~30 minutos. Rodada por Marquito (V0) ou por quem segurar o chapeu de gestor naquela semana (V1+).

## Cadencia

- **Quando:** sexta de manha, 30 minutos.
- **Formato:** primeiros 15 minutos -- gestor escaneia cases ativos contra `quality-standards.md`. Últimos 15 minutos -- conversa do time sobre padrões que surgiram (em V0 com so o gestor, fica registrado por escrito; em V1+ vira conversa real com a equipe).
- **Saída:** este arquivo ganha uma seção nova toda sexta, com a data.

## Por que existe

Sem essa cadencia, o sistema falha de duas formas previsiveis:

1. **Drift por case.** Um pequeno item ficou em aberto, depois outro, depois um prazo escorrega, depois uma demanda explode. O scan apanha as coisas pequenas antes de acumular.
2. **Drift do sistema.** Um padrão aparece em vários cases (ex: "demanda X recorrente não casa com nenhuma categoria"), mas ninguem conecta os pontos porque cada case e tratado separado. A conversa do time emerge padrão.

"Operacional em uma semana" so se mantem se o sistema continuar vivo. Friday review e o que mantem vivo.

## Formato de cada entrada semanal

```markdown
## Friday Review -- YYYY-MM-DD

### Estado dos cases ativos (uma linha por case)

- CASE-YYYY-NNNN-shortslug: STATUS -- resumo em uma linha, ação, owner. Reconferir quando.
- (uma linha por case ativo)

### O que mudou esta semana

- Fechados: [cases que fecharam]
- Novos: [cases que abriram]
- HITL recusados: [casos onde o gestor disse `n` -- relevante para entender o que estava errado]
- Bloqueios voz CGTE: [comms que ficaram travadas por voz não preenchida -- se ainda for o caso]

### Padrões / notas

[Texto livre. O que esta funcionando, o que não, o que o time / gestor deveria pensar. Não estilo ata; so as coisas que vale anotar.]

### Decisões sobre o sistema

- Categoria nova adicionada ao board 47? Documentar e cross-reference para `_config/business-rules.md` e `01_gestor/reference/taxonomia-board-47.md`.
- Chain nova adicionada ao `workflow-chains.yaml`?
- Especialista esqueleto que virou ativo nesta semana? Nome do servidor + a partir de qual case validou.

### Ações da próxima semana

- [ ] Ação 1 (owner: nome, due: data)
- [ ] Ação 2

### Próxima review

YYYY-MM-DD (próxima sexta)
```

## Exemplo de entrada semanal (ilustrativo)

```markdown
## Friday Review -- 2026-05-22

### Estado dos cases ativos

- CASE-2026-0002-slides-mooc-x: OK -- card no board, em execução, prazo 23/05. Reconferir segunda 25/05.
- CASE-2026-0003-noticia-programa-y: AT RISK -- Servidora A não confirmou aceite até quinta. Marquito mandou mensagem.
- CASE-2026-0001-validacao-v0: closed -- chain end-to-end rodou.

### O que mudou esta semana

- Fechados: CASE-2026-0001-validacao-v0 (chain V0 validada).
- Novos: CASE-2026-0002-slides-mooc-x, CASE-2026-0003-noticia-programa-y, CASE-2026-0004-piloto-ia-revisao.
- HITL recusados: 1 -- HO-002 do CASE-2026-0005 inicialmente recusado por categoria errada. Re-emitido com categoria correta.
- Bloqueios voz CGTE: 1 -- pedido de email institucional travado por voz não preenchida. Marcar sessão de voz para 27/05.

### Padrões / notas

- Categoria "Conteúdo Digital" puxou 3 demandas em 1 semana. Marcar para conversar com servidora responsavel quando ativar 04_comunicacao.
- HITL ja salvou 1 erro de categoria. Disciplina valeu a pena.
- 3 cases novos numa semana -- pesado mas factivel em V0.

### Decisões sobre o sistema

- Nenhuma categoria nova.
- Nenhuma chain nova.
- Especialistas continuam: 2 ativos + 7 esqueletos.

### Ações da próxima semana

- [ ] Marcar sessão de voz CGTE com Marquito para 27/05 (owner: gestor, due: 2026-05-26)
- [ ] Confirmar com Servidora A o aceite no CASE-2026-0003 (owner: gestor, due: 2026-05-26)

### Próxima review

2026-05-29 (próxima sexta)
```

## O que isto NÃO e

- **Não e reunião de status onde todo mundo reporta a semana.** O status vem do scan ja feito pelo gestor. A conversa e sobre o que o scan revelou.
- **Não e reunião de planejamento.** Planejamento vive em outro lugar. Friday review e reflexivo, com ações apenas para a próxima semana.
- **Não e opcional.** Mesmo "semana sem grande coisa" tem entrada. Principalmente nessas. A disciplina e o valor.
- **Não e canal para reclamação.** Aponta padrões, propoe ajuste de sistema, registra decisões.

## Como o arquivo evolui

Entradas acumulam, novas no topo. Após uns 6 meses (~25 entradas), o gestor pode arquivar entradas antigas em `ops/_archive/friday-reviews-YYYY-Q.md` e comecar live fresco.

---

## Reviews

> Adicione novas entradas abaixo desta linha. Mais recente no topo.

(Sem entradas ainda -- este e o template inicial. A primeira entrada real acontece após a primeira sexta com cases ativos em produção.)
