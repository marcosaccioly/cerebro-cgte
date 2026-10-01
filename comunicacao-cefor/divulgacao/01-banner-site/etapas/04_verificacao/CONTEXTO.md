# 04_verificacao — banner confirmado na home

Um trabalho: provar que o banner está no ar.

## Entradas
- Trabalho: `pedidos/<id>/01_plano.md` (título, `nome_arquivo`, link)

NÃO carregue: nada além do plano.

## Processo
1. Abra https://cefor.ifes.edu.br/ numa aba nova.
2. Via JS, procure `div.banneritem.item` cujo `img[src]` termine em `<nome_arquivo>`. Leia o texto do `h1 a` e o `href`.
3. Confira título e link com o plano. Aparecer 2 vezes é normal (wrapper do módulo + nosso código).
4. Preencha `pedidos/<id>/04_banner_verificacao.md`: `resultado: publicado` ou `ausente`, com o que foi visto.
5. Se estiver ausente: confira no admin se está Publicado, na categoria certa e com a data de início ok. Pode ser cache; tente de novo em alguns minutos.

## Saídas
- `pedidos/<id>/04_banner_verificacao.md`

## Parada humana
Nenhuma. Informe o resultado em uma linha.
