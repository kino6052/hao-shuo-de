// The reasoner (KB_PLAN.md K1): clingo, answer set programming, run through
// clingo-wasm so it works in Node without installing anything else.
//
//   solve(program, { models, options, timeoutMs })
//     -> { status, models: [{ atoms, costs, optimal }], costs, time, warnings }
//   parseAtom("uses(\"飞机\",1,2,ji1)") -> { pred: "uses", args: ["飞机", 1, 2, "ji1"] }
//   rows(model, "uses")               -> [["飞机", 1, 2, "ji1"], ...]
//
// `models: 0` asks for all models. With `options: ["--opt-mode=optN"]` clingo
// lists every optimal model; `optimal` marks the models whose costs equal the
// best ones found (clingo also reports the weaker models it passed on the way).
// A program over MAX_PROGRAM_BYTES throws before it runs. A syntax error in a program throws: our programs are generated, so an error
// is a bug to see, not a result to carry on with.

import { run, restart } from 'clingo-wasm';

export const DEFAULT_TIMEOUT_MS = 60_000;
// clingo-wasm copies the program onto a 1 MB stack: at about 1,040,000 bytes of
// UTF-8 (hanzi count 3) a run dies with "memory access out of bounds". Say so
// before it happens, and leave some room.
export const MAX_PROGRAM_BYTES = 1_000_000;

const sameCosts = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

// -> the atoms of a model as the sorted, de-duplicated list of strings.
const unique = (atoms) => [...new Set(atoms)];

export async function solve(program, { models = 1, options = [], timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
  const bytes = new TextEncoder().encode(program).length;
  if (bytes > MAX_PROGRAM_BYTES) {
    throw new Error(`clingo: the program is ${bytes.toLocaleString('en')} bytes and clingo-wasm takes at most about ${MAX_PROGRAM_BYTES.toLocaleString('en')}; load fewer facts (the sentences are the bulk)`);
  }
  let timer;
  const timeout = new Promise((resolve) => {
    timer = setTimeout(() => resolve('timeout'), timeoutMs);
    timer.unref?.();
  });
  const outcome = await Promise.race([run(program, models, options), timeout]);
  clearTimeout(timer);
  if (outcome === 'timeout') {
    await restart();
    return { status: 'TIMEOUT', models: [], costs: [], warnings: [], time: timeoutMs / 1000 };
  }
  if (outcome.Result === 'ERROR') throw new Error(`clingo: ${outcome.Error}`);
  const witnesses = (outcome.Call ?? []).flatMap((c) => c.Witnesses ?? []);
  const best = outcome.Models?.Costs ?? witnesses.at(-1)?.Costs ?? [];
  const seen = new Set();
  const found = [];
  for (const w of witnesses) {
    const atoms = unique(w.Value ?? []);
    const key = atoms.join('\n');
    if (seen.has(key)) continue;
    seen.add(key);
    const costs = w.Costs ?? [];
    found.push({ atoms, costs, optimal: !costs.length || sameCosts(costs, best) });
  }
  return {
    status: outcome.Result,
    models: found,
    costs: best,
    warnings: (outcome.Warnings ?? []).filter(Boolean),
    time: outcome.Time?.Total ?? 0,
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
