# Sistemas usados pela Comunicação do Cefor

Fonte única para endereços, pastas e contas. Os contratos apontam para cá; não copie estes dados para outros arquivos.

## Webmail (origem B dos pedidos)

- URL: https://webmail.ifes.edu.br/owa/#path=/mail (Outlook Web App)
- Os pedidos chegam encaminhados por **Notícias Cefor** (Comunicação Social), com as artes em anexo.
- Achar: clique na mensagem pelo assunto na lista. Leia só o painel de leitura via `javascript_tool`. Não use `get_page_text`, que despeja a caixa de entrada inteira.
- Anexos: liste pelo `aria-label` (`[aria-label*=".jpg"]`, `.png`), que traz nome e tamanho.
- Baixar um anexo: passe o mouse sobre ele → botão "Mais ações" (chevron no canto inferior direito; `document.elementsFromPoint` acha o botão) → "Baixar". O Chrome abre "Salvar como" (ver Navegador).
- Responder como **rascunho** (sem enviar): abra a mensagem → "Responder a todos" (canto superior direito da mensagem) → clique em `[aria-label="Corpo da mensagem"]` → `ctrl+Home` → digite o texto, parágrafos com `Enter` → chevron "v" ao lado dos ícones da barra do editor → **Salvar rascunho**. Confirme "Rascunho salvo às HH:MM" e a mensagem na pasta Rascunhos.
  - A **assinatura é inserida automaticamente** (Elton Vinicius Silva, Programador Visual, CGTE | Cefor). Não repita assinatura no texto.
  - Se a mensagem já tiver um rascunho de resposta aberto, use-o em vez de criar outro.
  - **Nunca** clique em "Enviar" nem use `ctrl+Enter`.

## Pasta de imagens publicadas

- Local: `Z:\` (unidade de rede mapeada)
- URL pública correspondente: `https://publicacoes.ifes.edu.br/cef/<nome-do-arquivo>`
  - Verificado em 2026-09-28: `Z:\BannerNAPNE-SetembroVerde2026.png` → `https://publicacoes.ifes.edu.br/cef/BannerNAPNE-SetembroVerde2026.png`
- Copiar o arquivo para `Z:\` já publica a imagem. Não sobrescreva arquivo existente com o mesmo nome.

## Site do Cefor (Joomla 3.9)

- Site público: https://cefor.ifes.edu.br/
- Administração: https://cefor.ifes.edu.br/administrator
- Usuário: `claudete.ai`. A senha **não** fica no repositório: use a sessão já logada no Chrome ou peça ao usuário para logar.
- Banners: Componentes > Banners > Banners → https://cefor.ifes.edu.br/administrator/index.php?option=com_banners
- Novo banner: https://cefor.ifes.edu.br/administrator/index.php?option=com_banners&view=banner&layout=edit

## Instagram

- Perfil: https://www.instagram.com/ifescefor/ (conta @ifescefor, logada no "Browser 1")
- O post fixado no topo do grid não é o mais recente: para achar o último post, pule os fixados.

## Navegador e shell

- Use o Claude in Chrome. Há 2 Chromes conectados: o logado no webmail, no admin e no Instagram é o **"Browser 1"** (`53718d19-c852-4f0e-8f3b-889fb23de270`). Selecione-o com `select_browser` antes de começar.
- Esse Chrome pergunta onde salvar cada download ("Salvar como"), e o diálogo fica invisível para o Claude. Peça ao usuário para salvar no caminho exato que você indicar.
- Mover, copiar e renomear arquivos (fila → `anexos/`, arte → `Z:\`) depende do Bash. Em 2026-09-28 ele falhava ao iniciar (`add_item … errno 1`). Se falhar, diga ao usuário qual operação fazer à mão, com origem e destino exatos.
