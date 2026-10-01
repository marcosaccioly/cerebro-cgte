# Informe Cefor

Boletim do Cefor para a comunidade interna, "enviado toda primeira e terceira semana de cada mês", com edições especiais quando o tema pede. Numeração contínua: a última edição conhecida é a **Especial #56 -- Fevereiro de 2026** (enviada em 2026-03-05). A próxima é a **#57**.

Fonte: edições #51 a #56 (Google Drive, `.docx`) e e-mail de envio da #56 na caixa `cso.cefor`.

## Critério editorial oficial

Texto fixo do rodapé de toda edição -- é o critério da triagem:

> O conteúdo é recebido no endereço cso.cefor@ifes.edu.br de maneira contínua e analisado para inclusão no Informe Cefor. **O que nos interessa?** Eventos realizados; Cursos; Formatura; Participação em eventos; Processos seletivos; Parcerias; Divulgação de eventos do Cefor (Lives, Workday, Aula Inaugural, Palestras, etc).

## Estrutura de uma edição

| Bloco | `secao` na pauta | O que entra | Observado em |
|---|---|---|---|
| Cabeçalho | -- | `Edição #NN - Semana 1/3 - Mês de AAAA` (especial: `Edição Especial #NN - Mês de AAAA`) | todas |
| Destaque | `destaque` | 1 assunto principal com texto próprio, às vezes com "Leia a notícia completa" | #51, #52, #53, #56 |
| Setor informa / Diretoria informa | `setor_informa` | aviso de um setor do Cefor (veículo novo, relatório publicado) | #51, #56 |
| Últimas notícias | `ultimas_noticias` | 2-5 notas: título + 1 parágrafo + link "Leia a notícia completa" (site do Cefor ou do Ifes) | #51-#55 |
| Aniversariantes | -- | aniversariantes do período | #51-#55 |
| IA fazendo história / Insight de IA | -- | texto curto gerado por IA, com crédito "Escrito pela Inteligência Artificial "X" em DD de mês de AAAA." | todas |
| Rodapé fixo | -- | cadência + critério editorial + link "Clique aqui para visualizar o Informe Cefor em uma página separada" | todas |

A triagem da caixa alimenta **destaque, setor_informa e ultimas_noticias**. Aniversariantes e o bloco de IA são montados no fechamento, com o operador (a lista de aniversariantes é dado pessoal: vem do operador na hora e não fica no git).

## Arquivos

```
informe/
├── README.md       (este arquivo)
├── pauta.yaml      (temas candidatos -- alimentado pela triagem)
└── edicoes/
    └── 057.md      (uma edição por arquivo: itens, textos, status)
```

## Como um tema entra na pauta

Pela triagem (`../etapas/02-triagem/`): `tipo: informe` ou `tambem: [informe]` gera proposta de item; aprovado no HITL, entra em `pauta.yaml` com `status: candidato`. Também dá para incluir à mão ("põe na pauta: ...").

Quando a resposta ao solicitante diz que o assunto "seguirá no informe", o item de pauta é criado junto -- a promessa fica rastreável.

## `fechar-informe` -- montar uma edição

1. **Selecionar.** Liste os itens `candidato` que cabem na edição (`configuracao/caixa.yaml` → `informe.proxima_edicao`), por seção. HITL da seleção.
2. **Montar** `edicoes/NNN.md`:
   ```markdown
   ---
   edicao: 57
   tipo: regular              # regular | especial
   semana: 1                  # 1 | 3 (regular)
   mes: "Outubro de 2026"
   status: rascunho           # rascunho | revisao | enviado
   itens: [PAU-20260929-01, PAU-20261002-03]
   ---
   # Edição #57 - Semana 1 - Outubro de 2026
   ## Destaque
   ### <título>
   <parágrafo> -- Leia a notícia completa: <link>
   ## Últimas notícias
   ...
   ## Aniversariantes
   (preencher com o operador)
   ## IA fazendo história
   (gerar com o operador; manter o crédito "Escrito pela Inteligência Artificial ...")
   ```
   Textos na voz editorial de `../../_configuracao/voz/comunicacao-cefor.md`. O que faltar (link, data, foto) fica marcado `FALTA:` no texto.
3. **Marcar a pauta.** Itens escolhidos: `status: aprovado`, `edicao: 57`.
4. **Card da edição.** Proponha **um** card no board da comunicação (projeto 30): `[Informe] Informe Cefor #57 -- Semana 1 - Outubro 2026`. HITL como na etapa 03.
5. **Depois do envio** (humano diagrama no `.docx` e envia): o operador avisa "informe enviado" → edição `status: enviado`, itens `publicado`, `caixa.yaml` com `ultima_edicao: 57` e a data da próxima.

Itens `candidato` que perderam a janela: proponha `descartado` no fechamento, com HITL.
