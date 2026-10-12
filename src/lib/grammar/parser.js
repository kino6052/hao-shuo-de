// The grammar slice in one place: patterns + dictionary -> a parser for
// sentences written with word refs. Pure; runs in Node and in the browser.
//
//   const parser = createParser({ patterns, words, composites });
//   parser.errors                  problems in the patterns themselves
//   parser.parse("{{Word:wo3}} {{word:shi4}} {{word:ren2}}.")
//     -> { text, tokens, problems, ok, trees, treeCount, patterns, failure }
//   outline(result, 0)             the first tree as indented lines
//   bracket(result, 0)             the first tree as [S [NP wǒ] [VP shì [NP rén]]]
//   explainFailure(result, words)  one sentence on where and why it stopped
//
// `patterns` lists the pattern ids the first tree uses, in order of appearance.

import { buildLexicon, lex } from './lexicon.js';
import { buildGrammar } from './grammar.js';
import { parse } from './earley.js';

export function createParser({ patterns, words, composites = [] }) {
  const lexicon = buildLexicon({ words, composites });
  const { grammar, rules, errors } = buildGrammar(patterns, { words, composites });
  return {
    errors,
    rules,
    grammar,
    parse(text, { maxTrees = 20 } = {}) {
      const lattice = lex(text, lexicon);
      const result = parse(lattice, grammar, { maxTrees });
      const tokens = lattice.tokens;
      const piece = (p) => ({ ...p, text: tokens.slice(p.from, p.to).map((t) => t.text).join(' ') });
      return {
        text,
        tokens,
        problems: lattice.problems,
        ok: result.ok,
        trees: result.trees,
        treeCount: result.treeCount,
        patterns: result.trees[0] ? patternsOf(result.trees[0]) : [],
        failure: result.failure && {
          at: result.failure.at,
          token: tokens[result.failure.at]?.text ?? null,
          expected: result.failure.expected,
          pieces: result.failure.pieces.map(piece),
        },
      };
    },
  };
}

// -> the pattern ids a tree uses, in order of appearance.
export function patternsOf(tree) {
  const out = [];
  const walk = (t) => {
    if (t.pattern && !out.includes(t.pattern)) out.push(t.pattern);
    (t.children ?? []).forEach(walk);
  };
  walk(tree);
  return out;
}

// the words of a span, as the sentence shows them (chains with hyphens)
const spanText = (tokens, from, to) => tokens.slice(from, to).map((t) => t.text).join('-');

export function outline(result, k = 0) {
  const tree = result.trees[k];
  if (!tree) return '';
  const lines = [];
  const walk = (t, depth) => {
    const pad = '  '.repeat(depth);
    if (t.children) {
      lines.push(`${pad}${t.sym}${t.pattern ? `  (${t.pattern})` : ''}`);
      t.children.forEach((c) => walk(c, depth + 1));
    } else {
      const cls = t.sym.startsWith('@') ? ` ${t.sym}` : '';
      lines.push(`${pad}${t.edge.composite ? `${spanText(result.tokens, t.from, t.to)} (${t.edge.composite})` : t.edge.term}${cls}`);
    }
  };
  walk(tree, 0);
  return lines.join('\n');
}

export function bracket(result, k = 0) {
  const tree = result.trees[k];
  if (!tree) return '';
  const walk = (t) => (t.children ? `[${t.sym} ${t.children.map(walk).join(' ')}]` : t.edge.composite ? spanText(result.tokens, t.from, t.to) : t.edge.term);
  return walk(tree);
}

// a symbol as a reader would say it: @noun -> "a noun", shi4 -> "shì"
export function sayExpected(sym, words) {
  if (sym.startsWith('@')) return `a ${sym.slice(1).replace(/_/g, ' ')}`;
  return words[sym]?.term ?? sym;
}

export function explainFailure(result, words) {
  const f = result.failure;
  if (!f) return '';
  const at = f.token === null ? 'the sentence ended' : `"${f.token}" doesn't fit`;
  const wants = f.expected.length ? `; a pattern could continue with ${f.expected.map((s) => sayExpected(s, words)).join(', ')}` : '';
  return `${at} (word ${Math.min(f.at + 1, result.tokens.length)} of ${result.tokens.length})${wants}`;
}
