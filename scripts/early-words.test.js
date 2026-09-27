import { describe, expect, test } from 'bun:test';
import { findEarlyWords, wordsIn, termIndex } from './early-words.js';

// A tiny dictionary and book: lesson 2 introduces shì and rén, lesson 3
// introduces hǎo and gè.
const dictionary = {
  shi4: { term: 'shì' },
  ren2: { term: 'rén' },
  hao3: { term: 'hǎo' },
  ge4: { term: 'gè' },
  de: { term: 'de' },
  zhe4: { term: 'zhè' },
};
const vocab = (id) => ({ key: `vocab-${id}`, type: 'vocab', term: `{{word:${id}}}`, en: ['gloss'] });
const book = (lesson2Extra = [], lesson3Extra = []) => [
  { id: 'lesson-01', number: 1, entries: [{ key: 'p', type: 'prose', en: ['{{word:hao3}} is a sound example.'] }] },
  { id: 'lesson-02', number: 2, entries: [vocab('shi4'), vocab('ren2'), vocab('zhe4'), ...lesson2Extra] },
  { id: 'lesson-03', number: 3, entries: [vocab('hao3'), vocab('ge4'), vocab('de'), ...lesson3Extra] },
];
const kinds = (problems) => problems.map((p) => `${p.lesson}:${p.kind}:${p.word}`);

describe('findEarlyWords', () => {
  test('a clean book has no problems', () => {
    const example = { key: 'ex', type: 'example', pinyin: '{{Word:ren2}} {{word:shi4}} {{word:hao3}}.', en: ['People are good.'] };
    expect(findEarlyWords(book([], [example]), dictionary).problems).toEqual([]);
  });

  test('a word used before its lesson is flagged, with where it came from', () => {
    const example = { key: 'example1', type: 'example', pinyin: '{{Word:ren2}} {{word:hen3}}', en: ['x'] };
    const prose = { key: 'prose1', type: 'prose', en: ['Say {{word:hao3}}.'] };
    const { problems } = findEarlyWords(book([prose]), dictionary);
    expect(problems).toEqual([
      { lesson: 'lesson-02', key: 'prose1', kind: 'early', word: 'hǎo', home: 3, text: 'Say {{word:hao3}}.' },
    ]);
    // hen3 isn't in this dictionary at all
    expect(kinds(findEarlyWords(book([example]), dictionary).problems)).toEqual(['lesson-02:not-in-dictionary:hen3']);
  });

  test('using a word in its own lesson is fine', () => {
    const prose = { key: 'p', type: 'prose', en: ['{{word:hao3}} means good.'], tldr: { en: ['Use {{word:hao3}}.'] } };
    expect(findEarlyWords(book([], [prose]), dictionary).problems).toEqual([]);
  });

  test('lesson 1 is exempt', () => {
    expect(findEarlyWords(book(), dictionary).problems).toEqual([]);
  });

  test('tldr, necessity, callout items, and vocab glosses are checked too', () => {
    const prose = { key: 'p', type: 'prose', en: ['ok'], tldr: { en: ['{{word:hao3}}'] }, necessity: { en: ['{{word:hao3}}'] } };
    const info = { key: 'i', type: 'info', title: { en: ['{{word:hao3}}'] }, items: [{ text: { en: ['a'] }, items: [{ text: { en: ['{{word:hao3}}'] } }] }] };
    const gloss = { key: 'v', type: 'vocab', term: '{{word:shi4}}', en: ['like {{word:hao3}}'] };
    const lesson2 = [prose, info, gloss];
    expect(kinds(findEarlyWords(book(lesson2), dictionary).problems)).toEqual(Array(5).fill('lesson-02:early:hǎo'));
  });

  test('plain pinyin with tone marks counts, in any text', () => {
    const prose = { key: 'p', type: 'prose', en: ['Say `hǎo` or `kěyǐ`.'] };
    expect(kinds(findEarlyWords(book([prose]), dictionary).problems)).toEqual([
      'lesson-02:early:hǎo',
      'lesson-02:not-in-dictionary:kěyǐ',
    ]);
  });

  test('the "ge" in zhè-ge counts as gè in example pinyin and answers', () => {
    const example = { key: 'e', type: 'example', pinyin: '{{Word:zhe4}}-ge {{word:shi4}} {{word:ren2}}.', en: ['This one is a person.'] };
    const answer = { key: 'a', type: 'answer', en: ['{{Word:zhe4}}-ge {{word:shi4}} {{word:ren2}}.'] };
    expect(kinds(findEarlyWords(book([example, answer]), dictionary).problems)).toEqual([
      'lesson-02:early:gè',
      'lesson-02:early:gè',
    ]);
  });

  test('"men" in example pinyin is flagged as not in the dictionary', () => {
    const example = { key: 'e', type: 'example', pinyin: '{{Word:ren2}}-men.', en: ['People.'] };
    expect(kinds(findEarlyWords(book([example]), dictionary).problems)).toEqual(['lesson-02:not-in-dictionary:men']);
  });

  test('toneless English words in prose are not mistaken for pinyin', () => {
    const prose = { key: 'p', type: 'prose', en: ['He gave me a ge-style de facto answer.'] };
    expect(findEarlyWords(book([prose]), dictionary).problems).toEqual([]);
  });

  test('the name Hǎo-shuō-de is not vocabulary', () => {
    const example = { key: 'e', type: 'example', pinyin: '{{Word:ren2}} {{word:shi4}} Hǎo-shuō-de.', en: ['x'] };
    expect(findEarlyWords(book([example]), dictionary).problems).toEqual([]);
  });

  test('a dictionary word no lesson introduces is flagged', () => {
    const dict = { ...dictionary, lai2: { term: 'lái' } };
    const prose = { key: 'p', type: 'prose', en: ['{{word:lai2}}'] };
    expect(kinds(findEarlyWords(book([], [prose]), dict).problems)).toEqual(['lesson-03:never-introduced:lái']);
  });
});

describe('wordsIn', () => {
  const terms = termIndex(dictionary);
  test('finds refs and tone-marked pinyin, skips sounds and names in pinyin fields', () => {
    const found = wordsIn('{{Word:ren2}} jiào "wang-wang", Lisa hǎo.', terms, { pinyinField: true });
    expect(found.map((f) => f.id ?? f.token)).toEqual(['ren2', 'jiào', 'hao3']);
  });
});
