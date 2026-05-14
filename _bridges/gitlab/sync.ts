/**
 * sync.ts -- bridge git com HITL em arquivos sensiveis.
 *
 * Uso:
 *   bun run _bridges/gitlab/sync.ts pull
 *   bun run _bridges/gitlab/sync.ts push
 *   bun run _bridges/gitlab/sync.ts status
 *
 * As regras de sensibilidade vivem em sync.md. Esta implementação mantem
 * a lista hardcoded em sincronia com o markdown. Se o md mudar, atualize aqui.
 *
 * Padrão de HITL: imprime o que vai mudar, exige `y` para confirmar.
 * Qualquer outra resposta cancela. Anti-autopilot deliberado.
 */

import { $ } from "bun";

const SENSITIVE_PATTERNS: RegExp[] = [
  /^_config\/voice\//,
  /^_config\/business-rules\.md$/,
  /^_config\/HANDOFF_SCHEMA\.md$/,
  /^_config\/quality-standards\.md$/,
  /^_config\/workflow-chains\.yaml$/,
  /^\.env($|\.)/,
];

function isSensitive(path: string): boolean {
  return SENSITIVE_PATTERNS.some((p) => p.test(path));
}

async function requireHitl(titulo: string, conteudo: string): Promise<boolean> {
  console.log(`\n=== ${titulo} ===`);
  console.log(conteudo);
  console.log("\nAprovar? Digite `y` para confirmar, qualquer outra coisa cancela.");
  process.stdout.write("> ");

  const decoder = new TextDecoder();
  const chunk = (await Bun.stdin.stream().getReader().read()).value;
  const resposta = chunk ? decoder.decode(chunk).trim() : "";

  return resposta === "y";
}

async function gitStatus(): Promise<void> {
  console.log("\n-- git status --");
  await $`git status --short`;
  console.log("\n-- git log local vs remote --");
  await $`git fetch`.quiet();
  await $`git log --oneline HEAD..@{u}`.nothrow();
  await $`git log --oneline @{u}..HEAD`.nothrow();
}

async function listChangedFilesPush(): Promise<string[]> {
  // Arquivos staged + não staged (workdir) -- queremos cobrir tudo que ainda vai virar commit.
  const result = await $`git diff HEAD --name-only`.text();
  return result.split("\n").map((s) => s.trim()).filter(Boolean);
}

async function listChangedFilesPull(): Promise<string[]> {
  // O que mudaria se fizessemos merge agora.
  await $`git fetch`.quiet();
  const result = await $`git diff HEAD..@{u} --name-only`.nothrow().text();
  return result.split("\n").map((s) => s.trim()).filter(Boolean);
}

async function gitPush(): Promise<void> {
  const changed = await listChangedFilesPush();
  const sensitive = changed.filter(isSensitive);

  if (sensitive.length === 0) {
    console.log("Sem arquivos sensiveis no push. Auto-push.");
    await $`git push`;
    return;
  }

  const diff = await $`git diff HEAD -- ${sensitive}`.text();
  const aprovado = await requireHitl(
    `HITL git push -- ${sensitive.length} arquivo(s) sensivel(is)`,
    `Sensiveis:\n${sensitive.map((s) => `  ${s}`).join("\n")}\n\nDiff:\n${diff}`
  );

  if (!aprovado) {
    console.log("Push cancelado.");
    process.exit(1);
  }

  await $`git push`;
}

async function gitPull(): Promise<void> {
  const changed = await listChangedFilesPull();

  if (changed.length === 0) {
    console.log("Nada a puxar. Repo local esta atualizado.");
    return;
  }

  const sensitive = changed.filter(isSensitive);

  if (sensitive.length === 0) {
    console.log(`${changed.length} arquivo(s) nao sensivel(is) entrando. Auto-merge fast-forward.`);
    await $`git merge --ff-only @{u}`.nothrow();
    return;
  }

  const diff = await $`git diff HEAD..@{u} -- ${sensitive}`.text();
  const aprovado = await requireHitl(
    `HITL git pull -- ${sensitive.length} arquivo(s) sensivel(is)`,
    `Sensiveis:\n${sensitive.map((s) => `  ${s}`).join("\n")}\n\nDiff:\n${diff}`
  );

  if (!aprovado) {
    console.log("Pull cancelado.");
    process.exit(1);
  }

  const mergeResult = await $`git merge @{u}`.nothrow();
  if (mergeResult.exitCode !== 0) {
    console.log("Conflito de merge detectado. Resolva manualmente antes de continuar.");
    process.exit(1);
  }
}

async function main(): Promise<void> {
  const cmd = process.argv[2];

  switch (cmd) {
    case "status":
      await gitStatus();
      break;
    case "push":
      await gitPush();
      break;
    case "pull":
      await gitPull();
      break;
    default:
      console.error("Uso: bun run sync.ts <pull|push|status>");
      process.exit(2);
  }
}

if (import.meta.main) {
  await main();
}
