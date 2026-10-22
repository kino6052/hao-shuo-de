// Runs the test files in three tiers: the quick ones on every commit, the rest before a push or when asked.
//
//   node scripts/test.js --fast           every commit (the hook in .githooks/): the tests that only read
//                                         fixtures and call no solver -- 730 of them, in one bun process
//   node scripts/test.js                  before a push: those and the ones that ask the solver or use the
//                                         real data, in a process each, 4 at a time
//   node scripts/test.js --all            when asked: those and the ones that copy the repo, export a git
//                                         ref or spawn a server
//   node scripts/test.js --jobs 8         more at a time
//   node scripts/test.js --serial         one file at a time, each in its own process
//   node scripts/test.js <path or filter> only the files whose path contains it (e.g. kb, move-effects);
//                                         a filter runs the file whatever tier it is in
//
// Why tiers: the cost is not spread evenly. 730 of the tests are plain functions over the fixture language
// (src/lib/kb/fixture.js) and together take about five seconds; the other six hundred-odd spawn clingo, read
// all the composites, parse the whole book, copy the repo or start a server, and take minutes. Most of the slow
// ones do not catch the mistakes an edit to the book or to a rule makes -- the quick ones do -- they catch a
// mistake in the KB's own machinery, which changes far less often. So they wait for a push, or for `--all`.
// The ones that read all 5,490 composites do check the data, but they took 45 s of every commit; check-data
// (also in the hook) catches the data mistakes that matter there.
//
// The quick tier shares one bun process (nothing in it writes files or spawns anything, so there is nothing to
// keep apart, and 28 bun starts cost more than the tests). Everything else gets a process per file, so a test
// that spawns clingo or copies the repo cannot disturb another, and a long time limit because a busy machine
// slows every test down.
//
// Output: one line per file with its time; the log of a file only when it fails. Exit 1 if any fails.

import { spawn } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { cpus } from 'node:os';
import { join } from 'node:path';
import { progress } from './progress.js';

const SKIP = new Set(['node_modules', 'dist', 'tools', '.git', '.claude']);
// Files that ask clingo (even about the fixture: every answer is a spawned solver, about half a second) or
// read the real data. `--fast` leaves them out.
const SLOW = ['kb/real', 'kb/atoms', 'kb/candidates', 'kb/clingo', 'move-effects', 'kb/whatif', 'kb/kb.test', 'kb/mcp.test', 'kb/relations', 'kb/facts', 'kb/set-cover', 'kb/export-real', 'kb/tags-rules', 'kb/rests-on',
  // these read all 5,490 composites (or the Workspace over the repo), which grew too slow for a commit
  'scripts/tag-ops', 'scripts/refactor-ops', 'word-builder-parse', 'lib/heads', 'grammar/grammar', 'lib/pinyin-refs'];
// A copy of the repo, a git ref, a server over stdio, the Firestore emulator (skipped without one): only with `--all`.
const ON_REQUEST = ['refactor-check', 'scripts/parse-diff', 'kb/mcp-server', 'translator/rules'];
const SLOW_FIRST = [...ON_REQUEST, ...SLOW, 'refactor-ops', 'grammar/grammar'];
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
// which tiers run: a filter names files itself, so it takes them whatever tier they are in
const left = flag('--all') ? [] : flag('--fast') ? [...SLOW, ...ON_REQUEST] : ON_REQUEST;
const files = testFiles('.')
  .map((f) => f.replace(/^\.\//, ''))
  .filter((f) => (filters.length ? filters.some((x) => f.includes(x)) : !left.some((s) => f.includes(s))))
  .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

if (!files.length) {
  console.error('no test file matches', filters.join(' '));
  process.exit(1);
}

// the quick tier in one process: one `bun test` over every file. Only the count is printed (730 lines of
// "(pass) ..." is what a commit hook must not say); a failure prints the whole log.
if (flag('--fast') && !filters.length && !flag('--serial') && jobsAt < 0) {
  const t = Date.now();
  const bar = progress({ total: 1, label: 'files' });
  bar.start(`${files.length} files in one process`);
  const child = spawn('bun', ['test', ...files, '--timeout', String(TIME_LIMIT_MS)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let log = '';
  child.stdout.on('data', (d) => (log += d));
  child.stderr.on('data', (d) => (log += d));
  const code = await new Promise((done) => (child.on('error', (e) => ((log += e.message), done(1))), child.on('close', done)));
  bar.close();
  if (code) console.log(log.trim());
  const says = (re) => re.exec(log)?.[1] ?? '?';
  console.log(`${files.length} files in ${((Date.now() - t) / 1000).toFixed(0)}s in one process: ${says(/(\d+) pass/)} pass, ${says(/(\d+) fail/)} fail (fixtures only; ${SLOW.length + ON_REQUEST.length} files wait for a push or --all)`);
  process.exit(code ? 1 : 0);
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
const tier = flag('--all') || filters.length ? '' : flag('--fast') ? ` (fixtures only; ${SLOW.length + ON_REQUEST.length} files wait for a push or --all)` : ` (${ON_REQUEST.length} files wait for --all)`;
console.log(`\n${files.length} files in ${((Date.now() - t0) / 1000).toFixed(0)}s with ${jobs} at a time: ${count(/(\d+) pass/)} pass, ${count(/(\d+) fail/)} fail${failed.length ? `; failing files: ${failed.map((r) => r.file).join(', ')}` : ''}${tier}`);
process.exit(failed.length ? 1 : 0);
