import { describe, expect, test } from 'bun:test';
import { baseForms, createEnglish, glosses, renderEnglish } from './english.js';

const c = (zh, py, en, pos = 'noun') => ({ zh, py, en, pos });
const composites = [c('买', 'mǎi', 'buy', 'verb'), c('鸟', 'niǎo', 'bird'), c('跑', 'pǎo', 'to run (fast), sprint', 'verb'), c('快', 'kuài', 'quick, fast', 'adjective'), c('书', 'shū', 'book')];
const links = { linked: { 买: ['i1'], 鸟: ['i2'], 快: ['i3'] } };
const index = {
  lemmas: { buy: ['i1'], purchase: ['i1'], bird: ['i2'], sparrow: ['i4'], rapid: ['i3'], quick: ['i3'], 'bird of prey': ['i5'], hawk: ['i6'] },
  synsets: {
    i1: { p: 'v', d: 'obtain by paying', l: ['buy', 'purchase'], h: [] },
    i2: { p: 'n', d: 'warm-blooded egg-laying vertebrate', l: ['bird'], h: ['i7'] },
    i3: { p: 'a', d: 'speedy', l: ['quick', 'rapid'], h: [] },
    i4: { p: 'n', d: 'small brownish bird', l: ['sparrow'], h: ['i2'] },
    i5: { p: 'n', d: 'a bird that hunts', l: ['bird of prey'], h: ['i2'] },
    i6: { p: 'n', d: 'a bird of prey', l: ['hawk'], h: ['i5'] },
    i7: { p: 'n', d: 'an animal', l: ['vertebrate'], h: [] },
  },
};
const en = createEnglish({ composites, links, index });

describe('glosses', () => {
  test('cuts a gloss into the words it offers', () => {
    expect(glosses('to run (fast), sprint')).toEqual(['run', 'sprint']);
    expect(glosses('a quick; the fast one')).toEqual(['quick', 'fast one']);
    expect(glosses('what? which?')).toEqual(['what', 'which']);
  });
  test('base forms of an English word', () => {
    expect(baseForms('cats')).toContain('cat');
    expect(baseForms('running')).toContain('run');
    expect(baseForms('studies')).toContain('study');
  });
});

describe('English lookup', () => {
  test('tier 1: the gloss says it', () => {
    expect(en.lookup('run').glosses.map((e) => e.zh)).toEqual(['跑']);
    expect(en.lookup('to buy').glosses.map((e) => e.zh)).toEqual(['买']);
    expect(en.lookup('Books').glosses.map((e) => e.zh)).toEqual(['书']);
  });
  test('tier 2: a synonym through the same sense', () => {
    const r = en.lookup('purchase');
    expect(r.glosses).toEqual([]);
    expect(r.sameSense[0].entries.map((e) => e.zh)).toEqual(['买']);
    expect(r.sameSense[0].sense.definition).toBe('obtain by paying');
    expect(en.lookup('rapid').sameSense[0].entries.map((e) => e.zh)).toEqual(['快']);
  });
  test('a sense an entry already says by its gloss is not repeated', () => {
    expect(en.lookup('buy').sameSense).toEqual([]);
  });
  test('tier 3: walks up to the first entry and offers a starting description', () => {
    const r = en.lookup('sparrow');
    expect(r.kindOf).toHaveLength(1);
    expect(r.kindOf[0]).toMatchObject({ zh: '鸟', steps: 1, start: '…-de niǎo', via: ['bird'] });
    expect(en.lookup('hawk').kindOf[0]).toMatchObject({ zh: '鸟', steps: 2, via: ['bird of prey', 'bird'] });
  });
  test('tier 3 keeps a later sense only when it is no farther than the first that found an entry', () => {
    const more = createEnglish({
      composites: [c('狗', 'gǒu', 'dog'), c('人', 'rén', 'person'), c('鸟', 'niǎo', 'bird')],
      links: { linked: { 狗: ['d1'], 人: ['p1'], 鸟: ['b1'] } },
      index: {
        lemmas: { puppy: ['d2', 'p2'], pigeon: ['b2', 'p3'] },
        synsets: {
          d1: { p: 'n', d: 'a domestic animal', l: ['dog'], h: [] },
          d2: { p: 'n', d: 'a young dog', l: ['puppy'], h: ['d1'] },
          p1: { p: 'n', d: 'a human being', l: ['person'], h: [] },
          p2: { p: 'n', d: 'an inexperienced young person', l: ['puppy'], h: ['j1'] },
          j1: { p: 'n', d: 'a young person', l: ['juvenile'], h: ['p1'] },
          b1: { p: 'n', d: 'a feathered animal', l: ['bird'], h: [] },
          b2: { p: 'n', d: 'a bird of cities', l: ['pigeon'], h: ['b1'] },
          p3: { p: 'n', d: 'a person who is easily fooled', l: ['pigeon'], h: ['p1'] },
        },
      },
    });
    expect(more.lookup('puppy').kindOf.map((e) => e.zh)).toEqual(['狗']);
    // an equally near second sense is kept
    expect(more.lookup('pigeon').kindOf.map((e) => e.zh)).toEqual(['鸟', '人']);
  });
  test('tier 3 stays quiet when a nearer tier answered', () => {
    expect(en.lookup('purchase').kindOf).toEqual([]);
  });
  test('an irregular form finds the entries of its base, next to its own senses', () => {
    const irregular = createEnglish({
      composites: [c('看', 'kàn', 'see', 'verb')],
      links: { linked: { 看: ['v1'] } },
      index: { lemmas: { see: ['v1'], saw: ['t1'] }, forms: { saw: ['see'], seen: ['see'] }, synsets: { v1: { p: 'v', d: 'perceive', l: ['see'], h: [] }, t1: { p: 'n', d: 'a cutting tool', l: ['saw'], h: [] } } },
    });
    expect(irregular.lookup('seen').sameSense[0].entries.map((e) => e.zh)).toEqual(['看']);
    expect(irregular.lookup('saw').sameSense[0].entries.map((e) => e.zh)).toEqual(['看']);
    expect(irregular.lookup('seen').note).toBeUndefined();
  });
  test('a word the WordNet does not know says so', () => {
    const r = en.lookup('zzyzx');
    expect(r.note).toContain('not in the English WordNet');
    expect(renderEnglish(r)).toContain('Nothing says it yet.');
  });
  test('without the index only the glosses answer, and it says why', () => {
    const lean = createEnglish({ composites, links });
    expect(lean.ready).toBe(false);
    const r = lean.lookup('purchase');
    expect(r.sameSense).toEqual([]);
    expect(r.note).toContain('index is not built');
    expect(lean.lookup('run').glosses.map((e) => e.zh)).toEqual(['跑']);
  });
  test('a link to an entry that is not there is left out', () => {
    const odd = createEnglish({ composites, links: { linked: { 没有: ['i4'] } }, index });
    expect(odd.lookup('sparrow').kindOf).toEqual([]);
  });
  test('senses of an entry, with what each is a kind of', () => {
    expect(en.senses('鸟')).toEqual([{ ili: 'i2', pos: 'n', definition: 'warm-blooded egg-laying vertebrate', lemmas: ['bird'], kindOf: ['vertebrate'] }]);
    expect(en.senses('书')).toEqual([]);
  });
});
