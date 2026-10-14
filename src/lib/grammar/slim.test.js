// The parse memory keeps slim results (parser.js: slimOf / fromSlim). The gates read only the fields checked here, so a slim
// result must equal the full one on them: for a success, an ambiguous sentence, a failure, and a sentence with a problem.

import { describe, expect, test } from 'bun:test';
import { createParser, patternsOf } from './parser.js';

const w = (term, pos) => ({ term, pos: { eng: pos }, definition: { eng: `the word ${term}` } });
const words = { wo3: w('wǒ', 'pronoun'), kan4: w('kàn', 'verb'), shu1: w('shū', 'noun'), hao3: w('hǎo', 'adjective') };
const rule = (lhs, hsd) => ({ lhs, hsd, eng: '' });
const pattern = (id, rules) => ({ id, meaning: { eng: 'x', rus: 'x' }, covers: [], template: { hsd: '', eng: '' }, rules, examples: [] });
const patterns = [
  pattern('clause', [rule('Utt', 'NP VP'), rule('NP', '@noun'), rule('NP', '@pronoun'), rule('VP', '@verb NP'), rule('VP', '@verb')]),
  pattern('dup', [rule('NP', '@noun'), rule('VP', '@verb NP')]), // a second way to read the same words
];
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ');

const store = new Map();
const memo = { get: (k) => store.get(k), set: (k, v) => store.set(k, v) };
const full = createParser({ patterns, words });
const slim = createParser({ patterns, words, memo });

const read = (r) => ({
  ok: r.ok,
  treeCount: r.treeCount,
  patterns: r.patterns,
  perTree: r.trees.map(patternsOf),
  tokens: r.tokens.map((t) => t.text),
  problems: r.problems,
  failure: r.failure,
});

describe('slim parse equals full parse on what the gates read', () => {
  const cases = {
    success: ref('wo3', 'kan4', 'shu1'),
    'ambiguous (pattern order)': `${ref('wo3', 'kan4', 'shu1')}.`,
    failure: ref('shu1', 'shu1', 'kan4', 'kan4'),
    'unknown word': `${ref('wo3', 'kan4')} {{word:nope9}}`,
  };
  for (const [name, text] of Object.entries(cases)) {
    test(name, () => {
      const expected = read(full.parse(text));
      expect(read(slim.parse(text))).toEqual(expected); // computed, then stored
      expect(read(slim.parse(text))).toEqual(expected); // read back from the memory
      expect(store.size).toBeGreaterThan(0);
    });
  }

  test('the slim result says it is slim, and survives JSON (the file form)', () => {
    const text = ref('wo3', 'kan4', 'shu1');
    const r = slim.parse(text);
    expect(r.slim).toBe(true);
    const [key] = [...store.keys()].filter((k) => k.endsWith(text));
    const again = createParser({ patterns, words, memo: { get: () => JSON.parse(JSON.stringify(store.get(key))), set() {} } });
    expect(read(again.parse(text))).toEqual(read(full.parse(text)));
  });
});
