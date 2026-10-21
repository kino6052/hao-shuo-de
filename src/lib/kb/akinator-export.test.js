import { describe, expect, test } from 'bun:test';
import { tagNet } from '../tag-net.js';
import { buildPool } from './akinator-pool.js';
import { createAkinator } from './akinator.js';
import { exportPool, importPool } from './akinator-export.js';
import { createBrowserAkinator } from './akinator-browser.js';

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
const readText = (text) => (text.includes('Rén ná') ? { patterns: ['svo'], words: ['ren2', 'na2', 'dao1'] } : { patterns: [], words: [] });

const pool = buildPool({ sentences, patterns, words, composites, topicNet, kindNet, built, lessons, wordLesson: (id) => wordLessons[id], readText });
const data = exportPool(pool);
const back = importPool(JSON.parse(JSON.stringify(data)));
const ASKED = /^(kind|topic|theme|cat|pattern|word|type):/;

describe('the exported pool', () => {
  test('is plain data: the same items, texts and lessons', () => {
    expect(back.items.map((i) => i.id)).toEqual(pool.items.map((i) => i.id));
    for (const it of pool.items) {
      const b = back.item(it.id);
      expect(b.text).toEqual(it.text);
      expect(b.type).toBe(it.type);
      expect(b.source).toBe(it.source);
      expect(b.lesson).toBe(it.lesson);
      expect(b.number).toBe(it.number);
      expect(b.about).toBe(it.about);
    }
  });

  test('every item keeps the features a question can ask about, and only those', () => {
    for (const it of pool.items) {
      const want = [...it.features].filter((f) => ASKED.test(f)).sort();
      expect([...back.item(it.id).features].sort()).toEqual(want);
    }
  });

  test('a sentence lists what it uses, not its features', () => {
    const i = pool.items.findIndex((x) => x.id === 'sentence:lesson_example:start/k1');
    expect(data.own[i]).toBe(null);
    expect(data.uses[i].length).toBeGreaterThan(0);
    const w = pool.items.findIndex((x) => x.id === 'word:dao1');
    expect(data.own[w]).not.toBe(null);
  });

  test('the engine gives the same steps on the imported pool', () => {
    const a = createAkinator(pool);
    const b = createAkinator(back);
    const asked = [];
    for (const answers of [[{ feature: 'kind:tool', answer: 'yes' }], [{ feature: 'topic:kitchen', answer: 'probably' }, { feature: 'kind:doing', answer: 'no' }]]) {
      const x = a.step(answers);
      const y = b.step(answers);
      asked.push(x.stage);
      expect(y.stage).toBe(x.stage);
      expect(y.question?.feature).toBe(x.question?.feature);
      expect(y.leaders.map((l) => l.id)).toEqual(x.leaders.map((l) => l.id));
    }
    expect(asked.length).toBe(2);
  });
});

describe('the Akinator in the browser', () => {
  const engine = createAkinator(pool, { describe: (f) => ({ text: `Is it ${f}?`, hint: f === 'kind:tool' ? 'a thing you use' : '' }), first: [{ feature: 'kind:thing', label: 'A thing' }] });
  const ak = createBrowserAkinator(JSON.parse(JSON.stringify(exportPool(pool, { ak: engine, lessons }))));

  test('opens with the first choices', () => {
    const d = ak.ask({});
    expect(d.stage).toBe('first');
    expect(d.question.choices).toEqual([{ feature: 'kind:thing', label: 'A thing' }]);
  });

  test('asks the questions it was exported with, hints included', () => {
    const d = ak.ask({ answers: ['kind:thing=yes'] });
    expect(d.stage).toBe('question');
    expect(d.question.text).toMatch(/^Is it [a-z]+:[a-z0-9-]+\?$/);
  });

  test('a hint finds an entry by its English gloss and the page can label the lesson', () => {
    const d = ak.ask({ hint: 'kitchen knife', finish: true });
    expect(d.hintMatched).toContain('菜刀');
    expect(d.result.composites[0].text.zh).toBe('菜刀');
    const w = ak.ask({ hint: 'a person', finish: true }).result.words[0];
    expect(w.text.zh).toBe('人');
    expect(w.label).toBe('lesson start');
  });

  test('a start word opens the question like the command line', () => {
    expect(ak.ask({ start: 'kitchen' }).stage).toBe('question');
  });
});
