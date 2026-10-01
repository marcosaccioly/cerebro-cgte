# 03_publicacao — banner cadastrado no Joomla

Um trabalho: preencher o formulário de novo banner e salvar, com confirmação.

## Entradas
- Trabalho: `pedidos/<id>/01_plano.md` (seção `banner`), `pedidos/<id>/02_banner_codigo.html`
- Referência: `../../referencias/joomla-formulario.md`
- Referência: `../../../../referencias/sistemas.md` (seção Site do Cefor)

NÃO carregue: `anexos/`, `regras.md` (já aplicadas), pedidos anteriores.

## Processo
1. Abra o admin no Chrome (aba nova). Se cair na tela de login, peça ao usuário para logar (nunca digite senha).
2. Siga `joomla-formulario.md` campo a campo: Nome, Tipo = Personalizado, Código personalizado, URL do Clique, Categoria, **Fixar = Sim**, aba Opções de Publicação > Encerrar Publicação (digitada com o teclado).
3. Antes de salvar, releia os campos via JS (inclusive `data-alt-value` da data e o Fixar) e compare com o plano.
4. Registre em `pedidos/<id>/03_banner_publicacao.md` o que foi preenchido, com `salvo: false`.
5. **Pare e peça confirmação.** Com o OK, clique em **Salvar & Fechar**. Na lista, confira a mensagem de sucesso e anote o ID. Mude para `salvo: true`.
6. Peculiaridades novas do formulário vão para "Observações de execução" em `joomla-formulario.md`.

## Saídas
- Banner salvo no Joomla
- `pedidos/<id>/03_banner_publicacao.md`

## Parada humana
Obrigatória antes de Salvar & Fechar: salvar publica no site oficial.
