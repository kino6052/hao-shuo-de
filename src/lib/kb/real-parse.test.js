// The real book through the parser: how many of the lesson sentences parse, that
// the report reads as markdown, and the early-patterns rule (a sentence may only
// use the patterns its lesson has taught). No solver -- but it parses every
// sentence of the book, so `node scripts/test.js` runs it, not the commit hook.
// The what-if answers on the real data are in real.test.js.

import { beforeAll, describe, expect, test } from 'bun:test';
import { loadSource } from '../../../scripts/kb-source.js';
import { createKb } from './kb.js';
import { parseMemo } from '../../../scripts/parse-memo.js';
import { parseReport, renderParseReport } from './parse-report.js';

let kb;
let source;

beforeAll(async () => {
  source = await loadSource();
  // the parse memory on disk (scripts/parse-memo.js): these tests only ask whether sentences parse
  kb = createKb(source, { parseMemo: parseMemo() });
}, 60_000);

describe('the parse report on lessons 1-4', () => {
  const lessons = () => source.lessons.filter((l) => l.number <= 4).map(({ id, number }) => ({ id, number }));
  const report = () => parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons: lessons() });

  test('lessons 2 and 3 parse completely; the gaps are all in lesson 4', () => {
    const r = report();
    const by = Object.fromEntries(r.lessons.map((l) => [l.number, l]));
    expect(by[2].parsed).toBe(by[2].total);
    expect(by[3].parsed).toBe(by[3].total);
    expect(by[2].total + by[3].total).toBeGreaterThan(30);
    expect(r.failures.every((f) => f.lesson === 'pointing')).toBe(true);
  });

  // Lessons 1-4 no longer have such an answer (lesson 1's "Wo3 hao3." became "hao3."), so one is added here.
  // It is written with word refs: plain English that is not pinyin cannot be read at all, and counts as a failure.
  test('an English answer that names a word or two is left out, not counted as a failure', () => {
    const english = { kind: 'lesson_answer', lesson: 'sounds-and-symbols', key: 'test-english', pinyin: 'Write {{word:hao3}} with the number three after it.', en: '' };
    const r = parseReport({ sentences: [...kb.facts.sentences, english], parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons: lessons() });
    expect(r.skipped.map((it) => it.key)).toContain('test-english');
    expect(r.failures.some((f) => f.lesson === 'sounds-and-symbols')).toBe(false);
  });

  test('it prints as markdown with the rate, the lessons, and what does not parse', () => {
    const text = renderParseReport(report(), source.words, { title: 'Parse report: lessons 1-4' });
    expect(text).toMatch(/^# Parse report: lessons 1-4/);
    expect(text).toMatch(/\d+ of \d+ sentences parse/);
    expect(text).toContain('## What does not parse');
    expect(text).toContain('| 2. words-and-sentences |');
  });
});

describe('the early-patterns rule', () => {
  test('a sentence parses with the patterns taught up to its lesson, and not with fewer', () => {
    // bù before shì is taught in lesson 2; bù before a verb in lesson 5
    expect(kb.parseUpTo(2)('Zhè bù shì zhíwù.').ok).toBe(true);
    expect(kb.parseUpTo(2)('Wǒ bù ài nǐ.').ok).toBe(false);
    expect(kb.parseUpTo(5)('Wǒ bù ài nǐ.').ok).toBe(true);
    expect(kb.parse('Wǒ bù ài nǐ.').ok).toBe(true);
  });

  test('a pattern says which lesson teaches it; one with no lesson says nothing', () => {
    expect(kb.patternLesson('bu-negation')).toBe(5);
    expect(kb.patternLesson('shi-copula')).toBe(2);
    expect(kb.patternLesson('no-such-pattern')).toBeUndefined();
  });

  test('a lesson sentence that needs a later pattern is reported with that pattern and its lesson', () => {
    const lessons = source.lessons.map(({ id, number }) => ({ id, number }));
    const r = parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons });
    expect(r.late.length).toBeGreaterThan(0);
    for (const it of r.late) {
      expect(it.piece.ok).toBe(false);
      expect(it.late.every((p) => !p.lesson || p.lesson > source.lessons.find((l) => l.id === it.lesson).number)).toBe(true);
    }
    expect(r.parsed + r.late.length + r.failures.length).toBe(r.total);
    expect(renderParseReport(r, source.words)).toContain('## Uses a pattern before it is taught');
  });
});
