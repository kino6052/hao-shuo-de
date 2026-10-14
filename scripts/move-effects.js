// "What if this moved in the lesson order?" (KB_PLAN.md K20). A lesson to another place, a module to
// another lesson, or a pattern's `taught` to another lesson. Nothing is changed: the move is made in
// memory, and the two rules about order are checked before and after:
//
//   early words     a lesson may only use words introduced in that lesson or an earlier one
//                   (scripts/early-words.js, the gate check-early-words)
//   early patterns  a sentence in lesson N may only use patterns taught in lessons 1..N
//                   (the parse report's "uses a pattern before it is taught")
//
//   node scripts/kb.js move questions 6                      lesson "questions" becomes lesson 6
//   node scripts/kb.js move words-and-sentences/not pointing  the module "not" goes to the end of "pointing"
//   node scripts/kb.js move pattern:bu-shi-not pointing      the pattern is taught in "pointing" instead
//
// applyMove(lessons, patterns, spec)           -> { lessons, patterns, what } the book as it would be
// moveEffects({ kb, lessons }, spec)           -> the report: words and patterns used early, today and after
// parseSpec(what, where, { lessons, patterns }) -> spec, from the words typed on the command line
// renderMove(report, words, { limit })         -> text
//
// `lessons` are the assembled lessons (scripts/lessons.js loadLessons) for the words; the KB's own,
// shorter copy of them is moved the same way for the patterns.

import { createKb } from '../src/lib/kb/kb.js';
import { parseReport, sayText } from '../src/lib/kb/parse-report.js';
import { findEarlyWords } from './early-words.js';

// -- the move ---------------------------------------------------------------------------------

// -> what the words on the command line mean: { lesson, to } | { module, to } | { pattern, to }
export function parseSpec(what, where, { lessons, patterns = [] }) {
  if (!what || where === undefined) throw new Error('usage: kb move <lesson | lesson/module | pattern:id> <where>');
  const ids = new Set(lessons.map((l) => l.id));
  if (what.startsWith('pattern:') || (!ids.has(what) && patterns.some((p) => p.id === what))) return { pattern: what.replace(/^pattern:/, ''), to: where };
  if (ids.has(what)) return { lesson: what, to: where };
  if (what.includes('/')) return { module: what, to: where };
  throw new Error(`"${what}" is not a lesson, a lesson/module or a pattern`);
}

const byNumber = (lessons) => [...lessons].sort((a, b) => a.number - b.number);

// -> { lessons, patterns, what } the book with the move made; the arguments are not changed
export function applyMove(lessons, patterns, spec) {
  const find = (id) => {
    const l = lessons.find((x) => x.id === id);
    if (!l) throw new Error(`no lesson "${id}"`);
    return l;
  };

  if (spec.lesson) {
    const moving = find(spec.lesson);
    const pos = Number(spec.to);
    if (!Number.isInteger(pos) || pos < 1 || pos > lessons.length) throw new Error(`a lesson goes to a place from 1 to ${lessons.length}, not "${spec.to}"`);
    const order = byNumber(lessons).filter((l) => l.id !== moving.id);
    order.splice(pos - 1, 0, moving);
    return { lessons: order.map((l, i) => ({ ...l, number: i + 1 })), patterns, what: `lesson ${moving.id} from place ${moving.number} to place ${pos}` };
  }

  if (spec.module) {
    const [from, module] = spec.module.split('/');
    const src = find(from);
    const dst = find(spec.to);
    if (!module) throw new Error(`"${spec.module}" should be lesson/module`);
    if (src.id === dst.id) throw new Error(`the module ${spec.module} is already in ${dst.id}`);
    const moving = src.entries.filter((e) => (e.module ?? '') === module);
    if (!moving.length) throw new Error(`lesson ${src.id} has no module "${module}"`);
    const out = lessons.map((l) => (l.id === src.id ? { ...l, entries: l.entries.filter((e) => (e.module ?? '') !== module) } : l.id === dst.id ? { ...l, entries: [...l.entries, ...moving] } : l));
    // a pattern taught by the module is taught where the module is now
    const moved = patterns.map((p) => (p.taught === spec.module ? { ...p, taught: `${dst.id}/${module}` } : p));
    return { lessons: out, patterns: moved, what: `module ${spec.module} (${moving.length} entries) to the end of ${dst.id}` };
  }

  if (spec.pattern) {
    if (!patterns.some((p) => p.id === spec.pattern)) throw new Error(`no pattern "${spec.pattern}"`);
    find(String(spec.to).split('/')[0]);
    return { lessons, patterns: patterns.map((p) => (p.id === spec.pattern ? { ...p, taught: spec.to } : p)), what: `pattern ${spec.pattern} taught in ${spec.to}` };
  }

  throw new Error('a move is { lesson, to }, { module, to } or { pattern, to }');
}

// -- the two rules, before and after -----------------------------------------------------------

// -> the words used before their lesson: [{ lesson, key, word, home, text }]
export const earlyWords = (lessons, dictionary) =>
  findEarlyWords(byNumber(lessons), dictionary)
    .problems.filter((p) => p.kind === 'early')
    .map(({ lesson, key, word, home, text }) => ({ lesson, key, word, home, text }));

// -> the parse report of the lessons as the KB has them
function patternReport(kb, lessons) {
  return parseReport({
    sentences: kb.facts.sentences,
    parseText: kb.parse,
    parseLesson: kb.parseUpTo,
    patternLesson: kb.patternLesson,
    lessons: lessons.map(({ id, number }) => ({ id, number })),
  });
}

// -> [{ lesson, key, text, needs: [{ id, lesson }] }] the sentences that use a pattern before it is taught
const lateOf = (report) => report.late.map((it) => ({ lesson: it.lesson, key: it.key, text: it.piece?.text ?? '', needs: it.late }));

const diff = (before, after, keyOf) => {
  const had = new Set(before.map(keyOf));
  const has = new Set(after.map(keyOf));
  return { added: after.filter((x) => !had.has(keyOf(x))), fixed: before.filter((x) => !has.has(keyOf(x))) };
};

// The book as it is does not change between moves, so its two reports (the slow part: every lesson sentence is parsed) are made once per KB.
const baselines = new WeakMap();
function baseline(kb, lessons) {
  const hit = baselines.get(kb);
  if (hit?.lessons === lessons) return hit;
  const made = { lessons, words: earlyWords(lessons, kb.source.words), report: patternReport(kb, kb.source.lessons) };
  baselines.set(kb, made);
  return made;
}

// -> the report. `kb` is the KB as it is; `lessons` the assembled lessons (for the words).
export async function moveEffects({ kb, lessons }, spec) {
  const source = kb.source;
  const dictionary = source.words;
  const moved = applyMove(lessons, source.patterns ?? [], spec);
  // the KB's own lessons move the same way; its patterns are the ones whose `taught` may have changed
  const movedKb = applyMove(source.lessons, source.patterns ?? [], spec);
  const after = createKb({ ...source, lessons: movedKb.lessons, patterns: movedKb.patterns });

  const base = baseline(kb, lessons);
  const wordsBefore = base.words;
  const wordsAfter = earlyWords(moved.lessons, dictionary);
  const before = base.report;
  const now = patternReport(after, movedKb.lessons);
  const lateBefore = lateOf(before);
  const lateAfter = lateOf(now);

  return {
    what: moved.what,
    words: { before: wordsBefore.length, after: wordsAfter.length, ...diff(wordsBefore, wordsAfter, (x) => `${x.lesson}|${x.key}|${x.word}`) },
    patterns: {
      before: lateBefore.length,
      after: lateAfter.length,
      parsedBefore: before.parsed,
      parsedAfter: now.parsed,
      total: now.total,
      ...diff(lateBefore, lateAfter, (x) => `${x.lesson}|${x.key}|${x.text}`),
    },
  };
}

// -- as text -----------------------------------------------------------------------------------

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

// -> text for the author
export function renderMove(report, words = {}, { limit = 15 } = {}) {
  const out = [`Move: ${report.what}`, ''];
  const w = report.words;
  out.push(`Uses of a word before the lesson that teaches it: ${w.before} today, ${w.after} after (${w.added.length} new, ${w.fixed.length} no longer).`);
  const perWord = (uses, label) => {
    const groups = new Map();
    for (const x of uses) (groups.get(x.word) ?? groups.set(x.word, { word: x.word, home: x.home, uses: [] }).get(x.word)).uses.push(x);
    const list = [...groups.values()].sort((a, b) => b.uses.length - a.uses.length);
    for (const g of list.slice(0, limit)) out.push(`  ${label}  ${g.word}${g.home ? ` (taught in lesson ${g.home})` : ''}: ${plural(g.uses.length, 'use')}, first in ${g.uses[0].lesson} ${g.uses[0].key}`);
    if (list.length > limit) out.push(`  … and ${list.length - limit} more word${list.length - limit === 1 ? '' : 's'}`);
  };
  perWord(w.added, 'new      ');
  perWord(w.fixed, 'no longer');

  const p = report.patterns;
  out.push('', `Sentences that use a pattern before it is taught: ${p.before} today, ${p.after} after (${p.added.length} new, ${p.fixed.length} no longer). Lesson sentences that parse: ${p.parsedBefore} -> ${p.parsedAfter} of ${p.total}.`);
  const needs = (x) => x.needs.map((n) => `${n.id} (${n.lesson ? `lesson ${n.lesson}` : 'no lesson'})`).join(' + ');
  for (const x of p.added.slice(0, limit)) out.push(`  new        ${x.lesson} ${x.key}: ${sayText(x.text, words)}  needs ${needs(x)}`);
  if (p.added.length > limit) out.push(`  … and ${p.added.length - limit} more`);
  for (const x of p.fixed.slice(0, limit)) out.push(`  no longer  ${x.lesson} ${x.key}: ${sayText(x.text, words)}`);
  if (p.fixed.length > limit) out.push(`  … and ${p.fixed.length - limit} more`);

  if (!w.added.length && !p.added.length) out.push('', w.fixed.length || p.fixed.length ? 'Nothing new is used early.' : 'Nothing is used early that is not used early today.');
  return out.join('\n');
}
