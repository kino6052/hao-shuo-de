import { describe, expect, test } from 'bun:test';
import { tagNet } from '../tag-net.js';
import { buildPool } from './akinator-pool.js';
import { askLesson, askPatterns, askSimilar, askUses } from './lesson-lookup.js';

const topicNet = tagNet([
  { id: 'home', parents: [] },
  { id: 'kitchen', parents: ['home'] },
  { id: 'people', parents: [] },
]);
const kindNet = tagNet([
  { id: 'thing', parents: [] },
  { id: 'tool', parents: ['thing'] },
  { id: 'doing', parents: [] },
]);
const lessons = [
  { id: 'start', number: 1 },
  { id: 'things', number: 2 },
  { id: 'handling', number: 3 },
];
const words = {
  dao1: { term: 'dāo', hanzi: '刀', definition: { eng: 'a thing for cutting' }, topics: ['kitchen'], isA: ['tool'] },
  ren2: { term: 'rén', hanzi: '人', definition: { eng: 'a person' }, topics: ['people'], isA: ['thing'] },
  na2: { term: 'ná', hanzi: '拿', definition: { eng: 'hold in the hand' }, topics: [], isA: ['doing'] },
};
const wordLessons = { ren2: 1, dao1: 2, na2: 3 };
const patterns = [
  { id: 'svo', tags: ['basic', 'cat:action'], taught: 'start/x', covers: ['grammar:svo'], template: 'S V O', meaning: 'who does what', examples: [['Rén ná dāo.', 'A person holds a knife.']] },
  { id: 'ba-handle', tags: ['make', 'cat:action'], taught: 'handling/y', covers: [], template: 'S bǎ O V', meaning: 'do something to a thing', examples: [] },
];
const sentences = [
  { id: 1, kind: 'lesson_example', lesson: 'start', module: 'a', key: 'k1', pinyin: '{{Word:ren2}} {{word:na2}} {{word:dao1}}.', hanzi: '人拿刀。', en: 'A person holds a knife.', words: ['ren2', 'na2', 'dao1'] },
  { id: 2, kind: 'lesson_example', lesson: 'things', module: 'a', key: 'k2', pinyin: '{{Word:ren2}} {{word:na2}}.', hanzi: '人拿。', en: 'A person holds.', words: ['ren2', 'na2'] },
  { id: 3, kind: 'story', lesson: 'appendix-stories', module: '', key: 's.1', pinyin: '{{Word:dao1}}.', hanzi: '刀。', en: 'A knife.', words: ['dao1'] },
];
const composites = [{ zh: '菜刀', py: 'càidāo', en: 'kitchen knife', topics: ['kitchen'], isA: ['tool'] }];
const built = { row: (zh) => (zh === '菜刀' ? { tags: new Set(['form:chain', 'word:dao1']), reach: 2 } : null) };
const readText = (text) => (text.includes('Rén ná dāo') || text.includes('Rén ná dao') ? { patterns: ['svo'], words: ['ren2', 'na2', 'dao1'] } : text.includes('na2') ? { patterns: ['svo'], words: ['ren2', 'na2'] } : { patterns: [], words: [] });

const pool = buildPool({ sentences, patterns, words, composites, topicNet, kindNet, built, lessons, wordLesson: (id) => wordLessons[id], readText });

describe('lesson lookups', () => {
  test('no lesson lists them all with counts; a lesson lists what it teaches', () => {
    const all = askLesson(pool, lessons);
    expect(all.data.map((r) => r.id)).toEqual(['start', 'things', 'handling']);
    expect(all.data[1].words).toBe(1);
    const l = askLesson(pool, lessons, { lesson: 'things' });
    expect(l.data.words.map((w) => w.id)).toEqual(['word:dao1']);
    expect(l.data.composites.map((c) => c.id)).toEqual(['composite:菜刀']);
    expect(l.text).toContain('Lesson 2: things');
  });

  test('a lesson is found by id or by number; a bad one says what is allowed', () => {
    expect(askLesson(pool, lessons, { lesson: '3' }).data.id).toBe('handling');
    expect(() => askLesson(pool, lessons, { lesson: 'nope' })).toThrow('no lesson');
    expect(() => askLesson(pool, lessons, { lesson: 'start', kind: 'pets' })).toThrow('kind');
  });

  test('patterns by tag, by lesson and by the lesson they are taught by', () => {
    expect(askPatterns(pool, lessons, { tag: 'make' }).data.map((p) => p.id)).toEqual(['ba-handle']);
    expect(askPatterns(pool, lessons, { tag: 'cat:action' }).data.length).toBe(2);
    expect(askPatterns(pool, lessons, { lesson: 'start' }).data.map((p) => p.id)).toEqual(['svo']);
    expect(askPatterns(pool, lessons, { upTo: 1 }).data.map((p) => p.id)).toEqual(['svo']);
    expect(() => askPatterns(pool, lessons, { tag: 'nothing-here' })).toThrow('no pattern tag');
  });

  test('a pattern id gives the pattern in full, with its examples and users', () => {
    const r = askPatterns(pool, lessons, { id: 'svo' });
    expect(r.data.template).toBe('S V O');
    expect(r.data.examples.length).toBe(1);
    expect(r.data.tags).toContain('theme:basic');
    expect(r.text).toContain('Used by');
    expect(() => askPatterns(pool, lessons, { id: 'zzz' })).toThrow('no pattern');
  });

  test('uses: where a core word appears, by lesson', () => {
    const r = askUses(pool, lessons, { word: 'dāo' });
    expect(r.text).toContain('刀');
    expect(r.text).toContain('start');
    expect(() => askUses(pool, lessons, { word: 'zzz' })).toThrow('no core word');
    expect(() => askUses(pool, lessons, {})).toThrow('word is required');
  });

  test('similar: sentences that share words and patterns, nearest first', () => {
    const r = askSimilar(pool, lessons, { sentence: 'Rén ná dāo' });
    expect(r.data.from.id).toBe('sentence:lesson_example:start/k1');
    expect(r.data.like[0].id).toBe('sentence:lesson_example:things/k2');
    expect(r.data.like.every((s) => s.score >= 0.25)).toBe(true);
    expect(() => askSimilar(pool, lessons, { sentence: 'zzz zzz' })).toThrow('no sentence');
  });
});
