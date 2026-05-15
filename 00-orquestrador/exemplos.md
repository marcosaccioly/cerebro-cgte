# Exemplos -- 00-orquestrador

Três exemplos cobrindo as três chains V0: `anotar_tarefa_propria`, `distribuir_tarefa`, `demanda_extraordinaria`. Cada um mostra a demanda de entrada, o 3-line plan, e o entrega produzido.

---

## Exemplo 1: Tarefa própria do gestor (`anotar_tarefa_propria`)

**Demanda chegando (de `inbox/`):**
```
Marquito, anotação da reunião de coordenação de hoje (14/05):
"Preciso preparar os slides do MOOC X (eixo Educação -> MOOC) até próxima sexta.
Eu mesmo vou fazer. Sem dependencia de outro servidor."
```

**3-line plan:**
```
Situação: Marquito mesmo vai preparar slides do MOOC X, prazo 2026-05-23.
Especialista: 01-gestor
Por que: É trabalho do próprio gestor, casa com chain anotar_tarefa_propria. Categoria MOOC do board 47.
```

**Entrega produzido:**
```yaml
id_entrega: EN-001
id_caso: CASO-2026-0002-slides-mooc-x
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Criar card no projeto 47 para slides do MOOC X com Marquito como responsável."
carga:
  routing_rationale:
    situacao: "Marquito mesmo vai preparar slides do MOOC X, prazo 2026-05-23."
    especialista: 01-gestor
    por_que: "Trabalho do próprio gestor; chain anotar_tarefa_propria; categoria MOOC."
  tarefa_propria:
    titulo: "Preparar slides do MOOC X"
    categoria_board_47: "MOOC"
    prazo: 2026-05-23
    descricao: "Slides para o módulo de abertura do MOOC X. Material de referência disponível em pasta institucional."
    link_origem: "reunião://coordenacao-2026-05-14"
```

---

## Exemplo 2: Distribuir tarefa para a equipe (`distribuir_tarefa`)

**Demanda chegando (de `inbox/`):**
```
Email da chefia (Reitoria), 14/05:
"Precisamos de uma notícia institucional sobre o lançamento do Programa Y
para o site do Ifes. Prazo: até quinta, 22/05. Quem da CGTE pode fazer?"
```

**3-line plan:**
```
Situação: Reitoria pediu notícia institucional sobre Programa Y, prazo 2026-05-22.
Especialista: 01-gestor
Por que: Demanda externa precisa ser distribuída (eixo Comunicação -> Conteúdo Digital). Em V0, gestor decide responsável. Em V1+, iria direto para 04-comunicacao.
```

**Entrega produzido:**
```yaml
id_entrega: EN-001
id_caso: CASO-2026-0003-noticia-programa-y
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Distribuir notícia sobre Programa Y; precisa de responsável da área de Comunicação."
carga:
  routing_rationale:
    situacao: "Reitoria pediu notícia institucional sobre Programa Y, prazo 22/05."
    especialista: 01-gestor
    por_que: "Distribuição para a equipe; categoria Conteúdo Digital; servidora de comunicação ainda não ativada em V0."
  tarefa_distribuir:
    titulo: "Notícia institucional sobre lançamento do Programa Y"
    categoria_board_47: "Conteúdo Digital"
    responsavel: "a_decidir"
    prazo: 2026-05-22
    descricao: "Demanda da Reitoria. Texto noticioso para o site do Ifes. Material base: ver comunicado do gabinete em anexo da reunião 2026-05-14."
    coluna_destino: "Início autorizado"
    fonte: "Reitoria (email 2026-05-14)"
```

---

## Exemplo 3: Demanda fora das categorias ativas (`demanda_extraordinaria`)

**Demanda chegando (de `inbox/`):**
```
Mensagem de servidor da Pro-Reitoria de Pesquisa, 14/05:
"Voces podem ajudar a montar um piloto de uso de IA para revisão de textos
acadêmicos dos servidores? Não é curso, não é produção audiovisual. É um
experimento controlado com 5-10 pessoas durante 2 meses, com métricas."
```

**3-line plan:**
```
Situação: Piloto IA para revisão acadêmica. Não casa com Produção Científica nem Inteligência Artificial direto. Híbrido pesquisa + serviço.
Especialista: 01-gestor
Por que: Demanda extraordinária; categoria não mapeada no board 47; gestor decide criar nova categoria ou recusar.
```

**Entrega produzido:**
```yaml
id_entrega: EN-001
id_caso: CASO-2026-0004-piloto-ia-revisao
papel_origem: 00-orquestrador
papel_destino: 01-gestor
dono_agente: marquito
criado_em: 2026-05-14
status: open
pedido: "Decidir: criar nova categoria (ex: 'Experimento Aplicado'), aceitar como Inteligência Artificial, ou redirecionar."
carga:
  routing_rationale:
    situacao: "Piloto IA para revisão acadêmica, 2 meses, 5-10 pessoas, métricas."
    especialista: 01-gestor
    por_que: "Demanda extraordinária; sem categoria clara entre as ativas."
  demanda_extraordinaria:
    descricao: "Pro-Reitoria de Pesquisa pediu piloto controlado de uso de IA para revisão de textos acadêmicos. Híbrido pesquisa + serviço, 2 meses, 5-10 pessoas, com métricas."
    categorias_consideradas: ["Produção Científica", "Inteligência Artificial", "Formação e Capacitação"]
    por_que_nenhuma_serve: "Produção Científica é para a CGTE publicar; aqui são os servidores da Pesquisa publicando. IA cobre a ferramenta, não a operação de piloto. Formação é curso, não é o caso. Cabe uma nova categoria 'Experimento Aplicado' ou aceitar como IA com nota de escopo."
    sugestao: "criar nova categoria no board 47"
```

---

## O que esses exemplos tem em comum

- O 3-line plan acontece **antes** do entrega. O plan é o trabalho; o entrega é o artefato.
- O `pedido` cabe em uma frase. Onde poderia ser duas, foi dividido ou comprimido.
- `payload.routing_rationale` sempre presente -- o receptor lê primeiro.
- Toda demanda vira um case mesmo que pareça trivial. Sem case, sem rastreabilidade.
- Em V0, todo entrega de saída do orchestrator vai para `01-gestor/`. Em V1+, alguns iriam direto para especialistas ativos.
