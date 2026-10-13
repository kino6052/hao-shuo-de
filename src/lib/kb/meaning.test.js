// Meaning links (KB_PLAN.md K19): what the words say of the primes, the categories and the grammar, and which
// primes a description reaches. A small made-up language: the report reads the data, it changes nothing.

import { describe, expect, test } from 'bun:test';
import { meaningReport, meaningWord, renderMeaning, renderMeaningWord } from './meaning.js';

const w = (term, extra = {}) => ({ term, hanzi: term, pos: { eng: 'noun' }, definition: { eng: `the word ${term}` }, necessity: { eng: `why ${term}` }, ...extra });
const ref = (id) => `{{word:${id}}}`;
const words = {
  wo3: w('wǒ'),
  ni3: w('nǐ', { atom: { eng: 'x', rus: 'x' } }),
  ren2: w('rén', { definition: { eng: `a ${ref('wo3')} or ${ref('ni3')}` } }), // says SOMEONE and names two prime words
  men: w('men', { definition: { eng: `${ref('ren2')} together` } }), // one step from a prime word
  zhi: w('zhī'), // says a grammar item, names nothing
  lost: w('lost', { definition: { eng: `like ${ref('zhi')}` } }), // names a word that leads nowhere
  tou2: w('tóu', { atom: { eng: 'head', rus: 'голова' } }), // an atom that says no prime
  cycle: w('cycle', { definition: { eng: ref('men2') } }),
  men2: w('men2', { definition: { eng: ref('cycle') } }),
  para: w('para', { paraphrase: { forms: [ref('wo3')], verdict: 'fine' } }), // the paraphrase names a prime word
};
const item = (key, eng, ws) => ({ key, eng, words: ws, forms: [] });
const coverage = [
  { key: 'atoms', items: [item('I', 'I', ['wo3']), item('YOU', 'you', ['ni3']), item('SOMEONE', 'someone', ['ren2']), item('BODY', 'body', ['wo3', 'ni3'])] },
  { key: 'categories', items: [item('substance', 'what it is', ['ren2', 'men'])] },
  { key: 'grammar', items: [item('say', 'say', ['zhi']), item('order', 'order', []), item('lone', 'lone', [])] },
];
const patterns = [
  { id: 'p-say', covers: ['grammar:say'] },
  { id: 'p-lone', covers: ['grammar:lone'] },
];
const report = meaningReport({ words, coverage, patterns });
const item_ = (id) => report.items.find((i) => i.id === id);

describe('says', () => {
  test('every item with the words that carry it and the patterns that cover it', () => {
    expect(item_('atoms:I')).toMatchObject({ group: 'atoms', carriers: ['wo3'], patterns: [] });
    expect(item_('grammar:say')).toMatchObject({ carriers: ['zhi'], patterns: ['p-say'] });
    expect(item_('grammar:lone')).toMatchObject({ carriers: [], patterns: ['p-lone'] });
  });

  test('the group counts: said, carried once, no carrier', () => {
    // I, you and someone have one carrier each; body has two
    expect(report.groups.atoms).toMatchObject({ said: 4, once: 3, none: 0 });
    expect(report.groups.categories).toMatchObject({ said: 1, once: 0, none: 0 });
    // say: a word and a pattern; order: nothing; lone: one pattern
    expect(report.groups.grammar).toMatchObject({ said: 2, once: 1, none: 1 });
  });

  test('what a word says', () => {
    expect(meaningWord(report, 'wo3').says).toEqual(['atoms:I', 'atoms:BODY']);
    expect(meaningWord(report, 'zhi').says).toEqual(['grammar:say']);
    expect(meaningWord(report, 'nope')).toBeNull();
  });
});

describe('atoms against primes', () => {
  test('the marked ones that say a prime, and the ones that say none', () => {
    expect(report.atoms.marked).toBe(2);
    expect(report.atoms.markedPrime).toEqual(['ni3']);
    expect(report.atoms.markedOther).toEqual(['tou2']);
  });

  test('a word that says a prime and is not marked as an atom', () => {
    expect([...report.atoms.primeNotMarked].sort()).toEqual(['ren2', 'wo3']);
  });

  test('a word that says a prime and still names other words has a description NSM would not give', () => {
    expect(report.atoms.primeDescribed).toEqual([{ id: 'ren2', names: ['wo3', 'ni3'] }]);
  });
});

describe('made of primes', () => {
  test('the step to the nearest prime: 0 for a prime word, then one more for each word named', () => {
    expect(report.grounding.depth).toMatchObject({ wo3: 0, ni3: 0, ren2: 0, men: 1, para: 1 });
    expect(report.grounding.histogram).toEqual({ 0: 3, 1: 2 });
  });

  test('the primes a word reaches through the words it names; the ones it says itself are separate', () => {
    expect(meaningWord(report, 'men')).toMatchObject({ own: [], direct: ['SOMEONE'], depth: 1 });
    expect([...meaningWord(report, 'men').reaches].sort()).toEqual(['BODY', 'I', 'SOMEONE', 'YOU']);
    expect(meaningWord(report, 'ren2')).toMatchObject({ own: ['SOMEONE'], direct: ['I', 'BODY', 'YOU'] });
  });

  test("a paraphrase's words count as what the word is made of", () => {
    expect(meaningWord(report, 'para')).toMatchObject({ names: ['wo3'], direct: ['I', 'BODY'], depth: 1 });
  });

  test('a word whose description never reaches a prime is listed apart from the atoms, and a cycle reaches nothing', () => {
    expect([...report.grounding.unreached].sort()).toEqual(['cycle', 'lost', 'men2', 'zhi']);
    expect(report.grounding.unreachedAtoms).toEqual(['tou2']);
  });
});

describe('renderMeaning', () => {
  const names = Object.fromEntries(Object.entries(words).map(([id, x]) => [id, { term: x.term }]));

  test('the whole report: the items, the fragile ones, the atoms and the grounding', () => {
    const text = renderMeaning(report, names);
    expect(text).toContain('Meaning links: 8 coverage items (primes 4, categories 1, grammar items 3); 10 words.');
    expect(text).toContain('primes: 4 of 4 can be said; 0 have no carrier; 3 are carried once');
    expect(text).toContain('grammar items: 2 of 3 can be said; 1 have no carrier; 1 are carried once');
    expect(text).toContain('atoms:I (I)  by word wǒ');
    expect(text).toContain('grammar:lone (lone)  by pattern p-lone');
    expect(text).toContain('No carrier: grammar:order.');
    expect(text).toContain('Marked as atoms: 2. 1 say a prime, 1 say none (tóu)');
    expect(text).toContain('Say a prime and still name other words in their description (1;');
    expect(text).toContain('rén  names wǒ, nǐ');
    expect(text).toContain('5 of 10 words reach a prime');
    expect(text).toContain('Not reaching one: 1 marked as atoms (nothing to trace), and 4 that are not atoms');
  });

  test('one section', () => {
    const text = renderMeaning(report, names, { section: 'grounding' });
    expect(text.startsWith('Made of primes')).toBe(true);
    expect(text).not.toContain('Meaning links');
  });

  test('--limit cuts the lists', () => {
    expect(renderMeaning(report, names, { section: 'says', limit: 1 })).toContain('… and 2 more');
  });

  test("a word's line says what it says, what it names and how far the nearest prime is", () => {
    expect(renderMeaningWord(meaningWord(report, 'wo3'), names)).toBe('Says: atoms:I, atoms:BODY.\nIts description names no other word. It is a prime word itself.');
    const men = renderMeaningWord(meaningWord(report, 'men'), names);
    expect(men).toContain('Its description names rén; of those, 1 prime is said directly (SOMEONE).');
    expect(men).toContain('The nearest prime is 1 step away.');
    expect(men).toContain('reaches 4 primes in all');
    expect(renderMeaningWord(meaningWord(report, 'lost'), names)).toContain('none of it leads to a prime: it cannot be traced down');
    expect(renderMeaningWord(null, names)).toBe('No such word.');
  });
});
