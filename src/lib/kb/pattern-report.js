// Minimal patterns (KB_PLAN.md phase 4): which grammar patterns the book and the dictionary really need, and in
// what order they are taught. Pure; it never changes data. Four measures:
//
//   cover the core   the smallest set of patterns that carries every grammar item of the coverage list
//                    (src/lib/kb/set-cover.js); which patterns are in every smallest set, which can swap, which are spare
//   needed           for every pattern, the sentences (of the lessons and the other texts) that stop parsing when the
//                    pattern is taken out: the parser is run again without it on the sentences that read only through it
//   combos           the examples of a pattern that still parse without it, and by which patterns; a pattern whose
//                    examples all still parse is built from the others
//   learner load     the patterns each lesson teaches, and the patterns an example of a pattern needs that are taught
//                    after it (or never)
//
//   patternReport({ patterns, words, composites, sentences, lessonOf, coverage, lessons, deadlineMs, onStep })
//     sentences  [{ text, where }]: one Hao-shuo-de sentence each, as word refs ({{word:wo3}} ...)
//     lessonOf   (patternId) -> the lesson number that teaches it, or undefined
//     coverage   the coverage groups (src/data/coverage); the items 'grammar:*' are covered
//     lessons    [{ id, number }] in teaching order
//   -> { totals, patterns: [...], cover, load, without }   (see the code for each field)
//   renderPatternReport(report, { limit }) -> text
//   bookSentences(sentences, words) -> [{ text, where }] the sentences of the lessons and the other texts, once each

import { createParser, patternsOf } from '../grammar/parser.js';
import { pinyinToRefs } from '../pinyin-refs.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';
import { smallestCover } from './set-cover.js';
import { splitSentences } from './parse.js';

const BOOK_KINDS = new Set(['lesson_example', 'lesson_answer', 'lesson_inline', 'composite_example', 'story', 'phrase_book', 'extra_inline']);
const TREES = 200;

// -> the sentences of the book, as word refs, once each (the same sentence in two places is one)
export function bookSentences(sentences, words) {
  const seen = new Set();
  const out = [];
  for (const s of sentences) {
    if (!BOOK_KINDS.has(s.kind)) continue;
    let refs;
    try {
      refs = String(s.pinyin).includes('{{') ? s.pinyin : pinyinToRefs(s.pinyin, words);
    } catch {
      continue;
    }
    for (const text of splitSentences(refs)) {
      if (seen.has(text)) continue;
      seen.add(text);
      out.push({ text, where: `${s.lesson ?? ''}${s.module || s.composite ? `/${s.module || s.composite}` : ''}`.replace(/^\//, '') || s.kind });
    }
  }
  return out;
}

// the reading sets of a parse: one array of pattern ids per tree; `all` are the patterns every reading uses
function readings(parser, text) {
  const r = parser.parse(text, { maxTrees: TREES });
  if (!r.ok) return null;
  const sets = r.trees.map((t) => patternsOf(t));
  const all = sets.reduce((acc, s) => acc.filter((p) => s.includes(p)), sets[0] ?? []);
  return { sets, all, problems: r.problems.length, tokens: r.tokens.length };
}

export function patternReport({ patterns, words, composites = [], sentences, lessonOf = () => undefined, coverage = [], lessons = [], deadlineMs = Infinity, onStep = () => {} }) {
  const started = Date.now();
  const full = createParser({ patterns, words, composites });

  // 1. how every sentence reads with all the patterns
  const book = [];
  let notParsed = 0;
  let english = 0;
  for (const s of sentences) {
    const r = readings(full, s.text);
    if (!r) notParsed++;
    else if (r.problems * 2 > r.tokens) english++;
    else book.push({ ...s, all: new Set(r.all), first: r.sets[0] ?? [] });
  }
  const examples = [];
  for (const p of patterns) {
    for (const [pinyin] of p.examples ?? []) {
      let text;
      try {
        text = pinyinToRefs(pinyin, words);
      } catch {
        continue;
      }
      const r = readings(full, text);
      examples.push({ owner: p.id, pinyin, text, sets: r?.sets ?? [] });
    }
  }

  // 2. every pattern taken out in turn
  const rows = new Map();
  let unchecked = 0;
  for (const p of patterns) {
    onStep(p.id);
    const row = { id: p.id, lesson: lessonOf(p.id) ?? null, taught: p.taught ?? null, covers: p.covers ?? [], rules: p.rules.length, examples: (p.examples ?? []).length, first: book.filter((s) => s.first.includes(p.id)).length };
    const mine = examples.filter((e) => e.owner === p.id);
    const candidates = book.filter((s) => s.all.has(p.id));
    if (Date.now() - started > deadlineMs) {
      row.unchecked = true;
      unchecked++;
      row.needed = { total: candidates.length ? null : 0, where: [] };
      row.ownExamples = { total: mine.length, still: [] };
      rows.set(p.id, row);
      continue;
    }
    const without = createParser({ patterns: patterns.filter((x) => x.id !== p.id), words, composites });
    const lost = candidates.filter((s) => !without.parse(s.text, { maxTrees: 1 }).ok);
    row.needed = { total: lost.length, where: lost.slice(0, 3).map((s) => ({ text: s.text, where: s.where })) };
    row.ownExamples = {
      total: mine.length,
      still: mine
        .map((e) => {
          const r = without.parse(e.text, { maxTrees: 1 });
          return r.ok ? { pinyin: e.pinyin, by: patternsOf(r.trees[0]) } : null;
        })
        .filter(Boolean),
    };
    rows.set(p.id, row);
  }

  // 3. the smallest cover of the grammar items
  const items = coverage.flatMap((g) => g.items.map((i) => `${g.key}:${i.key}`)).filter((i) => i.startsWith('grammar:'));
  const cover = smallestCover({ items, carriers: Object.fromEntries(patterns.map((p) => [p.id, p.covers ?? []])) });
  for (const [role, ids] of [['forced', cover.forced], ['swappable', cover.swappable], ['extra', cover.extra]]) for (const id of ids) rows.get(id).cover = role;

  // 4. learner load: what the examples of a pattern lean on
  for (const p of patterns) {
    const row = rows.get(p.id);
    const at = row.lesson;
    const leans = new Map(); // id -> lesson number or null
    for (const e of examples.filter((x) => x.owner === p.id)) {
      // the reading that leans on the fewest patterns taught after this one
      let best = null;
      for (const set of e.sets) {
        if (!set.includes(p.id)) continue;
        const late = set.filter((id) => id !== p.id && at != null && (lessonOf(id) ?? Infinity) > at);
        if (!best || late.length < best.late.length || (late.length === best.late.length && set.length < best.set.length)) best = { set, late };
      }
      if (best) for (const id of best.set) if (id !== p.id) leans.set(id, lessonOf(id) ?? null);
    }
    row.buildsOn = [...leans].map(([id, lesson]) => ({ id, lesson })).sort((a, b) => (a.lesson ?? 99) - (b.lesson ?? 99) || (a.id < b.id ? -1 : 1));
    row.later = at == null ? [] : row.buildsOn.filter((b) => (b.lesson ?? Infinity) > at);
  }

  const list = [...rows.values()];
  const load = {
    lessons: lessons.map((l) => ({ id: l.id, number: l.number, patterns: list.filter((r) => r.lesson === l.number).map((r) => r.id) })),
    noLesson: list.filter((r) => r.lesson == null).map((r) => r.id),
    later: list.filter((r) => r.later.length).map((r) => ({ id: r.id, lesson: r.lesson, needs: r.later })),
  };
  return {
    totals: {
      patterns: patterns.length,
      sentences: sentences.length,
      checked: book.length,
      notParsed,
      english,
      unchecked,
      withLesson: list.filter((r) => r.lesson != null).length,
      carrying: list.filter((r) => r.covers.length).length,
    },
    patterns: list,
    cover,
    load,
    without: { have: patterns.filter((p) => p.without).length, total: patterns.length },
  };
}

// -- the text ---------------------------------------------------------------------------------------

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const pinOf = (words) => (t) => replaceWordRefs(t, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export function renderPatternReport(report, words = {}, { limit = 12 } = {}) {
  const pin = pinOf(words);
  const t = report.totals;
  const rows = report.patterns;
  const out = [`Patterns: ${t.patterns} (${t.carrying} carry a grammar item, ${t.withLesson} have a lesson). ${plural(t.checked, 'sentence')} of the book checked${t.notParsed ? `; ${t.notParsed} do not parse at all and are left out` : ''}${t.english ? `; ${t.english} are English text` : ''}.`];
  if (t.unchecked) out.push(`${plural(t.unchecked, 'pattern')} not checked: the time ran out.`);

  const c = report.cover;
  out.push('', 'Cover the core', `  The grammar items need at least ${plural(c.size, 'pattern')}. ${c.forced.length} ${c.forced.length === 1 ? 'is' : 'are'} in every smallest set (nothing else can carry what ${c.forced.length === 1 ? 'it carries' : 'they carry'}), ${c.swappable.length} can swap with another, ${c.extra.length} that carry an item ${c.extra.length === 1 ? 'is' : 'are'} spare.`);
  if (c.uncovered.length) out.push(`  No pattern carries: ${c.uncovered.map((i) => i.replace('grammar:', '')).join(', ')}.`);
  const spare = rows.filter((r) => r.cover === 'extra');
  if (spare.length) out.push(`  Spare (the items they carry are also carried by a pattern in a smallest set): ${spare.map((r) => r.id).join(', ')}.`);

  const needed = rows.filter((r) => r.needed.total).sort((a, b) => a.needed.total - b.needed.total || (a.id < b.id ? -1 : 1));
  const unneeded = rows.filter((r) => r.needed.total === 0);
  out.push('', 'Needed by the book', `  ${needed.length} patterns have a sentence that stops parsing without them; ${unneeded.length} have none.`);
  const few = needed.filter((r) => r.needed.total <= 2);
  if (few.length) {
    out.push(`  Needed by one or two sentences only (${few.length}):`);
    for (const r of few.slice(0, limit)) out.push(`    ${r.id}: ${r.needed.where.map((w) => `"${pin(w.text)}" (${w.where})`).join('; ')}`);
    if (few.length > limit) out.push(`    … and ${few.length - limit} more`);
  }
  const held = unneeded.filter((r) => r.cover === 'forced' || r.cover === 'swappable');
  const redundant = unneeded.filter((r) => !held.includes(r));
  out.push(`  Needed by no sentence, and not needed to carry a grammar item either (${redundant.length}; the number is the sentences whose first reading uses it): ${redundant.map((r) => `${r.id} (${r.first})`).join(', ') || 'none'}.`);
  if (held.length) out.push(`  Needed by no sentence, but a grammar item leans on them (${held.length}): ${held.map((r) => `${r.id}${r.cover === 'swappable' ? ' (another can stand in)' : ''}`).join(', ')}.`);

  const combos = rows.filter((r) => r.ownExamples.total && r.ownExamples.still.length === r.ownExamples.total);
  out.push('', 'Combos', `  ${combos.length} patterns have every example still parsing without them (they are put together from other patterns).`);
  for (const r of combos.slice(0, limit)) out.push(`    ${r.id}: ${r.ownExamples.still.slice(0, 2).map((e) => `"${e.pinyin}" by ${e.by.join(' + ')}`).join('; ')}`);
  if (combos.length > limit) out.push(`    … and ${combos.length - limit} more`);
  const some = rows.filter((r) => r.ownExamples.still.length && r.ownExamples.still.length < r.ownExamples.total);
  if (some.length) out.push(`  ${some.length} more have some examples that still parse without them: ${some.slice(0, limit).map((r) => `${r.id} (${r.ownExamples.still.length} of ${r.ownExamples.total})`).join(', ')}${some.length > limit ? ', …' : ''}.`);

  out.push('', 'Say it without', `  ${report.without.have} of ${report.without.total} patterns say how to do without them (the field \`without\`). The sentences that need a pattern are listed above.`);

  const l = report.load;
  out.push('', 'Learner load', `  New patterns per lesson: ${l.lessons.filter((x) => x.patterns.length).map((x) => `${x.number}:${x.patterns.length}`).join(' ')}. ${plural(l.noLesson.length, 'pattern')} with no lesson.`);
  out.push(`  ${plural(l.later.length, 'pattern')} whose examples lean on a pattern taught after them or never${l.later.length ? ':' : '.'}`);
  for (const r of l.later.slice(0, limit)) out.push(`    ${r.id} (lesson ${r.lesson}) needs ${r.needs.map((n) => `${n.id} (${n.lesson ? `lesson ${n.lesson}` : 'no lesson'})`).join(', ')}`);
  if (l.later.length > limit) out.push(`    … and ${l.later.length - limit} more`);
  return out.join('\n');
}
