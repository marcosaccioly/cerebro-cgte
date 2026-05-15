# Ativação em curso -- 02-design-educacional

<!-- Arquivo de estado da ativação. Apagar quando a Fase C (validação pelo
     servidor da área) completar e o workspace virar ATIVO. -->

## Status: RASCUNHO V1 CONCLUÍDO (Fases A + B), aguardando Fase C

Em **2026-05-15**, Marquito (gestor) preencheu o workspace como rascunho a partir do escopo "design educacional + atendimento a profissionais da educação + co-criação", sem o servidor da área presente. Branch: `design-educacional`.

## O que foi feito (Fases A + B)

- ✅ Renomeação da pasta `02-educacao/` → `02-design-educacional/` (`git mv` preserva histórico).
- ✅ Atualização das referências cruzadas no resto do repo (CLAUDE.md raiz, CONTEXTO.md raiz, README.md raiz, `_configuracao/regras-negocio.md`, `_configuracao/padroes-qualidade.md`, `_configuracao/cadeias-fluxo.yaml`, `_configuracao/ESQUEMA_ENTREGA.md`, `_pontes/gitlab/sincronizar.md`, `_pontes/kanboard/usuarios-cgte.yaml`, `01-gestor/referencias/taxonomia-board-47.md`).
- ✅ `contrato/identidade.md` rascunhado: papel, modelo mental ("personal trainer pedagógico"), fronteiras (sem visual, sem prazo/orçamento, sem conteúdo da disciplina, sem mexer no Moodle pelo professor).
- ✅ `contrato/regras.md` rascunhado: 8 regras "sempre", 7 "nunca", 7 casos de borda.
- ✅ `contrato/exemplos.md` rascunhado: 3 exemplos (recomendação curta, projeto pedagógico de MOOC, caso de borda Moodle).
- ✅ `contrato/entrega.md` rascunhado: 1 carga de entrada (`atendimento_pedagogico`) + 5 cargas de saída (`recomendacao_pedagogica`, `projeto_pedagogico`, `produto_pedagogico`, `indicacao_ferramenta`, `relatorio_pedagogico`).
- ✅ `referencias/` com 4 arquivos: protocolo de reunião de escuta, tipologia de saída, árvore de co-criação, glossário Cefor.
- ✅ `CLAUDE.md`, `CONTEXTO.md`, `README.md` deste workspace atualizados refletindo o estado rascunho V1.
- ✅ `configuracao/questionario.md` reescrito como **roteiro de validação** pelo servidor da área (não mais "preenchimento do zero").

## O que falta (Fase C -- depende do servidor da área)

1. **Q1.** Servidor entra e preenche nome em `contrato/identidade.md` ("Quem eu sou") + cria `../../_configuracao/voz/<seu-nome>.md` (sessão de voz separada).
2. **Q2-Q7.** Servidor valida cada item dos contratos (mantém / ajusta / remove) -- ver `configuracao/questionario.md`.
3. **Q8.** Substituir os 3 exemplos rascunhados por 3 atendimentos reais.
4. **Q9.** Migrar a chain `atendimento_pedagogico_co_criacao` rascunhada em `contrato/entrega.md` para `../../_configuracao/cadeias-fluxo.yaml`.
5. **Q10.** Rodar 1 demanda real ponta-a-ponta com gestor olhando junto.
6. **Q11.** Servidor revisa os 4 arquivos em `referencias/` -- corrige definições, adiciona o que faltou, remove o que não usa.
7. Atualizar status em `CLAUDE.md`, `README.md` (deste workspace e da raiz) de RASCUNHO V1 → ATIVO.
8. Apagar este arquivo (`em-curso.md`).
9. Commit + merge do branch `design-educacional` → `main`.

## Como retomar

1. Servidor da área abre este workspace.
2. Digita `setup` -- Claude lê `configuracao/questionario.md` e conduz a validação seção por seção.
3. Para cada item dos contratos, o Claude apresenta o rascunho atual e pergunta: **mantém / ajusta / remove**.
4. Ao final, atualiza o estado para ATIVO e abre o PR / merge.

## Contexto institucional aplicado no rascunho

- **Eixo:** Design Educacional (recorte sharper que "Educação"; cobre as 4 categorias do board 47 do antigo `02-educacao`).
- **Cobertura no board 47:** MOOC, Conteúdo Educacional, Formação e Capacitação, Programação Visual Educacional (estrutura pedagógica).
- **Postura central:** *fazer COM, não PELO* (co-criação ao lado do solicitante).
- **Ritual fundador:** reunião de escuta de 60-90 min antes de qualquer produto.
- **Fronteira AVA:** não mexer no Moodle do professor pelo professor; mexer **com** ele, ao lado.
- **Fronteiras genéricas (default):** não escreve direto no Kanboard (passa por bridge), não decide escopo (gestor decide), não produz comunicação pública sem voz CGTE preenchida.

---

**Status:** Rascunho V1 concluído em 2026-05-15. Aguardando servidor da área para Fase C (validação + Q10).
