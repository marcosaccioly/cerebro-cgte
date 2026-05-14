# Exemplos -- 00_orchestrator

Tres exemplos cobrindo as tres chains V0: `anotar_tarefa_propria`, `distribuir_tarefa`, `demanda_extraordinaria`. Cada um mostra a demanda de entrada, o 3-line plan, e o handoff produzido.

---

## Exemplo 1: Tarefa propria do gestor (`anotar_tarefa_propria`)

**Demanda chegando (de `inbox/`):**
```
Marquito, anotacao da reuniao de coordenacao de hoje (14/05):
"Preciso preparar os slides do MOOC X (eixo Educacao -> MOOC) ate proxima sexta.
Eu mesmo vou fazer. Sem dependencia de outro servidor."
```

**3-line plan:**
```
Situacao: Marquito mesmo vai preparar slides do MOOC X, prazo 2026-05-23.
Especialista: 01_gestor
Por que: E trabalho do proprio gestor, casa com chain anotar_tarefa_propria. Categoria MOOC do board 47.
```

**Handoff produzido:**
```yaml
handoff_id: HO-001
case_id: CASE-2026-0002-slides-mooc-x
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Criar card no projeto 47 para slides do MOOC X com Marquito como responsavel."
payload:
  routing_rationale:
    situacao: "Marquito mesmo vai preparar slides do MOOC X, prazo 2026-05-23."
    especialista: 01_gestor
    por_que: "Trabalho do proprio gestor; chain anotar_tarefa_propria; categoria MOOC."
  tarefa_propria:
    titulo: "Preparar slides do MOOC X"
    categoria_board_47: "MOOC"
    prazo: 2026-05-23
    descricao: "Slides para o modulo de abertura do MOOC X. Material de referencia disponivel em pasta institucional."
    link_origem: "reuniao://coordenacao-2026-05-14"
```

---

## Exemplo 2: Distribuir tarefa para a equipe (`distribuir_tarefa`)

**Demanda chegando (de `inbox/`):**
```
Email da chefia (Reitoria), 14/05:
"Precisamos de uma noticia institucional sobre o lancamento do Programa Y
para o site do Ifes. Prazo: ate quinta, 22/05. Quem da CGTE pode fazer?"
```

**3-line plan:**
```
Situacao: Reitoria pediu noticia institucional sobre Programa Y, prazo 2026-05-22.
Especialista: 01_gestor
Por que: Demanda externa precisa ser distribuida (eixo Comunicacao -> Conteudo Digital). Em V0, gestor decide responsavel. Em V1+, iria direto para 04_comunicacao.
```

**Handoff produzido:**
```yaml
handoff_id: HO-001
case_id: CASE-2026-0003-noticia-programa-y
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Distribuir noticia sobre Programa Y; precisa de responsavel da area de Comunicacao."
payload:
  routing_rationale:
    situacao: "Reitoria pediu noticia institucional sobre Programa Y, prazo 22/05."
    especialista: 01_gestor
    por_que: "Distribuicao para a equipe; categoria Conteudo Digital; servidora de comunicacao ainda nao ativada em V0."
  tarefa_distribuir:
    titulo: "Noticia institucional sobre lancamento do Programa Y"
    categoria_board_47: "Conteudo Digital"
    responsavel: "a_decidir"
    prazo: 2026-05-22
    descricao: "Demanda da Reitoria. Texto noticioso para o site do Ifes. Material base: ver comunicado do gabinete em anexo da reuniao 2026-05-14."
    coluna_destino: "Inicio autorizado"
    fonte: "Reitoria (email 2026-05-14)"
```

---

## Exemplo 3: Demanda fora das categorias ativas (`demanda_extraordinaria`)

**Demanda chegando (de `inbox/`):**
```
Mensagem de servidor da Pro-Reitoria de Pesquisa, 14/05:
"Voces podem ajudar a montar um piloto de uso de IA para revisao de textos
academicos dos servidores? Nao e curso, nao e producao audiovisual. E um
experimento controlado com 5-10 pessoas durante 2 meses, com metricas."
```

**3-line plan:**
```
Situacao: Piloto IA para revisao academica. Nao casa com Producao Cientifica nem Inteligencia Artificial direto. Hibrido pesquisa + servico.
Especialista: 01_gestor
Por que: Demanda extraordinaria; categoria nao mapeada no board 47; gestor decide criar nova categoria ou recusar.
```

**Handoff produzido:**
```yaml
handoff_id: HO-001
case_id: CASE-2026-0004-piloto-ia-revisao
from_role: 00_orchestrator
to_role: 01_gestor
agent_owner: marquito
created_at: 2026-05-14
status: open
ask: "Decidir: criar nova categoria (ex: 'Experimento Aplicado'), aceitar como Inteligencia Artificial, ou redirecionar."
payload:
  routing_rationale:
    situacao: "Piloto IA para revisao academica, 2 meses, 5-10 pessoas, metricas."
    especialista: 01_gestor
    por_que: "Demanda extraordinaria; sem categoria clara entre as ativas."
  demanda_extraordinaria:
    descricao: "Pro-Reitoria de Pesquisa pediu piloto controlado de uso de IA para revisao de textos academicos. Hibrido pesquisa + servico, 2 meses, 5-10 pessoas, com metricas."
    categorias_consideradas: ["Producao Cientifica", "Inteligencia Artificial", "Formacao e Capacitacao"]
    por_que_nenhuma_serve: "Producao Cientifica e para a CGTE publicar; aqui sao os servidores da Pesquisa publicando. IA cobre a ferramenta, nao a operacao de piloto. Formacao e curso, nao e o caso. Cabe uma nova categoria 'Experimento Aplicado' ou aceitar como IA com nota de escopo."
    sugestao: "criar nova categoria no board 47"
```

---

## O que esses exemplos tem em comum

- O 3-line plan acontece **antes** do handoff. O plan e o trabalho; o handoff e o artefato.
- O `ask` cabe em uma frase. Onde poderia ser duas, foi dividido ou comprimido.
- `payload.routing_rationale` sempre presente -- o receptor le primeiro.
- Toda demanda vira um case mesmo que pareca trivial. Sem case, sem rastreabilidade.
- Em V0, todo handoff de saida do orchestrator vai para `01_gestor/`. Em V1+, alguns iriam direto para especialistas ativos.
