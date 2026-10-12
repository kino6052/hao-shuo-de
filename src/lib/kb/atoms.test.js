// The atoms report on a made-up language where the right answer is known by
// hand (the real data has no paraphrases yet). Twelve words, a to l:
//
//   a, b   marked atoms
//   c      fine: a b                 d  fine: c a            (a chain down to the atoms)
//   e, f   fine: f / fine: e         (a cycle: one of the two has to be a base)
//   g      clumsy: a b               (so an atom, whatever it says)
//   h      nothing yet               (not reviewed: in the set, not called an atom)
//   i      fine: a, or b             (two forms)
//   j      fine: c c i               (a longer form, uses a repeat)
//   k, l   fine: l x / fine: k x, with x marked  (another cycle, with a way in)

import { describe, expect, test } from 'bun:test';
import { buildFacts } from './facts.js';
import { atoms, atomWord, renderAtoms } from './atoms.js';

const w = (term, extra = {}) => ({ term, hanzi: term, pos: { eng: 'noun' }, definition: { eng: term }, necessity: { index: 3, eng: term }, ...extra });
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ');
const fine = (...forms) => ({ paraphrase: { forms, verdict: 'fine' } });

const words = {
  a: w('a', { atom: { eng: 'primitive', rus: 'первичное' } }),
  b: w('b', { atom: { eng: 'primitive', rus: 'первичное' } }),
  c: w('c', fine(ref('a', 'b'))),
  d: w('d', fine(ref('c', 'a'))),
  e: w('e', fine(ref('f'))),
  f: w('f', fine(ref('e'))),
  g: w('g', { paraphrase: { forms: [ref('a', 'b')], verdict: 'clumsy' } }),
  h: w('h'),
  i: w('i', fine(ref('a'), ref('b'))),
  j: w('j', fine(ref('c', 'c', 'i'))),
  x: w('x', { atom: { eng: 'primitive', rus: 'первичное' } }),
  k: w('k', fine(`${ref('l')} ${ref('x')}`)),
  l: w('l', fine(`${ref('k')} ${ref('x')}`)),
};

// composites that use words, so the paraphrases have a cost
const composites = [
  { rank: 1, zh: '丙', py: 'bǐng', en: 'c twice', hsd: `${ref('c')}-${ref('c')} / ${ref('d')}`, tts: '丙丙 / 丁' },
  { rank: 2, zh: '东西', py: 'dōngxi', en: 'thing', hsd: ref('a', 'b'), tts: '东西' },
];
const source = { words, composites, categories: [], maps: {}, coverage: [], lessons: [], texts: [] };

let report;
const run = async () => (report ??= await atoms({ source, facts: buildFacts(source) }));
const ids = (list) => list.map((x) => x.id).sort();

describe('sorting the words', () => {
  test('true atoms: the marked ones and the clumsy one', async () => {
    const r = await run();
    expect(ids(r.atoms)).toEqual(['a', 'b', 'g', 'x']);
    const why = Object.fromEntries(r.atoms.map((x) => [x.id, x.why]));
    expect(why.a).toBe('marked as an atom');
    expect(why.g).toBe('its paraphrase is clumsy');
  });

  test('a cycle makes its words swappable: one of them must be in the set, either will do', async () => {
    const r = await run();
    expect(ids(r.swappable)).toEqual(['e', 'f', 'k', 'l']);
  });

  test('the words the others say are secondary', async () => {
    const r = await run();
    expect(ids(r.secondary)).toEqual(['c', 'd', 'i', 'j']);
  });

  test('a word with neither a paraphrase nor an atom mark is not reviewed, and not called an atom', async () => {
    const r = await run();
    expect(ids(r.unreviewed)).toEqual(['h']);
    expect(r.chosen).toContain('h');
  });

  test('the smallest set: the marked, the unreviewed, one of each cycle', async () => {
    const r = await run();
    // a b g x, h, one of e/f, one of k/l
    expect(r.smallest).toBe(7);
    expect(r.chosen.filter((id) => ['e', 'f'].includes(id))).toHaveLength(1);
    expect(r.chosen.filter((id) => ['k', 'l'].includes(id))).toHaveLength(1);
  });

  test('the counts add up', async () => {
    const r = await run();
    expect(r.counts).toMatchObject({ words: 13, marked: 3, clumsy: 1, paraphrased: 8, atoms: 4, swappable: 4, secondary: 4, unreviewed: 1 });
    expect(r.counts.atoms + r.counts.swappable + r.counts.secondary + r.counts.unreviewed).toBe(r.counts.words);
  });
});

describe('how a word is said', () => {
  test('down to the atoms', async () => {
    const r = await run();
    expect(r.definitions.c).toMatchObject({ form: 1, level: 1, uses: ['a', 'b'], restsOn: ['a', 'b'] });
    expect(r.definitions.d).toMatchObject({ level: 2, uses: ['c', 'a'], restsOn: ['a', 'b'] });
    // j = c c i: c and i are one step from an atom, so j is two
    expect(r.definitions.j.level).toBe(2);
    expect(r.definitions.j.restsOn).toEqual(['a', 'b']);
  });

  test('the form that is ready soonest is the one drawn', async () => {
    const r = await run();
    // i has two forms, both one step from an atom; the first is kept
    expect(r.definitions.i).toMatchObject({ form: 1, level: 1, uses: ['a'] });
  });

  test('the text is pinyin, not refs', async () => {
    const r = await run();
    expect(r.definitions.c.text).toBe('a b');
  });

  test('one word\'s line', async () => {
    const r = await run();
    expect(atomWord(r, 'd')).toMatchObject({ kind: 'secondary', definition: { level: 2 } });
    expect(atomWord(r, 'a')).toMatchObject({ kind: 'atom', definition: null });
    expect(atomWord(r, 'h').kind).toBe('unreviewed');
    expect(atomWord(r, 'nope')).toBeNull();
  });
});

describe('kernel and core', () => {
  test('what is left after dropping the words nothing else is said with, again and again', async () => {
    const r = await run();
    // e, f, k, l say each other (and x says k and l); everything that only leads out to a dead end is gone
    expect([...r.kernel].sort()).toEqual(['e', 'f', 'k', 'l', 'x']);
  });

  test('the core is one group whose words all reach each other; a tie goes to the lowest first word', async () => {
    const r = await run();
    // e<->f and k<->l are both size 2
    expect([...r.core].sort()).toEqual(['e', 'f']);
  });

  test('the larger group wins over a lower first word', async () => {
    // a <-> b, and m -> n -> o -> m
    const loop = { ...source, composites: [], words: {
      a: w('a', fine(ref('b'))), b: w('b', fine(ref('a'))),
      m: w('m', fine(ref('o'))), n: w('n', fine(ref('m'))), o: w('o', fine(ref('n'))),
    } };
    const r = await atoms({ source: loop, facts: buildFacts(loop) });
    expect([...r.core].sort()).toEqual(['m', 'n', 'o']);
    expect(r.kernel.length).toBe(5);
  });
});

describe('cost and hidden vocabulary', () => {
  test('a paraphrase costs its shortest form times how often the word is used', async () => {
    const r = await run();
    const c = r.cost.find((x) => x.id === 'c');
    // c is used in the 丙 forms (its form 1 twice-in-a-row counts once: one form) and the paraphrases are not counted
    expect(c).toMatchObject({ length: 2, uses: 1, cost: 2 });
    expect(r.cost[0].cost).toBeGreaterThanOrEqual(r.cost.at(-1).cost);
    expect(r.cost.find((x) => x.id === 'h')).toBeUndefined();
  });

  test('forms are built unless they are Mandarin\'s own compound and not decided', async () => {
    const r = await run();
    // 东西: its hanzi are the entry's and it is two words, so it needs the author's yes/no; 丙's forms are descriptions
    expect(r.hidden.undecided.map((h) => h.zh)).toEqual(['东西']);
    expect(r.hidden.spelled).toEqual([]);
    expect(r.hidden.built).toBe(2);
  });

  test('a spelled form is hidden vocabulary', async () => {
    const spelled = { ...source, composites: [{ ...composites[1], kinds: ['spelled'] }] };
    const r = await atoms({ source: spelled, facts: buildFacts(spelled) });
    expect(r.hidden.spelled).toEqual([{ zh: '东西', py: 'dōngxi', rank: 2, form: 1 }]);
    expect(r.hidden.undecided).toEqual([]);
  });
});

describe('the text report', () => {
  test('says the sizes, the sorts and the reasons', async () => {
    const text = renderAtoms(await run());
    expect(text).toMatch(/^Atoms: 13 words, the smallest set that says the rest has 7\./);
    expect(text).toContain('True atoms (4)');
    expect(text).toContain('g g (g): its paraphrase is clumsy');
    expect(text).toContain('Swappable (in some smallest sets, not all) (4)');
    expect(text).toContain('d d = c a — rests on a, b');
    expect(text).toContain('Not reviewed yet (1)');
    expect(text).toContain('Hidden vocabulary: 0 spelled form(s)');
  });
});

describe('questions that do not finish', () => {
  test('a word whose question runs out of time is left unchecked, not guessed', async () => {
    const r = await atoms({ source, facts: buildFacts(source) }, { questionMs: 0 });
    // the words the rules force into every set are still known; everything that needed a question is open
    expect(ids(r.atoms)).toEqual(['a', 'b', 'g', 'x']);
    expect(ids(r.unreviewed)).toEqual(['h']);
    expect(r.swappable).toEqual([]);
    expect(r.secondary).toEqual([]);
    expect(r.counts.unchecked).toBe(8);
    expect(r.counts.atoms + r.counts.unchecked + r.counts.unreviewed).toBe(r.counts.words);
    expect(atomWord(r, 'c').kind).toBe('unchecked');
    expect(renderAtoms(r)).toMatch(/8 word\(s\) not checked/);
  });

  test('asking the words one at a time gives the same sorts as asking several at once', async () => {
    const ctx = { source, facts: buildFacts(source) };
    const one = await atoms(ctx, { parallel: 1 });
    const many = await atoms(ctx, { parallel: 3 });
    for (const kind of ['atoms', 'swappable', 'secondary', 'unreviewed', 'unchecked']) expect(ids(one[kind])).toEqual(ids(many[kind]));
  });
});

describe('a language with nothing reviewed', () => {
  test('every word is unreviewed and in the set', async () => {
    const bare = { ...source, words: { p: w('p'), q: w('q') }, composites: [] };
    const r = await atoms({ source: bare, facts: buildFacts(bare) });
    expect(r.smallest).toBe(2);
    expect(ids(r.unreviewed)).toEqual(['p', 'q']);
    expect(r.atoms).toEqual([]);
  });
});
