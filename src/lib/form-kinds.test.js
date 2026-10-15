import { describe, expect, test } from 'bun:test';
import { formKinds, isMandarinCompound, kindsProblems, needsBuiltForm, undecidedForms } from './form-kinds.js';

// 东西: dōng-xi is Mandarin's own compound, wù is a description; 飞机 is built from its parts
const dongxi = { zh: '东西', hsd: ['{{word:dong1}}-{{light:xi1}}', '{{word:wu4}}'], tts: ['东西', '物'] };
const feiji = { zh: '飞机', hsd: ['{{word:fei1}}-{{word:ji1}}'], tts: ['飞机'] };

describe('the rule', () => {
  test('a form that is not Mandarin\'s compound is built; the compound is unknown until the author says', () => {
    expect(formKinds(dongxi)).toEqual(['unknown', 'built']);
    expect(undecidedForms(dongxi)).toEqual([0]);
  });

  test('a transparent entry\'s compound is built', () => {
    expect(formKinds({ ...feiji, transparent: true })).toEqual(['built']);
    expect(undecidedForms({ ...feiji, transparent: true })).toEqual([]);
  });

  test('a single word is not a compound, so it is built', () => {
    const word = { zh: '好', hsd: ['{{word:hao3}}'], tts: ['好'] };
    expect(isMandarinCompound(word, 0)).toBe(false);
    expect(formKinds(word)).toEqual(['built']);
  });

  test('the author\'s kinds win, for any form', () => {
    expect(formKinds({ ...dongxi, kinds: ['spelled', 'built'] })).toEqual(['spelled', 'built']);
    expect(formKinds({ ...feiji, kinds: ['built'] })).toEqual(['built']);
    expect(formKinds({ ...dongxi, kinds: ['built', 'spelled'] })).toEqual(['built', 'spelled']);
  });

  test('the assembled shape (forms as one joined string) reads the same', () => {
    const joined = { ...dongxi, hsd: dongxi.hsd.join(' / '), tts: dongxi.tts.join(' / ') };
    expect(formKinds(joined)).toEqual(['unknown', 'built']);
  });

  test('an entry with no forms has no kinds', () => {
    expect(formKinds({ zh: '你', py: 'nǐ' })).toEqual([]);
  });
});

describe('K23: a spelled form needs a built form beside it', () => {
  test('spelled alone is bare', () => {
    expect(needsBuiltForm({ ...dongxi, kinds: ['spelled', 'spelled'] })).toBe(true);
    expect(needsBuiltForm({ ...feiji, kinds: ['spelled'] })).toBe(true);
  });
  test('a built form beside it covers it, in either order', () => {
    expect(needsBuiltForm({ ...dongxi, kinds: ['spelled', 'built'] })).toBe(false);
    expect(needsBuiltForm({ ...dongxi, kinds: ['built', 'spelled'] })).toBe(false);
  });
  test('built only, undecided and empty entries are not bare', () => {
    expect(needsBuiltForm(feiji)).toBe(false);
    expect(needsBuiltForm(dongxi)).toBe(false);
    expect(needsBuiltForm({ zh: '你', py: 'nǐ' })).toBe(false);
  });
});

describe('the author\'s kinds are checked', () => {
  test('none is fine', () => {
    expect(kindsProblems(dongxi)).toEqual([]);
  });
  test('one per form, built or spelled', () => {
    expect(kindsProblems({ ...dongxi, kinds: ['spelled', 'built'] })).toEqual([]);
    expect(kindsProblems({ ...dongxi, kinds: ['spelled'] })[0]).toMatch(/1 item\(s\) but the entry has 2/);
    expect(kindsProblems({ ...dongxi, kinds: ['spelled', 'x'] })[0]).toMatch(/kinds\[1\]/);
    expect(kindsProblems({ ...dongxi, kinds: 'spelled' })[0]).toMatch(/must be a list/);
  });
});
