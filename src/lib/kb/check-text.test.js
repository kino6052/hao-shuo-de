// TRANSLATOR_PLAN.md B1, B5: kb_check_text on a tiny grammar of our own, so a word's and a pattern's lesson
// are both known exactly (the fixture's own lessons do not teach every fixture word).

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { askCheckText } from './check-text.js';
import { source } from './fixture.js';

const entry = (type, module, key, extra = {}) => ({ type, module, key, ...extra });

const lessons = [
  { id: 'basics', number: 1, entries: [entry('vocab', 'eat', 'eat.vocab0', { term: '{{word:wo3}}' }), entry('vocab', 'eat', 'eat.vocab1', { term: '{{word:chi1}}' }), entry('vocab', 'eat', 'eat.vocab2', { term: '{{word:fan4}}' }), entry('vocab', 'owner', 'owner.vocab0', { term: '{{word:de}}' })] },
  { id: 'more', number: 2, entries: [entry('vocab', 'fly', 'fly.vocab0', { term: '{{word:fei1}}' })] },
];

const patterns = [
  {
    id: 'svo',
    taught: 'basics/eat',
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
    id: 'de-modifier',
    taught: 'more/fly',
    meaning: { eng: 'whose' },
    rules: [
      { lhs: 'Utt', hsd: 'NP' },
      { lhs: 'NP', hsd: 'NP de NP' },
    ],
  },
];

const kb = createKb({ ...source, lessons, patterns });

describe('askCheckText', () => {
  test('a sentence of only words and patterns taught by the lesson: ok, nothing late', () => {
    const r = askCheckText(kb, { text: 'Wǒ chī fàn.', lesson: 1 }).data;
    const s = r.sentences[0];
    expect(s.ok).toBe(true);
    expect(s.unknown).toEqual([]);
    expect(s.lateWords).toEqual([]);
    expect(s.patterns.every((p) => !p.late)).toBe(true);
    expect(s.hanzi).toBe('我 吃 饭.'); // mechanical: one hanzi per ref, spacing and punctuation carried over as-is
  });

  test('a word taught later is named, even though the sentence still parses at this level', () => {
    const r = askCheckText(kb, { text: 'Wǒ fēi.', lesson: 1 }).data;
    const s = r.sentences[0];
    expect(s.ok).toBe(true); // svo (lesson 1) covers "pronoun verb", fēi fits @verb regardless of its own lesson
    expect(s.lateWords).toEqual([{ id: 'fei1', term: 'fēi', lesson: 2 }]);
  });

  test('a pattern taught later makes the sentence fail at this level, and is named as the structure used', () => {
    const r = askCheckText(kb, { text: 'Wǒ-de fàn.', lesson: 1 }).data;
    const s = r.sentences[0];
    expect(s.ok).toBe(false); // de-modifier (lesson 2) is not in lesson 1's grammar
    expect(s.explain).toBeTruthy();
    // the full (unrestricted) parse also credits svo, whose NP rules give wǒ and fàn their own leaves
    expect(s.patterns).toEqual([
      { id: 'de-modifier', lesson: 2, meaning: 'whose', late: true },
      { id: 'svo', lesson: 1, meaning: 'who does what', late: false },
    ]);
  });

  test('with no lesson, the whole dictionary answers and nothing is "late"', () => {
    const r = askCheckText(kb, { text: 'Wǒ-de fàn.' }).data;
    expect(r.lesson).toBeNull();
    const s = r.sentences[0];
    expect(s.ok).toBe(true);
    expect(s.lateWords).toEqual([]);
    expect(s.patterns).toEqual([
      { id: 'de-modifier', lesson: 2, meaning: 'whose', late: false },
      { id: 'svo', lesson: 1, meaning: 'who does what', late: false },
    ]);
  });

  test('an unknown word is named, with a suggestion when one fits', () => {
    const r = askCheckText(kb, { text: 'Wǒ hdfkj.' }).data;
    const s = r.sentences[0];
    expect(s.ok).toBe(false);
    expect(s.unknown).toHaveLength(1);
    expect(s.unknown[0].token).toBe('hdfkj');
  });

  test('several sentences are checked one by one', () => {
    const r = askCheckText(kb, { text: 'Wǒ chī fàn. Wǒ fēi.', lesson: 1 }).data;
    expect(r.sentences).toHaveLength(2);
    expect(r.ok).toBe(true); // fēi is late but the sentence still parses; checkText's `ok` tracks parsing, not lateness
  });

  test('text is required; an unknown lesson is an error', () => {
    expect(() => askCheckText(kb, {})).toThrow('text is required');
    expect(() => askCheckText(kb, { text: 'Wǒ chī.', lesson: 'nope' })).toThrow(/no lesson/);
  });

  test('the text form reads like kb_parse\'s, with a heading that names the level', () => {
    const r = askCheckText(kb, { text: 'Wǒ chī fàn.', lesson: 1 }).text;
    expect(r).toMatch(/^Checked at lesson 1 \(basics\)/);
    expect(r).toContain('parses at this level');
  });
});
