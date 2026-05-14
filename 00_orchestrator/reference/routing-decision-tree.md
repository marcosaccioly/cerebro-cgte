# Árvore de decisão de roteamento

Heurística para escolher a chain certa por tipo de demanda. Use quando a escolha não for óbvia só olhando `workflow-chains.yaml`.

## Passo 1: A demanda é um tema novo ou já tem case?

**Case existente** (já existe `cases/CASE-YYYY-NNNN-shortslug/` para o tema):
- Leia o handoff mais recente do case.
- Roteie de forma que continue o fluxo. Não crie um case duplicado.
- Se o case está `closed` ou `done`, trate como tema novo (vai para Passo 2).

**Tema novo** (nenhum `case_id` existe):
- Continue para o Passo 2.

## Passo 2: A demanda casa com alguma categoria do board 47?

A taxonomia está em `01_gestor/reference/taxonomia-board-47.md`. Os 8 eixos:

- Educação (MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional)
- Audiovisual (Produção Audiovisual, Evento / Transmissão)
- Comunicação (Comunicação Visual, Conteúdo Digital)
- Acessibilidade (Acessibilidade, Libras Interpretação, Libras Tradução)
- Tech / Sistemas (Interface Digital, Inteligência Artificial)
- Institucional (Gestão / PGD, Comissão, Colaboração Institucional)
- Ciência (Produção Científica)
- Design Educacional (sub-categoria de Educação em V0)

**Sim, casa com uma categoria** -> continue Passo 3.
**Não casa** -> chain `demanda_extraordinaria`, já sabemos o destino.

## Passo 3: Quem vai executar?

**O próprio Marquito (gestor)** -> chain `anotar_tarefa_propria`.

Sinais: gestor disse "eu mesmo vou fazer", ou é tarefa que só o gestor pode fazer (decisão, representação institucional, reunião com chefia).

**Alguém da equipe (servidor)** -> chain `distribuir_tarefa`.

Em V0:
- Você não precisa saber qual servidor (gestor decide). Coloque `responsavel: a_decidir` se não for óbvio.
- Se a área do trabalho é clara mas o servidor ainda não foi ativado como especialista, ainda assim é `distribuir_tarefa` -- o gestor vai aprovar e o card vai para a coluna "Início autorizado" do board, e o servidor real recebe a tarefa fora do workspace até ativar a pasta.

Em V1+:
- Quando o especialista da área estiver ativo, em casos claros você pode rotear direto para ele (não para o gestor). Mas isso é V1+; em V0, sempre roteia para o gestor primeiro.

**Externo (parceiro, fornecedor, outra coordenadoria)** -> ainda assim `distribuir_tarefa` para o gestor, com `payload.context.fonte_externa: true`. O gestor decide se a CGTE assume parte, recusa, ou redireciona.

## Passo 4: Casos especiais

### Demanda chega já como card no Kanboard
Alguém criou o card direto no board sem passar pelo workspace. Você ainda assim deve:
- Criar o case para registro.
- Rotear para o gestor com `payload.context.origem: kanboard_direto` e o `card_id` do board.
- Gestor decide se aprova / move / comenta.

### Demanda duplicada
Antes de criar case novo, busque em `cases/` por casos com tema parecido nos últimos 30 dias. Se encontrar um `active`, anexe um handoff novo ao case existente em vez de criar outro. O `handoff_id` continua a sequência (HO-002, HO-003) dentro do case original.

### Demanda urgente
Marque em `payload.context.urgencia: alta`. Não tenta "atalhar" pulando passos. A urgência entra como sinal para o gestor priorizar, não como permissão para pular HITL.

### Demanda mista (vários eixos)
Ex: "preparar evento que tem vídeo + banner + libras + notícia". Em V0, roteia uma vez para `01_gestor` com `payload.context.eixos_envolvidos: [Produção Audiovisual, Comunicação Visual, Libras Interpretação, Conteúdo Digital]`. Gestor decide se cria um card guarda-chuva ou vários cards relacionados. Em V1+, isso vira chain multi-especialista (ver `transcricao_reuniao_multi_especialista` comentado em `workflow-chains.yaml`).

## Passo 5: Na dúvida

Roteia para o gestor com `demanda_extraordinaria` mesmo se você acha que poderia chutar uma categoria. O sistema tolera "dúvida -> humano decide" muito melhor do que "chutei errado -> categoria errada -> card no projeto errado -> retrabalho".

Roteamento é a área de erro mais barata para corrigir; categoria errada no board é a mais cara.

## O que esta árvore NÃO é

- Não é exaustiva. Cobre casos comuns. Edge cases aparecem; documente em `ops/friday-review.md` e atualize esta árvore conforme padrões emergirem.
- Não substitui `_config/workflow-chains.yaml`. As chains definem quais transições são válidas. Esta árvore ajuda a escolher qual chain entrar quando o input é ambíguo.
- Não é autônoma. O orchestrator sempre escreve um 3-line plan, e o plan vai no payload. O gestor vê o raciocínio.
