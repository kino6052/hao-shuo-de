// kb_check_reading (TRANSLATOR_PLAN.md B2): does a sentence have the reading Claude means? Claude gives the
// reading as a number (its place among kb_parse's readings) or as the sentence in brackets (kb_parse's own
// bracket notation); the answer is "means it", "means it, with N other readings" or "can't mean it" -- and
// shows the readings it does have, so the right one can be picked instead.
//
//   askReading(kb, { text, reading, lesson }) -> { data, text }

import { pinyinProblems } from '../pinyin-refs.js';
import { bracket, explainFailure } from '../grammar/parser.js';
import { lessonOf } from './lesson-lookup.js';

function findReadingIndex(readings, reading) {
  const want = String(reading).trim();
  if (/^\d+$/.test(want)) {
    const i = Number(want) - 1;
    return i >= 0 && i < readings.length ? i : -1;
  }
  return readings.findIndex((b) => b === want);
}

export function askReading(kb, { text, reading, lesson } = {}) {
  if (!text) throw new Error('text is required');
  if (reading === undefined || reading === '' || reading === null) throw new Error('reading is required: a number (its place among the readings) or the sentence in brackets (see kb_parse)');
  const words = kb.source.words;
  let refs = String(text);
  if (!refs.includes('{{')) {
    const r = pinyinProblems(refs, words, { composites: kb.source.composites });
    if (r.problems.length) {
      const text = `Can't check it: ${r.problems.map((p) => p.message).join('; ')}`;
      return { data: { ok: false, means: null }, text };
    }
    refs = r.refs;
  }
  const l = lesson !== undefined && lesson !== '' && lesson !== null ? lessonOf(kb.lessons(), lesson) : null;
  const parser = (l ? kb.parseUpTo(l.number) : kb.parse).parser;
  const result = parser.parse(refs, { maxTrees: 500 });
  if (!result.ok) {
    const data = { ok: true, means: 'no', parses: false };
    return { data, text: `Can't mean it: it does not parse (${explainFailure(result, words)}).` };
  }
  const readings = result.trees.map((_, k) => bracket(result, k));
  const idx = findReadingIndex(readings, reading);
  if (idx === -1) {
    const data = { ok: true, means: 'no', parses: true, readings };
    return { data, text: ["Can't mean it. The reading(s) it does have:", ...readings.map((b, i) => `  ${i + 1}. ${b}`)].join('\n') };
  }
  const others = readings.filter((_, k) => k !== idx);
  const data = { ok: true, means: others.length ? 'yes-with-others' : 'yes', bracket: readings[idx], others };
  const out = others.length
    ? [`Means it, with ${others.length} other reading(s):`, `  ${readings[idx]}`, '', 'The others:', ...others.map((b, i) => `  ${i + 1}. ${b}`)].join('\n')
    : `Means it.\n  ${readings[idx]}`;
  return { data, text: out };
}
