// Relation candidates (KB_PLAN.md K18, phase 5): every relation the data already
// states or implies, with its kind, where it came from and why. Stored ones
// (src/data/maps) are `accepted`; the ones a rule finds are `proposed`, for the
// author to accept or reject later. Nothing here changes data.
//
//   relationReport(source, facts)   -> { relations, counts, kinds }
//   renderRelations(report, opts)   -> the report as text ({ kind, status, limit })
//
// A relation is { kind, status, source, why, a, b } (two ends: a word id or a
// composite's hanzi) or { kind, ..., members } (a group). `ends` says what a and
// b are: word, composite, or composite-word.
//
// Kinds (the first column of the report):
//   opposite            two words, or two composites, that are opposites
//   opposite-phrase     a word whose opposite is a phrase, not a word (nán = bù nán)
//   close               close in meaning (words, or composites)
//   close-phrase        a word with a close phrase
//   same-form           composites that say it the same way (any form in common)
//   kind-of             a composite and its head: a fēi-jī is a kind of jī
//   agent               a composite that names a person by what they do (xué-de rén)
//   category            words that share a category
//   opposite-by-not     a word whose paraphrase is "not" + another word (from paraphrases)
//   close-by-paraphrase a word whose paraphrase is one other word

import { formSlots } from './facts.js';
import { pinyinOf } from './whatif.js';

export const KIND_NOTES = {
  opposite: 'opposites',
  'opposite-phrase': 'the opposite is a phrase',
  close: 'close in meaning',
  'close-phrase': 'a close phrase',
  'same-form': 'say it the same way',
  'kind-of': 'a composite and its head',
  agent: 'a person named by what they do',
  category: 'share a category',
  'opposite-by-not': 'paraphrased as "not" + a word',
  'close-by-paraphrase': 'paraphrased as one other word',
};
export const KINDS = Object.keys(KIND_NOTES);

const SYMMETRIC = new Set(['opposite', 'close', 'same-form', 'category']);
const BU = 'bu4';

// the words of a slot list as comparable cells
const cell = (s) => (s.kind === 'word' ? `w:${s.id}:${s.light ? 'l' : ''}` : `${s.kind}:${s.text}`);

export function relationReport(source, facts) {
  const words = source.words;
  const term = (id) => words[id]?.term ?? id;
  const pin = pinyinOf(words);
  const composites = source.composites ?? [];
  const byZh = new Map(composites.map((c) => [c.zh, c]));
  const cname = (zh) => `${zh} ${byZh.get(zh)?.py ?? ''}`.trim();
  const relations = [];
  const seen = new Set();
  const add = (r) => {
    const key = r.members ? `${r.kind}|${r.members.join(',')}` : `${r.kind}|${SYMMETRIC.has(r.kind) && String(r.a) > String(r.b) ? `${r.b}|${r.a}` : `${r.a}|${r.b}`}`;
    if (seen.has(key)) return;
    seen.add(key);
    relations.push(r);
  };

  // -- stored: accepted ------------------------------------------------------------------------
  const maps = source.maps ?? {};
  const oppose = new Map(); // id -> Set of its opposites
  const close = new Map();
  const link = (m, a, b) => (m.get(a) ?? m.set(a, new Set()).get(a)).add(b);
  for (const [a, b] of maps.antonyms?.pairs ?? []) {
    add({ kind: 'opposite', status: 'accepted', source: 'maps/antonyms', ends: 'word', a, b, why: `${term(a)} and ${term(b)} are listed as opposites` });
    link(oppose, a, b);
    link(oppose, b, a);
  }
  for (const [a, b] of maps.synonyms?.pairs ?? []) {
    add({ kind: 'close', status: 'accepted', source: 'maps/synonyms', ends: 'word', a, b, why: `${term(a)} and ${term(b)} are listed as close in meaning` });
    link(close, a, b);
    link(close, b, a);
  }
  const phrases = (map, kind, notKind) => {
    for (const [id, list] of Object.entries(map?.phrases ?? {})) {
      for (const text of list) {
        const refs = [...text.matchAll(/\{\{word:([a-z0-9_-]+)\}\}/g)].map((m) => m[1]);
        const byNot = notKind && refs.length === 2 && refs[0] === BU && refs[1] === id;
        add({ kind: byNot ? 'opposite-by-not' : kind, status: 'accepted', source: `maps/${notKind ? 'antonyms' : 'synonyms'} (phrase)`, ends: 'word', a: id, b: pin(text), why: `${term(id)}: ${pin(text)}` });
      }
    }
  };
  phrases(maps.antonyms, 'opposite-phrase', true);
  phrases(maps.synonyms, 'close-phrase', false);

  const leaves = [];
  const walk = (c) => {
    if (c.wordIds?.length) leaves.push(c);
    (c.children ?? []).forEach(walk);
  };
  (source.categories ?? []).forEach(walk);
  for (const c of leaves) add({ kind: 'category', status: 'accepted', source: 'maps/categories', ends: 'word', members: c.wordIds.filter((id) => words[id]), a: c.key, why: `${c.key}: ${c.wordIds.map(term).join(', ')}` });

  // -- composites that differ in one slot: opposites and close words ----------------------------------
  // two main forms of the same shape whose only difference is one word; if the two words are
  // opposites (or close), the composites are
  const buckets = new Map();
  for (const c of composites) {
    if (!c.hsd) continue;
    const slots = formSlots(c.hsd.split(' / ')[0], words);
    if (slots.length < 2 || !slots.some((s) => s.kind === 'word')) continue;
    slots.forEach((s, i) => {
      if (s.kind !== 'word') return;
      const key = `${slots.length}|${i}|${slots.map((x, j) => (j === i ? '_' : cell(x))).join(' ')}`;
      (buckets.get(key) ?? buckets.set(key, []).get(key)).push({ c, id: s.id });
    });
  }
  for (const list of buckets.values()) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const x = list[i];
        const y = list[j];
        if (x.id === y.id) continue;
        const kind = oppose.get(x.id)?.has(y.id) ? 'opposite' : close.get(x.id)?.has(y.id) ? 'close' : null;
        if (!kind) continue;
        const why = `${cname(x.c.zh)} and ${cname(y.c.zh)} differ only in ${term(x.id)} / ${term(y.id)}, which are ${kind === 'opposite' ? 'opposites' : 'close in meaning'}`;
        add({ kind, status: 'proposed', source: 'one slot differs', ends: 'composite', a: x.c.zh, b: y.c.zh, why });
      }
    }
  }

  // -- composites that share a description -----------------------------------------------------------
  const byForm = new Map();
  for (const c of composites) {
    for (const f of c.hsd ? c.hsd.split(' / ') : []) {
      const key = pin(f);
      if (!key) continue;
      (byForm.get(key) ?? byForm.set(key, []).get(key)).push(c.zh);
    }
  }
  for (const [form, zhs] of byForm) {
    const members = [...new Set(zhs)];
    if (members.length > 1) add({ kind: 'same-form', status: 'proposed', source: 'a form in common', ends: 'composite', members, a: form, why: `${members.map(cname).join(', ')} are all described as "${form}"` });
  }

  // -- from the heads and the descriptions -----------------------------------------------------------------
  for (const c of composites) {
    const h = facts?.heads?.get(c.zh);
    if (!h) continue;
    const to = h.kind === 'word' ? h.id : h.zh;
    add({ kind: 'kind-of', status: 'proposed', source: 'head rule', ends: h.kind === 'word' ? 'composite-word' : 'composite', a: c.zh, b: to, why: `${cname(c.zh)} hangs under ${h.kind === 'word' ? term(h.id) : cname(h.zh)}` });
    if (h.kind === 'word' && h.id === 'ren2') add({ kind: 'agent', status: 'proposed', source: 'head is rén', ends: 'composite-word', a: c.zh, b: 'ren2', why: `${cname(c.zh)} is a person, named by "${pin(c.hsd.split(' / ')[0])}"` });
  }

  // -- from the paraphrases (empty until the paraphrases are accepted) ---------------------------------------------
  for (const [id, w] of Object.entries(words)) {
    for (const f of w.paraphrase?.forms ?? []) {
      const refs = [...f.matchAll(/\{\{(?:word|Word):([a-z0-9_-]+)\}\}/g)].map((m) => m[1]);
      if (refs.length === 2 && refs[0] === BU && refs[1] !== id) add({ kind: 'opposite-by-not', status: 'proposed', source: 'paraphrase', ends: 'word', a: id, b: refs[1], why: `${term(id)} is said "${pin(f)}"` });
      else if (refs.length === 1 && refs[0] !== id && !/[^\s{}]/.test(f.replace(/\{\{[^}]+\}\}/g, ''))) add({ kind: 'close-by-paraphrase', status: 'proposed', source: 'paraphrase', ends: 'word', a: id, b: refs[0], why: `${term(id)} is said "${pin(f)}"` });
    }
  }

  const counts = {};
  for (const r of relations) {
    const c = (counts[r.kind] ??= { accepted: 0, proposed: 0 });
    c[r.status]++;
  }
  return { relations, counts, kinds: KINDS.filter((k) => counts[k]) };
}

// -> text. opts: { kind, status, limit } (limit per kind, default 8)
export function renderRelations(report, { kind, status, limit = 8 } = {}) {
  const out = [];
  const total = report.relations.length;
  out.push(`Relations: ${total} (${report.relations.filter((r) => r.status === 'accepted').length} accepted, ${report.relations.filter((r) => r.status === 'proposed').length} proposed by a rule, waiting for review)`);
  const width = Math.max(...KINDS.map((k) => k.length));
  for (const k of KINDS) {
    const c = report.counts[k] ?? { accepted: 0, proposed: 0 };
    out.push(`  ${k.padEnd(width)}  ${String(c.accepted).padStart(4)} accepted  ${String(c.proposed).padStart(4)} proposed   ${KIND_NOTES[k]}`);
  }
  const kinds = kind ? [kind] : [];
  if (kind && !KINDS.includes(kind)) throw new Error(`unknown kind "${kind}"; the kinds are ${KINDS.join(', ')}`);
  for (const k of kinds) {
    const list = report.relations.filter((r) => r.kind === k && (!status || r.status === status));
    out.push('', `${k} (${list.length}${status ? `, ${status}` : ''})`);
    if (!list.length) out.push('  none');
    for (const r of list.slice(0, limit)) out.push(`  [${r.status}] ${r.why}  (${r.source})`);
    if (list.length > limit) out.push(`  … and ${list.length - limit} more`);
  }
  if (!kind) out.push('', 'Name a kind to see its relations and why each was found.');
  return out.join('\n');
}
