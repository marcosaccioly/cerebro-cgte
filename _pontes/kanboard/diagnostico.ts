/**
 * diagnostico.ts -- raio-x read-only das tarefas ABERTAS do projeto principal.
 *
 * NAO escreve nada no board. Traduz os IDs (coluna/categoria/dono) usando os
 * mapas capturados pela varredura em 2026-06-26 e agrega para o gestor priorizar.
 * Se IDs mudarem no board, rodar varredura.ts e atualizar os mapas abaixo.
 *
 * Uso: bun run _pontes/kanboard/diagnostico.ts [--projeto 47]
 */

import { JsonRpcClient } from "./jsonrpc-client.ts";

const COLUNAS: Record<number, string> = {
  235: "Baú de tarefas", 236: "Início autorizado", 237: "Em andamento",
  240: "Em aprovação", 238: "Congelado", 239: "Finalizado",
};

const CATEGORIAS: Record<number, { nome: string; eixo: string }> = {
  0: { nome: "(sem categoria)", eixo: "(sem eixo)" },
  156: { nome: "MOOC", eixo: "educação" }, 157: { nome: "Conteúdo Educacional", eixo: "educação" },
  155: { nome: "Formação e Capacitação", eixo: "educação" }, 152: { nome: "Programação Visual Educacional", eixo: "educação" },
  160: { nome: "Produção Audiovisual", eixo: "audiovisual" }, 161: { nome: "Evento / Transmissão", eixo: "audiovisual" },
  151: { nome: "Comunicação Visual", eixo: "comunicação" }, 153: { nome: "Conteúdo Digital", eixo: "comunicação" },
  164: { nome: "Acessibilidade", eixo: "acessibilidade" }, 163: { nome: "Libras Interpretação", eixo: "acessibilidade" },
  162: { nome: "Libras Tradução", eixo: "acessibilidade" }, 154: { nome: "Interface Digital", eixo: "tech_sistemas" },
  158: { nome: "Inteligência Artificial", eixo: "tech_sistemas" }, 166: { nome: "Gestão / PGD", eixo: "institucional" },
  165: { nome: "Comissão", eixo: "institucional" }, 59: { nome: "Colaboração Institucional", eixo: "institucional" },
  159: { nome: "Produção Científica", eixo: "ciência" }, 167: { nome: "Demanda Extraordinária", eixo: "transversal" },
  54: { nome: "x_CSO do Cefor", eixo: "legado" }, 55: { nome: "x_Demandas da diretoria", eixo: "legado" },
  53: { nome: "x_Estudos e aprendizado", eixo: "legado" }, 61: { nome: "x_Ferramenta / Sistema / Serviço", eixo: "legado" },
  60: { nome: "x_Guias, modelos e tutoriais", eixo: "legado" }, 58: { nome: "x_Recurso educacional", eixo: "legado" },
  57: { nome: "x_Salas Virtuais", eixo: "legado" }, 62: { nome: "x_Projetos-piloto", eixo: "legado" },
};

const USERS: Record<number, string> = {
  0: "(SEM DONO)", 3: "Marquito", 5: "Giovana Munari", 8: "Coordenação CGTE",
  14: "Monia Vignati", 16: "Tiago Corrente", 33: "Adailton Saraiva", 34: "Leonardo Coutinho",
  36: "Aline Carvalho", 39: "Andréia Cáo", 41: "Juliana Cassaro", 44: "Elton Silva",
  64: "Darlan Pinto", 68: "Clara Bodart", 73: "Lorena Sperandio", 74: "CGTE/Cefor (grupo)",
  75: "Yasmin Cardoso", 76: "Notícias Cefor", 88: "Rutinelli Fávero", 93: "Raquel Fortunato",
  96: "Laura Maciel", 100: "Eliana Burgarelli", 102: "Carolina Broedel", 106: "API CGTE",
};

interface Tarefa {
  id: number; title: string; column_id: number; category_id: number;
  owner_id: number; date_due: number; date_modification: number; date_creation: number;
}

const incr = (m: Map<string, number>, k: string) => m.set(k, (m.get(k) ?? 0) + 1);
function tabela(titulo: string, m: Map<string, number>) {
  console.log(`\n${titulo}`);
  for (const [k, n] of [...m.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${k}`);
}

async function main() {
  const projeto = Number.parseInt(process.env.KANBOARD_PROJETO_PRINCIPAL ?? "47", 10);
  const client = new JsonRpcClient();
  const tarefas = await client.call<Tarefa[]>("getAllTasks", { project_id: projeto, status_id: 1 });
  const agora = Math.floor(Date.now() / 1000);
  const ANO = 365 * 24 * 3600;

  console.log(`\n=== DIAGNOSTICO -- projeto ${projeto} -- ${tarefas.length} tarefas abertas ===`);

  const porColuna = new Map<string, number>(), porEixo = new Map<string, number>();
  const porCategoria = new Map<string, number>(), porDono = new Map<string, number>();
  let semDono = 0, semPrazo = 0, legado = 0, parado1a = 0, parado2a = 0;
  const maisAntigos: Tarefa[] = [];

  for (const t of tarefas) {
    const cat = CATEGORIAS[t.category_id] ?? { nome: `cat#${t.category_id}`, eixo: "(desconhecido)" };
    incr(porColuna, COLUNAS[t.column_id] ?? `col#${t.column_id}`);
    incr(porEixo, cat.eixo);
    incr(porCategoria, cat.nome);
    incr(porDono, USERS[t.owner_id] ?? `user#${t.owner_id}`);
    if (t.owner_id === 0) semDono++;
    if (!t.date_due) semPrazo++;
    if (cat.eixo === "legado") legado++;
    const idade = agora - (t.date_modification || t.date_creation);
    if (idade > ANO) parado1a++;
    if (idade > 2 * ANO) parado2a++;
    maisAntigos.push(t);
  }

  tabela("POR EIXO:", porEixo);
  tabela("POR COLUNA:", porColuna);
  tabela("CARGA POR DONO:", porDono);
  tabela("POR CATEGORIA:", porCategoria);

  console.log("\nALERTAS:");
  console.log(`  ${semDono} sem dono | ${semPrazo} sem prazo | ${legado} em categoria legado (x_)`);
  console.log(`  ${parado1a} sem movimento ha +1 ano | ${parado2a} sem movimento ha +2 anos`);

  console.log("\nTOP 8 MAIS PARADOS (ultima modificacao):");
  maisAntigos.sort((a, b) => (a.date_modification || a.date_creation) - (b.date_modification || b.date_creation));
  for (const t of maisAntigos.slice(0, 8)) {
    const ano = new Date((t.date_modification || t.date_creation) * 1000).getFullYear();
    const dono = USERS[t.owner_id] ?? `user#${t.owner_id}`;
    console.log(`  [${ano}] #${t.id} ${t.title.slice(0, 60)} -- ${dono}`);
  }
  console.log("\n=== FIM ===\n");
}

if (import.meta.main) await main();
