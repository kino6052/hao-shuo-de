#!/usr/bin/env node
// Runs every book gate (BOOK_PLAN.md §6) -- the first step of `npm run
// build`. Each gate's report is shown even when an earlier one fails. Exits 1
// if any gate failed. Extra arguments (e.g. --strict, or chapter ids) are
// passed to every gate.
//
// The gates only read the data, so they run a few at a time (CHECK_JOBS=1 for one at a time),
// each report printed whole when its gate ends, with a progress bar and the time of each gate.
//
//   npm run check              # what the build runs
//   npm run check -- --strict  # every gate strict for every chapter

import { spawn } from 'child_process';
import { cpus } from 'os';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { GATES } from './gates.js';
import { progress } from './progress.js';

const SCRIPTS = fileURLToPath(new URL('.', import.meta.url));
const extra = process.argv.slice(2);
const jobs = Math.max(1, Number(process.env.CHECK_JOBS) || Math.min(4, Math.floor(cpus().length / 2)));

const bar = progress({ total: GATES.length, label: 'gates' });
const results = new Map();

const runGate = ([name, args]) =>
  new Promise((done) => {
    const t0 = Date.now();
    bar.start(name);
    const child = spawn(process.execPath, [resolve(SCRIPTS, `${name}.js`), ...args, ...extra], { stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (out += d));
    child.on('error', (e) => finish(1, `${out}${e}`));
    child.on('close', (code) => finish(code, out));
    function finish(code, text) {
      results.set(name, { ok: code === 0, ms: Date.now() - t0 });
      bar.print(`\n━━ ${name} ${'━'.repeat(Math.max(0, 60 - name.length))}\n${text.replace(/\n+$/, '')}`);
      bar.finish(name);
      done();
    }
  });

let next = 0;
const worker = async () => {
  while (next < GATES.length) await runGate(GATES[next++]);
};
await Promise.all(Array.from({ length: Math.min(jobs, GATES.length) }, worker));
bar.close();

console.log(`\n━━ gates ${'━'.repeat(55)}`);
for (const [name] of GATES) {
  const r = results.get(name);
  console.log(`  ${r.ok ? '✓' : '✗'} ${name}  ${(r.ms / 1000).toFixed(1)}s`);
}
const failed = GATES.filter(([name]) => !results.get(name).ok).map(([name]) => name);
if (failed.length) {
  console.error(`\ncheck-all: ${failed.length} gate(s) failed: ${failed.join(', ')}.`);
  process.exit(1);
}
console.log('\ncheck-all: every gate passed.');
