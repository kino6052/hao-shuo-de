import { describe, expect, test } from 'bun:test';
import { createEnglish } from './english.js';
import { englishVerdict, renderYardsticks, uncovered, yardstickReport } from './yardsticks.js';

const composites = [
  { zh: '买', py: 'mǎi', en: 'buy', pos: 'verb' },
  { zh: '鸟', py: 'niǎo', en: 'bird', pos: 'noun' },
  { zh: '水', py: 'shuǐ', en: 'water', pos: 'noun' },
];
const index = {
  lemmas: { buy: ['i1'], purchase: ['i1'], bird: ['i2'], sparrow: ['i4'], water: ['i5'] },
  synsets: {
    i1: { p: 'v', d: 'obtain by paying', l: ['buy', 'purchase'], h: [] },
    i2: { p: 'n', d: 'an animal that flies', l: ['bird'], h: [] },
    i4: { p: 'n', d: 'small bird', l: ['sparrow'], h: ['i2'] },
    i5: { p: 'n', d: 'a liquid', l: ['water'], h: [] },
  },
};
const english = createEnglish({ composites, links: { linked: { 买: ['i1'], 鸟: ['i2'] } }, index });

describe('English verdicts', () => {
  test('said by a gloss or a shared sense, near by a kind of, else missing', () => {
    expect(englishVerdict(english, 'buy')).toBe('said');
    expect(englishVerdict(english, 'purchase')).toBe('said');
    expect(englishVerdict(english, 'sparrow')).toBe('near');
    expect(englishVerdict(english, 'zzyzx')).toBe('missing');
  });
});

describe('sentence coverage', () => {
  const have = new Set(['我', '吃', '饭', '吃饭', '水', '喝']);
  test('cuts a sentence into the longest entries and names the characters left over', () => {
    expect(uncovered('我吃饭。', have)).toEqual([]);
    expect(uncovered('我爱喝水！', have)).toEqual(['爱']);
    expect(uncovered('你爱他', have)).toEqual(['你', '爱', '他']);
  });
  test('the report counts said, one away, and what each missing character would unlock', () => {
    const entries = ['我', '吃', '饭', '喝', '水'].map((zh) => ({ zh, py: zh, en: zh, pos: 'noun' }));
    const sentences = [
      { zh: '我吃饭。', en: 'I eat.' },
      { zh: '我爱喝水。', en: 'I love to drink.' },
      { zh: '我爱吃饭。', en: 'I love to eat.' },
      { zh: '你爱吃饭。', en: 'You love to eat.' },
    ];
    const r = yardstickReport({ composites: entries, english, sentences }).sentences;
    expect(r).toMatchObject({ total: 4, said: 1, oneAway: 2 });
    expect(r.missing[0]).toEqual({ char: '爱', unlocks: 2, sentences: 3 });
    expect(r.examples[0]).toMatchObject({ zh: '我爱喝水。', char: '爱' });
  });
});

describe('yardstick report', () => {
  const mandarin = [{ zh: '买', py: 'mǎi', rank: 1 }, { zh: '吃', py: 'chī', rank: 2 }, { zh: '水', py: 'shuǐ', rank: 3 }];
  const basic = [{ en: 'buy', group: 'operations', zh: ['买'] }, { en: 'sparrow', group: 'things', zh: ['麻雀'] }, { en: 'eat', group: 'operations', zh: ['吃'] }];
  const r = yardstickReport({ composites, english, mandarin, basic, top: ['buy', 'water', 'sparrow', 'eat'] });

  test('Mandarin: an entry for the word counts as said', () => {
    expect(r.mandarin.bands[0]).toMatchObject({ upTo: 3, said: 2, missing: 1, total: 3 });
    expect(r.mandarin.missing.map((w) => w.zh)).toEqual(['吃']);
  });
  test('English top list: said, near and missing, with the lists', () => {
    expect(r.englishTop.bands[0]).toMatchObject({ upTo: 4, said: 2, near: 1, missing: 1 });
    expect(r.englishTop.missing).toEqual(['eat']);
    expect(r.englishTop.near).toEqual(['sparrow']);
  });
  test('Basic English: the verdicts, and whether the authors Mandarin is an entry', () => {
    expect(r.basic).toMatchObject({ total: 3, said: 1, near: 1, missing: 1, zhSaid: 1 });
    expect(r.basic.words).toEqual([{ en: 'eat', group: 'operations', zh: ['吃'], zhSaid: false }]);
  });
  test('renders every list', () => {
    const text = renderYardsticks(r);
    expect(text).toContain('Mandarin, the 3 common words');
    expect(text).toContain('67% said');
    expect(text).toContain('English, the 4 common words');
    expect(text).toContain('Basic English, 3 words');
  });
});
