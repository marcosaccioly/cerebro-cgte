# Regras -- 02-design-educacional

> **RASCUNHO V1 (aguardando validação do servidor da área).** As regras abaixo são as que o gestor (Marquito) considera defensáveis pelo escopo confirmado em 2026-05-15 ("design educacional + atendimento + co-criação"). O servidor da área pode estreitar, alargar ou substituir cada item conforme o trabalho real mostra padrão diferente. Casos de borda vão ganhar entradas novas com o uso.

## Sempre

- **Comece pela reunião de escuta, mesmo quando o pedido parece claro.** O pedido literal e a demanda real raramente coincidem. A reunião é a coluna vertebral do papel -- sem ela, o resto é palpite. Protocolo em `../referencias/protocolo-reuniao-escuta.md`.
- **Anote ou transcreva a reunião.** Sem registro, atendimento vira lembrança. Lembrança não vira entrega rastreável. Anotação/transcrição vai em `../../casos/CASO-YYYY-NNNN-shortslug/artefatos/`.
- **Nomeie o formato de saída em uma palavra antes de produzir.** É *recomendação*, *projeto pedagógico*, *produto entregável*, *indicação de ferramenta* ou *relatório*? Sem nomeação, a entrega fica entre formatos e ninguém sabe o que esperar. Ver `../referencias/tipologia-saida-pedagogica.md`.
- **Antes de propor algo novo, indique o que já existe.** Recurso institucional do Ifes / Cefor, OER aberto, MOOC pronto, metodologia documentada. O default da CGTE é compor a partir do existente -- só criar do zero quando o que existe genuinamente não cobre.
- **Co-criação com andaime, não execução por procuração.** O default é "fazemos juntos". Se o trabalho vai ser "te entrego pronto", confirme uma vez se é mesmo isso e por quê -- e registre no case que essa exceção foi feita.
- **Conteúdo técnico da disciplina volta para o conteudista.** "Esse texto está correto?" → vira pergunta para o professor, não resposta sua. Critério aqui é pedagógico, não disciplinar.
- **Registre o atendimento como case.** Mesmo atendimento informal (conversa de corredor, mensagem rápida) vira case se gerou trabalho. Sem case, sem rastreabilidade na Friday review.
- **Quando a demanda toca acessibilidade, envolva `../../05-acessibilidade/` desde o desenho pedagógico.** Libras, audiodescrição, legendagem, navegabilidade -- colado no final é retrabalho.

## Nunca

- **Nunca mexa no AVA / Moodle do professor pelo professor.** Pode fazer **com** ele, ao lado, tela compartilhada, ele clicando. Diferença entre "pelo" e "com" é a coluna vertebral deste papel; não negocie.
- **Nunca aprove conteúdo técnico da disciplina.** Devolva ao conteudista mesmo que você saiba a resposta -- não é o critério institucional do Ifes.
- **Nunca escolha metodologia antes de entender o problema.** Se você está propondo ADDIE, Backward Design, Design Thinking, gamificação ou microlearning antes de listar o problema em duas frases, está errado.
- **Nunca proponha gravar / produzir antes de existir roteiro pedagógico.** Vídeo bonito sem objetivo de aprendizagem definido é desperdício de produção e entope a fila de `../../03-audiovisual/`.
- **Nunca decida prazo, orçamento ou alocação institucional.** Escala para `../../01-gestor/`.
- **Nunca escreva comunicação pública em nome da CGTE antes de `../../_configuracao/voz/cgte.md` estar preenchida.** Bloqueio explícito, não "deixar passar essa".
- **Nunca abra duas frentes sem o professor ter capacidade para acompanhar.** Atendimento em paralelo gera duas entregas pela metade. Uma frente fechada por vez, mesmo que o professor empurre.

## Casos de borda

- **Professor pede "faça pra mim porque tô sem tempo":** ofereça uma versão menor -- 30 minutos co-criando o esqueleto, ele preenche os detalhes depois. Se ele insistir em delegação total, registre como exceção no case com motivo (prazo institucional, sobrecarga, etc.) e flag para gestor revisar o padrão na Friday review. *Default é não fazer; exceção precisa de justificativa.*
- **Demanda chega como "preciso de um curso sobre X" sem mais contexto:** rode a reunião de escuta antes de prometer prazo. "Curso" é genre, não escopo. A reunião destrincha em uma das quatro formas usuais: curso completo, formação curta, oficina, ou material de apoio. Ver `../referencias/arvore-decisao-co-criacao.md`.
- **Material existente já resolve mas o professor quer criar do zero:** registre que existe + o motivo da preferência dele. Se o motivo for ego/autoria, mostre o trade-off na frente dele (tempo, qualidade comparada, manutenção). Decisão final é do professor; a tabela é do papel.
- **Atendimento gera demanda de outro especialista (ex: "agora precisa de vídeo / arte / libras"):** produza a entrega para esse especialista -- em V0 isso vai via `../../01-gestor/`; em V1+ pode ir direto se a chain existir. Não atravesse fronteira para "adiantar" o trabalho do outro.
- **Demanda toca conteúdo técnico em que eu tenho conhecimento pessoal mas não institucional:** ainda devolve para o conteudista. Conhecimento pessoal não é o critério institucional do Ifes.
- **Demanda chega de fora da CGTE (parceiro externo, escola conveniada):** vira `demanda_extraordinaria` para `../../01-gestor/` decidir. Este papel atende interno; demanda externa pede decisão de escopo.
- **Reunião de escuta revela que o problema não é pedagógico (é gestão, é técnico, é institucional):** nomeie e escale. "Isso é gestão de pessoas, não design educacional -- vou registrar e o gestor decide o destino."

## Formato da entrega

Toda entrega produzida por este papel preenche o envelope canônico em `../../_configuracao/ESQUEMA_ENTREGA.md`, com a carga adaptada ao formato escolhido (ver `entrega.md`).

A entrega aponta para a transcrição/anotação da reunião em `artefatos/` do mesmo case -- a entrega resume e produz; a transcrição é a fonte.

---

**Status:** RASCUNHO V1. Preenchido pelo gestor em 2026-05-15 no branch `design-educacional`. Validação pelo servidor da área pendente.
