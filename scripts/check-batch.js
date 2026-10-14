#!/usr/bin/env node
// Runs several gates one after the other in THIS process, so they share what the first one loaded.
//
//   node scripts/check-batch.js '[["check-sounds",[]],["check-summaries",["--over"]]]'
//
// Why: a gate on its own spends most of its time getting ready -- starting the runtime, loading the two thousand data
// files, opening the KB, reading the parse memory, walking the repo -- and every gate does the same. Here the data modules,
// the KB and the parse memory are loaded once and stay in memory for the next gate, and so does every repo file a gate
// reads (scripts/fs-memory.js); the parse memory is written to disk once, when the batch ends. check-all (scripts/check-all.js) starts a few batches side by side.
//
// Each gate is a script that prints a report and calls process.exit(1) when it fails. Here it is imported, its output is
// caught, and process.exit becomes an exception that ends only that gate. The batch prints one line per event, marked
// so a gate's own output cannot be taken for one:
//
//   \u0001HSD {"start":"check-sounds"}
//   \u0001HSD {"name":"check-sounds","ok":true,"out":"...","ms":412}
//
// A gate that crashes the process (out of memory) leaves the later gates of the batch unreported; check-all runs
// those again on their own.

import { format } from 'util';
import { fileURLToPath, pathToFileURL } from 'url';
import { resolve } from 'path';
import { rememberFiles } from './fs-memory.js';

const SCRIPTS = fileURLToPath(new URL('.', import.meta.url));
const MARK = '\u0001HSD ';

const write = process.stdout.write.bind(process.stdout);
const say = (event) => write(`${MARK}${JSON.stringify(event)}\n`);

class GateExit {
  constructor(code) {
    this.code = code;
  }
}

const realExit = process.exit.bind(process);
const realLog = { log: console.log, info: console.info, warn: console.warn, error: console.error, debug: console.debug };
const realWrite = { out: process.stdout.write, err: process.stderr.write };

// runs one gate; -> { ok, out }
async function runGate(name, args) {
  let out = '';
  const line = (...a) => void (out += `${format(...a)}\n`);
  const chunk = (c) => (out += typeof c === 'string' ? c : Buffer.from(c).toString('utf8'));
  console.log = console.info = console.debug = console.warn = console.error = line;
  process.stdout.write = process.stderr.write = (c, enc, cb) => (chunk(c), (typeof enc === 'function' ? enc : cb)?.(), true);
  process.exit = (code) => {
    throw new GateExit(code ?? process.exitCode ?? 0);
  };
  const script = resolve(SCRIPTS, `${name}.js`);
  process.argv = [process.argv[0], script, ...args];
  process.exitCode = undefined;
  let code = 0;
  try {
    await import(pathToFileURL(script).href);
    code = Number(process.exitCode) || 0;
  } catch (e) {
    if (e instanceof GateExit) code = e.code;
    else {
      code = 1;
      out += `${e?.stack ?? e}\n`;
    }
  } finally {
    Object.assign(console, realLog);
    process.stdout.write = realWrite.out;
    process.stderr.write = realWrite.err;
    process.exit = realExit;
    process.exitCode = undefined;
  }
  return { ok: code === 0, out };
}

if (process.env.HSD_NO_FILE_MEMORY !== '1') rememberFiles(); // the files one gate reads are in memory for the next
const plan = JSON.parse(process.argv[2] ?? '[]');
for (const [name, args] of plan) {
  say({ start: name });
  const t0 = Date.now();
  const r = await runGate(name, args);
  say({ name, ok: r.ok, out: r.out, ms: Date.now() - t0 });
}
realExit(0); // a gate that left something running must not keep the batch from ending (and from writing the parse memory)
