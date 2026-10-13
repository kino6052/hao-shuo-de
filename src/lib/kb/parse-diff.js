// "What did my edit do to the parses?" (KB_PLAN.md K20). A snapshot is how every sentence of a parse
// report parses; two snapshots (the repo at a git ref, and the files as they are) are compared by
// sentence. It covers an edited rule, a pattern moved to another lesson, and a word that changed
// class: all of them show up as sentences that start or stop parsing, or read another way.
// Pure; scripts/kb.js parse-snapshot makes a snapshot, parse-diff compares.
//
//   snapshotOf(report)               -> { [key]: { where, text, status, readings, patterns, first } }
//                                       status: 'ok' | 'late' (parses only with a pattern taught later) | 'fails'
//   diffSnapshots(before, after)     -> { starts, stops, moved, fewer, more, changed, added, gone, same }
//   renderParseDiff(diff, words, { limit, title })

import { bracket } from '../grammar/parser.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';

// -> the snapshot of a parse report (parseReport in parse-report.js), trees still in it
export function snapshotOf(report) {
  const out = {};
  for (const lesson of report.lessons) {
    for (const it of lesson.items) {
      const key = `${it.lesson}|${it.module}|${it.key}|${it.piece?.text ?? it.error ?? ''}`;
      out[key] = {
        where: `${it.lesson}${it.module ? `/${it.module}` : ''} ${it.key ?? ''}`.trim(),
        text: it.piece?.text ?? '',
        status: it.piece?.ok ? 'ok' : it.late ? 'late' : 'fails',
        readings: it.piece?.ok ? it.piece.treeCount : 0,
        patterns: it.piece?.ok ? it.piece.patterns : [],
        first: it.piece?.ok ? bracket(it.piece, 0) : '',
      };
    }
  }
  return out;
}

const bucket = (n) => (n <= 1 ? '1' : n <= 5 ? '2-5' : n <= 20 ? '6-20' : '20+');

// -> sentences by what happened to them
//    starts   did not parse, now parses          stops    parsed, now does not (or only with a later pattern)
//    moved    still does not parse, but another way (fails <-> late)
//    fewer / more   parses both times, with fewer / more readings (by bucket: 1, 2-5, 6-20, 20+)
//    changed  parses both times, the first reading is another one
//    added / gone   sentences only in one of the two
export function diffSnapshots(before, after) {
  const out = { starts: [], stops: [], moved: [], fewer: [], more: [], changed: [], added: [], gone: [], same: 0 };
  for (const [key, a] of Object.entries(after)) {
    const b = before[key];
    if (!b) {
      out.added.push({ key, ...a });
    } else if (b.status !== 'ok' && a.status === 'ok') out.starts.push({ key, before: b, ...a });
    else if (b.status === 'ok' && a.status !== 'ok') out.stops.push({ key, before: b, ...a });
    else if (b.status !== a.status) out.moved.push({ key, before: b, ...a });
    else if (a.status === 'ok' && bucket(a.readings) !== bucket(b.readings)) (a.readings < b.readings ? out.fewer : out.more).push({ key, before: b, ...a });
    else if (a.status === 'ok' && a.first !== b.first) out.changed.push({ key, before: b, ...a });
    else out.same++;
  }
  for (const [key, b] of Object.entries(before)) if (!after[key]) out.gone.push({ key, ...b });
  return out;
}

// -> true when nothing parses differently
export const unchanged = (d) => !['starts', 'stops', 'moved', 'fewer', 'more', 'changed', 'added', 'gone'].some((k) => d[k].length);

const say = (words) => (t) => replaceWordRefs(t, (id, kind) => refTerm(words[id]?.term ?? id, kind));

// -> text for the author
export function renderParseDiff(d, words = {}, { limit = 12, title = 'Parse changes' } = {}) {
  const pin = say(words);
  const out = [title, ''];
  const total = ['starts', 'stops', 'moved', 'fewer', 'more', 'changed'].reduce((n, k) => n + d[k].length, 0);
  if (unchanged(d)) return [...out, `No sentence parses differently (${d.same} compared).`].join('\n');
  out.push(`${total} of ${total + d.same} sentences parse differently${d.added.length || d.gone.length ? `; ${d.added.length} are new and ${d.gone.length} gone` : ''}.`);
  const section = (name, rows, line) => {
    if (!rows.length) return;
    out.push('', `${name} (${rows.length})`);
    for (const r of rows.slice(0, limit)) out.push(...line(r).map((l, i) => (i ? `      ${l}` : `  ${l}`)));
    if (rows.length > limit) out.push(`  … and ${rows.length - limit} more`);
  };
  const text = (r) => `${pin(r.text)}  (${r.where})`;
  section('Now parse', d.starts, (r) => [text(r), `by ${r.patterns.join(', ')}`]);
  section('Stop parsing', d.stops, (r) => [text(r), r.status === 'late' ? 'only with a pattern taught later' : 'no pattern fits any more', `it was read by ${r.before.patterns.join(', ')}`]);
  section('Still do not parse, another way', d.moved, (r) => [text(r), `${r.before.status} -> ${r.status}`]);
  section('Fewer readings', d.fewer, (r) => [text(r), `${r.before.readings} -> ${r.readings}`]);
  section('More readings', d.more, (r) => [text(r), `${r.before.readings} -> ${r.readings}`]);
  section('First reading changed', d.changed, (r) => [text(r), `was  ${pin(r.before.first)}`, `now  ${pin(r.first)}`]);
  return out.join('\n');
}
