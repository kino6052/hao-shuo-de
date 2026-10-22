// Search for the two dictionary pages (the core dictionary and the categorical one). Pure, with no browser or Node APIs.
//
//   fold(text)                       -> lower case, no tone marks or accents, hyphens and punctuation as one space
//   matcher(query)                   -> null for an empty query, else test(...fields) -> true when any field has the query
//   filterTree(nodes, how)           -> the category tree cut down to what matches (see below)
//   firstOfTree(nodes, budget, how)  -> the first `budget` words and entries of a tree, for drawing a long result in batches
//
// A query finds a word by its pinyin with or without tones ("chī", "chi", "chi fan" for chī-fàn), its hanzi, or any word of its
// English or Russian meaning. On the categorical page a query that matches a page's or group's name keeps all of it
// ("kitchen" shows the whole kitchen), and one that matches only some entries keeps those entries and the groups above them.

export const fold = (text) =>
  String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();

const squash = (s) => s.replace(/ /g, '');

// A field folded and squashed once: the same glosses are tested on every keystroke.
const folded = new Map();
const foldOnce = (f) => {
  let v = folded.get(f);
  if (!v) {
    const s = fold(f);
    folded.set(f, (v = [s, squash(s)]));
  }
  return v;
};

export function matcher(query) {
  const q = fold(query);
  if (!q) return null;
  const flat = squash(q);
  return (...fields) =>
    fields.some((f) => {
      if (!f) return false;
      const [s, flatS] = foldOnce(f);
      return s.includes(q) || flatS.includes(flat);
    });
}

// nodes: [{ key, title: {eng, rus, zh}, children? | wordIds }]
// how: { titleMatches(node), wordMatches(id), pageEntries(node) -> [entry], entryMatches(entry) }
// -> the same shape. A node whose name matches is kept as it is; a page that keeps some of its entries gets `wordIds` and `entries`
//    (the entries to show; a page that is kept whole has no `entries` and the reader asks pageEntries); a group keeps its kept children.
export function filterTree(nodes, how) {
  const out = [];
  for (const node of nodes) {
    if (how.titleMatches(node)) {
      out.push(node);
    } else if (node.children) {
      const children = filterTree(node.children, how);
      if (children.length) out.push({ ...node, children });
    } else {
      const wordIds = node.wordIds.filter(how.wordMatches);
      const entries = how.pageEntries(node).filter(how.entryMatches);
      if (wordIds.length || entries.length) out.push({ ...node, wordIds, entries });
    }
  }
  return out;
}

// how: { pageEntries(node) -> [entry], count(node) -> how many it holds }
// -> { nodes, shown }: the tree cut to its first `budget` words and entries, in reading order. Every node keeps its full
//    `count`, so a heading still says how many matched; every page gets its `entries` written out.
export function firstOfTree(nodes, budget, how) {
  let left = budget;
  const walk = (list) => {
    const out = [];
    for (const node of list) {
      if (left <= 0) break;
      const count = how.count(node);
      if (node.children) {
        const children = walk(node.children);
        if (children.length) out.push({ ...node, children, count });
        continue;
      }
      const wordIds = node.wordIds.slice(0, left);
      left -= wordIds.length;
      const entries = (node.entries ?? how.pageEntries(node)).slice(0, left);
      left -= entries.length;
      out.push({ ...node, wordIds, entries, count });
    }
    return out;
  };
  const out = walk(nodes);
  return { nodes: out, shown: budget - left };
}
