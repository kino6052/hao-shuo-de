#!/usr/bin/env node
// The cache audit: do the shortcuts give the same answers as the slow way? Every gate runs twice:
//
//   plain  one process per gate (as run by hand), HSD_NO_BUNDLE=1 and HSD_NO_CACHE=1: the real files, nothing from .cache
//   fast   all the gates in one batch (scripts/check-batch.js) with the bundle preload (scripts/fast-data.js), the parse
//          memory, the KB source snapshot and the file memory -- what check-all runs
//
// and every report must be the same, word for word, pass or fail. It fails when one differs and shows where.
// A pass is kept in .cache/audit.json with a stamp of the cache code (AUDITED below); the full pass (check-all --full,
// before a push) runs the audit again only when that code has changed since. About half a minute.
//
//   npm run check:caches
//   node scripts/check-caches.js

import { spawn } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { GATES } from './gates.js';
import { readCache, writeCache } from './cache.js';
import { stampOf } from './stamp.js';

const SCRIPTS = fileURLToPath(new URL('.', import.meta.url));
const MARK = '\u0001HSD ';
const JOBS = 4;

// the code that decides what the shortcuts hand out: a change here and the audit runs again
export const AUDITED = [
  ...['bundle', 'fast-data', 'cache', 'stamp', 'gate-cache', 'parse-memo', 'fs-memory', 'check-batch', 'check-all', 'source-cache', 'warm-source', 'kb-source', 'kb-source-worker', 'kb'].map(
    (s) => `scripts/${s}.js`,
  ),
  'src/lib/grammar',
  'src/lib/kb',
  'src/lib/word-builder.js',
  'src/lib/word-builder-parse.js',
];
export const auditStamp = () => `${process.version}:${stampOf(AUDITED)}`;
// -> whether the audit has passed for today's cache code
export const audited = () => readCache('audit.json')?.stamp === auditStamp();

// the stamps a parent handed down describe its own run; each run here works its own out
const env = (more) => {
  const e = { ...process.env, ...more };
  for (const k of Object.keys(e)) if (k.startsWith('HSD_STAMP_')) delete e[k];
  return e;
};
const run = (args, more) =>
  new Promise((done) => {
    const t0 = Date.now();
    const child = spawn(process.execPath, args, { env: env(more), stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (out += d));
    child.on('error', (e) => done({ code: 1, out: `${out}${e}`, ms: Date.now() - t0 }));
    child.on('close', (code) => done({ code, out, ms: Date.now() - t0 }));
  });

// -> the first line where two reports part, for the message
function firstDifference(a, b) {
  const x = a.split('\n');
  const y = b.split('\n');
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    if (x[i] !== y[i]) return `line ${i + 1}:\n      plain: ${JSON.stringify(x[i] ?? '(none)')}\n      fast:  ${JSON.stringify(y[i] ?? '(none)')}`;
  }
  return '(only the exit code)';
}

async function audit() {
  const t0 = Date.now();
  const stamp = auditStamp();
  // the fast batch first, alone: it builds the bundle and the snapshot the way check-all does
  const preload = ['--import', pathToFileURL(resolve(SCRIPTS, 'fast-data.js')).href];
  const batch = await run([...preload, resolve(SCRIPTS, 'check-batch.js'), JSON.stringify(GATES)], {});
  const fast = new Map();
  for (const line of batch.out.split('\n')) {
    if (!line.startsWith(MARK)) continue;
    const event = JSON.parse(line.slice(MARK.length));
    if (event.name) fast.set(event.name, event);
  }
  const stray = batch.out.split('\n').filter((l) => l.trim() && !l.startsWith(MARK));

  const plain = new Map();
  let next = 0;
  const worker = async () => {
    while (next < GATES.length) {
      const [name, args] = GATES[next++];
      const r = await run([resolve(SCRIPTS, `${name}.js`), ...args], { HSD_NO_BUNDLE: '1', HSD_NO_CACHE: '1' });
      plain.set(name, { ok: r.code === 0, out: r.out, ms: r.ms });
    }
  };
  await Promise.all(Array.from({ length: JOBS }, worker));

  const differ = [];
  for (const [name] of GATES) {
    const p = plain.get(name);
    const f = fast.get(name);
    const same = f && p.ok === f.ok && p.out === f.out;
    if (!same) differ.push(name);
    console.log(
      `  ${same ? '✓ same' : '✗ DIFF'}  ${name.padEnd(22)} plain ${p.ok ? 'pass' : 'FAIL'} ${(p.ms / 1000).toFixed(1).padStart(5)}s   fast ${f ? (f.ok ? 'pass' : 'FAIL') : 'no report'}`,
    );
    if (!same) console.log(`      ${f ? firstDifference(p.out, f.out) : 'the batch gave no report for it'}`);
  }
  if (stray.length) console.log(`  the batch printed ${stray.length} line(s) outside a report, first: ${JSON.stringify(stray[0])}`);
  const ok = !differ.length && !stray.length;
  const took = ((Date.now() - t0) / 1000).toFixed(1);
  if (ok) {
    writeCache('audit.json', { stamp, at: new Date().toISOString() });
    console.log(`check-caches: every gate's report is the same both ways (${took}s).`);
  } else {
    console.error(`check-caches: ${differ.length} gate(s) report differently with the shortcuts: ${differ.join(', ')}. A cache hands out something stale (${took}s).`);
  }
  return ok;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exit((await audit()) ? 0 : 1);
}
