import { describe, expect, test } from 'bun:test';
import { words } from '../../src/lib/kb/fixture.js';
import { tagNet } from '../../src/lib/tag-net.js';
import { specProblems, entryOf, refactorText, batchText, sameForms } from './lib.js';

const topicNet = tagNet([{ id: 'food-and-drink' }, { id: 'meals', parents: ['food-and-drink'] }]);
const kindNet = tagNet([{ id: 'thing' }, { id: 'food-thing', parents: ['thing'] }]);
// the patterns read everything but a form that starts with de
const parse = (refs) => (refs.startsWith('{{word:de}}') ? { ok: false, why: 'stops at de' } : { ok: true, why: '' });
const ctx = { words, have: new Set(['饭']), parse, topicNet, kindNet };
const spec = {
  zh: '早饭',
  py: 'zǎofàn',
  en: 'breakfast',
  ru: 'завтрак',
  pos: 'noun',
  forms: [['chī-de fàn', '吃的饭']],
  literal: 'the eaten meal',
  fit: 'plain',
  topics: ['meals'],
  isA: ['food-thing'],
};
const problems = (s) => specProblems({ ...spec, ...s }, ctx).problems;

describe('a spec', () => {
  test('a good one has no problems and its forms as word refs', () => {
    const r = specProblems(spec, ctx);
    expect(r.problems).toEqual([]);
    expect(r.refs).toEqual(['{{word:chi1}}-{{word:de}} {{word:fan4}}']);
  });
  test('the tags: a leaf page and a known kind, both required', () => {
    expect(problems({ topics: ['food-and-drink'] })).toEqual(['topic "food-and-drink" has pages under it: pick one of meals']);
    expect(problems({ topics: [], isA: ['nothing'] })).toEqual(['no topics (a leaf of src/data/maps/topics.ts)', 'kind "nothing" is not in maps/kinds.ts']);
  });
  test('an entry the dictionary has, an unknown field, a bad fit or part of speech', () => {
    expect(problems({ zh: '饭' })).toContain('the dictionary already has an entry for it');
    expect(problems({ colour: 'red' })).toContain('unknown field "colour"');
    expect(problems({ fit: 'maybe', pos: 'thing' })).toHaveLength(2);
  });
  test('the forms: core words only, read by the patterns, a literal for a description', () => {
    expect(problems({ forms: [['chī zzz', '吃zzz']] }).join(' ')).toMatch(/zzz/);
    expect(problems({ forms: [['de fàn', '的饭']] })).toEqual(['"de fàn" does not parse -- stops at de']);
    expect(problems({ literal: '' })).toEqual(['a plain description needs its literal English']);
  });
  test('a gap has no forms and says why; a lone colloquial form needs a second one', () => {
    expect(problems({ fit: 'gap', forms: [] })).toEqual(['fit "gap" needs a note saying why']);
    expect(problems({ fit: 'gap', forms: [], note: 'no way yet' })).toEqual([]);
    expect(problems({ fit: 'natural' })[0]).toMatch(/only form is a colloquial one/);
    expect(problems({ fit: 'natural', transparent: true })).toEqual([]);
  });
});

describe('what a round writes', () => {
  const entry = entryOf(spec, ['{{word:chi1}}-{{word:de}} {{word:fan4}}'], 7000);
  test('the entry is proposed, tagged, and spoken by its hanzi', () => {
    expect(entry).toMatchObject({ rank: 7000, phase: 4, zh: '早饭', tts: ['吃的饭'], topics: ['meals'], isA: ['food-thing'], proposed: true });
  });
  test('the refactor list and the review batch name the entry', () => {
    expect(refactorText({ name: 'Y1', batch: 30, entries: [entry], about: '', date: '2026-10-21' })).toContain('{ op: "composite", zh: "早饭", create: { rank: 7000');
    const batch = batchText({ name: 'Y1', batch: 30, entries: [entry], whyOf: () => 'mandarin 1692', synonyms: { 早饭: ['早餐'] }, date: '2026-10-21' });
    expect(batch).toContain('Y1, for the yardsticks (mandarin 1692)');
    expect(batch).toContain('"早饭": [');
  });
  test('a description two entries give is found', () => {
    expect(sameForms([entry], [{ zh: '早餐', hsd: '{{word:chi1}}-{{word:de}} {{word:fan4}}' }])).toEqual([{ form: '{{word:chi1}}-{{word:de}} {{word:fan4}}', zh: ['早餐', '早饭'] }]);
  });
});
