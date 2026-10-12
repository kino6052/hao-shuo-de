import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { KINDS, renderRelations } from './relations.js';
import { source } from './fixture.js';

const w = (term, hanzi, pos = 'noun', extra = {}) => ({ term, hanzi, pos: { eng: pos }, definition: { eng: `the word ${term}` }, necessity: { index: 3, eng: `why ${term}` }, ...extra });
const c = (rank, zh, py, en, hsd, extra = {}) => ({ rank, zh, py, en, hsd, tts: zh, pos: 'noun', fit: 'natural', ...extra });
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join('-');

// the fixture language, plus a person word, a "not", and composites that make each rule fire
const words = {
  ...source.words,
  ren2: w('rén', '人'),
  bu4: w('bù', '不', 'adverb'),
  fan4: { ...source.words.fan4, paraphrase: { forms: [`${ref('bu4')} ${ref('chi1')}`], verdict: 'fine' } },
  fei1: { ...source.words.fei1, paraphrase: { forms: [ref('dong1')], verdict: 'fine' } },
};
const composites = [
  ...source.composites,
  c(10, '东机', 'dōngjī', 'east machine', ref('dong1', 'ji1')),
  c(11, '西机', 'xījī', 'west machine', ref('xi1', 'ji1')),
  c(12, '吃机', 'chījī', 'eating machine', ref('chi1', 'ji1')),
  c(13, '吃饭2', 'chīfàn', 'dinner', `${ref('chi1')} ${ref('fan4')}`),
  c(14, '学生', 'xuésheng', 'student', `${ref('chi1')}-${ref('de')} ${ref('ren2')}`),
];
const maps = {
  antonyms: { pairs: [['dong1', 'xi1']], phrases: { fei1: [`${ref('bu4')} ${ref('fei1')}`], dui4: [`${ref('chi1')} ${ref('dui4')}`] } },
  synonyms: { pairs: [['chi1', 'fei1']], phrases: { ji1: [`${ref('fan4')}-${ref('de')} ${ref('ji1')}`] } },
};
const kb = createKb({ ...source, words, composites, maps });
const report = kb.relations();
const of = (kind) => report.relations.filter((r) => r.kind === kind);

describe('stored relations are accepted', () => {
  test('pairs, and phrases for a word with no opposite word', () => {
    expect(of('opposite').filter((r) => r.status === 'accepted').map((r) => [r.a, r.b])).toEqual([['dong1', 'xi1']]);
    expect(of('close').filter((r) => r.status === 'accepted').map((r) => [r.a, r.b])).toEqual([['chi1', 'fei1']]);
    // "bù fēi" for fēi is the opposite said by "not"; "chī duì" for duì is just a phrase
    expect(of('opposite-by-not').filter((r) => r.status === 'accepted').map((r) => r.a)).toEqual(['fei1']);
    expect(of('opposite-phrase').map((r) => r.a)).toEqual(['dui4']);
    expect(of('close-phrase').map((r) => r.a)).toEqual(['ji1']);
  });

  test('a category is a group', () => {
    const cat = of('category').map((r) => r.members);
    expect(cat).toContainEqual(['fan4', 'dong1', 'xi1']);
    expect(of('category').every((r) => r.status === 'accepted')).toBe(true);
  });
});

describe('a rule proposes what the data implies', () => {
  test('composites that differ in one slot, where the two words are opposites or close', () => {
    const opp = of('opposite').filter((r) => r.status === 'proposed');
    expect(opp.map((r) => [r.a, r.b].sort())).toEqual([['东机', '西机']]);
    expect(opp[0].why).toContain('differ only in dōng / xī, which are opposites');
    // 飞机 (fēi-jī) and 吃机 (chī-jī) differ only in fēi / chī, which are close
    const near = of('close').filter((r) => r.status === 'proposed');
    expect(near.map((r) => [r.a, r.b].sort())).toEqual([['吃机', '飞机']]);
  });

  test('composites that share a description are one group', () => {
    const groups = of('same-form');
    expect(groups).toHaveLength(1);
    expect(groups[0].members.sort()).toEqual(['吃饭', '吃饭2'].sort());
    expect(groups[0].status).toBe('proposed');
  });

  test('a composite is a kind of its head; a person named by what they do is an agent', () => {
    const kind = (zh) => of('kind-of').find((r) => r.a === zh);
    expect(kind('飞机')).toMatchObject({ b: 'ji1', ends: 'composite-word', status: 'proposed' });
    expect(of('agent').map((r) => r.a)).toEqual(['学生']);
    expect(of('agent')[0].why).toContain('xuésheng');
  });

  test('paraphrases: "not" + a word is an opposite by "not"; one word is a close word', () => {
    const byNot = of('opposite-by-not').filter((r) => r.status === 'proposed');
    expect(byNot.map((r) => [r.a, r.b])).toEqual([['fan4', 'chi1']]);
    expect(of('close-by-paraphrase').map((r) => [r.a, r.b])).toEqual([['fei1', 'dong1']]);
  });

  test('a relation that is already stored is not proposed again', () => {
    // the stored pair dong1/xi1 stays one relation, accepted
    expect(of('opposite').filter((r) => r.a === 'dong1' || r.b === 'dong1')).toHaveLength(1);
  });
});

describe('the counts and the text', () => {
  test('counts per kind and status add up to the relations', () => {
    const sum = Object.values(report.counts).reduce((n, k) => n + k.accepted + k.proposed, 0);
    expect(sum).toBe(report.relations.length);
    expect(report.counts.opposite).toEqual({ accepted: 1, proposed: 1 });
    expect(report.kinds.every((k) => KINDS.includes(k))).toBe(true);
  });

  test('the text lists the kinds, and one kind with its why', () => {
    const all = renderRelations(report);
    expect(all).toContain('accepted');
    expect(all).toContain('Name a kind');
    const one = renderRelations(report, { kind: 'opposite', status: 'proposed' });
    expect(one).toContain('opposite (1, proposed)');
    expect(one).toContain('[proposed]');
    expect(one).toContain('(one slot differs)');
    expect(() => renderRelations(report, { kind: 'cousin' })).toThrow(/unknown kind "cousin"/);
  });
});
