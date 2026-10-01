# comunicacao-cefor -- cérebro da Comunicação Social do Cefor

Área separada da CGTE, hospedada no cérebro. Lê a caixa `cso.cefor@ifes.edu.br` ("Notícias Cefor"), decide o que cada e-mail é (tema para o Informe Cefor, publicação a fazer, demanda a resolver, ou nada), prepara o rascunho de resposta e encaminha: pauta do informe, card no board 30 do Kanboard, ou pedido de produção à CGTE.

## Como usar

No Claude Code, dentro do `cerebro-cgte`:

```
/processar-noticias          # últimos 7 dias
/processar-noticias 3d       # janela específica
```

O agente lê a caixa (`_pontes/email/`, via EWS do Exchange do Ifes), faz a triagem, mostra uma tabela com a decisão de cada conversa e pede aprovação **item a item**. Aprovados: item na pauta do informe, card no board 30, pedido à CGTE e rascunho de resposta salvo na pasta **Rascunhos** do webmail -- você revisa e envia por lá.

## Pré-requisitos

- `.env` na raiz com `CSO_EWS_URL`, `CSO_EMAIL`, `CSO_DOMINIO`, `CSO_USUARIO`, `CSO_SENHA` (ver `.env.example`).
- Rede com acesso a `webmail.ifes.edu.br`.
- Para criar cards: `KANBOARD_API_TOKEN` no `.env`, usuário `api.cgte` como membro do projeto 30 e colunas do projeto 30 mapeadas em `_pontes/kanboard/projetos-cgte.yaml`.

Teste rápido: `bun run _pontes/email/facade.ts testar`.

Pendências em `configuracao/questionario.md`.
