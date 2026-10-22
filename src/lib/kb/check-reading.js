// kb_check_reading (TRANSLATOR_PLAN.md B2): does a sentence have the reading Claude means? Claude gives the
// reading as a number (its place among kb_parse's readings) or as the sentence in brackets (kb_parse's own
// bracket notation); the answer is "means it", "means it, with N other readings" or "can't mean it" -- and
// shows the readings it does have, so the right one can be picked instead. A reading it means comes with its
// readability (B4, readability.js): kb_check_text measures the first reading, this the one meant.
//
// A sentence can have 500 readings, so the text shows the first SHOWN others, each with its own number (to pass back),
// and says how many more there are; data has them all. A piece of a bracket ("[VP ràng [NP [ModNP") picks the first
// reading that has it, since a whole bracket is long to copy: the text says how many readings have that piece.
//
//   askReading(kb, { text, reading, lesson }) -> { data, text }

import { pinyinProblems } from '../pinyin-refs.js';
import { bracket, explainFailure } from '../grammar/parser.js';
import { lessonOf } from './lesson-lookup.js';
import { readability, renderReadability } from './readability.js';

export const SHOWN = 20;

// -> { idx, having }: having is how many readings have the piece (a whole bracket or a number: 1)
function findReading(readings, reading) {
  const want = String(reading).trim();
  if (/^\d+$/.test(want)) {
    const i = Number(want) - 1;
    return { idx: i >= 0 && i < readings.length ? i : -1, having: 1 };
  }
  const exact = readings.indexOf(want);
  if (exact !== -1 || !want.startsWith('[')) return { idx: exact, having: 1 };
  const having = readings.filter((b) => b.includes(want)).length;
  return { idx: readings.findIndex((b) => b.includes(want)), having };
}

// the readings but one, by their own numbers, the first SHOWN of them
function listed(readings, skip = -1) {
  const rest = readings.map((b, k) => [k, b]).filter(([k]) => k !== skip);
  const lines = rest.slice(0, SHOWN).map(([k, b]) => `  ${k + 1}. ${b}`);
  if (rest.length > SHOWN) lines.push(`  ... and ${rest.length - SHOWN} more (kb_parse shows them all; a piece of a bracket picks the first that has it)`);
  return lines;
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
  const { idx, having } = findReading(readings, reading);
  if (idx === -1) {
    const data = { ok: true, means: 'no', parses: true, readings };
    return { data, text: [`Can't mean it. The ${readings.length} reading(s) it does have:`, ...listed(readings)].join('\n') };
  }
  const others = readings.filter((_, k) => k !== idx);
  const measured = readability({ refs, parse: result, words, reading: idx });
  const data = { ok: true, means: others.length ? 'yes-with-others' : 'yes', bracket: readings[idx], number: idx + 1, others, readability: measured };
  const meant = [`  ${idx + 1}. ${readings[idx]}`, ...(having > 1 ? [`  (the first of ${having} readings with that piece)`] : []), ...renderReadability(measured).map((line) => `  ${line}`)];
  const out = others.length
    ? [`Means it, with ${others.length} other reading(s):`, ...meant, '', 'The others:', ...listed(readings, idx)].join('\n')
    : ['Means it.', ...meant].join('\n');
  return { data, text: out };
}
