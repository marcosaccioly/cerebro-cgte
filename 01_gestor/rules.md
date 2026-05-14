# Regras -- 01_gestor

## Sempre

- **Confira o 3-line plan do orchestrator antes de aceitar o handoff.** Se faltar, devolva. O gestor não decide sem ver o raciocínio.
- **Mapeie categoria do board 47 explicitamente.** Use `reference/taxonomia-board-47.md`. Não inferir "deve ser tipo isso aqui".
- **Antes de chamar `_bridges/kanboard/`, preencha o `kanboard_card_request` completo.** Título, descrição, categoria, responsável, prazo, coluna destino. Cada campo deliberado.
- **Aprovar HITL é ler o payload.** O bridge mostra o payload final na CLI. Antes de confirmar, ler cada campo. HITL automático ("y, y, y") quebra o ponto da disciplina.
- **Registrar `hitl_aprovado_em` e `hitl_aprovado_por` no payload.** Mesmo se for só eu, o registro vai no handoff YAML para auditoria git.
- **Atualizar o case** com o handoff novo, o link para o card criado (após retorno do bridge), e qualquer decisão tomada (ex: nova categoria criada).
- **Para `demanda_extraordinaria`: registrar a decisão.** Criou nova categoria? Atualize também `_config/business-rules.md` e `reference/taxonomia-board-47.md`. Recusou? Por que. Redirecionou? Para onde.

## Nunca

- **Nunca aprove HITL sem ler o payload.** Volta para "Sempre" -- esse é o ponto da V0.
- **Nunca pule o `_bridges/kanboard/` para chamar a API direto.** O bridge existe para o HITL acontecer no mesmo lugar sempre. Pular = perder o ponto.
- **Nunca decida sem fonte clara.** Se a demanda chegou "alguém da chefia falou na reunião", peça para o orchestrator capturar a fonte exata (qual reunião, qual data, qual chefe). Sem fonte, sem decisão.
- **Nunca escreva em nome da CGTE em comentário / email institucional antes de `_config/voice/cgte.md` estar preenchida.** Bloqueio explícito, não "deixar passar essa".
- **Nunca distribua tarefa para um servidor sem nomear o responsável.** "Alguém da área" não distribui -- está no limbo. Se você ainda não decidiu, deixe `responsavel: a_decidir` e crie o card numa coluna que sinalize "pendente alocação".
- **Em V1+: nunca execute trabalho que cabe em pasta-especialista ativa.** Roteie para a pasta e mantenha o papel de gestor.

## Casos de borda

- **Demanda urgente, gestor fora do horário:** o orchestrator deixou em `inbox/` com `urgencia: alta`. Quando você assumir, escolha entre: (a) processar imediato com HITL acelerado mas presente; (b) registrar o case e mover para "Em aprovação" no board comentando que vai aprovar amanhã; (c) escalar via canal informal a alguém que pode aprovar (e registrar o canal usado). Nunca pular HITL pelo "é urgente".
- **Conflito entre demandas (duas tarefas pedem o mesmo servidor para a mesma semana):** você é o decisor. Registre as duas, mas redistribua uma -- com justificativa no payload `redistribuicao_motivo`.
- **`kanboard_card_request` chegou do bridge dizendo que o card já existe (criação falhou por duplicado):** revise se de fato é o mesmo trabalho. Se sim, atualize o case apontando para o card existente em vez de criar outro. Se não, ajuste o título para diferenciar e tente de novo com HITL renovado.
- **Falha de rede no Kanboard:** registre o `kanboard_card_request` no `output/` do gestor e tente de novo quando a rede voltar. Não deixe payload aprovado parar de existir -- o HITL já foi.
- **Servidor da área aprovou tarefa direto comigo na conversa (sem passar pelo workspace):** ainda assim, registre a decisão no case quando ela chegar oficialmente. O workspace não quebra só porque a CGTE conversa fora do workspace. Mas convertido em case dentro de 24h, ou some.

## Formato do HITL

Antes de chamar o bridge, você vê algo assim na CLI:

```
=== HITL kanboard_card_request ===
operação: criar-tarefa
projeto: 47 (CGTE - Atividades)
campos:
  title: "Preparar slides do MOOC X"
  description: "Slides para o módulo de abertura do MOOC X. Material de referência..."
  category: MOOC (id: 12)
  owner: marquito (id: 5)
  column: Início autorizado (id: 3)
  date_due: 2026-05-23
Aprovar? (y/n/editar)
```

Você lê. Se OK, `y`. Se algo errado, `editar` (volta para preencher) ou `n` (cancela e registra o motivo no handoff).
