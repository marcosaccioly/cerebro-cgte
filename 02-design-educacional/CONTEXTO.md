# CONTEXTO -- 02-design-educacional

Como uma demanda pedagógica flui por este workspace.

## Status atual: RASCUNHO V1

Contratos preenchidos pelo gestor (Marquito) em 2026-05-15 no branch `design-educacional`. Aguardando validação do servidor da área. Em quanto não validar, demandas continuam passando por `../01-gestor/` -- mas qualquer pessoa rodando reunião de escuta pode usar este workspace como referência operacional.

A virada de **RASCUNHO V1 → ATIVO** acontece quando:

1. O servidor da área entra e revisa os 4 contratos em `contrato/`.
2. A chain `atendimento_pedagogico_co_criacao` (rascunho em `contrato/entrega.md`) entra em `../_configuracao/cadeias-fluxo.yaml`.
3. O servidor + gestor rodam uma demanda real ponta-a-ponta com o workspace.

Passo a passo da validação em `configuracao/questionario.md`.

## Fluxo da demanda (4 passos)

1. **Entrada.** Uma demanda chega -- como entrega YAML (em V1+ direto de `../00-orquestrador/`, em V0 via `../01-gestor/`) ou como pedido informal (mensagem, email, conversa). Demanda informal vira case **antes** da reunião acontecer, não depois.
2. **Reunião de escuta.** O ritual fundador (ver `referencias/protocolo-reuniao-escuta.md`). 60 a 90 min. Produz a transcrição/anotação em `../casos/CASO-YYYY-NNNN-shortslug/artefatos/reuniao-YYYY-MM-DD.md`. Decide o formato de saída em uma palavra.
3. **Trabalho.** Co-criação ao lado do solicitante por default; exceção precisa de motivo. Produto final + transcrição ficam no case.
4. **Saída.** Entrega YAML com uma das 5 cargas (`recomendacao_pedagogica`, `projeto_pedagogico`, `produto_pedagogico`, `indicacao_ferramenta`, `relatorio_pedagogico`). Em V0 vai para `../01-gestor/`; em V1+ pode ir direto para outro especialista ou para o solicitante.

## Ordem de leitura ao assumir o papel

| Passo | Arquivo |
|-------|---------|
| 1 | `contrato/identidade.md` -- quem o papel é, modelo mental, fronteiras |
| 2 | `contrato/regras.md` -- sempre / nunca / casos de borda |
| 3 | `contrato/exemplos.md` -- 3 exemplos rascunhados (substituir por reais) |
| 4 | `contrato/entrega.md` -- formatos de saída + cargas YAML |
| 5 | `referencias/protocolo-reuniao-escuta.md` -- o ritual |
| 6 | `referencias/tipologia-saida-pedagogica.md` -- escolher formato |
| 7 | `referencias/arvore-decisao-co-criacao.md` -- como NÃO fazer pelo |
| 8 | `../_configuracao/ESQUEMA_ENTREGA.md` -- envelope canônico |

## Recursos compartilhados

| Recurso | Local | Para que |
|---------|-------|----------|
| Schema canônico do envelope | `../_configuracao/ESQUEMA_ENTREGA.md` | Validar entregas que entram/saem |
| Regras de negócio (HITL, gates) | `../_configuracao/regras-negocio.md` | Saber quando HITL é obrigatório |
| Padrões de qualidade | `../_configuracao/padroes-qualidade.md` | Bar de qualidade |
| Chains válidas | `../_configuracao/cadeias-fluxo.yaml` | Conferir próximo-passo válido |
| Voz CGTE | `../_configuracao/voz/cgte.md` | *Bloqueador V0* para saídas que viram comunicação institucional |
| Trabalho em curso | `../casos/` | Onde cada atendimento mora |

## Categorias do board 47 que este papel cobre

- **MOOC**
- **Conteúdo Educacional**
- **Formação e Capacitação**
- **Programação Visual Educacional** (estrutura pedagógica -- produção visual em `../04-comunicacao/`)

## O que NÃO passa por aqui

- Produção visual / diagramação / identidade visual → `../04-comunicacao/`.
- Vídeo / áudio / transmissão ao vivo → `../03-audiovisual/`.
- Libras, audiodescrição, legendagem, navegabilidade → `../05-acessibilidade/` (envolver desde o desenho).
- Decisão de prazo / orçamento / alocação → `../01-gestor/`.
- Conteúdo técnico da disciplina → conteudista (devolver).
- Operação direta no AVA do professor → não fazer (regra firme; ver `contrato/regras.md`).

## Quando algo não se encaixa

Se a reunião de escuta revela que o problema **não é pedagógico** (é gestão, é técnico, é institucional puro), nomeie e escale. "Isso é gestão de pessoas, não design educacional -- vou registrar e o gestor decide o destino." O sistema tolera "isto não é meu campo" muito melhor do que tolera "chutei e produzi algo que ninguém pediu".
