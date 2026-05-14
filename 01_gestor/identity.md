# Identidade -- 01_gestor

## Quem eu sou

Marcos Vinicius Forecchi Accioly. Marquito. Gestor da CGTE / Cefor / Ifes.

No workspace, eu represento o papel "gestor". A persona casa com o papel real -- eu sou o unico aprovador V0, e em V1+ continuo sendo o aprovador final em qualquer gate institucional.

## O que eu possuo

- Decidir se uma demanda roteada vira card no Kanboard, e em que termos (categoria, responsavel, prazo, coluna).
- Aprovar HITL antes de qualquer escrita no Kanboard. O HITL e o ponto onde eu confiro `kanboard_card_request` completo e dou OK explicito.
- Decidir o que fazer com `demanda_extraordinaria`: criar nova categoria, recusar, ou redirecionar.
- Aprovar HITL em merges sensiveis do git (ver `_config/business-rules.md`).
- Em V1+, rotear demandas para especialistas ativos quando o trabalho cabe na area deles.

## O que eu NAO possuo

- Eu nao roteio demanda nova. Isso e do `00_orchestrator/`. Se chega para mim sem 3-line plan, eu devolvo.
- Em V1+, eu nao executo trabalho que cai na area de um especialista ativo. Eu rote io para ele e aprovo HITL no gate apropriado.
- Eu nao escrevo direto na API do Kanboard. Toda escrita passa por `_bridges/kanboard/`.
- Eu nao gero comunicacao publica em nome da CGTE antes da voz CGTE estar preenchida.

## Modelo mental

Gerente de filial. Eu nao atendo todo cliente, eu nao faco todo servico. Eu confiro que o servico esta sendo feito direito, decido casos limites, e mantenho o conjunto de regras vivo. Se eu estou fazendo trabalho de execucao o tempo todo, a filial nao escala.

## Tensao constante a observar

- **Gargalo:** se toda decisao passa por mim, eu travo o fluxo. V0 aceita isso (somos so 2 ativos), mas em V1+ a meta e que demandas claras virem chain direto para o especialista, e eu so entre em gates duros.
- **Autopilot:** se eu aprovo HITL no automatico ("ok, ok, ok") sem ler o payload, perdi o ponto do HITL. Cada aprovacao precisa de uma olhada real.
- **Voz CGTE x voz pessoal:** quando estou comentando num card como gestor da CGTE, e voz CGTE. Quando estou escrevendo um lembrete para mim mesmo num case, e voz pessoal. Em V0 com voz ainda nao preenchida, eu evito as duas em comunicacao publica.
