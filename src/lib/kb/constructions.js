// kb_constructions (TRANSLATOR_PLAN.md C3): an English sentence -> the English ways of saying in it (so, because, if,
// than, the one who, on the way, still, already, will, did …) and, for each, the grammar patterns and the grammar-word
// entries that say it in Hao-shuo-de: a pattern with its lesson, template and first example, an entry with its own
// form (as kb_lookup gives it). The table is src/data/maps/english-constructions.ts (`source.maps.constructions`). The
// matching looks at the words only, never at the meaning, so a row is a hint and the writer picks. With no text: the
// whole table, and the patterns no row names yet.
//
//   matchConstructions(rows, text) -> [{ row, found: ['because', ...] }], in the order they first show
//   askConstructions(kb, { text, id }) -> { data, text }

import { replaceWordRefs, refTerm } from '../word-refs.js';
import { formOf } from './lookup.js';

// words that end like a past form or an -ing form, or take 's, without being one
const NOT = {
  ed: new Set(['need', 'needs', 'feed', 'seed', 'speed', 'weed', 'greed', 'breed', 'bleed', 'indeed', 'hundred', 'shed', 'sacred', 'naked']),
  ing: new Set(['thing', 'things', 'something', 'nothing', 'anything', 'everything', 'morning', 'evening', 'during', 'bring', 'spring', 'string', 'ceiling', 'darling']),
  "'s": new Set(["it's", "that's", "there's", "what's", "he's", "she's", "who's", "let's", "here's", "where's", "how's"]),
};

const sentencesOf = (text) => String(text ?? '').toLowerCase().replace(/[’‘]/g, "'").match(/[^.!?]+[.!?]*/g) ?? [];
const tokensOf = (sentence) => sentence.match(/[a-z0-9]+(?:'[a-z]+)?|[,?]/g) ?? [];

// one token of a match: a word, `*` (any word), `*ed` (a word with that ending), or `a|b`
function tokenTest(spec) {
  const tests = spec.split('|').map((a) => {
    if (a === '*') return (w) => /^[a-z0-9]/.test(w);
    if (a.startsWith('*')) {
      const end = a.slice(1);
      const before = end.startsWith("'") ? 1 : 2; // i'll, but not "red" for *ed
      return (w) => w.length >= end.length + before && w.endsWith(end) && !NOT[end]?.has(w);
    }
    return (w) => w === a;
  });
  return (w) => tests.some((t) => t(w));
}

function compile(match) {
  const parts = match.trim().split(/\s+/);
  const anchored = parts[0].startsWith('^');
  if (anchored) parts[0] = parts[0].slice(1);
  return { anchored, tests: parts.map(tokenTest) };
}

const compiled = new WeakMap();
const testsOf = (row) => {
  if (!compiled.has(row)) compiled.set(row, row.match.map(compile));
  return compiled.get(row);
};

export function matchConstructions(rows, text) {
  const sentences = sentencesOf(text).map(tokensOf);
  const hits = [];
  for (const row of rows ?? []) {
    let first = Infinity;
    const found = new Set();
    for (const { anchored, tests } of testsOf(row)) {
      sentences.forEach((tokens, si) => {
        for (let i = 0; i + tests.length <= tokens.length; i += 1) {
          if (anchored && i > 0) break;
          if (tests.every((t, k) => t(tokens[i + k]))) {
            found.add(tokens.slice(i, i + tests.length).join(' ').replace(/ ([,?])/g, '$1'));
            first = Math.min(first, si * 10000 + i);
          }
        }
      });
    }
    if (found.size) hits.push({ row, found: [...found], first });
  }
  return hits.sort((a, b) => a.first - b.first).map(({ row, found }) => ({ row, found }));
}

const say = (words, form) => replaceWordRefs(form ?? '', (id, kind) => refTerm(words[id]?.term ?? id, kind));

function detail(kb, row) {
  const words = kb.source.words;
  const byId = new Map((kb.source.patterns ?? []).map((p) => [p.id, p]));
  const numberOf = new Map(kb.lessons().map((l) => [l.id, l.number]));
  const missing = [];
  const patterns = row.patterns.flatMap((id) => {
    const p = byId.get(id);
    if (!p) return missing.push(`pattern ${id} (not found)`), [];
    const [hsd, en] = p.examples?.[0] ?? [];
    return [{ id, lesson: kb.patternLesson(id) ?? null, template: { hsd: say(words, p.template?.hsd), eng: p.template?.eng ?? '' }, example: hsd ? { hsd: say(words, hsd), en } : null }];
  });
  const entries = row.entries.flatMap((zh) => {
    const f = formOf(kb, zh);
    if (!f) return missing.push(`entry ${zh} (no Hao-shuo-de form)`), [];
    return [{ zh, ...f, lesson: f.lesson === null ? null : numberOf.get(f.lesson) ?? null }];
  });
  return { id: row.id, en: row.en, note: row.note ?? null, proposed: !!row.proposed, patterns, entries, missing };
}

const lessonText = (n) => (n === null || n === undefined ? 'no lesson' : `lesson ${n}`);

function rowLines(r, found) {
  const out = [`${r.en}${found ? `   [found: ${found.map((f) => `"${f}"`).join(', ')}]` : ''}${r.proposed ? '' : ' (confirmed)'}`];
  for (const p of r.patterns) out.push(`  pattern ${p.id} (${lessonText(p.lesson)}): ${p.template.eng}${p.example ? ` -- e.g. ${p.example.hsd} "${p.example.en}"` : ''}`);
  for (const e of r.entries) out.push(`  entry ${e.zh}: ${e.pinyin} (${e.words} word(s), ${lessonText(e.lesson)})`);
  if (r.note) out.push(`  note: ${r.note}`);
  if (r.missing.length) out.push(`  not usable: ${r.missing.join(', ')}`);
  return out;
}

export function askConstructions(kb, { text, id } = {}) {
  const rows = kb.source.maps?.constructions ?? [];
  if (id) {
    const row = rows.find((r) => r.id === id);
    if (!row) throw new Error(`no construction "${id}"; the ids are: ${rows.map((r) => r.id).join(', ')}`);
    const d = detail(kb, row);
    return { data: { rows: [d] }, text: rowLines(d).join('\n') };
  }
  if (text) {
    const hits = matchConstructions(rows, text).map(({ row, found }) => ({ ...detail(kb, row), found }));
    const out = [`${hits.length} English way(s) of saying found (a hint from the words only; pick what the sentence means)`];
    for (const h of hits) out.push('', ...rowLines(h, h.found));
    return { data: { text, rows: hits }, text: out.join('\n') };
  }
  // the whole table, and what it leaves out
  const all = rows.map((r) => detail(kb, r));
  const named = new Set(rows.flatMap((r) => r.patterns));
  const unnamed = (kb.source.patterns ?? []).map((p) => p.id).filter((pid) => !named.has(pid));
  const out = [`${rows.length} English ways of saying, ${rows.filter((r) => r.proposed).length} still proposed`];
  for (const r of all) out.push(`${r.id}: ${r.en} -> ${[...r.patterns.map((p) => p.id), ...r.entries.map((e) => e.zh)].join(', ') || 'nothing yet'}${r.missing.length ? ` [not usable: ${r.missing.join(', ')}]` : ''}`);
  out.push('', `Patterns no row names (${unnamed.length}): ${unnamed.join(', ') || 'none'}`);
  return { data: { rows: all, unnamed }, text: out.join('\n') };
}
