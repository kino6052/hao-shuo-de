// The minimal-patterns report (KB_PLAN.md phase 4): needed, combos, the cover and the learner load, on a small grammar.

import { describe, expect, test } from 'bun:test';
import { bookSentences, patternReport, renderPatternReport } from './pattern-report.js';

const w = (term, pos) => ({ term, pos: { eng: pos }, definition: { eng: `the word ${term}` } });
const words = { wo3: w('wǒ', 'pronoun'), kan4: w('kàn', 'verb'), shu1: w('shū', 'noun'), zou3: w('zǒu', 'verb') };
const rule = (lhs, hsd) => ({ lhs, hsd, eng: '' });
const pat = (id, rules, extra = {}) => ({ id, meaning: { eng: 'x', rus: 'x' }, covers: [], template: { hsd: '', eng: '' }, rules, examples: [], ...extra });

const patterns = [
  pat('core', [rule('Utt', 'NP VP'), rule('NP', '@noun'), rule('NP', '@pronoun')], { covers: ['grammar:say'], examples: [['Wǒ zǒu.', 'I go.']] }),
  pat('trans', [rule('VP', '@verb NP')], { covers: ['grammar:object'], examples: [['Wǒ kàn shū.', 'I read.']] }),
  pat('intrans', [rule('VP', '@verb')], { examples: [['Wǒ zǒu.', 'I go.']] }),
  // says the same as intrans: neither is needed for "Wǒ zǒu."; the example of alias still parses without alias
  pat('alias', [rule('VP', '@verb')], { covers: ['grammar:object'], examples: [['Wǒ zǒu.', 'I go.']] }),
];
const coverage = [{ key: 'grammar', items: [{ key: 'say' }, { key: 'object' }, { key: 'missing' }] }];
const ref = (...ids) => ids.map((i) => `{{word:${i}}}`).join(' ') + '.';
const sentences = [
  { text: ref('wo3', 'kan4', 'shu1'), where: 'one/a' },
  { text: ref('wo3', 'zou3'), where: 'one/b' },
  { text: ref('shu1', 'wo3'), where: 'one/c' }, // does not parse
];
const lessonOf = (id) => ({ core: 1, trans: 2, intrans: 3, alias: 3 })[id];
const report = (extra = {}) => patternReport({ patterns, words, sentences, lessonOf, coverage, lessons: [{ id: 'one', number: 1 }, { id: 'two', number: 2 }, { id: 'three', number: 3 }], ...extra });
const row = (r, id) => r.patterns.find((x) => x.id === id);

describe('needed by the book', () => {
  test('a pattern is needed by the sentences that stop parsing without it', () => {
    const r = report();
    expect(row(r, 'core').needed.total).toBe(2);
    expect(row(r, 'trans').needed).toMatchObject({ total: 1, where: [{ text: ref('wo3', 'kan4', 'shu1'), where: 'one/a' }] });
  });

  test('two patterns that say the same thing are each not needed', () => {
    const r = report();
    expect(row(r, 'intrans').needed.total).toBe(0);
    expect(row(r, 'alias').needed.total).toBe(0);
  });

  test('a sentence that does not parse is counted apart, not as a need', () => {
    const t = report().totals;
    expect(t).toMatchObject({ patterns: 4, sentences: 3, checked: 2, notParsed: 1 });
  });

  test('how many sentences read through it first', () => {
    const r = report();
    expect(row(r, 'trans').first).toBe(1);
    expect(row(r, 'core').first).toBe(2);
  });

  test('a pattern the time ran out on is not guessed', () => {
    const r = report({ deadlineMs: -1 });
    expect(row(r, 'trans').unchecked).toBe(true);
    expect(r.totals.unchecked).toBe(4);
  });
});

describe('combos', () => {
  test('an example that still parses without its pattern says which patterns parse it', () => {
    const r = report();
    expect(row(r, 'alias').ownExamples).toEqual({ total: 1, still: [{ pinyin: 'Wǒ zǒu.', by: ['core', 'intrans'] }] });
    expect(row(r, 'trans').ownExamples.still).toEqual([]);
    expect(row(r, 'core').ownExamples.still).toEqual([]);
  });
});

describe('cover the core', () => {
  test('the smallest set of patterns that carries the grammar items, and the items nothing carries', () => {
    const c = report().cover;
    expect(c.size).toBe(2);
    expect(c.forced).toEqual(['core']);
    expect(c.swappable).toEqual(['trans', 'alias']);
    expect(c.uncovered).toEqual(['grammar:missing']);
    expect(row(report(), 'core').cover).toBe('forced');
    expect(row(report(), 'alias').cover).toBe('swappable');
    expect(row(report(), 'intrans').cover).toBeUndefined();
  });
});

describe('learner load', () => {
  test('the patterns each lesson teaches, and the ones with no lesson', () => {
    const l = report({ lessonOf: (id) => ({ core: 1, trans: 2, intrans: 3 })[id] }).load;
    expect(l.lessons.map((x) => [x.number, x.patterns])).toEqual([[1, ['core']], [2, ['trans']], [3, ['intrans']]]);
    expect(l.noLesson).toEqual(['alias']);
  });

  test('an example that leans on a pattern taught after it is named', () => {
    const early = report({ lessonOf: (id) => ({ core: 2, trans: 1, intrans: 3, alias: 3 })[id] });
    expect(row(early, 'trans').buildsOn).toEqual([{ id: 'core', lesson: 2 }]);
    expect(row(early, 'trans').later).toEqual([{ id: 'core', lesson: 2 }]);
    expect(early.load.later.map((x) => x.id)).toEqual(['core', 'trans']);
    expect(row(report(), 'trans').later).toEqual([]);
  });
});

describe('bookSentences', () => {
  test('the sentences of the lessons and texts as word refs, once each; other kinds are left out', () => {
    const list = bookSentences(
      [
        { kind: 'lesson_example', lesson: 'one', module: 'a', pinyin: 'Wǒ zǒu. Wǒ kàn shū.' },
        { kind: 'story', lesson: 'one', module: 'b', pinyin: 'Wǒ zǒu.' },
        { kind: 'definition', lesson: 'one', module: 'c', pinyin: 'Wǒ zǒu.' },
        { kind: 'composite_example', composite: '走', pinyin: 'Wǒ kàn shū.' },
      ],
      words,
    );
    expect(list).toEqual([
      { text: '{{Word:wo3}} {{word:zou3}}.', where: 'one/a' },
      { text: '{{Word:wo3}} {{word:kan4}} {{word:shu1}}.', where: 'one/a' },
    ]);
  });
});

describe('renderPatternReport', () => {
  test('says the cover, what the book needs, the combos, and the learner load', () => {
    const text = renderPatternReport(report({ lessonOf: (id) => ({ core: 2, trans: 1, intrans: 3, alias: 3 })[id] }), words);
    expect(text).toContain('Patterns: 4 (3 carry a grammar item, 4 have a lesson). 2 sentences of the book checked; 1 do not parse at all and are left out.');
    expect(text).toContain('The grammar items need at least 2 patterns. 1 is in every smallest set');
    expect(text).toContain('No pattern carries: missing.');
    expect(text).toContain('2 patterns have a sentence that stops parsing without them; 2 have none.');
    expect(text).toContain('2 patterns have every example still parsing without them');
    expect(text).toContain('0 of 4 patterns say how to do without them');
    expect(text).toContain('trans (lesson 1) needs core (lesson 2)');
  });
});
