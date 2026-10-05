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
