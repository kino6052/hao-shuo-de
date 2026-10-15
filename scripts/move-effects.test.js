// "What if this moved?" (KB_PLAN.md K20): the move itself on a made-up book, then the two order
// rules checked on the real one. Nothing is written.

import { beforeAll, describe, expect, test } from 'bun:test';
import { applyMove, earlyWords, moveEffects, parseSpec, renderMove } from './move-effects.js';
import { loadSource } from './kb-source.js';
import { loadLessons } from './lessons.js';
import { createKb } from '../src/lib/kb/kb.js';
import { parseMemo } from './parse-memo.js';

const dictionary = { shi4: { term: 'shì' }, ren2: { term: 'rén' }, hao3: { term: 'hǎo' } };
const vocab = (id, module) => ({ key: `v-${id}`, type: 'vocab', module, term: `{{word:${id}}}`, en: ['gloss'] });
const prose = (id, module = 'm') => ({ key: `p-${id}`, type: 'prose', module, en: [`Say {{word:${id}}}.`] });
const book = () => [
  { id: 'one', number: 1, entries: [prose('hao3', 'x')] },
  { id: 'two', number: 2, entries: [vocab('shi4', 'a'), vocab('ren2', 'b')] },
  { id: 'three', number: 3, entries: [vocab('hao3', 'c'), prose('shi4', 'c')] },
];
const patterns = [
  { id: 'p1', taught: 'two/a' },
  { id: 'p2', taught: 'three' },
  { id: 'p3' },
];

describe('applyMove', () => {
  test('a lesson goes to a place and the others are numbered again', () => {
    const r = applyMove(book(), patterns, { lesson: 'three', to: 2 });
    expect(r.lessons.map((l) => `${l.id}:${l.number}`)).toEqual(['one:1', 'three:2', 'two:3']);
    expect(r.what).toContain('three');
  });

  test('a module goes to the end of another lesson, and the pattern it teaches follows', () => {
    const r = applyMove(book(), patterns, { module: 'two/a', to: 'three' });
    expect(r.lessons.find((l) => l.id === 'two').entries.map((e) => e.key)).toEqual(['v-ren2']);
    expect(r.lessons.find((l) => l.id === 'three').entries.map((e) => e.key)).toEqual(['v-hao3', 'p-shi4', 'v-shi4']);
    expect(r.patterns.find((p) => p.id === 'p1').taught).toBe('three/a');
    expect(r.patterns.find((p) => p.id === 'p2').taught).toBe('three');
  });

  test('a pattern is taught somewhere else', () => {
    const r = applyMove(book(), patterns, { pattern: 'p3', to: 'two/b' });
    expect(r.patterns.find((p) => p.id === 'p3').taught).toBe('two/b');
  });

  test('the book it is given is not changed', () => {
    const b = book();
    applyMove(b, patterns, { lesson: 'three', to: 1 });
    applyMove(b, patterns, { module: 'two/a', to: 'three' });
    expect(b.map((l) => l.id)).toEqual(['one', 'two', 'three']);
    expect(b[1].entries).toHaveLength(2);
  });

  test('a place, lesson, module or pattern that is not there is refused, with a reason', () => {
    expect(() => applyMove(book(), patterns, { lesson: 'nope', to: 1 })).toThrow('no lesson "nope"');
    expect(() => applyMove(book(), patterns, { lesson: 'one', to: 9 })).toThrow('from 1 to 3');
    expect(() => applyMove(book(), patterns, { module: 'two/zzz', to: 'three' })).toThrow('no module "zzz"');
    expect(() => applyMove(book(), patterns, { module: 'two/a', to: 'two' })).toThrow('already in two');
    expect(() => applyMove(book(), patterns, { pattern: 'pX', to: 'two' })).toThrow('no pattern "pX"');
    expect(() => applyMove(book(), patterns, { pattern: 'p1', to: 'nope' })).toThrow('no lesson "nope"');
  });
});

describe('the words used early', () => {
  test('moving a lesson ahead of the one that teaches its words makes them early', () => {
    expect(earlyWords(book(), dictionary)).toEqual([]);
    // "three" says shì in prose; if it goes to place 2, shì (now taught in place 3) is used early
    const r = applyMove(book(), patterns, { lesson: 'three', to: 2 });
    const early = earlyWords(r.lessons, dictionary);
    expect(early.map((x) => `${x.lesson}:${x.word}:${x.home}`)).toEqual(['three:shì:3']);
  });
});

describe('parseSpec', () => {
  const lessons = book();
  test('reads a lesson, a lesson/module and a pattern', () => {
    expect(parseSpec('two', '3', { lessons, patterns })).toEqual({ lesson: 'two', to: '3' });
    expect(parseSpec('two/a', 'three', { lessons, patterns })).toEqual({ module: 'two/a', to: 'three' });
    expect(parseSpec('pattern:p1', 'three', { lessons, patterns })).toEqual({ pattern: 'p1', to: 'three' });
    expect(parseSpec('p1', 'three', { lessons, patterns })).toEqual({ pattern: 'p1', to: 'three' });
  });
  test('something else is refused, and so is a missing place', () => {
    expect(() => parseSpec('zzz', '1', { lessons, patterns })).toThrow('not a lesson');
    expect(() => parseSpec('two', undefined, { lessons, patterns })).toThrow('usage');
  });
});

describe('on the real book', () => {
  let kb;
  let lessons;
  beforeAll(async () => {
    // the parse memory on disk (scripts/parse-memo.js): the reports only ask whether sentences parse
    kb = createKb(await loadSource(), { parseMemo: parseMemo() });
    lessons = await loadLessons();
  }, 120_000);

  test('a pattern taught later makes the sentences that use it early', async () => {
    const r = await moveEffects({ kb, lessons }, { pattern: 'bu-shi-not', to: 'pointing' });
    expect(r.patterns.added.length).toBeGreaterThan(0);
    expect(r.patterns.added.every((x) => x.needs.some((n) => n.id === 'bu-shi-not'))).toBe(true);
    expect(r.patterns.after).toBe(r.patterns.before + r.patterns.added.length - r.patterns.fixed.length);
    expect(r.patterns.parsedAfter).toBeLessThan(r.patterns.parsedBefore);
    expect(renderMove(r, kb.source.words)).toContain('needs bu-shi-not');
  }, 120_000);

  test('a lesson moved ahead of the words it uses makes those words early', async () => {
    const r = await moveEffects({ kb, lessons }, { lesson: 'questions', to: 3 });
    expect(r.words.added.length).toBeGreaterThan(0);
    expect(r.words.added.every((x) => x.home > 3)).toBe(true);
  }, 120_000);

  test('moving a lesson to the place it already has changes nothing', async () => {
    const place = kb.source.lessons.find((l) => l.id === 'questions').number;
    const r = await moveEffects({ kb, lessons }, { lesson: 'questions', to: place });
    expect(r.words.added).toEqual([]);
    expect(r.words.fixed).toEqual([]);
    expect(r.patterns.added).toEqual([]);
    expect(r.patterns.fixed).toEqual([]);
  }, 120_000);
});
