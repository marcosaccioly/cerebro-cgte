# Árvore de decisão: co-criação ao lado, não execução por procuração

A doutrina deste papel cabe em três palavras: **com, não pelo**. Este arquivo existe para tornar essa doutrina aplicável em casos concretos onde o pull para "fazer pelo" é forte.

## A regra básica

Em toda demanda, o papel ocupa um dos três níveis de envolvimento:

| Nível | O que o papel faz | O que o solicitante faz | Quando cabe |
|---|---|---|---|
| **FAZ COM** | Co-cria ao lado, na mesma reunião / sessão de tela compartilhada | Decide, digita/clica, fica dono do produto | Default. Quase tudo. |
| **ORIENTA** | Sugere caminho, indica recurso, devolve perguntas | Faz o trabalho assíncrono | Solicitante pediu autonomia + tem capacidade |
| **OBSERVA** | Lê o que foi feito, dá feedback estruturado | Já produziu algo, quer revisão | Material já existe; demanda é revisão |

**FAZ PELO** não está nesta tabela. Não é um nível de envolvimento -- é uma falha do contrato. Quando isso acontece, alguma regra precisa ser invocada (geralmente `contrato/regras.md`: "nunca mexa no AVA / Moodle do professor pelo professor").

## Sinais de que você está escorregando para "faço pelo"

O pull para FAZER PELO é silencioso. Estes sinais ajudam a detectar antes do trabalho estar pronto:

- O solicitante não está em nenhum momento da produção -- nem na reunião, nem nas decisões intermediárias, nem na entrega.
- Você está produzindo conteúdo da disciplina (texto, exercício, exemplo) que o solicitante deveria produzir -- e você ainda não devolveu.
- O entregável vai chegar "pronto" para o solicitante apenas validar -- e você está confiante que ele vai aprovar.
- Você está logado em sistema do solicitante (Moodle, AVA) sem ele ao lado.
- A próxima entrega só passa pelo solicitante "no fim".
- Você ouviu de si mesmo: "É mais rápido eu fazer e mandar."

Cada um desses, isolado, pode ser legítimo numa situação de exceção. Dois ou mais juntos = revise antes de continuar.

## Padrões de recuperação

Quando você detectou o escorregão, devolva a tarefa com **andaime** -- não sumindo de uma vez:

### Padrão 1 -- "Vou parar aqui e te chamar"

Para quando o trabalho está no meio e você percebe que está fazendo pelo.

> "Olha, eu comecei a escrever isso aqui mas percebi que sou eu inventando o conteúdo da sua disciplina. Vamos marcar 30 min pra você completar essa parte do material? Eu te entrego o esqueleto pronto e a gente fecha junto."

### Padrão 2 -- "A primeira versão é sua, eu reviso depois"

Para quando o solicitante delegou desde o início e você aceitou.

> "Antes de eu colocar a mão na massa, prefiro que você faça uma primeira versão -- mesmo que seja bruta, em bullets, em rascunho. Eu reviso e a gente fecha. Funciona melhor que eu chutar e você corrigir."

### Padrão 3 -- "Você clica, eu oriento"

Para o cenário Moodle / AVA / sistemas operacionais.

> "Não faço login no seu Moodle, mas marco 1h com você compartilhando tela. Você clica, eu vou te dizendo. Em 1h subimos as 5 atividades e na próxima vez você faz sozinho. Mais rápido que mandar pra mim."

### Padrão 4 -- "Vou produzir, mas a contratação tem retorno explícito"

Para casos de exceção legítima (afastamento, prazo institucional impossível, etc.).

> "Vou fazer assíncrono porque [motivo]. Em 3 dias te entrego. Você revisa em até 2 dias úteis, qualquer mudança grande a gente conversa antes de eu refazer. Combinado?"

Esse padrão deixa o `co_criacao: false` na entrega com `excecao_motivo` preenchido.

## Casos específicos do Cefor / Ifes

### Caso A: formador pedindo "sobe pra mim no Moodle"

**Padrão aplicável:** 3 -- "Você clica, eu oriente".

Por quê: o Moodle do formador é território institucional dele. Mexer ali sem ele cria duas coisas ruins: (1) ele não aprende o caminho operacional, (2) a auditoria do que foi feito fica nebulosa para a CGTE.

### Caso B: coordenadora de curso pedindo desenho de MOOC com "depois envio o conteúdo do conteudista"

**Padrão aplicável:** 1 -- "Vou parar aqui e te chamar".

Por quê: você consegue desenhar a *matriz* pedagógica sem conteúdo (é tarefa sua). Mas conteúdo dos módulos é do conteudista. Quando você termina a matriz e ela vai para o conteudista, você espera ele produzir -- não escreve por ele.

### Caso C: professor com material pronto pedindo revisão pedagógica

**Padrão aplicável:** observar, depois orientar (nível OBSERVA da tabela).

Por quê: o material já existe. Sua tarefa é diagnóstico e recomendação -- não reescrita. Se o diagnóstico for "está tão ruim que precisa reescrever", devolva ao professor com o diagnóstico e prazo razoável; não pegue a reescrita.

### Caso D: equipe CGTE pedindo material institucional (capacitação para servidores da própria CGTE)

**Padrão aplicável:** depende.

- Se há um servidor da CGTE como conteudista/responsável: padrão FAZ COM (mesma regra de qualquer outro).
- Se não há ninguém claro: vira `demanda_extraordinaria` para o gestor decidir quem é o dono do conteúdo antes de você começar. Sem dono, FAZER PELO é o caminho de menor resistência -- e cria a dependência que esse papel tenta evitar.

### Caso E: conteudista pedindo "ajuda" mas na real querendo que você escreva o capítulo

**Sintoma:** a "ajuda" pedida não tem produto específico ("revisa pra mim", "dá uma olhada", "complementa onde achar que falta").

**Resposta:** padrão 2 -- peça a primeira versão. Se ele tem capítulos pela metade, comece pelos pela metade. Se ele tem só ementa, comece pelos objetivos de aprendizagem -- ele escreve, você revisa critério pedagógico.

## Quando "fazer pelo" é legítimo (raro)

Três cenários onde pegar o trabalho integral é defensável:

1. **Afastamento médico/legal do solicitante** em meio a oferta que não pode parar. Documentação: entrega com `co_criacao: false` + `excecao_motivo: "afastamento do solicitante; oferta em curso"`.
2. **Demanda institucional acima do solicitante** com prazo impossível. Ex: reitoria pediu material para amanhã para evento institucional, formador alegou impossibilidade. Aqui você documenta e o gestor decide se cabe.
3. **Trabalho interno da própria CGTE** sem solicitante externo (ex: relatório para gestor). Aqui o "solicitante" é institucional, e o `co_criacao: false` é natureza, não exceção.

Tudo o que não cai nesses três é escorregão.

## A pergunta de teste

Antes de marcar uma entrega como `done`, pergunte:

> Se essa mesma demanda chegasse de novo daqui a 6 meses, o solicitante saberia reproduzir o trabalho sozinho ou com pouca ajuda?

- **Sim** → a co-criação aconteceu. Pode fechar.
- **Não** → você fez pelo. Reabra, com algum dos padrões 1-4 acima.

---

**Status:** RASCUNHO V1 -- rascunhado pelo gestor em 2026-05-15. Casos específicos do Cefor (A-E) virão da prática real do servidor da área; substituir os exemplos atuais conforme aparecer padrão melhor.
