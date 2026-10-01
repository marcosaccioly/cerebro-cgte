# Postar no feed pelo Instagram web

Conta: @ifescefor, logada no Chrome "Browser 1" (ver `../../../referencias/sistemas.md`).

## Passo a passo (definido pelo usuário)
1. Abra https://www.instagram.com/ifescefor/.
2. Menu lateral **Criar** (ícone "+") → **Postar**.
3. **Selecionar do computador** → a arte do feed.
4. Na tela **Cortar**: clique no **botão do canto inferior esquerdo** da imagem (ícone de "selecionar corte"/setas) e escolha **4:5**, para a arte não ser cortada em quadrado. Depois **Avançar**. Não mexa em zoom nem posição.
5. **Avançar** de novo (tela de filtros/ajustes). Não use filtro nem ajuste.
6. Cole a **legenda** do plano.
7. **Compartilhar**: só depois da confirmação do usuário.

## Observações de execução
- **Criar:** o ícone "+" do menu lateral (o `find` não o acha; use screenshot, ele fica abaixo de Notificações). Abre um submenu: **Postar**, Vídeo ao vivo, Anúncio.
- **Imagem:** **não clique** em "Selecionar do computador" (abre a janela do Windows, que o Claude não vê). Use `find` "input type=file do diálogo 'Criar novo post'" e `file_upload` com o caminho absoluto em `pedidos/<id>/anexos/`. Funciona (testado em 2026-09-28).
- **4:5:** as artes do feed da Seleção UAB são 1080×1350. Em 2026-09-28, o post do 89 saiu em 4:5 mesmo sem clicar no botão, mas a prévia de "Cortar" mostrava um quadrado. Clique no botão 4:5 sempre, por garantia (pedido do usuário).
- **Legenda:** campo `contenteditable` "Adicione uma legenda...". Clique nele e digite com `type` parágrafo por parágrafo, com `shift+Enter shift+Enter` entre eles. Confira com `document.querySelector('div[role=dialog] [contenteditable=true]').innerText`.
- **Compartilhar em Threads** vem ligado por padrão (conta ifescefor). Deixe como está.
- **Depois de Compartilhar:** aparece "Seu post foi compartilhado." em ~10 s. Clique em "Concluir".
- **Verificação:** no diálogo do post, `img` com `naturalWidth/naturalHeight` ≈ 0,8 confirma o 4:5.
- **Verificador de segurança do Claude:** às vezes falha em `browser_batch` e `javascript_tool` longos. Ações individuais (`computer`) continuam passando.
