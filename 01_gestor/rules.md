# Regras -- 01_gestor

## Sempre

- **Confira o 3-line plan do orchestrator antes de aceitar o handoff.** Se faltar, devolva. O gestor nao decide sem ver o raciocinio.
- **Mapeie categoria do board 47 explicitamente.** Use `reference/taxonomia-board-47.md`. Nao inferir "deve ser tipo isso aqui".
- **Antes de chamar `_bridges/kanboard/`, preencha o `kanboard_card_request` completo.** Titulo, descricao, categoria, responsavel, prazo, coluna destino. Cada campo deliberado.
- **Aprovar HITL e ler o payload.** O bridge mostra o payload final na CLI. Antes de confirmar, ler cada campo. HITL automatico ("y, y, y") quebra o ponto da disciplina.
- **Registrar `hitl_aprovado_em` e `hitl_aprovado_por` no payload.** Mesmo se for so eu, o registro vai no handoff YAML para auditoria git.
- **Atualizar o case** com o handoff novo, o link para o card criado (apos retorno do bridge), e qualquer decisao tomada (ex: nova categoria criada).
- **Para `demanda_extraordinaria`: registrar a decisao.** Criou nova categoria? Atualize tambem `_config/business-rules.md` e `reference/taxonomia-board-47.md`. Recusou? Por que. Redirecionou? Para onde.

## Nunca

- **Nunca aprove HITL sem ler o payload.** Volta para "Sempre" -- esse e o ponto da V0.
- **Nunca pule o `_bridges/kanboard/` para chamar a API direto.** O bridge existe para o HITL acontecer no mesmo lugar sempre. Pular = perder o ponto.
- **Nunca decida sem fonte clara.** Se a demanda chegou "alguem da chefia falou na reuniao", peca para o orchestrator capturar a fonte exata (qual reuniao, qual data, qual chefe). Sem fonte, sem decisao.
- **Nunca escreva em nome da CGTE em comentario / email institucional antes de `_config/voice/cgte.md` estar preenchida.** Bloqueio explicito, nao "deixar passar essa".
- **Nunca distribua tarefa para um servidor sem nomear o responsavel.** "Alguem da area" nao distribui -- esta no limbo. Se voce ainda nao decidiu, deixe `responsavel: a_decidir` e crie o card numa coluna que sinalize "pendente alocacao".
- **Em V1+: nunca execute trabalho que cabe em pasta-especialista ativa.** Roteie para a pasta e mantenha o papel de gestor.

## Casos de borda

- **Demanda urgente, gestor fora do horario:** o orchestrator deixou em `inbox/` com `urgencia: alta`. Quando voce assumir, escolha entre: (a) processar imediato com HITL acelerado mas presente; (b) registrar o case e mover para "Em aprovacao" no board comentando que vai aprovar amanha; (c) escalar via canal informal a alguem que pode aprovar (e registrar o canal usado). Nunca pular HITL pelo "e urgente".
- **Conflito entre demandas (duas tarefas pedem o mesmo servidor para a mesma semana):** voce e o decisor. Registre as duas, mas redistribua uma -- com justificativa no payload `redistribuicao_motivo`.
- **`kanboard_card_request` chegou do bridge dizendo que o card ja existe (criacao falhou por duplicado):** revise se de fato e o mesmo trabalho. Se sim, atualize o case apontando para o card existente em vez de criar outro. Se nao, ajuste o titulo para diferenciar e tente de novo com HITL renovado.
- **Falha de rede no Kanboard:** registre o `kanboard_card_request` no `output/` do gestor e tente de novo quando a rede voltar. Nao deixe payload aprovado parar de existir -- o HITL ja foi.
- **Servidor da area aprovou tarefa direto comigo na conversa (sem passar pelo workspace):** ainda assim, registre a decisao no case quando ela chegar oficialmente. O workspace nao quebra so porque a CGTE conversa fora do workspace. Mas convertido em case dentro de 24h, ou some.

## Formato do HITL

Antes de chamar o bridge, voce ve algo assim na CLI:

```
=== HITL kanboard_card_request ===
operacao: criar-tarefa
projeto: 47 (CGTE - Atividades)
campos:
  title: "Preparar slides do MOOC X"
  description: "Slides para o modulo de abertura do MOOC X. Material de referencia..."
  category: MOOC (id: 12)
  owner: marquito (id: 5)
  column: Inicio autorizado (id: 3)
  date_due: 2026-05-23
Aprovar? (y/n/editar)
```

Voce le. Se OK, `y`. Se algo errado, `editar` (volta para preencher) ou `n` (cancela e registra o motivo no handoff).
