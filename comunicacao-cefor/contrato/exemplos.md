# Exemplos -- comunicacao-cefor

Casos **reconstruídos a partir de cards reais do board 47** (`../../historico-cgte/`), reescritos como se tivessem chegado na caixa `noticias.cefor`. Servem para calibrar a triagem. Substituir por e-mails reais da caixa na primeira semana de operação.

## Exemplo 1: evento de pesquisa -- `publicacao` + `informe`

**Origem real:** card #7713 (2025), "Para Notícias Cefor: divulgação do evento II Seminário Pros@tec".

**Chegou:** grupo de pesquisa pede divulgação do seminário (31/10, 8h-18h, auditório do Campus Vila Velha), com lista de palestrantes e links para programação e currículos.

**Triagem:**
```yaml
decisao:
  tipo: publicacao
  tambem: [informe]
  confianca: alta
  por_que: "Pedido explícito de divulgação de evento do Cefor, com data, local e programação."
```

**Encaminhamento:** card no board da comunicação `[Site + Instagram] II Seminário Pros@tec -- 31/10` + item na pauta do informe (seção `vem_ai`, janela 31/10). Se precisar de arte nova: entrega para a CGTE (`demanda_comunicacao`, peça visual).

## Exemplo 2: comissão pede notícia e informe especial -- `publicacao` + `informe`

**Origem real:** card #7808 (2026), Comissão QVT, ação do Mês das Mulheres. Pedido chegou por WhatsApp com fotos: "notícia no site (talvez não dê para colocar fotos)" e "Informe especial".

**Triagem:**
```yaml
decisao:
  tipo: publicacao
  tambem: [informe]
  confianca: alta
  por_que: "Pede notícia no site; também pede Informe especial -- tema de interesse da comunidade interna."
```

**Encaminhamento:** card `[Site] Comissão QVT -- ação do Mês das Mulheres` + item de pauta marcado `secao: especial` para o operador decidir se vira edição especial ou entra na regular. Pedido chegou por WhatsApp: o modo manual (colar no chat) cobre esse caso igual.

## Exemplo 3: vagas de estágio precisando de arte -- `publicacao` + pedido à CGTE

**Origem real:** card #7782 (2026), divulgação de 3 vagas de estágio (Edital 02/2026 Reitoria): carrossel ou stories no Instagram e 1 banner para o site; edital sai no dia seguinte.

**Triagem:**
```yaml
decisao:
  tipo: publicacao
  tambem: []
  confianca: alta
  por_que: "Divulgação de edital com prazo curto; precisa de peças visuais novas."
```

**Encaminhamento:** card `[Instagram + Site] Vagas de estágio -- Edital 02/2026` + `CASO-...` com EN-001 `comunicacao-cefor → 00-orquestrador` pedindo carrossel/stories + banner (`demanda_comunicacao`, peça visual, prazo = antes da publicação do edital). Card e case apontam um para o outro.

## Exemplo 4: campanha multicanal -- `demanda` (comunicação resolve)

**Origem real:** card #7803 (2026), desativação do AVA antigo. Solicitante pediu "proposta de divulgação" estruturada, prévia e multicanal.

**Triagem:**
```yaml
decisao:
  tipo: demanda
  tambem: [informe]
  subdestino: comunicacao
  confianca: media
  por_que: "Não é uma publicação pronta: pede um plano de comunicação; a comunicação precisa decidir canais e calendário."
```

**Encaminhamento:** card `[Campanha] Desativação do AVA antigo -- plano de divulgação` no board da comunicação. Item de pauta do informe só depois do plano aprovado (o operador decide; `falta: ["data de desativação confirmada"]`).

## Exemplo 5: nada a fazer -- `sem_acao` (ilustrativo)

**Chegou:** boletim de outra instituição, confirmação automática de inscrição, cópia informativa de e-mail já resolvido por outra pessoa.

**Triagem:**
```yaml
decisao:
  tipo: sem_acao
  confianca: alta
  por_que: "Newsletter externa sem pedido e sem tema do Cefor."
```

**Encaminhamento:** nenhum. Fica no registro da triagem para não voltar na próxima varredura.
