// The tag nets as the KB asks about them (TAGS_PLAN.md, K31): where an entry sits on the topic net (where you meet it) and the
// kind net (what it is), what is under a tag, what two entries share, and which tags are wrong. Plain code over the source
// (`source.tags = { topics, kinds }`, see scripts/kb-source.js), loaded once and kept in memory like the other models; the
// facts for the reasoner come from facts.js and the relations from relations.js. Nothing here changes data.
//
//   const m = tagModel(source, { entryZhs })
//   m.net('topic' | 'kind')           the net (src/lib/tag-net.js)
//   m.entry(name)                     -> the entry a name means: { key, core, id?, zh?, term, hanzi, en, topics, isA } (throws on none or several)
//   m.members('topic', 'kitchen')     -> the entries under a tag, direct and through subtags: [{ ...entry, via: [tag ids] }], core words first
//   m.tree('topic')                   -> the net as nested nodes { id, title, direct, total, children, again }
//   m.of(name)                        -> every path from the entry up to a top tag, on both axes
//   m.common(a, b)                    -> the closest tags both entries are under, per axis
//   m.find(text)                      -> the tags whose id, title or note has the text, and the entries an English word leads to
//   m.check()                         -> the problems and counts (the same report check-data uses)
//   m.proposed(tag?)                  -> the tags waiting for review ([{ entry, tag, axis, why }] from source.tagProposals)
//
// An entry is a core word (key: its id) or a composite (key: its hanzi); a tag lists them through `topics` and `isA`.

import { tagNet, tagReport, LEAF_MAX, LEAF_MIN } from '../tag-net.js';
import { findWords } from './card.js';
import { toneless } from '../word-refs.js';

export const AXES = ['topic', 'kind'];
const FIELD = { topic: 'topics', kind: 'isA' };
const norm = (s) => String(s ?? '').normalize('NFC').toLowerCase().trim();

export function tagModel(source, { entryZhs = () => [] } = {}) {
  const lists = { topic: source.tags?.topics ?? [], kind: source.tags?.kinds ?? [] };
  const nets = { topic: tagNet(lists.topic), kind: tagNet(lists.kind) };
  const words = source.words ?? {};
  const composites = source.composites ?? [];
  const byZh = new Map(composites.map((c) => [c.zh, c]));

  // a definition names words as {{word:id}}; shown as their pinyin
  const plain = (text) => text.replace(/{{[A-Za-z]+:([a-z0-9_-]+)(?:#[a-z]+)?}}/g, (m, id) => words[id]?.term ?? id);
  const core = (id) => ({ key: id, core: true, id, term: words[id].term, hanzi: words[id].hanzi, en: plain(words[id].definition?.eng ?? ''), topics: words[id].topics ?? [], isA: words[id].isA ?? [] });
  const comp = (c) => ({ key: c.zh, core: false, zh: c.zh, term: c.py, hanzi: c.zh, en: c.en ?? '', rank: c.rank ?? 0, topics: c.topics ?? [], isA: c.isA ?? [] });
  const entries = [...Object.keys(words).map(core), ...composites.map(comp)];
  const byKey = new Map(entries.map((e) => [e.key, e]));

  // -> the entry a name means: a core word (id, term, hanzi) first, then a composite (hanzi, pinyin)
  const entry = (name) => {
    const q = norm(name);
    if (byKey.has(String(name).trim())) return byKey.get(String(name).trim());
    const ids = findWords(words, name);
    if (ids.length === 1) return byKey.get(ids[0]);
    const cs = composites.filter((c) => c.zh === String(name).trim() || norm(c.py) === q || toneless(norm(c.py)) === toneless(q));
    if (ids.length + cs.length === 1) return ids.length ? byKey.get(ids[0]) : byKey.get(cs[0].zh);
    const all = [...ids.map((id) => `${words[id].term} ${words[id].hanzi} (${id})`), ...cs.map((c) => `${c.zh} ${c.py}`)];
    if (!all.length) throw new Error(`no entry "${name}" (try a word id like dao1, its pinyin, or its hanzi)`);
    throw new Error(`"${name}" could be: ${all.join(', ')}`);
  };

  const direct = {};
  for (const axis of AXES) {
    direct[axis] = new Map();
    for (const e of entries) for (const t of e[FIELD[axis]]) if (nets[axis].has(t)) (direct[axis].get(t) ?? direct[axis].set(t, []).get(t)).push(e);
  }
  // core words first, in the dictionary's order; then the composites by rank
  const at = new Map(entries.map((e, i) => [e.key, i]));
  const order = (list) => [...list].sort((a, b) => (a.core === b.core ? (a.rank ?? 0) - (b.rank ?? 0) || at.get(a.key) - at.get(b.key) : a.core ? -1 : 1));

  const members = (axis, tag) => {
    if (!nets[axis].has(tag)) throw new Error(`no ${axis} tag "${tag}" (node scripts/kb.js tags${axis === 'kind' ? ' --kinds' : ''} lists them)`);
    const out = new Map();
    for (const t of [tag, ...nets[axis].below(tag)]) for (const e of direct[axis].get(t) ?? []) (out.get(e.key) ?? out.set(e.key, { ...e, via: [] }).get(e.key)).via.push(t);
    return order([...out.values()]);
  };
  const total = (axis, tag) => new Set([tag, ...nets[axis].below(tag)].flatMap((t) => (direct[axis].get(t) ?? []).map((e) => e.key))).size;

  const tree = (axis) => {
    const shown = new Set();
    const node = (id) => {
      const t = nets[axis].byId.get(id);
      const again = shown.has(id);
      shown.add(id);
      return { id, title: t.title.eng, direct: (direct[axis].get(id) ?? []).length, total: total(axis, id), parents: nets[axis].parents(id), again, children: again ? [] : nets[axis].children(id).map(node) };
    };
    return nets[axis].tops.map(node);
  };

  // every path up from a tag: [{ id, title }, ...] from the tag to a top tag
  const pathsOf = (axis, tag) => nets[axis].paths(tag).map((p) => p.map((id) => ({ id, title: nets[axis].byId.get(id).title.eng })));

  let report = null;
  const check = () => (report ??= tagReport({ topics: lists.topic, kinds: lists.kind, words, composites }));

  return {
    nets,
    lists,
    entries,
    entry,
    direct: (axis, tag) => direct[axis].get(tag) ?? [],
    members,
    total,
    tree,
    pathsOf,
    check,

    of(name) {
      const e = entry(name);
      const out = { entry: e, topic: [], kind: [] };
      for (const axis of AXES) for (const t of e[FIELD[axis]]) if (nets[axis].has(t)) out[axis].push({ tag: t, paths: pathsOf(axis, t) });
      return out;
    },

    common(a, b) {
      const x = entry(a);
      const y = entry(b);
      const out = { a: x, b: y, topic: [], kind: [] };
      for (const axis of AXES) {
        const found = new Map();
        for (const s of x[FIELD[axis]]) for (const t of y[FIELD[axis]]) for (const c of nets[axis].common(s, t)) found.set(c, nets[axis].byId.get(c).title.eng);
        // the closest ones only: drop a tag that is above another common tag
        const ids = [...found.keys()];
        out[axis] = ids.filter((c) => !ids.some((o) => o !== c && nets[axis].isUnder(o, c))).map((id) => ({ id, title: found.get(id) }));
      }
      return out;
    },

    find(text) {
      const q = norm(text);
      const tagsFound = [];
      for (const axis of AXES) {
        for (const t of nets[axis].tags) {
          const hay = [t.id.replace(/-/g, ' '), t.title.eng, t.title.rus, t.title.zh, t.note ?? ''].map(norm);
          if (hay.some((h) => h.includes(q))) tagsFound.push({ axis, id: t.id, title: t.title.eng, total: total(axis, t.id) });
        }
      }
      const viaEnglish = [];
      for (const zh of entryZhs(text)) {
        const e = entries.find((x) => x.core && x.hanzi === zh) ?? byKey.get(zh);
        if (e && !viaEnglish.some((x) => x.key === e.key)) viaEnglish.push({ ...e, topicPaths: e.topics.map((t) => (nets.topic.has(t) ? pathsOf('topic', t)[0].map((p) => p.title).reverse().join(' > ') : t)) });
      }
      return { query: text, tags: tagsFound, entries: viaEnglish };
    },

    proposed(tag) {
      const list = source.tagProposals ?? [];
      return list.filter((p) => !tag || p.tag === tag || nets[p.axis ?? 'topic'].isUnder(p.tag, tag));
    },
  };
}

// -- as text ------------------------------------------------------------------------------------------------------------------

const nameOf = (e) => `${e.hanzi} ${e.term}${e.core ? ' *' : ''}`;

export function renderTree(model, axis, { depth = Infinity } = {}) {
  const out = [`The ${axis} net: ${model.nets[axis].ids.length} tags, ${model.nets[axis].tops.length} at the top (* = a tag under more than one parent, shown again where it repeats)`];
  const line = (n, level) => {
    const own = n.direct ? ` ${n.direct} direct` : '';
    out.push(`${'  '.repeat(level)}${n.id}  ${n.title}  (${n.total})${own}${n.parents.length > 1 ? `  * also under ${n.parents.join(', ')}` : ''}${n.again ? '  [see above]' : ''}`);
    if (level < depth) n.children.forEach((c) => line(c, level + 1));
  };
  model.tree(axis).forEach((n) => line(n, 0));
  return out.join('\n');
}

export function renderTag(model, axis, tag, { limit = 40 } = {}) {
  const net = model.nets[axis];
  const t = net.byId.get(tag);
  if (!t) throw new Error(`no ${axis} tag "${tag}" (node scripts/kb.js tags${axis === 'kind' ? ' --kinds' : ''} lists them)`);
  const out = [`${axis} tag ${t.id}: ${t.title.eng} / ${t.title.rus} / ${t.title.zh}`];
  if (t.note) out.push(`  ${t.note}`);
  out.push(`  under: ${net.parents(tag).join(', ') || '(a top tag)'}`);
  for (const p of model.pathsOf(axis, tag)) out.push(`    ${p.map((x) => x.id).reverse().join(' > ')}`);
  const subs = net.children(tag);
  if (subs.length) out.push(`  subtags: ${subs.map((s) => `${s} (${model.total(axis, s)})`).join(', ')}`);
  const list = model.members(axis, tag);
  const directList = list.filter((e) => e.via.includes(tag));
  out.push(`  ${list.length} entries (${directList.length} written on this tag itself; * = a core word)`);
  const show = (e) => `    ${nameOf(e)}  ${e.en.slice(0, 50)}${e.via.some((v) => v !== tag) ? `   [via ${e.via.filter((v) => v !== tag).join(', ')}]` : ''}`;
  out.push(...list.slice(0, limit).map(show));
  if (list.length > limit) out.push(`    ... ${list.length - limit} more (limit ${limit})`);
  return out.join('\n');
}

export function renderOf(r) {
  const e = r.entry;
  const out = [`${nameOf(e)}  ${e.en.slice(0, 70)}`];
  for (const [axis, label] of [['topic', 'topic (where you meet it)'], ['kind', 'kind (what it is)']]) {
    if (!r[axis].length) out.push(`  ${label}: none yet`);
    for (const t of r[axis]) {
      out.push(`  ${label}: ${t.tag}`);
      for (const p of t.paths) out.push(`    ${p.map((x) => x.id).join(' -> ')}`);
    }
  }
  return out.join('\n');
}

export function renderCommon(r) {
  const out = [`${nameOf(r.a)}  and  ${nameOf(r.b)}`];
  for (const axis of AXES) out.push(`  closest ${axis}: ${r[axis].map((c) => `${c.id} (${c.title})`).join(', ') || 'nothing in common'}`);
  return out.join('\n');
}

export function renderFind(r) {
  const out = [`"${r.query}"`];
  if (r.tags.length) out.push('Tags with that in the name:', ...r.tags.map((t) => `  ${t.axis} ${t.id}  ${t.title}  (${t.total})`));
  if (r.entries.length) out.push('Entries the English word leads to, and where they sit:', ...r.entries.map((e) => `  ${nameOf(e)}  ${e.en.slice(0, 40)}   topic: ${e.topicPaths.join('; ') || 'none yet'}   kind: ${e.isA.join(', ') || 'none yet'}`));
  if (!r.tags.length && !r.entries.length) out.push('No tag and no entry for it.');
  return out.join('\n');
}

export function renderCheck(model) {
  const r = model.check();
  const c = r.counts;
  const out = [`${c.topics} topics (${c.topLeaves} leaves, ${c.depth} levels deep), ${c.kinds} kinds; ${c.withTwoTopics} entries under two or more topics`];
  if (r.errors.length) out.push('', `Wrong (${r.errors.length}):`, ...r.errors.map((e) => `  ${e}`));
  const sect = (title, rows) => rows.length && out.push('', `${title} (${rows.length}):`, ...rows.slice(0, 40).map((x) => `  ${x}`), ...(rows.length > 40 ? [`  ... ${rows.length - 40} more`] : []));
  sect(`Leaf topics over ${LEAF_MAX} entries: split them`, r.sizes.big);
  sect(`Leaf topics under ${LEAF_MIN} entries: merge them or give them more`, r.sizes.small);
  sect('Leaf topics with no entry', r.sizes.empty);
  sect('Entries with only a broad topic (no leaf): too vague', r.vague);
  sect('Extra tags', r.warnings);
  out.push('', `No topic yet: ${r.missing.core.topics.length} core words, ${r.missing.composite.topics.length} composites. No kind yet: ${r.missing.core.kinds.length} core words, ${r.missing.composite.kinds.length} composites.`);
  if (r.emptyKinds.length) out.push(`Kind tags with no entry yet: ${r.emptyKinds.length} of ${c.kinds}.`);
  return out.join('\n');
}

export function renderProposed(model, tag) {
  const list = model.proposed(tag);
  if (!list.length) return 'No tags are waiting for review (the rule proposals, TAGS_PLAN.md C2, are not run yet).';
  return [`${list.length} proposed tag(s)${tag ? ` under ${tag}` : ''}:`, ...list.slice(0, 40).map((p) => `  ${p.entry}  ->  ${p.tag}  (${p.axis ?? 'topic'})  ${p.why}`)].join('\n');
}

// -- one question, as the command line and the Claude tool both ask it --------------------------------------------------------

// ask: { tag?, kinds?, of?, common?: [a, b], find?, check?, proposed?, limit?, depth? } -> { data, text }
// The mode is the first of check, proposed, of, common, find, tag; with none, the net as a tree (`kinds` for the kind net).
// A tag id is looked up on both nets (ids are unique across them).
export function askTags(model, ask = {}) {
  const limit = ask.limit ? Number(ask.limit) : undefined;
  const axisOf = (tag) => AXES.find((a) => model.nets[a].has(tag)) ?? (ask.kinds ? 'kind' : 'topic');
  if (ask.check) return { data: model.check().counts, text: renderCheck(model) };
  if (ask.proposed) {
    const tag = ask.proposed === true ? undefined : ask.proposed;
    return { data: model.proposed(tag), text: renderProposed(model, tag) };
  }
  if (ask.of) {
    const r = model.of(ask.of);
    return { data: r, text: renderOf(r) };
  }
  if (ask.common) {
    const [a, b] = ask.common;
    if (!a || !b) throw new Error('common needs two entries');
    const r = model.common(a, b);
    return { data: r, text: renderCommon(r) };
  }
  if (ask.find) {
    const r = model.find(ask.find);
    return { data: r, text: renderFind(r) };
  }
  if (ask.tag) {
    const axis = axisOf(ask.tag);
    return { data: { axis, tag: ask.tag, members: model.members(axis, ask.tag) }, text: renderTag(model, axis, ask.tag, { limit }) };
  }
  const axis = ask.kinds ? 'kind' : 'topic';
  return { data: model.tree(axis), text: renderTree(model, axis, { depth: ask.depth ? Number(ask.depth) : Infinity }) };
}
