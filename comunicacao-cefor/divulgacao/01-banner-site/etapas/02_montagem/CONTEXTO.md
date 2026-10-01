# 02_montagem — imagem no ar e HTML pronto

Um trabalho: publicar a arte do site em `Z:\` e gerar o Código personalizado.

## Entradas
- Trabalho: `pedidos/<id>/01_plano.md` (seção `banner`, `aprovado: true`), `pedidos/<id>/anexos/<banner.arte>`
- Referência: `../../referencias/modelo-codigo.html`
- Referência: `../../referencias/regras.md` (Imagem, Texto alternativo)

NÃO carregue: `info.txt`, pedidos anteriores, `joomla-formulario.md`, nada do Instagram.

## Processo
1. Confira (Glob em `Z:\`) se `<nome_arquivo>` já existe. Se o usuário acabou de salvá-lo lá, pule para o passo 3. Se for outro arquivo com o mesmo nome, aplique a regra do `-2` e atualize o plano.
2. Copie a arte para `Z:\<nome_arquivo>` (shell `cp`). Se o Bash falhar, peça ao usuário para copiar e renomear e dê o caminho exato de origem e destino.
3. Abra `https://publicacoes.ifes.edu.br/cef/<nome_arquivo>` no navegador e confirme que a imagem carrega (o título da aba mostra as dimensões).
4. Copie `modelo-codigo.html` e troque os 4 marcadores pelos valores do plano. Não altere a estrutura (classes, `target`, `faixa`).
5. Grave em `pedidos/<id>/02_banner_codigo.html`, substituindo o placeholder.

## Saídas
- `Z:\<nome_arquivo>` (publicado)
- `pedidos/<id>/02_banner_codigo.html`

## Parada humana
Nenhuma: o conteúdo já foi aprovado no plano. Se a URL da imagem não abrir, pare.
