#!/usr/bin/env node
// Runs every book gate (BOOK_PLAN.md §6) -- the first step of `npm run
// build`. Each gate's report is shown even when an earlier one fails. Exits 1
// if any gate failed. Extra arguments (e.g. --strict, or chapter ids) are
// passed to every gate.
//
// Why it is quick (the gates only read the data):
//   - a gate whose input has not changed since it last ran is not run: its report is remembered (scripts/gate-cache.js),
//     so a second `npm run check` takes a moment; `--fresh` runs everything;
//   - the data is read through one bundle of the thousand data files (scripts/fast-data.js), built once per change;
//   - the gates that do run go in a few batches side by side (CHECK_JOBS=1 for one); a batch is one process that
//     runs its gates one after the other (scripts/check-batch.js), so the data, the KB and the parse memory are loaded
//     once per batch, not once per gate, and the memory is written to disk once, at the end. `--isolated` gives every gate
//     its own process instead, as a gate runs by itself (`node scripts/check-forms.js`);
//   - inside a gate, the source and the parse results come from .cache/ (scripts/parse-memo.js), so a change to one
//     sentence parses one sentence.
// Each gate's report is printed whole when it ends, with a progress bar and the seconds per gate.
//
//   npm run check              # what the build runs
//   npm run check -- --strict  # every gate strict for every chapter
//   npm run check -- --fresh   # ignore what is remembered
//   npm run check -- --isolated  # one process per gate
//   CHECK_TRACE=1 npm run check # also print a timeline: when each step and batch began and ended

import { spawn } from 'child_process';
import { cpus } from 'os';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { GATES } from './gates.js';
import { progress } from './progress.js';
import { gateStamp, lastGateMs, lookupGate, recordGate } from './gate-cache.js';
import { cacheOff, readCache } from './cache.js';
import { bundleStamp, ensureBundle } from './bundle.js';
import { handDown, sharedStats } from './stamp.js';
import { sourceStamp } from './source-cache.js';

const SCRIPTS = fileURLToPath(new URL('.', import.meta.url));
const MARK = '\u0001HSD ';
const args = process.argv.slice(2);
const fresh = args.includes('--fresh') || cacheOff();
const isolated = args.includes('--isolated') || process.env.CHECK_MODE === 'isolated';
const extra = args.filter((a) => a !== '--fresh' && a !== '--isolated');
const jobs = Math.max(1, Number(process.env.CHECK_JOBS) || Math.min(4, Math.floor(cpus().length / 2)));

// the Node running this (Bun starts faster, but once the data is one file Node reads it faster)
const runtime = process.execPath;

// every script reads the dictionary through one bundle of the data files (scripts/fast-data.js)
const preload = process.env.HSD_NO_BUNDLE === '1' ? [] : ['--import', pathToFileURL(resolve(SCRIPTS, 'fast-data.js')).href];

const T0 = Date.now();
const trace = process.env.CHECK_TRACE ? (m) => console.error(`  [${((Date.now() - T0) / 1000).toFixed(2)}s] ${m}`) : () => {};

// the stamps every script would work out again (a walk of src each) are worked out once, here, from one walk of the files
const stamp = sharedStats(() => {
  handDown('bundle', bundleStamp());
  handDown('source', sourceStamp());
  return gateStamp();
});
trace('stamps done');

const keyOf = ([name, a]) => [name, ...a, ...extra].join(' ');
// the gates that took longest last time go first, so the last ones to finish are short
const order = [...GATES].sort((a, b) => lastGateMs(keyOf(b)) - lastGateMs(keyOf(a)));

const bar = progress({ total: GATES.length + 1, label: 'steps' });
const results = new Map();
let cached = 0;

const show = (name, text, note = '') => bar.print(`\n━━ ${name}${note} ${'━'.repeat(Math.max(0, 60 - name.length - note.length))}\n${text.replace(/\n+$/, '')}`);

// a gate has ended: show its report, remember it
function report(gate, { ok, out, ms }) {
  const [name] = gate;
  if (results.has(name)) return;
  results.set(name, { ok, ms });
  trace(`${name} ended (${(ms / 1000).toFixed(1)}s)`);
  recordGate(stamp, keyOf(gate), { ok, out, ms });
  show(name, out);
  bar.finish(name);
}

// one process per gate
const runIsolated = (gate) =>
  new Promise((done) => {
    const [name, gateArgs] = gate;
    const t0 = Date.now();
    bar.start(name);
    const child = spawn(runtime, [...preload, resolve(SCRIPTS, `${name}.js`), ...gateArgs, ...extra], { stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (out += d));
    child.on('error', (e) => (report(gate, { ok: false, out: `${out}${e}`, ms: Date.now() - t0 }), done()));
    child.on('close', (code) => (report(gate, { ok: code === 0, out, ms: Date.now() - t0 }), done()));
  });

// several gates in one process; what it does not report (it died) is run again, each on its own
const runBatch = (gates) =>
  new Promise((done) => {
    const byName = new Map(gates.map((g) => [g[0], g]));
    trace(`batch begins: ${gates.map((g) => g[0].replace('check-', '')).join(' ')}`);
    const child = spawn(runtime, [...preload, resolve(SCRIPTS, 'check-batch.js'), JSON.stringify(gates.map(([name, a]) => [name, [...a, ...extra]]))], { stdio: ['ignore', 'pipe', 'pipe'] });
    let buffer = '';
    child.stdout.on('data', (d) => {
      buffer += d;
      let at;
      while ((at = buffer.indexOf('\n')) >= 0) {
        const line = buffer.slice(0, at);
        buffer = buffer.slice(at + 1);
        if (!line.startsWith(MARK)) continue;
        const event = JSON.parse(line.slice(MARK.length));
        if (event.start) bar.start(event.start);
        else report(byName.get(event.name), event);
      }
    });
    child.stderr.on('data', () => {});
    let ended = false;
    const end = async () => {
      if (ended) return;
      ended = true;
      trace('batch process ended');
      for (const gate of gates) if (!results.has(gate[0])) await runIsolated(gate);
      done();
    };
    child.on('error', end);
    child.on('close', end);
  });

// spreads the gates over `n` batches, slowest first, each to the batch with the least work so far
function pack(gates, n) {
  const bins = Array.from({ length: Math.min(n, gates.length) }, () => ({ gates: [], ms: 0 }));
  for (const gate of gates) {
    const bin = bins.reduce((a, b) => (b.ms < a.ms ? b : a));
    bin.gates.push(gate);
    bin.ms += lastGateMs(keyOf(gate)) || 2000;
  }
  return bins.map((b) => b.gates);
}

const t0 = Date.now();

// what is remembered is shown at once; the rest runs
const pending = [];
for (const gate of order) {
  const hit = fresh ? null : lookupGate(stamp, keyOf(gate));
  if (!hit) {
    pending.push(gate);
    continue;
  }
  cached++;
  results.set(gate[0], { ok: hit.ok, ms: hit.ms, cached: true });
  show(gate[0], hit.out, ' (remembered)');
  bar.start(gate[0]);
  bar.finish(gate[0]);
}

if (pending.length) {
  // the bundle is built here, once; the KB's source is built once, by a script of its own,
  // because the batches would each build it at the same moment
  bar.start('preparing');
  trace('preparing');
  if (process.env.HSD_NO_BUNDLE !== '1') ensureBundle();
  if (readCache('source.json')?.stamp !== sourceStamp()) {
    await new Promise((done) => spawn(runtime, [...preload, resolve(SCRIPTS, 'warm-source.js')], { stdio: 'ignore' }).on('close', done).on('error', done));
  }
  bar.finish('preparing');
  trace('prepared');

  if (isolated) {
    let next = 0;
    const worker = async () => {
      while (next < pending.length) await runIsolated(pending[next++]);
    };
    await Promise.all(Array.from({ length: Math.min(jobs, pending.length) }, worker));
  } else {
    await Promise.all(pack(pending, jobs).map(runBatch));
  }
}
bar.close();

console.log(`\n━━ gates ${'━'.repeat(55)}`);
for (const [name] of GATES) {
  const r = results.get(name);
  console.log(`  ${r.ok ? '✓' : '✗'} ${name}  ${r.cached ? 'remembered' : `${(r.ms / 1000).toFixed(1)}s`}`);
}
const failed = GATES.filter(([name]) => !results.get(name).ok).map(([name]) => name);
const took = ((Date.now() - t0) / 1000).toFixed(1);
if (failed.length) {
  console.error(`\ncheck-all: ${failed.length} gate(s) failed: ${failed.join(', ')}.`);
  process.exit(1);
}
console.log(`\ncheck-all: every gate passed (${took}s${cached ? `; ${cached} of ${GATES.length} remembered` : ''}).`);
