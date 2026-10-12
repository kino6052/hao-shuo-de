// The phase 2 refactor ops (paraphrase, atom, kinds), applied in memory to the
// real content: nothing is written. Which words and composites are used does
// not matter, only that they are there; the test picks them.

import { describe, expect, test } from 'bun:test';
import { Workspace, applyOps, OP_NAMES } from './refactor-lib.js';
import { undecidedForms, formKinds } from '../src/lib/form-kinds.js';
import { paraphraseStatus } from '../src/lib/paraphrase.js';

const [a, b, c] = new Workspace().wordIds();
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ');
const fresh = () => new Workspace();

describe('the paraphrase op', () => {
  test('is a known op', () => {
    expect(OP_NAMES).toEqual(expect.arrayContaining(['paraphrase', 'atom', 'kinds']));
  });

  test('stores the forms with a verdict, fine by default', () => {
    const w = fresh();
    applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref(b, c)] }]);
    expect(w.word(a).paraphrase).toEqual({ forms: [ref(b, c)], verdict: 'fine' });
    expect(paraphraseStatus(w.word(a))).toBe('paraphrase');
  });

  test('a clumsy one keeps its note', () => {
    const w = fresh();
    applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref(b, c)], verdict: 'clumsy', note: 'long' }]);
    expect(w.word(a).paraphrase).toEqual({ forms: [ref(b, c)], verdict: 'clumsy', note: 'long' });
    expect(paraphraseStatus(w.word(a))).toBe('clumsy');
  });

  test('replaces an atom mark, and an atom mark replaces a paraphrase', () => {
    const w = fresh();
    applyOps(w, [{ op: 'atom', id: a, eng: 'primitive', rus: 'первичное' }]);
    expect(w.word(a).atom).toEqual({ eng: 'primitive', rus: 'первичное' });
    applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref(b)] }]);
    expect(w.word(a).atom).toBeUndefined();
    expect(paraphraseStatus(w.word(a))).toBe('paraphrase');
    applyOps(w, [{ op: 'atom', id: a, eng: 'primitive', rus: 'первичное' }]);
    expect(w.word(a).paraphrase).toBeUndefined();
    expect(paraphraseStatus(w.word(a))).toBe('atom');
  });

  test('a form that names itself, an unknown word or plain pinyin stops the run, with the op named', () => {
    const w = fresh();
    expect(() => applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref(a, b)] }])).toThrow(/op 1 \(paraphrase .*uses the word itself/);
    expect(() => applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref('nope9')] }])).toThrow(/not a word/);
    expect(() => applyOps(w, [{ op: 'paraphrase', id: a, forms: [`${ref(b)} chī`] }])).toThrow(/plain pinyin/);
    expect(() => applyOps(w, [{ op: 'atom', id: a, eng: '', rus: 'x' }])).toThrow(/no eng reason/);
    // nothing was written to the word
    expect(w.word(a).paraphrase).toBeUndefined();
  });

  test('a later op sees an earlier one: the second word may use the first', () => {
    const w = fresh();
    applyOps(w, [
      { op: 'atom', id: b, eng: 'primitive', rus: 'первичное' },
      { op: 'paraphrase', id: a, forms: [ref(b)] },
    ]);
    expect(Object.keys(w.wordMap())).toContain(a);
    expect(w.word(a).paraphrase.forms).toEqual([ref(b)]);
  });
});

describe('the kinds op', () => {
  const pick = (w) => w.composites().find(({ entry }) => undecidedForms(entry).length);

  test('as: decides the forms the rule left open and keeps the others', () => {
    const w = fresh();
    const { entry } = pick(w);
    applyOps(w, [{ op: 'kinds', zh: entry.zh, as: 'spelled' }]);
    const after = w.composites().find((x) => x.entry.zh === entry.zh).entry;
    expect(undecidedForms(after)).toEqual([]);
    const before = formKinds(entry);
    expect(after.kinds).toEqual(before.map((k) => (k === 'unknown' ? 'spelled' : k)));
  });

  test('a list sets every form', () => {
    const w = fresh();
    const { entry } = pick(w);
    const kinds = formKinds(entry).map(() => 'built');
    applyOps(w, [{ op: 'kinds', zh: entry.zh, kinds }]);
    expect(w.composites().find((x) => x.entry.zh === entry.zh).entry.kinds).toEqual(kinds);
  });

  test('a list of the wrong length, an unknown entry or nothing to go on is refused', () => {
    const w = fresh();
    const { entry } = pick(w);
    expect(() => applyOps(w, [{ op: 'kinds', zh: entry.zh, kinds: ['built', 'built', 'built', 'built', 'built'] }])).toThrow(/form/);
    expect(() => applyOps(w, [{ op: 'kinds', zh: '不存在', as: 'built' }])).toThrow(/no composite/);
    expect(() => applyOps(w, [{ op: 'kinds', zh: entry.zh }])).toThrow(/give kinds/);
  });
});
