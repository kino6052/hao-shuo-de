// Meaning links (KB_PLAN.md K19, phase 5): what the words say of the NSM primes, Aristotle's categories and the
// grammar items, and which primes each description reaches. Built from what the data already states, no review
// needed to start; nothing here changes data.
//
//   meaningReport(source)              -> the report (see below)
//   meaningWord(report, id)            -> one word's line: what it says, what it is made of
//   renderMeaning(report, words, opts) -> text ({ section: 'says' | 'atoms' | 'grounding', limit })
//   renderMeaningWord(line, words)     -> that line as text
//
// An item is a coverage item (src/data/coverage): a prime (group "atoms"), a category ("categories") or a
// grammar item ("grammar"). Its carriers are the words that say it; a grammar pattern can carry it too (`covers`).
//
//   items      [{ id, group, key, eng, carriers, patterns, forms }]
//   groups     { atoms|categories|grammar: { items, said, once, none } }       once: carried by one word or pattern in all
//   atoms      the atom marks against the primes:
//              { marked, markedPrime, markedOther, primeNotMarked, primeDescribed: [{ id, names }] }
//   grounding  the primes each description reaches through the words it names:
//              { depth: { id: n }, reached: { id: [prime key] }, histogram, unreached, unreachedAtoms }
//              depth 0 is a word that says a prime; 1 names such a word in its description; and so on.
//              A description is the definition, the note on why the word is needed, what its senses say, and its
//              paraphrase forms. A word with no way down to a prime cannot be traced to one.
//   lines      { id: { says, own, direct, reaches, depth, names } } for every word: the primes it says (own), the primes of
//              the words its description names (direct), all the primes it reaches through them (reaches: the closure, which
//              grows to nearly every prime once a function word like de is on the way), the step of the nearest prime
//
// NSM would say a prime has no description: a word that says a prime and still names other words is listed
// under primeDescribed, for the author to call an atom or to say the prime another way.

import { describedBy } from './facts.js';
import { wordRefIds } from '../word-refs.js';

const PRIMES = 'atoms';
const GROUP_NAMES = { atoms: 'primes', categories: 'categories', grammar: 'grammar items' };
const groupName = (key) => GROUP_NAMES[key] ?? key;

export function meaningReport(source) {
  const words = source.words ?? {};
  const ids = Object.keys(words);
  const known = (id) => Object.hasOwn(words, id);
  const patterns = source.patterns ?? [];

  // -- says ------------------------------------------------------------------------------------------
  const items = [];
  const says = Object.fromEntries(ids.map((id) => [id, []]));
  for (const g of source.coverage ?? []) {
    for (const it of g.items) {
      const id = `${g.key}:${it.key}`;
      const carriers = [...new Set(it.words ?? [])].filter(known);
      const carrying = patterns.filter((p) => (p.covers ?? []).includes(id)).map((p) => p.id);
      items.push({ id, group: g.key, key: it.key, eng: it.eng, carriers, patterns: carrying, forms: it.forms ?? [] });
      for (const w of carriers) says[w].push(id);
    }
  }
  const groups = {};
  for (const it of items) {
    const g = (groups[it.group] ??= { items: [], said: 0, once: 0, none: 0 });
    const n = it.carriers.length + it.patterns.length;
    g.items.push(it.id);
    if (n === 0) g.none++;
    else g.said++;
    if (n === 1) g.once++;
  }

  // -- what a description names -----------------------------------------------------------------------
  const names = {};
  for (const id of ids) {
    const set = describedBy(id, words[id], known);
    for (const f of words[id].paraphrase?.forms ?? []) for (const v of wordRefIds(f)) if (known(v) && v !== id) set.add(v);
    names[id] = [...set];
  }

  // -- atoms against primes ---------------------------------------------------------------------------
  const primeItems = items.filter((i) => i.group === PRIMES);
  const sayPrime = new Set(primeItems.flatMap((i) => i.carriers));
  const marked = ids.filter((id) => words[id].atom);
  const atoms = {
    marked: marked.length,
    markedPrime: marked.filter((id) => sayPrime.has(id)),
    markedOther: marked.filter((id) => !sayPrime.has(id)),
    primeNotMarked: [...sayPrime].filter((id) => !words[id].atom),
    primeDescribed: [...sayPrime].filter((id) => names[id].length).map((id) => ({ id, names: names[id] })),
  };

  // -- the primes a description reaches ---------------------------------------------------------------
  const own = Object.fromEntries(ids.map((id) => [id, new Set(says[id].filter((i) => i.startsWith(`${PRIMES}:`)).map((i) => i.slice(PRIMES.length + 1)))]));
  const reached = Object.fromEntries(ids.map((id) => [id, new Set(own[id])]));
  const depth = {};
  for (const id of ids) if (own[id].size) depth[id] = 0;
  for (let changed = true; changed; ) {
    changed = false;
    for (const id of ids) {
      for (const v of names[id]) {
        for (const p of reached[v]) if (!reached[id].has(p)) (reached[id].add(p), (changed = true));
        if (depth[v] !== undefined && depth[v] + 1 < (depth[id] ?? Infinity)) (depth[id] = depth[v] + 1, (changed = true));
      }
    }
  }
  const histogram = {};
  for (const d of Object.values(depth)) histogram[d] = (histogram[d] ?? 0) + 1;
  const unreached = ids.filter((id) => depth[id] === undefined);
  const grounding = {
    depth,
    reached: Object.fromEntries(ids.map((id) => [id, [...reached[id]]])),
    histogram,
    unreached: unreached.filter((id) => !words[id].atom),
    unreachedAtoms: unreached.filter((id) => words[id].atom),
  };

  const lines = Object.fromEntries(
    ids.map((id) => {
      const direct = [...new Set(names[id].flatMap((v) => [...own[v]]))];
      return [id, { says: says[id], own: [...own[id]], direct, reaches: [...reached[id]].filter((p) => !own[id].has(p)), depth: depth[id], names: names[id] }];
    }),
  );
  return { items, groups, atoms, grounding, lines, totals: { words: ids.length, items: items.length } };
}

// -> one word's line, or null for a word that is not there
export const meaningWord = (report, id) => report.lines[id] ?? null;

// -- as text ------------------------------------------------------------------------------------------

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const term = (words, id) => words[id]?.term ?? id;
const termList = (words, list, limit) => {
  const shown = list.slice(0, limit).map((id) => term(words, id));
  return shown.join(', ') + (list.length > limit ? `, … (${list.length - limit} more)` : '');
};

export function renderMeaning(report, words = {}, { section = 'all', limit = 12 } = {}) {
  const out = [];
  const g = report.groups;
  const all = section === 'all';

  if (all || section === 'says') {
    const parts = Object.entries(g).map(([k, v]) => `${groupName(k)} ${v.items.length}`);
    out.push(`Meaning links: ${plural(report.totals.items, 'coverage item')} (${parts.join(', ')}); ${plural(report.totals.words, 'word')}.`);
    out.push('', 'Says: which words and patterns carry each item');
    for (const [k, v] of Object.entries(g)) {
      out.push(`  ${groupName(k)}: ${v.said} of ${v.items.length} can be said; ${v.none} have no carrier; ${v.once} are carried once (take that carrier away and the item cannot be said).`);
    }
    const once = report.items.filter((i) => i.carriers.length + i.patterns.length === 1);
    if (once.length) {
      out.push('', `Carried once (${once.length}), the fragile ones`);
      for (const i of once.slice(0, limit * 2)) {
        const by = i.carriers.length ? `word ${termList(words, i.carriers, 1)}` : `pattern ${i.patterns[0]}`;
        out.push(`  ${i.id} (${i.eng})  by ${by}`);
      }
      if (once.length > limit * 2) out.push(`  … and ${once.length - limit * 2} more (--limit N)`);
    }
    const none = report.items.filter((i) => !i.carriers.length && !i.patterns.length);
    if (none.length) out.push('', `No carrier: ${none.map((i) => i.id).join(', ')}.`);
  }

  if (all || section === 'atoms') {
    const a = report.atoms;
    out.push(...(all ? [''] : []), `Atoms against primes (${plural(g[PRIMES]?.items.length ?? 0, 'prime')})`);
    out.push(`  Marked as atoms: ${a.marked}. ${a.markedPrime.length} say a prime, ${a.markedOther.length} say none (${termList(words, a.markedOther, 8)}).`);
    out.push(`  Say a prime and are not marked as atoms (${a.primeNotMarked.length}): ${termList(words, a.primeNotMarked, limit)}.`);
    out.push(`  Say a prime and still name other words in their description (${a.primeDescribed.length}; NSM would say a prime has none, so the author calls it an atom or says the prime another way):`);
    for (const d of a.primeDescribed.slice(0, limit)) out.push(`    ${term(words, d.id)}  names ${termList(words, d.names, 6)}`);
    if (a.primeDescribed.length > limit) out.push(`    … and ${a.primeDescribed.length - limit} more (--limit N)`);
  }

  if (all || section === 'grounding') {
    const gr = report.grounding;
    const total = report.totals.words;
    const reachedCount = total - gr.unreached.length - gr.unreachedAtoms.length;
    out.push(...(all ? [''] : []), 'Made of primes');
    const steps = Object.entries(gr.histogram).sort((x, y) => x[0] - y[0]).map(([d, n]) => `${n} at step ${d}`);
    out.push(`  ${reachedCount} of ${plural(total, 'word')} reach a prime through the words their description names (${steps.join(', ')}); step 0 is a word that says a prime.`);
    out.push(`  Not reaching one: ${gr.unreachedAtoms.length} marked as atoms (nothing to trace), and ${gr.unreached.length} that are not atoms, whose description goes nowhere${gr.unreached.length ? ':' : '.'}`);
    if (gr.unreached.length) out.push(`    ${termList(words, gr.unreached, limit * 3)}`);
  }
  return out.join('\n');
}

export function renderMeaningWord(line, words = {}, item = (id) => id) {
  if (!line) return 'No such word.';
  const out = [];
  out.push(line.says.length ? `Says: ${line.says.map(item).join(', ')}.` : 'Says no prime, category or grammar item by itself.');
  const named = line.names.length ? `Its description names ${termList(words, line.names, 8)}` : 'Its description names no other word';
  if (line.depth === undefined) {
    out.push(`${named}, and none of it leads to a prime: it cannot be traced down.`);
  } else {
    const said = line.direct.length ? `; of those, ${plural(line.direct.length, 'prime')} ${line.direct.length === 1 ? 'is' : 'are'} said directly (${line.direct.slice(0, 8).join(', ')}${line.direct.length > 8 ? ', …' : ''})` : '';
    const step = line.depth === 0 ? 'It is a prime word itself.' : `The nearest prime is ${plural(line.depth, 'step')} away.`;
    const all = line.names.length ? ` Through the words they name it reaches ${plural(new Set([...line.own, ...line.reaches]).size, 'prime')} in all.` : '';
    out.push(`${named}${said}. ${step}${all}`);
  }
  return out.join('\n');
}
