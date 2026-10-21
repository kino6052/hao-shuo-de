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
    const before = JSON.stringify(w.word(a));
    expect(() => applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref(a, b)] }])).toThrow(/op 1 \(paraphrase .*uses the word itself/);
    expect(() => applyOps(w, [{ op: 'paraphrase', id: a, forms: [ref('nope9')] }])).toThrow(/not a word/);
    expect(() => applyOps(w, [{ op: 'paraphrase', id: a, forms: [`${ref(b)} chī`] }])).toThrow(/plain pinyin/);
    expect(() => applyOps(w, [{ op: 'atom', id: a, eng: '', rus: 'x' }])).toThrow(/no eng reason/);
    // nothing was written to the word (the review has given every word a mark, so compare with what it had)
    expect(JSON.stringify(w.word(a))).toBe(before);
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

describe('the reviewed op', () => {
  // the real content may have no proposed entries left, so the test marks two itself
  const withTwoProposed = () => {
    const w = fresh();
    const [x, y] = w.composites().slice(0, 2);
    for (const { path, entry } of [x, y]) w.setComposite(path, { ...entry, proposed: true });
    return { w, zhs: [x.entry.zh, y.entry.zh] };
  };
  const proposed = (w, zh) => w.composites().find((c) => c.entry.zh === zh).entry.proposed;

  test('zh: clears the mark of the named entries only', () => {
    const { w, zhs } = withTwoProposed();
    expect(zhs.map((zh) => proposed(w, zh))).toEqual([true, true]);
    applyOps(w, [{ op: 'reviewed', zh: [zhs[0]] }]);
    expect(proposed(w, zhs[0])).toBeUndefined();
    expect(proposed(w, zhs[1])).toBe(true);
  });

  test('from..to still clears a whole rank window', () => {
    const { w, zhs } = withTwoProposed();
    applyOps(w, [{ op: 'reviewed', from: 0, to: 1e9 }]);
    expect(zhs.map((zh) => proposed(w, zh))).toEqual([undefined, undefined]);
  });

  test('an unknown entry is refused', () => {
    expect(() => applyOps(fresh(), [{ op: 'reviewed', zh: ['不存在'] }])).toThrow(/no composite/);
  });
});

describe('the coverageForm op (K24)', () => {
  const COVERAGE = 'src/data/coverage/atoms.ts';
  const item = (w, key) => w.data(COVERAGE).items.find((i) => i.key === key);
  const saying = ref('shuo1', 'hua4');

  test('adds a form after the ones the item has and carries no new word', () => {
    const w = fresh();
    const before = item(w, 'I');
    applyOps(w, [{ op: 'coverageForm', item: 'atoms:I', form: saying }]);
    const after = item(w, 'I');
    expect(after.forms).toEqual([...before.forms, saying]);
    expect(after.words).toEqual(before.words);
  });

  test('the same form twice is one; words add carriers', () => {
    const w = fresh();
    applyOps(w, [
      { op: 'coverageForm', item: 'atoms:I', form: saying },
      { op: 'coverageForm', item: 'atoms:I', form: saying, words: ['shuo1'] },
    ]);
    expect(item(w, 'I').forms.filter((f) => f === saying)).toHaveLength(1);
    expect(item(w, 'I').words).toContain('shuo1');
  });

  test('an unknown item, an empty form or an unknown word is refused', () => {
    const w = fresh();
    expect(() => applyOps(w, [{ op: 'coverageForm', item: 'atoms:NOPE', form: saying }])).toThrow(/no coverage item/);
    expect(() => applyOps(w, [{ op: 'coverageForm', item: 'atoms:I', form: ' ' }])).toThrow(/give a form/);
    expect(() => applyOps(w, [{ op: 'coverageForm', item: 'atoms:I', form: saying, words: ['nope9'] }])).toThrow();
  });
});

describe('the classes op (K6)', () => {
  const why = { eng: 'a thing you get', rus: 'то, что получаешь' };

  test('is a known op', () => {
    expect(OP_NAMES).toContain('classes');
  });

  test('adds a class with why and an example, and keeps the ones the word has', () => {
    const w = fresh();
    applyOps(w, [{ op: 'classes', id: a, add: { noun: { why, example: 'Wǒ dé le tòng.', proposed: true } } }]);
    expect(w.word(a).classes).toEqual({ noun: { why, example: 'Wǒ dé le tòng.', proposed: true } });
    applyOps(w, [{ op: 'classes', id: a, add: { verb: { why, example: 'Tā bǐ yī-xià.' } } }]);
    expect(Object.keys(w.word(a).classes)).toEqual(['noun', 'verb']);
  });

  test('a class needs a why in both languages and an example', () => {
    expect(() => applyOps(fresh(), [{ op: 'classes', id: a, add: { noun: { why: { eng: 'x' }, example: 'e' } } }])).toThrow('why.rus');
    expect(() => applyOps(fresh(), [{ op: 'classes', id: a, add: { noun: { why, example: '' } } }])).toThrow('example');
  });

  test('removes a class, and the last one takes the field away; a class it does not have is an error', () => {
    const w = fresh();
    applyOps(w, [{ op: 'classes', id: a, add: { noun: { why, example: 'e' } } }]);
    applyOps(w, [{ op: 'classes', id: a, remove: ['noun'] }]);
    expect(w.word(a).classes).toBeUndefined();
    expect(() => applyOps(w, [{ op: 'classes', id: a, remove: ['noun'] }])).toThrow('no class "noun"');
  });
});

describe('the grammar rules follow a word (K20)', () => {
  const GRAMMAR = 'src/data/grammar/';

  test('rename rewrites the rules that name the word: =id, a bare id and a class that leaves it out', () => {
    const w = fresh();
    applyOps(w, [{ op: 'rename', id: 'bie2', to: 'bie9' }]);
    expect(w.get(`${GRAMMAR}bie-dont.ts`)).toContain('hsd: "=bie9 VP"');
    expect(w.get(`${GRAMMAR}bie-dont.ts`)).not.toContain('=bie2');
    expect(w.notes.some((n) => n.kind === 'grammar' && n.text.includes('bie-dont.ts') && n.text.includes('bie2 -> bie9'))).toBe(true);

    const v = fresh();
    applyOps(v, [{ op: 'rename', id: 'zhe4', to: 'zhe9' }]);
    expect(v.get(`${GRAMMAR}adjective-noun.ts`)).toContain('@adjective-zhe9-na4');
    const u = fresh();
    applyOps(u, [{ op: 'rename', id: 'hen3', to: 'hen9' }]);
    expect(u.get(`${GRAMMAR}bu-adjective.ts`)).toContain('hsd: "hen9 bu4 @adjective"');
  });

  test('a rename leaves every rule naming a real word', () => {
    const w = fresh();
    applyOps(w, [{ op: 'rename', id: 'hen3', to: 'hen9' }]);
    for (const path of w.files(GRAMMAR).filter((p) => !p.endsWith('/index.ts'))) {
      expect(w.get(path), path).not.toMatch(/hsd: "[^"]*\bhen3\b/);
    }
  });

  test('replace and remove name the rules that are left pointing at the word', () => {
    const w = fresh();
    applyOps(w, [{ op: 'replace', id: 'bie2', with: '{{word:bu4}} {{word:yao4}}' }]);
    const note = w.notes.find((n) => n.kind === 'grammar');
    expect(note.text).toContain('bie-dont.ts');
    expect(note.text).toContain('=bie2 VP');
    expect(note.text).toContain('replaced');
  });
});

describe('rename (K20)', () => {
  test('a word whose own text names itself is renamed inside its own file too', () => {
    const w = fresh();
    const own = w.wordIds().find((id) => w.get(w.wordPath(id)).split(`{{word:${id}}}`).length > 2);
    expect(own).toBeDefined();
    applyOps(w, [{ op: 'rename', id: own, to: 'zzz9' }]);
    expect(w.get(w.wordPath('zzz9'))).toContain('{{word:zzz9}}');
    expect(w.get(w.wordPath('zzz9'))).not.toContain(`{{word:${own}}}`);
  });
});

describe('the connect op and the phrases of the relation op', () => {
  const connections = (w) => w.data('src/data/maps/connections.ts');
  const has = (w, ids) => connections(w).some((x) => [...x.words].sort().join(' ') === [...ids].sort().join(' '));

  test('is a known op', () => {
    expect(OP_NAMES).toContain('connect');
  });

  test('adds a connection of two or more words with its why, and a proposed one says so', () => {
    const w = fresh();
    applyOps(w, [
      { op: 'connect', words: [a, b], why: ' they go together ' },
      { op: 'connect', words: [a, b, c], why: 'a family', proposed: true },
    ]);
    expect(connections(w).find((x) => x.words.length === 2 && x.words.includes(a) && x.words.includes(b) && x.why === 'they go together')).toEqual({ words: [a, b], why: 'they go together' });
    expect(connections(w).find((x) => x.words.length === 3 && x.words.includes(c) && x.why === 'a family')).toEqual({ words: [a, b, c], why: 'a family', proposed: true });
  });

  test('one word, an unknown word, no why or the same connection twice stops the run', () => {
    const w = fresh();
    expect(() => applyOps(w, [{ op: 'connect', words: [a], why: 'x' }])).toThrow(/two or more different words/);
    expect(() => applyOps(w, [{ op: 'connect', words: [a, 'nope9'], why: 'x' }])).toThrow();
    expect(() => applyOps(w, [{ op: 'connect', words: [a, b], why: ' ' }])).toThrow(/needs a why/);
    applyOps(w, [{ op: 'connect', words: [a, b], why: 'x' }]);
    expect(() => applyOps(w, [{ op: 'connect', words: [b, a], why: 'y' }])).toThrow(/already connected/);
  });

  test('takes a connection away, and says when there is none', () => {
    const w = fresh();
    applyOps(w, [{ op: 'connect', words: [a, b], why: 'x' }]);
    applyOps(w, [{ op: 'connect', remove: [b, a] }]);
    expect(has(w, [a, b])).toBe(false);
    expect(() => applyOps(w, [{ op: 'connect', remove: [a, b] }])).toThrow(/no connection/);
  });

  test('a rename follows the word into its connections', () => {
    const w = fresh();
    applyOps(w, [{ op: 'connect', words: [a, b, c], why: 'x' }, { op: 'rename', id: b, to: 'zz9' }]);
    expect(has(w, [a, 'zz9', c])).toBe(true);
    expect(has(w, [a, b, c])).toBe(false);
  });

  test('a phrase is added to and taken from the synonyms of a word, once', () => {
    const w = fresh();
    const form = ref(b);
    applyOps(w, [{ op: 'relation', kind: 'synonyms', addPhrase: [a, form] }, { op: 'relation', kind: 'synonyms', addPhrase: [a, form] }]);
    expect(w.data('src/data/maps/synonyms.ts').phrases[a].filter((f) => f === form)).toHaveLength(1);
    applyOps(w, [{ op: 'relation', kind: 'synonyms', removePhrase: [a, form] }]);
    expect(w.data('src/data/maps/synonyms.ts').phrases[a]?.includes(form) ?? false).toBe(false);
    expect(() => applyOps(w, [{ op: 'relation', kind: 'synonyms', addPhrase: [a, ref('nope9')] }])).toThrow();
  });
});
