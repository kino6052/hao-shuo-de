// English to Hao-shuo-de (KB_PLAN.md phase 6, K4, K15): given an English word, which entries say it, in three tiers.
//
//   1. glosses    an entry whose English gloss has the word ("quick, to run" has "quick" and "run")
//   2. same sense an entry linked to a WordNet synset the word belongs to: its synonyms ("buy" finds the gloss of 买)
//   3. kind of    nothing in 1 and 2: walk up "is a kind of" from the word's senses to the first entry on the way, which
//                 offers "…-de X" as a starting description ("sparrow" -> bird -> "…-de niǎo")
//
//   createEnglish({ composites, links, index }) -> { lookup(text), senses(zh), ready }
//
// composites  the dictionary's entries [{ zh, py, en, pos }]
// links       kb/wordnet/links.json: { linked: { zh: [ili] }, words: { id: [ili] } }
// index       kb/cache/english-index.json, built by scripts/python/link_wordnet.py (gitignored):
//             { lemmas: { word: [ili] }, synsets: { ili: { p, d, l, h, ... } }, forms: { took: ['take'] } }. Without it only tier 1 answers.
//             (cross-check.js and frontier.js read more of a synset: a antonyms, w wholes, z Mandarin words.)
// A link or a hanzi that is not in the data is left out; nothing here changes data.

const MAX_WALK = 6; // how far up "is a kind of" tier 3 climbs
const MAX_PER_TIER = 12;
const MAX_SENSES = 3; // tier 3 follows only the first senses of the word: the rare ones lead nowhere useful

// 'quick, to run (fast)' -> ['quick', 'run']: the same cut the Python linker makes
export function glosses(en) {
  const out = [];
  for (const part of String(en ?? '').replace(/\([^)]*\)/g, '').split(/[,;/]/)) {
    const g = part.trim().toLowerCase().replace(/^(to|a|an|the)\s+/, '');
    if (g && !out.includes(g)) out.push(g);
  }
  return out;
}

// the forms of an English word WordNet may list it under: cats -> cat, running -> run, bigger -> big
export function baseForms(word) {
  const w = word.toLowerCase().trim();
  const out = [w];
  const add = (x) => x.length > 1 && !out.includes(x) && out.push(x);
  if (w.endsWith('ies')) add(`${w.slice(0, -3)}y`);
  if (w.endsWith('es')) add(w.slice(0, -2));
  if (w.endsWith('s')) add(w.slice(0, -1));
  if (w.endsWith('ied')) add(`${w.slice(0, -3)}y`);
  if (w.endsWith('ed')) {
    add(w.slice(0, -2));
    add(w.slice(0, -1));
  }
  if (w.endsWith('ing')) {
    add(w.slice(0, -3));
    add(`${w.slice(0, -3)}e`);
    if (/(.)\1$/.test(w.slice(0, -3))) add(w.slice(0, -4));
  }
  if (w.endsWith('er') || w.endsWith('est')) add(w.slice(0, w.endsWith('er') ? -2 : -3));
  return out;
}

export function createEnglish({ composites = [], links = {}, index = null } = {}) {
  const byZh = new Map(composites.map((c) => [c.zh, c]));
  const linked = links.linked ?? {};
  // the entries behind each synset
  const byIli = new Map();
  for (const [zh, ilis] of Object.entries(linked)) {
    if (!byZh.has(zh)) continue;
    for (const ili of ilis) byIli.set(ili, [...(byIli.get(ili) ?? []), zh]);
  }
  // the entries behind each gloss word
  const byGloss = new Map();
  for (const c of composites) {
    for (const g of glosses(c.en)) byGloss.set(g, [...(byGloss.get(g) ?? []), c.zh]);
  }
  const entry = (zh) => {
    const c = byZh.get(zh);
    return { zh, py: c.py, en: c.en, pos: c.pos };
  };
  const synset = (ili) => index?.synsets?.[ili];
  const ilisOf = (word) => {
    if (!index) return [];
    // the word itself, or the base of its regular ending, then the base an entry lists for an irregular form (saw -> see)
    let found = [];
    for (const form of baseForms(word)) {
      if (index.lemmas?.[form]?.length) {
        found = index.lemmas[form];
        break;
      }
    }
    for (const base of index.forms?.[word.toLowerCase().trim()] ?? []) found = [...found, ...(index.lemmas?.[base] ?? []).filter((i) => !found.includes(i))];
    return found;
  };
  const sense = (ili) => {
    const s = synset(ili);
    return s ? { ili, pos: s.p, definition: s.d, lemmas: s.l } : { ili };
  };

  // tier 3: for each of the first senses of the word (the common ones), the first entries met on the way up, nearest first.
  // A later sense counts only when it is no farther away than the first one that found something: "puppy" is a young dog
  // (dog, one step) before it is a young person (person, three steps), and the second would only mislead.
  const walkUp = (ilis) => {
    const out = [];
    let nearest = Infinity;
    for (const start of ilis.slice(0, MAX_SENSES)) {
      const seen = new Set([start]);
      let layer = [{ ili: start, path: [] }];
      const found = [];
      for (let depth = 0; depth < MAX_WALK && layer.length && !found.length; depth++) {
        const next = [];
        for (const { ili, path } of layer) {
          for (const up of synset(ili)?.h ?? []) {
            if (seen.has(up)) continue;
            seen.add(up);
            const via = [...path, synset(up)?.l?.[0] ?? up];
            if (byIli.has(up)) for (const zh of byIli.get(up)) found.push({ ...entry(zh), via, steps: depth + 1, start: `…-de ${byZh.get(zh).py}`, sense: sense(start) });
            else next.push({ ili: up, path: via });
          }
        }
        layer = next;
      }
      if (!found.length || found[0].steps > nearest) continue;
      nearest = found[0].steps;
      for (const f of found) if (!out.some((o) => o.zh === f.zh)) out.push(f);
    }
    return out.slice(0, MAX_PER_TIER);
  };

  return {
    ready: !!index,
    data: { links, index }, // what the other checks (cross-check.js, frontier.js) read, so the 20 MB are read once
    senseIds: ilisOf, // an English word's senses, the common ones first

    // -> the entries met on the way up from an entry's own senses (what WordNet calls its kind), nearest first, as tier 3 gives them
    startsFrom: (zh) => walkUp(linked[zh] ?? []).filter((f) => f.zh !== zh),

    // -> { query, glosses: [entry], sameSense: [{ sense, entries }], kindOf: [entry + via, steps, start], note? }
    lookup(text) {
      const query = String(text ?? '').trim().toLowerCase().replace(/^(to|a|an|the)\s+/, '');
      const out = { query, glosses: [], sameSense: [], kindOf: [] };
      if (!query) return out;
      const hit = new Set();
      for (const form of baseForms(query)) for (const zh of byGloss.get(form) ?? []) hit.add(zh);
      out.glosses = [...hit].slice(0, MAX_PER_TIER).map(entry);
      if (!index) {
        out.note = 'The English index is not built (npm run wordnet), so only the glosses answer.';
        return out;
      }
      const ilis = ilisOf(query);
      for (const ili of ilis) {
        const zhs = (byIli.get(ili) ?? []).filter((zh) => !hit.has(zh));
        if (zhs.length) out.sameSense.push({ sense: sense(ili), entries: zhs.map(entry) });
      }
      out.sameSense = out.sameSense.slice(0, MAX_PER_TIER);
      if (!out.glosses.length && !out.sameSense.length) out.kindOf = walkUp(ilis);
      if (!ilis.length && !out.glosses.length) out.note = `"${query}" is not in the English WordNet.`;
      return out;
    },

    // -> an entry's WordNet senses, for its card: [{ ili, pos, definition, lemmas, kindOf: [lemma] }]
    senses(zh) {
      return (linked[zh] ?? []).map((ili) => ({ ...sense(ili), kindOf: (synset(ili)?.h ?? []).map((h) => synset(h)?.l?.[0] ?? h) }));
    },
  };
}

// the lookup as text
export function renderEnglish(r) {
  const line = (e) => `  ${e.zh} ${e.py}: ${e.en}${e.start ? `   (${e.sense.lemmas[0]}: ${e.sense.definition?.slice(0, 40)} -> ${e.via.join(' < ')}; starts as ${e.start})` : ''}`;
  const out = [`English "${r.query}"`];
  if (r.glosses.length) out.push('Said by the gloss:', ...r.glosses.map(line));
  for (const s of r.sameSense) out.push(`Same sense (${s.sense.pos}: ${s.sense.definition}):`, ...s.entries.map(line));
  if (r.kindOf.length) out.push('A kind of (nothing says it directly):', ...r.kindOf.map(line));
  if (!r.glosses.length && !r.sameSense.length && !r.kindOf.length) out.push('Nothing says it yet.');
  if (r.note) out.push(r.note);
  return out.join('\n');
}
