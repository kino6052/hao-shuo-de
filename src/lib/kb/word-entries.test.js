import { describe, expect, test } from 'bun:test';
import { wordEntries } from './word-entries.js';

const words = {
  qiu2: { term: 'qiú', hanzi: '球', pos: { eng: 'noun' }, definition: { eng: 'ball, sphere: {{word:qiu2}} {{word:da3}}, play with a ball; {{word:di4}}-{{word:qiu2}}, the Earth' } },
  ren2: { term: 'rén', hanzi: '人', pos: { eng: 'noun' }, definition: { eng: 'human being, person, somebody' } },
  hai2: { term: 'hái', hanzi: '还', pos: { eng: 'adverb' }, definition: { eng: 'still, also, yet' }, senses: { child: { hanzi: '孩', eng: 'child' } } },
};
const composites = [{ zh: '人', py: 'rén', en: 'human being' }, { zh: '孩子', py: 'háizi', en: 'child' }];
const links = { linked: { 人: ['person'] }, words: { qiu2: ['ball1'], ren2: ['homo'] } };

describe('word entries', () => {
  test('a word no entry repeats becomes an entry, with its first clause as the gloss; a word that has an entry does not', () => {
    const { entries } = wordEntries({ words, composites, links });
    expect(entries.map((e) => e.zh)).toEqual(['人', '孩子', '球', '还', '孩']);
    expect(entries.find((e) => e.zh === '球')).toMatchObject({ py: 'qiú', en: 'ball, sphere', pos: 'noun', word: 'qiu2' });
    expect(entries.find((e) => e.zh === '孩')).toMatchObject({ en: 'child', word: 'hai2' }); // a sense counts too
  });
  test('the word’s links reach the new entry, and an entry keeps its own links', () => {
    const { links: out } = wordEntries({ words, composites, links });
    expect(out.linked).toEqual({ 人: ['person'], 球: ['ball1'] });
    expect(out.words).toEqual(links.words);
  });
  test('nothing in, nothing out', () => {
    expect(wordEntries()).toEqual({ entries: [], links: { linked: {} } });
    expect(wordEntries({ composites }).entries).toEqual(composites);
  });
});
