// What a change would cost and what it would buy (KB_PLAN.md phase 3): which
// words to drop, which roots to add, which trades to make. The question
// behind every list is the one `kb remove` answers for one set of words, here
// asked for every word at once, so it is worked out directly in JS and not by
// the solver (src/lib/kb/whatif.js and kb/rules/whatif.lp stay the reasoned,
// explained version; candidates.test.js checks that the two agree). The
// benchmark in KB_PLAN.md (phase 3, swaps) found a JS search faster and better
// than clingo's for choosing several trades at once. Nothing here changes data.
//
//   const model = candidateModel(source, facts, { freq })
//   model.consequences(['dēng'])         the counts and the cost of dropping these
//   model.removalCandidates({ drafts })   every word that may go, cheapest first
//   model.rootCandidates()                the roots to add, best first (needs `freq`)
//   model.addition('电')                  what one root would bring
//   model.swaps({ k })                    K roots in, K words out, best net value
//   renderRemovalCandidates(rows, opts) / renderRootCandidates(rows, opts) / renderSwaps(result)
//
// `freq` is the Mandarin frequency list [{ zh, py, rank }] (scripts/frequency-list.js).
// Without it every number about Mandarin is left out.
//
// One number for "how much does it cost": the sum of the parts below, each part
// a count times a cost (COSTS). The parts are always shown next to the sum, so
// the author can see which part decides.

import { wordRefIds, toneless } from '../word-refs.js';
import { syllables } from '../pinyin-syllables.js';
import { pinyinOf } from './whatif.js';

// the common Mandarin words (and composites) count more
export const rankWeight = (rank) => (rank <= 1000 ? 3 : rank <= 2000 ? 2 : 1);

// what one unit of each part costs (a unit of "redo" and "mandarin" is also weighted by rank)
export const COSTS = {
  redo: 1, // a composite left with no form: a new description (x rank weight)
  loses: 0.25, // a composite that loses one of its forms (x rank weight)
  headLost: 0.5, // a composite that hangs under the word
  lessonLine: 1, // a lesson example or answer, a story line, a phrase-book line
  compositeExample: 0.25, // an example sentence of a composite
  mention: 0.5, // another place that names it: prose, info, exercise, FAQ
  coverageLost: 10, // something the language could say and now cannot
  coverageTouched: 1, // something that loses one way of saying it
  definition: 1, // another word's text that names it
  sense: 2, // a catch-all sense left with no compound
  relation: 2, // an opposite or close pair that loses a half, a phrase that breaks
  mandarin: 1, // a frequency word that can no longer be written (x rank weight)
};
const PARTS = Object.keys(COSTS);

const push = (map, key, value) => (map.get(key) ?? map.set(key, []).get(key)).push(value);
const add = (map, key, value) => (map.get(key) ?? map.set(key, new Set()).get(key)).add(value);
const LESSON_LINES = new Set(['lesson_example', 'lesson_answer', 'story', 'phrase_book']);
const NOT_COUNTED = new Set(['card', 'example', 'answer']); // what the sentences already cover

export function candidateModel(source, facts, { freq = null, top = 6000 } = {}) {
  const words = source.words;
  const known = (id) => Object.hasOwn(words, id);
  const term = (id) => words[id]?.term ?? id;
  const pin = pinyinOf(words);

  // -- composites: the forms, and who hangs under whom ----------------------------------------------
  const comps = [];
  for (const c of source.composites ?? []) {
    if (!c.hsd) continue;
    comps.push({ zh: c.zh, rank: c.rank, w: rankWeight(c.rank), forms: c.hsd.split(' / ').map((f) => new Set(wordRefIds(f))) });
  }
  const compsOf = new Map(); // word id -> indexes of the composites with a form that names it
  comps.forEach((c, i) => {
    for (const id of new Set(c.forms.flatMap((f) => [...f]))) push(compsOf, id, i);
  });
  const headWord = new Map(); // word id -> composites hanging under it
  const headComp = new Map(); // composite -> composites hanging under it
  for (const [zh, h] of facts.heads ?? []) {
    if (h.kind === 'word') push(headWord, h.id, zh);
    else push(headComp, h.zh, zh);
  }

  // -- the book ------------------------------------------------------------------------------------
  const sentencesOf = new Map(); // word id -> sentences
  for (const s of facts.sentences) for (const id of s.words) push(sentencesOf, id, s);
  const mentionsOf = new Map(); // word id -> other mentions
  for (const m of facts.mentions ?? []) if (!NOT_COUNTED.has(m.kind)) push(mentionsOf, m.w, m);

  // -- coverage -------------------------------------------------------------------------------------
  const items = [];
  for (const g of source.coverage ?? []) {
    for (const it of g.items) items.push({ id: `${g.key}:${it.key}`, eng: it.eng, forms: (it.forms ?? []).map((f) => new Set(wordRefIds(f))), carriers: new Set(it.words ?? []) });
  }
  const itemsOf = new Map(); // word id -> indexes of the items it carries or is used in
  items.forEach((it, i) => {
    for (const id of new Set([...it.carriers, ...it.forms.flatMap((f) => [...f])])) push(itemsOf, id, i);
  });

  // -- the rest of the dictionary -----------------------------------------------------------------------
  const namedBy = new Map(); // word id -> words whose text names it
  const catchAll = []; // { id, key, hanzi, compounds: [Set] }
  const catchAllOf = new Map(); // word id -> indexes into catchAll that name it
  for (const [id, w] of Object.entries(words)) {
    for (const t of [w.definition?.eng, w.necessity?.eng]) for (const v of wordRefIds(t ?? '')) if (v !== id && known(v)) add(namedBy, v, id);
    for (const [key, s] of Object.entries(w.senses ?? {})) {
      for (const v of wordRefIds(`${s.eng ?? ''} ${s.why?.eng ?? ''}`)) if (v !== id && known(v)) add(namedBy, v, id);
      if (s.compounds?.length) {
        const k = catchAll.push({ id, key, hanzi: s.hanzi, compounds: s.compounds.map((c) => new Set(c.split(' '))) }) - 1;
        for (const v of new Set(s.compounds.flatMap((c) => c.split(' ')))) push(catchAllOf, v, k);
      }
    }
  }
  const pairs = []; // { kind, a, b }
  const pairsOf = new Map();
  const phrases = []; // { kind, word, n, uses: Set, text }
  const phrasesOf = new Map();
  for (const kind of ['antonym', 'synonym']) {
    const r = source.maps?.[`${kind}s`];
    for (const [a, b] of r?.pairs ?? []) {
      const k = pairs.push({ kind, a, b }) - 1;
      push(pairsOf, a, k);
      push(pairsOf, b, k);
    }
    for (const [id, forms] of Object.entries(r?.phrases ?? {})) {
      forms.forEach((f, i) => {
        const uses = new Set(wordRefIds(f));
        const k = phrases.push({ kind, word: id, n: i + 1, uses, text: pin(f) }) - 1;
        for (const v of uses) push(phrasesOf, v, k);
      });
    }
  }

  // -- Mandarin: what the language can write ----------------------------------------------------------------
  const giver = new Map(); // hanzi -> ids of the words (or senses) that give it
  const givesOf = new Map(); // id -> hanzi it gives
  const give = (h, id) => {
    add(giver, h, id);
    push(givesOf, id, h);
  };
  const whole = new Map(); // hanzi of a word of two or more characters -> its id
  for (const [id, w] of Object.entries(words)) {
    if ([...w.hanzi].length === 1) give(w.hanzi, id);
    else whole.set(w.hanzi, id);
    for (const s of Object.values(w.senses ?? {})) give(s.hanzi, id);
  }
  const have = new Set(giver.keys());
  const entries = (freq ?? []).slice(0, top).map((r) => ({ zh: r.zh, py: r.py, rank: r.rank, w: rankWeight(r.rank), cs: [...new Set(r.zh)], owner: whole.get(r.zh) ?? null }));
  const entriesOf = new Map(); // hanzi or owner id -> entries
  for (const e of entries) {
    for (const c of e.cs) push(entriesOf, c, e);
    if (e.owner) push(entriesOf, e.owner, e);
  }

  const lostHanzi = (gone) => {
    const lost = new Set();
    for (const id of gone) for (const h of givesOf.get(id) ?? []) if ([...giver.get(h)].every((g) => gone.has(g))) lost.add(h);
    return lost;
  };
  const writable = (e, gone, lost, added) => !!(e.owner && !gone.has(e.owner)) || e.cs.every((c) => (have.has(c) && !lost.has(c)) || added.has(c));
  const NONE = new Set();

  // -> the frequency words that can be written after adding these roots and dropping these words, and that can't now (or the reverse)
  function mandarinDelta(added = NONE, gone = NONE, { detail = false } = {}) {
    const lost = lostHanzi(gone);
    const touched = new Set();
    for (const c of [...added, ...lost]) for (const e of entriesOf.get(c) ?? []) touched.add(e);
    for (const id of gone) for (const e of entriesOf.get(id) ?? []) touched.add(e);
    let gained = 0;
    let dropped = 0;
    let gainedCount = 0;
    let lostCount = 0;
    const gainedWords = [];
    const lostWords = [];
    for (const e of touched) {
      const before = writable(e, NONE, NONE, NONE);
      const after = writable(e, gone, lost, added);
      if (after && !before) (gained += e.w, gainedCount++, detail && gainedWords.push(e));
      if (before && !after) (dropped += e.w, lostCount++, detail && lostWords.push(e));
    }
    return { gained, lost: dropped, gainedCount, lostCount, net: gained - dropped, gainedWords, lostWords };
  }

  // -- the consequences of dropping a set of words ---------------------------------------------------------------
  // -> { counts, parts (the cost of each part), cost, costBase (without Mandarin), lists }
  function consequences(ids, { detail = false } = {}) {
    const gone = ids instanceof Set ? ids : new Set(ids);
    const lists = { redo: [], loses: [], headLost: [], sentences: [], coverageLost: [], coverageTouched: [], definitions: [], senses: [], relations: [], mandarin: [] };
    const n = {};
    const keep = (k, x) => detail && lists[k].push(x);

    // composites
    const redo = new Set();
    let redoW = 0;
    let losesW = 0;
    const candidates = new Set();
    for (const id of gone) for (const i of compsOf.get(id) ?? []) candidates.add(i);
    for (const i of candidates) {
      const c = comps[i];
      const broken = c.forms.filter((f) => [...f].some((id) => gone.has(id))).length;
      if (broken === c.forms.length) (redo.add(c.zh), (redoW += c.w), keep('redo', c));
      else if (broken) ((losesW += c.w), keep('loses', c));
    }
    n.redo = redo.size;
    n.loses = candidates.size - redo.size;
    const headLost = new Set();
    for (const id of gone) for (const zh of headWord.get(id) ?? []) if (!redo.has(zh)) headLost.add(zh);
    for (const d of redo) for (const zh of headComp.get(d) ?? []) if (!redo.has(zh)) headLost.add(zh);
    n.headLost = headLost.size;
    if (detail) lists.headLost = [...headLost];

    // the book
    const seen = new Set();
    let lessonLines = 0;
    let compositeExamples = 0;
    for (const id of gone) {
      for (const s of sentencesOf.get(id) ?? []) {
        if (seen.has(s.id)) continue;
        seen.add(s.id);
        if (LESSON_LINES.has(s.kind)) lessonLines++;
        else compositeExamples++;
        keep('sentences', s);
      }
    }
    let mentions = 0;
    for (const id of gone) for (const m of mentionsOf.get(id) ?? []) mentions += m.n;
    n.sentences = seen.size;
    n.lessonLines = lessonLines;
    n.compositeExamples = compositeExamples;
    n.mentions = mentions;

    // coverage
    const hit = new Set();
    for (const id of gone) for (const i of itemsOf.get(id) ?? []) hit.add(i);
    let coverageLost = 0;
    let coverageTouched = 0;
    for (const i of hit) {
      const it = items[i];
      const lostItem = it.forms.length > 0 && it.forms.every((f) => [...f].some((id) => gone.has(id)));
      if (lostItem) (coverageLost++, keep('coverageLost', it));
      else if ([...it.carriers].some((id) => gone.has(id))) (coverageTouched++, keep('coverageTouched', it));
    }
    n.coverageLost = coverageLost;
    n.coverageTouched = coverageTouched;

    // the rest
    const named = new Set();
    for (const id of gone) for (const v of namedBy.get(id) ?? []) if (!gone.has(v)) named.add(v);
    n.definitions = named.size;
    if (detail) lists.definitions = [...named];
    const senseHit = new Set();
    for (const id of gone) for (const k of catchAllOf.get(id) ?? []) senseHit.add(k);
    let dead = 0;
    for (const k of senseHit) {
      const s = catchAll[k];
      if (!gone.has(s.id) && s.compounds.every((c) => [...c].some((id) => gone.has(id)))) (dead++, keep('senses', s));
    }
    n.senses = dead;
    const relHit = new Set();
    for (const id of gone) for (const k of pairsOf.get(id) ?? []) if (gone.has(pairs[k].a) !== gone.has(pairs[k].b)) relHit.add(`p${k}`);
    for (const id of gone) for (const k of phrasesOf.get(id) ?? []) if (!gone.has(phrases[k].word)) relHit.add(`f${k}`);
    n.relations = relHit.size;
    if (detail) lists.relations = [...relHit].map((x) => (x[0] === 'p' ? pairs[+x.slice(1)] : phrases[+x.slice(1)]));

    // Mandarin
    const m = freq ? mandarinDelta(NONE, gone, { detail }) : { lost: 0, lostCount: 0, lostWords: [] };
    n.mandarin = m.lostCount;
    if (detail) lists.mandarin = m.lostWords;

    const parts = {
      redo: COSTS.redo * redoW,
      loses: COSTS.loses * losesW,
      headLost: COSTS.headLost * headLost.size,
      lessonLine: COSTS.lessonLine * lessonLines,
      compositeExample: COSTS.compositeExample * compositeExamples,
      mention: COSTS.mention * mentions,
      coverageLost: COSTS.coverageLost * coverageLost,
      coverageTouched: COSTS.coverageTouched * coverageTouched,
      definition: COSTS.definition * named.size,
      sense: COSTS.sense * dead,
      relation: COSTS.relation * relHit.size,
      mandarin: COSTS.mandarin * m.lost,
    };
    const cost = PARTS.reduce((a, k) => a + parts[k], 0);
    return { counts: n, parts, cost, costBase: cost - parts.mandarin, lists };
  }

  // -- candidates to remove -----------------------------------------------------------------------------------
  // The words that may go: by default the ones nobody has marked as an atom. `drafts` says how each
  // would be said without it: { id: { forms: ['plain pinyin', …], verdict?: 'clumsy' } } (the stored
  // paraphrase is used first).
  function removalCandidates({ pool, drafts = {}, includeAtoms = false } = {}) {
    const ids = pool ?? Object.keys(words).filter((id) => includeAtoms || !words[id].atom);
    return ids
      .map((id) => {
        const w = words[id];
        const c = consequences([id]);
        const stored = w.paraphrase?.forms?.length ? { source: 'paraphrase', verdict: w.paraphrase.verdict ?? 'fine', forms: w.paraphrase.forms.map(pin) } : null;
        const draft = !stored && drafts[id]?.forms?.length ? { source: 'draft', verdict: drafts[id].verdict ?? 'fine', forms: drafts[id].forms } : null;
        const said = stored ?? draft ?? (w.atom ? { source: 'atom', forms: [] } : { source: 'none', forms: [] });
        return { id, term: w.term, hanzi: w.hanzi, pos: w.pos?.eng, necessity: w.necessity?.index, atom: !!w.atom, said, cost: c.cost, parts: c.parts, counts: c.counts };
      })
      .sort((a, b) => a.cost - b.cost || a.id.localeCompare(b.id));
  }

  // -- candidates to add ----------------------------------------------------------------------------------------------
  // Hanzi the language does not have, ranked by the frequency words they would complete (those whose other
  // hanzi are all here), the common ones counting more. Needs `freq`.
  const soundOf = new Map(Object.entries(words).map(([id, w]) => [w.term, id]));
  const listed = new Set((source.composites ?? []).map((c) => c.zh));
  const spellable = new Map(); // a missing hanzi -> the composites it alone keeps from being written
  for (const c of source.composites ?? []) {
    const missing = [...new Set(c.zh)].filter((h) => !have.has(h));
    if (missing.length === 1) push(spellable, missing[0], { zh: c.zh, rank: c.rank });
  }

  // -> what one hanzi would be and bring
  function describeRoot(c) {
    const here = (entriesOf.get(c) ?? []).filter((e) => e.cs.includes(c));
    const completes = here.filter((e) => !e.owner && e.cs.every((h) => h === c || have.has(h)));
    const sounds = new Map();
    for (const e of completes.length ? completes : here) {
      const syl = syllables(e.py, e.zh);
      const sound = syl ? syl[[...e.zh].indexOf(c)] : null;
      if (sound) sounds.set(sound, (sounds.get(sound) ?? 0) + 1);
    }
    const sound = [...sounds].sort((x, y) => y[1] - x[1])[0]?.[0] ?? null;
    const clash = sound ? soundOf.get(sound) : undefined;
    const neighbour = sound ? [...soundOf.keys()].find((t) => toneless(t) === toneless(sound) && t !== sound) : undefined;
    return {
      root: c,
      already: giver.has(c) ? [...giver.get(c)].map((id) => ({ id, term: term(id) })) : null,
      sound,
      as: clash ? { kind: 'sense', of: clash, term: term(clash), hanzi: words[clash].hanzi } : { kind: 'new' },
      toneNeighbour: neighbour ? { term: neighbour, id: soundOf.get(neighbour), hanzi: words[soundOf.get(neighbour)].hanzi } : null,
      score: completes.reduce((a, e) => a + e.w, 0),
      completes: completes.map((e) => ({ zh: e.zh, py: e.py, rank: e.rank, listed: listed.has(e.zh) })),
      pending: here.filter((e) => !completes.includes(e) && !e.owner).map((e) => ({ zh: e.zh, rank: e.rank, missing: e.cs.filter((h) => h !== c && !have.has(h)) })),
      spellable: spellable.get(c) ?? [],
    };
  }

  let rootList = null;
  function rootCandidates({ limit } = {}) {
    if (!freq) return null;
    rootList ??= [
      ...new Set(
        entries.flatMap((e) => {
          const missing = e.cs.filter((c) => !have.has(c));
          return missing.length === 1 && !e.owner ? missing : [];
        }),
      ),
    ]
      .map(describeRoot)
      .sort((a, b) => b.score - a.score || b.completes.length - a.completes.length || a.root.localeCompare(b.root));
    return limit ? rootList.slice(0, limit) : rootList;
  }

  // What adding one hanzi as a root would do: the words it completes, the ones that still need more,
  // the composites it lets be spelled, its sound against the words we have.
  function addition(char) {
    const c = [...String(char)][0];
    if (!c) throw new Error('usage: a hanzi');
    if (!freq) return { root: c, noFrequencies: true };
    return describeRoot(c);
  }

  // -- swaps: K roots in, K words out ---------------------------------------------------------------------------------------
  // The value of a trade is the Mandarin it makes writable less everything dropping the words costs.
  // Roots come from rootCandidates, words from removalCandidates (the cheapest `removePool`).
  // K = 1 looks at every pair. For more, up to K trades: the best pair, then the best pair added to
  // those, as long as the value rises, then one change at a time while it improves.
  function swaps({ k = 1, addPool = 300, removePool = 80, drafts } = {}) {
    const roots = (rootCandidates() ?? []).slice(0, addPool).map((r) => r.root);
    const out = removalCandidates({ drafts }).slice(0, removePool).map((r) => r.id);
    const cache = new Map();
    const base = (rm) => {
      const key = [...rm].sort().join(',');
      if (!cache.has(key)) cache.set(key, consequences(rm).costBase);
      return cache.get(key);
    };
    const value = (adds, rms) => mandarinDelta(new Set(adds), new Set(rms)).net - base(rms);
    const started = performance.now();
    let best = { adds: [], removes: [], value: 0 };
    let evaluated = 0;
    if (k === 1) {
      for (const y of out) {
        for (const x of roots) {
          evaluated++;
          const v = value([x], [y]);
          if (v > best.value) best = { adds: [x], removes: [y], value: v };
        }
      }
    } else {
      let adds = [];
      let rms = [];
      let cur = 0;
      for (let step = 0; step < k; step++) {
        let pick = null;
        for (const x of roots) {
          if (adds.includes(x)) continue;
          for (const y of out) {
            if (rms.includes(y)) continue;
            evaluated++;
            const v = value([...adds, x], [...rms, y]);
            if (!pick || v > pick.v) pick = { x, y, v };
          }
        }
        if (!pick || pick.v <= cur) break;
        adds = [...adds, pick.x];
        rms = [...rms, pick.y];
        cur = pick.v;
      }
      for (let improved = true; improved; ) {
        improved = false;
        for (let i = 0; i < adds.length && !improved; i++) {
          for (const x of roots) {
            if (adds.includes(x)) continue;
            const t = adds.slice();
            t[i] = x;
            evaluated++;
            const v = value(t, rms);
            if (v > cur) ((adds = t), (cur = v), (improved = true));
            if (improved) break;
          }
        }
        for (let i = 0; i < rms.length && !improved; i++) {
          for (const y of out) {
            if (rms.includes(y)) continue;
            const t = rms.slice();
            t[i] = y;
            evaluated++;
            const v = value(adds, t);
            if (v > cur) ((rms = t), (cur = v), (improved = true));
            if (improved) break;
          }
        }
      }
      best = { adds, removes: rms, value: cur };
    }
    const m = mandarinDelta(new Set(best.adds), new Set(best.removes), { detail: true });
    const c = consequences(best.removes);
    return {
      k,
      ...best,
      mandarin: { gained: m.gained, lost: m.lost, gainedWords: m.gainedWords.map((e) => e.zh), lostWords: m.lostWords.map((e) => e.zh) },
      cost: c.costBase,
      parts: { ...c.parts, mandarin: 0 }, // the Mandarin lost is counted in the value, shown apart
      evaluated,
      ms: Math.round(performance.now() - started),
      pools: { roots: roots.length, words: out.length },
    };
  }

  return { consequences, mandarinDelta, removalCandidates, rootCandidates, addition, swaps, hasFrequencies: !!freq, entries: entries.length };
}

// -- as text ------------------------------------------------------------------------------------------------------------

const SHORT = {
  redo: 'redo',
  loses: 'loses form',
  headLost: 'head',
  lessonLine: 'lessons',
  compositeExample: 'examples',
  mention: 'mentions',
  coverageLost: 'coverage lost',
  coverageTouched: 'coverage touched',
  definition: 'definitions',
  sense: 'senses',
  relation: 'relations',
  mandarin: 'Mandarin',
};
const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(2).replace(/0+$/, ''));
const show = (parts) =>
  PARTS.filter((k) => parts[k])
    .map((k) => `${SHORT[k]} ${fmt(parts[k])}`)
    .join(', ') || 'nothing';

export function renderRemovalCandidates(rows, { limit = 20 } = {}) {
  const out = [`Words that could go, the cheapest first (${rows.length} words; cost = ${PARTS.map((k) => `${SHORT[k]}`).join(' + ')}, see COSTS in candidates.js)`];
  for (const r of rows.slice(0, limit)) {
    const how = r.said.source === 'atom' ? 'an atom: nothing replaces it' : r.said.source === 'none' ? 'no replacement yet' : `${r.said.source === 'draft' ? 'draft' : 'said'}: ${r.said.forms.join(' / ')}${r.said.verdict === 'clumsy' ? ' (clumsy)' : ''}`;
    out.push(`  ${fmt(r.cost).padStart(6)}  ${r.term} ${r.hanzi} (${r.id}, ${r.pos ?? '?'})  ${show(r.parts)}  [${how}]`);
  }
  if (rows.length > limit) out.push(`  … and ${rows.length - limit} more`);
  return out.join('\n');
}

export function renderRootCandidates(rows, { limit = 20 } = {}) {
  if (!rows) return 'No frequency list found (set HSD_FREQ_CSV), so no roots can be ranked.';
  const out = [`Roots that would complete the most Mandarin words (${rows.length} roots; the top 1000 words count 3, the top 2000 count 2, the rest 1)`];
  for (const r of rows.slice(0, limit)) {
    const as = r.as.kind === 'sense' ? `sense of ${r.as.term} ${r.as.hanzi}` : 'new word';
    const near = r.toneNeighbour ? `  [tone: ${r.toneNeighbour.term} ${r.toneNeighbour.hanzi}]` : '';
    const sp = r.spellable.length ? `, ${r.spellable.length} composite(s) could be spelled` : '';
    out.push(`  ${r.root} ${(r.sound ?? '?').padEnd(6)} score ${String(r.score).padStart(3)}, ${String(r.completes.length).padStart(2)} words  ${as}${near}${sp}  ${r.completes.slice(0, 8).map((w) => w.zh).join(' ')}`);
  }
  if (rows.length > limit) out.push(`  … and ${rows.length - limit} more`);
  return out.join('\n');
}

export function renderAddition(r) {
  if (r.noFrequencies) return 'No frequency list found (set HSD_FREQ_CSV), so nothing can be said about a root.';
  const out = [];
  if (r.already) out.push(`${r.root} is already in the language, from ${r.already.map((a) => a.term).join(', ')}.`);
  const as = r.as.kind === 'sense' ? `a sense of ${r.as.term} ${r.as.hanzi}` : 'a new word';
  out.push(`Add ${r.root}${r.sound ? ` (${r.sound})` : ''}: it would be ${as}${r.toneNeighbour ? `, next to ${r.toneNeighbour.term} ${r.toneNeighbour.hanzi}` : ''}.`);
  out.push(`  Completes ${r.completes.length} Mandarin word(s), score ${r.score}: ${r.completes.slice(0, 20).map((w) => `${w.zh}${w.listed ? '' : '*'}`).join(' ') || 'none'}${r.completes.some((w) => !w.listed) ? '   (* not among the composites yet)' : ''}`);
  out.push(`  Still needs more roots: ${r.pending.length} word(s)${r.pending.length ? `, e.g. ${r.pending.slice(0, 8).map((w) => `${w.zh} (+${w.missing.join('')})`).join(' ')}` : ''}`);
  out.push(`  Composites it would let be spelled: ${r.spellable.length ? r.spellable.map((x) => x.zh).join(' ') : 'none'}`);
  return out.join('\n');
}

export function renderSwaps(r) {
  if (!r.adds.length) return `No trade of ${r.k} root(s) for ${r.k} word(s) has a positive value (looked at ${r.evaluated} in ${r.ms} ms).`;
  const out = [`Best trade of ${r.k}: add ${r.adds.join(' ')}, drop ${r.removes.join(', ')}: value ${fmt(r.value)} (Mandarin +${r.mandarin.gained} -${r.mandarin.lost}, cost ${fmt(r.cost)}: ${show(r.parts)})`];
  out.push(`  Words that become writable: ${r.mandarin.gainedWords.slice(0, 20).join(' ')}${r.mandarin.gainedWords.length > 20 ? ` … (${r.mandarin.gainedWords.length})` : ''}`);
  if (r.mandarin.lostWords.length) out.push(`  Words that can no longer be written: ${r.mandarin.lostWords.slice(0, 20).join(' ')}`);
  out.push(`  Looked at ${r.evaluated} choices from ${r.pools.roots} roots and ${r.pools.words} words in ${r.ms} ms.`);
  return out.join('\n');
}

// -- the audit for the author ------------------------------------------------------------------------------------------

const cell = (s) => String(s).replace(/\|/g, '/');

// -> markdown: the cheapest words to drop, the best roots to add, the best trades, and how the numbers are made.
export function renderAudit(model, { drafts = {}, now = new Date(), limit = 30, ks = [1, 2, 3, 5, 8] } = {}) {
  const out = [`# Candidates audit, ${new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)}`, ''];
  out.push('Made by `node scripts/kb.js audit`. Nothing here has been decided: it is a list of what the knowledge base would try first, for the author to accept, change or throw away. Run it again after any change; the numbers move.', '');
  const rows = model.removalCandidates({ drafts });
  out.push(`## Words that could go (${rows.length} words, the ${Math.min(limit, rows.length)} cheapest)`, '');
  out.push('Words marked as atoms are left out. The cost is the sum of the parts; each part is a count times a weight (see the end). "Said as" is the draft from the proposals, not an accepted paraphrase.', '');
  out.push('| word | cost | what it costs | said as |', '| --- | ---: | --- | --- |');
  for (const r of rows.slice(0, limit)) {
    const how = r.said.source === 'atom' ? 'an atom' : r.said.source === 'none' ? 'no draft' : `${r.said.forms.join(' / ')}${r.said.verdict === 'clumsy' ? ' (clumsy)' : ''}`;
    out.push(`| ${r.term} ${r.hanzi} | ${fmt(r.cost)} | ${cell(show(r.parts))} | ${cell(how)} |`);
  }
  out.push('');
  const roots = model.rootCandidates();
  out.push('## Roots to add', '');
  if (!roots) out.push('No frequency list was found (set `HSD_FREQ_CSV`), so no roots can be ranked.', '');
  else {
    out.push(`${roots.length} hanzi would complete at least one of the common Mandarin words. The ${Math.min(limit, roots.length)} that complete the most:`, '');
    out.push('| root | sound | as | score | words it completes | composites it lets be spelled |', '| --- | --- | --- | ---: | --- | ---: |');
    for (const r of roots.slice(0, limit)) {
      const as = r.as.kind === 'sense' ? `a sense of ${r.as.term} ${r.as.hanzi}` : r.toneNeighbour ? `new word (next to ${r.toneNeighbour.term} ${r.toneNeighbour.hanzi})` : 'new word';
      out.push(`| ${r.root} | ${r.sound ?? '?'} | ${as} | ${r.score} | ${r.completes.slice(0, 8).map((w) => w.zh).join(' ')} (${r.completes.length}) | ${r.spellable.length} |`);
    }
    out.push('');
    out.push('## Trades: K roots in, K words out', '');
    out.push('The core keeps its size. The value is the Mandarin words that become writable, less the Mandarin words lost and everything dropping the words costs.', '');
    for (const k of ks) {
      const r = model.swaps({ k, drafts });
      out.push(`### K = ${k}`, '');
      if (!r.adds.length) out.push('No trade pays.', '');
      else {
        out.push(`- bring in: ${r.adds.join(' ')}`, `- drop: ${r.removes.map((id) => `${rows.find((x) => x.id === id)?.term ?? id} ${rows.find((x) => x.id === id)?.hanzi ?? ''}`.trim()).join(', ')}`);
        out.push(`- value ${fmt(r.value)}: ${r.mandarin.gainedWords.length} Mandarin words become writable, ${r.mandarin.lostWords.length} are lost, the drop costs ${fmt(r.cost)} (${show(r.parts)})`, '');
      }
    }
  }
  out.push('## How the numbers are made', '');
  out.push('- **Cost** of dropping a word: composites left with no form (weighted by rank: top 1000 count 3, top 2000 count 2, the rest 1), composites losing a form, composites hanging under it, lesson lines to rewrite, composite examples, other mentions, coverage lost or touched, other words that name it, catch-all senses left empty, opposite and close pairs that break, and the Mandarin words that could no longer be written.');
  out.push(`- **Weights** (\`COSTS\` in \`src/lib/kb/candidates.js\`): ${PARTS.map((k) => `${SHORT[k]} ${COSTS[k]}`).join(', ')}. These are my first guesses; change them and run the audit again.`);
  out.push('- **Mandarin** is the first 6000 words of the frequency list. A word can be written when each of its hanzi is a Hao-shuo-de word (or a sense of one), or the word itself is in the dictionary.');
  out.push('- The counts are checked against the solver\'s removal report (`kb remove`), which also gives the reason for every line.');
  return out.join('\n') + '\n';
}
