# 01-banner-site — plano aprovado → banner rotativo no site do Cefor

**Pré-requisito:** `pedidos/<id>/01_plano.md` com `aprovado: true` e `canais.banner: sim` (gerado por `../00-plano/`).
**Pronto quando:** o banner aparece em https://cefor.ifes.edu.br/ dentro de um `div.banneritem.item`.

## Etapas

| Etapa | Contrato | Lê (em `pedidos/<id>/`) | Escreve | Parada humana |
|---|---|---|---|---|
| 02 Montagem | `etapas/02_montagem/CONTEXTO.md` | `01_plano.md`, `anexos/` | imagem em `Z:\`, `02_banner_codigo.html` | não |
| 03 Publicação | `etapas/03_publicacao/CONTEXTO.md` | `01_plano.md`, `02_banner_codigo.html` | formulário no Joomla, `03_banner_publicacao.md` | **SIM**: confirmar antes de Salvar & Fechar |
| 04 Verificação | `etapas/04_verificacao/CONTEXTO.md` | `01_plano.md` | `04_banner_verificacao.md` | não |

A numeração continua a do plano (`01_plano.md`); o Instagram segue com 05 e 06.

## Status (em `pedidos/<id>/`)
- `02_banner_codigo.html` ainda placeholder → falta montagem
- `03_banner_publicacao.md` com `salvo: false` → aguardando confirmação para salvar
- `04_banner_verificacao.md` com `resultado: publicado` → banner concluído

## Fábrica
- `referencias/regras.md`: título, alt, nome do arquivo, link, data de encerramento
- `referencias/modelo-codigo.html`: o HTML do Código personalizado
- `referencias/exemplo-publicado.html`: um banner real já no ar
- `referencias/joomla-formulario.md`: formulário do admin, campo a campo
- `../../referencias/sistemas.md`: URLs, pasta Z:\, navegador
