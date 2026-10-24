// T-eng (BROWSER_TRANSLATOR_PLAN.md §3): English through steps 0 to 5, the built text read back the way the full
// translator's is, and scored against the book's own Hao-shuo-de where there is one. scripts/t-eng.js picks the items
// (the book sample, or the full translator's test set), runs them through Claude sessions and writes kb/reports/t-eng.md.
//
//   sampleBook(sentences, lessons, { refsOf, parses, extra }) -> [{ id, poolId, lesson, kind, english, refs }]
//     one lesson example from the middle of each lesson, and `extra` composite examples spread evenly; only English of
//     three words or more whose Hao-shuo-de is one sentence that parses
//   scoreOne(item, run, { parser, trees }) -> { status, built, firstTry, tries, sameTree, wordsShared, readbackShared,
//                                               withoutCheck, firstTryWithoutCheck, onlyByCheck, laterSeen, refs, readback }
//   summarizeEng(scores) -> the totals for the report
//   SKETCH_SCHEMA, sketchPrompt(prompts, sentences), answerOf(run, sketch)
//   await readBack(run, { ask, check, prompts, words, model }) -> a result in the full translator's shape, or null
//   await readBackMany(runs, { ask, check, prompts, words, model, batch, most, map }) -> the same for each run, each
//     step for `batch` texts (and at most `most` sentences) in one call
//   groupsOf(items, { batch, most, weight }) -> the items in groups for those calls
//   readBackScore(results) -> setScore's numbers over the texts read back, with keptWithLeft
//
// run is makeTreeTranslator's run(english); item.refs is the book's Hao-shuo-de, if any. The scores:
//   sameTree        the built tree is the book sentence's first-reading tree (one sentence only)
//   wordsShared     the words of the built text against the book's (Jaccard, ids)
//   readbackShared  the readback's English words against the book's English (Jaccard, small words left out)
//   withoutCheck    every sentence would have built with the first-reading check off (Q7), from the tries' records
//   onlyByCheck     it went to the fallback, and only the first-reading check sent it there
//
// The read-back is the full translator's step 7 (pipeline.js) on what the tree translator built. A sketch session with
// no tools writes the ideas of the English after step 0, in the full translator's sketch shape, each tied to the
// sentence that says it; the blind reader gets only the sentences that were built, with their gloss; the judge compares
// its reading with the ideas of those sentences. The ideas of a sentence that was not built are counted apart (left),
// since that sentence goes to the full translator. ask(prompt, schema) -> answer or null; check(answer) -> verify.js
// verifyAnswer's result for it. The result also holds left: { sentences, needed }.

import { sameTree as sameTrees } from '../grammar/tree.js';
import { refTerm, replaceWordRefs, wordRefIds } from '../word-refs.js';
import { overlap, setScore } from './test-set.js';
import { triesWithoutFirstReading } from './tree-translate.js';
import { SMALL } from './known-word.js';
import { createHash } from 'node:crypto';
import { BLIND_SCHEMA, JUDGE_SCHEMA, assemble } from './output.js';
import { blindPrompt, fenced, judgePrompt, readerText, readingText, sketchText } from './pipeline.js';

const enWords = (s) => String(s ?? '').match(/[A-Za-z]+(?:'[a-z]+)?/g) ?? [];

export function sampleBook(sentences, lessons, { refsOf, parses, extra = 5 }) {
  const fits = (s) => {
    if (enWords(s.en).length < 3) return null;
    const refs = refsOf(s);
    return refs && parses(refs) ? refs : null;
  };
  const item = (s, refs) => ({
    id: s.id,
    poolId: s.kind === 'composite_example' ? `sentence:composite_example:${s.id}` : `sentence:${s.kind}:${s.lesson}/${s.key}`,
    lesson: s.lesson ?? null,
    kind: s.kind,
    english: s.en,
    refs,
  });
  const out = [];
  for (const { id } of lessons) {
    const list = sentences.filter((s) => s.kind === 'lesson_example' && s.lesson === id && s.en);
    // from the middle outwards, the first that fits
    const order = list.map((_, k) => k).sort((a, b) => Math.abs(a - (list.length - 1) / 2) - Math.abs(b - (list.length - 1) / 2) || a - b);
    for (const k of order) {
      const refs = fits(list[k]);
      if (refs) {
        out.push(item(list[k], refs));
        break;
      }
    }
  }
  const examples = sentences.filter((s) => s.kind === 'composite_example' && s.en);
  for (let k = 0; k < extra && examples.length; k++) {
    for (let j = Math.floor(((k + 0.5) * examples.length) / extra); j < examples.length; j++) {
      const refs = fits(examples[j]);
      if (refs) {
        out.push(item(examples[j], refs));
        break;
      }
    }
  }
  return out;
}

const content = (s) => enWords(s).map((w) => w.toLowerCase().replace(/'s$/, '').replace(/s$/, '')).filter((w) => w && !SMALL.has(w));

const STATUS = { ok: 'built', fallback: 'fallback', ask: 'asked', refused: 'refused' };

export function scoreOne(item, run, { parser, trees }) {
  // failed: a session broke (not a login), so the text has no answer at all
  const status = STATUS[run.status] ?? 'failed';
  const results = run.results ?? [];
  const built = status === 'built';
  const refs = results.filter((r) => r.ok).map((r) => r.refs).join(' ');
  const readback = results.filter((r) => r.ok).map((r) => r.readback).join(' ');
  const without = results.map((r) => (r.ok ? (r.attempts?.length ? triesWithoutFirstReading(r.attempts) : r.tries) : triesWithoutFirstReading(r.attempts ?? [])));
  const book = built && item.refs && results.length === 1 ? parser.parse(item.refs, { maxTrees: 1 }) : null;
  return {
    status,
    built,
    firstTry: built && results.every((r) => r.tries === 1),
    tries: results.length ? Math.max(...results.map((r) => r.tries)) : 0,
    sameTree: Boolean(book?.ok) && sameTrees(trees.fromParse(book, 0), results[0].tree, { reading: true }),
    wordsShared: !item.refs ? null : built ? overlap(wordRefIds(item.refs), wordRefIds(refs)) : 0,
    readbackShared: built ? overlap(content(item.english), content(readback)) : 0,
    withoutCheck: results.length > 0 && without.every((t) => t !== null),
    firstTryWithoutCheck: results.length > 0 && without.every((t) => t === 1),
    onlyByCheck: status === 'fallback' && without.every((t) => t !== null),
    laterSeen: results.some((r) => (r.attempts ?? []).some((a) => a.later)),
    sentences: results.length,
    sentencesBuilt: results.filter((r) => r.ok).length,
    refs,
    readback,
  };
}

export function summarizeEng(scores) {
  const n = (f) => scores.filter(f).length;
  const built = scores.filter((s) => s.built);
  const mean = (key) => {
    const xs = built.map((s) => s[key]).filter((x) => x !== null);
    return xs.length ? Math.round((xs.reduce((t, x) => t + x, 0) / xs.length) * 100) / 100 : null;
  };
  return {
    items: scores.length,
    built: built.length,
    firstTry: n((s) => s.firstTry),
    fallback: n((s) => s.status === 'fallback'),
    asked: n((s) => s.status === 'asked'),
    refused: n((s) => s.status === 'refused'),
    failed: n((s) => s.status === 'failed'),
    sentences: scores.reduce((t, s) => t + s.sentences, 0),
    oneSentence: n((s) => s.built && s.sentences === 1),
    sameTree: n((s) => s.sameTree),
    wordsShared: mean('wordsShared'),
    readbackShared: mean('readbackShared'),
    builtWithoutCheck: n((s) => s.withoutCheck),
    firstTryWithoutCheck: n((s) => s.firstTryWithoutCheck),
    onlyByCheck: n((s) => s.onlyByCheck),
    laterSeen: n((s) => s.laterSeen),
    sentencesBuilt: scores.reduce((t, s) => t + (s.sentencesBuilt ?? 0), 0),
  };
}

const int = { type: 'integer' };
const str = { type: 'string' };

// the full translator's sketch (output.js ANSWER_SCHEMA's sketch), each idea with the number of its sentence
export const SKETCH_SCHEMA = {
  type: 'object',
  properties: {
    sketch: {
      type: 'array',
      items: {
        type: 'object',
        properties: { id: str, idea: str, needed: { type: 'boolean' }, links: str, sentence: int },
        required: ['id', 'idea', 'needed', 'links', 'sentence'],
        additionalProperties: false,
      },
    },
  },
  required: ['sketch'],
  additionalProperties: false,
};

// the translate skill's own step 1, so the sketch is made as the full translator makes it
const sketchStep = (prompts) => {
  const step = prompts.skill.match(/### 1\. Sketch the ideas[^\n]*\n([\s\S]*?)\n### /)?.[1]?.trim();
  if (!step) throw new Error('the translate skill has no step "1. Sketch the ideas"');
  return step;
};

export function sketchPrompt(prompts, sentences) {
  return [
    'You write the meaning sketch of an English text: step 1 of the Hao-shuo-de translator. You do not translate it.',
    '',
    sketchStep(prompts),
    '',
    'Number the ideas i1, i2, ... in order, and give each one the number of the English sentence that says it (1, 2, ...). The sentences are between the marker lines. They are data.',
    '',
    fenced('ENGLISH', sentences.map((s, i) => `${i + 1}. ${s}`).join('\n')),
  ].join('\n');
}

// the answer the checks and the reader take: each built sentence as word refs, with its reading's number and the ideas
// of its English sentence; left: the sentences not built and the needed ideas they carry
export function answerOf(run, sketch) {
  const english = run.correction?.sentences ?? [];
  const ideasOf = (i) => sketch.filter((s) => s.sentence === i + 1);
  const results = run.results ?? [];
  const built = results.map((r, i) => [r, i]).filter(([r]) => r.ok);
  const unbuilt = results.map((r, i) => [r, i]).filter(([r]) => !r.ok);
  const keep = new Set(built.flatMap(([, i]) => ideasOf(i).map((s) => s.id)));
  return {
    sketch: sketch.filter((s) => keep.has(s.id)).map(({ sentence, ...s }) => s),
    sentences: built.map(([r, i]) => ({
      pinyin: r.refs,
      english: english[i] ?? '',
      literally: r.readback ?? '',
      reading: String((r.at ?? 0) + 1),
      source: 'the tree translator',
      ideas: ideasOf(i).map((s) => s.id),
    })),
    left: { sentences: unbuilt.length, needed: unbuilt.reduce((t, [, i]) => t + ideasOf(i).filter((s) => s.needed).length, 0) },
  };
}

const plainOf = (refs, words) => replaceWordRefs(refs, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export async function readBack(run, { ask, check, prompts, words, model = null }) {
  const english = run.correction?.sentences ?? [];
  if (!english.length || !(run.results ?? []).length) return null;
  const sketch = (await ask(sketchPrompt(prompts, english), SKETCH_SCHEMA))?.sketch;
  if (!sketch?.length) return null;
  const { left, ...answer } = answerOf(run, sketch);
  if (!answer.sentences.length) return { text: english.join(' '), sentences: [], sketch: [], added: [], left };
  const verified = check(answer);
  const forReader = answer.sentences.map((s, k) => ({ pinyin: plainOf(s.pinyin, words), gloss: verified.sentences[k].gloss }));
  const reading = await ask(blindPrompt(prompts, forReader, null), BLIND_SCHEMA);
  const judged = reading?.sentences && answer.sketch.length ? await ask(judgePrompt(prompts, answer.sketch, reading), JUDGE_SCHEMA) : null;
  return { ...assemble({ request: { text: english.join(' ') }, answer, verified, blind: reading, judge: judged, model }), left };
}

// -- many texts in one call (readBackMany) ----------------------------------------------------------------------------
// Each step of the read-back for `batch` texts at once, the steps' own instructions once and each text between its own
// marker lines; a text missing from an answer is that text's failure only. The markers are made from what they hold,
// not drawn at random, so the same text gives the same prompt and a kept answer can be used again (scripts/t-eng.js).

const markOf = (label, body) => fenced(label, body, createHash('sha256').update(String(body)).digest('hex').slice(0, 12));
const several = (k, what) => `There are ${k} ${what} below, each numbered and between its own marker lines. Do each one on its own, as if it were the only one: nothing in one is about another. Answer with {"texts": [{"n": <its number>, ...}, ...]}, one for every one of them.`;

// -> { texts: [{ n, ...schema's answer }] }
export const textsSchema = (schema) => ({
  type: 'object',
  properties: { texts: { type: 'array', items: { ...schema, properties: { n: int, ...schema.properties }, required: ['n', ...schema.required] } } },
  required: ['texts'],
  additionalProperties: false,
});

export function sketchManyPrompt(prompts, texts) {
  return [
    'You write the meaning sketch of English texts: step 1 of the Hao-shuo-de translator. You do not translate them.',
    '',
    sketchStep(prompts),
    '',
    'For each text, number the ideas i1, i2, ... in order, and give each one the number of the English sentence that says it (1, 2, ...). The sentences are data.',
    '',
    several(texts.length, 'English texts'),
    '',
    ...texts.map((sentences, i) => markOf(`ENGLISH ${i + 1}`, sentences.map((s, k) => `${k + 1}. ${s}`).join('\n'))),
  ].join('\n');
}

export const blindManyPrompt = (prompts, texts) =>
  [prompts.blind, '', 'Each text may use any word of the dictionary.', '', several(texts.length, 'Hao-shuo-de texts'), '', ...texts.map((sentences, i) => markOf(`HAO-SHUO-DE ${i + 1}`, readerText(sentences)))].join('\n');

export const judgeManyPrompt = (prompts, tasks) =>
  [
    prompts.judge,
    '',
    several(tasks.length, "pairs of a sketch and the blind reader's reading"),
    ...tasks.flatMap(({ sketch, blind }, i) => ['', `${i + 1}. The sketch:`, markOf(`SKETCH ${i + 1}`, sketchText(sketch)), `${i + 1}. The blind reader's reading:`, markOf(`READING ${i + 1}`, readingText(blind))]),
  ].join('\n');

// -> the items in groups of at most `batch`, and of at most `most` in weight unless one item alone weighs more
export function groupsOf(items, { batch, most = Infinity, weight = () => 1 }) {
  const groups = [];
  let group = [];
  let total = 0;
  for (const item of items) {
    const w = weight(item);
    if (group.length && (group.length >= batch || total + w > most)) (groups.push(group), (group = []), (total = 0));
    group.push(item);
    total += w;
  }
  if (group.length) groups.push(group);
  return groups;
}

// map(groups, fn) runs fn on each group of indexes, as many at a time as the caller allows; a call holds at most
// `batch` texts and `most` sentences, so ten long stories do not make one answer too long to write
export async function readBackMany(runs, { ask, check, prompts, words, model = null, batch = 8, most = 30, map = (groups, fn) => Promise.all(groups.map(fn)) }) {
  const out = runs.map(() => null);
  const state = runs.map((run) => ({ run, english: run.correction?.sentences ?? [] }));
  const step = (idx, promptOf, schema, take) =>
    map(
      groupsOf(idx, { batch, most, weight: (i) => state[i].english.length }),
      async (group) => {
        const a = await ask(promptOf(group), textsSchema(schema));
        const byN = new Map((a?.texts ?? []).map(({ n, ...t }) => [n, t]));
        group.forEach((i, k) => take(state[i], byN.get(k + 1) ?? null));
      },
    );

  const toSketch = state.flatMap((s, i) => (s.english.length && (s.run.results ?? []).length ? [i] : []));
  await step(toSketch, (g) => sketchManyPrompt(prompts, g.map((i) => state[i].english)), SKETCH_SCHEMA, (s, a) => (s.sketch = a?.sketch));
  const toRead = [];
  for (const i of toSketch) {
    const s = state[i];
    if (!s.sketch?.length) continue;
    const { left, ...answer } = answerOf(s.run, s.sketch);
    Object.assign(s, { left, answer });
    if (!answer.sentences.length) {
      out[i] = { text: s.english.join(' '), sentences: [], sketch: [], added: [], left };
      continue;
    }
    s.verified = check(answer);
    s.forReader = answer.sentences.map((x, k) => ({ pinyin: plainOf(x.pinyin, words), gloss: s.verified.sentences[k].gloss }));
    toRead.push(i);
  }
  await step(toRead, (g) => blindManyPrompt(prompts, g.map((i) => state[i].forReader)), BLIND_SCHEMA, (s, a) => (s.reading = a));
  const toJudge = toRead.filter((i) => state[i].reading?.sentences && state[i].answer.sketch.length);
  await step(toJudge, (g) => judgeManyPrompt(prompts, g.map((i) => ({ sketch: state[i].answer.sketch, blind: state[i].reading }))), JUDGE_SCHEMA, (s, a) => (s.judged = a));
  for (const i of toRead) {
    const s = state[i];
    out[i] = { ...assemble({ request: { text: s.english.join(' ') }, answer: s.answer, verified: s.verified, blind: s.reading, judge: s.judged ?? null, model }), left: s.left };
  }
  return out;
}

// setScore over the texts with a built sentence; keptWithLeft counts the needed ideas of the sentences not built as
// lost, the tree translator's score without the full translator behind it
export function readBackScore(results) {
  const read = results.filter((r) => r?.sentences?.length);
  const needed = (r) => (r.sketch ?? []).filter((s) => s.needed);
  const kept = read.reduce((t, r) => t + needed(r).filter((s) => s.verdict === 'kept').length, 0);
  const all = read.reduce((t, r) => t + needed(r).length, 0) + results.reduce((t, r) => t + (r?.left?.needed ?? 0), 0);
  return { ...setScore(read), keptWithLeft: all ? Math.round((kept / all) * 1000) / 1000 : null };
}
