import { describe, expect, test } from 'bun:test';
import { formProblems, paraphraseCounts, paraphraseProblems, paraphraseStatus, isAtomMark } from './paraphrase.js';

const words = {
  zou3: { term: 'zǒu' },
  yong4: { term: 'yòng' },
  jiao3: { term: 'jiǎo' },
  qu4: { term: 'qù' },
  xin1: { term: 'xīn', senses: { new: { alone: true }, part: { alone: false } } },
};

describe('one form', () => {
  test('dictionary words, X and Y, hyphens: fine', () => {
    expect(formProblems('{{word:yong4}} {{word:jiao3}} {{word:qu4}}', 'zou3', words)).toEqual([]);
    expect(formProblems('X {{word:qu4}}-{{light:jiao3}} Y', 'zou3', words)).toEqual([]);
  });

  test('the word itself is not allowed, in any spelling', () => {
    expect(formProblems('{{word:zou3}} {{word:qu4}}', 'zou3', words)[0]).toMatch(/the word itself/);
    expect(formProblems('{{Light:zou3}}', 'zou3', words)[0]).toMatch(/the word itself/);
  });

  test('an unknown word, a quoted sound and plain pinyin are each said', () => {
    expect(formProblems('{{word:nope}}', 'zou3', words)).toEqual(['names nope, which is not a word']);
    expect(formProblems('{{word:qu4}} "wāng"', 'zou3', words).join()).toMatch(/quoted sound/);
    expect(formProblems('{{word:qu4}} zou', 'zou3', words).join()).toMatch(/plain pinyin outside word refs: zou/);
  });

  test('a form with no word, and an empty one', () => {
    expect(formProblems('X Y', 'zou3', words)).toEqual(['uses no word']);
    expect(formProblems('  ', 'zou3', words)).toEqual(['an empty form']);
  });

  test('a sense may be named only when it can stand alone', () => {
    expect(formProblems('{{word:xin1#new}} {{word:qu4}}', 'zou3', words)).toEqual([]);
    expect(formProblems('{{word:xin1#part}}', 'zou3', words)[0]).toMatch(/cannot stand alone/);
  });
});

describe('a word', () => {
  const ok = { paraphrase: { forms: ['{{word:yong4}} {{word:jiao3}} {{word:qu4}}'], verdict: 'fine' } };

  test('a fine paraphrase has no problems; so does a word with neither yet', () => {
    expect(paraphraseProblems('zou3', ok, words)).toEqual([]);
    expect(paraphraseProblems('zou3', {}, words)).toEqual([]);
  });

  test('an atom needs both reasons', () => {
    expect(paraphraseProblems('zou3', { atom: { eng: 'x', rus: 'у' } }, words)).toEqual([]);
    expect(paraphraseProblems('zou3', { atom: { eng: 'x', rus: '' } }, words)).toEqual(['atom: no rus reason']);
  });

  test('exactly one of the two', () => {
    const both = { ...ok, atom: { eng: 'x', rus: 'у' } };
    expect(paraphraseProblems('zou3', both, words)[0]).toMatch(/exactly one/);
  });

  test('the verdict, the forms and stray fields are checked', () => {
    expect(paraphraseProblems('zou3', { paraphrase: { forms: ['{{word:qu4}}'], verdict: 'good' } }, words)[0]).toMatch(/verdict/);
    expect(paraphraseProblems('zou3', { paraphrase: { forms: [], verdict: 'fine' } }, words)).toEqual(['paraphrase: no forms']);
    expect(paraphraseProblems('zou3', { paraphrase: { forms: ['{{word:qu4}}', '{{word:qu4}}'], verdict: 'fine' } }, words)).toEqual(['paraphrase: the same form twice']);
    expect(paraphraseProblems('zou3', { paraphrase: { forms: ['{{word:zou3}}'], verdict: 'fine' } }, words)[0]).toMatch(/^paraphrase form 1: uses the word itself/);
    expect(paraphraseProblems('zou3', { paraphrase: { forms: ['{{word:qu4}}'], verdict: 'fine', why: 'x' } }, words)[0]).toMatch(/unknown field why/);
  });
});

describe('the status of a word', () => {
  test('fine, clumsy, atom, none, both', () => {
    expect(paraphraseStatus({ paraphrase: { forms: ['a'], verdict: 'fine' } })).toBe('paraphrase');
    expect(paraphraseStatus({ paraphrase: { forms: ['a'], verdict: 'clumsy' } })).toBe('clumsy');
    expect(paraphraseStatus({ atom: { eng: 'a', rus: 'б' } })).toBe('atom');
    expect(paraphraseStatus({})).toBe('none');
    expect(paraphraseStatus({ atom: {}, paraphrase: {} })).toBe('both');
  });

  test('a clumsy paraphrase counts as an atom mark (K8); a fine one does not', () => {
    expect(isAtomMark({ paraphrase: { forms: ['a'], verdict: 'clumsy' } })).toBe(true);
    expect(isAtomMark({ atom: { eng: 'a', rus: 'б' } })).toBe(true);
    expect(isAtomMark({ paraphrase: { forms: ['a'], verdict: 'fine' } })).toBe(false);
    expect(isAtomMark({})).toBe(false);
  });

  test('counts', () => {
    const all = { a: {}, b: { atom: { eng: 'a', rus: 'б' } }, c: { paraphrase: { forms: ['x'], verdict: 'fine' } } };
    expect(paraphraseCounts(all)).toEqual({ paraphrase: 1, clumsy: 0, atom: 1, none: 1, both: 0, total: 3 });
  });
});
