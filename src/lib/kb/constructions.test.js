// TRANSLATOR_PLAN.md C3: kb_constructions on the fixture with a small table of its own -- the word matching (endings,
// either-words, the start of a sentence, the words that only look like a past or an -ing form), each row's patterns
// and entries, the whole table, and kb_lookup's pointer to it.

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { askConstructions, matchConstructions } from './constructions.js';
import { askLookup } from './lookup.js';
import { source } from './fixture.js';

const patterns = [
  {
    id: 'svo',
    taught: 'basics/eat',
    meaning: { eng: 'who does what' },
    template: { hsd: 'who + verb + what', eng: 'Subject does the verb to the object' },
    examples: [['Wǒ chī fàn.', 'I eat a meal.']],
    rules: [
      { lhs: 'Utt', hsd: 'S' },
      { lhs: 'S', hsd: 'NP VP' },
      { lhs: 'NP', hsd: '@pronoun' },
      { lhs: 'NP', hsd: '@noun' },
      { lhs: 'VP', hsd: '@verb NP' },
    ],
  },
  {
    id: 'de-modifier',
    taught: 'more/fly',
    meaning: { eng: 'whose' },
    template: { hsd: 'owner + {{word:de}} + noun', eng: "the owner's noun" },
    examples: [['Wǒ-de fàn.', 'My meal.']],
    rules: [{ lhs: 'NP', hsd: 'NP de NP' }],
  },
];

const constructions = [
  { id: 'possessive', en: "my, -'s", match: ['my', "*'s"], patterns: ['de-modifier'], entries: ['的'], note: 'The owner and -de.' },
  { id: 'past', en: 'did, -ed', match: ['did', '*ed'], patterns: ['svo'], entries: [] },
  { id: 'so-result', en: 'so (the result)', match: [', so', '^so'], patterns: ['svo'], entries: ['吃饭'] },
  { id: 'now-ing', en: 'is doing', match: ['am|is|are *ing'], patterns: ['svo'], entries: ['飞机'] },
  { id: 'ghost', en: 'nothing real', match: ['zzz'], patterns: ['no-such'], entries: ['不存在'] },
];

const kb = createKb({ ...source, patterns, maps: { ...source.maps, constructions } });
const ids = (text) => matchConstructions(constructions, text).map((h) => h.row.id);

describe('matchConstructions', () => {
  test('finds each row in the order it first shows, with the words it matched', () => {
    const hits = matchConstructions(constructions, 'I fixed my bike, so it works.');
    expect(hits.map((h) => h.row.id)).toEqual(['past', 'possessive', 'so-result']);
    expect(hits.map((h) => h.found)).toEqual([['fixed'], ['my'], [', so']]);
  });

  test("words that only look like a past form, an -ing form or an 's are not matched", () => {
    expect(ids("I need a bed. It's something red.")).toEqual([]);
    expect(ids('That is something.')).toEqual([]);
    expect(ids('He is flying.')).toEqual(['now-ing']);
    expect(ids("Mom's bag.")).toEqual(['possessive']);
  });

  test('^ holds only at the start of a sentence', () => {
    expect(ids('So I ate. Then I left.')).toEqual(['so-result']);
    expect(ids('I think so.')).toEqual([]);
  });
});

describe('askConstructions', () => {
  test('a text: each row with its patterns (lesson, template, example) and entries (their own form)', () => {
    const r = askConstructions(kb, { text: 'I fixed my bike, so it works.' });
    const so = r.data.rows.find((x) => x.id === 'so-result');
    expect(so.patterns).toEqual([{ id: 'svo', lesson: 1, template: { hsd: 'who + verb + what', eng: 'Subject does the verb to the object' }, example: { hsd: 'Wǒ chī fàn.', en: 'I eat a meal.' } }]);
    expect(so.entries[0]).toMatchObject({ zh: '吃饭', words: 2 });
    expect(so.entries[0].pinyin).toMatch(/^chī.fàn$/);
    const own = r.data.rows.find((x) => x.id === 'possessive');
    expect(own.patterns[0]).toMatchObject({ id: 'de-modifier', lesson: 2, template: { hsd: 'owner + de + noun' } });
    expect(own.entries[0]).toMatchObject({ zh: '的', pinyin: 'de', words: 1 });
    expect(r.text).toContain('[found: ", so"]');
    expect(r.text).toContain('note: The owner and -de.');
  });

  test('one row by id; an unknown id names the ids there are', () => {
    expect(askConstructions(kb, { id: 'past' }).data.rows[0].patterns.map((p) => p.id)).toEqual(['svo']);
    expect(() => askConstructions(kb, { id: 'nope' })).toThrow('possessive, past');
  });

  test('no text: the whole table, what cannot be used, and the patterns no row names', () => {
    const r = askConstructions(kb, {});
    expect(r.data.rows).toHaveLength(5);
    expect(r.data.rows.find((x) => x.id === 'ghost').missing).toEqual(['pattern no-such (not found)', 'entry 不存在 (no Hao-shuo-de form)']);
    expect(r.data.unnamed).toEqual([]);
    expect(askConstructions(createKb({ ...source, patterns, maps: { ...source.maps, constructions: constructions.slice(0, 1) } }), {}).data.unnamed).toEqual(['svo']);
  });

  test('no table: nothing found, no error', () => {
    expect(askConstructions(createKb({ ...source, patterns }), { text: 'so my' }).data.rows).toEqual([]);
  });
});

describe('kb_lookup points to the grammar', () => {
  test('an English word a row matches names that row', () => {
    const r = askLookup(kb, { word: 'my' });
    expect(r.data.constructions).toEqual(['possessive']);
    expect(r.text).toContain('Said by grammar too: kb_constructions "possessive"');
  });
});
