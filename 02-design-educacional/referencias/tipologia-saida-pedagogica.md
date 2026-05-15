# Tipologia de saída pedagógica

Cinco formatos. Cada entrega usa **um**. Misturar dois é sinal de que são duas entregas -- divida.

Este arquivo existe porque "vou te entregar algo" sem nome é a fonte mais comum de retrabalho neste papel: o solicitante esperava A, o papel produziu B, e ninguém detectou até a entrega estar pronta. A escolha do formato é uma decisão -- e tem que acontecer **antes** de produzir, ainda na reunião de escuta (bloco 4).

## Os cinco formatos

| Formato | Tamanho | Tem produto separado? | Co-criação default | Quando cabe |
|---|---|---|---|---|
| `recomendacao_pedagogica` | 1-3 parágrafos | Não (a recomendação é o produto) | Sim | Problema localizado, ação concreta possível em uma reunião |
| `projeto_pedagogico` | Matriz + estrutura | Sim (mas o foco é a estrutura) | Sim | Oferta nova (curso, formação, MOOC, oficina) sendo desenhada |
| `produto_pedagogico` | Um produto específico | Sim, é a entrega | Sim | Roteiro, matriz, sequência, rubrica, doc operacional |
| `indicacao_ferramenta` | Mínima | Não (a indicação é o produto) | Não (natureza, não exceção) | Já existe algo que cobre 80%+ da demanda |
| `relatorio_pedagogico` | Diagnóstico + recomendações | Sim, o relatório | Sim/talvez | Olhar algo que já existe e produzir avaliação estruturada |

## Árvore de decisão

```
Demanda chegou.
│
├── Já existe algo que cobre 80%+?
│     ├── Sim → INDICACAO_FERRAMENTA. Fim.
│     └── Não → continua.
│
├── É olhar algo que já existe e diagnosticar?
│     ├── Sim → RELATORIO_PEDAGOGICO.
│     └── Não → continua.
│
├── É uma oferta nova sendo desenhada (vai virar curso/formação/MOOC/oficina)?
│     ├── Sim → PROJETO_PEDAGOGICO.
│     └── Não → continua.
│
├── O solicitante precisa de UM produto específico (roteiro / rubrica / matriz / doc)?
│     ├── Sim → PRODUTO_PEDAGOGICO.
│     └── Não → RECOMENDACAO_PEDAGOGICA.
```

## Quando cada um cabe (com sinais concretos)

### `recomendacao_pedagogica`

**Cabe quando:**

- A demanda é pontual ("minha avaliação está saturada", "tô em dúvida entre A e B").
- A ação pode ser descrita em uma frase imperativa ("substitua 5 das 12 questões por questões de aplicação").
- Não tem produto separado -- a recomendação **é** o que o solicitante vai usar.
- Tempo do papel: ~30 min de trabalho fora da reunião.

**Não cabe quando:**

- O solicitante vai precisar de algo para abrir e usar depois (vira `produto_pedagogico`).
- A análise é mais longa que a recomendação (vira `relatorio_pedagogico`).
- Há downstream para outro especialista (geralmente vira `projeto_pedagogico` ou `produto_pedagogico`).

### `projeto_pedagogico`

**Cabe quando:**

- A demanda é desenhar uma oferta nova: curso completo, formação curta, MOOC, oficina, capacitação institucional.
- Há mais de um módulo / mais de uma atividade / mais de um momento de avaliação.
- O trabalho vai gerar entregas downstream (audiovisual, comunicação visual, acessibilidade, etc.).
- Tempo do papel: 2-6h de trabalho fora da reunião + reuniões secundárias com conteudista/coordenador.

**Não cabe quando:**

- A demanda é só um pedaço da oferta (vira `produto_pedagogico`).
- A oferta já existe e está sendo revisada (vira `relatorio_pedagogico` se for diagnóstico ou `produto_pedagogico` se for um pedaço específico).

### `produto_pedagogico`

**Cabe quando:**

- A entrega é um único artefato bem definido: roteiro de aula, matriz pedagógica isolada, sequência didática, rubrica, instrumento avaliativo, doc operacional para o professor.
- O produto fecha a demanda (não abre downstream novo).
- Tempo do papel: 1-3h de trabalho fora da reunião.

**Não cabe quando:**

- Tem mais de um produto pedindo coerência entre eles (vira `projeto_pedagogico`).
- O produto é genérico / não cabe em uma frase (provavelmente a demanda ainda não está clara -- volte ao bloco 2 da reunião).

### `indicacao_ferramenta`

**Cabe quando:**

- Já existe recurso institucional (Ifes, Cefor) ou aberto (OER, MOOC) que cobre 80%+ da demanda.
- Esforço de adaptar o existente é menor que esforço de criar.
- `co_criacao` é `false` por natureza -- não tem o que co-criar.

**Não cabe quando:**

- O existente cobre só uma parte (vira `produto_pedagogico` complementar ao existente).
- O solicitante recusa o existente sem motivo institucionalmente defensável -- ainda assim, registre a indicação no payload e a recusa, e siga para o formato escolhido depois.

> **Anti-pattern:** "Vou criar do zero porque o que existe está em inglês / é de fora / não está exatamente como eu quero." Mostre o trade-off (tempo de criação, qualidade comparada, custo de manutenção). Decisão final é do solicitante, mas a tabela é do papel.

### `relatorio_pedagogico`

**Cabe quando:**

- O trabalho é olhar algo que **já existe** e produzir diagnóstico estruturado: oferta que está dando ruim, material publicado com problema, capacitação com baixa adesão.
- A saída inclui achados + recomendações -- mas as recomendações são parte do relatório, não saída separada.
- Tempo do papel: 3-10h dependendo do escopo do que foi olhado.

**Não cabe quando:**

- O trabalho é desenhar do zero (vira `projeto_pedagogico`).
- O diagnóstico cabe em 2 parágrafos (vira `recomendacao_pedagogica`).

## Upgrade / downgrade no meio do trabalho

Acontece. Padrões:

- **`recomendacao_pedagogica` → `produto_pedagogico`.** Acontece quando, durante a recomendação, fica claro que o solicitante precisa de uma rubrica/doc para conseguir aplicar. Faça o upgrade explícito: nova entrega `produto_pedagogico` na sequência da recomendação, no mesmo case.
- **`projeto_pedagogico` → `recomendacao_pedagogica` + `indicacao_ferramenta`.** Acontece quando a reunião de escuta revela que o que o solicitante queria (curso novo) é resolvido por reorganizar material existente + uma recomendação de uso. *Downgrade explícito é vitória institucional* -- menos produção, mesmo resultado.
- **`produto_pedagogico` → `projeto_pedagogico`.** Acontece quando, ao produzir um instrumento avaliativo, fica claro que o curso inteiro precisa ser redesenhado. *Pare e reagende*: produto solto sobre projeto quebrado é desperdício.

## Sobre `co_criacao: false`

Os formatos 1, 2, 3 e 5 têm `co_criacao: true` por default. Quando aparece `co_criacao: false`, **o motivo é obrigatório** no payload (`excecao_motivo`).

Motivos defensáveis:

- "Solicitante em afastamento; produto precisa ficar pronto antes do retorno."
- "Conteudista a definir; rascunho assíncrono para acelerar definição."
- "Saída interna do papel (ex: relatório para gestor) que não envolve solicitante externo."

Motivo NÃO defensável: "Mais rápido eu fazer sozinho." Velocidade é trade contra aprendizagem do solicitante -- raramente vale.

## Status do payload

Toda saída deste papel tem campos comuns (referência: `contrato/entrega.md`):

- `formato_saida` -- o nome do formato, em snake_case.
- `co_criacao` -- bool.
- `artefatos` -- lista de caminhos relativos ao case (transcrição da reunião sempre presente).

E campos específicos por formato (ver `contrato/entrega.md` para os YAMLs completos).

---

**Status:** RASCUNHO V1 -- rascunhado pelo gestor em 2026-05-15. Servidor da área pode adicionar formatos (ex: `oficina_pedagogica` se virar comum), ajustar critérios, ou colapsar formatos que na prática não se diferenciam.
