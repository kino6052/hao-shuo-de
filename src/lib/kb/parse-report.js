// "How much of the book's own text do the grammar patterns cover?"
// (KB_PLAN.md phase 1: the parse report on lessons 1-4.) Every Hao-shuo-de
// sentence in the chosen lessons is parsed; the report says how many parse,
// by which patterns, and for the rest where the parser stopped and why. A
// sentence that fails is a gap in the patterns (or a sentence worth
// rewording), never hidden.
//
//   const report = parseReport({ sentences, parseText, parseLesson, patternLesson, lessons: [{ id, number }], groups });
//   renderParseReport(report, words) -> markdown
//
// `sentences` is facts.sentences (kb.facts.sentences): the lesson examples and
// answers that are written in Hao-shuo-de. `parseText` is kb.parse. `groups` adds
// the other texts after the lessons (K7): [{ id, title, kinds }], for example the
// composite examples, the stories and the phrase book.
//
// The early-patterns rule: with `parseLesson` (kb.parseUpTo) a lesson's sentences are parsed with
// only the patterns taught up to that lesson. One that parses only with later patterns is not a
// failure of the grammar but a finding about the book: it goes to `late`, with the patterns it
// needs and the lesson that teaches each (`patternLesson`, kb.patternLesson).

import { explainFailure, bracket, patternsOf } from '../grammar/parser.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';

const KINDS = new Set(['lesson_example', 'lesson_answer']);

// An answer in English that names a word or two ("A word (dà, big) plus ...")
// is not a Hao-shuo-de sentence: most of its pieces are not dictionary words.
const isEnglishText = (piece) => piece.problems.length * 2 > piece.tokens.length;

// -> { lessons, total, parsed, rate, byPattern, failures, ambiguous, skipped }
export function parseReport({ sentences, parseText, parseLesson = null, patternLesson = () => undefined, lessons, groups = [] }) {
  const byPattern = new Map();
  const skipped = [];
  const failures = [];
  const late = [];
  const ambiguous = [];
  const out = [];
  const sets = [
    ...lessons.map((l) => ({ ...l, rows: sentences.filter((x) => KINDS.has(x.kind) && x.lesson === l.id) })),
    ...groups.map((g) => ({ id: g.id, title: g.title, rows: sentences.filter((x) => g.kinds.includes(x.kind)) })),
  ];
  for (const lesson of sets) {
    const items = [];
    for (const s of lesson.rows) {
      const early = parseLesson && lesson.number ? parseLesson(lesson.number) : parseText;
      const result = early(s.pinyin);
      const at = s.module || s.composite || s.lesson || ''; // what the sentence belongs to inside its set
      for (const piece of result.sentences) {
        const item = { lesson: lesson.id, module: at, key: s.key, kind: s.kind, piece, en: s.en };
        if (isEnglishText(piece)) skipped.push(item);
        else {
          if (!piece.ok && early !== parseText) {
            // does it parse with every pattern? then it uses one that is taught later
            const full = parseText.parser.parse(piece.text, { maxTrees: 200 });
            if (full.ok) {
              const needs = full.trees
                .map((t) => patternsOf(t).filter((p) => (patternLesson(p) ?? Infinity) > lesson.number))
                .reduce((best, now) => (!best || now.length < best.length ? now : best), null);
              item.late = needs.map((id) => ({ id, lesson: patternLesson(id) ?? null }));
            }
          }
          items.push(item);
        }
      }
      if (result.error) items.push({ lesson: lesson.id, module: at, key: s.key, kind: s.kind, error: result.error, piece: null });
    }
    for (const it of items) {
      if (it.piece?.ok) {
        for (const p of it.piece.patterns) byPattern.set(p, (byPattern.get(p) ?? 0) + 1);
        if (it.piece.treeCount > 1) ambiguous.push(it);
      } else if (it.late) late.push(it);
      else failures.push(it);
    }
    out.push({ id: lesson.id, number: lesson.number, title: lesson.title, total: items.length, parsed: items.filter((i) => i.piece?.ok).length, items });
  }
  const total = out.reduce((n, l) => n + l.total, 0);
  const parsed = out.reduce((n, l) => n + l.parsed, 0);
  // patterns the texts use (by their first reading) that no lesson teaches
  const untaught = parseLesson ? [...byPattern.keys()].filter((id) => patternLesson(id) === undefined).sort() : [];
  return { lessons: out, total, parsed, rate: total ? parsed / total : 0, byPattern, failures, late, untaught, ambiguous, skipped };
}

// -> the report without the trees (the JSON of every tree of every sentence is huge)
export function slimReport(report) {
  const slim = (it) => (it.piece ? { ...it, piece: { ...it.piece, trees: undefined } } : it);
  return {
    ...report,
    lessons: report.lessons.map((l) => ({ ...l, items: l.items.map(slim) })),
    failures: report.failures.map(slim),
    late: report.late.map(slim),
    untaught: report.untaught,
    ambiguous: report.ambiguous.map(slim),
    skipped: report.skipped.map(slim),
    byPattern: Object.fromEntries(report.byPattern),
  };
}

// -> a sentence of word refs as a person reads it ("Wǒ shì rén.")
export const sayText = (text, words = {}) => replaceWordRefs(text, (id, kind) => refTerm(words[id]?.term ?? id, kind));

const pct = (n, d) => (d ? `${Math.round((100 * n) / d)}%` : '-');

// -> markdown
export function renderParseReport(report, words = {}, { title = 'Parse report' } = {}) {
  const say = (t) => replaceWordRefs(t, (id, kind) => refTerm(words[id]?.term ?? id, kind));
  const where = (it) => `${it.lesson}${it.module ? `/${it.module}` : ''}`;
  const lines = [`# ${title}`, ''];
  lines.push(
    `${report.parsed} of ${report.total} sentences parse (${pct(report.parsed, report.total)})${report.late.length ? `, ${report.late.length} more only with a pattern taught later` : ''}. ` +
      'A sentence that does not parse is a gap in the grammar patterns (src/data/grammar/), or a sentence worth rewording; ' +
      'this report keeps them in view.',
    '',
  );
  if (report.skipped.length) {
    lines.push(`Left out: ${report.skipped.length} answer${report.skipped.length === 1 ? ' is' : 's are'} English text that only names a word or two, not a Hao-shuo-de sentence (${report.skipped.map((it) => where(it)).join(', ')}).`, '');
  }

  lines.push('## By lesson', '', '| Lesson | Sentences | Parse | Rate |', '| --- | --- | --- | --- |');
  for (const l of report.lessons) {
    lines.push(`| ${l.number ? `${l.number}. ${l.id}` : l.title ?? l.id} | ${l.total} | ${l.parsed} | ${l.total ? pct(l.parsed, l.total) : 'no Hao-shuo-de sentences'} |`);
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

  if (report.late.length) {
    // the early-patterns rule: a sentence that needs a pattern the book teaches later (or never in a lesson)
    lines.push('## Uses a pattern before it is taught', '');
    lines.push(
      `${report.late.length} lesson sentence${report.late.length === 1 ? '' : 's'} parse${report.late.length === 1 ? 's' : ''} only with a pattern taught in a later lesson (or in none). ` +
        'Either the lesson should teach that pattern earlier, or the sentence should be reworded.',
      '',
    );
    const byNeed = new Map();
    for (const it of report.late) {
      const key = it.late.map((p) => `${p.id} (${p.lesson ? `lesson ${p.lesson}` : 'no lesson'})`).join(' + ');
      if (!byNeed.has(key)) byNeed.set(key, []);
      byNeed.get(key).push(it);
    }
    for (const [key, items] of [...byNeed.entries()].sort((a, b) => b[1].length - a[1].length)) {
      lines.push(`### needs ${key} (${items.length})`, '');
      for (const it of items) lines.push(`- ${say(it.piece.text)} (${where(it)})`);
      lines.push('');
    }
  }

  if (report.untaught.length) {
    lines.push('## Patterns no lesson teaches', '');
    lines.push(
      'These patterns have no `taught` lesson and no coverage item to take one from. The texts after the lessons use them (counted by the first reading), so the grammar needs them, but the book does not teach them.',
      '',
    );
    for (const id of report.untaught) lines.push(`- ${id}: in ${report.byPattern.get(id)} sentence${report.byPattern.get(id) === 1 ? '' : 's'}`);
    lines.push('');
  }

  lines.push('## Read more than one way', '');
  if (!report.ambiguous.length) lines.push('None.', '');
  else {
    // how many sentences have how many readings, then the worst ones
    const buckets = [
      ['2 to 5 readings', (n) => n <= 5],
      ['6 to 20 readings', (n) => n <= 20],
      ['more than 20 readings', () => true],
    ];
    const seen = new Set();
    const counts = buckets.map(([label, fits]) => {
      const here = report.ambiguous.filter((it) => !seen.has(it) && fits(it.piece.treeCount));
      here.forEach((it) => seen.add(it));
      return [label, here.length];
    });
    const one = report.parsed - report.ambiguous.length;
    lines.push(`${one} sentences read one way; ${counts.map(([label, n]) => `${n} with ${label}`).join(', ')}. The ten with the most readings (the parser shows the first):`, '');
    const worst = [...report.ambiguous].sort((a, b) => b.piece.treeCount - a.piece.treeCount).slice(0, 10);
    for (const it of worst) lines.push(`- ${say(it.piece.text)} (${where(it)}): ${it.piece.treeCount > 20 ? 'many' : it.piece.treeCount} readings, e.g. ${bracket(it.piece)}`);
    lines.push('');
  }
  return lines.join('\n');
}
