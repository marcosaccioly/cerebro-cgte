---
name: publicar-banner
description: Publica só o banner rotativo na home do site do Cefor para um pedido, sem Instagram. Use quando o usuário disser "/publicar-banner", "/publicar-banner <pasta ou assunto>" ou pedir explicitamente só o banner do site. Para divulgar em todos os canais, use /divulgar.
---

# /publicar-banner

Mesmo fluxo do `/divulgar` (ver `.claude/skills/divulgar/SKILL.md`, na raiz do cerebro-cgte; caminhos relativos a `comunicacao-cefor/`), com uma diferença: no plano (`divulgacao/00-plano/`), marque `canais.instagram: nao` (motivo: "pedido só de banner") e rode apenas `divulgacao/01-banner-site`.

Se o pedido já tem registro em `divulgacao/pedidos/<id>/` com plano aprovado, pule o plano e vá direto para `divulgacao/01-banner-site/CONTEXTO.md`.
