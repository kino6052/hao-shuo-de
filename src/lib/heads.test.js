import { describe, expect, test } from 'bun:test';
import { compositeHeads, headCounts, headHanzi } from './heads.js';
import { naturalness, coreHanzi } from './naturalness.js';
import { analyzeFamilies, categoryFit, wordCategories } from './graph.js';
import dictionary from '../data/dictionary.ts';
import composites from '../data/composites.ts';
import coverage from '../data/coverage.ts';

const w = (term, hanzi, pos) => ({ term, hanzi, pos: { eng: pos } });
const words = {
  shou3: w('shǒu', '手', 'noun'),
  ji1: w('jī', '机', 'noun'),
  jiao1: w('jiāo', '教', 'verb'),
  de: w('de', '的', 'particle'),
  ren2: w('rén', '人', 'noun'),
  chi1: w('chī', '吃', 'verb'),
  yong4: w('yòng', '用', 'verb'),
  hao3: w('hǎo', '好', 'adjective'),
  kan4: w('kàn', '看', 'verb'),
  dong1: w('dōng', '东', 'noun'),
  xi1: w('xī', '西', 'noun'),
  xiao3: w('xiǎo', '小', 'adjective'),
};
const dict = { words };
const e = (zh, pos, hsd, tts) => ({ zh, pos, hsd, tts, rank: 1 });
const entries = [
  e('手机', 'noun', '{{word:shou3}}-{{word:ji1}}', '手机'),
  e('老师', 'noun', '{{word:jiao1}}-{{word:de}} {{word:ren2}}', '教的人'),
  e('吃饭', 'verb', '{{word:chi1}} {{word:dong1}}-{{light:xi1}}', '吃东西'),
  e('写', 'verb', '{{word:yong4}} {{word:shou3}} {{word:kan4}}', '用手看'),
  e('好看', 'adjective', '{{word:hao3}}-{{word:kan4}}', '好看'),
  e('东西', 'noun', '{{word:dong1}}-{{light:xi1}}', '东西'),
  e('玩具', 'noun', '{{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}', '小的东西'),
];

describe('heads', () => {
  const { heads } = compositeHeads(dict, entries);
  const head = (zh) => {
    const h = heads.get(zh);
    return h.kind === 'word' ? h.id : h.zh;
  };

  test('a noun hangs under its last word: a phone is a kind of jī, a teacher a rén', () => {
    expect(head('手机')).toBe('ji1');
    expect(head('老师')).toBe('ren2');
  });

  test('a verb hangs under its main verb, skipping helpers like yòng', () => {
    expect(head('吃饭')).toBe('chi1');
    expect(head('写')).toBe('kan4');
  });

  test('an adjective hangs under its adjective', () => {
    expect(head('好看')).toBe('hao3');
  });

  test('a description ending in another entry\'s compound hangs under that compound', () => {
    expect(head('玩具')).toBe('东西');
    expect(head('东西')).toBe('xi1');
    const { under, direct } = headCounts(dict, entries);
    expect(direct.get('c:东西').map((x) => x.zh)).toEqual(['玩具']);
    expect(under.get('xi1').map((x) => x.zh).sort()).toEqual(['东西', '玩具']);
  });

  test('an entry\'s own head wins', () => {
    const { heads: h } = compositeHeads(dict, [{ ...entries[0], head: 'shou3' }]);
    expect(h.get('手机')).toEqual({ kind: 'word', id: 'shou3' });
  });
});

describe('naturalness', () => {
  const { heads } = compositeHeads(dict, entries);
  const score = (zh) => {
    const entry = entries.find((x) => x.zh === zh);
    return naturalness(entry, headHanzi(heads.get(zh), words));
  };

  test("Mandarin's own word scores 5, a description with nothing shared 1", () => {
    expect(score('手机')).toBe(5);
    expect(score('老师')).toBe(1);
  });

  test("a verb's core is its first hanzi, a noun's its last", () => {
    expect(coreHanzi({ zh: '吃饭', pos: 'verb' })).toBe('吃');
    expect(coreHanzi({ zh: '手机', pos: 'noun' })).toBe('机');
    expect(score('吃饭')).toBe(3);
  });

  test('no form, no score', () => {
    expect(naturalness({ zh: '啊', fit: 'gap' }, '')).toBe(null);
  });
});

describe('families (the real vocabulary)', () => {
  const a = analyzeFamilies({ dictionary, composites, coverage });
  const leaf = (key) => [...wordCategories(dictionary)].filter(([id, c]) => c.leaf === key && dictionary.words[id]).map(([id]) => id);

  test('the numbers are one family', () => {
    const nums = leaf('numbers-ordinals');
    expect(nums.length).toBeGreaterThan(5);
    expect(new Set(nums.map((id) => a.parts.get(id))).size).toBe(1);
    expect(a.parts.get(nums[0])).toBeGreaterThanOrEqual(0);
  });

  test('the categories hold together', () => {
    expect(categoryFit(dictionary, a.parts).purity).toBeGreaterThan(0.9);
  });

  test('every composite with a form has a head and a family (names in quotes have none)', () => {
    const formed = composites.entries.filter((x) => x.hsd && x.fit !== 'name');
    expect(formed.every((x) => a.heads.has(x.zh))).toBe(true);
    expect(formed.filter((x) => !a.compositeFamily.has(x.zh)).length).toBe(0);
  });
});
