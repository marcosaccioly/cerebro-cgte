# Árvore de decisão de roteamento

Heurística para escolher a chain certa por tipo de demanda. Use quando a escolha não for obvia so olhando `workflow-chains.yaml`.

## Passo 1: A demanda e um tema novo ou ja tem case?

**Case existente** (ja existe `cases/CASE-YYYY-NNNN-shortslug/` para o tema):
- Leia o handoff mais recente do case.
- Roteie de forma que continue o fluxo. Não crie um case duplicado.
- Se o case esta `closed` ou `done`, trate como tema novo (vai para Passo 2).

**Tema novo** (nenhum `case_id` existe):
- Continue para o Passo 2.

## Passo 2: A demanda casa com alguma categoria do board 47?

A taxonomia esta em `01_gestor/reference/taxonomia-board-47.md`. Os 8 eixos:

- Educação (MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional)
- Audiovisual (Produção Audiovisual, Evento / Transmissão)
- Comunicação (Comunicação Visual, Conteúdo Digital)
- Acessibilidade (Acessibilidade, Libras Interpretacao, Libras Traducao)
- Tech / Sistemas (Interface Digital, Inteligência Artificial)
- Institucional (Gestao / PGD, Comissão, Colaboracao Institucional)
- Ciência (Produção Científica)
- Design Educacional (sub-categoria de Educação em V0)

**Sim, casa com uma categoria** -> continue Passo 3.
**Não casa** -> chain `demanda_extraordinaria`, ja sabemos o destino.

## Passo 3: Quem vai executar?

**O próprio Marquito (gestor)** -> chain `anotar_tarefa_propria`.

Sinais: gestor disse "eu mesmo vou fazer", ou e tarefa que so o gestor pode fazer (decisão, representação institucional, reunião com chefia).

**Alguem da equipe (servidor)** -> chain `distribuir_tarefa`.

Em V0:
- Você não precisa saber qual servidor (gestor decide). Coloque `responsavel: a_decidir` se não for obvio.
- Se a área do trabalho e clara mas o servidor ainda não foi ativado como especialista, ainda assim e `distribuir_tarefa` -- o gestor vai aprovar e o card vai para a coluna "Início autorizado" do board, e o servidor real recebe a tarefa fora do workspace até ativar a pasta.

Em V1+:
- Quando o especialista da área estiver ativo, em casos claros você pode rotear direto para ele (não para o gestor). Mas isso e V1+; em V0, sempre roteia para o gestor primeiro.

**Externo (parceiro, fornecedor, outra coordenadoria)** -> ainda assim `distribuir_tarefa` para o gestor, com `payload.context.fonte_externa: true`. O gestor decide se a CGTE assume parte, recusa, ou redireciona.

## Passo 4: Casos especiais

### Demanda chega ja como card no Kanboard
Alguem criou o card direto no board sem passar pelo workspace. Você ainda assim deve:
- Criar o case para registro.
- Rotear para o gestor com `payload.context.origem: kanboard_direto` e o `card_id` do board.
- Gestor decide se aprova / move / comenta.

### Demanda duplicada
Antes de criar case novo, busque em `cases/` por casos com tema parecido nos últimos 30 dias. Se encontrar um `active`, anexe um handoff novo ao case existente em vez de criar outro. O `handoff_id` continua a sequência (HO-002, HO-003) dentro do case original.

### Demanda urgente
Marque em `payload.context.urgencia: alta`. Não tenta "atalhar" pulando passos. A urgencia entra como sinal para o gestor priorizar, não como permissão para pular HITL.

### Demanda mista (vários eixos)
Ex: "preparar evento que tem vídeo + banner + libras + notícia". Em V0, roteia uma vez para `01_gestor` com `payload.context.eixos_envolvidos: [Produção Audiovisual, Comunicação Visual, Libras Interpretacao, Conteúdo Digital]`. Gestor decide se cria um card guarda-chuva ou vários cards relacionados. Em V1+, isso vira chain multi-especialista (ver `transcricao_reuniao_multi_especialista` comentado em `workflow-chains.yaml`).

## Passo 5: Na duvida

Roteia para o gestor com `demanda_extraordinaria` mesmo se você acha que poderia chutar uma categoria. O sistema tolera "duvida -> humano decide" muito melhor do que "chutei errado -> categoria errada -> card no projeto errado -> retrabalho".

Roteamento e a área de erro mais barata para corrigir; categoria errada no board e a mais cara.

## O que esta árvore NÃO e

- Não e exaustiva. Cobre casos comuns. Edge cases aparecem; documente em `ops/friday-review.md` e atualize esta árvore conforme padrões emergirem.
- Não substitui `_config/workflow-chains.yaml`. As chains definem quais transições são válidas. Esta árvore ajuda a escolher qual chain entrar quando o input e ambiguo.
- Não e autonoma. O orchestrator sempre escreve um 3-line plan, e o plan vai no payload. O gestor ve o raciocinio.
