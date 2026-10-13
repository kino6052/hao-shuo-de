// A composite's description is read with the forms option: A, B, C and … stand for what is said there.

import { describe, expect, test } from 'bun:test';
import { createParser } from './parser.js';
import { buildLexicon, lex } from './lexicon.js';

const w = (term, pos) => ({ term, pos: { eng: pos }, definition: { eng: `the word ${term}` } });
const words = { wo3: w('wǒ', 'pronoun'), kan4: w('kàn', 'verb'), shu1: w('shū', 'noun'), hao3: w('hǎo', 'adjective') };
const rule = (lhs, hsd) => ({ lhs, hsd, eng: '' });
const patterns = [
  {
    id: 'tiny',
    meaning: { eng: 'x', rus: 'x' },
    covers: [],
    template: { hsd: '', eng: '' },
    rules: [rule('Utt', 'NP VP'), rule('NP', '@noun'), rule('NP', '@pronoun'), rule('VP', '@verb NP'), rule('VP', '@verb'), rule('Frame', 'NP VP')],
    examples: [],
  },
];
const parser = createParser({ patterns, words });
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ');
const edge = (r, i) => r.edges.find((e) => e.from === i && e.to === i + 1);

describe('forms: true', () => {
  test('A, B, C and X, Y, Z are slots; without it only X, Y and Z are', () => {
    const lexicon = buildLexicon({ words });
    expect(edge(lex('A', lexicon, { forms: true }), 0).classes.has('slot')).toBe(true);
    expect(edge(lex('C', lexicon, { forms: true }), 0).classes.has('slot')).toBe(true);
    expect(edge(lex('X', lexicon), 0).classes.has('slot')).toBe(true);
    expect(edge(lex('A', lexicon), 0)?.classes.has('slot') ?? false).toBe(false);
  });

  test('a slot in a description may also stand for what is done', () => {
    const lexicon = buildLexicon({ words });
    expect([...edge(lex('A', lexicon, { forms: true }), 0).classes].sort()).toEqual(['noun', 'slot', 'verb']);
    expect(edge(lex('X', lexicon), 0).classes.has('verb')).toBe(false);
  });

  test('… is a slot in a description, and a sentence end anywhere else', () => {
    const lexicon = buildLexicon({ words });
    const inForm = lex(`${ref('wo3')} …`, lexicon, { forms: true });
    expect(inForm.tokens.map((t) => t.kind)).toEqual(['word', 'slot']);
    const plain = lex(`${ref('wo3')} …`, lexicon);
    expect(plain.tokens.map((t) => t.kind)).toEqual(['word']);
    expect(plain.edges.some((e) => e.classes?.has('slot'))).toBe(false);
  });

  test('a description with a slot parses by the patterns', () => {
    expect(parser.parse(`${ref('wo3', 'kan4')} A`, { forms: true }).ok).toBe(true);
    expect(parser.parse(`A ${ref('kan4')} B`, { forms: true }).ok).toBe(true);
    expect(parser.parse(`${ref('wo3', 'kan4')} A`).ok).toBe(false);
  });

  test('a slot in the verb place', () => {
    expect(parser.parse(`${ref('wo3')} A`, { forms: true }).ok).toBe(true);
  });
});

describe('start', () => {
  test('a description can be read as a phrase, not only as a whole sentence', () => {
    expect(parser.parse(ref('wo3', 'kan4'), { start: 'VP' }).ok).toBe(false);
    expect(parser.parse(ref('kan4', 'shu1'), { start: 'VP' }).ok).toBe(true);
  });
});
