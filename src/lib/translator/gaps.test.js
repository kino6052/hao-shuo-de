// TRANSLATOR_PLAN.md E2: the gaps from the saved translations, gathered into one queue.

import { describe, expect, test } from 'bun:test';
import { collectGaps, renderGaps } from './gaps.js';

describe('collectGaps', () => {
  test('the same idea from two texts is one row, met twice; a long cast description counts too', () => {
    const results = [
      { file: 'a.json', result: { gaps: [{ idea: 'Umbrella', description: 'ràng shuǐ bù dào shēntǐ shàng-de dōng-xi', note: 'no word' }], cast: [] } },
      {
        file: 'b.json',
        result: {
          gaps: [{ idea: 'umbrella', description: '', note: '' }],
          cast: [
            { thing: 'umbrella', description: 'x x x x x x x x x x x x', short: '' },
            { thing: 'wolf', description: 'dà-de huài-de dòng-wù', short: 'zhè-ge dòng-wù' },
            { thing: 'castle', description: 'hěn dà hěn gāo-de yǒu hěn duō fángzi-de dì-fang', short: 'zhè-ge dì-fang' },
          ],
        },
      },
    ];
    expect(collectGaps(results)).toEqual([
      { idea: 'Umbrella', times: 2, descriptions: ['ràng shuǐ bù dào shēntǐ shàng-de dōng-xi'], notes: ['no word'], texts: ['a.json', 'b.json'] },
      { idea: 'castle', times: 1, descriptions: ['hěn dà hěn gāo-de yǒu hěn duō fángzi-de dì-fang'], notes: ['a 12-word description'], texts: ['b.json'] },
    ]);
  });

  test('the text says how many and the most met first', () => {
    expect(renderGaps([])).toBe('No gaps in the saved translations.');
    expect(renderGaps([{ idea: 'umbrella', times: 2, descriptions: ['d'], notes: ['n'], texts: [] }])).toBe('1 idea with no short way to say it, most often met first:\n- umbrella (2x): d -- n');
  });
});
