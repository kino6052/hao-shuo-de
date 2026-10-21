// The pool the Akinator searches (AKINATOR_PLAN.md A3): one list of everything a learner could be thinking of, each item with
// its features. Pure: the data comes in as arguments, nothing is read from disk.
//
//   buildPool({ sentences, patterns, words, composites, topicNet, kindNet, built, lessons, wordLesson, readText }) -> pool
//     sentences       kb.facts.sentences: { id, kind, lesson, key, pinyin, hanzi, en, words, composite? }
//     patterns        the grammar patterns (with tags, taught, covers, examples)
//     words           the core words (term, hanzi, definition, topics, isA)
//     composites      the assembled composites (zh, py, en, rank, topics, isA)
//     topicNet, kindNet   the tag nets (src/lib/tag-net.js): a tag is under all its ancestors
//     built           the build tags (kb.built(): model.row(zh) -> { tags, reach }), or null
//     lessons         [{ id, number }] in teaching order
//     wordLesson(id)  the number of the lesson that first teaches a core word
//     readText(pinyin) -> { patterns: [pattern ids], words: [word ids] }   what a sentence uses (the parser); without it a
//                     sentence carries the words it lists, and no patterns (a pattern example has neither)
//   pool.items            [{ id, type, source, text: { py, zh, en }, lesson, number, words, features: Set }]
//   pool.item(id)         one item
//   pool.members(features) the items that have all the features
//   pool.featureCounts()  [{ feature, count }] most used first
//
// An item's `type` is word | composite | pattern | sentence (a lesson example, answer, phrase, story or example of a
// composite or pattern). `lesson` is the lesson id and `number` the lesson a learner needs: the lesson itself, or for a
// sentence outside the lessons the latest lesson of its words and patterns.
//
// A feature has a family before the colon (the same names as the build tags and the pattern tags):
//   topic:<id> kind:<id>      where you meet it and what it is, with every tag above (K31): a knife is topic:kitchen and kind:tool
//   word:<id>                 a core word
//   pattern:<id> theme:<tag>  a grammar pattern a sentence uses, and what it is for
//   cat:<category>            the ten categories of a pattern (A1)
//   lesson:<id> module:<l/m>  the lesson that teaches it
//   form: made: reach:        how a composite is built (A5)
//   type: source:             what kind of item it is (word, composite, pattern, sentence; lesson_example, story and so on)
//   grammar:<item> coverage:<item>   what a pattern covers

import { patternTags } from '../grammar-tags.ts';
import { replaceWordRefs, refTerm } from '../word-refs.js';

const plain = (text, words) => replaceWordRefs(String(text ?? ''), (id, kind) => refTerm(words[id]?.term ?? id, kind));

// -> the tag and every tag above it, in a family: ["topic:kitchen", "topic:home"]
const withAbove = (net, family, tags) => {
  const out = [];
  for (const t of tags ?? []) if (net.has(t)) out.push(`${family}:${t}`, ...net.above(t).map((a) => `${family}:${a}`));
  return out;
};

export function buildPool({ sentences = [], patterns = [], words = {}, composites = [], topicNet, kindNet, built = null, lessons = [], wordLesson = () => undefined, readText = null }) {
  const number = new Map(lessons.map((l) => [l.id, l.number]));
  const patternById = new Map(patterns.map((p) => [p.id, p]));
  const taught = (p) => (p?.taught ? number.get(p.taught.split('/')[0]) : undefined);

  // the features of one core word (cached: a sentence asks for each of its words)
  const wordFeatures = new Map();
  const featuresOfWord = (id) => {
    if (!wordFeatures.has(id)) {
      const w = words[id] ?? {};
      wordFeatures.set(id, [`word:${id}`, ...withAbove(topicNet, 'topic', w.topics), ...withAbove(kindNet, 'kind', w.isA)]);
    }
    return wordFeatures.get(id);
  };

  // a theme of a pattern is any stored tag that is not a category; derived tags keep their own family
  const featuresOfPattern = (p) =>
    patternTags(p).map((t) => (/^(cat|lesson|module|grammar|coverage):/.test(t) ? t : `theme:${t}`));

  const items = [];
  const byId = new Map();
  const add = (item) => {
    item.features.add(`type:${item.type}`);
    item.features.add(`source:${item.source}`);
    items.push(item);
    byId.set(item.id, item);
    return item;
  };

  // -- the core words ------------------------------------------------------------------------------------------------------
  for (const [id, w] of Object.entries(words)) {
    const n = wordLesson(id);
    add({
      id: `word:${id}`,
      type: 'word',
      source: 'word',
      text: { py: w.term, zh: w.hanzi, en: plain(w.definition?.eng, words) },
      lesson: n === undefined ? null : (lessons.find((l) => l.number === n)?.id ?? null),
      number: n ?? null,
      words: [id],
      features: new Set(featuresOfWord(id)),
    });
  }

  // -- the composites: the topic and kind tags, and how the description is built --------------------------------------------
  for (const c of composites) {
    const row = built?.row?.(c.zh) ?? null;
    const features = new Set([...withAbove(topicNet, 'topic', c.topics), ...withAbove(kindNet, 'kind', c.isA)]);
    for (const t of row?.tags ?? []) features.add(t);
    add({
      id: `composite:${c.zh}`,
      type: 'composite',
      source: 'composite',
      text: { py: c.py, zh: c.zh, en: c.en ?? '' },
      lesson: null,
      number: row?.reach ?? null,
      words: [...features].filter((f) => f.startsWith('word:')).map((f) => f.slice(5)),
      features,
    });
  }

  // -- the patterns --------------------------------------------------------------------------------------------------------
  for (const p of patterns) {
    add({
      id: `pattern:${p.id}`,
      type: 'pattern',
      source: 'pattern',
      text: { py: plain(p.template?.hsd ?? p.template, words), zh: '', en: plain(p.meaning?.eng ?? p.meaning, words) },
      lesson: p.taught ? p.taught.split('/')[0] : null,
      number: taught(p) ?? null,
      words: [],
      features: new Set([`pattern:${p.id}`, ...featuresOfPattern(p)]),
    });
  }

  // -- the sentences: the features of the words and the patterns they use -------------------------------------------------
  const sentenceItem = (s, source, where) => {
    const read = readText ? readText(s.pinyin) : { patterns: [], words: [] };
    const ids = [...new Set([...(s.words ?? []), ...read.words])].filter((w) => words[w]);
    const used = read.patterns;
    const features = new Set();
    for (const w of ids) for (const f of featuresOfWord(w)) features.add(f);
    for (const p of used) {
      features.add(`pattern:${p}`);
      for (const f of featuresOfPattern(patternById.get(p) ?? { tags: [], taught: null, covers: [] })) if (f.startsWith('theme:') || f.startsWith('cat:')) features.add(f);
    }
    if (where.lesson) features.add(`lesson:${where.lesson}`);
    if (where.module) features.add(`module:${where.lesson}/${where.module}`);
    // a sentence in a lesson needs that lesson; one outside needs the latest lesson of what it uses
    let n = where.lesson ? number.get(where.lesson) : undefined;
    if (n === undefined) {
      const needs = [...ids.map((w) => wordLesson(w)), ...used.map((p) => taught(patternById.get(p)))].filter((x) => x !== undefined);
      n = needs.length ? Math.max(...needs) : null;
    }
    return add({
      id: where.id,
      type: 'sentence',
      source,
      text: { py: plain(s.pinyin, words), zh: s.hanzi ?? '', en: s.en ?? '' },
      lesson: where.lesson ?? null,
      number: n,
      words: ids,
      features,
    });
  };

  for (const s of sentences) {
    if (s.kind === 'composite_example') {
      const it = sentenceItem(s, 'composite_example', { id: `sentence:composite_example:${s.id}`, lesson: null, module: '' });
      if (s.composite) it.about = s.composite; // the composite it shows, so a hint that finds the composite can lead to it
    } else {
      sentenceItem(s, s.kind, { id: `sentence:${s.kind}:${s.lesson}/${s.key}`, lesson: number.has(s.lesson) ? s.lesson : null, module: s.module });
    }
  }
  for (const p of patterns) {
    (p.examples ?? []).forEach(([pinyin, en], i) =>
      sentenceItem({ pinyin, hanzi: '', en, words: [] }, 'pattern_example', { id: `sentence:pattern_example:${p.id}/${i}`, lesson: p.taught ? p.taught.split('/')[0] : null, module: '' }),
    );
  }

  // A pattern is about what its examples are about: it takes their kind and topic features, so an answer about the idea ("is it
  // doing?", "is it in the kitchen?") means something to a pattern too and does not sink it.
  for (const p of patterns) {
    const own = byId.get(`pattern:${p.id}`);
    (p.examples ?? []).forEach((_, i) => {
      for (const f of byId.get(`sentence:pattern_example:${p.id}/${i}`).features) if (f.startsWith('kind:') || f.startsWith('topic:')) own.features.add(f);
    });
  }

  // -- ask the pool --------------------------------------------------------------------------------------------------------
  const byFeature = new Map();
  for (const it of items) for (const f of it.features) (byFeature.get(f) ?? byFeature.set(f, []).get(f)).push(it);

  return {
    items,
    byId,
    byFeature,
    item: (id) => byId.get(id) ?? null,
    members(features) {
      let list = null;
      for (const f of features) {
        const here = byFeature.get(f) ?? [];
        list = list ? list.filter((it) => here.includes(it)) : here;
      }
      return list ?? items;
    },
    featureCounts: () => [...byFeature].map(([feature, list]) => ({ feature, count: list.length })).sort((a, b) => b.count - a.count || a.feature.localeCompare(b.feature)),
  };
}
