# Entrega -- 02-design-educacional

> **RASCUNHO V1 (aguardando validação do servidor da área).** O contrato abaixo formaliza o que entra e o que sai deste papel. As cargas (`atendimento_pedagogico`, `recomendacao_pedagogica`, `projeto_pedagogico`, etc.) são propostas pelo gestor em 2026-05-15. Quando o servidor entrar e atender as primeiras demandas, ele pode ajustar campos ou propor novas cargas via Friday review (atualizando também `../../_configuracao/ESQUEMA_ENTREGA.md`).

## O que eu recebo

Em **V1+**, este papel recebe entregas com `papel_destino: 02-design-educacional`. Em **V0** (enquanto o papel está em rascunho), entregas ainda chegam via `../../01-gestor/` -- o gestor distribui manualmente até a chain V1+ ser ativada (Q9 do questionário).

A carga típica de entrada é `atendimento_pedagogico`. Formato proposto:

```yaml
carga:
  atendimento_pedagogico:
    solicitante: "<nome-ou-papel>"            # quem pediu: formador, coordenador, conteudista, equipe-cgte
    eixo_demanda: "<curso | formação | MOOC | material | instrumento avaliativo | suporte AVA | outro>"
    formato_demanda_inicial: "<reunião agendada | email | mensagem rápida | áudio | conversa de corredor>"
    urgencia: "<baixa | média | alta>"
    contexto: "<2-4 frases: público, janela institucional, oferta vinculada, restrições conhecidas>"
    material_anexo: ["<caminho/relativo/ao/case>", "..."]  # opcional; pode estar vazio se a reunião ainda vai acontecer
```

**Regra de leitura:** se a entrada não traz `contexto` em pelo menos 2 frases, devolva ao remetente pedindo o contexto antes de marcar a entrega como `in_progress`. Reunião sem contexto desperdiça os 60 min.

## O que eu produzo

A entrega de saída sempre carrega **um** dos cinco formatos abaixo (escolhido na hora de nomear). Misturar dois formatos numa entrega é sinal de que são duas entregas -- divida.

### Formato 1: `recomendacao_pedagogica`

Saída pequena: 1-3 parágrafos de diagnóstico + ações concretas + risco residual. Não tem produto separado.

```yaml
carga:
  recomendacao_pedagogica:
    diagnostico: "<o problema real, em 1-3 frases>"
    formato_saida: "recomendacao_pedagogica"
    co_criacao: true | false                  # default true; se false, justificar em 'excecao_motivo'
    artefatos:
      - "artefatos/reuniao-YYYY-MM-DD.md"     # transcrição/anotação obrigatória
      - "<outros opcionais>"
    proxima_acao: "<o que o solicitante faz depois, em uma frase, com prazo>"
    risco_residual: "<o que pode dar errado mesmo aplicando a recomendação>"
    excecao_motivo: "<preencher se co_criacao=false>"
```

### Formato 2: `projeto_pedagogico`

Saída média/grande: matriz pedagógica + estrutura + previsão de downstream. Quando o trabalho vira oferta nova (curso, formação, MOOC, oficina, material extenso).

```yaml
carga:
  projeto_pedagogico:
    formato_saida: "projeto_pedagogico"
    co_criacao: true | false
    duracao_estimada_estudante: "<ex: 20h, 4 encontros de 2h, etc>"
    artefatos:
      - "artefatos/reuniao-YYYY-MM-DD.md"
      - "artefatos/matriz-pedagogica-<slug>-vN.md"
      - "<outros>"
    estrutura:
      objetivo_geral: "<uma frase, com verbo de ação>"
      modulos: <n>
      atividade_ancora_por_modulo: true | false
      avaliacao_somativa: "<descrição curta>"
    downstream_previsto:
      - especialista: "<03-audiovisual | 04-comunicacao | 05-acessibilidade | ...>"
        item: "<o que precisa do outro especialista, com prazo se aplicável>"
    bloqueios:
      - "<o que impede a próxima fase de começar (conteudista a definir, voz CGTE pendente, etc.)>"
```

### Formato 3: `produto_pedagogico`

Saída média: um produto específico entregue (roteiro, matriz, sequência didática, instrumento avaliativo, doc de passo a passo). Diferente do projeto: o produto é a unidade entregável, não a oferta completa.

```yaml
carga:
  produto_pedagogico:
    formato_saida: "produto_pedagogico"
    co_criacao: true | false
    tipo_produto: "<roteiro | matriz | sequência didática | rubrica | doc operacional | outro>"
    artefatos:
      - "artefatos/reuniao-YYYY-MM-DD.md"
      - "artefatos/<produto>-vN.md"
    regra_aplicada: "<opcional; quando o produto saiu de aplicação explícita de uma regra do contrato>"
    resultado: "<o que mudou para o solicitante; uma frase>"
    flag_gestor: "<opcional; pattern que pode merecer Friday review>"
```

### Formato 4: `indicacao_ferramenta`

Saída mínima: o que já existe resolve a demanda. Indicação concreta do recurso + por que serve + como acessar.

```yaml
carga:
  indicacao_ferramenta:
    formato_saida: "indicacao_ferramenta"
    co_criacao: false                          # natureza da saída; não vira exceção
    recurso:
      nome: "<nome do recurso/ferramenta/material/MOOC>"
      origem: "<institucional Ifes | OER aberto | parceiro | outro>"
      link_ou_localizacao: "<URL ou caminho>"
    por_que_serve: "<2-3 frases ancoradas no contexto da demanda>"
    como_acessar: "<passos curtos; se exige cadastro/permissão, dizer>"
    artefatos:
      - "artefatos/reuniao-YYYY-MM-DD.md"
```

### Formato 5: `relatorio_pedagogico`

Saída diagnóstica: quando o trabalho é olhar algo que já existe e produzir avaliação/recomendação estruturada (revisão de material publicado, diagnóstico de oferta com problema, etc.). Geralmente termina em proposta -- mas a proposta é parte do relatório, não saída separada.

```yaml
carga:
  relatorio_pedagogico:
    formato_saida: "relatorio_pedagogico"
    co_criacao: true | false
    escopo_analisado: "<o que foi olhado, em uma frase>"
    artefatos:
      - "artefatos/reuniao-YYYY-MM-DD.md"
      - "artefatos/relatorio-<slug>-vN.md"
    achados_principais:
      - "<achado 1, uma frase>"
      - "<achado 2>"
      - "<...>"
    recomendacoes:
      - "<recomendação concreta com responsável e prazo sugerido>"
      - "<...>"
    proxima_decisao: "<quem decide o quê depois deste relatório>"
```

## Para onde a entrega vai

Em **V0**, `papel_destino` da saída é quase sempre `../../01-gestor/` -- ele revisa, decide se vira card no Kanboard (movimento de status, comentário no card existente, ou novo card para downstream).

Em **V1+** com chain ativa, `papel_destino` pode ir:

- Direto para o **solicitante** quando a entrega fecha o atendimento (ex: recomendação aceita pelo formador).
- Para outro **especialista** quando a entrega abre frente downstream (ex: projeto pedagógico precisa de áudiovisual → entrega para `../../03-audiovisual/`).
- Para `../../05-acessibilidade/` desde o desenho, quando a demanda exige libras/legenda/audiodescrição/navegabilidade.
- De volta para `../../01-gestor/` em gates institucionais (orçamento, prazo, comunicação pública em nome da CGTE).

## Mapa de chain

**V0:** não há chain ativa terminando neste papel. A demanda da área é distribuída manualmente pelo gestor.

**V1+ (rascunho pendente -- adicionar em `../../_configuracao/cadeias-fluxo.yaml` na próxima validação com o servidor):**

```yaml
# Rascunho de chain V1+ -- adicionar quando o servidor entrar
- name: atendimento_pedagogico_co_criacao
  description: Profissional da educação interno (formador / coordenador / conteudista) pede atendimento pedagógico. Reunião + anotação + entrega no formato adequado.
  steps:
    - from: 00-orquestrador
      to: 02-design-educacional
      when: "Demanda toca como ensinar / como aprender; público interno CGTE/Cefor/Ifes; conteúdo da disciplina não é a questão."
    - from: 02-design-educacional
      to: 01-gestor
      when: "Entrega pedagógica pronta e exige decisão de prazo/orçamento, ou abre downstream para outro especialista."
    - from: 02-design-educacional
      to: 05-acessibilidade
      when: "Projeto pedagógico precisa de libras/legenda/audiodescrição desde o desenho."
```

Esta chain rascunhada vai para revisão do servidor da área antes de virar oficial em `cadeias-fluxo.yaml`.

## Sobre `atendimento_pedagogico` no schema

A carga `atendimento_pedagogico` (entrada) e as cargas de saída (`recomendacao_pedagogica`, `projeto_pedagogico`, etc.) **ainda não estão documentadas em `../../_configuracao/ESQUEMA_ENTREGA.md`** -- a documentação canônica espera a validação do servidor. Quando validar, adicionar ao ESQUEMA_ENTREGA junto com os formatos existentes (`tarefa_propria`, `tarefa_distribuir`, `demanda_extraordinaria`, etc.).

Em quanto não está no ESQUEMA, este arquivo (`entrega.md`) é a fonte de verdade local.

## Atualização do case

Toda entrega produzida atualiza o `caso.md`:

- Linha no "Log de entregas" descrevendo a entrega em uma frase.
- Caminhos para os `artefatos/` (transcrição + produtos).
- Se a entrega abriu downstream para outro especialista: registrar em "Cards relacionados" / "Cases vinculados".
- Se aplicou uma regra de borda explicitamente: anotar em "Notas" com o nome da regra.

---

**Status:** RASCUNHO V1. Preenchido pelo gestor em 2026-05-15 no branch `design-educacional`. As 5 cargas de saída e a carga de entrada `atendimento_pedagogico` são propostas locais até validação no Friday review pós-onboarding.
