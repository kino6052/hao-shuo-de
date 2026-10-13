// "Try it before writing" (KB_PLAN.md K20): a refactor applied to a COPY of the repo, the gates run
// on the copy and on today's files, and only what differs is printed. The real files are never written.
//
//   npm run word -- remove kuai4 --check
//   npm run refactor -- refactors/D64.ts --check
//   npm run refactor -- refactors/D64.ts --check --atoms     (also the smallest-set numbers; slow)
//
// What it does:
//   1. copies the repo (not node_modules, .git, dist) to a temp folder and links node_modules;
//   2. writes the changed files into the copy and rebuilds the generated files there;
//   3. runs every gate (scripts/gates.js) in the copy and, at the same time, on today's files;
//   4. prints the gates the change breaks, the ones it fixes, new lines in a gate that fails
//      anyway, and the scoreboard numbers that move;
//   5. removes the copy.
//
// The generated files of today's tree are taken as they are (run `npm run data` first when in doubt),
// so a stale generated file shows up as a difference.

import { cpSync, existsSync, mkdtempSync, rmSync, rmdirSync, symlinkSync } from 'fs';
import { availableParallelism, tmpdir } from 'os';
import { basename, join, relative, sep } from 'path';
import { spawn } from 'child_process';
import { ROOT } from './refactor-lib.js';
import { GATES } from './gates.js';

// not copied: big, rebuilt, or not read by a gate
const SKIP_TOP = new Set(['node_modules', '.git', 'dist', '.claude', '.vite']);

// the files the real `--write` rebuilds, in its order
export const REBUILD = ['build-data.js', 'generate-grammar-overview.js', 'generate-word-usage.js', 'generate-dictionary.js', 'generate-plan-4b.js'];

// -> { status, out } with stdout and stderr in the order they arrived
const exec = (cwd, script, args = [], timeout = 600_000) =>
  new Promise((done) => {
    const child = spawn(process.execPath, [join(cwd, 'scripts', script), ...args], { cwd, stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    const timer = setTimeout(() => child.kill(), timeout);
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (out += d));
    child.on('error', (e) => (clearTimeout(timer), done({ status: 1, out: `${out}${e.message}` })));
    child.on('close', (status) => (clearTimeout(timer), done({ status: status ?? 1, out })));
  });

// runs fn over items, `limit` at a time; the results keep the order of the items
async function pool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await fn(items[i]);
      }
    }),
  );
  return results;
}

const lines = (text) =>
  text
    .split(/\r?\n/)
    .map((l) => l.trimEnd())
    .filter(Boolean);

// -> { [gate]: { ok, lines } } for the gates run in `cwd`
async function runGates(cwd, gates, limit) {
  const done = await pool(gates, limit, async ([name, args]) => {
    const r = await exec(cwd, `${name}.js`, args);
    return [name, { ok: r.status === 0, lines: lines(r.out) }];
  });
  return Object.fromEntries(done);
}

// -> the scoreboard row of the files in `cwd` (null when it does not run)
async function board(cwd, atoms) {
  const r = await exec(cwd, 'kb.js', ['scoreboard', '--json', ...(atoms ? [] : ['--no-atoms'])], 300_000);
  if (r.status !== 0) return null;
  try {
    return JSON.parse(r.out.slice(r.out.indexOf('{'))).row;
  } catch {
    return null;
  }
}

// -> what the change did to the gates: { breaks, fixes, same: [{ gate, added, gone }] }
//    `before` and `after` are what runGates returns
export function compareGates(before, after) {
  const out = { breaks: [], fixes: [], same: [] };
  for (const gate of Object.keys(after)) {
    const a = after[gate];
    const b = before[gate] ?? { ok: true, lines: [] };
    if (b.ok && !a.ok) out.breaks.push({ gate, lines: a.lines });
    else if (!b.ok && a.ok) out.fixes.push({ gate, lines: b.lines });
    else if (!a.ok) {
      const had = new Set(b.lines);
      const has = new Set(a.lines);
      const added = a.lines.filter((l) => !had.has(l));
      const gone = b.lines.filter((l) => !has.has(l));
      if (added.length || gone.length) out.same.push({ gate, added, gone });
    }
  }
  return out;
}

// -> [{ name, before, after }] for every number of the scoreboard that moved
export function compareBoards(before, after) {
  if (!before || !after) return [];
  return Object.keys(after)
    .filter((n) => n !== 'date' && n !== 'label' && before[n] !== after[n])
    .map((name) => ({ name, before: before[name], after: after[name] }));
}

// -> { gates, board, copy } after applying `ws` to a copy of the repo and running the gates there and here.
//    Options (for tests): gates, rebuild, scoreboard, keep.
export async function checkInCopy(ws, { gates = GATES, rebuild = REBUILD, scoreboard = true, atoms = false, keep = false } = {}) {
  const copy = mkdtempSync(join(tmpdir(), 'hsd-check-'));
  const junction = join(copy, 'node_modules');
  const limit = Math.max(2, availableParallelism() - 2);
  let linked = false;
  try {
    cpSync(ROOT, copy, {
      recursive: true,
      filter: (src) => {
        const top = relative(ROOT, src).split(sep)[0];
        return !SKIP_TOP.has(top) && basename(src) !== 'scoreboard.lock';
      },
    });
    if (existsSync(join(ROOT, 'node_modules'))) (symlinkSync(join(ROOT, 'node_modules'), junction, 'junction'), (linked = true));
    ws.write(copy);

    const here = (async () => ({ gates: await runGates(ROOT, gates, limit), board: scoreboard ? await board(ROOT, atoms) : null }))();
    for (const script of rebuild) await exec(copy, script);
    const there = { gates: await runGates(copy, gates, limit), board: scoreboard ? await board(copy, atoms) : null };
    const now = await here;

    return { ...compareGates(now.gates, there.gates), board: compareBoards(now.board, there.board), copy: keep ? copy : null };
  } finally {
    if (!keep) {
      // the link first: removing it must never reach into the real node_modules
      let safe = true;
      if (linked) {
        try {
          rmdirSync(junction);
        } catch {
          safe = false;
        }
      }
      if (safe) rmSync(copy, { recursive: true, force: true });
    }
  }
}

// -> text for the author
export function renderCheck(result, { limit = 25 } = {}) {
  const out = [];
  const show = (ls) => {
    out.push(...ls.slice(0, limit).map((l) => `    ${l}`));
    if (ls.length > limit) out.push(`    … and ${ls.length - limit} more line(s)`);
  };
  for (const { gate, lines: ls } of result.breaks) (out.push(`✗ ${gate} would fail (it passes today)`), show(ls));
  for (const { gate, added, gone } of result.same) {
    out.push(`~ ${gate} fails today and still would, with different output`);
    if (added.length) (out.push('  new:'), show(added));
    if (gone.length) (out.push('  gone:'), show(gone));
  }
  for (const { gate } of result.fixes) out.push(`✓ ${gate} fails today and would pass`);
  if (!result.breaks.length && !result.same.length) out.push('No gate would fail that does not fail today.');
  if (result.board.length) {
    out.push('', 'Scoreboard, today -> after:');
    for (const { name, before, after } of result.board) {
      const d = typeof before === 'number' && typeof after === 'number' ? `  (${after - before > 0 ? '+' : ''}${Math.round((after - before) * 1000) / 1000})` : '';
      out.push(`  ${name}: ${before === '' ? '-' : before} -> ${after === '' ? '-' : after}${d}`);
    }
  } else out.push('', 'The scoreboard numbers do not move.');
  if (result.copy) out.push('', `The copy is kept at ${result.copy}`);
  return out.join('\n');
}
