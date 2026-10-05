// The connectedness of the vocabulary as a graph, for spotting clusters:
// which words build things together, how that lines up with the categories,
// which words carry the coverage atoms, and which hardly connect at all.
// Pure (graphology only), so the report script (scripts/graph-report.js) and,
// later, a graph page can both use it.
//
//   buildGraph(data)    everything: words, composites, coverage items and
//                       category leaves as nodes; uses, covers, in-category,
//                       antonym and synonym links as edges.
//   wordGraph(data)     only the words, linked when they appear together in
//                       composites, weighted by how much more often than
//                       their sizes alone would suggest (cosine), so hubs
//                       like de don't pull everything into one cluster.
//   clusters(g)         Louvain communities of a word graph.
//
// data = { dictionary, composites, coverage } in the shapes src/data/*.ts give.

import Graph from 'graphology';
import louvain from 'graphology-communities-louvain';
import { wordRefIds } from './word-refs.js';
import { compositeHeads, headKey, headCounts } from './heads.js';

// -> word id -> the leaf key it's in.
export function wordCategories(dictionary) {
  const out = new Map();
  const walk = (cs, path) =>
    cs.forEach((c) => {
      const here = [...path, c.key];
      for (const id of c.wordIds ?? []) out.set(id, { leaf: c.key, path: here });
      walk(c.children ?? [], here);
    });
  walk(dictionary.categories, []);
  return out;
}

// -> the set of word ids a composite's forms use (all its forms together).
export function compositeWords(entry) {
  if (!entry.hsd) return new Set();
  return new Set(entry.hsd.split(' / ').flatMap((f) => wordRefIds(f)));
}

export function buildGraph({ dictionary, composites, coverage }) {
  const g = new Graph({ type: 'undirected', multi: false });
  const cats = wordCategories(dictionary);
  for (const [id, w] of Object.entries(dictionary.words)) {
    g.addNode(`w:${id}`, { type: 'word', id, label: `${w.term} ${w.hanzi}`, necessity: w.necessity?.index, category: cats.get(id)?.leaf });
  }
  for (const [id, { leaf }] of cats) {
    if (!g.hasNode(`k:${leaf}`)) g.addNode(`k:${leaf}`, { type: 'category', label: leaf });
    if (g.hasNode(`w:${id}`)) g.mergeEdge(`w:${id}`, `k:${leaf}`, { kind: 'in' });
  }
  for (const e of composites.entries) {
    const ws = compositeWords(e);
    if (!ws.size) continue;
    const node = `c:${e.zh}`;
    g.mergeNode(node, { type: 'composite', label: `${e.zh} ${e.en}`, fit: e.fit, phase: e.phase });
    for (const id of ws) if (g.hasNode(`w:${id}`)) g.mergeEdge(node, `w:${id}`, { kind: 'uses' });
  }
  for (const group of coverage.groups) {
    for (const item of group.items) {
      const node = `a:${group.key}:${item.key}`;
      g.addNode(node, { type: 'coverage', group: group.key, label: item.key });
      for (const id of item.words) if (g.hasNode(`w:${id}`)) g.mergeEdge(`w:${id}`, node, { kind: 'covers' });
    }
  }
  for (const [kind, key] of [['antonym', 'antonyms'], ['synonym', 'synonyms']]) {
    for (const [id, w] of Object.entries(dictionary.words)) {
      for (const form of w[key] ?? []) {
        const m = form.match(/^\{\{word:([^}]+)\}\}$/);
        if (m && g.hasNode(`w:${m[1]}`) && m[1] !== id) g.mergeEdge(`w:${id}`, `w:${m[1]}`, { kind });
      }
    }
  }
  return g;
}

// -> { graph, reach }: the word co-occurrence graph, and each word's reach
// (how many composites use it). skip: word ids left out (pure grammar).
export function wordGraph({ dictionary, composites }, { skip = [] } = {}) {
  const skipSet = new Set(skip);
  const reach = new Map(Object.keys(dictionary.words).map((id) => [id, 0]));
  const pairs = new Map();
  for (const e of composites.entries) {
    const ws = [...compositeWords(e)].filter((id) => reach.has(id) && !skipSet.has(id)).sort();
    for (const id of ws) reach.set(id, reach.get(id) + 1);
    for (let i = 0; i < ws.length; i++)
      for (let j = i + 1; j < ws.length; j++) {
        const k = `${ws[i]} ${ws[j]}`;
        pairs.set(k, (pairs.get(k) ?? 0) + 1);
      }
  }
  const g = new Graph({ type: 'undirected' });
  for (const id of reach.keys()) if (!skipSet.has(id)) g.addNode(id, { reach: reach.get(id) });
  for (const [k, n] of pairs) {
    const [a, b] = k.split(' ');
    g.addEdge(a, b, { count: n, weight: n / Math.sqrt(reach.get(a) * reach.get(b)) });
  }
  return { graph: g, reach };
}

// -> Map(word id -> community number), from Louvain on the weights. A fixed
// random source keeps the result the same from run to run.
export function clusters(g, { resolution = 1, seed = 1 } = {}) {
  let s = seed;
  const rng = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  const parts = louvain(g, { getEdgeWeight: 'weight', resolution, rng });
  return new Map(Object.entries(parts));
}

// -> for each node, the share of its link weight that leaves its cluster
// (0 = all inside, near 1 = a bridge between clusters).
export function participation(g, parts) {
  const out = new Map();
  g.forEachNode((n) => {
    let inside = 0;
    let all = 0;
    g.forEachEdge(n, (e, attr, s, t) => {
      const other = s === n ? t : s;
      all += attr.weight;
      if (parts.get(other) === parts.get(n)) inside += attr.weight;
    });
    out.set(n, all ? 1 - inside / all : 0);
  });
  return out;
}

// -> cosine similarity of two words' neighbourhoods in the word graph:
// near 1 when they build things with the same partners (merge candidates).
export function neighbourSimilarity(g, a, b) {
  const va = new Map();
  const vb = new Map();
  g.forEachEdge(a, (e, attr, s, t) => va.set(s === a ? t : s, attr.weight));
  g.forEachEdge(b, (e, attr, s, t) => vb.set(s === b ? t : s, attr.weight));
  let dot = 0;
  for (const [k, x] of va) if (k !== b && vb.has(k)) dot += x * vb.get(k);
  const norm = (v, skip) => Math.sqrt([...v].filter(([k]) => k !== skip).reduce((s, [, x]) => s + x * x, 0));
  const d = norm(va, b) * norm(vb, a);
  return d ? dot / d : 0;
}

// Pure structure words: they glue nearly every composite, so they'd say
// nothing about which meanings go together.
export const STRUCTURE_WORDS = ['de', 'le', 'ma', 'men'];

// -> the word graph with its families, as the report and the Word Map page
// show them: { graph, reach, parts, participation, clusters, alone }.
// clusters: [{ index, ids }] largest first, ids by how central they are to
// the family (the first three name it); alone: words no composite uses.
export function analyzeWords({ dictionary, composites }, { resolution = 1 } = {}) {
  const skip = STRUCTURE_WORDS.filter((id) => dictionary.words[id]);
  const { graph, reach } = wordGraph({ dictionary, composites }, { skip });
  const parts = clusters(graph, { resolution });
  const inner = new Map();
  graph.forEachNode((n) => {
    let s = 0;
    graph.forEachEdge(n, (e, a, x, y) => {
      if (parts.get(x === n ? y : x) === parts.get(n)) s += a.weight;
    });
    inner.set(n, s);
  });
  const byCluster = new Map();
  for (const [id, c] of parts) byCluster.set(c, [...(byCluster.get(c) ?? []), id]);
  const all = [...byCluster.values()].map((ids) => ids.sort((a, b) => inner.get(b) - inner.get(a))).sort((a, b) => b.length - a.length);
  const clustersList = all.filter((ids) => ids.length > 1).map((ids, index) => ({ index, ids }));
  // renumber parts so a word's family is its index in the list (-1 when alone)
  const family = new Map();
  clustersList.forEach((c) => c.ids.forEach((id) => family.set(id, c.index)));
  for (const id of parts.keys()) if (!family.has(id)) family.set(id, -1);
  return { graph, reach, parts: family, participation: participation(graph, parts), clusters: clustersList, alone: all.filter((ids) => ids.length === 1).flat(), skip };
}

// -- Families by head --------------------------------------------------------
//
// The Word Map's families. Every composite hangs under its head (src/lib/
// heads.js: 手机 under jī, ... -de dōng-xi under 东西), weakly touches its
// other words, and every word is tied to its category leaf and the coverage
// items it carries. categoryWeight (the map's slider) sets how much the
// categories and atoms count against the composites: 0 is composites alone;
// the default keeps whole categories (the numbers) together.

export const FAMILY_DEFAULTS = { categoryWeight: 2, atomWeight: 1, otherWeight: 0.15, resolution: 1 };

// -> the graph of words (w:id), composites (c:zh), category leaves (k:leaf)
// and coverage items (a:group:key).
export function familyGraph({ dictionary, composites, coverage }, options = {}) {
  const { categoryWeight, atomWeight, otherWeight } = { ...FAMILY_DEFAULTS, ...options };
  const g = new Graph({ type: 'undirected' });
  const words = dictionary.words;
  for (const id of Object.keys(words)) g.addNode(`w:${id}`, { kind: 'word', id });
  const { heads } = compositeHeads(dictionary, composites.entries);
  for (const e of composites.entries) if (heads.has(e.zh)) g.mergeNode(`c:${e.zh}`, { kind: 'composite', zh: e.zh });
  for (const e of composites.entries) {
    const h = heads.get(e.zh);
    if (!h) continue;
    const node = `c:${e.zh}`;
    const hk = headKey(h);
    if (g.hasNode(hk) && hk !== node) g.mergeEdge(node, hk, { weight: 1 });
    const others = [...compositeWords(e)].filter((id) => words[id] && !STRUCTURE_WORDS.includes(id) && `w:${id}` !== hk);
    for (const id of others) g.mergeEdge(node, `w:${id}`, { weight: otherWeight / Math.sqrt(others.length) });
  }
  if (categoryWeight > 0) {
    for (const [id, { leaf }] of wordCategories(dictionary)) {
      if (!words[id]) continue;
      g.mergeNode(`k:${leaf}`, { kind: 'category' });
      g.mergeEdge(`k:${leaf}`, `w:${id}`, { weight: categoryWeight });
    }
    // atoms count as much as categories do, relative to the default
    const share = (atomWeight * categoryWeight) / FAMILY_DEFAULTS.categoryWeight;
    for (const group of coverage.groups)
      for (const item of group.items) {
        const ws = item.words.filter((id) => words[id]);
        if (ws.length < 2 || !share) continue;
        const node = `a:${group.key}:${item.key}`;
        g.mergeNode(node, { kind: 'coverage' });
        for (const id of ws) g.mergeEdge(node, `w:${id}`, { weight: share / ws.length });
      }
  }
  return { graph: g, heads };
}

// -> the families, as the Word Map shows them:
//   graph       the word co-occurrence graph (for the layout and partners)
//   reach       word id -> how many composites use it at all
//   parts       word id -> family index (-1 alone)
//   clusters    [{ index, ids, composites }] largest first; ids by how many
//               composites each heads, so the first three name the family
//   heads, direct, under   what each word heads (src/lib/heads.js)
export function analyzeFamilies(data, options = {}) {
  const opts = { ...FAMILY_DEFAULTS, ...options };
  const { dictionary, composites } = data;
  const { graph: fg } = familyGraph(data, opts);
  const { heads, direct, under } = headCounts(dictionary, composites.entries);
  let s = 1;
  const rng = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  const comm = louvain(fg, { getEdgeWeight: 'weight', resolution: opts.resolution, rng });
  const skip = STRUCTURE_WORDS.filter((id) => dictionary.words[id]);
  const { graph, reach } = wordGraph({ dictionary, composites }, { skip });
  const byComm = new Map();
  for (const [node, c] of Object.entries(comm)) {
    if (!byComm.has(c)) byComm.set(c, { ids: [], composites: [] });
    if (node.startsWith('w:')) byComm.get(c).ids.push(node.slice(2));
    else if (node.startsWith('c:')) byComm.get(c).composites.push(node.slice(2));
  }
  const weight = (id) => (under.get(id)?.length ?? 0) * 1000 + (reach.get(id) ?? 0);
  const groups = [...byComm.values()]
    .filter((x) => x.ids.length)
    .map((x) => ({ ids: x.ids.sort((a, b) => weight(b) - weight(a)), composites: x.composites }))
    .sort((a, b) => b.ids.length - a.ids.length || b.composites.length - a.composites.length);
  const clustersList = groups.filter((x) => x.ids.length > 1 || x.composites.length).map((x, index) => ({ index, ...x }));
  const parts = new Map();
  clustersList.forEach((c) => c.ids.forEach((id) => parts.set(id, c.index)));
  for (const id of Object.keys(dictionary.words)) if (!parts.has(id)) parts.set(id, -1);
  const compositeFamily = new Map();
  clustersList.forEach((c) => c.composites.forEach((zh) => compositeFamily.set(zh, c.index)));
  const alone = Object.keys(dictionary.words).filter((id) => parts.get(id) === -1);
  return { graph, reach, parts, clusters: clustersList, alone, heads, direct, under, compositeFamily, skip, options: opts };
}

// -> how well the families follow the categories: the share of each leaf's
// words in its largest family (weighted by leaf size), and the leaves split
// over more than one family.
export function categoryFit(dictionary, parts) {
  const leaves = new Map();
  for (const [id, { leaf }] of wordCategories(dictionary)) if (dictionary.words[id]) leaves.set(leaf, [...(leaves.get(leaf) ?? []), id]);
  let inside = 0;
  let all = 0;
  const split = [];
  for (const [leaf, ids] of leaves) {
    if (ids.length < 2) continue;
    const count = new Map();
    for (const id of ids) count.set(parts.get(id), (count.get(parts.get(id)) ?? 0) + 1);
    inside += Math.max(...count.values());
    all += ids.length;
    if (count.size > 1) split.push({ leaf, families: count.size, ids });
  }
  return { purity: all ? inside / all : 1, split };
}
