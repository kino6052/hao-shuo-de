// T-eng's sample and scores (t-eng.js) on a tiny made-up grammar and made-up runs.

import { describe, expect, test } from 'bun:test';
import { createParser } from '../grammar/parser.js';
import { makeTrees } from '../grammar/tree.js';
import { BLIND_SCHEMA, JUDGE_SCHEMA } from './output.js';
import { SKETCH_SCHEMA, answerOf, readBack, readBackMany, readBackScore, sampleBook, scoreOne, sketchPrompt, summarizeEng } from './t-eng.js';

const w = (term, pos, eng) => ({ term, pos: { eng: pos }, definition: { eng } });
const words = { wo3: w('wǒ', 'pronoun', 'I, me'), chi1: w('chī', 'verb', 'to eat'), fan4: w('fàn', 'noun', 'meal') };
const rule = (lhs, hsd) => ({ lhs, hsd, eng: '' });
const parser = createParser({ patterns: [{ id: 'p', rules: [rule('Utt', 'S'), rule('S', 'NP VP'), rule('NP', '@pronoun'), rule('NP', '@noun'), rule('VP', '@verb NP')] }], words });
const trees = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words });
const refs = '{{Word:wo3}} {{word:chi1}} {{word:fan4}}.';
const tree = trees.fromParse(parser.parse(refs), 0);

describe('the sample', () => {
  const s = (id, lesson, en, pinyin = refs, kind = 'lesson_example') => ({ id, kind, lesson, key: `k${id}`, en, pinyin });
  const sentences = [
    s(1, 'a', 'I eat a meal.'),
    s(2, 'a', 'Hi!'),
    s(3, 'a', 'I eat a meal too.', 'bad'),
    s(4, 'b', 'I eat a meal.'),
    s(5, null, 'One two three.', refs, 'composite_example'),
    s(6, null, 'Four five six.', refs, 'composite_example'),
  ];
  test('one lesson example from the middle of each lesson that fits, and composite examples spread out', () => {
    const got = sampleBook(sentences, [{ id: 'a' }, { id: 'b' }], { refsOf: (x) => x.pinyin, parses: (r) => r !== 'bad', extra: 1 });
    // lesson a: the middle one (2) is too short, then 1 comes before 3, which does not parse
    expect(got.map((x) => x.id)).toEqual([1, 4, 6]);
    expect(got[0].poolId).toBe('sentence:lesson_example:a/k1');
    expect(got[2].poolId).toBe('sentence:composite_example:6');
  });
});

describe('the scores', () => {
  const item = { refs, english: 'I eat a meal.' };
  test('a tree built on the first try, the same as the book', () => {
    const run = { status: 'ok', results: [{ ok: true, tree, refs, readback: 'I eat meal', tries: 1, attempts: [{ problems: [], at: 0 }] }] };
    expect(scoreOne(item, run, { parser, trees })).toMatchObject({ status: 'built', firstTry: true, sameTree: true, wordsShared: 1, readbackShared: 1, withoutCheck: true, onlyByCheck: false });
  });

  test('a fallback that only the first-reading check caused', () => {
    const run = { status: 'fallback', results: [{ ok: false, tries: 3, attempts: [{ problems: ['x'] }, { problems: ['y'], later: true }, { problems: ['z'] }] }] };
    const s = scoreOne(item, run, { parser, trees });
    expect(s).toMatchObject({ status: 'fallback', built: false, withoutCheck: true, firstTryWithoutCheck: false, onlyByCheck: true, laterSeen: true });
    expect(summarizeEng([s])).toMatchObject({ items: 1, built: 0, fallback: 1, onlyByCheck: 1, builtWithoutCheck: 1 });
  });
});

describe('the read-back', () => {
  const prompts = { skill: '### 1. Sketch the ideas (you)\n\nWrite the ideas, needed or colour.\n\n### 2. Reuse the book\n\nmore', blind: 'BLIND', judge: 'JUDGE' };
  const run = {
    status: 'fallback',
    correction: { sentences: ['I eat a meal.', 'It is late.'] },
    results: [{ ok: true, tree, refs, readback: 'I eat meal', at: 0, tries: 1 }, { ok: false, tries: 3, attempts: [] }],
  };
  const sketch = [
    { id: 'i1', idea: 'I eat', needed: true, links: '', sentence: 1 },
    { id: 'i2', idea: 'a meal', needed: false, links: '', sentence: 1 },
    { id: 'i3', idea: 'it is late', needed: true, links: '', sentence: 2 },
  ];

  test('the sketch prompt is the skill\'s step 1 with the sentences numbered', () => {
    const p = sketchPrompt(prompts, run.correction.sentences);
    expect(p).toContain('Write the ideas, needed or colour.');
    expect(p).not.toContain('Reuse the book');
    expect(p).toContain('1. I eat a meal.\n2. It is late.');
  });

  test('only the built sentences and their ideas go to the reader; the rest is left', () => {
    const a = answerOf(run, sketch);
    expect(a.sketch.map((s) => s.id)).toEqual(['i1', 'i2']);
    expect(a.sketch[0].sentence).toBeUndefined();
    expect(a.sentences).toEqual([{ pinyin: refs, english: 'I eat a meal.', literally: 'I eat meal', reading: '1', source: 'the tree translator', ideas: ['i1', 'i2'] }]);
    expect(a.left).toEqual({ sentences: 1, needed: 1 });
  });

  test('sketch, blind reader and judge give the full translator\'s result and its scores', async () => {
    const asked = [];
    const ask = async (prompt, schema) => {
      asked.push(schema);
      if (schema === SKETCH_SCHEMA) return { sketch };
      if (schema === BLIND_SCHEMA) return { sentences: [{ english: 'I eat food.' }], whole: 'Someone eats.', unsure: '' };
      return { ideas: [{ id: 'i1', verdict: 'kept', note: '' }, { id: 'i2', verdict: 'weaker', note: 'food' }], added: [] };
    };
    const check = (answer) => ({
      sentences: answer.sentences.map((s) => ({ refs: s.pinyin, gloss: 'I eat meal', check: { unknown: [], parses: true, readings: 1, means: 'yes', words: 3, late: [], warnings: [] } })),
      problems: [],
      castProblems: [],
    });
    const r = await readBack(run, { ask, check, prompts, words });
    expect(asked).toEqual([SKETCH_SCHEMA, BLIND_SCHEMA, JUDGE_SCHEMA]);
    expect(r.sentences[0].blind).toBe('I eat food.');
    expect(r.sketch.map((s) => s.verdict)).toEqual(['kept', 'weaker']);
    expect(r.left).toEqual({ sentences: 1, needed: 1 });
    // the one needed idea read back is kept; with i3 of the sentence not built, one of two
    expect(readBackScore([r, null])).toMatchObject({ texts: 1, sentences: 1, hsdOnly: 1, meant: 1, kept: 1, sentencesKept: 1, keptWithLeft: 0.5, pass: true });
  });

  test('nothing built: no reader, and the needed ideas all count as left', async () => {
    const none = { ...run, results: [{ ok: false }, { ok: false }] };
    const ask = async (prompt, schema) => (schema === SKETCH_SCHEMA ? { sketch } : null);
    const r = await readBack(none, { ask, check: () => null, prompts, words });
    expect(r).toMatchObject({ sentences: [], left: { sentences: 2, needed: 2 } });
    expect(readBackScore([r])).toMatchObject({ texts: 0, keptWithLeft: 0 });
  });

  test('many texts: each step once per batch, each text by its number; one missing from an answer fails alone', async () => {
    const asked = [];
    const ask = async (prompt, schema) => {
      const step = schema.properties.texts.items.properties.sketch ? 'sketch' : schema.properties.texts.items.properties.whole ? 'blind' : 'judge';
      asked.push({ step, prompt });
      if (step === 'sketch') return { texts: [{ n: 1, sketch }, { n: 2, sketch }, { n: 3, sketch }] };
      if (step === 'blind') return { texts: [{ n: 2, sentences: [{ english: 'I eat food.' }], whole: 'Someone eats.', unsure: '' }] };
      return { texts: [{ n: 1, ideas: [{ id: 'i1', verdict: 'kept', note: '' }, { id: 'i2', verdict: 'kept', note: '' }], added: [] }] };
    };
    const check = (answer) => ({ sentences: answer.sentences.map((s) => ({ refs: s.pinyin, gloss: 'I eat meal', check: { unknown: [], parses: true, readings: 1, means: 'yes', words: 3, late: [], warnings: [] } })), problems: [], castProblems: [] });
    const none = { ...run, results: [{ ok: false }, { ok: false }] };
    const out = await readBackMany([run, run, none, { correction: { sentences: [] }, results: [] }], { ask, check, prompts, words, batch: 2 });
    // the sketches in two calls (2 + 1 texts), the reader in one (the two with a built sentence), the judge in one
    expect(asked.map((a) => a.step)).toEqual(['sketch', 'sketch', 'blind', 'judge']);
    expect(asked[0].prompt).toContain('Write the ideas, needed or colour.');
    expect(asked[0].prompt.match(/1\. I eat a meal\.\n2\. It is late\./g)).toHaveLength(2);
    expect(out[0].sentences[0].blind).toBeFalsy(); // the reader's answer had nothing for text 1
    expect(out[1].sentences[0].blind).toBe('I eat food.');
    expect(out[1].sketch.map((s) => s.verdict)).toEqual(['kept', 'kept']);
    expect(out[2]).toMatchObject({ sentences: [], left: { sentences: 2, needed: 2 } });
    expect(out[3]).toBeNull();
    // the same texts give the same prompts, so a kept answer is found again
    const again = [];
    await readBackMany([run, run, none], { ask: async (p, s) => (again.push(p), ask(p, s)), check, prompts, words, batch: 2 });
    expect(again[0]).toBe(asked[0].prompt);
  });
});
