# 02-instagram-feed — plano aprovado → post no feed do @ifescefor

**Pré-requisito:** `pedidos/<id>/01_plano.md` com `aprovado: true` e `canais.instagram: sim` (gerado por `../00-plano/`).
**Pronto quando:** o post aparece no topo do grid de https://www.instagram.com/ifescefor/ com a legenda do plano.

## Etapas

| Etapa | Contrato | Lê (em `pedidos/<id>/`) | Escreve | Parada humana |
|---|---|---|---|---|
| 05 Publicação | `etapas/05_publicacao/CONTEXTO.md` | `01_plano.md` (seção `instagram` + legenda), `anexos/<arte do feed>` | post montado, `05_instagram_publicacao.md` | **SIM**: confirmar antes de Compartilhar |
| 06 Verificação | `etapas/06_verificacao/CONTEXTO.md` | `01_plano.md` | `06_instagram_verificacao.md` | não |

## Status (em `pedidos/<id>/`)
- `05_instagram_publicacao.md` com `compartilhado: false` → aguardando confirmação
- `06_instagram_verificacao.md` com `resultado: publicado` → Instagram concluído

## Fábrica
- `referencias/legenda.md`: modelos de legenda tirados de posts reais do perfil
- `referencias/instagram-passo-a-passo.md`: o fluxo Criar > Postar no Instagram web
- `../../referencias/sistemas.md`: navegador e conta
