// TRANSLATOR_PLAN.md B4: the readability numbers on a tiny grammar of our own (the fixture's words, the real
// grammar's symbols Mod, ModNP, Clause and Say), so every number is known exactly. The limits are named, and the tests
// build what goes over them from the constants, so a change to a limit does not break them.

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { readability, renderReadability, MAX_WORDS, MAX_DEPTH, MAX_DESCRIPTION } from './readability.js';
import { pinyinToRefs } from '../pinyin-refs.js';
import { source } from './fixture.js';

const patterns = [
  {
    id: 'svo',
    meaning: { eng: 'who does what' },
    rules: [
      { lhs: 'Utt', hsd: 'S' },
      { lhs: 'S', hsd: 'NP VP' },
      { lhs: 'NP', hsd: '@pronoun' },
      { lhs: 'NP', hsd: '@noun' },
      { lhs: 'VP', hsd: '@verb NP' },
      { lhs: 'VP', hsd: '@verb' },
    ],
  },
  {
    id: 'describing',
    meaning: { eng: 'a modifier and its noun' },
    rules: [
      { lhs: 'Utt', hsd: 'NP' },
      { lhs: 'Mod', hsd: 'NP de' },
      { lhs: 'ModNP', hsd: 'Mod @noun' },
      { lhs: 'NP', hsd: 'ModNP' },
    ],
  },
  {
    id: 'list-of-things',
    meaning: { eng: 'nouns in a row, as a sentence or as a modifier' },
    rules: [
      { lhs: 'Utt', hsd: 'List' },
      { lhs: 'List', hsd: '@noun' },
      { lhs: 'List', hsd: 'List @noun' },
      { lhs: 'Mod', hsd: 'List de' },
    ],
  },
  {
    id: 'clause-after-comma',
    meaning: { eng: 'a second clause' },
    rules: [
      { lhs: 'Utt', hsd: 'S @comma Clause' },
      { lhs: 'Clause', hsd: 'S' },
    ],
  },
  {
    id: 'quote',
    meaning: { eng: 'who says what' },
    rules: [
      { lhs: 'Utt', hsd: 'NP Say' },
      { lhs: 'Say', hsd: '@verb @colon Utt' },
      { lhs: 'Say', hsd: 'VP @comma Say' },
    ],
  },
];

const kb = createKb({ ...source, patterns });
const words = source.words;

// the numbers for a sentence in plain pinyin, read by the grammar above
const measure = (text, options = {}) => {
  const refs = pinyinToRefs(text, words, { composites: source.composites });
  return readability({ refs, parse: kb.parse.parser.parse(refs, { maxTrees: 5 }), words, ...options });
};

// n modifiers inside each other: Wǒ-de fàn-de fàn ... (the grammar above has one reading of it)
const nested = (n) => `Wǒ${'-de fàn'.repeat(n)}.`;

// n nouns in a row: Fàn fàn fàn ...
const things = (n) => ['Fàn', ...Array(n - 1).fill('fàn')].join(' ');

// a hand-made reading, for what the grammar above does not produce
const leaf = (at) => ({ sym: '@noun', from: at, to: at + 1, edge: {} });
const node = (sym, from, to, ...children) => ({ sym, from, to, children });
const tokens = (...texts) => texts.map((text) => ({ text }));

describe('readability', () => {
  test('a plain sentence: its words, nothing nested, no description', () => {
    expect(measure('Wǒ chī fàn.')).toEqual({ words: 3, depth: 0, longestDescription: { words: 0, text: '' }, warnings: [] });
  });

  test('a description is counted in words and shown as written, hyphens kept', () => {
    const r = measure('Wǒ chī wǒ-de fàn.');
    expect(r.words).toBe(5);
    expect(r.depth).toBe(1);
    expect(r.longestDescription).toEqual({ words: 3, text: 'wǒ-de fàn' });
  });

  test('a description that opens the sentence is not capitalised', () => {
    expect(measure('Wǒ-de fàn.').longestDescription).toEqual({ words: 3, text: 'wǒ-de fàn' });
  });

  test('a chain is its words: dōng-xi is two', () => {
    const r = measure('Wǒ-de dōng-xi.');
    expect(r.words).toBe(4);
    expect(r.longestDescription).toEqual({ words: 4, text: 'wǒ-de dōng-xi' });
  });

  test('a modifier inside a modifier is two levels', () => {
    const r = measure(nested(2));
    expect(r.depth).toBe(2);
    expect(r.words).toBe(5);
    expect(r.longestDescription).toEqual({ words: 5, text: 'wǒ-de fàn-de fàn' });
  });

  test('a second clause is a level; commas are not words', () => {
    const r = measure('Wǒ chī, wǒ fēi.');
    expect(r.words).toBe(4);
    expect(r.depth).toBe(1);
  });

  test('a quote is a level, and something said before it (lái le, shuō: ...) is the same quote', () => {
    expect(measure('Wǒ chī: wǒ fēi.').depth).toBe(1);
    expect(measure('Wǒ chī, chī: wǒ fēi.').depth).toBe(1);
  });

  test('several modifiers in a row before one noun are one level, and one description', () => {
    // [ModNP [Mod a de] [ModNP [Mod b de] c]]
    const parse = {
      ok: true,
      tokens: tokens('wǒ', 'de', 'fàn', 'de', 'jī'),
      trees: [node('ModNP', 0, 5, node('Mod', 0, 2, leaf(0), leaf(1)), node('ModNP', 2, 5, node('Mod', 2, 4, leaf(2), leaf(3)), leaf(4)))],
    };
    const r = readability({ refs: '', parse });
    expect(r.depth).toBe(1);
    expect(r.longestDescription.words).toBe(5);
  });

  test('the longest description wins, and `reading` picks which reading is measured', () => {
    const parse = {
      ok: true,
      tokens: tokens('wǒ', 'de', 'fàn', 'chī', 'de', 'jī'),
      trees: [
        node('Utt', 0, 6, node('ModNP', 0, 3, node('Mod', 0, 2, leaf(0), leaf(1)), leaf(2)), node('ModNP', 3, 6, node('Mod', 3, 5, leaf(3), leaf(4)), leaf(5))),
        node('Utt', 0, 6, node('ModNP', 0, 6, node('Mod', 0, 5, leaf(0), leaf(1)), leaf(5))),
      ],
    };
    expect(readability({ refs: '', parse }).longestDescription.words).toBe(3);
    expect(readability({ refs: '', parse, reading: 1 }).longestDescription.words).toBe(6);
  });

  test('a sentence of one more word than the limit warns', () => {
    const r = measure(`${things(MAX_WORDS + 1)}.`);
    expect(r.words).toBe(MAX_WORDS + 1);
    expect(r.warnings).toContain(`too long: ${MAX_WORDS + 1} words (limit ${MAX_WORDS})`);
    expect(measure(`${things(MAX_WORDS)}.`).warnings).toEqual([]);
  });

  test('nesting deeper than the limit warns; at the limit it does not', () => {
    const over = measure(nested(MAX_DEPTH + 1));
    expect(over.depth).toBe(MAX_DEPTH + 1);
    expect(over.warnings.some((w) => w.startsWith('too deep: '))).toBe(true);
    expect(measure(nested(MAX_DEPTH)).warnings.some((w) => w.startsWith('too deep: '))).toBe(false);
  });

  test('a description longer than the limit warns and says which one', () => {
    // Fàn fàn ... de fàn: the nouns in a row are one modifier
    const text = `${things(MAX_DESCRIPTION)} de fàn.`;
    const r = measure(text);
    expect(r.longestDescription.words).toBe(MAX_DESCRIPTION + 2);
    expect(r.depth).toBe(1);
    expect(r.warnings).toContain(`too long: the description "${r.longestDescription.text}" is ${MAX_DESCRIPTION + 2} words (limit ${MAX_DESCRIPTION})`);
    expect(r.longestDescription.text).toBe(text.slice(0, -1).replace('Fàn', 'fàn')); // the whole sentence, without its capital and end mark
  });

  test('no reading to measure: only the words, and the words warning', () => {
    const r = measure(`${'Wǒ '.repeat(MAX_WORDS + 1).trim()}.`); // wǒ wǒ wǒ ... does not parse
    expect(r.words).toBe(MAX_WORDS + 1);
    expect(r.depth).toBeNull();
    expect(r.longestDescription).toBeNull();
    expect(r.warnings).toEqual([`too long: ${MAX_WORDS + 1} words (limit ${MAX_WORDS})`]);
  });

  test('a stored parse result (no trees) has no depth to give', () => {
    const slim = { ok: true, slim: true, tokens: tokens('wǒ', ',', 'chī'), trees: [{ sym: '?', children: [{ sym: '?', pattern: 'svo' }] }] };
    expect(readability({ refs: '', parse: slim })).toEqual({ words: 2, depth: null, longestDescription: null, warnings: [] });
  });

  test('the text form: the numbers, then a line for each warning', () => {
    expect(renderReadability(measure('Wǒ chī fàn.'))).toEqual(['3 words, depth 0, no description']);
    expect(renderReadability(measure('Wǒ chī wǒ-de fàn.'))).toEqual(['5 words, depth 1, longest description 3 words']);
    const lines = renderReadability(measure(nested(MAX_DEPTH + 1)));
    expect(lines[0]).toMatch(/^\d+ words, depth \d+, longest description \d+ words$/);
    expect(lines.slice(1).every((l) => /^too (long|deep): /.test(l))).toBe(true);
    expect(renderReadability(measure(`${'Wǒ '.repeat(MAX_WORDS + 1).trim()}.`))[0]).toBe(`${MAX_WORDS + 1} words`);
  });
});
