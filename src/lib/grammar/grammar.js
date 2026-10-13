// The patterns (src/data/grammar/) as one grammar for the parser. Pure.
//
//   buildGrammar(patterns, { words, composites }) -> { grammar, rules, errors }
//
// Each pattern's `rules` are { lhs, hsd, eng? }; hsd is the right side, symbols
// separated by spaces (the conventions are in earley.js). Rule ids are
// "<pattern>#<n>", so a tree node names the pattern that licensed it. A word
// that a rule names (shi4, hen3, de) is "glue": it only matches by name, never
// as "a verb" or "a particle" (earley.js); =zhe4 names a word without that. Errors are problems with the
// patterns themselves: a word that doesn't exist, a class nobody has, a
// nonterminal no rule defines.

import { makeGrammar, isNonterminal, classRef } from './earley.js';
import { posClasses } from './lexicon.js';

// classes the lexicon makes up itself
const BUILT_IN = ['comma', 'quoted', 'unknown', 'again'];

export function buildGrammar(patterns, { words = {}, composites = [] } = {}) {
  const rules = [];
  const errors = [];
  for (const p of patterns) {
    p.rules.forEach((r, i) => {
      const rhs = String(r.hsd).trim().split(/\s+/).filter(Boolean);
      rules.push({ lhs: r.lhs, rhs, id: `${p.id}#${i + 1}`, pattern: p.id, eng: r.eng });
    });
  }

  const classes = new Set(BUILT_IN);
  for (const w of Object.values(words)) posClasses(w.pos?.eng).forEach((c) => classes.add(c));
  for (const c of composites) posClasses(c.pos).forEach((x) => classes.add(x));
  const defined = new Set(rules.map((r) => r.lhs));
  const glue = new Set();
  for (const r of rules) {
    if (!isNonterminal(r.lhs)) errors.push(`${r.id}: the left side "${r.lhs}" must start with a capital letter`);
    if (!r.rhs.length) errors.push(`${r.id}: no right side`);
    for (const sym of r.rhs) {
      if (isNonterminal(sym)) {
        if (!defined.has(sym)) errors.push(`${r.id}: ${sym} has no rule`);
      } else if (sym.startsWith('@')) {
        const { name, except } = classRef(sym);
        if (!classes.has(name)) errors.push(`${r.id}: no word is @${name}`);
        for (const id of except) if (!Object.hasOwn(words, id)) errors.push(`${r.id}: "${id}" is not a word`);
      } else if (sym.startsWith('=')) {
        if (!Object.hasOwn(words, sym.slice(1))) errors.push(`${r.id}: "${sym.slice(1)}" is not a word`);
      } else {
        if (!Object.hasOwn(words, sym)) errors.push(`${r.id}: "${sym}" is not a word`);
        glue.add(sym);
      }
    }
  }
  // a rule with no right side is already reported; the parser would refuse it
  return { grammar: makeGrammar(rules.filter((r) => r.rhs.length), { glue }), rules, errors };
}
