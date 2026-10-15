// A small Earley chart parser over a word lattice (KB_PLAN.md phase 1).
// Our own, because the rules are data read at runtime (src/data/grammar/) and
// change with the book; a generator that compiles a grammar would be a build
// step for every edit. Pure: runs in Node and in the browser.
//
//   makeGrammar(rules, { glue })      -> grammar
//   parse(lattice, grammar, options)  -> { ok, trees, treeCount, failure }
//
// rules    [{ lhs, rhs: [symbol], id, pattern?, eng? }]; no empty right sides.
// symbols  An uppercase first letter is a nonterminal (NP, VP, Utt).
//          @name is any word of that class (@noun, @adjective).
//          anything else is that word, by id (shi4, hen3).
//          @name-id-id is a class without those words: @adjective-zhe4-na4 is every
//          describing word but zhè and nà (which are pointers too).
//          =name is that word by id too, but it keeps its classes (=zhe4 is still a
//          pronoun everywhere else): for a word that one rule needs by name.
// glue     word ids that only match by name. The grammar names shi4, so shì is
//          not "a verb" for @verb: a word the grammar names is only that word.
// lattice  { n, edges } from lexicon.js: positions 0..n, edges between them.
//
// All trees come back (up to options.maxTrees), so ambiguity is visible. When
// the sentence doesn't parse, `failure` says how far it got, what could have
// come next, and the biggest pieces that did parse:
//   { at, expected: [symbol], pieces: [{ sym, from, to }] }
//   `at` is the position of the first word that fits nothing (n = ran out).

export const isNonterminal = (s) => /^[A-Z]/.test(s);

export function makeGrammar(rules, { glue = new Set() } = {}) {
  const byLhs = new Map();
  rules.forEach((r, i) => {
    if (!r.rhs.length) throw new Error(`rule ${r.id ?? i}: empty right side`);
    if (r.rhs.length >= 64) throw new Error(`rule ${r.id ?? i}: right side too long (64 symbols at most)`);
    if (!byLhs.has(r.lhs)) byLhs.set(r.lhs, []);
    byLhs.get(r.lhs).push(i);
  });
  return { rules, byLhs, glue };
}

// "@adjective-zhe4-na4" -> { name: 'adjective', except: ['zhe4', 'na4'] }
const classRefs = new Map();
export function classRef(sym) {
  let c = classRefs.get(sym);
  if (!c) {
    const [name, ...except] = sym.slice(1).split('-');
    c = { name, except };
    classRefs.set(sym, c);
  }
  return c;
}

const accepts = (sym, edge, glue) => {
  if (sym[0] === '@') {
    const { name, except } = classRef(sym);
    return !(edge.id && (glue.has(edge.id) || except.includes(edge.id))) && edge.classes.has(name);
  }
  if (sym[0] === '=') return edge.id === sym.slice(1);
  return edge.id === sym;
};

// worked out once per grammar: which symbols of each rule are nonterminals (`nt`), and the words or classes a
// nonterminal can start with (`firsts`: no right side is empty, so it is the first symbols, followed down)
const shapes = new WeakMap();
const shapeOf = (grammar) => {
  let s = shapes.get(grammar);
  if (!s) {
    const { rules, byLhs } = grammar;
    const nt = rules.map((r) => r.rhs.map(isNonterminal));
    const firsts = new Map();
    for (const lhs of byLhs.keys()) {
      const seen = new Set([lhs]);
      const out = new Set();
      const todo = [lhs];
      while (todo.length) {
        for (const r of byLhs.get(todo.pop()) ?? []) {
          const first = rules[r].rhs[0];
          if (!nt[r][0]) out.add(first);
          else if (!seen.has(first)) (seen.add(first), todo.push(first));
        }
      }
      firsts.set(lhs, [...out]);
    }
    s = { nt, firsts };
    shapes.set(grammar, s);
  }
  return s;
};

// `lookahead` (on unless asked): a rule is predicted only when the next word can start it. The trees and the
// failure are the same (failure: the rules left out are found again from the nonterminals that were predicted).
export function parse(lattice, grammar, { start = 'Utt', maxTrees = 20, budget = 200_000, lookahead = true } = {}) {
  const { rules, byLhs, glue } = grammar;
  const { nt, firsts } = shapeOf(grammar);
  const { n, edges } = lattice;
  const from = Array.from({ length: n + 1 }, () => []);
  for (const e of edges) from[e.from].push(e);

  // Each column keeps its states in the order they were made (`list`), a number for each (rule, dot, origin) it has
  // (`seen`), the nonterminals it already predicted, and the states waiting for each nonterminal (`waiting`), so
  // finishing a rule looks at the states that want it, not at the whole column.
  const chart = Array.from({ length: n + 1 }, () => ({ list: [], seen: new Map(), predicted: new Set(), waiting: new Map() }));
  const width = n + 1;
  const add = (at, r, dot, origin, back) => {
    const key = (r * 64 + dot) * width + origin;
    const col = chart[at];
    let s = col.seen.get(key);
    if (!s) {
      s = { r, dot, origin, at, backs: [] };
      col.seen.set(key, s);
      col.list.push(s);
      if (nt[r][dot]) {
        const sym = rules[r].rhs[dot];
        const w = col.waiting.get(sym);
        if (w) w.push(s);
        else col.waiting.set(sym, [s]);
      }
    }
    if (back) s.backs.push(back);
    return s;
  };

  // can a word at position i start this rule? (a word or class first: does a word fit it; a nonterminal: one of its firsts)
  let fits = null;
  let starts = null;
  const fitsHere = (i, sym) => {
    let f = fits.get(sym);
    if (f === undefined) fits.set(sym, (f = from[i].some((e) => accepts(sym, e, glue))));
    return f;
  };
  const canStart = (i, r) => {
    const first = rules[r].rhs[0];
    if (!nt[r][0]) return fitsHere(i, first);
    let f = starts.get(first);
    if (f === undefined) starts.set(first, (f = (firsts.get(first) ?? []).some((sym) => fitsHere(i, sym))));
    return f;
  };
  const predict = (i, sym) => {
    for (const r of byLhs.get(sym) ?? []) if (!lookahead || canStart(i, r)) add(i, r, 0, i, null);
  };

  fits = new Map();
  starts = new Map();
  predict(0, start);
  for (let i = 0; i <= n; i++) {
    const col = chart[i];
    if (i > 0) (fits = new Map()), (starts = new Map());
    for (let k = 0; k < col.list.length; k++) {
      const s = col.list[k];
      const rule = rules[s.r];
      if (s.dot === rule.rhs.length) {
        // complete: every state waiting for this symbol at the origin moves on
        const waiting = chart[s.origin].waiting.get(rule.lhs);
        if (waiting) for (const p of waiting) add(i, p.r, p.dot + 1, p.origin, { prev: p, child: s });
        continue;
      }
      const sym = rule.rhs[s.dot];
      if (nt[s.r][s.dot]) {
        if (col.predicted.has(sym)) continue;
        col.predicted.add(sym);
        predict(i, sym);
      } else {
        for (const e of from[i]) if (accepts(sym, e, glue)) add(e.to, s.r, s.dot + 1, s.origin, { prev: s, edge: e, sym });
      }
    }
  }

  const done = chart[n].list.filter((s) => rules[s.r].lhs === start && s.dot === rules[s.r].rhs.length && s.origin === 0);
  if (done.length) {
    const { trees, count } = enumerate(done, rules, maxTrees, budget);
    return { ok: true, trees, treeCount: count, failure: null };
  }
  return { ok: false, trees: [], treeCount: 0, failure: failure(chart, rules, firsts, n) };
}

// -- trees -----------------------------------------------------------------------------------

// The first `maxTrees` trees are built; the readings are counted without building them (up to maxTrees * 10 + 1:
// past that "many" is all anyone reads). A reading that loops back to itself (a rule cycle) is not counted.
function enumerate(done, rules, maxTrees, budget) {
  const cap = maxTrees * 10 + 1;
  const counts = new Map(); // state -> its readings, capped; -1 while it is being counted
  const countOf = (state) => {
    if (state.dot === 0) return 1;
    const known = counts.get(state);
    if (known !== undefined) return Math.max(known, 0);
    counts.set(state, -1);
    let total = 0;
    for (const b of state.backs) {
      const left = countOf(b.prev);
      if (!left) continue;
      total = Math.min(cap, total + left * (b.edge ? 1 : countOf(b.child)));
      if (total === cap) break;
    }
    counts.set(state, total);
    return total;
  };
  let count = 0;
  for (const s of done) if ((count = Math.min(cap, count + countOf(s))) === cap) break;

  let steps = 0;
  const trees = [];
  const kidsOf = function* (state) {
    if (state.dot === 0) {
      yield [];
      return;
    }
    for (const b of state.backs) {
      if (++steps > budget) return;
      for (const left of kidsOf(b.prev)) {
        if (b.edge) yield [...left, { sym: b.sym, from: b.edge.from, to: b.edge.to, edge: b.edge }];
        else for (const sub of treesOf(b.child)) yield [...left, sub];
      }
    }
  };
  const treesOf = function* (state) {
    const rule = rules[state.r];
    for (const children of kidsOf(state)) yield { sym: rule.lhs, rule: rule.id, pattern: rule.pattern, from: state.origin, to: state.at, children };
  };
  for (const s of done) {
    for (const t of treesOf(s)) {
      if (trees.length >= maxTrees || steps > budget) return { trees, count };
      trees.push(t);
    }
  }
  return { trees, count };
}

// -- where it failed -------------------------------------------------------------------------

function failure(chart, rules, firsts, n) {
  let at = 0;
  for (let i = 0; i <= n; i++) if (chart[i].list.length) at = i;
  // what could have come next at the furthest point: the rules under way, and the first words of every rule of a
  // nonterminal wanted there (the lookahead left out the ones the next word cannot start)
  const expected = new Set();
  for (const s of chart[at].list) {
    const rule = rules[s.r];
    if (s.dot < rule.rhs.length && !isNonterminal(rule.rhs[s.dot])) expected.add(rule.rhs[s.dot]);
  }
  for (const sym of chart[at].predicted) for (const first of firsts.get(sym) ?? []) expected.add(first);
  // the biggest pieces that parsed, from the left
  const completes = [];
  for (let i = 0; i <= n; i++) {
    for (const s of chart[i].list) {
      const rule = rules[s.r];
      if (s.dot === rule.rhs.length && rule.lhs !== 'Utt') completes.push({ sym: rule.lhs, from: s.origin, to: i });
    }
  }
  const pieces = [];
  for (let p = 0; p < n; ) {
    const here = completes.filter((c) => c.from === p).sort((a, b) => b.to - a.to);
    if (here.length) {
      const best = here[0];
      // among the longest, the one a reader would name first
      const pick = here.find((c) => c.to === best.to && ['S', 'Q', 'VP', 'NP'].includes(c.sym)) ?? best;
      pieces.push({ sym: pick.sym, from: pick.from, to: pick.to });
      p = pick.to;
    } else {
      pieces.push({ sym: '?', from: p, to: p + 1 });
      p += 1;
    }
  }
  return { at, expected: [...expected].sort(), pieces };
}
