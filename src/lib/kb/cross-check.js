// WordNet cross-checks (KB_PLAN.md phase 6, K28): the dictionary's own kind-of, opposite and part-of relations against
// what the English WordNet says about the same senses, for Claude to find what looks wrong and what is missing.
// Nothing here changes data. A disagreement is a question, not an error: WordNet counts things differently, and an
// entry may be linked to a sense that is close but not the same.
//
//   crossCheck({ relations, words, composites, links, index, startsFrom }) -> report
//   renderCrossCheck(report, { section, limit }) -> the report as text
//
// relations   the relation list of relations.js (kb.relations().relations)
// words       the dictionary's words { id: { term, hanzi } }; composites [{ zh, py }]
// links       kb/wordnet/links.json: { linked: { zh: [ili] }, words: { id: [ili] } }
// index       kb/cache/english-index.json: { synsets: { ili: { p, d, l, h, a, ai, w } } } (h kinds, a antonyms, ai antonyms through a
//             similar sense, w wholes it is a part of). Without it the report is empty and says so.
// startsFrom  english.js: the entries met on the way up from an entry's own senses
//
// An end that has no WordNet link is not checked (it is counted as `unchecked`). The sections:
//   kindOf    "a hangs under b" (head rule): agree (WordNet calls a a kind of b), other-sense (it would, if b meant another sense
//             of its English word: 人 linked to "homo" instead of "person"), same-sense, reversed (WordNet calls b a kind of
//             a), sibling (both are kinds of one near thing), unrelated; and the heads that collect the disagreements
//   opposites "a and b are opposites": agree, indirect (through a similar sense: warm / cold), other-sense (WordNet has the
//             same words as opposites but on another sense of one of them), same-sense, differs (WordNet gives one of them
//             other opposites), silent (WordNet records none for either)
//   parts     "a is a part of b": agree, reversed, differs, silent (WordNet knows no wholes for a)
//   missing   pairs WordNet states between two linked entries that the dictionary does not: opposites and parts
//   headless  linked entries without a head, with the nearest entry WordNet calls their kind ("could start as …-de X")

import { formKinds } from '../form-kinds.js';
import { wordRefIds } from '../word-refs.js';
import { baseForms, glosses } from './english.js';

const MAX_ALT = 6; // the other senses of a head's word that are tried, the common ones first
const MAX_UP = 10; // how far up "is a kind of" a head may sit and still agree
const NEAR = 3; // siblings: a common kind within this many steps of both
const MAX_WHOLES = 3; // part-of climbs wholes (finger -> hand -> arm) this far

export const SECTIONS = ['kindOf', 'opposites', 'parts', 'missing', 'headless'];

export function crossCheck({ relations = [], words = {}, composites = [], links = {}, index = null, startsFrom = () => [] } = {}) {
  const synsets = index?.synsets ?? {};
  const byZh = new Map(composites.map((c) => [c.zh, c]));
  const linked = links.linked ?? {};
  const synset = (ili) => synsets[ili];
  const lemma = (ili) => synset(ili)?.l?.[0] ?? ili;
  const lemmas = (ilis) => [...new Set(ilis.map(lemma))].slice(0, 3).join('/');

  // an end of a relation is a word id or a composite's hanzi
  const hanziOf = (end) => words[end]?.hanzi ?? end;
  const ilisOf = (end) => (words[end] ? links.words?.[end] ?? linked[words[end].hanzi] : linked[end]) ?? [];
  const nameOf = (end) => (words[end] ? `${words[end].term} ${words[end].hanzi ?? ''}`.trim() : `${end} ${byZh.get(end)?.py ?? ''}`.trim());
  const byIli = new Map(); // the linked entries behind each sense
  for (const [zh, ilis] of Object.entries(linked)) {
    if (!byZh.has(zh)) continue;
    for (const ili of ilis) byIli.set(ili, [...(byIli.get(ili) ?? []), zh]);
  }
  const pairKey = (x, y) => (x < y ? `${x}|${y}` : `${y}|${x}`);

  // the senses above some senses, with the steps and the words on the way: Map ili -> { steps, via, start }
  const climbs = new Map();
  const climb = (starts, max) => {
    const key = `${starts.join(',')}/${max}`;
    if (climbs.has(key)) return climbs.get(key);
    const seen = new Map(starts.map((s) => [s, { steps: 0, via: [], start: s }]));
    let layer = [...starts];
    for (let d = 1; d <= max && layer.length; d++) {
      const next = [];
      for (const ili of layer) {
        for (const up of synset(ili)?.h ?? []) {
          if (seen.has(up)) continue;
          const from = seen.get(ili);
          seen.set(up, { steps: d, via: [...from.via, lemma(up)], start: from.start });
          next.push(up);
        }
      }
      layer = next;
    }
    climbs.set(key, seen);
    return seen;
  };
  const meets = (up, targets, minSteps = 0) => {
    let best = null;
    for (const t of targets) {
      const hit = up.get(t);
      if (hit && hit.steps >= minSteps && (!best || hit.steps < best.steps)) best = { ...hit, ili: t };
    }
    return best;
  };

  const report = { ready: !!index, kindOf: null, opposites: null, parts: null, missing: null, headless: null };
  if (!index) return report;

  const section = (verdicts) => ({ total: 0, unchecked: 0, verdicts: Object.fromEntries(verdicts.map((v) => [v, 0])), items: [] });
  const note = (sec, item) => {
    sec.total++;
    sec.verdicts[item.verdict]++;
    sec.items.push(item);
  };
  // what WordNet would start an entry from, for a head it does not agree with
  const wordnetStart = (zh) => {
    const s = startsFrom(zh)[0];
    return s ? `; WordNet would start it from ${s.zh} ${s.py} (${s.via.join(' < ')})` : '';
  };

  // -- kind of -----------------------------------------------------------------------------------
  // The head rule reads an entry's first form. When that form is a spelled compound (xué-shēng: learned whole, K9) its "head"
  // is only the last syllable, so it says nothing about kinds; the entry counts as `spelled` and is not compared.
  const mainFormIsBuilt = (c) => {
    if (!c || c.head) return true; // an head the author set is a statement about kinds
    const forms = Array.isArray(c.hsd) ? c.hsd : String(c.hsd ?? '').split(' / ');
    const at = Math.max(0, forms.findIndex((f) => wordRefIds(f).some((id) => words[id])));
    return (formKinds(c)[at] ?? 'built') === 'built';
  };
  const POS_CODE = { noun: 'n', verb: 'v', adjective: 'a', adverb: 'r' };
  const altCache = new Map();
  // the other senses of the English words in an end's gloss (the first few of each, in WordNet's order), of the same part of speech
  const altSenses = (end) => {
    const zh = hanziOf(end);
    if (altCache.has(zh)) return altCache.get(zh);
    const c = byZh.get(zh);
    const own = ilisOf(end);
    const want = POS_CODE[c?.pos];
    const out = [];
    for (const g of glosses(c?.en)) {
      for (const form of baseForms(g)) {
        const found = index.lemmas?.[form];
        if (!found?.length) continue;
        for (const i of found.slice(0, MAX_ALT)) if (!own.includes(i) && !out.includes(i) && (!want || synset(i)?.p === want)) out.push(i);
        break;
      }
    }
    altCache.set(zh, out);
    return out;
  };
  const kindOf = { ...section(['agree', 'other-sense', 'same-sense', 'reversed', 'sibling', 'unrelated']), spelled: 0 };
  for (const r of relations) {
    if (r.kind !== 'kind-of' || hanziOf(r.b) === r.a) continue; // 一 under yī is the word itself, not a kind
    if (!mainFormIsBuilt(byZh.get(r.a))) {
      kindOf.spelled++;
      continue;
    }
    const A = ilisOf(r.a);
    const B = ilisOf(r.b);
    if (!A.length || !B.length) {
      kindOf.total++;
      kindOf.unchecked++;
      continue;
    }
    const base = { a: nameOf(r.a), b: nameOf(r.b), status: r.status, head: r.b, pos: byZh.get(r.a)?.pos };
    const upA = climb(A, MAX_UP);
    const up = meets(upA, B, 1);
    if (up) {
      note(kindOf, { ...base, verdict: 'agree', detail: `${lemmas([up.start])} < ${up.via.join(' < ')}` });
      continue;
    }
    if (A.some((i) => B.includes(i))) {
      note(kindOf, { ...base, verdict: 'same-sense', detail: `WordNet gives both the sense "${lemma(A.find((i) => B.includes(i)))}"` });
      continue;
    }
    // the head's link may sit on another sense of its word than the one this relation needs (人 linked to "homo", not "person")
    const other = meets(upA, altSenses(r.b), 1);
    if (other) {
      note(kindOf, { ...base, verdict: 'other-sense', alt: other.ili, detail: `WordNet agrees if ${base.b} means "${lemma(other.ili)}" (${synset(other.ili)?.d?.slice(0, 50) ?? ''}), not the linked "${lemmas(B)}" (${synset(B[0])?.d?.slice(0, 40) ?? ''}): ${lemmas([other.start])} < ${other.via.join(' < ')}` });
      continue;
    }
    const down = meets(climb(B, MAX_UP), A, 1);
    if (down) {
      note(kindOf, { ...base, verdict: 'reversed', detail: `WordNet calls ${base.b} a kind of ${base.a}: ${lemmas([down.start])} < ${down.via.join(' < ')}${wordnetStart(r.a)}` });
      continue;
    }
    const near = climb(A, NEAR);
    const nearB = climb(B, NEAR);
    let sib = null;
    for (const [ili, x] of near) {
      const y = nearB.get(ili);
      if (y && (!sib || x.steps + y.steps < sib.steps)) sib = { ili, steps: x.steps + y.steps };
    }
    if (sib) note(kindOf, { ...base, verdict: 'sibling', detail: `both are kinds of "${lemma(sib.ili)}" in WordNet${wordnetStart(r.a)}` });
    else note(kindOf, { ...base, verdict: 'unrelated', detail: `${lemmas(A)} (${synset(A[0])?.d?.slice(0, 40) ?? ''}) and ${lemmas(B)} (${synset(B[0])?.d?.slice(0, 40) ?? ''})${wordnetStart(r.a)}` });
  }

  // by head: a generic head (人, 地方, 东西) carries many entries, so one wrong link on it shows in all of them
  const heads = new Map();
  for (const i of kindOf.items) {
    const h = heads.get(i.head) ?? heads.set(i.head, { head: i.b, linked: lemmas(ilisOf(i.head)), n: 0, agree: 0, off: 0, other: new Map() }).get(i.head);
    h.n++;
    if (i.verdict === 'agree' || i.verdict === 'same-sense') h.agree++;
    else if (i.verdict === 'other-sense') h.other.set(i.alt, (h.other.get(i.alt) ?? 0) + 1);
    else h.off++;
  }
  kindOf.byHead = [...heads.values()]
    .map((h) => ({ ...h, other: [...h.other].sort((x, y) => y[1] - x[1]).map(([ili, n]) => ({ ili, n, sense: lemma(ili), definition: synset(ili)?.d ?? '' })) }))
    .filter((h) => h.other.length || h.off >= 3)
    .sort((x, y) => y.other.reduce((s, o) => s + o.n, 0) + y.off - (x.other.reduce((s, o) => s + o.n, 0) + x.off));

  // -- opposites ---------------------------------------------------------------------------------
  const opposites = section(['agree', 'indirect', 'other-sense', 'same-sense', 'differs', 'silent']);
  const opposite = new Set(); // every pair the dictionary calls opposite, by hanzi
  const antonyms = (ili) => synset(ili)?.a ?? [];
  const indirect = (ili) => synset(ili)?.ai ?? [];
  for (const r of relations) {
    if (r.kind !== 'opposite') continue;
    opposite.add(pairKey(hanziOf(r.a), hanziOf(r.b)));
    const A = ilisOf(r.a);
    const B = ilisOf(r.b);
    if (!A.length || !B.length) {
      opposites.total++;
      opposites.unchecked++;
      continue;
    }
    const base = { a: nameOf(r.a), b: nameOf(r.b), status: r.status, sub: r.sub };
    const direct = A.some((x) => antonyms(x).some((i) => B.includes(i))) || B.some((x) => antonyms(x).some((i) => A.includes(i)));
    if (direct) note(opposites, { ...base, verdict: 'agree', detail: `WordNet: ${lemmas(A)} is the opposite of ${lemmas(B)}` });
    else if (A.some((x) => indirect(x).some((i) => B.includes(i))) || B.some((x) => indirect(x).some((i) => A.includes(i)))) {
      const [x, y] = A.some((x) => indirect(x).some((i) => B.includes(i))) ? [A, B] : [B, A];
      const from = x.find((i) => indirect(i).some((j) => y.includes(j)));
      note(opposites, { ...base, verdict: 'indirect', detail: `WordNet: ${lemma(from)} is similar to a sense whose opposite is ${lemma(indirect(from).find((j) => y.includes(j)))}` });
    } else if (A.some((i) => B.includes(i))) note(opposites, { ...base, verdict: 'same-sense', detail: 'WordNet gives both the same sense' });
    else {
      const said = (ilis) => [...new Set(ilis.flatMap((i) => [...antonyms(i), ...indirect(i)]))];
      const sa = said(A);
      const sb = said(B);
      // the right words with another sense: WordNet puts b's opposite on a sense of a's English word that is not the linked one
      const wordsOf = (ilis) => new Set(ilis.flatMap((i) => (synset(i)?.l ?? []).map((l) => l.toLowerCase())));
      const wa = wordsOf(A);
      const wb = wordsOf(B);
      const crossed = sb.find((i) => synset(i)?.l?.some((l) => wa.has(l.toLowerCase()))) ?? sa.find((i) => synset(i)?.l?.some((l) => wb.has(l.toLowerCase())));
      const def = (i) => synset(i)?.d?.slice(0, 40) ?? '';
      if (crossed) {
        const ofA = sb.includes(crossed); // b's opposite is the sense of a's word
        note(opposites, { ...base, verdict: 'other-sense', detail: `WordNet agrees on the words but another sense: ${ofA ? lemmas(B) : lemmas(A)} is the opposite of "${lemma(crossed)}" (${def(crossed)}), not the linked "${lemma((ofA ? A : B)[0])}" (${def((ofA ? A : B)[0])})` });
      } else if (!sa.length && !sb.length) note(opposites, { ...base, verdict: 'silent', detail: 'WordNet records no opposite for either' });
      else note(opposites, { ...base, verdict: 'differs', detail: `WordNet: ${lemmas(A)} is opposite to ${sa.length ? lemmas(sa) : 'nothing'}; ${lemmas(B)} to ${sb.length ? lemmas(sb) : 'nothing'}` });
    }
  }

  // -- parts -------------------------------------------------------------------------------------
  const parts = section(['agree', 'reversed', 'differs', 'silent']);
  const partPairs = new Set();
  // the wholes of some senses: of the senses and the kinds above them (a thumb is part of what a finger is part of), and of those wholes in turn
  const wholesOf = (ilis) => {
    const out = new Map();
    let layer = ilis;
    for (let d = 1; d <= MAX_WHOLES && layer.length; d++) {
      const next = [];
      for (const ili of [...climb(layer, 3).keys()]) {
        for (const w of synset(ili)?.w ?? []) {
          if (out.has(w)) continue;
          out.set(w, d);
          next.push(w);
        }
      }
      layer = next;
    }
    return out;
  };
  for (const r of relations) {
    if (r.kind !== 'part-of') continue;
    partPairs.add(pairKey(hanziOf(r.a), hanziOf(r.b)));
    const A = ilisOf(r.a);
    const B = ilisOf(r.b);
    if (!A.length || !B.length) {
      parts.total++;
      parts.unchecked++;
      continue;
    }
    const base = { a: nameOf(r.a), b: nameOf(r.b), status: r.status };
    const wholes = wholesOf(A);
    const upB = climb(B, 2);
    const hit = [...wholes.keys()].find((w) => upB.has(w) || B.includes(w));
    if (hit) {
      note(parts, { ...base, verdict: 'agree', detail: `WordNet: ${lemmas(A)} is a part of ${lemma(hit)}` });
      continue;
    }
    const back = wholesOf(B);
    const upA = climb(A, 2);
    if ([...back.keys()].some((w) => upA.has(w) || A.includes(w))) {
      note(parts, { ...base, verdict: 'reversed', detail: `WordNet: ${lemmas(B)} is a part of ${lemmas(A)}, not the other way round` });
      continue;
    }
    if (!wholes.size) note(parts, { ...base, verdict: 'silent', detail: `WordNet knows no whole for ${lemmas(A)}` });
    else note(parts, { ...base, verdict: 'differs', detail: `WordNet: ${lemmas(A)} is a part of ${lemmas([...wholes.keys()])}` });
  }

  // -- stated by WordNet, not by the dictionary ------------------------------------------------
  const missing = { opposites: [], parts: [] };
  const seenPair = new Set();
  for (const [zh, ilis] of Object.entries(linked)) {
    if (!byZh.has(zh)) continue;
    for (const ili of ilis) {
      for (const anti of antonyms(ili)) {
        for (const other of byIli.get(anti) ?? []) {
          const key = pairKey(zh, other);
          if (other === zh || opposite.has(key) || seenPair.has(`o${key}`)) continue;
          seenPair.add(`o${key}`);
          missing.opposites.push({ a: nameOf(zh), b: nameOf(other), detail: `WordNet: ${lemma(ili)} is the opposite of ${lemma(anti)}` });
        }
      }
      for (const whole of synset(ili)?.w ?? []) {
        for (const other of byIli.get(whole) ?? []) {
          const key = pairKey(zh, other);
          if (other === zh || lemma(ili) === lemma(whole) || partPairs.has(key) || seenPair.has(`p${key}`)) continue; // mouth / mouth: two entries for one word, not a part
          seenPair.add(`p${key}`);
          missing.parts.push({ a: nameOf(zh), b: nameOf(other), detail: `WordNet: ${lemma(ili)} is a part of ${lemma(whole)}` });
        }
      }
    }
  }

  // -- entries without a head ------------------------------------------------------------------
  const hung = new Set(relations.filter((r) => r.kind === 'kind-of' && hanziOf(r.b) !== r.a).map((r) => r.a));
  const headless = { linked: 0, withHead: 0, suggested: [], none: 0 };
  for (const zh of Object.keys(linked)) {
    if (!byZh.has(zh)) continue;
    headless.linked++;
    if (hung.has(zh)) {
      headless.withHead++;
      continue;
    }
    const found = startsFrom(zh);
    if (!found.length) headless.none++;
    else headless.suggested.push({ entry: nameOf(zh), en: byZh.get(zh).en, pos: byZh.get(zh).pos, kinds: found.map((f) => ({ name: `${f.zh} ${f.py}`, steps: f.steps, via: f.via, start: f.start })) });
  }

  headless.suggested.sort((x, y) => (y.pos === 'noun') - (x.pos === 'noun')); // a kind is clearest for things
  return { ...report, kindOf, opposites, parts, missing, headless };
}

const SHOWN = { kindOf: ['reversed', 'sibling', 'unrelated'], opposites: ['other-sense', 'differs', 'same-sense'], parts: ['reversed', 'differs'] };
const TITLES = { kindOf: 'Kind of (a hangs under b)', opposites: 'Opposites', parts: 'Part of (a is a part of b)' };

export function renderCrossCheck(r, { section, limit = 10 } = {}) {
  if (!r.ready) return 'The English index is not built (npm run wordnet), so nothing can be checked against WordNet.';
  const out = [];
  const want = (name) => !section || section === name;
  for (const name of ['kindOf', 'opposites', 'parts']) {
    if (!want(name)) continue;
    const s = r[name];
    const counts = Object.entries(s.verdicts).map(([v, n]) => `${n} ${v}`).join(', ');
    const spelled = s.spelled ? `; ${s.spelled} more hang under a syllable of a spelled compound, which says nothing about kinds, and are left out` : '';
    out.push(`${TITLES[name]}: ${s.total} relations, ${s.unchecked} without a WordNet link on an end; of the ${s.total - s.unchecked} checked: ${counts}${spelled}`);
    const show = section === name ? Object.keys(s.verdicts).filter((v) => v !== 'agree') : SHOWN[name];
    for (const v of show) {
      // nouns first: a kind is clearest for things
      const items = s.items.filter((i) => i.verdict === v).sort((x, y) => (y.pos === 'noun') - (x.pos === 'noun'));
      if (!items.length) continue;
      out.push(`  ${v}:`);
      for (const i of items.slice(0, limit)) out.push(`    ${i.a}  ->  ${i.b}${i.status === 'proposed' ? ' (proposed)' : ''}: ${i.detail}`);
      if (items.length > limit) out.push(`    … ${items.length - limit} more`);
    }
    if (name === 'kindOf' && s.byHead.length) {
      out.push('  heads whose WordNet link may need another sense (or whose entries WordNet does not read as kinds of it):');
      for (const h of s.byHead.slice(0, limit)) {
        const alt = h.other.map((o) => `${o.n} would agree if it meant "${o.sense}" (${o.definition.slice(0, 40)})`).join('; ');
        out.push(`    ${h.head}, linked as "${h.linked}": ${h.n} entries hang under it, ${h.agree} agree${alt ? `; ${alt}` : ''}${h.off ? `; ${h.off} do not agree either way` : ''}`);
      }
    }
    out.push('');
  }
  if (want('missing')) {
    out.push(`WordNet states, the dictionary does not: ${r.missing.opposites.length} opposites, ${r.missing.parts.length} parts`);
    for (const [label, list] of [['opposites', r.missing.opposites], ['parts', r.missing.parts]]) {
      if (!list.length) continue;
      out.push(`  ${label}:`);
      for (const i of list.slice(0, limit)) out.push(`    ${i.a}  <->  ${i.b}: ${i.detail}`);
      if (list.length > limit) out.push(`    … ${list.length - limit} more`);
    }
    out.push('');
  }
  if (want('headless')) {
    const h = r.headless;
    out.push(`Entries with a WordNet link: ${h.linked}; ${h.withHead} hang under a head; ${h.suggested.length} have none but WordNet names a kind that is an entry; ${h.none} have neither`);
    for (const i of h.suggested.slice(0, limit)) out.push(`    ${i.entry} (${i.en}): could start as ${i.kinds.slice(0, 2).map((k) => `${k.start} (${k.via.join(' < ')})`).join(' or ')}`);
    if (h.suggested.length > limit) out.push(`    … ${h.suggested.length - limit} more`);
  }
  return out.join('\n').trimEnd();
}
