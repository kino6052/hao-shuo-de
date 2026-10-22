// TRANSLATOR_PLAN.md C2: kb_memory on the fixture's own sentences (lesson examples, composite examples, the
// phrase book) -- closeness is plain Jaccard over the English words, nothing about Hao-shuo-de or grammar.

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { askMemory, memorySkip } from './memory.js';
import { source } from './fixture.js';

const kb = createKb(source);

describe('askMemory', () => {
  test('an exact English match comes first, with its Hao-shuo-de and lesson', () => {
    const r = askMemory(kb, { text: 'I fly.' }).data;
    expect(r.rows[0]).toMatchObject({ en: 'I fly.', pinyin: 'Wǒ fēi.', hanzi: '我飞。', lesson: 'more', score: 1 });
  });

  test('a partial match scores lower than an exact one, and both outrank an unrelated sentence', () => {
    const r = askMemory(kb, { text: 'I eat a meal.' }).data;
    expect(r.rows[0]).toMatchObject({ en: 'I eat a meal.', lesson: 'basics', score: 1 });
    const ids = r.rows.map((row) => row.en);
    expect(ids).toContain('I eat.'); // the phrase book's "I eat." shares "I" and "eat"
    expect(r.rows.find((row) => row.en === 'I eat.').score).toBeLessThan(1);
  });

  test('nothing shared: no rows', () => {
    const r = askMemory(kb, { text: 'zzzz qqqq' }).data;
    expect(r.rows).toEqual([]);
  });

  test('limit caps how many come back, highest score first', () => {
    const r = askMemory(kb, { text: 'I eat a meal.', limit: 1 }).data;
    expect(r.rows).toHaveLength(1);
    expect(r.rows[0].score).toBe(1);
  });

  test('text is required', () => {
    expect(() => askMemory(kb, {})).toThrow('text is required');
  });

  test('skip leaves out the sentences whose id starts with a prefix (the test set hides its own stories)', () => {
    const first = askMemory(kb, { text: 'I fly.' }).data.rows[0];
    const r = askMemory(kb, { text: 'I fly.', skip: [first.id] }).data;
    expect(r.rows.map((row) => row.id)).not.toContain(first.id);
    expect(askMemory(kb, { text: 'I fly.', skip: [] }).data.rows[0].id).toBe(first.id);
  });

  test('HAOSHUODE_MEMORY_SKIP gives the prefixes, comma-separated', () => {
    expect(memorySkip({ HAOSHUODE_MEMORY_SKIP: 'sentence:story:appendix-stories/, sentence:phrase_book:' })).toEqual(['sentence:story:appendix-stories/', 'sentence:phrase_book:']);
    expect(memorySkip({})).toEqual([]);
  });

  test('the text form shows the pinyin, hanzi, lesson and share', () => {
    const t = askMemory(kb, { text: 'I fly.' }).text;
    expect(t).toContain('Wǒ fēi.');
    expect(t).toContain('lesson more; 100% shared');
  });
});
