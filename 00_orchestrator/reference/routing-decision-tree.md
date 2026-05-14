# Arvore de decisao de roteamento

Heuristica para escolher a chain certa por tipo de demanda. Use quando a escolha nao for obvia so olhando `workflow-chains.yaml`.

## Passo 1: A demanda e um tema novo ou ja tem case?

**Case existente** (ja existe `cases/CASE-YYYY-NNNN-shortslug/` para o tema):
- Leia o handoff mais recente do case.
- Roteie de forma que continue o fluxo. Nao crie um case duplicado.
- Se o case esta `closed` ou `done`, trate como tema novo (vai para Passo 2).

**Tema novo** (nenhum `case_id` existe):
- Continue para o Passo 2.

## Passo 2: A demanda casa com alguma categoria do board 47?

A taxonomia esta em `01_gestor/reference/taxonomia-board-47.md`. Os 8 eixos:

- Educacao (MOOC, Conteudo Educacional, Formacao e Capacitacao, Programacao Visual Educacional)
- Audiovisual (Producao Audiovisual, Evento / Transmissao)
- Comunicacao (Comunicacao Visual, Conteudo Digital)
- Acessibilidade (Acessibilidade, Libras Interpretacao, Libras Traducao)
- Tech / Sistemas (Interface Digital, Inteligencia Artificial)
- Institucional (Gestao / PGD, Comissao, Colaboracao Institucional)
- Ciencia (Producao Cientifica)
- Design Educacional (sub-categoria de Educacao em V0)

**Sim, casa com uma categoria** -> continue Passo 3.
**Nao casa** -> chain `demanda_extraordinaria`, ja sabemos o destino.

## Passo 3: Quem vai executar?

**O proprio Marquito (gestor)** -> chain `anotar_tarefa_propria`.

Sinais: gestor disse "eu mesmo vou fazer", ou e tarefa que so o gestor pode fazer (decisao, representacao institucional, reuniao com chefia).

**Alguem da equipe (servidor)** -> chain `distribuir_tarefa`.

Em V0:
- Voce nao precisa saber qual servidor (gestor decide). Coloque `responsavel: a_decidir` se nao for obvio.
- Se a area do trabalho e clara mas o servidor ainda nao foi ativado como especialista, ainda assim e `distribuir_tarefa` -- o gestor vai aprovar e o card vai para a coluna "Inicio autorizado" do board, e o servidor real recebe a tarefa fora do workspace ate ativar a pasta.

Em V1+:
- Quando o especialista da area estiver ativo, em casos claros voce pode rotear direto para ele (nao para o gestor). Mas isso e V1+; em V0, sempre roteia para o gestor primeiro.

**Externo (parceiro, fornecedor, outra coordenadoria)** -> ainda assim `distribuir_tarefa` para o gestor, com `payload.context.fonte_externa: true`. O gestor decide se a CGTE assume parte, recusa, ou redireciona.

## Passo 4: Casos especiais

### Demanda chega ja como card no Kanboard
Alguem criou o card direto no board sem passar pelo workspace. Voce ainda assim deve:
- Criar o case para registro.
- Rotear para o gestor com `payload.context.origem: kanboard_direto` e o `card_id` do board.
- Gestor decide se aprova / move / comenta.

### Demanda duplicada
Antes de criar case novo, busque em `cases/` por casos com tema parecido nos ultimos 30 dias. Se encontrar um `active`, anexe um handoff novo ao case existente em vez de criar outro. O `handoff_id` continua a sequencia (HO-002, HO-003) dentro do case original.

### Demanda urgente
Marque em `payload.context.urgencia: alta`. Nao tenta "atalhar" pulando passos. A urgencia entra como sinal para o gestor priorizar, nao como permissao para pular HITL.

### Demanda mista (varios eixos)
Ex: "preparar evento que tem video + banner + libras + noticia". Em V0, roteia uma vez para `01_gestor` com `payload.context.eixos_envolvidos: [Producao Audiovisual, Comunicacao Visual, Libras Interpretacao, Conteudo Digital]`. Gestor decide se cria um card guarda-chuva ou varios cards relacionados. Em V1+, isso vira chain multi-especialista (ver `transcricao_reuniao_multi_especialista` comentado em `workflow-chains.yaml`).

## Passo 5: Na duvida

Roteia para o gestor com `demanda_extraordinaria` mesmo se voce acha que poderia chutar uma categoria. O sistema tolera "duvida -> humano decide" muito melhor do que "chutei errado -> categoria errada -> card no projeto errado -> retrabalho".

Roteamento e a area de erro mais barata para corrigir; categoria errada no board e a mais cara.

## O que esta arvore NAO e

- Nao e exaustiva. Cobre casos comuns. Edge cases aparecem; documente em `ops/friday-review.md` e atualize esta arvore conforme padroes emergirem.
- Nao substitui `_config/workflow-chains.yaml`. As chains definem quais transicoes sao validas. Esta arvore ajuda a escolher qual chain entrar quando o input e ambiguo.
- Nao e autonoma. O orchestrator sempre escreve um 3-line plan, e o plan vai no payload. O gestor ve o raciocinio.
