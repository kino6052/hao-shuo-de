// TRANSLATOR_PLAN.md B2, B5: kb_check_reading on a tiny grammar where one word (dui4, "adjective/verb" in the
// fixture) genuinely gives two readings, so "means it, with N other readings" has something real to test.

import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { askReading } from './check-reading.js';
import { source } from './fixture.js';

const patterns = [
  {
    id: 'svo',
    meaning: { eng: 'who does what' },
    rules: [
      { lhs: 'Utt', hsd: 'S' },
      { lhs: 'S', hsd: 'NP VP' },
      { lhs: 'NP', hsd: '@pronoun' },
      { lhs: 'VP', hsd: '@verb' },
      { lhs: 'VP', hsd: '@adjective' },
    ],
  },
];

const kb = createKb({ ...source, patterns });

describe('askReading', () => {
  test('an ambiguous sentence: the first reading means it, with the other named', () => {
    const r = askReading(kb, { text: 'Wǒ duì.', reading: '1' }).data;
    expect(r.ok).toBe(true);
    expect(r.means).toBe('yes-with-others');
    expect(r.others).toHaveLength(1);
  });

  test('the same sentence by its own bracket text means it too', () => {
    const first = askReading(kb, { text: 'Wǒ duì.', reading: '1' }).data;
    const r = askReading(kb, { text: 'Wǒ duì.', reading: first.bracket }).data;
    expect(r.means).toBe('yes-with-others');
    expect(r.bracket).toBe(first.bracket);
  });

  test('a reading number past the end of the list: cannot mean it, readings are shown', () => {
    const r = askReading(kb, { text: 'Wǒ duì.', reading: '5' }).data;
    expect(r.means).toBe('no');
    expect(r.parses).toBe(true);
    expect(r.readings).toHaveLength(2);
  });

  test('a bracket string that is not one of the readings: cannot mean it', () => {
    const r = askReading(kb, { text: 'Wǒ duì.', reading: '[Utt [S nonsense]]' }).data;
    expect(r.means).toBe('no');
    expect(r.parses).toBe(true);
  });

  test('a sentence with no grammar at all: cannot mean it, does not parse', () => {
    const r = askReading(kb, { text: 'Duì wǒ.', reading: '1' }).data;
    expect(r.means).toBe('no');
    expect(r.parses).toBe(false);
  });

  test('an unknown word: cannot check it', () => {
    const r = askReading(kb, { text: 'Wǒ hdfkj.', reading: '1' }).data;
    expect(r.ok).toBe(false);
    expect(r.means).toBeNull();
  });

  test('text and reading are required', () => {
    expect(() => askReading(kb, { reading: '1' })).toThrow('text is required');
    expect(() => askReading(kb, { text: 'Wǒ duì.' })).toThrow('reading is required');
  });
});
