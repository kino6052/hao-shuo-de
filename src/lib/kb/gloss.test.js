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
