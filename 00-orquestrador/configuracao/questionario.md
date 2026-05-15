# Questionário de Onboarding -- 00-orquestrador

<!-- Lido quando o usuário digita "setup" dentro deste workspace. Em V0 do
     cerebro-cgte, o papel de orquestrador é exercido por Marquito como gestor
     multifuncional -- não há servidor dedicado. Este questionário cobre apenas
     o que precisa ser configurado caso outra pessoa assuma o papel (V1+) ou
     caso o workspace seja replicado em outra coordenadoria. -->

## Status V0: defaults já preenchidos

Em V0, o orquestrador é o próprio Marquito operando o roteamento. O contrato local em `contrato/` carrega os defaults da CGTE / Cefor / Ifes.

**Se você está só usando, pule este setup** e vá direto para `contrato/identidade.md`.

## Quando preencher

- O papel passar a ser exercido por um servidor dedicado.
- O workspace for replicado em outra coordenadoria ou setor.
- A taxonomia do board 47 mudar substancialmente.

## Perguntas (V1+)

### Q1: Quem opera o orquestrador?

- Default V0: `marquito`
- Tipo: nome do servidor (casa com arquivo em `../_configuracao/voz/<nome>.md`)
- Onde grava: `contrato/identidade.md` (seção "Quem eu sou")

### Q2: Fontes de entrada de demanda

- Default: email, conversa de corredor com servidor, reunião da coordenação, notificação do Kanboard institucional
- Tipo: lista
- Onde grava: `contrato/identidade.md` (seção "Especificidades da CGTE")

### Q3: Especialistas-destino disponíveis nas chains

- Default V0: apenas `01-gestor` está ativo
- Tipo: lista de pastas-especialista ativas, declaradas em `../_configuracao/cadeias-fluxo.yaml`
- Onde grava: referência em `contrato/identidade.md` + checagem em `../_configuracao/cadeias-fluxo.yaml`

(Perguntas adicionais conforme o papel ganhar nuance em V1+.)
