// The reasoner (KB_PLAN.md K1): clingo, answer set programming. Two ways to
// run it, the same answers either way:
//
//   native  clingo itself, as a child process (the program goes in on stdin).
//           No limit on the program's size, and a timeout really stops it.
//           Used when it is found (see findClingo).
//   wasm    clingo-wasm, built in, nothing to install. The program is copied
//           onto a 1 MB wasm stack, so it takes about 1 MB of program at most
//           (MAX_PROGRAM_BYTES); a bigger one throws before it runs.
//
//   solve(program, { models, options, timeoutMs, engine })
//     -> { status, models: [{ atoms, costs, optimal }], costs, time, warnings, engine }
//   engine()                          which one is in use: { name, path?, version? }
//   parseAtom("uses(\"飞机\",1,2,ji1)") -> { pred: "uses", args: ["飞机", 1, 2, "ji1"] }
//   rows(model, "uses")               -> [["飞机", 1, 2, "ji1"], ...]
//
// `models: 0` asks for all models. With `options: ["--opt-mode=optN"]` clingo
// lists every optimal model; `optimal` marks the models whose costs equal the
// best ones found (clingo also reports the weaker models it passed on the way).
// A syntax error in a program throws: our programs are generated, so an error
// is a bug to see, not a result to carry on with.
//
// Which engine: `engine: "native" | "wasm"` per call, or the KB_CLINGO
// environment variable: "wasm" forces the built-in one, a path names the clingo
// to run. Otherwise the first of: tools/clingo/ in this repository (see
// bundled), `clingo` on the PATH; if neither, wasm. To get one (the pip package
// has no clingo program, it runs as `python -m clingo`, which is found too):
//   python -m venv tools/clingo/venv && tools/clingo/venv/Scripts/pip install clingo

import { run, restart } from 'clingo-wasm';
import { spawn, spawnSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

export const DEFAULT_TIMEOUT_MS = 60_000;
// clingo-wasm copies the program onto a 1 MB stack: at about 1,040,000 bytes of
// UTF-8 (hanzi count 3) a run dies with "memory access out of bounds". Say so
// before it happens, and leave some room.
export const MAX_PROGRAM_BYTES = 1_000_000;

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../../..');
const BUNDLED = resolve(ROOT, 'tools/clingo');
const EXE = process.platform === 'win32' ? 'clingo.exe' : 'clingo';

// exit codes clasp uses for a failed run (the others are answers: 10 SAT, 20 UNSAT, 30 all models)
const ERROR_STATUS = new Set([33, 65, 128]);

// -- finding native clingo --------------------------------------------------------------------

// A way to run clingo is a program and the arguments that come before clingo's
// own: { path, args }. A clingo program has none; the pip package has no program,
// so a virtual environment's python runs it as a module (`python -m clingo`, with
// -I so nothing in the environment or the working folder can change what loads).
const asModule = (python) => ({ path: python, args: ['-I', '-m', 'clingo'] });

// -> { path, args, version } if it runs as clingo, else null.
function probe({ path, args }) {
  const r = spawnSync(path, [...args, '--version'], { encoding: 'utf8', timeout: 10_000, windowsHide: true });
  const m = r.status === 0 && /clingo version ([0-9][0-9.]*)/.exec(r.stdout ?? '');
  return m ? { path, args, version: m[1] } : null;
}

// the clingo kept in tools/clingo/: the program itself, in a folder of its own
// (what unzipping a build makes), or what `pip install clingo` gives in a
// virtual environment made there (tools/clingo/venv)
function bundled() {
  if (!existsSync(BUNDLED)) return [];
  const scripts = resolve(BUNDLED, 'venv', process.platform === 'win32' ? 'Scripts' : 'bin');
  const places = [BUNDLED, scripts];
  for (const d of readdirSync(BUNDLED, { withFileTypes: true })) if (d.isDirectory()) places.push(resolve(BUNDLED, d.name));
  const programs = places.map((dir) => resolve(dir, EXE)).filter(existsSync);
  const python = resolve(scripts, process.platform === 'win32' ? 'python.exe' : 'python');
  return [...programs.map((path) => ({ path, args: [] })), ...(existsSync(python) ? [asModule(python)] : [])];
}

const found = new Map();

// -> { path, args, version } for the native clingo this process would use, or null.
export function findClingo() {
  const env = process.env.KB_CLINGO ?? '';
  if (env === 'wasm') return null;
  if (!found.has(env)) {
    const candidates = env && env !== 'native' ? [{ path: env, args: [] }] : [...bundled(), { path: 'clingo', args: [] }];
    found.set(env, candidates.map(probe).find(Boolean) ?? null);
  }
  return found.get(env);
}

// -> which engine runs by default: { name: 'native', path, args, version } or { name: 'wasm', limit }.
export function engine() {
  const native = findClingo();
  return native ? { name: 'native', ...native } : { name: 'wasm', limit: MAX_PROGRAM_BYTES };
}

// -- running ------------------------------------------------------------------------------------

const sameCosts = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

// -> the atoms of a model as the sorted, de-duplicated list of strings.
const unique = (atoms) => [...new Set(atoms)];

// -> the parsed JSON clingo printed, 'timeout', or { Result: 'ERROR', Error }.
async function viaWasm(program, models, options, timeoutMs) {
  const bytes = new TextEncoder().encode(program).length;
  if (bytes > MAX_PROGRAM_BYTES) {
    throw new Error(
      `clingo: the program is ${bytes.toLocaleString('en')} bytes and clingo-wasm takes at most about ${MAX_PROGRAM_BYTES.toLocaleString('en')}; ` +
        'install clingo (see KB_PLAN.md, tools/clingo/) to lift the limit, or load fewer facts (the sentences are the bulk)',
    );
  }
  let timer;
  const timeout = new Promise((ok) => {
    timer = setTimeout(() => ok('timeout'), timeoutMs);
    timer.unref?.();
  });
  const outcome = await Promise.race([run(program, models, options), timeout]);
  clearTimeout(timer);
  if (outcome === 'timeout') await restart();
  return outcome;
}

// clingo's messages, without the Python traceback `python -m clingo` adds after them
const messages = (err) => err.split(/\r?\n\s*Traceback \(most recent call last\)/)[0].trim();

function viaNative({ path, args }, program, models, options, timeoutMs) {
  return new Promise((ok, fail) => {
    const child = spawn(path, [...args, '--outf=2', '-n', String(models), ...options], { stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true });
    let out = '';
    let err = '';
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill();
    }, timeoutMs);
    child.stdout.setEncoding('utf8').on('data', (d) => (out += d));
    child.stderr.setEncoding('utf8').on('data', (d) => (err += d));
    child.on('error', (e) => {
      clearTimeout(timer);
      fail(new Error(`clingo: cannot run ${path}: ${e.message}`));
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      if (timedOut) return ok('timeout');
      if (ERROR_STATUS.has(code) || !out.trim()) return ok({ Result: 'ERROR', Error: messages(err) || `clingo exited with status ${code}` });
      try {
        const parsed = JSON.parse(out);
        delete parsed.Input;
        // `python -m clingo` exits 0 even when the program does not parse; the run
        // then did not finish (UNKNOWN) and the reason is on stderr
        if (parsed.Result === 'UNKNOWN' && err.trim()) return ok({ Result: 'ERROR', Error: messages(err) });
        parsed.Warnings = err.split('\n\n');
        ok(parsed);
      } catch (e) {
        ok({ Result: 'ERROR', Error: messages(err) || `cannot read clingo's output: ${e.message}` });
      }
    });
    // clingo may stop reading early (a syntax error): a broken pipe is not a second error
    child.stdin.on('error', () => {});
    child.stdin.end(program);
  });
}

export async function solve(program, { models = 1, options = [], timeoutMs = DEFAULT_TIMEOUT_MS, engine: want } = {}) {
  want ??= process.env.KB_CLINGO === 'wasm' ? 'wasm' : 'auto';
  const native = want === 'wasm' ? null : findClingo();
  if (want === 'native' && !native) throw new Error('clingo: no native clingo found (set KB_CLINGO to its path, or pip install clingo into a venv at tools/clingo/venv)');
  const name = native ? 'native' : 'wasm';
  const outcome = native ? await viaNative(native, program, models, options, timeoutMs) : await viaWasm(program, models, options, timeoutMs);
  if (outcome === 'timeout') return { status: 'TIMEOUT', models: [], costs: [], warnings: [], time: timeoutMs / 1000, engine: name };
  if (outcome.Result === 'ERROR') throw new Error(`clingo: ${outcome.Error}`);
  const witnesses = (outcome.Call ?? []).flatMap((c) => c.Witnesses ?? []);
  const best = outcome.Models?.Costs ?? witnesses.at(-1)?.Costs ?? [];
  const seen = new Set();
  const answers = [];
  for (const w of witnesses) {
    const atoms = unique(w.Value ?? []);
    const key = atoms.join('\n');
    if (seen.has(key)) continue;
    seen.add(key);
    const costs = w.Costs ?? [];
    answers.push({ atoms, costs, optimal: !costs.length || sameCosts(costs, best) });
  }
  return {
    status: outcome.Result,
    models: answers,
    costs: best,
    warnings: (outcome.Warnings ?? []).filter(Boolean),
    time: outcome.Time?.Total ?? 0,
    engine: name,
  };
}

// -- reading answer atoms ------------------------------------------------------------

// A term is a number, a quoted string, a constant (hao3), a function f(a, b),
// or a tuple (a, b). Numbers come back as numbers, strings and constants as
// strings, functions and tuples as { fn, args } (a tuple has fn "").
export function parseTerm(text) {
  const p = { s: text, i: 0 };
  const t = term(p);
  if (p.i !== text.length) throw new Error(`cannot read the term "${text}" (stopped at ${p.i})`);
  return t;
}

function term(p) {
  const c = p.s[p.i];
  if (c === '"') return string(p);
  if (c === '(') {
    p.i++;
    return { fn: '', args: list(p, ')') };
  }
  const start = p.i;
  while (p.i < p.s.length && /[A-Za-z0-9_'\-]/.test(p.s[p.i])) p.i++;
  const name = p.s.slice(start, p.i);
  if (!name) throw new Error(`cannot read a term at ${p.i} of "${p.s}"`);
  if (/^-?\d+$/.test(name)) return Number(name);
  if (p.s[p.i] === '(') {
    p.i++;
    return { fn: name, args: list(p, ')') };
  }
  return name;
}

function string(p) {
  let out = '';
  p.i++;
  while (p.i < p.s.length && p.s[p.i] !== '"') {
    if (p.s[p.i] === '\\') {
      p.i++;
      out += p.s[p.i] === 'n' ? '\n' : p.s[p.i];
    } else out += p.s[p.i];
    p.i++;
  }
  p.i++;
  return out;
}

function list(p, close) {
  const out = [];
  if (p.s[p.i] === close) {
    p.i++;
    return out;
  }
  for (;;) {
    out.push(term(p));
    if (p.s[p.i] === ',') p.i++;
    else if (p.s[p.i] === close) {
      p.i++;
      return out;
    } else throw new Error(`cannot read a term list at ${p.i} of "${p.s}"`);
  }
}

// -> { pred, args, neg } for an answer atom ("-p(1)" is classically negated).
export function parseAtom(text) {
  const neg = text.startsWith('-');
  const t = parseTerm(neg ? text.slice(1) : text);
  if (typeof t === 'object') return { pred: t.fn, args: t.args, neg };
  return { pred: String(t), args: [], neg };
}

// -> the argument lists of every atom of `pred` in a model.
export function rows(model, pred) {
  const out = [];
  for (const a of model.atoms) {
    // cheap test before the parse: the atom starts with the predicate name
    if (a.startsWith(pred) && (a.length === pred.length || a[pred.length] === '(')) out.push(parseAtom(a).args);
  }
  return out;
}

// -> { pred: [args...] } for every predicate in a model.
export function tables(model) {
  const out = {};
  for (const a of model.atoms) {
    const { pred, args } = parseAtom(a);
    (out[pred] ??= []).push(args);
  }
  return out;
}

// -- writing facts -----------------------------------------------------------------------

// -> a string as a clingo string term.
export const str = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;

// -> a word id (or any identifier-like name) as a clingo constant, else a string.
export const sym = (s) => (/^[a-z][A-Za-z0-9_']*$/.test(s) ? s : str(s));

// -> an atom: atom("uses", "飞机", 1) -> uses("飞机",1). Strings are quoted;
// {sym: "x"} stays a constant; numbers stay numbers.
export function atom(pred, ...args) {
  const t = (a) => (typeof a === 'number' ? String(a) : typeof a === 'object' && a !== null ? a.sym : str(a));
  return args.length ? `${pred}(${args.map(t).join(',')})` : pred;
}
