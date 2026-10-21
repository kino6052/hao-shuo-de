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
// data = {
//   features   the feature names, sorted
//   id, py, zh, en, lesson, number   one value per item, in pool order
//   own        per item: its features as gaps between sorted indexes, or null for a sentence that lists what it uses
//   uses       per item: the indexes of the words and patterns it uses, or null
//   about      { item index: the composite a sentence shows }
//   ask        per feature: [question, hint?], the words of the question (akinator-questions.js), or null where none is asked
//   first      the choices of the first question [{ feature, label }]
//   lessons    [{ id, number }] in teaching order
// }
// exportPool(pool, { ak, lessons }): ak is the engine the questions come from (ak.describe, ak.first)

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

export function exportPool(pool, { ak = null, lessons = [] } = {}) {
  const features = [...pool.byFeature.keys()].filter((f) => KEPT.has(familyOf(f))).sort();
  const index = new Map(features.map((f, i) => [f, i]));
  const position = new Map(pool.items.map((it, i) => [it.id, i]));
  const kept = (it) => new Set([...it.features].filter((f) => index.has(f)));
  const out = { features, id: [], py: [], zh: [], en: [], lesson: [], number: [], own: [], uses: [], about: {}, ask: [], first: ak?.first ?? [], lessons };
  // a question for each feature, so the browser needs no tag nets, patterns or word files to say it
  for (const f of features) {
    const q = ak?.describe(f);
    out.ask.push(q ? (q.hint ? [q.text, q.hint] : [q.text]) : null);
  }

  pool.items.forEach((it, i) => {
    out.id.push(it.id);
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
    out.own.push(uses ? null : gaps(sortedIndexes(have, index)));
  });
  return out;
}

export function importPool(data) {
  const { features } = data;
  const items = [];
  const byId = new Map();
  data.id.forEach((id, i) => {
    const type = typeOf(id);
    const set = new Set();
    if (data.uses[i]) {
      for (const j of data.uses[i]) {
        const from = items[j];
        for (const f of from.features) if (KEPT.has(familyOf(f)) && (from.type === 'word' || FROM_PATTERN.has(familyOf(f)))) set.add(f);
      }
    } else {
      for (const k of fromGaps(data.own[i])) set.add(features[k]);
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
