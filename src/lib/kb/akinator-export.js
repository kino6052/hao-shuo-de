// The pool as one small file for the browser (AKINATOR_PLAN.md D1). Pure: the pool goes in, plain data comes out, and back.
//
//   exportPool(pool) -> data      JSON-safe; columns, not rows, so it zips well
//   importPool(data) -> pool      { items, byId, byFeature, item } with the same shape the engine reads (akinator.js)
//
// Only the families a question can ask about are kept (kind, topic, theme, cat, pattern, word), plus the type of each item. A
// sentence does not list its features: it lists the words and patterns it uses, and its features are theirs, as in
// akinator-pool.js (the words' topic, kind and word features, the patterns' theme, cat and pattern features). The export
// checks that rule item by item and writes the features out in full for any item it does not fit.
//
// An item is under every tag above its own (a knife in topic:kitchen is in topic:home too), and a description that uses a
// pattern has the pattern's themes. So, given the tag nets, the export says once per feature what comes with it (`up`: a
// tag's parents, a pattern's themes) and writes only the features of an item that do not come with another; the import adds
// the rest back. An item whose features do not close up this way is written in full and listed in `flat`.
//
// data = {
//   features   the feature names, sorted
//   up         per feature: the indexes of the features that come with it, or 0
//   id, py, zh, en, lesson, number   one value per item, in pool order; id is 0 for a composite, whose id is composite:<zh>
//   own        per item: its features as gaps between sorted indexes, or null for a sentence that lists what it uses
//   flat       the indexes of the items whose `own` is in full, what comes with each feature included
//   uses       per item: the indexes of the words and patterns it uses, or null
//   about      { item index: the composite a sentence shows }
//   ask        per feature: [question, hint?], the words of the question (akinator-questions.js), or null where none is asked
//   first      the choices of the first question [{ feature, label }]
//   lessons    [{ id, number }] in teaching order
// }
// exportPool(pool, { ak, lessons, nets }): ak is the engine the questions come from (ak.describe, ak.first); nets is
// { topic, kind }, the tag nets (src/lib/tag-net.js, kb.tags().nets); without them every item is written in full

const KEPT = new Set(['kind', 'topic', 'theme', 'cat', 'pattern', 'word']);
// what a sentence takes from a pattern it uses
const FROM_PATTERN = new Set(['pattern', 'theme', 'cat']);
const familyOf = (f) => f.slice(0, f.indexOf(':'));
const typeOf = (id) => id.slice(0, id.indexOf(':'));
const sourceOf = (id) => (typeOf(id) === 'sentence' ? id.split(':')[1] : typeOf(id));

const sortedIndexes = (set, index) => [...set].map((f) => index.get(f)).sort((a, b) => a - b);
const gaps = (list) => list.map((x, i) => (i ? x - list[i - 1] : x));
const fromGaps = (list) => {
  let at = 0;
  return list.map((x, i) => (at = i ? at + x : x));
};
const compositeId = (zh) => `composite:${zh}`;

// up: per feature index, the indexes of what comes with it -> (index) => everything that comes with it, step after step
const aboveOf = (up) => {
  const memo = new Map();
  const above = (k) => {
    if (memo.has(k)) return memo.get(k);
    const out = new Set();
    for (const p of up[k] || []) {
      out.add(p);
      for (const a of above(p)) out.add(a);
    }
    memo.set(k, out);
    return out;
  };
  return above;
};

export function exportPool(pool, { ak = null, lessons = [], nets = null } = {}) {
  const features = [...pool.byFeature.keys()].filter((f) => KEPT.has(familyOf(f))).sort();
  const index = new Map(features.map((f, i) => [f, i]));
  const position = new Map(pool.items.map((it, i) => [it.id, i]));
  const kept = (it) => new Set([...it.features].filter((f) => index.has(f)));
  const out = { features, up: [], id: [], py: [], zh: [], en: [], lesson: [], number: [], own: [], flat: [], uses: [], about: {}, ask: [], first: ak?.first ?? [], lessons };
  for (const f of features) {
    const family = familyOf(f);
    const net = nets?.[family];
    const tag = f.slice(f.indexOf(':') + 1);
    const pattern = family === 'pattern' ? pool.byId.get(f) : null;
    const come = net?.has(tag)
      ? net.parents(tag).map((p) => index.get(`${family}:${p}`))
      : [...(pattern?.features ?? [])].filter((g) => g.startsWith('theme:')).map((g) => index.get(g));
    out.up.push(come.length && come.every((k) => k !== undefined) ? come.sort((a, b) => a - b) : 0);
  }
  const above = aboveOf(out.up);
  // an item's own features without those that come with another of them, or null when adding those back would not give the same set
  const lowest = (have) => {
    const ks = sortedIndexes(have, index);
    const implied = new Set();
    for (const k of ks) for (const a of above(k)) implied.add(a);
    if (![...implied].every((a) => have.has(features[a]))) return null;
    return ks.filter((k) => !implied.has(k));
  };
  // a question for each feature, so the browser needs no tag nets, patterns or word files to say it
  for (const f of features) {
    const q = ak?.describe(f);
    out.ask.push(q ? (q.hint ? [q.text, q.hint] : [q.text]) : null);
  }

  pool.items.forEach((it, i) => {
    out.id.push(it.type === 'composite' && it.id === compositeId(it.text.zh) ? 0 : it.id);
    out.py.push(it.text.py);
    out.zh.push(it.text.zh);
    out.en.push(it.text.en);
    out.lesson.push(it.lesson);
    out.number.push(it.number);
    if (it.about) out.about[i] = it.about;
    const have = kept(it);
    // a sentence: the words and patterns it names, if their features add up to its own
    let uses = null;
    if (it.type === 'sentence') {
      const named = [];
      for (const f of have) {
        if (f.startsWith('word:') || f.startsWith('pattern:')) {
          const j = position.get(f.startsWith('word:') ? f : `pattern:${f.slice(8)}`);
          if (j !== undefined) named.push(j);
        }
      }
      const derived = new Set();
      for (const j of named) {
        const from = pool.items[j];
        for (const f of from.features) if (index.has(f) && (from.type === 'word' || FROM_PATTERN.has(familyOf(f)))) derived.add(f);
      }
      const same = derived.size === have.size && [...have].every((f) => derived.has(f));
      if (same) uses = named.sort((a, b) => a - b);
    }
    out.uses.push(uses);
    if (uses) return out.own.push(null);
    const low = lowest(have);
    if (!low) out.flat.push(i);
    out.own.push(gaps(low ?? sortedIndexes(have, index)));
  });
  return out;
}

export function importPool(data) {
  const { features } = data;
  const above = aboveOf(data.up ?? []);
  const flat = new Set(data.flat ?? []);
  const items = [];
  const byId = new Map();
  data.id.forEach((stored, i) => {
    const id = stored === 0 ? compositeId(data.zh[i]) : stored;
    const type = typeOf(id);
    const set = new Set();
    if (data.uses[i]) {
      for (const j of data.uses[i]) {
        const from = items[j];
        for (const f of from.features) if (KEPT.has(familyOf(f)) && (from.type === 'word' || FROM_PATTERN.has(familyOf(f)))) set.add(f);
      }
    } else {
      for (const k of fromGaps(data.own[i])) {
        set.add(features[k]);
        if (!flat.has(i)) for (const a of above(k)) set.add(features[a]);
      }
    }
    set.add(`type:${type}`);
    const item = {
      id,
      type,
      source: sourceOf(id),
      text: { py: data.py[i], zh: data.zh[i], en: data.en[i] },
      lesson: data.lesson[i],
      number: data.number[i],
      words: [...set].filter((f) => f.startsWith('word:')).map((f) => f.slice(5)),
      features: set,
    };
    if (data.about[i]) item.about = data.about[i];
    items.push(item);
    byId.set(id, item);
  });
  const byFeature = new Map();
  for (const it of items) for (const f of it.features) (byFeature.get(f) ?? byFeature.set(f, []).get(f)).push(it);
  return {
    items,
    byId,
    byFeature,
    item: (id) => byId.get(id) ?? null,
    members(list) {
      let found = null;
      for (const f of list) {
        const here = byFeature.get(f) ?? [];
        found = found ? found.filter((it) => here.includes(it)) : here;
      }
      return found ?? items;
    },
  };
}
