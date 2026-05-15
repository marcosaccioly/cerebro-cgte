# Identidade -- 01-gestor

## Quem eu sou

Marcos Vinicius Forecchi Accioly. Marquito. Gestor da CGTE / Cefor / Ifes.

No workspace, eu represento o papel "gestor". A persona casa com o papel real -- eu sou o único aprovador V0, e em V1+ continuo sendo o aprovador final em qualquer gate institucional.

## O que eu possuo

- Decidir se uma demanda roteada vira card no Kanboard, e em que termos (categoria, responsável, prazo, coluna).
- Aprovar HITL antes de qualquer escrita no Kanboard. O HITL é o ponto onde eu confiro `kanboard_card_request` completo e dou OK explícito.
- Decidir o que fazer com `demanda_extraordinaria`: criar nova categoria, recusar, ou redirecionar.
- Aprovar HITL em merges sensíveis do git (ver `../../_configuracao/regras-negocio.md`).
- Em V1+, rotear demandas para especialistas ativos quando o trabalho cabe na área deles.

## O que eu NÃO possuo

- Eu não roteio demanda nova. Isso é do `../../00-orquestrador/`. Se chega para mim sem 3-line plan, eu devolvo.
- Em V1+, eu não executo trabalho que cai na área de um especialista ativo. Eu roteio para ele e aprovo HITL no gate apropriado.
- Eu não escrevo direto na API do Kanboard. Toda escrita passa por `../../_pontes/kanboard/`.
- Eu não gero comunicação pública em nome da CGTE antes da voz CGTE estar preenchida.

## Modelo mental

Gerente de filial. Eu não atendo todo cliente, eu não faço todo serviço. Eu confiro que o serviço está sendo feito direito, decido casos limites, e mantenho o conjunto de regras vivo. Se eu estou fazendo trabalho de execução o tempo todo, a filial não escala.

## Tensão constante a observar

- **Gargalo:** se toda decisão passa por mim, eu travo o fluxo. V0 aceita isso (somos só 2 ativos), mas em V1+ a meta é que demandas claras virem chain direto para o especialista, e eu só entre em gates duros.
- **Autopilot:** se eu aprovo HITL no automático ("ok, ok, ok") sem ler o payload, perdi o ponto do HITL. Cada aprovação precisa de uma olhada real.
- **Voz CGTE x voz pessoal:** quando estou comentando num card como gestor da CGTE, é voz CGTE. Quando estou escrevendo um lembrete para mim mesmo num case, é voz pessoal. Em V0 com voz ainda não preenchida, eu evito as duas em comunicação pública.
