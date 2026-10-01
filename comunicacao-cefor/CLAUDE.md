# comunicacao-cefor

Workspace MWP da **Comunicação Social do Cefor** (caixa `cso.cefor@ifes.edu.br`, "Notícias Cefor", login do webmail `noticias.cefor`, antiga categoria "x_CSO do Cefor" no board 47). **Área separada da CGTE**, hospedada no cérebro: tem caixa de entrada própria, board próprio no Kanboard e operador HITL próprio.

Por que fica fora dos workspaces numerados: a CGTE não é o setor de comunicação (mesmo motivo do rename `04-comunicacao/` → `04-design/`, ver `../04-design/configuracao/questionario.md` Q0). Quando a comunicação precisa de produção da CGTE (arte, vídeo, Libras), ela pede como qualquer solicitante: entrega para `../00-orquestrador/`.

**Status:** em implantação (V1). Captura via EWS testada; triagem, pauta do informe e rascunhos de resposta funcionam; voz em v1. Operadores HITL: Marquito e/ou Elton. Board da comunicação: projeto 30 (ignorar cards anteriores a 2023) -- criação de card aguarda token da API e colunas mapeadas. Pendências em `configuracao/questionario.md`.

## Folder Map

```
comunicacao-cefor/
├── CLAUDE.md          (você está aqui)
├── CONTEXTO.md        (fluxo: captura → triagem → encaminhamento)
├── README.md
├── contrato/          (identidade, regras, exemplos, entrega)
├── configuracao/
│   ├── questionario.md  (onboarding + decisões em aberto)
│   └── caixa.yaml       (caixa, consulta de captura, operador HITL, cadência do informe)
├── etapas/
│   ├── 01-captura/        e-mails da caixa → _entrada/
│   ├── 02-triagem/        decisão 1: informe | publicacao | demanda | sem_acao
│   └── 03-encaminhamento/ decisão 2: pauta do informe | board da comunicação | CGTE | resposta
├── _entrada/          (e-mails capturados, 1 arquivo por thread -- LOCAL, fora do git)
├── triagem/           (registro de cada varredura: AAAA-MM-DD-HHMM.yaml -- estado + auditoria)
├── informe/           (Informe Cefor quinzenal: pauta.yaml + edicoes/)
└── referencias/
    ├── criterios-triagem.md  (árvore de decisão da triagem)
    └── canais-cefor.md       (canais de publicação e o que cabe em cada um)
```

## Triggers

| Comando | Ação |
|---------|------|
| `processar-caixa` (ou `/processar-noticias`) | Roda as 3 etapas em sequência: captura → triagem → encaminhamento com HITL item a item |
| `varrer-caixa [janela]` | Só a etapa 01 (ex.: `varrer-caixa 3d`) |
| `triar` | Só a etapa 02, sobre o que está em `_entrada/` sem triagem |
| `encaminhar` | Só a etapa 03, sobre itens `hitl: pendente` do último registro em `triagem/` |
| `pauta-informe` | Mostra a pauta aberta da próxima edição (`informe/pauta.yaml`) |
| `fechar-informe` | Monta o esqueleto da edição em `informe/edicoes/` (ver `informe/README.md`) |
| `setup` | Roda `configuracao/questionario.md` |
| `status` | Última varredura, itens pendentes de HITL, tamanho da pauta, pendências de setup |

## Routing

| Tarefa | Ir para |
|--------|---------|
| Entender a área | `contrato/identidade.md` |
| Regras (sempre / nunca / borda) | `contrato/regras.md` |
| Decidir o tipo de um e-mail | `referencias/criterios-triagem.md` |
| Escolher canal de publicação | `referencias/canais-cefor.md` |
| Formato dos registros e propostas | `contrato/entrega.md` |
| Montar uma edição do informe | `informe/README.md` |

## O que carregar

| Tarefa | Carregar | NÃO carregar |
|--------|----------|--------------|
| `processar-caixa` | `CONTEXTO.md` + `contrato/regras.md` + `contrato/entrega.md` + `configuracao/caixa.yaml` + a etapa atual | `contrato/exemplos.md` (só se a triagem ficar ambígua), `../historico-cgte/` |
| Triagem ambígua | acima + `referencias/criterios-triagem.md` + `contrato/exemplos.md` | outros workspaces |
| Encaminhar demanda para a CGTE | acima + `../_configuracao/ESQUEMA_ENTREGA.md` + `../_configuracao/cadeias-fluxo.yaml` | contratos dos especialistas da CGTE |
| Rascunhar texto público | `../_configuracao/voz/comunicacao-cefor.md` + `referencias/canais-cefor.md` | voz da CGTE / Marquito |

## Relação com cerebro-cgte

- `../_pontes/email/` -- lê a caixa cso.cefor (EWS) e salva rascunhos de resposta; nunca envia.
- `../_pontes/kanboard/` -- cria card no board 30 (HITL do operador de comunicação, não do gestor da CGTE).
- `../00-orquestrador/` -- porta de entrada da CGTE para demandas de produção vindas daqui.
- `../_configuracao/` -- schema de entrega, cadeias, regras de negócio.
- `../casos/` -- só para demandas que atravessam áreas (ver `contrato/regras.md`).

Mapa geral em `../CLAUDE.md`.
