import { describe, expect, test } from 'bun:test';
import { crossCheck, renderCrossCheck } from './cross-check.js';

const c = (zh, py, en, pos = 'noun', more = {}) => ({ zh, py, en, pos, ...more });
const words = {
  da4: { term: 'dà', hanzi: '大' },
  xiao3: { term: 'xiǎo', hanzi: '小' },
  ren2: { term: 'rén', hanzi: '人' },
  niao3: { term: 'niǎo', hanzi: '鸟' },
  xue2: { term: 'xué', hanzi: '学' },
  sheng1: { term: 'shēng', hanzi: '生' },
};
const composites = [
  c('大', 'dà', 'big', 'adjective'),
  c('小', 'xiǎo', 'small', 'adjective'),
  c('热', 're', 'hot', 'adjective'),
  c('冷', 'lěng', 'cold', 'adjective'),
  c('暖', 'nuǎn', 'warm', 'adjective'),
  c('快', 'kuài', 'fast', 'adjective'),
  c('手', 'shǒu', 'hand'),
  c('手指', 'shǒuzhǐ', 'finger'),
  c('鸟', 'niǎo', 'bird'),
  c('麻雀', 'máquè', 'sparrow'),
  c('动物', 'dòngwù', 'animal'),
  c('桌子', 'zhuōzi', 'table'),
  c('山', 'shān', 'mountain'),
  c('人', 'rén', 'person'),
  c('老师', 'lǎoshī', 'teacher'),
  c('学生', 'xuésheng', 'student', 'noun', { hsd: '{{word:xue2}}-{{word:sheng1}}', tts: '学生' }),
];
const links = {
  linked: { 大: ['big'], 小: ['small'], 热: ['hot'], 冷: ['cold'], 暖: ['warm'], 快: ['fast'], 手: ['hand'], 手指: ['finger'], 鸟: ['bird'], 麻雀: ['sparrow'], 动物: ['animal'], 桌子: ['table'], 人: ['homo'], 老师: ['teacher'], 学生: ['student'] },
  words: { da4: ['big'], xiao3: ['small'], ren2: ['homo'], niao3: ['bird'] },
};
const syn = (l, o = {}) => ({ p: 'n', d: `the ${l}`, l: [l], h: [], ...o });
const index = {
  lemmas: { person: ['person', 'homo'] },
  synsets: {
    big: syn('big', { p: 'a', l: ['big', 'large'], a: ['small'] }),
    small: syn('small', { p: 'a', a: ['big'] }),
    hot: syn('hot', { p: 'a', a: ['cold'] }),
    cold: syn('cold', { p: 'a', a: ['hot'] }),
    warm: syn('warm', { p: 'a', ai: ['cold'] }),
    fast: syn('fast', { p: 'a' }),
    hand: syn('hand'),
    finger: syn('finger', { w: ['hand'] }),
    animal: syn('animal'),
    bird: syn('bird', { h: ['animal'] }),
    sparrow: syn('sparrow', { h: ['bird'] }),
    table: syn('table', { h: ['furniture'] }),
    furniture: syn('furniture'),
    homo: syn('homo'),
    person: syn('person'),
    teacher: syn('teacher', { h: ['person'] }),
    student: syn('student'),
  },
};
const rel = (kind, a, b, more = {}) => ({ kind, status: 'accepted', a, b, ...more });
const startsFrom = (zh) => (zh === '桌子' ? [{ zh: '家具', py: 'jiājù', steps: 1, via: ['furniture'], start: '…-de jiājù' }] : []);
const run = (relations, over = {}) => crossCheck({ relations, words, composites, links, index, startsFrom, ...over });

describe('kind of', () => {
  test('agrees when WordNet calls the entry a kind of its head, and says by which steps', () => {
    const r = run([rel('kind-of', '麻雀', '鸟'), rel('kind-of', '麻雀', 'niao3')]);
    expect(r.kindOf.verdicts.agree).toBe(2);
    expect(r.kindOf.items[0].detail).toBe('sparrow < bird');
  });
  test('reversed, unrelated and sibling are told apart', () => {
    const r = run([rel('kind-of', '动物', '鸟'), rel('kind-of', '手指', '鸟'), rel('kind-of', '鸟', '动物')]);
    expect(r.kindOf.verdicts).toMatchObject({ reversed: 1, unrelated: 1, agree: 1 });
    const sib = run([rel('kind-of', '麻雀', '桌子')], { index: { ...index, synsets: { ...index.synsets, table: syn('table', { h: ['animal'] }) } } });
    expect(sib.kindOf.verdicts.sibling).toBe(1);
  });
  test('a disagreement carries the kind WordNet would start from', () => {
    const r = run([rel('kind-of', '桌子', '鸟')]);
    expect(r.kindOf.items[0].detail).toContain('WordNet would start it from 家具 jiājù (furniture)');
  });
  test('a head linked to another sense of its word: it would agree with that one', () => {
    const r = run([rel('kind-of', '老师', 'ren2')]);
    expect(r.kindOf.verdicts['other-sense']).toBe(1);
    expect(r.kindOf.items[0]).toMatchObject({ alt: 'person' });
    expect(r.kindOf.byHead[0]).toMatchObject({ head: 'rén 人', n: 1, other: [{ sense: 'person', n: 1 }] });
  });
  test('an entry that is its own word, a spelled compound and an unlinked end are not compared', () => {
    const r = run([rel('kind-of', '人', 'ren2'), rel('kind-of', '学生', 'sheng1'), rel('kind-of', '山', '鸟'), rel('kind-of', '麻雀', '没有')]);
    expect(r.kindOf.total).toBe(2);
    expect(r.kindOf.spelled).toBe(1);
    expect(r.kindOf.unchecked).toBe(2);
  });
});

describe('opposites', () => {
  test('agree directly, through a similar sense, differ, and stay silent', () => {
    const r = run([rel('opposite', 'da4', 'xiao3'), rel('opposite', '暖', '冷'), rel('opposite', '大', '冷'), rel('opposite', '快', '手')]);
    expect(r.opposites.verdicts).toMatchObject({ agree: 1, indirect: 1, differs: 1, silent: 1 });
    expect(r.opposites.items.find((i) => i.verdict === 'differs').detail).toContain('big is opposite to small');
  });
  test('the same words as opposites on another sense of one of them is told apart from a plain disagreement', () => {
    const r = run([rel('opposite', '来', '去')], {
      composites: [...composites, c('来', 'lái', 'come', 'verb'), c('去', 'qù', 'go', 'verb')],
      links: { ...links, linked: { ...links.linked, 来: ['come1'], 去: ['go1'] } },
      index: {
        ...index,
        synsets: {
          ...index.synsets,
          come1: syn('come', { p: 'v', d: 'arrive' }),
          come2: syn('come', { p: 'v', d: 'move toward', a: ['go1'] }),
          go1: syn('go', { p: 'v', d: 'move away', a: ['come2'] }),
        },
      },
    });
    expect(r.opposites.verdicts['other-sense']).toBe(1);
    expect(r.opposites.items[0].detail).toContain('go is the opposite of "come" (move toward), not the linked "come" (arrive)');
  });
  test('lists the opposites WordNet states between two entries that the dictionary does not', () => {
    const r = run([rel('opposite', 'da4', 'xiao3')]);
    const pairs = r.missing.opposites.map((m) => [m.a, m.b].map((x) => x.split(' ')[0]).sort().join('|'));
    expect(pairs).toEqual(['冷|热']); // each pair once, and 大 / 小 is already stated
    expect(r.missing.opposites[0].detail).toMatch(/hot is the opposite of cold|cold is the opposite of hot/);
  });
});

describe('parts', () => {
  test('agree, reversed, and a missing part-of that WordNet states', () => {
    const r = run([rel('part-of', '手指', '手'), rel('part-of', '手', '手指'), rel('part-of', '鸟', '手')]);
    expect(r.parts.verdicts).toMatchObject({ agree: 1, reversed: 1, silent: 1 });
    expect(r.missing.parts).toEqual([]);
    expect(run([]).missing.parts.map((m) => m.detail)).toEqual(['WordNet: finger is a part of hand']);
  });
});

describe('entries without a head', () => {
  test('lists the entries WordNet could give a head, and counts the rest', () => {
    const r = run([rel('kind-of', '麻雀', '鸟')]);
    expect(r.headless.withHead).toBe(1);
    expect(r.headless.suggested.map((s) => s.entry)).toEqual(['桌子 zhuōzi']);
    expect(r.headless.suggested[0].kinds[0]).toMatchObject({ name: '家具 jiājù', start: '…-de jiājù' });
    expect(r.headless.none).toBe(r.headless.linked - 1 - 1);
  });
});

describe('render', () => {
  test('says what could not be checked without the index', () => {
    const lean = crossCheck({ relations: [], words, composites, links });
    expect(lean.ready).toBe(false);
    expect(renderCrossCheck(lean)).toContain('index is not built');
  });
  test('counts and the first disagreements, one section on request', () => {
    const r = run([rel('kind-of', '动物', '鸟'), rel('opposite', '大', '冷')]);
    const all = renderCrossCheck(r);
    expect(all).toContain('Kind of (a hangs under b): 1 relations');
    expect(all).toContain('reversed:');
    expect(all).toContain('Opposites: 1 relations');
    expect(renderCrossCheck(r, { section: 'opposites' })).not.toContain('Kind of');
  });
});
