import { describe, expect, test } from 'bun:test';
import { createEnglish } from './english.js';
import { frontier, renderFrontier } from './frontier.js';

const c = (zh, py, en, pos = 'noun') => ({ zh, py, en, pos });
const composites = [c('水', 'shuǐ', 'water'), c('杯', 'bēi', 'bottle, cup'), c('吃', 'chī', 'eat', 'verb'), c('爸爸', 'bàba', 'dad, pop')];
const syn = (l, d, o = {}) => ({ p: 'n', d, l: [l], h: [], ...o });
const index = {
  lemmas: { will: ['will1'], purchase: ['buy1'], liquid: ['liquid1'], thing: ['thing1'], stuff: ['stuff1'], odd: ['odd1'], bottle: ['bottle1'], ball: ['ball1'] },
  synsets: {
    will1: syn('will', 'the capacity for choice', { z: ['意志'] }),
    buy1: syn('purchase', 'obtain by payment', { z: ['买', '购买'] }),
    liquid1: syn('liquid', 'a fluid', { z: ['水'] }),
    thing1: syn('thing', 'a separate object'),
    stuff1: syn('stuff', 'miscellaneous things'),
    odd1: syn('odd', 'unusual', { z: ['罕见'] }),
    bottle1: syn('bottle', 'a glass container', { z: ['瓶'] }),
    ball1: syn('ball', 'a round object', { l: ['ball', 'pop'], z: ['球'] }),
  },
};
const english = createEnglish({ composites, links: { linked: {} }, index });
const words = { mei2: { term: 'méi', hanzi: '没' } };
const mandarin = [
  { zh: '意志', py: 'yìzhì', rank: 1500 },
  { zh: '买', py: 'mǎi', rank: 50 },
  { zh: '购买', py: 'gòumǎi', rank: 900 },
  { zh: '瓶', py: 'píng', rank: 400 },
  { zh: '球', py: 'qiú', rank: 120 },
  { zh: '没有', py: 'méiyǒu', rank: 30 },
];
const yardsticks = {
  englishTop: { missing: ['purchase', 'liquid', 'the', 'thing', 'stuff', 'odd', 'will'] },
  basic: { words: [{ en: 'thing', zh: ['东西'], zhSaid: true }] },
  mandarin: { missing: [{ zh: '球', py: 'qiú', rank: 120 }, { zh: '瓶', py: 'píng', rank: 400 }] },
  sentences: { total: 10, said: 6, oneAway: 3, missing: [{ char: '没', unlocks: 3, sentences: 5 }], examples: [] },
};
const run = (over = {}) => frontier({ yardsticks, english, composites, words, mandarin, ...over });
const fixOf = (r, en) => r.words.items.find((i) => i.en === en);

describe('English words the dictionary cannot say', () => {
  test('a common Mandarin word that is no entry yet is the fix, the most common first', () => {
    const w = fixOf(run(), 'purchase');
    expect(w).toMatchObject({ fix: 'add', best: '买 mǎi', rank: 1 });
    expect(w.zh.map((x) => x.zh)).toEqual(['买', '购买']);
  });
  test('an entry WordNet gives for the sense, not linked to it, is a link to make, with the sense that names it', () => {
    expect(fixOf(run(), 'liquid')).toMatchObject({ fix: 'link', sense: 'liquid: a fluid' });
    expect(fixOf(run(), 'liquid').zh[0]).toMatchObject({ zh: '水', have: true });
  });
  test('a function word, a word with no sense, or one the author’s own Mandarin entry says: grammar, not a word to add', () => {
    expect(fixOf(run(), 'the').fix).toBe('grammar');
    expect(fixOf(run(), 'will')).toMatchObject({ fix: 'grammar', zh: [], best: undefined }); // its first sense (a wish, 意志) would only mislead
    expect(fixOf(run(), 'thing')).toMatchObject({ fix: 'grammar', author: ['东西'] });
  });
  test('rare Mandarin only, and a sense with no Mandarin at all', () => {
    expect(fixOf(run(), 'odd').fix).toBe('rare');
    expect(fixOf(run(), 'stuff').fix).toBe('none');
  });
  test('counts the fixes', () => {
    expect(run().words.counts).toEqual({ add: 1, link: 1, grammar: 3, rare: 1, none: 1 });
  });
});

describe('Mandarin words and sentences', () => {
  test('a missing common word shows its English meaning and what already says it', () => {
    const [ball, bottle] = run().mandarin.items;
    expect(ball).toMatchObject({ zh: '球', rank: 120, saidBy: [] }); // "pop" is another word of the sense, not what it is called
    expect(ball.meaning[0]).toContain('ball');
    expect(bottle.saidBy).toEqual(['杯 bēi']);
  });
  test('an entry linked to the sense says it too', () => {
    const linked = createEnglish({ composites, links: { linked: { 水: ['bottle1'] } }, index });
    const [, bottle] = run({ english: linked }).mandarin.items;
    expect(bottle.saidBy).toEqual(['水 shuǐ', '杯 bēi']);
  });
  test('a character one away: how many sentences it unlocks, and the common words that carry it', () => {
    const [m] = run().sentences.chars;
    expect(m).toMatchObject({ char: '没', unlocks: 3, isWord: ['méi'], carriedBy: ['没有 méiyǒu'], inEntries: [] });
  });
  test('a character that is already inside an entry says so: the sentences spell it another way', () => {
    const r = run({ composites: [...composites, c('没事', 'méishì', 'no problem')] });
    expect(r.sentences.chars[0].inEntries).toEqual(['没事 méishì']);
  });
});

describe('without the English index', () => {
  const lean = frontier({ yardsticks, english: createEnglish({ composites }), composites, words, mandarin });
  test('nothing can be named', () => {
    expect(lean.ready).toBe(false);
    expect(renderFrontier(lean)).toContain('index is not built');
  });
});

describe('render', () => {
  test('the three parts, or one on request', () => {
    const text = renderFrontier(run());
    expect(text).toContain('English words in the common 3000 the dictionary cannot say: 7');
    expect(text).toContain('purchase (#1): 买 mǎi (rank 50)');
    expect(text).toContain('Common Mandarin words with no entry');
    expect(text).toContain('6 of 10 are covered');
    const one = renderFrontier(run(), { part: 'sentences' });
    expect(one).not.toContain('English words');
    expect(one).toContain('没: 3 sentences alone, 5 in all');
  });
  test('limit cuts a long list and says how many more', () => {
    expect(renderFrontier(run(), { part: 'words', limit: 1 })).toContain('… 2 more'); // three grammar words, one shown
  });
});
