// "How much of the book's own text do the grammar patterns cover?"
// (KB_PLAN.md phase 1: the parse report on lessons 1-4.) Every Hao-shuo-de
// sentence in the chosen lessons is parsed; the report says how many parse,
// by which patterns, and for the rest where the parser stopped and why. A
// sentence that fails is a gap in the patterns (or a sentence worth
// rewording), never hidden.
//
//   const report = parseReport({ sentences, parseText, lessons: [{ id, number }] });
//   renderParseReport(report, words) -> markdown
//
// `sentences` is facts.sentences (kb.facts.sentences): the lesson examples and
// answers that are written in Hao-shuo-de. `parseText` is kb.parse.

import { explainFailure, bracket } from '../grammar/parser.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';

const KINDS = new Set(['lesson_example', 'lesson_answer']);

// An answer in English that names a word or two ("A word (dà, big) plus ...")
// is not a Hao-shuo-de sentence: most of its pieces are not dictionary words.
const isEnglishText = (piece) => piece.problems.length * 2 > piece.tokens.length;

// -> { lessons, total, parsed, rate, byPattern, failures, ambiguous, skipped }
export function parseReport({ sentences, parseText, lessons }) {
  const byPattern = new Map();
  const skipped = [];
  const failures = [];
  const ambiguous = [];
  const out = [];
  for (const lesson of lessons) {
    const items = [];
    for (const s of sentences.filter((x) => KINDS.has(x.kind) && x.lesson === lesson.id)) {
      const result = parseText(s.pinyin);
      for (const piece of result.sentences) {
        const item = { lesson: lesson.id, module: s.module, key: s.key, kind: s.kind, piece, en: s.en };
        if (isEnglishText(piece)) skipped.push(item);
        else items.push(item);
      }
      if (result.error) items.push({ lesson: lesson.id, module: s.module, key: s.key, kind: s.kind, error: result.error, piece: null });
    }
    for (const it of items) {
      if (it.piece?.ok) {
        for (const p of it.piece.patterns) byPattern.set(p, (byPattern.get(p) ?? 0) + 1);
        if (it.piece.treeCount > 1) ambiguous.push(it);
      } else failures.push(it);
    }
    out.push({ ...lesson, total: items.length, parsed: items.filter((i) => i.piece?.ok).length, items });
  }
  const total = out.reduce((n, l) => n + l.total, 0);
  const parsed = out.reduce((n, l) => n + l.parsed, 0);
  return { lessons: out, total, parsed, rate: total ? parsed / total : 0, byPattern, failures, ambiguous, skipped };
}

const pct = (n, d) => (d ? `${Math.round((100 * n) / d)}%` : '-');

// -> markdown
export function renderParseReport(report, words = {}, { title = 'Parse report' } = {}) {
  const say = (t) => replaceWordRefs(t, (id, kind) => refTerm(words[id]?.term ?? id, kind));
  const where = (it) => `${it.lesson}${it.module ? `/${it.module}` : ''}`;
  const lines = [`# ${title}`, ''];
  lines.push(
    `${report.parsed} of ${report.total} sentences parse (${pct(report.parsed, report.total)}). ` +
      'A sentence that does not parse is a gap in the grammar patterns (src/data/grammar/), or a sentence worth rewording; ' +
      'this report keeps them in view.',
    '',
  );
  if (report.skipped.length) {
    lines.push(`Left out: ${report.skipped.length} answer${report.skipped.length === 1 ? ' is' : 's are'} English text that only names a word or two, not a Hao-shuo-de sentence (${report.skipped.map((it) => where(it)).join(', ')}).`, '');
  }

  lines.push('## By lesson', '', '| Lesson | Sentences | Parse | Rate |', '| --- | --- | --- | --- |');
  for (const l of report.lessons) {
    lines.push(`| ${l.number}. ${l.id} | ${l.total} | ${l.parsed} | ${l.total ? pct(l.parsed, l.total) : 'no Hao-shuo-de sentences'} |`);
  }
  lines.push('');

  lines.push('## Patterns used', '');
  const used = [...report.byPattern.entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
  if (used.length) for (const [p, n] of used) lines.push(`- ${p}: in ${n} sentence${n === 1 ? '' : 's'}`);
  else lines.push('- none');
  lines.push('');

  lines.push('## What does not parse', '');
  if (!report.failures.length) lines.push('Everything parses.', '');
  else {
    // group by the word the parser stopped at
    const groups = new Map();
    for (const it of report.failures) {
      const f = it.piece?.failure;
      const key = it.error ? 'could not be read' : f ? (f.token === null ? 'the sentence ended too soon' : `stopped at "${f.token}"`) : 'did not parse';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(it);
    }
    for (const [key, items] of [...groups.entries()].sort((a, b) => b[1].length - a[1].length)) {
      lines.push(`### ${key} (${items.length})`, '');
      for (const it of items) {
        lines.push(`- ${say(it.piece?.text ?? '')} (${where(it)})`.replace('-  (', '- ('));
        if (it.error) lines.push(`  - ${it.error}`);
        else {
          lines.push(`  - ${explainFailure(it.piece, words)}`);
          if (it.piece.problems.length) lines.push(`  - ${it.piece.problems.join('; ')}`);
          const pieces = it.piece.failure?.pieces ?? [];
          if (pieces.length) lines.push(`  - pieces that do fit: ${pieces.map((p) => `[${p.sym} ${p.text}]`).join(' ')}`);
        }
      }
      lines.push('');
    }
  }

  lines.push('## Read more than one way', '');
  if (!report.ambiguous.length) lines.push('None.', '');
  else {
    lines.push('Sentences whose words fit the patterns in more than one way (the parser shows the first):', '');
    for (const it of report.ambiguous) lines.push(`- ${say(it.piece.text)} (${where(it)}): ${it.piece.treeCount > 20 ? 'many' : it.piece.treeCount} readings, e.g. ${bracket(it.piece)}`);
    lines.push('');
  }
  return lines.join('\n');
}
