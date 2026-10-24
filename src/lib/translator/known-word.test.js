// Step 0's English word check (known-word.js) on a tiny WordNet index.

import { describe, expect, test } from 'bun:test';
import { makeKnownWord } from './known-word.js';

const known = makeKnownWord({ lemmas: { cat: ['i1'], eat: ['i2'], rice: ['i3'], go: ['i4'] }, forms: { ate: ['eat'] } });

describe('makeKnownWord', () => {
  test('a WordNet word in any of its forms, and the small words WordNet leaves out', () => {
    expect(['cat', 'cats', 'eats', 'eating', 'ate', 'rice', 'the', 'of', 'would', 'I'].every(known)).toBe(true);
  });

  test('a misspelled word is not known; a capitalized one is taken as a name', () => {
    expect(known('rcie')).toBe(false);
    expect(known('teh')).toBe(false);
    expect(known('Jack')).toBe(true);
  });

  test('a contraction counts by its stem', () => {
    expect(["don't", "won't", "can't", "she's", "I'm", "cat's"].every(known)).toBe(true);
    expect(known("rcie's")).toBe(false);
  });
});
