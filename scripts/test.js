// Runs every test file, several at a time, the slowest first.
//
//   node scripts/test.js                  all test files, 4 at a time
//   node scripts/test.js --fast           leave out the slow files (the ones in SLOW; about 20 s or more alone)
//   node scripts/test.js --jobs 8         more at a time
//   node scripts/test.js --serial         one at a time (the old `bun test`)
//   node scripts/test.js <path or filter> only the files whose path contains it (e.g. kb, move-effects)
//
// `bun test` runs the files one after another, and a few of them (the real data through clingo, a
// copy of the repo, the moves) take a minute each, so the whole run was the sum. Here the run takes
// about as long as the slowest file. Files run in separate bun processes, so they cannot disturb
// each other; each gets a long time limit because a busy machine slows every test down.
//
// Output: one line per file with its time; the log of a file only when it fails. Exit 1 if any fails.

import { spawn } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { cpus } from 'node:os';
import { join } from 'node:path';
import { progress } from './progress.js';

const SKIP = new Set(['node_modules', 'dist', 'tools', '.git', '.claude']);
// Slow files, slowest first: they use the real data through clingo or copy the repo. `--fast` leaves them out.
const SLOW = ['kb/real', 'refactor-check', 'move-effects', 'kb/mcp', 'refactor-ops', 'scripts/parse-diff', 'kb/clingo', 'kb/atoms', 'kb/candidates'];
const SLOW_FIRST = [...SLOW, 'grammar/grammar'];
const TIME_LIMIT_MS = 180_000;

function testFiles(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) testFiles(p, out);
    else if (/\.(test|spec)\.[cm]?[jt]sx?$/.test(e.name)) out.push(p.split('\\').join('/'));
  }
  return out;
}

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const jobsAt = args.indexOf('--jobs');
const jobs = flag('--serial') ? 1 : jobsAt >= 0 ? Number(args[jobsAt + 1]) : Math.max(2, Math.min(4, Math.floor(cpus().length / 2)));
const filters = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--jobs');

const rank = (f) => {
  const i = SLOW_FIRST.findIndex((s) => f.includes(s));
  return i < 0 ? SLOW_FIRST.length : i;
};
const files = testFiles('.')
  .map((f) => f.replace(/^\.\//, ''))
  .filter((f) => !filters.length || filters.some((x) => f.includes(x)))
  .filter((f) => !flag('--fast') || !SLOW.some((s) => f.includes(s)))
  .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

if (!files.length) {
  console.error('no test file matches', filters.join(' '));
  process.exit(1);
}

const bar = progress({ total: files.length, label: 'files' });
const run = (file) =>
  new Promise((resolve) => {
    const t0 = Date.now();
    bar.start(file.split('/').pop());
    const child = spawn('bun', ['test', file, '--timeout', String(TIME_LIMIT_MS)], { stdio: ['ignore', 'pipe', 'pipe'] });
    let log = '';
    child.stdout.on('data', (d) => (log += d));
    child.stderr.on('data', (d) => (log += d));
    child.on('error', (e) => resolve({ file, ok: false, ms: Date.now() - t0, log: String(e) }));
    child.on('close', (code) => resolve({ file, ok: code === 0, ms: Date.now() - t0, log }));
  });

const t0 = Date.now();
const results = [];
let next = 0;
const worker = async () => {
  while (next < files.length) {
    const r = await run(files[next++]);
    results.push(r);
    bar.print(`${r.ok ? 'ok  ' : 'FAIL'} ${(r.ms / 1000).toFixed(1).padStart(6)}s  ${r.file}`);
    bar.finish(r.file.split('/').pop());
  }
};
await Promise.all(Array.from({ length: Math.min(jobs, files.length) }, worker));

bar.close();
const failed = results.filter((r) => !r.ok);
for (const r of failed) console.log(`\n━━ ${r.file} ━━\n${r.log.trim()}`);
const count = (re) => results.reduce((n, r) => n + Number(re.exec(r.log)?.[1] ?? 0), 0);
console.log(`\n${files.length} files in ${((Date.now() - t0) / 1000).toFixed(0)}s with ${jobs} at a time: ${count(/(\d+) pass/)} pass, ${count(/(\d+) fail/)} fail${failed.length ? `; failing files: ${failed.map((r) => r.file).join(', ')}` : ''}`);
process.exit(failed.length ? 1 : 0);
