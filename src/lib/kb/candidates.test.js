import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { COSTS, candidateModel, rankWeight, renderAddition, renderAudit, renderRemovalCandidates, renderRootCandidates, renderSwaps } from './candidates.js';
import { source } from './fixture.js';

const kb = createKb(source);
const model = candidateModel(source, kb.facts);

describe('the numbers agree with the solver\'s removal report', () => {
  const same = async (ids) => {
    const c = model.consequences(ids).counts;
    const r = (await kb.remove(ids)).counts;
    expect({ redo: c.redo, loses: c.loses, headLost: c.headLost, sentences: c.sentences, lost: c.coverageLost, touched: c.coverageTouched, definitions: c.definitions, senses: c.senses, relations: c.relations }).toEqual({
      redo: r.redo,
      loses: r.loses,
      headLost: r.headLost,
      sentences: r.sentences,
      lost: r.lost,
      touched: r.touched,
      definitions: r.definitions,
      senses: r.senses,
      relations: r.relations,
    });
  };

  test('every word on its own', async () => {
    for (const id of Object.keys(source.words)) await same([id]);
  });

  test('several words at once', async () => {
    await same(['chi1', 'fan4']);
    await same(['dong1', 'xi1', 'dui4']);
    await same(['fei1', 'ji1', 'shi2', 'jian1']);
  });
});

describe('the cost', () => {
  test('the weight of a rank', () => {
    expect([1, 1000, 1001, 2000, 2001].map(rankWeight)).toEqual([3, 3, 2, 2, 1]);
  });

  test('a composite left with no form costs its rank weight; the parts add up to the cost', () => {
    // 时间 (rank 3) is the only entry that uses jiān
    const c = model.consequences(['jian1']);
    expect(c.counts.redo).toBe(1);
    expect(c.parts.redo).toBe(COSTS.redo * 3);
    expect(c.cost).toBe(Object.values(c.parts).reduce((a, b) => a + b, 0));
    expect(c.costBase).toBe(c.cost - c.parts.mandarin);
  });

  test('detail lists what is behind the counts', () => {
    const c = model.consequences(['jian1'], { detail: true });
    expect(c.lists.redo.map((x) => x.zh)).toEqual(['时间']);
    expect(model.consequences(['jian1']).lists.redo).toEqual([]);
  });

  test('a lost coverage item costs the most', () => {
    // the "eat" item has two forms, both naming chī
    const c = model.consequences(['chi1']);
    expect(c.counts.coverageLost).toBe(1);
    expect(c.parts.coverageLost).toBe(COSTS.coverageLost);
  });
});

describe('words that could go', () => {
  test('cheapest first; a word marked as an atom is left out unless asked for', () => {
    const marked = { ...source, words: { ...source.words, wo3: { ...source.words.wo3, atom: { eng: 'the speaker', rus: 'говорящий' } } } };
    const m = candidateModel(marked, createKb(marked).facts);
    const rows = m.removalCandidates();
    expect(rows.map((r) => r.id)).not.toContain('wo3');
    expect(rows.map((r) => r.cost)).toEqual([...rows.map((r) => r.cost)].sort((a, b) => a - b));
    const all = m.removalCandidates({ includeAtoms: true });
    expect(all).toHaveLength(rows.length + 1);
    expect(all.find((r) => r.id === 'wo3').said.source).toBe('atom');
  });

  test('how it would be said: the stored paraphrase, then a draft, else nothing yet', () => {
    const w = source.words;
    const withPara = { ...source, words: { ...w, fan4: { ...w.fan4, paraphrase: { forms: ['{{word:chi1}} {{word:de}}'], verdict: 'clumsy' } } } };
    const rows = candidateModel(withPara, createKb(withPara).facts).removalCandidates({ drafts: { fei1: { forms: ['bù zài dì'] }, fan4: { forms: ['ignored'] } } });
    const said = (id) => rows.find((r) => r.id === id).said;
    expect(said('fan4')).toEqual({ source: 'paraphrase', verdict: 'clumsy', forms: ['chī de'] });
    expect(said('fei1')).toEqual({ source: 'draft', verdict: 'fine', forms: ['bù zài dì'] });
    expect(said('ji1')).toEqual({ source: 'none', forms: [] });
  });

  test('the text names the word, what it costs and how it would be said', () => {
    const text = renderRemovalCandidates(model.removalCandidates(), { limit: 3 });
    expect(text).toMatch(/^Words that could go, the cheapest first \(12 words/);
    expect(text).toContain('no replacement yet');
    expect(text).toContain('… and 9 more');
  });
});

// a made-up Mandarin: two words the language can write, one it can with 器, one it cannot
const freq = [
  { zh: '飞机', py: 'fēijī', rank: 1 },
  { zh: '机器', py: 'jīqì', rank: 2 },
  { zh: '器官', py: 'qìguān', rank: 3 },
  { zh: '吃饭', py: 'chīfàn', rank: 4 },
];
const withFreq = candidateModel(source, kb.facts, { freq });

describe('Mandarin', () => {
  test('dropping the only word that gives a hanzi loses the Mandarin words that need it', () => {
    const c = withFreq.consequences(['fei1']);
    // 飞机 (rank 1) can no longer be written; 机器 never could
    expect(c.counts.mandarin).toBe(1);
    expect(c.parts.mandarin).toBe(COSTS.mandarin * 3);
    expect(c.lists.mandarin).toEqual([]);
    expect(withFreq.consequences(['fei1'], { detail: true }).lists.mandarin.map((e) => e.zh)).toEqual(['飞机']);
    // without a frequency list there is nothing to count
    expect(model.consequences(['fei1']).counts.mandarin).toBe(0);
  });

  test('a root that completes words, and what it would be', () => {
    const roots = withFreq.rootCandidates();
    // 器 completes 机器; 器官 also needs 官
    expect(roots.map((r) => r.root)).toEqual(['器']);
    expect(roots[0]).toMatchObject({ sound: 'qì', score: 3, as: { kind: 'new' } });
    expect(roots[0].completes.map((w) => w.zh)).toEqual(['机器']);
    expect(model.rootCandidates()).toBeNull();
    expect(renderRootCandidates(model.rootCandidates())).toContain('No frequency list');
    expect(renderRootCandidates(roots)).toContain('器 qì');
  });

  test('a root with the sound of a word is a sense of that word; with another tone, a neighbour', () => {
    // 级 would be read jī, the sound of 机
    const m = candidateModel(source, kb.facts, { freq: [{ zh: '飞级', py: 'fēijí', rank: 5 }] });
    expect(m.rootCandidates()[0]).toMatchObject({ root: '级', sound: 'jí', as: { kind: 'new' }, toneNeighbour: { term: 'jī', hanzi: '机' } });
    const same = candidateModel(source, kb.facts, { freq: [{ zh: '飞鸡', py: 'fēijī', rank: 5 }] });
    expect(same.rootCandidates()[0].as).toMatchObject({ kind: 'sense', of: 'ji1', hanzi: '机' });
  });

  test('what one root would bring: the words it completes, the ones that need more, its sound', () => {
    const a = withFreq.addition('器官'); // the first hanzi is the root
    expect(a).toMatchObject({ root: '器', sound: 'qì', score: 3, already: null, spellable: [] });
    expect(a.completes.map((w) => w.zh)).toEqual(['机器']);
    expect(a.pending).toEqual([{ zh: '器官', rank: 3, missing: ['官'] }]);
    expect(withFreq.addition('机').already).toEqual([{ id: 'ji1', term: 'jī' }]);
    expect(model.addition('器')).toEqual({ root: '器', noFrequencies: true });
    expect(renderAddition(a)).toContain('Add 器 (qì): it would be a new word.');
    expect(renderAddition(a)).toContain('Still needs more roots: 1 word(s), e.g. 器官 (+官)');
    expect(() => withFreq.addition('')).toThrow(/usage/);
  });

  test('descriptions that get shorter: the forms that contain the phrase the root would replace', () => {
    const phrase = '{{word:chi1}}-{{word:fan4}}';
    const src = {
      ...source,
      composites: [
        ...source.composites,
        { zh: '器', py: 'qì', en: 'tool', rank: 10, hsd: phrase },
        { zh: '工具', py: 'gōngjù', en: 'implement', rank: 20, hsd: `{{word:ji1}} / {{word:fei1}} ${phrase} {{word:ji1}}` },
        { zh: '桌子', py: 'zhuōzi', en: 'table', rank: 30, hsd: '{{word:ji1}} {{word:fei1}}' },
      ],
    };
    const m = candidateModel(src, createKb(src).facts, { freq });
    const a = m.addition('器');
    expect(a.shorter.map((x) => x.zh)).toEqual(['吃饭', '工具']); // 吃饭 already says it
    expect(a.shorter[1]).toMatchObject({ saves: 1, forms: [{ n: 2, saves: 1, source: 'description of 器' }] });
    expect(renderAddition(a)).toContain('Descriptions that get shorter: 2 (3 form(s), words saved 2)');
    expect(renderAddition(withFreq.addition('器'))).toContain('Descriptions that get shorter: 0');
  });

  test('a trade: the root in, the cheapest word out', () => {
    const r = withFreq.swaps({ k: 1 });
    expect(r.adds).toEqual(['器']);
    expect(r.removes).toHaveLength(1);
    expect(r.mandarin.gainedWords).toEqual(['机器']);
    expect(r.value).toBe(r.mandarin.gained - r.mandarin.lost - r.cost);
    expect(r.value).toBeGreaterThan(0);
    expect(renderSwaps(r)).toContain('add 器');
  });

  test('more than one trade starts from the best and keeps the sizes equal', () => {
    const two = withFreq.swaps({ k: 2 });
    expect(two.adds.length).toBe(two.removes.length);
    expect(two.adds.length).toBeLessThanOrEqual(1); // only one root is worth adding here
    expect(withFreq.swaps({ k: 2 }).value).toBeGreaterThanOrEqual(withFreq.swaps({ k: 1 }).value);
  });

  test('when no trade pays, it says so', () => {
    const none = candidateModel(source, kb.facts, { freq: [{ zh: '吃饭', py: 'chīfàn', rank: 1 }] }).swaps({ k: 1 });
    expect(none.adds).toEqual([]);
    expect(renderSwaps(none)).toMatch(/^No trade of 1 root\(s\)/);
  });
});

describe('the audit', () => {
  const now = new Date(2026, 9, 13, 12);

  test('reads as a document: the words, the roots, the trades and how the numbers are made', () => {
    const text = renderAudit(withFreq, { now, ks: [1, 2], limit: 5 });
    expect(text).toContain('# Candidates audit, 2026-10-13');
    expect(text).toContain('## Words that could go (12 words, the 5 cheapest)');
    expect(text).toContain('| 器 | qì | new word | 3 |');
    expect(text).toContain('### K = 1');
    expect(text).toContain('- bring in: 器');
    expect(text).toContain('### K = 2');
    expect(text).toContain('## How the numbers are made');
  });

  test('without a frequency list it still lists the words', () => {
    const text = renderAudit(model, { now });
    expect(text).toContain('## Words that could go');
    expect(text).toContain('No frequency list was found');
    expect(text).not.toContain('### K =');
  });
});
