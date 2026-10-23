import { describe, expect, test } from 'bun:test';
import { lesson, lessonModule } from '../lesson.ts';
import {
  makeQuestion, isCorrect, KINDS, lessonSource, buildPools, wordHomes, drawLessonTest, drawExam, allocate, scoreTry, rngFrom,
} from './index.js';
import { toneVariants } from './kinds/tone.js';
import { addTry, emptyRecord, loadRecord, saveTry, toReview } from './progress.js';

// ---------- a small fixture course: two lessons, modules of very different sizes ----------

const TERMS = {
  wo3: 'wǒ', ni3: 'nǐ', ta1: 'tā', ren2: 'rén', hao3: 'hǎo', da4: 'dà', xiao3: 'xiǎo',
  chi1: 'chī', he1: 'hē', fan4: 'fàn', shui3: 'shuǐ', kan4: 'kàn', ting1: 'tīng', bu4: 'bù',
};
const POS = { wo3: 'pronoun', ni3: 'pronoun', ta1: 'pronoun', ren2: 'noun', hao3: 'adjective', da4: 'adjective', xiao3: 'adjective', chi1: 'verb', he1: 'verb', fan4: 'noun', shui3: 'noun', kan4: 'verb', ting1: 'verb', bu4: 'adverb' };
const dict = { term: (id) => TERMS[id], pos: (id) => POS[id] ?? null };

const w = (word, en) => ({ word, en });
const ex = (pinyin, hanzi, en) => ({ pinyin, hanzi, en });
const exr = (en, answer, hanzi) => ({ en, answer, hanzi });

const people = lessonModule({
  id: 'people',
  words: [w('wo3', 'I, me'), w('ni3', 'you'), w('ta1', 'he, she'), w('ren2', 'person')],
  prose: { en: 'People.' },
  info: { pattern: 'people', en: 'wǒ, nǐ, tā' },
  examples: [
    ex('{{Word:wo3}} {{word:shi4}} {{word:ren2}}.', '我是人。', 'I am a person.'),
    ex('{{Word:ni3}} {{word:shi4}} {{word:ren2}}.', '你是人。', 'You are a person.'),
    ex('{{Word:ta1}} {{word:shi4}} {{word:ren2}}.', '他是人。', 'He is a person.'),
    ex('{{Word:wo3}} {{word:shi4}} {{word:ni3}}.', '我是你。', 'I am you.'),
  ],
  exercises: [exr('You are a person.', '{{Word:ni3}} {{word:shi4}} {{word:ren2}}.', '你是人。'), exr('I am a person.', '{{Word:wo3}} {{word:shi4}} {{word:ren2}}.', '我是人。')],
});
const good = lessonModule({
  id: 'good',
  words: [w('hao3', 'good'), w('da4', 'big'), w('xiao3', 'small')],
  prose: { en: 'Good.' },
  info: { pattern: 'adj', en: 'tā hǎo' },
  examples: [
    ex('{{Word:ta1}} {{word:hao3}}.', '他好。', 'He is good.'),
    ex('{{Word:ren2}} {{word:da4}}.', '人大。', 'The person is big.'),
    ex('{{Word:wo3}} {{word:xiao3}}.', '我小。', 'I am small.'),
  ],
  exercises: [exr('You are good.', '{{Word:ni3}} {{word:hao3}}.', '你好。'), exr('She is small.', '{{Word:ta1}} {{word:xiao3}}.', '她小。')],
});
const eat = lessonModule({
  id: 'eat',
  words: [w('chi1', 'eat'), w('he1', 'drink'), w('fan4', 'meal, rice'), w('shui3', 'water')],
  prose: { en: 'Eat.' },
  info: { pattern: 'svo', en: 'wǒ chī fàn' },
  examples: [
    ex('{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', '我吃饭。', 'I eat.'),
    ex('{{Word:ni3}} {{word:he1}} {{word:shui3}}.', '你喝水。', 'You drink water.'),
    ex('{{Word:ta1}} {{word:chi1}} {{word:fan4}}.', '他吃饭。', 'He eats.'),
    ex('{{Word:wo3}} {{word:he1}} {{word:shui3}}.', '我喝水。', 'I drink water.'),
    ex('{{Word:ren2}} {{word:he1}} {{word:shui3}}.', '人喝水。', 'People drink water.'),
    ex('{{Word:ni3}} {{word:chi1}} {{word:fan4}}.', '你吃饭。', 'You eat.'),
  ],
  exercises: [
    exr('She drinks water.', '{{Word:ta1}} {{word:he1}} {{word:shui3}}.', '她喝水。'),
    exr('I eat.', '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.', '我吃饭。'),
    exr('People eat.', '{{Word:ren2}} {{word:chi1}} {{word:fan4}}.', '人吃饭。'),
  ],
});
const look = lessonModule({
  id: 'look',
  words: [w('kan4', 'look'), w('ting1', 'listen')],
  prose: { en: 'Look.' },
  info: { pattern: 'look', en: 'wǒ kàn nǐ' },
  examples: [ex('{{Word:wo3}} {{word:kan4}} {{word:ni3}}.', '我看你。', 'I look at you.'), ex('{{Word:ni3}} {{word:ting1}} {{word:wo3}}.', '你听我。', 'You listen to me.')],
  exercises: [exr('He looks at me.', '{{Word:ta1}} {{word:kan4}} {{word:wo3}}.', '他看我。')],
});
const not = lessonModule({
  id: 'not',
  words: [w('bu4', 'not')],
  prose: { en: 'Not.' },
  info: { pattern: 'bu', en: 'wǒ bù chī' },
  examples: [
    ex('{{Word:wo3}} {{word:bu4}} {{word:chi1}} {{word:fan4}}.', '我不吃饭。', "I don't eat."),
    ex('{{Word:ni3}} {{word:bu4}} {{word:he1}} {{word:shui3}}.', '你不喝水。', "You don't drink water."),
    ex('{{Word:ta1}} {{word:bu4}} {{word:kan4}} {{word:wo3}}.', '他不看我。', "He doesn't look at me."),
  ],
  exercises: [exr("I don't listen.", '{{Word:wo3}} {{word:bu4}} {{word:ting1}}.', '我不听。'), exr("She doesn't drink.", '{{Word:ta1}} {{word:bu4}} {{word:he1}}.', '她不喝。')],
});

const lessonA = lesson('fix-a', { title: { en: 'A' }, summary: { en: 'A.' }, modules: [people, good] });
const lessonB = lesson('fix-b', { title: { en: 'B' }, summary: { en: 'B.' }, modules: [eat, look, not] });
TERMS.shi4 = 'shì';
POS.shi4 = 'verb';
const sources = [lessonSource({ id: 'fix-a', number: 1, entries: lessonA }, dict), lessonSource({ id: 'fix-b', number: 2, entries: lessonB }, dict)];
const pools = buildPools(sources, dict);
const [poolA, poolB] = pools;

const SEEDS = Array.from({ length: 1500 }, (_, i) => i + 1);

// ---------- the question model ----------

describe('question model', () => {
  const base = { id: 'x/1', kind: 'meaning', lesson: 'x', module: 'm', source: 'x/m.word1' };
  test('a choice question needs distinct choices and a right one among them', () => {
    expect(() => makeQuestion({ ...base, choices: [{ text: { en: 'a' } }, { text: { en: 'A.' } }], answer: 0 })).toThrow(/same thing/);
    expect(() => makeQuestion({ ...base, choices: [{ text: { en: 'a' } }, { text: { en: 'b' } }], answer: 2 })).toThrow(/not a choice/);
    expect(() => makeQuestion({ ...base, kind: 'riddle', choices: [], answer: 0 })).toThrow(/unknown kind/);
    const q = makeQuestion({ ...base, choices: [{ text: { en: 'a' } }, { text: { en: 'b' } }], answer: 1, words: ['wo3'], uses: ['ni3'] });
    expect(isCorrect(q, 1)).toBe(true);
    expect(isCorrect(q, 0)).toBe(false);
    expect(q.uses.sort()).toEqual(['ni3', 'wo3']);
  });
  test('an order question is right only in the right order (case and punctuation aside)', () => {
    const q = makeQuestion({ ...base, kind: 'order', tokens: ['wǒ', 'hē', 'shuǐ'] });
    expect(isCorrect(q, ['Wǒ', 'hē', 'shuǐ.'])).toBe(true);
    expect(isCorrect(q, ['hē', 'wǒ', 'shuǐ'])).toBe(false);
  });
  test('tone variants keep the spelling and the capital, and cover the light tone', () => {
    expect(toneVariants('hǎo')).toEqual(['hao', 'hāo', 'háo', 'hǎo', 'hào']);
    expect(toneVariants('Hǎo-shuō-de')[2]).toBe('Háo-shuō-de');
    expect(toneVariants('de')).toEqual(['de', 'dē', 'dé', 'dě', 'dè']);
    expect(toneVariants('shuǐ')[4]).toBe('shuì');
  });
});

// ---------- the pools ----------

describe('pools', () => {
  const all = pools.flatMap((p) => p.questions);
  test('every question is well formed, with a unique id and exactly one right choice', () => {
    expect(new Set(all.map((q) => q.id)).size).toBe(all.length);
    for (const q of all) {
      expect(KINDS).toContain(q.kind);
      if (q.kind === 'order') continue;
      expect(new Set(q.choices.map((c) => c.key)).size).toBe(q.choices.length);
      expect(q.answer).toBeGreaterThanOrEqual(0);
    }
  });
  test('a lesson pool uses at least 4 kinds, and asks every new word at least 3 times and every module twice', () => {
    for (const [p, s] of [[poolA, sources[0]], [poolB, sources[1]]]) {
      expect(new Set(p.questions.map((q) => q.kind)).size).toBeGreaterThanOrEqual(4);
      for (const m of s.modules) {
        expect(p.questions.filter((q) => q.module === m.id).length).toBeGreaterThanOrEqual(2);
        for (const c of m.cards) expect(p.questions.filter((q) => q.words.includes(c.word)).length).toBeGreaterThanOrEqual(3);
      }
    }
  });
  test('no question or wrong choice uses a word before its lesson', () => {
    const home = wordHomes(sources);
    for (const p of pools) for (const q of p.questions) for (const id of q.uses) if (home.has(id)) expect(home.get(id)).toBeLessThanOrEqual(p.number);
  });
  test('a wrong meaning never shares a meaning with the right one, and a wrong sentence never says the same', () => {
    for (const q of all.filter((x) => x.kind === 'translation')) {
      const right = q.choices[q.answer].text.any;
      expect(q.choices.filter((c) => c.text.any === right).length).toBe(1);
    }
  });
  test('the same lessons always give the same pools', () => {
    expect(JSON.stringify(buildPools(sources, dict))).toBe(JSON.stringify(pools));
  });
});

// ---------- the draw: seeded, no repeats, representative ----------

const count = (items, key) => items.reduce((m, it) => m.set(key(it), (m.get(key(it)) ?? 0) + 1), new Map());

describe('allocate', () => {
  test('gives every stratum its exact share on average, and the floor or the ceiling of it each time', () => {
    const weights = [13, 5, 6];
    const sums = [0, 0, 0];
    for (const s of SEEDS) {
      const c = allocate(weights, 7, rngFrom(s));
      expect(c.reduce((a, b) => a + b, 0)).toBe(7);
      c.forEach((x, i) => {
        const exact = (7 * weights[i]) / 24;
        expect(x).toBeGreaterThanOrEqual(Math.floor(exact));
        expect(x).toBeLessThanOrEqual(Math.ceil(exact));
        sums[i] += x;
      });
    }
    sums.forEach((s, i) => expect(Math.abs(s / SEEDS.length - (7 * weights[i]) / 24)).toBeLessThan(0.05));
  });
  test('respects caps and passes their share on', () => {
    expect(allocate([10, 1], 6, rngFrom(1), [2, 10])).toEqual([2, 4]);
    expect(allocate([1, 1], 10, rngFrom(1), [3, 3])).toEqual([3, 3]);
  });
});

describe('lesson test draw', () => {
  test('10 questions, never the same one twice, nor two on one item', () => {
    for (const seed of SEEDS.slice(0, 300)) {
      const items = drawLessonTest({ pools, lesson: 'fix-b', seed });
      expect(items.length).toBe(10);
      expect(new Set(items.map((i) => i.question.id)).size).toBe(10);
      expect(new Set(items.map((i) => i.question.source)).size).toBe(10);
    }
  });
  test('the same seed gives the same try; other seeds give other tries; an rng can be injected', () => {
    const ids = (seed) => drawLessonTest({ pools, lesson: 'fix-b', seed }).map((i) => i.question.id).join();
    expect(ids(42)).toBe(ids(42));
    expect(ids('fix-b/7')).toBe(ids('fix-b/7'));
    expect(new Set(SEEDS.slice(0, 50).map(ids)).size).toBeGreaterThan(45);
    let calls = 0;
    const rng = () => (calls++ * 0.618) % 1;
    expect(drawLessonTest({ pools, lesson: 'fix-b', seed: rng }).length).toBe(10);
    expect(calls).toBeGreaterThan(0);
  });
  test('a quarter (rounded) look back at earlier lessons; the first lesson has none to look back at', () => {
    for (const seed of SEEDS.slice(0, 200)) {
      expect(drawLessonTest({ pools, lesson: 'fix-b', seed }).filter((i) => i.question.lesson === 'fix-a').length).toBe(3);
      expect(drawLessonTest({ pools, lesson: 'fix-a', seed }).every((i) => i.question.lesson === 'fix-a')).toBe(true);
    }
  });
  test("the lesson's own questions cover its modules in proportion to how much each teaches", () => {
    const totals = new Map();
    for (const seed of SEEDS) {
      const items = drawLessonTest({ pools, lesson: 'fix-b', seed }).filter((i) => i.question.lesson === 'fix-b');
      const c = count(items, (i) => i.question.module);
      for (const m of poolB.modules) {
        const exact = (7 * m.weight) / poolB.weight;
        const got = c.get(m.id) ?? 0;
        expect(got).toBeGreaterThanOrEqual(Math.floor(exact));
        expect(got).toBeLessThanOrEqual(Math.ceil(exact));
        totals.set(m.id, (totals.get(m.id) ?? 0) + got);
      }
    }
    for (const m of poolB.modules) expect(Math.abs(totals.get(m.id) / SEEDS.length - (7 * m.weight) / poolB.weight)).toBeLessThan(0.05);
  });
  test('a try spreads over the kinds of question, and every question in the pool comes up', () => {
    const seen = new Set();
    for (const seed of SEEDS) {
      const items = drawLessonTest({ pools, lesson: 'fix-b', seed });
      expect(new Set(items.map((i) => i.question.kind)).size).toBeGreaterThanOrEqual(5);
      items.forEach((i) => seen.add(i.question.id));
    }
    expect(poolB.questions.filter((q) => !seen.has(q.id))).toEqual([]);
  });
  test('missed words come up more often', () => {
    const asks = (missed) => SEEDS.reduce((n, seed) => n + drawLessonTest({ pools, lesson: 'fix-b', seed, missed }).filter((i) => i.question.words.includes('ting1')).length, 0);
    expect(asks({ ting1: 2 })).toBeGreaterThan(asks({}) * 1.3);
  });
  test('the choices are shuffled per try, and the right answer moves with them', () => {
    const places = new Set();
    for (const seed of SEEDS.slice(0, 100)) {
      for (const it of drawLessonTest({ pools, lesson: 'fix-b', seed })) {
        if (it.question.kind === 'order') {
          expect([...it.tokens].sort()).toEqual([...it.question.tokens].sort());
          continue;
        }
        expect(it.choices[it.answer].key).toBe(it.question.choices[it.question.answer].key);
        places.add(it.answer);
      }
    }
    expect(places.size).toBe(4);
  });
});

describe('final exam draw', () => {
  test('balanced by lesson in proportion to how much each teaches, no repeats', () => {
    const size = 30;
    const total = poolA.weight + poolB.weight;
    let a = 0;
    for (const seed of SEEDS) {
      const items = drawExam({ pools, seed, size });
      expect(items.length).toBe(size);
      expect(new Set(items.map((i) => i.question.id)).size).toBe(size);
      const n = items.filter((i) => i.question.lesson === 'fix-a').length;
      const exact = (size * poolA.weight) / total;
      expect(n).toBeGreaterThanOrEqual(Math.floor(exact));
      expect(n).toBeLessThanOrEqual(Math.ceil(exact));
      a += n;
    }
    expect(Math.abs(a / SEEDS.length - (size * poolA.weight) / total)).toBeLessThan(0.05);
  });
  test('the same seed gives the same exam', () => {
    const ids = (seed) => drawExam({ pools, seed, size: 20 }).map((i) => i.question.id).join();
    expect(ids(9)).toBe(ids(9));
    expect(ids(9)).not.toBe(ids(10));
  });
});

// ---------- results and the record ----------

describe('results and progress', () => {
  test('a try is scored per lesson, with the pass mark, the worst lessons and the missed words', () => {
    const items = drawExam({ pools, seed: 3, size: 20 });
    const responses = items.map((it, i) => (i < 16 ? (it.question.kind === 'order' ? it.question.tokens : it.answer) : -1));
    const r = scoreTry(items, responses, { passMark: 0.8, sectionOf: () => 's1' });
    expect(r.right).toBe(16);
    expect(r.passed).toBe(true);
    expect(r.byLesson.reduce((n, l) => n + l.total, 0)).toBe(20);
    expect(r.bySection).toEqual([{ section: 's1', right: 16, total: 20 }]);
    expect(r.missed).toEqual([...new Set(items.slice(16).flatMap((i) => i.question.words))]);
    expect(scoreTry(items, responses.map(() => -1), { passMark: 0.8 }).passed).toBe(false);
  });
  test('the record keeps the best score and counts missed words down as they are got right', () => {
    let rec = addTry(emptyRecord(), 'fix-a', { right: 6, total: 10, missed: ['wo3', 'ni3'], known: [] });
    rec = addTry(rec, 'fix-a', { right: 4, total: 10, missed: ['wo3'], known: ['ni3'] });
    expect(rec.tests['fix-a']).toEqual({ best: 6, total: 10, tries: 2 });
    expect(rec.missed).toEqual({ wo3: 2 });
    expect(toReview(rec)).toEqual(['wo3']);
    const store = new Map();
    const storage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
    saveTry(storage, 'final-exam', { right: 50, total: 60, passed: true, missed: [], known: [] });
    expect(loadRecord(storage).tests['final-exam']).toEqual({ best: 50, total: 60, tries: 1, passed: true });
    expect(loadRecord({ getItem: () => '{bad json' })).toEqual(emptyRecord());
  });
});
