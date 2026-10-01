# 00-plano — pedido vira plano de divulgação aprovado

Um trabalho: juntar artes e informações de um pedido, decidir os canais e escrever `01_plano.md` para aprovação.

Este é o plano do fluxo `/divulgar`. A triagem dos e-mails da caixa (`/processar-noticias`) é outra coisa e vive em `../../etapas/02-triagem/`.

## Entradas (uma das duas origens)
- **A: fila (preferida).** `../../_entrada/<pasta>/`: artes + `info.txt`. A `_entrada/` é compartilhada com a captura de e-mails: ignore os `.md` soltos (`AAAA-MM-DD_HHMM_<chave>.md`) e as subpastas com prefixo `_` (ex.: `_enviadas/`). O usuário também pode deixar **arquivos soltos** em `_entrada/` com um único `.txt` que traga vários pedidos (separados por `=====`). Nesse caso, agrupe as artes pelo número do edital/assunto no nome do arquivo, crie um registro por pedido e salve o trecho de texto de cada um em `anexos/info.txt`.
- **B: webmail.** O e-mail pelo assunto; como achar e baixar anexos está em `../../referencias/sistemas.md` (seção Webmail).
- Referência: `../01-banner-site/referencias/regras.md` (título, arquivo, datas do banner)
- Referência: `../02-instagram-feed/referencias/legenda.md` (legenda)

NÃO carregue: pedidos anteriores, `joomla-formulario.md`, `instagram-passo-a-passo.md`, contratos dos canais.

## Processo
1. **Registro.** Crie `../pedidos/AAAA-MM-DD_slug/` copiando `../pedidos/_modelo/` (data de hoje; slug curto sem acento, ex. `edital-90-2026`).
2. **Artes.**
   - Origem A: mova as artes e o `info.txt` para `anexos/` (shell `mv`) e apague a subpasta vazia da fila. Se o Bash falhar, deixe os arquivos na fila, aponte no plano o caminho em `_entrada/` e avise o usuário.
   - Origem B: baixe as artes (ver sistemas.md). Se o Chrome abrir "Salvar como", peça ao usuário para salvar em `pedidos/<id>/anexos/`.
3. **Classifique as artes** pelo nome (`Site Cefor` = site; `Posts Instagram`/`Post`/`Feed` = feed; `Story` = story) e, na dúvida, pelo formato (paisagem = site; quadrada ou 4:5 = feed; 9:16 = story).
4. **Canais.** Banner = sim se houver arte do site. Instagram = sim se houver arte do feed. Sem arte para um canal = não (registre o motivo).
5. **Duplicidade.** Antes de propor, confira:
   - banner: na home (https://cefor.ifes.edu.br/) já existe `div.banneritem.item` sobre o mesmo edital/assunto?
   - Instagram: nos primeiros posts de https://www.instagram.com/ifescefor/ já há post com o mesmo edital/assunto?
   Se já existir, marque o canal como `ja_publicado` com a URL e não publique de novo.
6. **Escreva `01_plano.md`**: dados comuns (link, prazo), seção banner (regras.md) e seção Instagram (legenda.md). `aprovado: false`.

## Saídas
- `pedidos/<id>/anexos/*`
- `pedidos/<id>/01_plano.md`

## Parada humana
Mostre o plano em forma de tabela: canais, título do banner, nome do arquivo, data de encerramento, arte do feed e a legenda completa. Com o OK (ou depois da edição do usuário no arquivo), mude para `aprovado: true` e siga para os canais: banner primeiro, depois Instagram.
