// Which atoms a word rests on (KB_PLAN.md K24), on a made-up language where the answer is known by hand:
//
//   a, b   marked atoms                 x   marked atom
//   c      fine: a b                    d   fine: c a             (a chain down to the atoms)
//   e, f   fine: f / fine: e            (a circle with no atom in it)
//   g      clumsy: a b                  (an atom while its paraphrase is clumsy)
//   h      nothing yet                  (not reviewed: counted as an atom)
//   i      fine: a, or b                (two forms)
//   j      fine: c c i                  (a longer form)
//   k, l   fine: l x / fine: k x        (a circle with a way in through x: still stuck, nothing is at its bottom)
//   m      fine: g x                    (names a clumsy word)
//   n      fine: d, or a b              (two forms, a long one and a short one)
//   o      its definition names d and h (a description, not a paraphrase)
//   r      fine: a b, or a           (the first form is kept; dropping b leaves the second)

import { describe, expect, test } from 'bun:test';
import { atoms } from './atoms.js';
import { buildFacts } from './facts.js';
import { restsOnLoss, restsOnModel, restsOnWord, renderRestsOn } from './rests-on.js';

const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ');
const w = (term, extra = {}) => ({ term, hanzi: term, pos: { eng: 'noun' }, definition: { eng: term }, necessity: { index: 3, eng: term }, ...extra });
const fine = (...forms) => ({ paraphrase: { forms, verdict: 'fine' } });
const atom = { atom: { eng: 'primitive', rus: 'первичное' } };

const words = {
  a: w('a', atom),
  b: w('b', atom),
  c: w('c', fine(ref('a', 'b'))),
  d: w('d', fine(ref('c', 'a'))),
  e: w('e', fine(ref('f'))),
  f: w('f', fine(ref('e'))),
  g: w('g', { paraphrase: { forms: [ref('a', 'b')], verdict: 'clumsy' } }),
  h: w('h'),
  i: w('i', fine(ref('a'), ref('b'))),
  j: w('j', fine(ref('c', 'c', 'i'))),
  x: w('x', atom),
  k: w('k', fine(`${ref('l')} ${ref('x')}`)),
  l: w('l', fine(`${ref('k')} ${ref('x')}`)),
  m: w('m', fine(ref('g', 'x'))),
  n: w('n', fine(ref('d'), ref('a', 'b'))),
  r: w('r', fine(ref('a', 'b'), ref('a'))),
  o: w('o', { ...atom, definition: { eng: `${ref('d')} and ${ref('h')}` } }),
};
const source = { words };
const model = restsOnModel(source);
const line = (id) => restsOnWord(model, id);

describe('what a word rests on', () => {
  test('an atom, a clumsy word and a word not reviewed yet rest on themselves', () => {
    expect(line('a')).toMatchObject({ kind: 'atom', level: 0, atoms: ['a'] });
    expect(line('g')).toMatchObject({ kind: 'clumsy', level: 0, atoms: ['g'] });
    expect(line('h')).toMatchObject({ kind: 'unreviewed', level: 0, atoms: ['h'] });
  });

  test('a fine paraphrase rests on the atoms at the bottom of the chain', () => {
    expect(line('c')).toMatchObject({ kind: 'paraphrase', level: 1, atoms: ['a', 'b'], kept: 1 });
    // d = c a, and c = a b
    expect(line('d')).toMatchObject({ level: 2, atoms: ['a', 'b'] });
    expect(line('j')).toMatchObject({ level: 2, atoms: ['a', 'b'] });
  });

  test('a clumsy word is an atom, and a word whose form names it rests on it, not on what it would say', () => {
    expect(line('m')).toMatchObject({ level: 1, atoms: ['g', 'x'] });
  });

  test('the form that gets there soonest is kept; the others are listed with their own atoms', () => {
    const n = line('n');
    expect(n).toMatchObject({ level: 1, kept: 2, atoms: ['a', 'b'] });
    expect(n.forms.map((f) => [f.n, f.level, f.atoms])).toEqual([[1, 3, ['a', 'b']], [2, 1, ['a', 'b']]]);
    // i has two one-step forms; the first is kept
    expect(line('i')).toMatchObject({ kept: 1, atoms: ['a'] });
  });

  test('a clumsy word still shows what its paraphrase would rest on if it were accepted', () => {
    expect(line('g').forms).toEqual([{ n: 1, uses: ['a', 'b'], level: 1, atoms: ['a', 'b'], blockedBy: [] }]);
  });

  test('a circle of paraphrases has no atom at the bottom, and says what it waits for', () => {
    expect(line('e')).toMatchObject({ kind: 'paraphrase', level: null, atoms: null, kept: null });
    expect(line('e').forms[0]).toMatchObject({ level: null, atoms: null, blockedBy: ['f'] });
    // k and l name x, but each also names the other
    expect(line('k').atoms).toBeNull();
    expect(line('k').forms[0].blockedBy).toEqual(['l']);
  });

  test('the description comes down to atoms through the paraphrases of the words it names', () => {
    // o names d (said from a, b) and h (itself)
    expect(line('o').description).toEqual({ names: ['d', 'h'], atoms: ['a', 'b', 'h'], stuck: [] });
    expect(line('a').description.names).toEqual([]);
  });

  test('a name that cannot be brought down is listed apart', () => {
    const odd = restsOnModel({ words: { ...words, p: w('p', { definition: { eng: ref('e') } }) } });
    expect(restsOnWord(odd, 'p').description).toMatchObject({ names: ['e'], atoms: [], stuck: ['e'] });
  });

  test('how many words rest on an atom, and how many name it in a form', () => {
    // fine words whose kept form comes down to a: c, d, i, j, n, r; the ones with a form that names it: c, d, g, i, n, r
    expect(line('a').restedOnBy).toEqual({ words: 6, named: 6 });
    expect(line('g').restedOnBy).toEqual({ words: 1, named: 1 });
    expect(restsOnWord(model, 'nope')).toBeNull();
  });

  test('every form uses only words that are there: a stranger in a form blocks it', () => {
    const odd = restsOnModel({ words: { ...words, q: w('q', fine(ref('a', 'zz'))) } });
    expect(restsOnWord(odd, 'q')).toMatchObject({ atoms: null, level: null });
  });
});

describe('what dropping words does to the others', () => {
  const drop = (...ids) => restsOnLoss(model, restsOnModel(source, { dropped: ids }), ids);

  test('an atom nothing rests on costs nothing', () => {
    expect(drop('h')).toEqual({ lose: [], longer: [], naming: [] });
  });

  test('a word with a form that names a dropped word is listed, with how many forms stay', () => {
    const r = drop('b');
    const naming = Object.fromEntries(r.naming.map((x) => [x.id, x]));
    // c (a b), g (a b, clumsy), i form 2, n form 2, r form 1
    expect(Object.keys(naming).sort()).toEqual(['c', 'g', 'i', 'n', 'r']);
    expect(naming.i).toMatchObject({ forms: [2], left: 1, kind: 'paraphrase' });
    expect(naming.g).toMatchObject({ forms: [1], left: 0, kind: 'clumsy' });
  });

  test('a word loses its atom when every form names it; one with another form keeps going', () => {
    const r = drop('b');
    const lose = Object.fromEntries(r.lose.map((x) => [x.id, x]));
    // c = a b has no form left; d, j and n rest on c; r keeps its second form (a); i never rested on b (its kept form is a)
    expect(Object.keys(lose).sort()).toEqual(['c', 'd', 'j', 'n', 'r']);
    expect(lose.c).toEqual({ id: 'c', lost: ['b'], now: null });
    expect(lose.d).toEqual({ id: 'd', lost: ['b'], now: null });
    expect(lose.n).toEqual({ id: 'n', lost: ['b'], now: null });
    expect(lose.r).toEqual({ id: 'r', lost: ['b'], now: ['a'] });
  });

  test('a dropped word with a paraphrase stands in: the words that name it get longer, none is cut off', () => {
    // g = a b (clumsy); m = g x rests on g and x; with g dropped m still says it through g's own paraphrase
    const r = drop('g');
    expect(r.lose).toEqual([]);
    expect(r.longer).toEqual([{ id: 'm', from: 1, to: 2 }]);
    expect(r.naming).toEqual([{ id: 'm', forms: [1], left: 0, kind: 'paraphrase' }]);
  });

  test('dropping a fine word that another word names in a spare form only asks for that form to be rewritten', () => {
    // d = c a; n form 1 names d but n keeps form 2 (a b, one step), so nothing gets longer there
    const r = drop('d');
    expect(r.longer).toEqual([]);
    expect(r.lose).toEqual([]);
    expect(r.naming).toEqual([{ id: 'n', forms: [1], left: 1, kind: 'paraphrase' }]);
  });
});

describe('as text', () => {
  const term = (id) => id.toUpperCase();
  const text = (id) => renderRestsOn(line(id), term).join('\n');

  test('an atom, a fine word, a clumsy word, a circle', () => {
    expect(text('a')).toContain('Rests on: itself, an atom.');
    expect(text('h')).toContain('not reviewed yet');
    expect(text('d')).toContain('Rests on: A, B  (form 1, 2 steps down).');
    expect(text('n')).toContain('Rests on: A, B  (form 2, 1 step down, the shortest form).');
    expect(text('n')).toContain('form 1 would rest on A, B (3 steps).');
    expect(text('g')).toContain('an atom while its paraphrase is clumsy');
    expect(text('g')).toContain('accepted, form 1 would rest on A, B (1 step).');
    expect(text('e')).toContain('goes round in a circle (it waits for F)');
  });

  test('the description and who rests on the word', () => {
    expect(text('o')).toContain('Its description comes down to A, B, H.');
    expect(text('a')).toContain('Said from it: 6 words');
  });
});

describe('against the atoms report', () => {
  test('the words the solver can say rest on the same atoms as here', async () => {
    const composites = [{ rank: 1, zh: 'x', py: 'x', en: 'x', hsd: ref('a'), tts: 'x' }];
    const full = { words, composites, categories: [], maps: {}, coverage: [], lessons: [], texts: [] };
    const report = await atoms({ source: full, facts: buildFacts(full) }, { parallel: 1 });
    for (const id of Object.keys(report.definitions)) {
      const mine = line(id);
      // words in a circle have no atoms here; the solver puts one of them in its set instead
      if (!mine.atoms) continue;
      expect([id, mine.atoms]).toEqual([id, report.definitions[id].restsOn]);
    }
    // c, d, i, j, m, n, r are said the same way by both
    expect(Object.keys(report.definitions)).toEqual(expect.arrayContaining(['c', 'd', 'i', 'j', 'm', 'n', 'r']));
  });
});
