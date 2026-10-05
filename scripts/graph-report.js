#!/usr/bin/env node
// What the vocabulary graph says (src/lib/graph.js), as text that can be
// compared before and after a refactor:
//
//   1. clusters    word families that build composites together (Louvain),
//                  named by their core words, with their categories
//   2. categories  where the categories and the clusters disagree: a category
//                  spread over many clusters, a word away from its category
//   3. bridges     words whose links mostly leave their cluster
//   4. weak words  words few composites use, by necessity
//   5. twins       words that build things with the same partners
//   6. phrases     multi-word pieces that recur across composites: a phrase
//                  used again and again may want to be a word (or a sense)
//   7. weak spots  clusters with many plain or gap composites
//   8. coverage    atoms and grammar items only one little-used word carries
//
//   npm run graph-report                    all sections
//   npm run graph-report -- --resolution 1.3  finer clusters
//   npm run graph-report -- --json          the numbers as JSON

import dictionary from '../src/data/dictionary.ts';
import composites from '../src/data/composites.ts';
import coverage from '../src/data/coverage.ts';
import { wordGraph, clusters, participation, neighbourSimilarity, wordCategories, compositeWords } from '../src/lib/graph.js';
import { wordRefRe } from '../src/lib/word-refs.js';

const args = process.argv.slice(2);
const flag = (k, d) => {
  const i = args.indexOf(`--${k}`);
  return i < 0 ? d : args[i + 1];
};
const resolution = Number(flag('resolution', 1));
const asJson = args.includes('--json');

// Pure structure words: they glue nearly every composite, so they'd say
// nothing about which meanings go together.
const GRAMMAR = ['de', 'le', 'ma', 'men'].filter((id) => dictionary.words[id]);
const W = dictionary.words;
const term = (id) => W[id]?.term ?? id;
const cats = wordCategories(dictionary);

const { graph, reach } = wordGraph({ dictionary, composites }, { skip: GRAMMAR });
const parts = clusters(graph, { resolution });
const part = participation(graph, parts);

// strength inside its own cluster: how central a word is to it
const inner = new Map();
graph.forEachNode((n) => {
  let s = 0;
  graph.forEachEdge(n, (e, a, x, y) => {
    const o = x === n ? y : x;
    if (parts.get(o) === parts.get(n)) s += a.weight;
  });
  inner.set(n, s);
});

const byCluster = new Map();
for (const [id, c] of parts) byCluster.set(c, [...(byCluster.get(c) ?? []), id]);
const clusterList = [...byCluster.entries()]
  .map(([c, ids]) => ({ c, ids: ids.sort((a, b) => inner.get(b) - inner.get(a)) }))
  .sort((a, b) => b.ids.length - a.ids.length);
const name = new Map();
clusterList.forEach((cl, i) => name.set(cl.c, cl.ids.length > 1 ? `C${i + 1} ${cl.ids.slice(0, 3).map(term).join(' / ')}` : `alone: ${term(cl.ids[0])}`));

// composites mostly inside one cluster
const homeCluster = (e) => {
  const ws = [...compositeWords(e)].filter((id) => parts.has(id));
  if (!ws.length) return null;
  const count = new Map();
  for (const id of ws) count.set(parts.get(id), (count.get(parts.get(id)) ?? 0) + 1);
  const [c, n] = [...count].sort((a, b) => b[1] - a[1])[0];
  return n / ws.length >= 0.5 ? c : null;
};
const compositeCluster = composites.entries.map((e) => ({ e, c: homeCluster(e) }));

const out = { clusters: [], categories: [], strays: [], bridges: [], weak: [], twins: [], phrases: [], weakSpots: [], coverage: [] };

// 1. clusters
for (const cl of clusterList.filter((x) => x.ids.length > 1)) {
  const leafCount = new Map();
  for (const id of cl.ids) {
    const leaf = cats.get(id)?.path.slice(0, 2).join(' > ') ?? '(none)';
    leafCount.set(leaf, (leafCount.get(leaf) ?? 0) + 1);
  }
  const examples = compositeCluster.filter((x) => x.c === cl.c).slice(0, 8).map((x) => `${x.e.zh} ${x.e.en}`);
  out.clusters.push({
    name: name.get(cl.c),
    words: cl.ids.map((id) => `${term(id)}(${reach.get(id)})`),
    categories: [...leafCount].sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k} ${n}`),
    composites: compositeCluster.filter((x) => x.c === cl.c).length,
    examples,
  });
}
const alone = clusterList.filter((x) => x.ids.length === 1).map((x) => x.ids[0]);

// 2. categories vs clusters: second-level groups spread thin, and strays
const groupOf = (id) => cats.get(id)?.path.slice(0, 2).join(' > ') ?? '(none)';
const groups = new Map();
for (const id of parts.keys()) groups.set(groupOf(id), [...(groups.get(groupOf(id)) ?? []), id]);
for (const [g, ids] of groups) {
  const real = ids.filter((id) => !alone.includes(id));
  if (real.length < 3) continue;
  const count = new Map();
  for (const id of real) count.set(parts.get(id), (count.get(parts.get(id)) ?? 0) + 1);
  const [major, n] = [...count].sort((a, b) => b[1] - a[1])[0];
  const share = n / real.length;
  if (share < 0.5) out.categories.push({ group: g, words: real.length, clusters: count.size, share: Math.round(share * 100), spread: [...count].map(([c, k]) => `${name.get(c)}: ${k}`).join('; ') });
  for (const id of real) if (parts.get(id) !== major && share >= 0.5) out.strays.push({ word: term(id), group: g, cluster: name.get(parts.get(id)), groupCluster: name.get(major) });
}

// 3. bridges: much reach, links mostly leaving its cluster
out.bridges = [...parts.keys()]
  .filter((id) => reach.get(id) >= 8)
  .map((id) => ({ word: term(id), reach: reach.get(id), out: Math.round(part.get(id) * 100), cluster: name.get(parts.get(id)) }))
  .sort((a, b) => b.out - a.out)
  .slice(0, 15);

// 4. weak words: few composites
out.weak = Object.keys(W)
  .filter((id) => !GRAMMAR.includes(id) && (reach.get(id) ?? 0) <= 3)
  .map((id) => ({ word: `${term(id)} ${W[id].hanzi}`, reach: reach.get(id) ?? 0, necessity: W[id].necessity.index }))
  .sort((a, b) => a.reach - b.reach || a.necessity - b.necessity);

// 5. twins: same partners, both used enough to tell
const ids = [...parts.keys()].filter((id) => reach.get(id) >= 6);
for (let i = 0; i < ids.length; i++)
  for (let j = i + 1; j < ids.length; j++) {
    const s = neighbourSimilarity(graph, ids[i], ids[j]);
    if (s >= 0.5) out.twins.push({ pair: `${term(ids[i])} ${W[ids[i]].hanzi} ~ ${term(ids[j])} ${W[ids[j]].hanzi}`, similarity: Math.round(s * 100) });
  }
out.twins.sort((a, b) => b.similarity - a.similarity);
out.twins = out.twins.slice(0, 25);

// 6. recurring phrases: runs of 2-4 words inside forms, counted once per composite
const runs = new Map();
for (const e of composites.entries) {
  if (!e.hsd) continue;
  const seen = new Set();
  for (const form of e.hsd.split(' / ')) {
    const tokens = [...form.matchAll(wordRefRe())].map((m) => m[2]);
    for (let n = 2; n <= 4; n++)
      for (let i = 0; i + n <= tokens.length; i++) {
        const run = tokens.slice(i, i + n);
        if (run.every((t) => GRAMMAR.includes(t) || t === 'yi1' || t === 'ge4')) continue;
        if (GRAMMAR.includes(run[0]) || GRAMMAR.includes(run[run.length - 1])) continue;
        seen.add(run.join(' '));
      }
  }
  for (const k of seen) runs.set(k, [...(runs.get(k) ?? []), e]);
}
out.phrases = [...runs]
  .filter(([, es]) => es.length >= 5)
  .map(([k, es]) => ({
    phrase: k.split(' ').map(term).join(' '),
    composites: es.length,
    plainOrGap: es.filter((e) => e.fit === 'plain' || e.fit === 'gap').length,
    examples: es.slice(0, 6).map((e) => `${e.zh} ${e.en}`),
  }))
  // a longer phrase that's as common as its parts says more; drop parts it explains
  .sort((a, b) => b.composites - a.composites)
  .slice(0, 30);

// 7. weak spots: clusters with many plain/gap composites
for (const cl of clusterList.filter((x) => x.ids.length > 1)) {
  const es = compositeCluster.filter((x) => x.c === cl.c).map((x) => x.e);
  if (es.length < 10) continue;
  const fits = new Map();
  for (const e of es) fits.set(e.fit, (fits.get(e.fit) ?? 0) + 1);
  const weak = (fits.get('plain') ?? 0) + (fits.get('gap') ?? 0);
  out.weakSpots.push({ cluster: name.get(cl.c), composites: es.length, plainOrGap: Math.round((weak / es.length) * 100), fits: [...fits].map(([f, n]) => `${f} ${n}`).join(', ') });
}
out.weakSpots.sort((a, b) => b.plainOrGap - a.plainOrGap);

// 8. coverage carried by one word that few composites use: fragile
for (const g of coverage.groups)
  for (const item of g.items)
    if (item.words.length === 1 && !GRAMMAR.includes(item.words[0]) && (reach.get(item.words[0]) ?? 0) <= 5)
      out.coverage.push(`${g.key}:${item.key} -- only ${term(item.words[0])} (reach ${reach.get(item.words[0]) ?? 0})`);

if (asJson) {
  console.log(JSON.stringify({ resolution, alone: alone.map(term), ...out }, null, 2));
  process.exit(0);
}

const h = (t) => console.log(`\n== ${t} ${'='.repeat(Math.max(0, 70 - t.length))}`);
console.log(`graph-report: ${Object.keys(W).length} words, ${composites.entries.length} composites; clusters at resolution ${resolution} (structure words left out: ${GRAMMAR.map(term).join(', ')})`);
h('1. Clusters');
for (const c of out.clusters) {
  console.log(`\n${c.name}  (${c.words.length} words, ${c.composites} composites mostly inside)`);
  console.log(`  words:      ${c.words.join(' ')}`);
  console.log(`  categories: ${c.categories.join('; ')}`);
  console.log(`  e.g.:       ${c.examples.join(', ')}`);
}
console.log(`\nIn no composite: ${alone.map(term).join(', ') || '(none)'}`);
h('2. Categories spread over clusters');
for (const c of out.categories) console.log(`  ${c.group}: ${c.words} words over ${c.clusters} clusters (largest ${c.share}%) -- ${c.spread}`);
console.log('\n  Words away from their category\'s cluster:');
for (const s of out.strays) console.log(`    ${s.word} (${s.group}) is in ${s.cluster}, its category in ${s.groupCluster}`);
h('3. Bridges (share of links leaving the cluster)');
for (const b of out.bridges) console.log(`  ${b.word.padEnd(10)} reach ${String(b.reach).padStart(3)}  ${b.out}% out  (${b.cluster})`);
h('4. Weak words (3 composites or fewer)');
for (const w of out.weak) console.log(`  ${w.word.padEnd(14)} reach ${w.reach}  necessity ${w.necessity}`);
h('5. Twins (build with the same partners)');
for (const t of out.twins) console.log(`  ${t.pair}  ${t.similarity}%`);
h('6. Recurring phrases (5+ composites)');
for (const p of out.phrases) console.log(`  ${p.phrase.padEnd(24)} ${String(p.composites).padStart(3)} composites (${p.plainOrGap} plain/gap): ${p.examples.join(', ')}`);
h('7. Weak spots (plain or gap composites by cluster)');
for (const w of out.weakSpots) console.log(`  ${w.cluster}: ${w.plainOrGap}% of ${w.composites} -- ${w.fits}`);
h('8. Coverage carried by one little-used word (reach 5 or less)');
for (const c of out.coverage) console.log(`  ${c}`);
