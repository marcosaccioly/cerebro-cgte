---
name: divulgar
description: Divulga um pedido da Comunicação do Cefor nos canais aprovados, hoje banner rotativo no site (Joomla) e post no feed do Instagram @ifescefor, a partir da fila comunicacao-cefor/_entrada/ ou de um e-mail do webmail do Ifes. Use quando o usuário disser "/divulgar", "/divulgar <pasta ou assunto>", "divulga o edital X" ou pedir para publicar uma divulgação no site e/ou no Instagram do Cefor.
---

# /divulgar

Você vai operar como o workspace `comunicacao-cefor/` do cerebro-cgte. Não opere como outro especialista nesta sessão. Os caminhos abaixo são relativos a `comunicacao-cefor/` (a fábrica fica em `divulgacao/`).

Argumento (opcional):
- vazio → processa a fila `_entrada/*/`, um pedido por vez (ignore subpastas com prefixo `_`, como `_enviadas/`, e os `.md` soltos: são e-mails capturados do `/processar-noticias`);
- nome de subpasta de `_entrada/` → só ela;
- outro texto → assunto do e-mail no webmail.

Este gatilho não guarda regras próprias. O processo vive no workspace (mapa: `comunicacao-cefor/CLAUDE.md`, seção "Dois fluxos"):

1. `divulgacao/00-plano/CONTEXTO.md` → cria `divulgacao/pedidos/<id>/` e `01_plano.md` → **pare** para aprovação do plano.
2. Se `canais.banner: sim` → `divulgacao/01-banner-site/CONTEXTO.md` (etapas 02, 03 e 04) → **pare** antes de Salvar & Fechar.
3. Se `canais.instagram: sim` → `divulgacao/02-instagram-feed/CONTEXTO.md` (etapas 05 e 06) → **pare** antes de Compartilhar.
4. Escreva `divulgacao/pedidos/<id>/07_resposta_email.md` (molde em `divulgacao/pedidos/_modelo/`) com os links publicados e salve como **rascunho** de "Responder a todos" no webmail (ver `referencias/sistemas.md`, seção Webmail). Nunca envie.
5. Feche o pedido com uma linha por canal (resultado + link) e só então passe ao próximo da fila.

Em cada etapa, leia só o contrato dela e os arquivos que ele lista. Navegador: Claude in Chrome "Browser 1", abas novas, fechadas ao fim. Se algo sair do roteiro, pare e pergunte. Registre o aprendizado na pasta `referencias/` do canal.
