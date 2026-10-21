// The tag nets as plain code (TAGS_PLAN.md, K31): a list of tags, each with its parents, and the questions asked of it. No data
// is read here; the site's category view (src/data/maps/categories.ts) and the knowledge base (src/lib/kb/tags.js) both use it.
//
//   const net = tagNet(tags)
//   net.ids                    every tag id, in file order
//   net.tops                   the tags with no parents
//   net.parents(id) / net.children(id)      the direct ones, in file order
//   net.above(id)              everything above a tag, nearest first, without repeats (the tag itself not included)
//   net.below(id)              everything under a tag, without repeats
//   net.isUnder(id, ancestor)  is `ancestor` above `id`
//   net.paths(id)              every path from the tag up to a top tag: [[id, parent, ..., top], ...]
//   net.leaves                 the tags with no children
//   net.cycles()               tags that are above themselves
//   net.common(a, b)           the closest tags that both are under (or are), nearest first
//
// A tag is a plain record { id, title, parents }; ids a record names that are not in the list are reported by `unknownParents`.

export function tagNet(tags) {
  const byId = new Map(tags.map((t) => [t.id, t]));
  const ids = tags.map((t) => t.id);
  const kids = new Map(ids.map((id) => [id, []]));
  for (const t of tags) for (const p of t.parents ?? []) kids.get(p)?.push(t.id);
  const parents = (id) => (byId.get(id)?.parents ?? []).filter((p) => byId.has(p));
  const children = (id) => kids.get(id) ?? [];

  // breadth first, so the nearest tags come first
  const walk = (start, next) => {
    const seen = new Set([start]);
    const out = [];
    let level = [start];
    while (level.length) {
      const after = [];
      for (const id of level) for (const n of next(id)) if (!seen.has(n)) seen.add(n), out.push(n), after.push(n);
      level = after;
    }
    return out;
  };
  const above = (id) => walk(id, parents);
  const below = (id) => walk(id, children);
  const aboveCache = new Map();
  const aboveSet = (id) => aboveCache.get(id) ?? (aboveCache.set(id, new Set(above(id))), aboveCache.get(id));

  const paths = (id, guard = new Set()) => {
    if (guard.has(id)) return [];
    const ps = parents(id);
    if (!ps.length) return [[id]];
    return ps.flatMap((p) => paths(p, new Set([...guard, id])).map((path) => [id, ...path]));
  };

  return {
    tags,
    byId,
    ids,
    has: (id) => byId.has(id),
    tops: ids.filter((id) => !parents(id).length),
    leaves: ids.filter((id) => !children(id).length),
    parents,
    children,
    above,
    below,
    isUnder: (id, ancestor) => aboveSet(id).has(ancestor),
    paths,
    cycles: () => ids.filter((id) => parents(id).some((p) => p === id || aboveSet(p).has(id))),
    unknownParents: () => tags.flatMap((t) => (t.parents ?? []).filter((p) => !byId.has(p)).map((p) => ({ id: t.id, parent: p }))),
    // the tags both are under (a tag counts as under itself), nearest to `a` first
    common(a, b) {
      const mine = [a, ...above(a)];
      const theirs = new Set([b, ...above(b)]);
      return mine.filter((t) => theirs.has(t));
    },
  };
}

// -> the tags of an entry's list that are extra: written beside a tag that is under them (knife: kitchen-utensils and kitchen).
export function extraTags(net, list) {
  const own = [...new Set(list ?? [])];
  return own.filter((t) => own.some((o) => o !== t && net.has(o) && net.isUnder(o, t)));
}

// -- the checks (check-data and `kb tags --check` both read this) ---------------------------------------------------------

export const LEAF_MAX = 40; // a leaf topic over this is split (a picture-dictionary page holds 8 to 30)
export const LEAF_MIN = 3; // a leaf topic under this is merged or given more entries
export const KINDS_REQUIRED = true; // the core words carry `isA` since TAGS_PLAN.md C3: a missing kind fails
export const COMPOSITES_REQUIRED = true; // the composites too since the backfill (C4): a composite with no topic or no kind fails

// -> { errors, warnings, counts, members } for the two nets and the entries that use them.
//   topics, kinds   the tag lists (src/data/maps/topics.ts, kinds.ts)
//   words           { id: { topics?, isA? } }       composites  [{ zh, topics?, isA? }]
// `members` is { topic: [entry...], kind: [entry...] } by tag id, direct members only (an entry is a word id or a composite's hanzi).
export function tagReport({ topics, kinds, words, composites = [] }) {
  const errors = [];
  const warnings = [];
  const nets = { topics: tagNet(topics), kinds: tagNet(kinds) };
  const where = { topics: 'maps/topics.ts', kinds: 'maps/kinds.ts' };
  const owner = new Map();
  for (const axis of ['topics', 'kinds']) {
    for (const t of nets[axis].tags) {
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id)) errors.push(`${where[axis]}: tag "${t.id}" is not lowercase words joined by hyphens`);
      if (owner.has(t.id)) errors.push(`${where[axis]}: tag "${t.id}" is already in ${owner.get(t.id)}`);
      owner.set(t.id, where[axis]);
      for (const l of ['eng', 'rus', 'zh']) if (!t.title?.[l]) errors.push(`${where[axis]}: tag "${t.id}" has no ${l} title`);
      if (new Set(t.parents ?? []).size !== (t.parents ?? []).length) errors.push(`${where[axis]}: tag "${t.id}" lists a parent twice`);
    }
    for (const u of nets[axis].unknownParents()) errors.push(`${where[axis]}: tag "${u.id}" is under "${u.parent}", which is not in the file`);
    const loops = nets[axis].cycles();
    if (loops.length) errors.push(`${where[axis]}: a tag is above itself: ${loops.slice(0, 8).join(', ')}`);
  }

  const members = { topics: {}, kinds: {} };
  const need = { topics: 0, kinds: 0 };
  const missing = { core: { topics: [], kinds: [] }, composite: { topics: [], kinds: [] } };
  const vague = [];
  const extra = [];
  const entries = [
    ...Object.entries(words).map(([id, w]) => ({ key: id, e: w, label: `words/${id}.ts`, core: true })),
    ...composites.map((c) => ({ key: c.zh, e: c, label: `composite ${c.zh}`, core: false })),
  ];
  const field = { topics: 'topics', kinds: 'isA' };
  for (const { key, e, label, core } of entries) {
    for (const axis of ['topics', 'kinds']) {
      const list = e[field[axis]] ?? [];
      if (!list.length) missing[core ? 'core' : 'composite'][axis].push(key);
      if (new Set(list).size !== list.length) errors.push(`${label}: ${field[axis]} lists a tag twice`);
      for (const t of list) {
        if (!nets[axis].has(t)) errors.push(`${label}: ${field[axis]} names "${t}", which is not in ${where[axis]}${owner.has(t) ? ` (it is in ${owner.get(t)})` : ''}`);
        else (members[axis][t] ??= []).push(key);
      }
      for (const t of extraTags(nets[axis], list)) extra.push(`${label}: "${t}" is written beside a tag under it`);
    }
    const own = (e.topics ?? []).filter((t) => nets.topics.has(t));
    if (own.length && own.every((t) => nets.topics.children(t).length)) vague.push(key);
  }
  // A5: every core word has a topic; a kind too once KINDS_REQUIRED
  if (missing.core.topics.length) errors.push(`${missing.core.topics.length} core word(s) have no topic: ${missing.core.topics.slice(0, 12).join(', ')}${missing.core.topics.length > 12 ? ', ...' : ''}`);
  if (KINDS_REQUIRED && missing.core.kinds.length) errors.push(`${missing.core.kinds.length} core word(s) have no kind (isA): ${missing.core.kinds.slice(0, 12).join(', ')}${missing.core.kinds.length > 12 ? ', ...' : ''}`);

  if (COMPOSITES_REQUIRED && missing.composite.topics.length) errors.push(`${missing.composite.topics.length} composite(s) have no topic: ${missing.composite.topics.slice(0, 12).join(', ')}${missing.composite.topics.length > 12 ? ', ...' : ''}`);
  if (COMPOSITES_REQUIRED && missing.composite.kinds.length) errors.push(`${missing.composite.kinds.length} composite(s) have no kind (isA): ${missing.composite.kinds.slice(0, 12).join(', ')}${missing.composite.kinds.length > 12 ? ', ...' : ''}`);

  const sizes = { big: [], small: [], empty: [] };
  for (const t of nets.topics.leaves) {
    const n = (members.topics[t] ?? []).length;
    if (!n) sizes.empty.push(t);
    else if (n > LEAF_MAX) sizes.big.push(`${t} ${n}`);
    else if (n < LEAF_MIN) sizes.small.push(`${t} ${n}`);
  }
  const emptyKinds = nets.kinds.ids.filter((t) => ![t, ...nets.kinds.below(t)].some((x) => (members.kinds[x] ?? []).length));
  for (const e of extra) warnings.push(`extra tag: ${e}`);
  const counts = {
    topics: nets.topics.ids.length,
    kinds: nets.kinds.ids.length,
    topLeaves: nets.topics.leaves.length,
    big: sizes.big.length,
    small: sizes.small.length,
    emptyLeaves: sizes.empty.length,
    emptyKinds: emptyKinds.length,
    vague: vague.length,
    extra: extra.length,
    coreNoTopic: missing.core.topics.length,
    coreNoKind: missing.core.kinds.length,
    compositeNoTopic: missing.composite.topics.length,
    compositeNoKind: missing.composite.kinds.length,
    withTwoTopics: entries.filter(({ e }) => (e.topics ?? []).length > 1).length,
    depth: Math.max(0, ...nets.topics.ids.map((t) => Math.max(...nets.topics.paths(t).map((p) => p.length)))),
  };
  return { errors, warnings, counts, members, sizes, vague, missing, emptyKinds, nets };
}
