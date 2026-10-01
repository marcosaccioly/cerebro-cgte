# 06_verificacao — post confirmado no perfil

Um trabalho: provar que o post está no feed com a legenda certa.

## Entradas
- Trabalho: `pedidos/<id>/01_plano.md` (legenda)

NÃO carregue: nada além do plano.

## Processo
1. Abra https://www.instagram.com/ifescefor/ numa aba nova e abra o primeiro post não fixado do grid.
2. Via JS, leia o texto do `h1` do diálogo (é a legenda) e compare com a do plano.
3. Preencha `pedidos/<id>/06_instagram_verificacao.md`: `resultado`, `url_post` (caminho `/p/<código>/`).

## Saídas
- `pedidos/<id>/06_instagram_verificacao.md`

## Parada humana
Nenhuma. Informe o resultado e o link do post em uma linha.
