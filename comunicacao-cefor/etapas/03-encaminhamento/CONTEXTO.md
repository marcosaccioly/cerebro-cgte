# Etapa 03 -- Encaminhamento (decisão 2)

Executa, uma a uma, as propostas da triagem que o operador aprovar. Única etapa que escreve fora do registro da triagem; cada escrita passa por HITL.

## Entradas

| Fonte | Arquivo | Para que |
|---|---|---|
| Registro | último `../../triagem/AAAA-MM-DD-HHMM.yaml` (ou o indicado) | propostas com `hitl: pendente` |
| Operadores | `../../configuracao/caixa.yaml` → `hitl.operadores` | quem aprova; vai em `hitl_aprovado_por` |
| Board | `../../../_pontes/kanboard/projetos-cgte.yaml` (projeto 30) | `column_id`, categorias |
| Usuários | `../../../_pontes/kanboard/usuarios-cgte.yaml` | `owner_id` do responsável |
| Schema | `../../../_configuracao/ESQUEMA_ENTREGA.md` | envelope do pedido à CGTE |

## HITL item a item

Para cada item, mostre o contexto uma vez e as propostas em sequência:

```
[TRI-20260929-03] Seleção UAB · 24/09 · "Divulgação do Edital 91.2026 (Professor Regente)"
Tipo: publicacao (+informe) · conf. alta · Por quê: pedido explícito de divulgação de edital com cards anexos.

 (1/3) card → board 30 · [Site + Instagram] Edital 91.2026 -- Professor Regente · resp.: Elton · prazo 2026-09-30
 (2/3) pauta → Informe #57 · ultimas_noticias · "Cefor abre seleção para professor regente (Edital 91.2026)"
 (3/3) resposta → rascunho na caixa:
       Boa tarde.
       Recebido. Vamos publicar no site e nas redes do Cefor.
       Atenciosamente,
       Comunicação Social - Cefor [...]
Aprovar 1/3? y / n / editar
```

- `y` → executa (abaixo) e grava `hitl: aprovado`, `hitl_aprovado_em`, `hitl_aprovado_por`.
- `editar` → ajusta com o operador, mostra de novo; ao aprovar grava `hitl: editado`.
- `n` → `hitl: recusado` + `motivo_recusa`. Nada é executado.
- Sem resposta clara → trate como `n`. "Aprova tudo" não vale: siga mostrando cada proposta.

## Execução por destino

### `informe-pauta`
Acrescente o item em `../../informe/pauta.yaml` (`status: candidato`). `resultado: PAU-...`. Sem card.

### `board-comunicacao` (projeto 30)
1. Se as colunas do projeto 30 ainda estão sem `id` em `projetos-cgte.yaml` ou `KANBOARD_API_TOKEN` está vazio → não executa; `hitl: aguardando_board` e siga.
2. Grave o `kanboard_card_request` aprovado (JSON, sem campos `null`) em `../../saida/<TRI-id>-card.json`.
3. Passe ao operador o comando para rodar **no terminal dele** (o bridge pede `y` de novo; o agente não responde por ele):
   ```powershell
   $env:KANBOARD_PAYLOAD = Get-Content -Raw comunicacao-cefor/saida/TRI-20260929-03-card.json
   bun run _pontes/kanboard/facade.ts criar-tarefa --case TRI-20260929-03
   ```
4. Com o `card_id` e o link impressos, grave `resultado` e apague o JSON.

Card já existente sobre o assunto → mesma rotina com `operacao: adicionar-comentario`.

### `cgte`
1. Próximo case: maior `CASO-<ano>-NNNN` em `../../../casos/` + 1.
2. Crie `casos/CASO-AAAA-NNNN-<slug>/` com `caso.md`, `entregas/EN-001.yaml` (formato 4 de `contrato/entrega.md`) e `artefatos/.gitkeep`.
3. `resultado: CASO-.../EN-001`. Cruze com o card da comunicação, se houver.
4. Daí a CGTE segue o fluxo dela. A comunicação não escreve no board 47.

### `resposta` -- rascunho salvo na caixa
1. Grave o texto aprovado em `../../saida/<TRI-id>-resposta.txt` (só o corpo novo: saudação, mensagem, assinatura).
2. Rode (o agente pode rodar; a aprovação foi no chat e o rascunho **não é enviado**):
   ```
   bun run _pontes/email/facade.ts rascunho --entrada comunicacao-cefor/_entrada/<arquivo>.md --corpo comunicacao-cefor/saida/<TRI-id>-resposta.txt --aprovado-por <operador>
   ```
   `--todos` para "responder a todos" quando o pedido veio com cópia para quem precisa saber.
3. O Exchange cria a resposta ("RE:", destinatário, histórico citado) na pasta **Rascunhos** de cso.cefor. `resultado: "rascunho salvo em <data>"`; apague o `.txt`.
4. Diga ao operador: "Rascunho na pasta Rascunhos do webmail -- revise e envie por lá."

Sem `ews_item_id` (captura manual) → entregue o texto no chat para o operador copiar.

## Saída

1. Registro da triagem atualizado (HITL + resultado em cada proposta).
2. Resumo: aprovados / editados / recusados / aguardando board; cards criados (links); cases abertos; itens na pauta; rascunhos salvos.
3. Sugira `sync` (`../../../_pontes/gitlab/`) para versionar triagem, pauta e cases.
