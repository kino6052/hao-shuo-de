import { describe, expect, test } from 'bun:test';
import { buildModel, askBuilt } from './build-tags.js';

// a tiny language: lessons 1 to 4, a bǎ pattern taught in lesson 3, doubling in lesson 4
const lessons = [
  { id: 'start', number: 1 },
  { id: 'things', number: 2 },
  { id: 'handling', number: 3 },
  { id: 'doubling', number: 4 },
];
const patterns = [
  { id: 'svo', tags: ['basic', 'cat:action'], taught: 'start/x' },
  { id: 'ba-handle', tags: ['make', 'cat:action'], taught: 'handling/x' },
  { id: 'doubled-verb', tags: ['doubling', 'cat:action'], taught: 'doubling/x' },
];
const words = {
  ba3: { term: 'bǎ', hanzi: '把' },
  kan4: { term: 'kàn', hanzi: '看' },
  ren2: { term: 'rén', hanzi: '人' },
  fang1: { term: 'fāng', hanzi: '方' },
  fa3: { term: 'fǎ', hanzi: '法' },
};
const wordLessons = { ren2: 1, kan4: 1, ba3: 3, fang1: 2, fa3: 2 };
const patternLessons = { svo: 1, 'ba-handle': 3, 'doubled-verb': 4 };

// the parse of a form: which patterns read it, and from which lesson on
const READS = {
  '{{word:ba3}} {{word:ren2}} {{word:kan4}}': { from: 3, patterns: ['svo', 'ba-handle'] },
  '{{word:kan4}}-{{word:kan4}} {{word:ren2}}': { from: 4, patterns: ['svo', 'doubled-verb'] },
  '{{word:ren2}} {{word:kan4}}': { from: 1, patterns: ['svo'] },
};
const result = (r) => (r ? { ok: true, trees: [{ pattern: r.patterns[0], children: r.patterns.slice(1).map((pattern) => ({ pattern })) }] } : { ok: false, trees: [] });
const parse = (form) => result(READS[form]);
const parseAt = (n) => (form) => result(READS[form] && READS[form].from <= n ? READS[form] : null);

const composites = [
  { zh: '管', py: 'guǎn', en: 'manage', rank: 1, fit: 'plain', hsd: '{{word:ba3}} {{word:ren2}} {{word:kan4}}' },
  { zh: '看看', py: 'kànkan', en: 'have a look', rank: 2, fit: 'plain', hsd: '{{word:kan4}}-{{word:kan4}} {{word:ren2}}' },
  { zh: '办法', py: 'bànfǎ', en: 'way', rank: 3, fit: 'word', hsd: '{{word:fang1}}-{{word:fa3}}' },
  { zh: '怪', py: 'guài', en: 'odd', rank: 4, fit: 'plain', hsd: '{{word:ren2}} {{word:ren2}} {{word:ren2}}' },
  { zh: '名', py: 'míng', en: 'name', rank: 5, fit: 'name' },
];

const model = buildModel({ composites, words, patterns, lessons, parse, parseAt, wordLesson: (id) => wordLessons[id], patternLesson: (id) => patternLessons[id] });

describe('build tags', () => {
  test('a phrase gets its patterns, their themes and the lesson that makes it readable', () => {
    const r = model.row('管');
    expect(r.tags.has('form:phrase')).toBe(true);
    expect(r.tags.has('pattern:ba-handle')).toBe(true);
    expect(r.tags.has('theme:make')).toBe(true);
    expect(r.tags.has('word:ba3')).toBe(true);
    expect(r.tags.has('reach:handling')).toBe(true);
    expect(r.reach).toBe(3);
    expect(r.forms[0].reachBy).toBe('ba3');
  });

  test('the cat: tags of a pattern are not themes', () => {
    expect([...model.row('管').tags].some((t) => t.startsWith('theme:cat'))).toBe(false);
  });

  test('doubling shows as the doubled-verb pattern and its theme', () => {
    expect(model.members(['pattern:doubled-verb']).map((r) => r.zh)).toEqual(['看看']);
    expect(model.members(['theme:doubling']).map((r) => r.zh)).toEqual(['看看']);
  });

  test('a hyphen chain is not parsed; its reach comes from its words', () => {
    const r = model.row('办法');
    expect(r.tags.has('form:chain')).toBe(true);
    expect([...r.tags].some((t) => t.startsWith('pattern:'))).toBe(false);
    expect(r.reach).toBe(2);
    expect(r.tags.has('reach:things')).toBe(true);
  });

  test('a description the patterns cannot read is unread; no description is none', () => {
    expect(model.row('怪').tags.has('form:unread')).toBe(true);
    expect(model.row('名').tags.has('form:none')).toBe(true);
    expect(model.row('名').reach).toBe(null);
  });

  test('members join the tags and can be limited to what is readable by a lesson', () => {
    expect(model.members(['word:ren2', 'form:phrase']).map((r) => r.zh)).toEqual(['管', '看看']);
    expect(model.members([], { upTo: 3 }).map((r) => r.zh)).toEqual(['管', '办法']);
    expect(model.members([], { upTo: 1 })).toEqual([]);
  });

  test('a composite is found by hanzi, pinyin with or without tones, or English', () => {
    expect(model.row('kanKan').zh).toBe('看看');
    expect(model.row('guǎn').zh).toBe('管');
    expect(model.row('manage').zh).toBe('管');
    expect(model.row('nothing')).toBe(null);
  });
});

describe('askBuilt', () => {
  test('one composite: forms, patterns and tags', () => {
    const { text, data } = askBuilt(model, { name: '管' });
    expect(text).toContain('patterns: svo, ba-handle');
    expect(text).toContain('lesson handling (number 3), set by ba3');
    expect(data.tags).toContain('pattern:ba-handle');
  });

  test('filters join; a lesson id or number names the reach', () => {
    expect(askBuilt(model, { pattern: 'ba-handle' }).data.map((r) => r.zh)).toEqual(['管']);
    expect(askBuilt(model, { word: 'kàn', form: 'phrase' }).data.map((r) => r.zh)).toEqual(['管', '看看']);
    expect(askBuilt(model, { reach: 'things' }).data.map((r) => r.zh)).toEqual(['办法']);
    expect(askBuilt(model, { reach: 3 }).data.map((r) => r.zh)).toEqual(['管']);
    expect(askBuilt(model, { upTo: 4, theme: 'make' }).data.map((r) => r.zh)).toEqual(['管']);
  });

  test('with nothing it counts the tags; a tag nobody has is an error', () => {
    expect(askBuilt(model, {}).text).toContain('pattern:');
    expect(() => askBuilt(model, { pattern: 'nope' })).toThrow(/no composite has the tag "pattern:nope"/);
    expect(() => askBuilt(model, { word: 'zzz' })).toThrow(/no dictionary word/);
    expect(() => askBuilt(model, { name: 'zzz' })).toThrow(/no composite/);
  });
});
