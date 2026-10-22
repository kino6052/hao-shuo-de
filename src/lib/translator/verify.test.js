// TRANSLATOR_PLAN.md steps 6 and 7 run by the pipeline, not by Claude: verify.js on a tiny grammar of our own (the one
// check-text.test.js uses), so a word's lesson and a pattern's are both known exactly.

import { describe, expect, test } from 'bun:test';
import { createKb } from '../kb/kb.js';
import { askReading } from '../kb/check-reading.js';
import { source } from '../kb/fixture.js';
import { levelOf, verifyAnswer } from './verify.js';

const entry = (type, module, key, extra = {}) => ({ type, module, key, ...extra });
const lessons = [
  { id: 'basics', number: 1, entries: [entry('vocab', 'eat', 'eat.vocab0', { term: '{{word:wo3}}' }), entry('vocab', 'eat', 'eat.vocab1', { term: '{{word:chi1}}' }), entry('vocab', 'eat', 'eat.vocab2', { term: '{{word:fan4}}' })] },
  { id: 'more', number: 2, entries: [entry('vocab', 'fly', 'fly.vocab0', { term: '{{word:fei1}}' })] },
];
const patterns = [
  { id: 'svo', taught: 'basics/eat', meaning: { eng: 'who does what' }, rules: [{ lhs: 'Utt', hsd: 'S' }, { lhs: 'S', hsd: 'NP VP' }, { lhs: 'NP', hsd: '@pronoun' }, { lhs: 'NP', hsd: '@noun' }, { lhs: 'VP', hsd: '@verb NP' }, { lhs: 'VP', hsd: '@verb' }] },
];
const kb = createKb({ ...source, lessons, patterns });

const sentence = (pinyin, over = {}) => ({ pinyin, english: '', literally: '', reading: '', source: '', ideas: ['i1'], ...over });
const answer = (sentences, over = {}) => ({ sketch: [{ id: 'i1', idea: 'I eat', needed: true, links: '' }], sentences, cast: [], structures: [], gaps: [], notes: '', ...over });

describe('levelOf', () => {
  test('a number, an id, "lesson 2", or nothing', () => {
    expect(levelOf(kb, 1)).toEqual({ lesson: { id: 'basics', number: 1 } });
    expect(levelOf(kb, 'more')).toEqual({ lesson: { id: 'more', number: 2 } });
    expect(levelOf(kb, 'Lesson 2').lesson.number).toBe(2);
    expect(levelOf(kb, '')).toEqual({ lesson: null });
    expect(levelOf(kb, undefined)).toEqual({ lesson: null });
  });

  test('a lesson that does not exist fails with a sentence for the person', () => {
    let e;
    try {
      levelOf(kb, '99');
    } catch (err) {
      e = err;
    }
    expect(e.userMessage).toBe('There is no lesson "99". Give a lesson number from 1 to 2, or leave it empty for the whole dictionary.');
  });
});

describe('verifyAnswer', () => {
  const bracket = askReading(kb, { text: 'Wǒ chī fàn.', reading: '1' }).data.bracket;

  test('a good sentence with its reading: ok, with hanzi, gloss and the numbers', () => {
    const v = verifyAnswer(kb, answer([sentence('Wǒ chī fàn.', { reading: bracket })]), { lesson: { id: 'basics', number: 1 } });
    expect(v.ok).toBe(true);
    expect(v.problems).toEqual([]);
    expect(v.sentences[0].hanzi).toBe('我 吃 饭.');
    expect(v.sentences[0].refs).toBe('{{Word:wo3}} {{word:chi1}} {{word:fan4}}.'); // capital: the sentence's first word, as the book writes it
    expect(v.sentences[0].gloss.length).toBeGreaterThan(0);
    expect(v.sentences[0].check).toMatchObject({ unknown: [], parses: true, means: 'yes', words: 3, late: [] });
  });

  test('no reading given: it still passes, and means is null', () => {
    const v = verifyAnswer(kb, answer([sentence('Wǒ chī fàn.')]));
    expect(v.ok).toBe(true);
    expect(v.sentences[0].check.means).toBeNull();
  });

  test('a word that is not Hao-shuo-de, a reading it cannot have, a late word: each is a problem', () => {
    const v = verifyAnswer(kb, answer([sentence('Wǒ wàng fàn.'), sentence('Wǒ chī fàn.', { reading: '[nonsense]' }), sentence('Wǒ fēi.')]), { lesson: { id: 'basics', number: 1 } });
    expect(v.ok).toBe(false);
    expect(v.problems[0]).toMatch(/^sentence 1 uses what is not a Hao-shuo-de word: .*wàng/);
    expect(v.problems).toContain('sentence 2 cannot mean the reading given');
    expect(v.problems).toContain('sentence 3 uses fēi (lesson 2), taught after lesson 1');
    expect(v.sentences[0].check.parses).toBe(false);
    expect(v.sentences[0].refs).toBe('');
  });

  test('a sentence that does not parse at all, and the answer\'s own problems', () => {
    const v = verifyAnswer(kb, answer([sentence('Fàn fàn fàn wǒ.', { ideas: ['i7'] })]));
    expect(v.problems).toContain('sentence 1 does not parse');
    expect(v.problems).toContain('sentence 1 names the idea "i7", which is not in the sketch');
  });

  test('the cast list is counted in dictionary words', () => {
    const long = 'wǒ chī fàn wǒ chī fàn wǒ';
    const v = verifyAnswer(kb, answer([sentence(`${long}.`), sentence(`${long}.`)], { cast: [{ thing: 'x', description: long, short: 'tā' }] }));
    expect(v.castProblems).toEqual(['x: the 7-word description comes 2 times; after the first, say "tā"']);
    expect(v.ok).toBe(false);
  });
});
