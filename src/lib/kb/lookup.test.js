// TRANSLATOR_PLAN.md C1: kb_lookup on the fixture. Covers all three of kb_english's tiers (gloss, same sense,
// kind of) by giving a minimal WordNet-shaped index, and both the composite path (kb_built) and the bare-word
// path (the few core words no composite repeats, word-entries.js).

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { askLookup } from './lookup.js';
import { source } from './fixture.js';

const kb = createKb(source); // no English index: only the gloss tier answers

const englishData = () => ({
  links: { linked: { 飞机: ['i1'] } },
  index: {
    lemmas: { aircraft: ['i1'], glider: ['i2'] },
    synsets: {
      i1: { p: 'n', d: 'a vehicle that can fly', l: ['airplane', 'aircraft'], h: [] },
      i2: { p: 'n', d: 'an aircraft with no engine', l: ['glider'], h: ['i1'] },
    },
  },
});
const kbWithEnglish = createKb(source, { englishData });

describe('askLookup', () => {
  test('a composite by its gloss: the Hao-shuo-de form, not the Mandarin headword, with its lesson and length', () => {
    const r = askLookup(kb, { word: 'airplane' }).data;
    expect(r.rows).toHaveLength(1);
    const row = r.rows[0];
    expect(row.tier).toBe('gloss');
    expect(row.zh).toBe('飞机'); // the headword, for reference only
    expect(row.pinyin).toBe('fēi-jī'); // the Hao-shuo-de form actually said
    expect(row.hanzi).toBe('飞-机'); // mechanical: the hyphen of the chain carries over, same as kb_check_text's hanzi
    expect(row.words).toBe(2);
    expect(row.lesson).toBe('more'); // fēi is taught in lesson 2; jī in none, so it does not hold the lesson back
    expect(row.example).toEqual({ pinyin: 'Wǒ chī fàn.', hanzi: '我 吃 饭.', en: 'I eat.' }); // mechanical rendering, spacing as in the source
  });

  test('a bare core word no composite repeats: the word itself, through kb_word\'s own data', () => {
    const r = askLookup(kb, { word: 'word de' }).data; // fixture's default gloss for "de" is "the word de"
    expect(r.rows).toHaveLength(1);
    const row = r.rows[0];
    expect(row.zh).toBe('的');
    expect(row.pinyin).toBe('de');
    expect(row.words).toBe(1);
    expect(row.lesson).toBe('basics');
    expect(row.example).toBeNull();
  });

  test('nothing found: no rows, and a note says why', () => {
    const r = askLookup(kb, { word: 'zzzznope' }).data;
    expect(r.rows).toEqual([]);
    expect(r.note).toMatch(/index is not built/);
  });

  test('tier 2, same sense: a synonym the gloss itself does not say', () => {
    const r = askLookup(kbWithEnglish, { word: 'aircraft' }).data;
    expect(r.rows).toHaveLength(1);
    expect(r.rows[0]).toMatchObject({ tier: 'same-sense', zh: '飞机' });
  });

  test('tier 3, kind of: nothing says it, so the nearest entry on the way up answers', () => {
    const r = askLookup(kbWithEnglish, { word: 'glider' }).data;
    expect(r.rows).toHaveLength(1);
    expect(r.rows[0]).toMatchObject({ tier: 'kind-of', zh: '飞机' });
  });

  test('word is required', () => {
    expect(() => askLookup(kb, {})).toThrow('word is required');
  });

  test('the text form names the tier and shows the example', () => {
    const t = askLookup(kb, { word: 'airplane' }).text;
    expect(t).toContain('[gloss] fēi-jī');
    expect(t).toContain('e.g. Wǒ chī fàn.');
  });

  test('the glossary (E1) comes first: the form a translation chose, its why, and the lesson of its latest word', () => {
    const glossary = [{ en: 'plane', form: 'fēi-jī', zh: '飞机', why: 'the short name the story used', proposed: true }];
    const withGlossary = createKb({ ...source, maps: { ...source.maps, glossary } });
    const r = askLookup(withGlossary, { word: ' Plane ' }).data;
    expect(r.rows[0]).toMatchObject({ tier: 'glossary', pinyin: 'fēi-jī', hanzi: '飞-机', words: 2, zh: '飞机', proposed: true, lesson: null });
    expect(askLookup(withGlossary, { word: 'plane' }).text).toContain('[glossary, proposed] fēi-jī');
    expect(askLookup(withGlossary, { word: 'airplane' }).data.rows.map((x) => x.tier)).toEqual(['gloss']); // only its own English
  });
});
