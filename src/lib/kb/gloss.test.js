// TRANSLATOR_PLAN.md B3, B5: kb_gloss is mechanical -- each word's own first sense, nothing else.

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { askGloss } from './gloss.js';
import { source } from './fixture.js';

const kb = createKb(source);

describe('askGloss', () => {
  test('each word becomes its own definition\'s first sense', () => {
    const r = askGloss(kb, { text: 'Wǒ chī fàn.' }).data;
    const s = r.sentences[0];
    expect(s.text).toBe('Wǒ chī fàn.');
    expect(s.gloss).toBe('the word wǒ the word chī meal.');
  });

  test('a definition split on ";" keeps only the first sense, dropping any word ref after it', () => {
    const r = askGloss(kb, { text: 'Fàn.' }).data;
    expect(r.sentences[0].gloss).toBe('meal.');
  });

  test('a sense ends at ":" too, and a word reference left in it is shown as pinyin, never as {{word:…}}', () => {
    const words = {
      ...source.words,
      fan4: { ...source.words.fan4, definition: { eng: 'meal: {{word:chi1}}-{{word:fan4}}, eating' } },
      chi1: { ...source.words.chi1, definition: { eng: 'to eat {{word:fan4}}' } },
    };
    const r = askGloss(createKb({ ...source, words }), { text: 'Wǒ chī fàn.' }).data;
    expect(r.sentences[0].gloss).toBe('the word wǒ to eat fàn meal.');
  });

  test('a chain that spells a composite is glossed by the composite\'s own first sense, not word by word', () => {
    const r = askGloss(kb, { text: 'Wǒ chī shí-jiān.' }).data;
    expect(r.sentences[0].gloss).toBe('the word wǒ the word chī time.');
  });

  test('a chain spelling no composite is glossed word by word; the longest spelled part wins, from the left', () => {
    expect(askGloss(kb, { text: 'Fēi-chī.' }).data.sentences[0].gloss).toBe('the word fēi-the word chī.');
    expect(askGloss(kb, { text: 'Fēi-jī-de.' }).data.sentences[0].gloss).toBe('airplane-the word de.');
  });

  test('synonyms share a form: the composite written with the chain\'s own hanzi wins over a lower rank', () => {
    const composites = [{ rank: 1, zh: '事', en: 'matter, affair', hsd: '{{word:dong1}}-{{light:xi1}}' }, ...source.composites];
    const r = askGloss(createKb({ ...source, composites }), { text: 'Dōng-xi. Shí-jiān.' }).data;
    expect(r.sentences.map((s) => s.gloss)).toEqual(['thing.', 'time.']); // 东西; 时间 through shi2's sense 时
  });

  test('several sentences are glossed one by one', () => {
    const r = askGloss(kb, { text: 'Wǒ chī fàn. Fàn.' }).data;
    expect(r.sentences).toHaveLength(2);
  });

  test('an unknown word is named, not silently dropped', () => {
    const r = askGloss(kb, { text: 'Wǒ hdfkj.' }).data;
    expect(r.sentences[0].unknown).toHaveLength(1);
    expect(r.sentences[0].unknown[0].token).toBe('hdfkj');
  });

  test('text is required', () => {
    expect(() => askGloss(kb, {})).toThrow('text is required');
  });
});
