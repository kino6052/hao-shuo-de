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
//   defined-by          a word whose paraphrase names another word (all of them, each with its form; a compound
//                       spelled with a light syllable, dōng-xi, is learned whole and does not count its parts)
//   circular            two words whose paraphrases name each other (neither can be said without the other)
//   connected           words the author links (maps/connections.ts): a note on a review, a family of words
//   part-of             a whole and its parts (maps/structure.ts), or a composite described as a part of something
//   set                 ends that exclude each other (the colors, the seasons)
//   scale               ends in an order (small, big; the numbers)
//   family              words of one idea that differ in one way each (the going and moving words), by facet
//   place-of            a composite described as the place where something is done (xué-de dì-fang)
//   tool-for            a composite described as the thing used for something (zuò-fàn-yòng-de dōng-xi)
//   causes              a composite whose form is "ràng X …": it makes something happen
// An opposite also carries `sub`, its kind (maps/structure.ts oppositeKinds): either-or, more-or-less, other-side, undoing, by-not.

import { wordRefIds } from '../word-refs.js';
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
  'defined-by': 'its paraphrase names the other word',
  circular: 'each is said with the other',
  connected: 'linked by the author',
  'part-of': 'a whole and its parts',
  set: 'one of a set (they exclude each other)',
  scale: 'a scale, in order',
  family: 'a family of one idea, by facet',
  'place-of': 'a place named by what is done there',
  'tool-for': 'a thing named by what it is used for',
  causes: 'a word that makes something happen',
};
export const KINDS = Object.keys(KIND_NOTES);

const SYMMETRIC = new Set(['opposite', 'close', 'same-form', 'category', 'circular']);

// The key a decision on the relations review page is stored under: the kind and its ends (a group by its members).
export const relationKey = (r) => (r.members ? `${r.kind}|${r.members.join(',')}` : `${r.kind}|${SYMMETRIC.has(r.kind) && String(r.a) > String(r.b) ? `${r.b}|${r.a}` : `${r.a}|${r.b}`}`);
const BU = 'bu4';

// A Mandarin compound spelled with a light syllable (dōng-xi, dì-fang, bù-fen) is learned whole: the
// words it is spelled from are not what a form is built from. A measure word is the exception (yī-ge).
const LIGHT_RUN = /(?:{{[Ww]ord:[a-z0-9_-]+(?:#[a-z]+)?}}-)+{{[Ll]ight:([a-z0-9_-]+)}}/g;

// the words of a slot list as comparable cells
const cell = (s) => (s.kind === 'word' ? `w:${s.id}:${s.light ? 'l' : ''}` : `${s.kind}:${s.text}`);

// rules: { accept: [source, ...], rejected: [{ kind, a, b }] } (kb/relation-rules.json). A relation a rule found whose `source`
// is in `accept` is accepted as a group (K25); one in `rejected` is left out and listed apart (`report.rejected`), so it does not come back.
export function relationReport(source, facts, rules = {}) {
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
  const oppositeKinds = maps.structure?.oppositeKinds ?? {};
  const oppositeKind = (a, b) => oppositeKinds[`${a}|${b}`] ?? oppositeKinds[`${b}|${a}`];
  for (const [a, b] of maps.antonyms?.pairs ?? []) {
    const sub = oppositeKind(a, b);
    add({ kind: 'opposite', status: 'accepted', source: 'maps/antonyms', ends: 'word', a, b, sub, why: `${term(a)} and ${term(b)} are listed as opposites${sub ? ` (${sub})` : ''}` });
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
        add({ kind: byNot ? 'opposite-by-not' : kind, sub: byNot ? 'by-not' : undefined, status: 'accepted', source: `maps/${notKind ? 'antonyms' : 'synonyms'} (phrase)`, ends: 'word', a: id, b: pin(text), why: `${term(id)}: ${pin(text)}` });
      }
    }
  };
  phrases(maps.antonyms, 'opposite-phrase', true);
  phrases(maps.synonyms, 'close-phrase', false);

  for (const c of maps.connections ?? []) {
    const members = c.words.filter((id) => words[id]);
    if (members.length < 2) continue;
    add({ kind: 'connected', status: c.proposed ? 'proposed' : 'accepted', source: 'maps/connections', ends: 'word', members, a: members[0], why: `${members.map(term).join(', ')}: ${c.why}` });
  }

  // wholes, sets, scales and families (maps/structure.ts); the end of each is a word id or a composite's hanzi
  const endName = (e) => (words[e] ? term(e) : cname(e));
  const st = maps.structure ?? {};
  const proposed = (x) => (x.proposed ? 'proposed' : 'accepted');
  for (const o of st.opposites ?? []) {
    add({ kind: 'opposite', status: proposed(o), source: 'maps/structure', ends: 'composite', a: o.a, b: o.b, sub: o.kind, why: `${cname(o.a)} and ${cname(o.b)} are opposites (${o.kind}): ${o.why}` });
  }
  for (const p of st.parts ?? []) {
    for (const part of p.parts) add({ kind: 'part-of', status: proposed(p), source: 'maps/structure', ends: 'mixed', a: part, b: p.whole, why: `${endName(part)} is a part of ${endName(p.whole)}: ${p.why}` });
  }
  for (const g of st.groups ?? []) {
    add({ kind: g.kind, status: proposed(g), source: 'maps/structure', ends: 'mixed', members: g.members, a: g.members[0], why: `${g.members.map(endName).join(g.kind === 'scale' ? ' < ' : ', ')}: ${g.why}` });
  }
  for (const f of st.families ?? []) {
    const members = Object.values(f.facets).flat();
    const facets = Object.entries(f.facets).map(([facet, ids]) => `${facet}: ${ids.map(endName).join(', ')}`).join('; ');
    add({ kind: 'family', status: proposed(f), source: 'maps/structure', ends: 'mixed', members, a: f.name, facets: f.facets, why: `${f.name}: ${f.why} (${facets})` });
  }

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
    if (members.length < 2) continue;
    // Claude's sort (kb/same-form-sort.json): synonyms are the same meaning, close ones share a family; the groups sorted as
    // different meanings, or as senses with one sound, stay proposed for the author, with the reason
    const [verdict, note] = rules.sameForm?.[form] ?? [];
    const why = `${members.map(cname).join(', ')} are all described as "${form}"`;
    if (verdict === 'synonyms') add({ kind: 'same-form', status: 'accepted', source: 'same-form sort', ends: 'composite', members, a: form, why: `${why}: synonyms (${note})` });
    else if (verdict === 'close') add({ kind: 'close', status: 'accepted', source: 'same-form sort', ends: 'composite', members, a: form, why: `${why}: close in meaning (${note})` });
    else add({ kind: 'same-form', status: 'proposed', source: 'a form in common', ends: 'composite', members, a: form, sub: verdict, why: verdict ? `${why}: Claude says ${verdict === 'senses' ? 'two senses with one sound' : 'different meanings'} (${note})` : why });
  }

  // -- from the heads and the descriptions -----------------------------------------------------------------
  for (const c of composites) {
    const h = facts?.heads?.get(c.zh);
    if (!h) continue;
    const to = h.kind === 'word' ? h.id : h.zh;
    add({ kind: 'kind-of', status: 'proposed', source: 'head rule', ends: h.kind === 'word' ? 'composite-word' : 'composite', a: c.zh, b: to, why: `${cname(c.zh)} hangs under ${h.kind === 'word' ? term(h.id) : cname(h.zh)}` });
    if (h.kind === 'word' && h.id === 'ren2') add({ kind: 'agent', status: 'proposed', source: 'head is rén', ends: 'composite-word', a: c.zh, b: 'ren2', why: `${cname(c.zh)} is a person, named by "${pin(c.hsd.split(' / ')[0])}"` });
  }

  // -- from the descriptions: what a composite is for, where it is, what it is part of ---------------------------------
  // Each reads the pinyin of a form (hyphens as written) and keeps the words it found as the "why".
  const DESCRIPTION_RULES = [
    { kind: 'place-of', re: /^(.+)-de dì-fang$/, note: (c, m) => `${cname(c.zh)} is the place ${m[1]}` },
    { kind: 'tool-for', re: /^(.*(?:yòng|ràng).*-de (?:xiǎo-de |xiǎo )?(?:dōng-xi|gōng-jù))$/, note: (c, m) => `${cname(c.zh)} is the thing ${m[1]}` },
    { kind: 'causes', re: /^(ràng (?!.*-de (?:xiǎo-de |xiǎo )?(?:dōng-xi|gōng-jù)$).+)$/, note: (c, m) => `${cname(c.zh)} is said "${m[1]}": it makes it happen` },
    { kind: 'part-of', re: /^(.+?)-de (?:dì-yī-|yī-)?bù-fen$/, note: (c, m) => `${cname(c.zh)} is described as part of ${m[1]}` },
  ];
  for (const c of composites) {
    for (const f of c.hsd ? c.hsd.split(' / ') : []) {
      const p = pin(f);
      for (const rule of DESCRIPTION_RULES) {
        const m = rule.re.exec(p);
        if (m) add({ kind: rule.kind, status: 'proposed', source: 'description', ends: 'composite-text', a: c.zh, b: m[1], why: rule.note(c, m) });
      }
    }
  }

  // -- from the paraphrases (empty until the paraphrases are accepted) ---------------------------------------------
  for (const [id, w] of Object.entries(words)) {
    for (const f of w.paraphrase?.forms ?? []) {
      const refs = [...f.matchAll(/\{\{(?:word|Word):([a-z0-9_-]+)\}\}/g)].map((m) => m[1]);
      if (refs.length === 2 && refs[0] === BU && refs[1] !== id) add({ kind: 'opposite-by-not', sub: 'by-not', status: 'proposed', source: 'paraphrase', ends: 'word', a: id, b: refs[1], why: `${term(id)} is said "${pin(f)}"` });
      else if (refs.length === 1 && refs[0] !== id && !/[^\s{}]/.test(f.replace(/\{\{[^}]+\}\}/g, ''))) add({ kind: 'close-by-paraphrase', status: 'proposed', source: 'paraphrase', ends: 'word', a: id, b: refs[0], why: `${term(id)} is said "${pin(f)}"` });
    }
  }

  // every word a paraphrase names, and the pairs that name each other (the author's own wording is the evidence)
  const named = new Map(); // id -> Map(named id -> the form that names it)
  for (const [id, w] of Object.entries(words)) {
    for (const f of w.paraphrase?.forms ?? []) {
      const built = f.replace(LIGHT_RUN, (run, last) => (words[last]?.pos?.eng === 'measure word' ? run : ''));
      for (const ref of new Set(wordRefIds(built))) {
        if (ref === id || !words[ref]) continue;
        const m = named.get(id) ?? named.set(id, new Map()).get(id);
        if (!m.has(ref)) m.set(ref, f);
      }
    }
  }
  for (const [id, m] of named) {
    for (const [ref, f] of m) {
      add({ kind: 'defined-by', status: 'accepted', source: 'paraphrase', ends: 'word', a: id, b: ref, why: `${term(id)} is said "${pin(f)}", which names ${term(ref)}` });
      if (named.get(ref)?.has(id)) add({ kind: 'circular', status: 'accepted', source: 'paraphrase', ends: 'word', a: id, b: ref, why: `${term(id)} is said with ${term(ref)} and ${term(ref)} with ${term(id)}` });
    }
  }

  const accept = new Set(rules.accept ?? []);
  const refused = (rules.rejected ?? []).map((x) => `${x.kind}|${x.a}|${x.b ?? ""}`);
  const rejected = [];
  for (let i = relations.length - 1; i >= 0; i--) {
    const r = relations[i];
    if (r.status !== "proposed") continue;
    const decided = rules.decided?.[relationKey(r)]?.status;
    if (decided === 'accept') r.status = 'accepted';
    else if (decided === 'reject') rejected.push(...relations.splice(i, 1));
    else if (refused.includes(`${r.kind}|${r.a}|${r.b ?? ""}`) || (SYMMETRIC.has(r.kind) && refused.includes(`${r.kind}|${r.b}|${r.a}`))) rejected.push(...relations.splice(i, 1));
    else if (accept.has(r.source)) r.status = "accepted";
  }
  const counts = {};
  for (const r of relations) {
    const c = (counts[r.kind] ??= { accepted: 0, proposed: 0 });
    c[r.status]++;
  }
  return { relations, rejected, counts, kinds: KINDS.filter((k) => counts[k]) };
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
