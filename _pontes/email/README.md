# _pontes/email

Ponte com a caixa da Comunicação Social do Cefor (`cso.cefor@ifes.edu.br`). NÃO é especialista: é infraestrutura chamada pelo workspace `comunicacao-cefor/`.

## Servidor

O webmail do Ifes (`webmail.ifes.edu.br`) é **Exchange 2019 on-premise** (OWA). A ponte usa o **EWS** (`/EWS/Exchange.asmx`) com Basic auth -- só `fetch` + SOAP, sem biblioteca, sem `bun install`. Mesmo padrão de `_pontes/kanboard/`.

Login: o OWA aceita só o usuário (`noticias.cefor`), mas o EWS exige `DOMINIO\usuario`. O domínio Windows é `UPD1` (DNS `cefetes.br`), descoberto pelo desafio NTLM do servidor. O cliente monta `UPD1\noticias.cefor` a partir de `CSO_DOMINIO` + `CSO_USUARIO`.

## Configuração (`.env` da raiz, fora do git)

```
CSO_EWS_URL=https://webmail.ifes.edu.br/EWS/Exchange.asmx
CSO_EMAIL=cso.cefor@ifes.edu.br
CSO_DOMINIO=UPD1
CSO_USUARIO=noticias.cefor
CSO_SENHA=...
```

## Operações

Rodar a partir da raiz do cerebro-cgte:

| Operação | Escreve na caixa? | O que faz |
|---|---|---|
| `bun run _pontes/email/facade.ts testar` | não | login + totais de Caixa de Entrada, Enviados, Rascunhos |
| `... varrer --dias 7 [--limite 40]` / `--desde AAAA-MM-DD` | não | Caixa de Entrada → `comunicacao-cefor/_entrada/` (pula o que já está em `triagem/` ou já foi capturado; `--forcar` recaptura) |
| `... enviadas --dias 60` | não | Enviados → `comunicacao-cefor/_entrada/_enviadas/` (referência de tom) |
| `... rascunho --entrada <md> --corpo <txt> --aprovado-por <nome> [--todos]` | **só rascunho** | cria resposta ("RE:") na pasta Rascunhos, com o histórico citado; não envia |

Todas imprimem JSON com o resultado.

## Garantias

- Não existe operação de envio, mover, marcar como lido ou apagar. Não é configuração: o código não tem essas chamadas.
- `rascunho` só é chamado depois do HITL do operador (aprovação no chat), e o envio continua humano, pelo webmail.
- `_entrada/` fica fora do git: corpo completo dos e-mails pode ter dado pessoal.

## Erros

- `EWS 401` → usuário/senha recusados. **Não tente outras combinações**: tentativas erradas bloqueiam a conta institucional. Confira `CSO_SENHA` (a senha pode ter sido trocada).
- Erro de rede → pode exigir rede do Ifes/VPN. Use o modo manual da captura.
- `ErrorItemNotFound` no `rascunho` → a mensagem original foi movida ou apagada; responda pelo webmail.

## Arquivos

- `facade.ts` -- CLI e escrita dos arquivos de captura.
- `ews-client.ts` -- chamadas SOAP (GetFolder, FindItem, GetItem, CreateItem SaveOnly).
- `xml.ts` -- parser XML mínimo para as respostas do EWS.
