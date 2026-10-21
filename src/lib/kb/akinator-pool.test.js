import { describe, expect, test } from 'bun:test';
import { tagNet } from '../tag-net.js';
import { buildPool } from './akinator-pool.js';

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
  { id: 2, kind: 'story', lesson: 'appendix-stories', module: '', key: 's.1', pinyin: '{{Word:ren2}} {{word:dao1}}.', hanzi: '人刀。', en: 'Person knife.', words: ['ren2', 'dao1'] },
  { id: 3, kind: 'composite_example', composite: '刀', pinyin: '{{Word:dao1}}.', hanzi: '刀。', en: 'A knife.', words: ['dao1'] },
];
const composites = [{ zh: '菜刀', py: 'càidāo', en: 'kitchen knife', topics: ['kitchen'], isA: ['tool'] }];
const built = { row: (zh) => (zh === '菜刀' ? { tags: new Set(['form:chain', 'word:dao1']), reach: 2 } : null) };
const readText = (text) => (text.includes('Rén ná') ? { patterns: ['svo'], words: ['ren2', 'na2', 'dao1'] } : text.includes('na2') ? { patterns: ['svo'], words: [] } : { patterns: [], words: [] });

const pool = buildPool({ sentences, patterns, words, composites, topicNet, kindNet, built, lessons, wordLesson: (id) => wordLessons[id], readText });

describe('the Akinator pool', () => {
  test('one list of words, composites, patterns and sentences, with stable ids', () => {
    const types = {};
    for (const it of pool.items) types[it.type] = (types[it.type] ?? 0) + 1;
    expect(types).toEqual({ word: 3, composite: 1, pattern: 2, sentence: 4 });
    expect(new Set(pool.items.map((i) => i.id)).size).toBe(pool.items.length);
    expect(pool.item('word:dao1').text).toEqual({ py: 'dāo', zh: '刀', en: 'a thing for cutting' });
  });

  test('a word or composite carries its tags and every tag above them', () => {
    const f = pool.item('word:dao1').features;
    for (const t of ['word:dao1', 'topic:kitchen', 'topic:home', 'kind:tool', 'kind:thing']) expect(f.has(t)).toBe(true);
    expect(f.has('topic:people')).toBe(false);
    const c = pool.item('composite:菜刀');
    expect(c.features.has('topic:home')).toBe(true);
    expect(c.features.has('form:chain')).toBe(true);
    expect(c.number).toBe(2);
    expect(c.words).toEqual(['dao1']);
  });

  test('a pattern carries its themes, categories and where it is taught', () => {
    const f = pool.item('pattern:ba-handle').features;
    for (const t of ['pattern:ba-handle', 'theme:make', 'cat:action', 'lesson:handling', 'module:handling/y']) expect(f.has(t)).toBe(true);
    expect(pool.item('pattern:svo').features.has('grammar:svo')).toBe(true);
    expect(pool.item('pattern:ba-handle').number).toBe(3);
  });

  test('a sentence gets the features of its words and the patterns it uses', () => {
    const s = pool.item('sentence:lesson_example:start/k1');
    for (const t of ['word:dao1', 'topic:kitchen', 'kind:doing', 'pattern:svo', 'theme:basic', 'lesson:start', 'module:start/a']) expect(s.features.has(t)).toBe(true);
    expect(s.number).toBe(1);
    expect(s.text.py).toBe('Rén ná dāo.');
  });

  test('outside the lessons a sentence needs the latest lesson of what it uses', () => {
    const story = pool.item('sentence:story:appendix-stories/s.1');
    expect(story.lesson).toBe(null);
    expect(story.number).toBe(2);
    expect(pool.item('sentence:composite_example:3').number).toBe(2);
    expect(pool.item('sentence:composite_example:3').about).toBe('刀'); // the composite it shows, for the hint
    expect(story.about).toBe(undefined);
  });

  test('a pattern example is read for its words and patterns', () => {
    const e = pool.item('sentence:pattern_example:svo/0');
    expect(e.text.en).toBe('A person holds a knife.');
    expect(e.features.has('pattern:svo')).toBe(true);
    expect(e.lesson).toBe('start');
    expect(e.features.has('word:dao1')).toBe(true);
  });

  test('a pattern takes the kind and topic features of its examples', () => {
    const f = pool.item('pattern:svo').features;
    for (const t of ['kind:doing', 'topic:kitchen', 'kind:tool']) expect(f.has(t)).toBe(true);
    expect(pool.item('pattern:ba-handle').features.has('kind:doing')).toBe(false);
  });

  test('members join the features; the counts list the most used first', () => {
    expect(pool.members(['kind:tool', 'form:chain']).map((i) => i.id)).toEqual(['composite:菜刀']);
    expect(pool.members(['topic:home', 'type:none']).length).toBe(0);
    expect(pool.members([]).length).toBe(pool.items.length);
    const counts = pool.featureCounts();
    expect(counts[0].count).toBeGreaterThanOrEqual(counts[counts.length - 1].count);
  });

  test('without a reader a sentence carries its words and no patterns', () => {
    const bare = buildPool({ sentences, patterns, words, composites: [], topicNet, kindNet, lessons, wordLesson: (id) => wordLessons[id] });
    const s = bare.item('sentence:lesson_example:start/k1');
    expect([...s.features].some((f) => f.startsWith('pattern:'))).toBe(false);
    expect(s.features.has('word:ren2')).toBe(true);
  });

  test('sentences quoted in one entry of a text each get their own id', () => {
    const quoted = (id, pinyin) => ({ id, kind: 'lesson_inline', lesson: 'things', module: 'b', key: 'faq1', pinyin, hanzi: '', en: '', words: [] });
    const three = [quoted(10, '{{Word:ren2}}.'), quoted(11, '{{Word:dao1}}.'), quoted(12, '{{Word:na2}}.')];
    const p = buildPool({ sentences: three, words, topicNet, kindNet, lessons, wordLesson: (id) => wordLessons[id] });
    const ids = p.items.filter((it) => it.id.startsWith('sentence:')).map((it) => it.id);
    expect(ids).toEqual(['sentence:lesson_inline:things/faq1', 'sentence:lesson_inline:things/faq1#2', 'sentence:lesson_inline:things/faq1#3']);
    expect(new Set(ids.map((id) => p.item(id))).size).toBe(3);
  });
});
