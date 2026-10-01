# CONTEXTO -- comunicacao-cefor

Como um e-mail da caixa `cso.cefor@ifes.edu.br` vira (ou não) trabalho.

## Visão geral

```
caixa cso.cefor@ifes.edu.br
   |
   |  01-captura  (comando: processar-caixa / varrer-caixa)
   v
_entrada/AAAA-MM-DD_HHMM_<chave>.md        1 arquivo por mensagem, local, fora do git
   |
   |  02-triagem  -- DECISÃO 1: que tipo de coisa é?
   v
triagem/AAAA-MM-DD-HHMM.yaml              1 registro por varredura, 1 item por conversa
   |
   |  03-encaminhamento  -- DECISÃO 2: para onde vai?  (HITL item a item)
   |
   +-- informe     --> informe/pauta.yaml                (tema candidato à próxima edição; sem card)
   +-- publicacao  --> card no board 30                  (_pontes/kanboard, HITL)
   +-- demanda     --> comunicação resolve   --> card no board 30 (HITL)
   |               --> produção da CGTE      --> casos/CASO-.../EN-001 --> 00-orquestrador --> board 47
   |               --> outro setor / dúvida  --> resposta redirecionando
   +-- sem_acao    --> fica só no registro da triagem
   |
   +-- todo item que não é sem_acao --> rascunho de resposta na pasta Rascunhos
                                        (_pontes/email, HITL; o envio é humano, pelo webmail)
```

Um e-mail tem **um tipo principal** e pode ter **sinalizações extras** (`tambem`). Exemplo comum: pedido de divulgação de evento = `publicacao` + `tambem: [informe]` (publica agora e entra na próxima edição do informe).

## O que vira card e o que não vira

Nem toda informação vira card. Vira card quando existe **trabalho com dono e entrega**:

- Sim: publicar notícia, post, banner na vitrine, e-mail marketing; responder/resolver uma demanda que leva mais que uma resposta rápida; montar uma edição do informe (1 card por edição).
- Não: tema candidato ao informe (vai para a pauta), cópia informativa, newsletter externa, confirmação automática, spam.

## Etapas

| Etapa | Entrada | Saída | HITL? |
|---|---|---|---|
| `etapas/01-captura/` | caixa (via `_pontes/email/`, EWS) ou e-mail colado/salvo | arquivos em `_entrada/` | não (só leitura) |
| `etapas/02-triagem/` | `_entrada/` sem triagem | `triagem/AAAA-MM-DD-HHMM.yaml` com `hitl: pendente` | não (é proposta) |
| `etapas/03-encaminhamento/` | itens pendentes do registro | pauta atualizada, cards criados, entregas para a CGTE, rascunhos | **sim, item a item** |

Cada etapa tem seu `CONTEXTO.md` com entradas, processo e saída.

## Estado e deduplicação

O registro em `triagem/` é o estado do sistema. Um e-mail já foi processado se o `mensagem_id` dele aparece em algum `triagem/*.yaml` (o script de captura já pula esses). Se a conversa ganhou mensagem nova (resposta, complemento), ela volta como item novo com `atualiza: <id do item anterior>`.

A caixa continua sendo a fonte. O cérebro só lê -- a única escrita é salvar rascunho de resposta na pasta Rascunhos, depois do HITL. Nada é enviado, marcado, movido ou apagado.

## Quando abrir um case

Só quando a demanda **atravessa áreas** (comunicação pede produção à CGTE) ou tem várias etapas com vários envolvidos. Publicação simples vive no card do board da comunicação + registro da triagem; não precisa de case.

## Ordem de leitura ao assumir o papel

| Passo | Arquivo |
|-------|---------|
| 1 | `contrato/identidade.md` |
| 2 | `contrato/regras.md` |
| 3 | `referencias/criterios-triagem.md` |
| 4 | `contrato/entrega.md` |
| 5 | `contrato/exemplos.md` |
