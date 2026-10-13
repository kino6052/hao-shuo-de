import { describe, expect, test } from 'bun:test';
import { createKb, renderCard } from './kb.js';
import { findWords, resolveWord } from './card.js';
import { checkForm } from './check-form.js';
import { source } from './fixture.js';

const kb = createKb(source);
const { words } = source;

describe('finding a word by any name', () => {
  test('an id, a term with tones, a term without, a hanzi', () => {
    expect(findWords(words, 'chi1')).toEqual(['chi1']);
    expect(findWords(words, 'chī')).toEqual(['chi1']);
    expect(findWords(words, 'chi')).toEqual(['chi1']);
    expect(findWords(words, '吃')).toEqual(['chi1']);
    // a catch-all sense's hanzi finds the word it hangs under
    expect(findWords(words, '时')).toEqual(['shi2']);
  });

  test('nothing, or an unclear name, is an error that helps', () => {
    expect(() => resolveWord(words, 'zzz')).toThrow(/no word "zzz"/);
    const two = { a1: { term: 'bā', hanzi: '八' }, a2: { term: 'bà', hanzi: '爸' } };
    expect(() => resolveWord(two, 'ba')).toThrow(/could be: .*bā.*bà/);
  });
});

describe('the word card', () => {
  const card = kb.word('chī');

  test('basics, category, taught, coverage', () => {
    expect(card).toMatchObject({ id: 'chi1', term: 'chī', hanzi: '吃', pos: 'verb' });
    expect(card.classes).toContain('verb');
    expect(card.category).toEqual(['doing']);
    expect(card.taught).toEqual([{ lesson: 'basics', module: 'eat' }]);
    expect(card.coverage.map((i) => i.id)).toEqual(['grammar:eat']);
    expect(card.coverage[0].others).toEqual(['fàn']);
  });

  test('composites that use it and the form they use it in', () => {
    expect(card.composites.usedBy).toBe(1);
    const row = card.composites.first[0];
    expect(row).toMatchObject({ zh: '吃饭', usedInForms: [1, 2] });
    expect(row.forms).toEqual(['chī-fàn', 'chī fàn']);
  });

  test('sentences are counted by kind', () => {
    expect(card.sentences.byKind).toMatchObject({ lesson_example: 1, lesson_answer: 1, phrase_book: 1, composite_example: 1 });
    expect(card.sentences.total).toBe(4);
  });

  test('other words name it in their text', () => {
    expect(card.namedBy.map((x) => x.term)).toEqual(['fàn']);
  });

  test('relations come from the maps, and the head index from the composites', () => {
    expect(kb.word('dōng').antonyms.words.map((x) => x.term)).toEqual(['xī']);
    expect(kb.word('chī').antonyms.phrases).toEqual([]);
    expect(kb.word('duì').antonyms.phrases).toEqual(['chī duì']);
    // 飞机 is headed by its last word, 饭机 by its own head: both hang under jī
    expect(kb.word('jī').composites.headOf).toBe(2);
  });

  test('a catch-all sense shows its compounds', () => {
    const s = kb.word('shí').senses[0];
    expect(s).toMatchObject({ key: 'time', hanzi: '时', compounds: ['shí-jiān'] });
  });

  test('a paraphrase or an atom mark is on the card, and absent when there is none', () => {
    expect(card.paraphrase).toBeNull();
    expect(card.atom).toBeNull();
    const w = source.words;
    const marked = createKb({
      ...source,
      words: {
        ...w,
        chi1: { ...w.chi1, atom: { eng: 'primitive', rus: 'первичное' } },
        fan4: { ...w.fan4, paraphrase: { forms: ['{{word:chi1}} {{word:de}}'], verdict: 'clumsy', note: 'too long' } },
      },
    });
    expect(marked.word('chī').atom).toEqual({ eng: 'primitive', rus: 'первичное' });
    expect(marked.word('fàn').paraphrase).toEqual({ verdict: 'clumsy', forms: ['chī de'], note: 'too long' });
    expect(renderCard(marked.word('chī'))).toContain('  Atom: primitive');
    expect(renderCard(marked.word('fàn'))).toContain('  Paraphrase (clumsy): chī de — too long');
  });

  test('a word that lists a class besides its part of speech shows it, and whether it waits for the author', () => {
    const w = source.words;
    const listed = createKb({
      ...source,
      words: { ...w, fei1: { ...w.fei1, classes: { noun: { why: { eng: 'a thing you get', rus: 'x' }, example: 'Wǒ dé le fēi.', proposed: true } } } },
    });
    const card = listed.word('fēi');
    expect(card.extraClasses).toEqual([{ cls: 'noun', why: 'a thing you get', example: 'Wǒ dé le fēi.', proposed: true }]);
    expect(renderCard(card)).toContain('  Also noun (proposed, waiting for the author): a thing you get  e.g. Wǒ dé le fēi.');
    expect(kb.word('fēi').extraClasses).toEqual([]);
  });

  test('the text version names the main things', () => {
    const text = renderCard(card);
    expect(text).toContain('chī 吃  (chi1; verb; necessity 5)');
    expect(text).toContain('Taught: basics/eat');
    expect(text).toContain('Carries grammar:eat "Eating"');
    expect(text).toContain('#2 吃饭 "eat a meal": chī-fàn / chī fàn');
  });
});

describe('kb.remove takes any names', () => {
  test('terms and ids mix, and the same words give the same report as the lower layer', async () => {
    const r = await kb.remove(['fēi', 'ji1']);
    expect(r.words.map((w) => w.id)).toEqual(['fei1', 'ji1']);
    expect(r.composites.redo.map((x) => x.zh)).toEqual(['飞机']);
  });

  test('a comma list works too, and a bad name stops it', async () => {
    expect((await kb.remove('chī, fàn')).words.map((w) => w.id)).toEqual(['chi1', 'fan4']);
    await expect(kb.remove(['nope'])).rejects.toThrow(/no word "nope"/);
  });
});

describe('check a proposed form', () => {
  test('plain pinyin that spells dictionary words passes, and the refs come back', () => {
    const r = checkForm(words, { forms: 'chī fàn / wǒ chī' });
    expect(r.ok).toBe(true);
    expect(r.forms[0]).toMatchObject({ refs: '{{word:chi1}} {{word:fan4}}', pinyin: 'chī fàn' });
  });

  test('a syllable that is not a word is named', () => {
    const r = checkForm(words, { forms: 'chī zzz' });
    expect(r.ok).toBe(false);
    expect(r.problems[0]).toMatch(/chī zzz/);
  });

  test('a quoted sound and X are allowed', () => {
    expect(checkForm(words, { forms: '"ng" / X chī' }).ok).toBe(true);
  });

  test('hanzi must spell the words', () => {
    expect(checkForm(words, { forms: 'chī fàn', tts: '吃饭' }).ok).toBe(true);
    const bad = checkForm(words, { forms: 'chī fàn', tts: '吃饮' });
    expect(bad.ok).toBe(false);
    expect(bad.problems.join(' ')).toMatch(/don't spell/);
  });

  test('a Chinese word made of dictionary words is said the Mandarin way first', () => {
    // 吃饭 = chī + fàn: the compound has to be one of the forms
    const bad = checkForm(words, { forms: 'chī fàn', tts: '吃饭', zh: '吃饭', py: 'chīfàn' });
    expect(bad.ok).toBe(true); // the hanzi is the entry's own, spelled
    const needs = checkForm(words, { forms: 'wǒ chī', tts: '我吃', zh: '吃饭', py: 'chīfàn' });
    expect(needs.ok).toBe(false);
    expect(needs.problems.join(' ')).toMatch(/Mandarin way first: chī-fàn/);
  });

  test('no forms is a problem', () => {
    expect(checkForm(words, { forms: '' })).toMatchObject({ ok: false, problems: ['no form given'] });
  });
});

describe('raw queries', () => {
  test('rules on top of the facts, shown as rows', async () => {
    const r = await kb.query('made_with_ji(C) :- uses(C, _, _, ji1). #show made_with_ji/1.');
    expect(r.status).toBe('SATISFIABLE');
    expect(r.models[0].made_with_ji.map((x) => x[0]).sort()).toEqual(['飞机'].sort());
  });

  test('an error in the rules comes back as an error, not a hang', async () => {
    await expect(kb.query('this is not a rule.')).rejects.toThrow();
  });
});
