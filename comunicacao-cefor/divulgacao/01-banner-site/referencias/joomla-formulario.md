# Formulário de banner no admin do Joomla

URLs e conta: `../../../referencias/sistemas.md`.

## Caminho
1. Admin → menu **Componentes** → **Banners** → **Banners** (`index.php?option=com_banners`).
2. Botão verde **Novo** → abre `index.php?option=com_banners&view=banner&layout=edit`.

## Aba Detalhes (padrão)
| Campo | Valor |
|---|---|
| **Nome** (título, obrigatório) | `banner.titulo` do plano |
| **Tipo** | mudar de Imagem para **Personalizado** |
| **Código personalizado** | conteúdo inteiro de `02_codigo.html` |
| **URL do Clique** | `link` do plano (se houver) |
| **Categoria** (coluna da direita) | **Banner rotativo da página inicial** |
| **Fixar** (coluna da direita) | **Sim** |

## Aba Opções de Publicação
| Campo | Valor |
|---|---|
| **Encerrar Publicação** | `banner.encerrar_publicacao` do plano (ex.: `2026-10-13 00:01:00`); em branco se não houver |

## Salvar
- Antes: releia todos os campos via JS (inclusive `data-alt-value` da data e o estado do Fixar) e compare com o plano.
- **Só depois da confirmação do usuário**, clique em **Salvar & Fechar**. Não use "Salvar".
- Resultado esperado: volta para a lista de banners com "Banner salvo com sucesso." e o banner no topo, Publicado (ícone verde). Anote o ID que aparece na coluna ID.

## Observações de execução

Joomla 3.9.14. A sessão do admin fica logada no Chrome "Browser 1".

**Ids dos campos** (preencher via `javascript_tool`):
| Campo | Seletor | Como preencher |
|---|---|---|
| Nome | `#jform_name` | `.value` |
| Tipo | `#jform_type` | `jQuery(...).val('1').trigger('change').trigger('liszt:updated')` (1 = Personalizado). Só depois disso o textarea do código aparece. |
| Código personalizado | `#jform_custombannercode` | `.value` |
| URL do Clique | `#jform_clickurl` | `.value`. **Grava no máximo 200 caracteres** (corta o resto). Inofensivo: o tipo Personalizado usa o link do código. |
| Categoria | `#jform_catid` | `val('206')` + trigger (206 = Banner rotativo da página inicial) |
| Fixar | grupo de botões Sim/Não (`#jform_sticky`, radios) | Clique no **label "Sim"** (fica verde). Confira se o radio de valor `1` está `checked`. *Seletor exato a confirmar na próxima execução.* |
| Encerrar Publicação | `#jform_publish_down` | **Não use `.value` via JS**: o calendário envia `data-alt-value`, e o campo fica vazio ao salvar. Clique no campo, digite `AAAA-MM-DD 00:01:00` com o teclado e pressione Tab. Confira se `data-alt-value` ficou igual. |

**Salvar & Fechar** tem o seletor `button` com texto "Salvar & Fechar" na barra (`#toolbar-save` é o "Salvar"; não use esse).

**Na home:** cada banner aparece como dois `div.banneritem.item` aninhados (wrapper do módulo + o nosso código). É normal.
