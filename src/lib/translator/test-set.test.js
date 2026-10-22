// TRANSLATOR_PLAN.md F1-F3: the test set from the stories and the everyday sentences, and the set's numbers against Q8's bar.

import { describe, expect, test } from 'bun:test';
import { BAR_SENTENCES_KEPT, overlap, sentenceItems, setScore, storyItems, wordIdsOf } from './test-set.js';
import { source } from '../kb/fixture.js';

describe('the items', () => {
  test('a story: its heading, its sentences\' English joined, and the book\'s own Hao-shuo-de', () => {
    const entries = [
      { type: 'title', en: ['Ten Short Stories'] },
      { type: 'prose', en: ['Ten tales.'] },
      { type: 'prose', en: ['## 1. The Hare'] },
      { type: 'story', pinyin: '{{Word:wo3}} {{word:chi1}}.', en: ['I eat.'] },
      { type: 'story', pinyin: '{{Word:wo3}} {{word:fei1}}.', en: ['I fly.'] },
      { type: 'prose', en: ['## 2. The Fox'] },
      { type: 'story', pinyin: '{{Word:wo3}}.', en: ['Me.'] },
    ];
    expect(storyItems(entries)).toEqual([
      { id: 'story-1', kind: 'story', title: 'The Hare', english: 'I eat. I fly.', book: '{{Word:wo3}} {{word:chi1}}. {{Word:wo3}} {{word:fei1}}.' },
      { id: 'story-2', kind: 'story', title: 'The Fox', english: 'Me.', book: '{{Word:wo3}}.' },
    ]);
  });

  test('the everyday sentences: the first 100 by default', () => {
    const pairs = Array.from({ length: 150 }, (_, i) => ({ id: String(i), en: `s${i}`, zh: '好' }));
    expect(sentenceItems(pairs)).toHaveLength(100);
    expect(sentenceItems(pairs, { limit: 2 })).toEqual([{ id: 'sentence-0', kind: 'sentence', english: 's0', zh: '好' }, { id: 'sentence-1', kind: 'sentence', english: 's1', zh: '好' }]);
  });
});

describe('overlap', () => {
  test('pinyin and refs give the same words; the share is over both texts', () => {
    expect(wordIdsOf('Wǒ chī fàn.', source.words)).toEqual(['wo3', 'chi1', 'fan4']);
    expect(wordIdsOf('{{Word:wo3}} {{word:chi1}}.', source.words)).toEqual(['wo3', 'chi1']);
    expect(overlap(['a', 'b'], ['b', 'c'])).toBe(0.333);
    expect(overlap([], [])).toBe(1);
  });
});

describe('setScore (Q8)', () => {
  const check = { unknown: [], parses: true, readings: 2, means: 'yes-with-others', words: 4 };
  const result = (verdicts, over = {}) => ({
    sentences: [{ ideas: ['i1'], check }, { ideas: ['i2'], check }],
    sketch: [{ id: 'i1', needed: true, verdict: verdicts[0] }, { id: 'i2', needed: true, verdict: verdicts[1] }],
    added: [],
    ...over,
  });

  test('9 of 10 sentences keeping their ideas passes; 8 of 10 does not', () => {
    const nine = [...Array(4).fill(result(['kept', 'kept'])), result(['kept', 'lost'])];
    const s = setScore(nine);
    expect(s).toMatchObject({ texts: 5, sentences: 10, hsdOnly: 1, meant: 1, readings: 2, words: 4, sentencesKept: 0.9, passes: 4, pass: true });
    expect(BAR_SENTENCES_KEPT).toBe(0.9);
    expect(setScore([...Array(3).fill(result(['kept', 'kept'])), result(['kept', 'lost']), result(['weaker', 'kept'])]).pass).toBe(false);
  });

  test('one sentence with a word that is not Hao-shuo-de fails the set; so does a text with no blind reader', () => {
    const bad = result(['kept', 'kept'], { sentences: [{ ideas: ['i1'], check: { ...check, unknown: ['x'] } }, { ideas: ['i2'], check }] });
    expect(setScore([bad]).pass).toBe(false);
    expect(setScore([result([null, null])])).toMatchObject({ kept: null, sentencesKept: null, pass: false });
  });
});
