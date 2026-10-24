// The tree step's word lists (tree-words.js): how an entry's form is written for a tree, and the lines of the prompt.
// sentenceWords itself needs the real kb (kb_lookup's rows); scripts/t-eng.js runs it on every sentence.

import { describe, expect, test } from 'bun:test';
import { coreWordLines, itemOf, wordLines } from './tree-words.js';

const chains = { 'nv3 ren2': ['女人'], 'fang2 jian1': ['房间'] };
const compositesOf = (ids) => chains[ids.join(' ')] ?? [];

describe('an entry as a tree writes it', () => {
  test('one word is its id, a chain is the composite with its words', () => {
    expect(itemOf('{{word:ma1ma}}', compositesOf)).toBe('ma1ma');
    expect(itemOf('{{word:nv3}}-{{word:ren2}}', compositesOf)).toBe('女人[nv3 ren2]');
    expect(itemOf('{{word:da4}}-{{word:ren2}}', compositesOf)).toBe('da4-ren2');
  });

  test('a description is a phrase, word by word, with the composites in it', () => {
    expect(itemOf('{{word:xue2}}-{{word:de}} {{word:fang2}}-{{word:jian1}}', compositesOf)).toBe('phrase: xue2 de 房间[fang2 jian1]');
    expect(itemOf('{{word:ba3}} X {{word:fang4}}', compositesOf)).toBe('phrase: ba3 X fang4');
  });
});

describe('the lines of the prompt', () => {
  test('a core word: id, pinyin, hanzi, classes, the head of its English, its senses', () => {
    const words = {
      hao3: { term: 'hǎo', hanzi: '好', pos: { eng: 'adjective' }, definition: { eng: 'good: {{word:hao3}}-{{word:ren2}}, a good person' }, senses: { well: { eng: 'well' } } },
      ren2: { term: 'rén', hanzi: '人', pos: { eng: 'noun' }, definition: { eng: 'person; people' } },
    };
    expect(coreWordLines(words).split('\n')).toEqual(['hao3 hǎo 好 [adjective] good; senses: well (well)', 'ren2 rén 人 [noun] person']);
  });

  test('each English word with what it looks up to; a same sense says so', () => {
    const found = [
      { english: 'woman', items: [{ item: '女人[nv3 ren2]', en: 'woman', tier: 'gloss' }] },
      { english: 'room', items: [{ item: 'phrase: xue2 de 房间[fang2 jian1]', en: 'classroom', tier: 'kind-of' }] },
    ];
    expect(wordLines(found)).toBe('   "woman": 女人[nv3 ren2]\n   "room": phrase: xue2 de 房间[fang2 jian1] (kind-of: classroom)');
    expect(wordLines([])).toMatch(/nothing looked up/);
  });
});
