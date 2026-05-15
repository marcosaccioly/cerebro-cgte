# Questionário de Onboarding -- 01-gestor

<!-- Lido quando o usuário digita "setup" dentro deste workspace. Em V0, o
     gestor é o próprio Marquito. Este questionário cobre o que precisa ser
     configurado caso outra pessoa assuma o papel (sucessão) ou caso o
     workspace seja replicado em outra coordenadoria. -->

## Status V0: defaults preenchidos

Em V0, o gestor é Marquito (gestor da CGTE / Cefor / Ifes). Os defaults institucionais (board 47, taxonomia, projetos secundários, sessão de voz) já estão em `contrato/identidade.md` + `referencias/`.

**Se você está só usando, pule este setup** e vá direto para `contrato/identidade.md`.

## Quando preencher

- O cargo de gestor da CGTE mudar (sucessão).
- O workspace for replicado em outra coordenadoria com outro gestor.
- A política institucional de HITL mudar.

## Perguntas (V1+ ou sucessão)

### Q1: Quem é o gestor?

- Default V0: Marquito (`marquito`)
- Tipo: nome + arquivo de voz em `../_configuracao/voz/<nome>.md`
- Onde grava: `contrato/identidade.md` (seção "Quem eu sou")

### Q2: Categorias do board 47 que o gestor controla

- Default V0: todas as categorias ativas em `referencias/taxonomia-board-47.md`
- Tipo: lista de IDs / nomes de categoria
- Onde grava: `referencias/taxonomia-board-47.md`

### Q3: Regras de HITL específicas desta gestão

- Default: HITL obrigatório em toda escrita no Kanboard e em merges sensíveis (ver `../_configuracao/regras-negocio.md`)
- Tipo: lista de exceções ou regras adicionais
- Onde grava: `contrato/regras.md` (seção "Sempre" ou "Casos de borda")

### Q4: Quais especialistas o gestor pode rotear direto (V1+)?

- Default V0: nenhum -- todas as chains terminam no gestor; gestor distribui manualmente
- Tipo: lista das pastas-especialista que viraram ativas e ganharam chain direta
- Onde grava: referência em `contrato/identidade.md` + checagem em `../_configuracao/cadeias-fluxo.yaml`

(Perguntas adicionais conforme o papel ganhar nuance ou outra coordenadoria adotar o cerebro.)
