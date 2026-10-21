// Build tags of the composites (AKINATOR_PLAN.md A5): what each composite's description is made from.
// "Does it use bǎ? does it use doubling? which chapter's logic?" The tags are worked out from the description
// every time (never stored in the 2,000 files), so a word that moves cannot leave a stale tag. Pure.
//
//   buildModel({ composites, words, patterns, lessons, parse, wordLesson, patternLesson }) -> model
//     composites     the assembled entries (hsd: the descriptions joined with " / ")
//     patterns       the grammar patterns, with their `tags` (src/lib/grammar-tags.ts)
//     lessons        [{ id, number }] in teaching order
//     parse(form)    the parse of one description (parser.parse(form, { maxTrees: 1, forms: true }))
//     parseAt(n)     the same function with only the patterns taught up to lesson n (kb.parseUpTo): the reading a learner
//                    has at lesson n. Without it the one full parse is used.
//     wordLesson(id) the number of the lesson that first teaches a word, or undefined
//     patternLesson(id) the same for a pattern
//   model.rows           one row per composite: { zh, py, en, rank, fit, forms, tags, reach }
//   model.row(name)      a composite by hanzi, pinyin (with or without tones) or English gloss
//   model.members(tags, { upTo })   the rows under all the tags, and read by lesson `upTo` at the latest
//   model.tagCounts()    [{ tag, count }] most used first
//
// A tag has a family before the colon:
//   form:chain | phrase | unread | none   a hyphen chain of words, a description the patterns read, one they cannot read yet, no description
//   made:built | spelled | unknown        the description builds the meaning, or spells Mandarin's own word (K9)
//   pattern:<id>                           a grammar pattern the description's parse uses (bǎ is pattern:ba-handle, a doubled verb pattern:doubled-verb)
//   theme:<tag>                            what those patterns are for (compare, when, make, and so on: src/lib/grammar-tags.ts)
//   word:<id>                              a dictionary word the description uses
//   reach:<lesson id>                      the first lesson after which the description reads with only the patterns taught so far
//                                          (the early-patterns rule), and its words are taught; for the form readable soonest
//
// askBuilt(model, ask) answers one question for the command line and the Claude tool: { text, data }.

import { patternsOf } from '../grammar/parser.js';
import { wordRefIds } from '../word-refs.js';
import { formKinds } from '../form-kinds.js';
import { formText, isWordForm } from './form-report.js';

const FAMILIES = ['form', 'made', 'pattern', 'theme', 'word', 'reach'];

const toneless = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// -> rowOf(composite): the build of one composite, with the same options as buildModel (the card of a composite asks for one only)
export function makeRowBuilder({ patterns = [], lessons = [], parse, parseAt = null, wordLesson = () => undefined, patternLesson = () => undefined }) {
  const maxLesson = lessons.reduce((m, l) => Math.max(m, l.number), 0);
  const lessonId = new Map(lessons.map((l) => [l.number, l.id]));
  const themes = new Map(patterns.map((p) => [p.id, (p.tags ?? []).filter((t) => !t.startsWith('cat:'))]));

  return (c) => {
    const texts = c.hsd ? String(c.hsd).split(' / ') : [];
    const made = texts.length ? formKinds(c) : [];
    const forms = texts.map((form, i) => {
      const f = { form, made: made[i] ?? 'unknown', words: wordRefIds(form), patterns: [], themes: [], reach: null, reachBy: null };
      if (isWordForm(form)) {
        f.shape = 'chain';
      } else {
        const full = parse(form);
        f.shape = full.ok ? 'phrase' : 'unread';
        if (full.ok) {
          // the simplest reading: the fewest lessons of grammar that still read it (found by halving, as more patterns never read less)
          let r = full;
          const at = parseAt && maxLesson ? (n) => { const x = parseAt(n)(form); return x.ok ? x : null; } : null;
          const top = at && at(maxLesson);
          if (top) {
            let lo = Math.max(1, ...f.words.map((w) => wordLesson(w) ?? 1));
            let hi = maxLesson;
            r = top;
            while (lo < hi) {
              const mid = (lo + hi) >> 1;
              const x = at(mid);
              if (x) { hi = mid; r = x; } else lo = mid + 1;
            }
          }
          f.patterns = patternsOf(r.trees[0]);
          f.themes = [...new Set(f.patterns.flatMap((p) => themes.get(p) ?? []))];
        }
      }
      // the chapter a learner needs: the latest lesson of the words and the patterns it uses (none for a description nothing reads yet)
      if (f.shape !== 'unread') for (const [by, n] of [...f.words.map((w) => [w, wordLesson(w)]), ...f.patterns.map((p) => [p, patternLesson(p)])]) {
        if (n !== undefined && (f.reach === null || n > f.reach)) {
          f.reach = n;
          f.reachBy = by;
        }
      }
      return f;
    });

    const tags = new Set();
    if (!forms.length) tags.add('form:none');
    for (const f of forms) {
      tags.add(`form:${f.shape}`);
      tags.add(`made:${f.made}`);
      for (const p of f.patterns) tags.add(`pattern:${p}`);
      for (const t of f.themes) tags.add(`theme:${t}`);
      for (const w of f.words) tags.add(`word:${w}`);
    }
    // the form that can be read soonest decides the entry's reach
    const reaches = forms.map((f) => f.reach).filter((n) => n !== null);
    const reach = reaches.length ? Math.min(...reaches) : null;
    if (reach !== null) tags.add(`reach:${lessonId.get(reach) ?? reach}`);
    return { zh: c.zh, py: c.py, en: c.en, rank: c.rank, fit: c.fit, forms, tags, reach };
  };
}

export function buildModel({ composites, words = {}, lessons = [], rowOf = null, ...options }) {
  const lessonId = new Map(lessons.map((l) => [l.number, l.id]));
  const build = rowOf ?? makeRowBuilder({ lessons, ...options });
  const rows = composites.map(build);

  const byZh = new Map(rows.map((r) => [r.zh, r]));
  const byTag = new Map();
  for (const r of rows) for (const t of r.tags) (byTag.get(t) ?? byTag.set(t, []).get(t)).push(r);

  const wordIds = new Map();
  for (const [id, w] of Object.entries(words)) for (const key of [id, w.term, w.hanzi]) if (key) wordIds.set(toneless(key), id);

  return {
    rows,
    words,
    lessons,
    byTag,
    lessonId: (n) => lessonId.get(n) ?? String(n),
    row(name) {
      const q = String(name ?? '').trim();
      if (byZh.has(q)) return byZh.get(q);
      const hits = rows.filter((r) => toneless(r.py) === toneless(q) || toneless(r.en) === toneless(q));
      if (hits.length === 1) return hits[0];
      if (hits.length > 1) throw new Error(`"${name}" fits ${hits.length} composites: ${hits.map((r) => `${r.zh} ${r.py}`).join(', ')}`);
      return null;
    },
    wordId: (name) => wordIds.get(toneless(name)) ?? null,
    members(tags, { upTo } = {}) {
      let list = null;
      for (const t of tags) {
        const here = byTag.get(t) ?? [];
        list = list ? list.filter((r) => here.includes(r)) : here;
      }
      list = list ?? rows;
      if (upTo !== undefined) list = list.filter((r) => r.reach !== null && r.reach <= upTo);
      return [...list].sort((a, b) => a.rank - b.rank);
    },
    tagCounts: () => [...byTag].map(([tag, list]) => ({ tag, count: list.length })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag)),
  };
}

// -- one question, as the command line and the Claude tool both ask it ---------------------------------------------------

const pin = (s) => String(s ?? '');

export function renderBuiltRow(model, r) {
  const out = [`${r.zh} ${pin(r.py)}  (${pin(r.en)}; fit ${r.fit ?? '-'})`];
  if (!r.forms.length) out.push('  no description yet');
  r.forms.forEach((f, i) => {
    out.push(`  ${r.forms.length > 1 ? `Form ${i + 1}` : 'Form'}: ${formText(f.form, model.words)}   [${f.shape}, ${f.made}]`);
    if (f.patterns.length) out.push(`    patterns: ${f.patterns.join(', ')}`);
    if (f.themes.length) out.push(`    for: ${f.themes.join(', ')}`);
    const reach = f.reach === null ? 'no lesson found' : `lesson ${model.lessonId(f.reach)} (number ${f.reach}), set by ${f.reachBy}`;
    out.push(`    reach: ${reach}`);
  });
  out.push(`  tags: ${[...r.tags].sort().join(' ')}`);
  return out.join('\n');
}

function renderList(model, title, list, limit) {
  const out = [`${title}: ${list.length} composite${list.length === 1 ? '' : 's'}`];
  if (!list.length) return out.join('\n');
  for (const r of list.slice(0, limit)) {
    const f = r.forms[0];
    out.push(`  ${r.zh} ${pin(r.py)}  ${f ? formText(f.form, model.words) : '(no description)'}${r.reach !== null ? `   [lesson ${model.lessonId(r.reach)}]` : ''}`);
  }
  if (list.length > limit) out.push(`  … ${list.length - limit} more (limit)`);
  return out.join('\n');
}

function renderSummary(model, limit) {
  const counts = model.tagCounts();
  const out = [`Build tags of ${model.rows.length} composites (what each description is made from)`];
  for (const fam of FAMILIES) {
    const own = counts.filter((c) => c.tag.startsWith(`${fam}:`));
    if (!own.length) continue;
    const shown = fam === 'word' ? own.slice(0, limit) : own.slice(0, Math.max(limit, 12));
    out.push('', `${fam}:  (${own.length} tags)`, `  ${shown.map((c) => `${c.tag.slice(fam.length + 1)} ${c.count}`).join(' · ')}${own.length > shown.length ? ' · …' : ''}`);
  }
  return out.join('\n');
}

// ask: { name?, pattern?, theme?, word?, form?, made?, reach?, upTo?, tag?, limit? } -> { data, text }
// name wins (one composite's full build); otherwise the filters join (all must hold); with none, the counts per tag.
export function askBuilt(model, ask = {}) {
  const limit = ask.limit ? Number(ask.limit) : 25;
  if (ask.name) {
    const r = model.row(ask.name);
    if (!r) throw new Error(`no composite "${ask.name}" (give its hanzi or pinyin)`);
    return { data: { zh: r.zh, forms: r.forms, tags: [...r.tags].sort(), reach: r.reach }, text: renderBuiltRow(model, r) };
  }
  const tags = [];
  const add = (family, value) => {
    for (const v of [].concat(value ?? []).filter((x) => x !== '' && x !== undefined)) tags.push(`${family}:${v}`);
  };
  add('pattern', ask.pattern);
  add('theme', ask.theme);
  add('form', ask.form);
  add('made', ask.made);
  for (const w of [].concat(ask.word ?? [])) {
    const id = model.wordId(w);
    if (!id) throw new Error(`no dictionary word "${w}"`);
    tags.push(`word:${id}`);
  }
  if (ask.reach !== undefined && ask.reach !== '') {
    const n = Number(ask.reach);
    tags.push(`reach:${Number.isInteger(n) && model.lessons.find((l) => l.number === n) ? model.lessonId(n) : ask.reach}`);
  }
  for (const t of [].concat(ask.tag ?? [])) tags.push(t);
  const upTo = ask.upTo !== undefined && ask.upTo !== '' ? Number(ask.upTo) : undefined;
  if (!tags.length && upTo === undefined) return { data: model.tagCounts(), text: renderSummary(model, limit) };
  for (const t of tags) if (!model.byTag.has(t)) throw new Error(`no composite has the tag "${t}" (ask with nothing to list the tags)`);
  const list = model.members(tags, { upTo });
  const title = [...tags, ...(upTo !== undefined ? [`readable by lesson ${upTo}`] : [])].join(' + ');
  return { data: list.map((r) => ({ zh: r.zh, py: r.py, en: r.en, reach: r.reach })), text: renderList(model, title, list, limit) };
}
