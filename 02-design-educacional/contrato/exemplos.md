# Exemplos -- 02-design-educacional

> **RASCUNHO V1 (aguardando substituição por casos reais).** Os três exemplos abaixo foram rascunhados pelo gestor (Marquito) em 2026-05-15 a partir de demandas plausíveis para a CGTE / Cefor. Quando o servidor da área entrar e atender as primeiras 3 demandas reais via este papel, ele substitui estes exemplos pelas transcrições/anotações + entregas dos casos efetivos. Os casos reais sempre vencem o exemplo rascunhado.

Os três exemplos cobrem três tamanhos diferentes de saída: **recomendação curta**, **projeto pedagógico** e **caso de borda da regra "não mexer pelo professor"**. Cada um mostra: a entrega de entrada (que chegou), o trabalho executado (resumo, não passo a passo) e a entrega de saída (o que foi produzido + para onde foi).

---

## Exemplo 1 — Recomendação curta: formadora pede ajuda com avaliação

**Contexto.** Formadora de uma capacitação interna (40 servidores, EaD assíncrona no Moodle institucional) percebe que a avaliação final está dando 90%+ de acerto em quase todos os participantes -- o que parece bom mas, na conversa de corredor, ela diz "não acredito que todo mundo aprendeu mesmo". Pede uma reunião curta para revisar a avaliação.

**Entrega de entrada (EN-001 de `../../01-gestor/` em V0; em V1+ vem direto de `../../00-orquestrador/`):**

```yaml
id_entrega: EN-001
id_caso: CASO-2026-0007-avaliacao-formacao-pgd
papel_origem: 01-gestor
papel_destino: 02-design-educacional
dono_agente: <servidor-area-educacao>
criado_em: 2026-05-19
status: open
pedido: "Atender formadora da capacitação PGD: avaliação está saturando em 90%+, pedido de revisão pedagógica."
carga:
  atendimento_pedagogico:
    solicitante: "<formadora-x>"
    eixo_demanda: "instrumento avaliativo"
    formato_demanda_inicial: "reunião pedida; sem material prévio"
    urgencia: "média (próxima turma em 3 semanas)"
    contexto: "capacitação institucional PGD, 40 servidores, EaD assíncrona, oferta recorrente."
```

**Trabalho do papel.** Reunião de 50 min na quinta. Transcrição automática + anotações vão para `casos/CASO-.../artefatos/reuniao-2026-05-21.md`. Na escuta destrincha:

- *Pedido literal:* "revisar a avaliação".
- *Demanda real:* a formadora não confia no resultado e quer saber se a avaliação mede o que deveria.
- *Lacuna:* não há mapa entre os objetivos de aprendizagem declarados na ementa e as questões. A maior parte das questões está em nível "lembrar" da taxonomia de Bloom; quase nada em "aplicar" ou "analisar".

Co-criação na reunião: o papel não escreve as questões pela formadora; eles abrem o Moodle juntos, escolhem 5 das 12 questões atuais para substituir, e rascunham as 5 novas alinhadas a objetivos de "aplicar". A formadora digita; o papel orienta o critério (pareamento com objetivo, contexto realista do PGD, distrator plausível para múltipla escolha).

**Entrega de saída (EN-002):**

```yaml
id_entrega: EN-002
id_caso: CASO-2026-0007-avaliacao-formacao-pgd
papel_origem: 02-design-educacional
papel_destino: 01-gestor                            # V0; em V1+ pode ir direto para a formadora-solicitante
dono_agente: <servidor-area-educacao>
criado_em: 2026-05-21
status: done
pedido: "Devolver recomendação curta sobre a avaliação da capacitação PGD com 5 questões revisadas em co-criação."
carga:
  recomendacao_pedagogica:
    diagnostico: "Avaliação majoritariamente em nível 'lembrar' (Bloom); saturação em 90%+ é explicada -- o instrumento não mede o que a ementa declara como objetivo (aplicar PGD ao próprio plano)."
    formato_saida: "recomendacao_curta"
    co_criacao: true
    artefatos:
      - "artefatos/reuniao-2026-05-21.md"           # transcrição da reunião
      - "artefatos/5-questoes-revisadas-rascunho.md"  # rascunho co-criado, pendente aprovação da formadora
    proxima_acao: "Formadora valida e sobe as 5 questões revisadas no Moodle até 2026-05-26 (próxima oferta em 3 semanas)."
    risco_residual: "Se a saturação continuar após substituir 5 de 12, a próxima conversa olha o desenho dos módulos, não só o instrumento."
```

Tamanho da saída: ~30 min de trabalho do papel + 50 min de reunião. Não tem produto separado; o produto é a recomendação + o rascunho co-criado.

---

## Exemplo 2 — Projeto pedagógico: coordenadora pede MOOC novo

**Contexto.** Coordenadora de curso EaD do Cefor pede um MOOC sobre "Inteligência Artificial para Professores do Ifes", prazo: próxima janela de oferta (4 meses). Material zero. Equipe esperada: a coordenadora + 1 conteudista (a definir).

**Entrega de entrada (EN-001):**

```yaml
id_entrega: EN-001
id_caso: CASO-2026-0011-mooc-ia-professores
papel_origem: 01-gestor
papel_destino: 02-design-educacional
dono_agente: <servidor-area-educacao>
criado_em: 2026-05-22
status: open
pedido: "Desenhar projeto pedagógico do MOOC IA para Professores do Ifes; oferta em 2026-09."
carga:
  atendimento_pedagogico:
    solicitante: "<coordenadora-y>"
    eixo_demanda: "MOOC -- desenho de novo"
    formato_demanda_inicial: "pedido por email + reunião agendada"
    urgencia: "alta (janela de oferta fechada em 4 meses, produção AV depende disso)"
    contexto: "público misto: professores Ifes com nível variado de exposição à IA (de zero a uso diário); modelo MOOC (sem mentoria)."
```

**Trabalho do papel.** Reunião de 90 min com a coordenadora. Anotações em `artefatos/reuniao-2026-05-23.md`. Co-criação ao vivo da matriz pedagógica.

Na escuta:

- *Pedido literal:* "MOOC sobre IA para professores".
- *Demanda real:* a coordenadora quer que servidores do Ifes saiam do MOOC sabendo *usar* IA no planejamento de aula deles -- não saiba "o que é IA".
- *Lacuna:* não há recorte. "IA para professores" é genre, não escopo.

Indicação do que já existe (regra "antes do novo, o existente"): coordenadora trouxe expectativa de criar do zero; o papel mostra 2 MOOCs internacionais relevantes (em inglês, com legendas) e 1 nacional, mais genérico. A coordenadora decide criar o MOOC do Ifes mesmo assim, motivo: ancoragem no contexto brasileiro de docência pública + na BNCC + nas ferramentas que servidores Ifes têm acesso. *Trade-off registrado.*

Co-criação da matriz na reunião:

- Objetivo geral: "Ao final do MOOC, o cursista usa pelo menos 1 ferramenta de IA generativa para planejar uma aula real da disciplina dele."
- 5 módulos, cada um com 1 atividade-âncora aplicada à própria disciplina do cursista.
- Avaliação somativa: rubrica de um plano de aula real, não prova de conteúdo.

**Entrega de saída (EN-002):**

```yaml
id_entrega: EN-002
id_caso: CASO-2026-0011-mooc-ia-professores
papel_origem: 02-design-educacional
papel_destino: 01-gestor
dono_agente: <servidor-area-educacao>
criado_em: 2026-05-23
status: done
pedido: "Entregar matriz pedagógica do MOOC IA + lista de entregas downstream para audiovisual e comunicação."
carga:
  projeto_pedagogico:
    formato_saida: "projeto_pedagogico"
    co_criacao: true
    duracao_estimada_estudante: "20h (modelo MOOC sem mentoria)"
    artefatos:
      - "artefatos/reuniao-2026-05-23.md"
      - "artefatos/matriz-pedagogica-mooc-ia-v1.md"
      - "artefatos/avaliacao-rubrica-plano-aula-v1.md"
      - "artefatos/levantamento-mooc-existentes.md"
    estrutura:
      objetivo_geral: "Cursista usa 1+ ferramenta de IA generativa para planejar uma aula real da disciplina."
      modulos: 5
      atividade_ancora_por_modulo: true
      avaliacao_somativa: "rubrica plano de aula real"
    downstream_previsto:
      - especialista: "03-audiovisual"
        item: "5 videoaulas de abertura (10 min cada), roteiro a entregar quando conteudista for definido."
      - especialista: "04-comunicacao"
        item: "Identidade visual do MOOC + capa por módulo + thumbnails Moodle."
      - especialista: "05-acessibilidade"
        item: "Libras nas videoaulas + legendas + audiodescrição quando houver imagem informativa."
    bloqueios:
      - "Conteudista a definir (gestor decide com a coordenadora). Sem ele, módulos ficam em rascunho até a definição."
      - "Voz CGTE bloqueia qualquer comunicado público do MOOC; capa institucional aguarda."
```

Tamanho da saída: ~3h de trabalho do papel ao longo de 2 dias + 90 min de reunião. O MOOC ainda não está pronto -- mas o projeto pedagógico está, e tudo downstream consegue começar com base nele.

---

## Exemplo 3 — Caso de borda: "podia subir as atividades no meu Moodle?"

**Contexto.** Formador da capacitação institucional pede ajuda na metade do semestre -- está sobrecarregado e diz "queria simplesmente que vocês subissem as atividades pra mim no Moodle, eu te mando o texto pronto".

**Entrega de entrada (EN-001):**

```yaml
id_entrega: EN-001
id_caso: CASO-2026-0014-suporte-moodle-formador-z
papel_origem: 01-gestor
papel_destino: 02-design-educacional
dono_agente: <servidor-area-educacao>
criado_em: 2026-06-04
status: open
pedido: "Formador pede execução direta no Moodle dele (subir atividades); decidir e devolver."
carga:
  atendimento_pedagogico:
    solicitante: "<formador-z>"
    eixo_demanda: "operação direta no AVA"
    formato_demanda_inicial: "mensagem rápida"
    urgencia: "alta (formador alega sobrecarga, atividade vence em 5 dias)"
    contexto: "capacitação institucional em andamento; formador já operou o Moodle antes, mas relata cansaço."
```

**Trabalho do papel.** Aplica a regra "não mexo no Moodle pelo professor, mexo com" (ver `contrato/regras.md`). Não recusa: oferece alternativa. Marca 1h compartilhando tela na quinta.

Na 1h: o formador clica, o papel orienta. Sobem 5 atividades. Em paralelo, o papel produz um doc curto com print-screens para o formador conseguir replicar sozinho na próxima vez. *Não vai para diagramação -- é doc interno para o formador, não material publicado.*

**Entrega de saída (EN-002):**

```yaml
id_entrega: EN-002
id_caso: CASO-2026-0014-suporte-moodle-formador-z
papel_origem: 02-design-educacional
papel_destino: 01-gestor
dono_agente: <servidor-area-educacao>
criado_em: 2026-06-06
status: done
pedido: "Devolver atendimento ao formador: 5 atividades subidas em co-criação + doc replicável."
carga:
  produto_pedagogico:
    formato_saida: "produto_pedagogico"
    co_criacao: true
    artefatos:
      - "artefatos/sessao-tela-compartilhada-2026-06-06.md"
      - "artefatos/passo-a-passo-subir-atividade-moodle.md"  # print-screens
    regra_aplicada: "Não executar diretamente no AVA do professor; executar conjunto com tela compartilhada."
    resultado: "5 atividades publicadas no Moodle do formador-z; formador relata confiança em replicar."
    flag_gestor: "Se este padrão se repetir (formadores pedindo execução direta), reabrir no friday-review -- pode ser sinal de sobrecarga sistêmica, não caso individual."
```

Tamanho da saída: 1h de reunião compartilhada + 30 min para produzir o doc de passo a passo. Aprendizado fica no formador (replicável) + flag no case para a Friday review.

---

## O que esses três exemplos têm em comum

- **A reunião é o ponto de entrada, sempre.** Mesmo o exemplo 3 (caso de borda) virou reunião compartilhada -- não execução por mensagem.
- **A transcrição/anotação fica em `artefatos/` do case.** A entrega referencia; não duplica.
- **O `formato_saida` é nomeado explicitamente** (`recomendacao_pedagogica`, `projeto_pedagogico`, `produto_pedagogico`). Sem isso, a entrega fica entre formatos.
- **`co_criacao: true` é o default.** Quando false, o motivo entra no payload como exceção.
- **A entrega não é só o produto -- inclui flags / riscos residuais / bloqueios.** O servidor que recebe a entrega downstream precisa saber o que está em aberto.

---

**Status:** RASCUNHO V1. Preenchido pelo gestor em 2026-05-15 no branch `design-educacional`. Substituir por 3 casos reais quando o servidor da área tiver atendido as primeiras demandas.
