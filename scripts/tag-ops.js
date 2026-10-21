// The tag ops of the refactor tool (TAGS_PLAN.md E2, K31): change the topic net or the kind net, and every entry that sits
// under a changed tag, in one go. The nets live in src/data/maps/topics.ts and kinds.ts (one tag per line); an entry lists
// its tags in `topics` (word or composite) and `isA`. Each op leaves a note when a page ends up too big or too small.
//
//   { op: "tag", entry, topics?, isA? }                       -- the entry's tags become exactly these
//   { op: "tagAdd", net, id, eng, rus, zh, parents, note? }   -- a new tag
//   { op: "tagEdit", net, id, eng?, rus?, zh?, note? }        -- new titles or note
//   { op: "tagRename", net, id, to }                          -- a new id, everywhere
//   { op: "tagMove", net, id, parents }                       -- a new place in the net
//   { op: "tagMerge", net, id, into }                         -- its entries and subtags go to `into`; the tag goes
//   { op: "tagSplit", net, id, into: [{ id, eng, rus, zh }], assign: { entry: newId } }
//                                                              -- new subtags; the assigned entries move down into them
//
// `net` is "topic" or "kind"; `entry` is a word id or a composite's hanzi.

import { tagNet, LEAF_MIN, LEAF_MAX } from '../src/lib/tag-net.js';

const NETS = {
  topic: { file: 'src/data/maps/topics.ts', key: 'topics' },
  kind: { file: 'src/data/maps/kinds.ts', key: 'isA' },
};
const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const net = (op) => {
  const n = NETS[op.net];
  if (!n) throw new Error('give net: "topic" or "kind"');
  return n;
};

// one line, keys unquoted where they can be
const inline = (v) => {
  if (Array.isArray(v)) return '[' + v.map(inline).join(', ') + ']';
  if (v && typeof v === 'object') {
    const ks = Object.keys(v).filter((k) => v[k] !== undefined);
    return '{ ' + ks.map((k) => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${inline(v[k])}`).join(', ') + ' }';
  }
  return JSON.stringify(v);
};

const tagKeys = ['id', 'title', 'parents'];
function writeTags(ws, file, tags) {
  const src = ws.get(file);
  const head = src.slice(0, src.indexOf('export default tags(') + 'export default tags('.length);
  const lines = tags.map((t) => {
    const ordered = {};
    for (const k of [...tagKeys, ...Object.keys(t).filter((k) => !tagKeys.includes(k))]) if (t[k] !== undefined) ordered[k] = t[k];
    return `  ${inline(ordered)},`;
  });
  ws.set(file, `${head}[\n${lines.join('\n')}\n]);\n`);
}

// every entry, word or composite, as { key, get(), set(e) }
function entries(ws) {
  const list = [];
  for (const id of ws.wordIds()) list.push({ key: id, get: () => ws.word(id), set: (e) => ws.setWord(id, e) });
  for (const { path, entry } of ws.composites()) list.push({ key: entry.zh, get: () => entry, set: (e) => ws.setComposite(path, e) });
  return list;
}

// Rewrites the tag list `field` of every entry by fn(list, entry key) -> list.
function retag(ws, field, fn) {
  let changed = 0;
  for (const e of entries(ws)) {
    const v = e.get();
    if (!v[field]?.length) continue;
    const seen = new Set();
    const next = fn(v[field], e.key).filter((t) => !seen.has(t) && seen.add(t));
    if (next.join() !== v[field].join()) {
      e.set({ ...v, [field]: next });
      changed++;
    }
  }
  return changed;
}

// Notes on the pages an op left too big, too small, or holding entries above their subtags.
function checkSizes(ws, n, ids) {
  const tags = ws.data(n.file);
  const tn = tagNet(tags);
  const count = new Map();
  for (const e of entries(ws)) for (const t of e.get()[n.key] ?? []) count.set(t, (count.get(t) ?? 0) + 1);
  for (const id of ids) {
    if (!tags.some((t) => t.id === id)) continue;
    const own = count.get(id) ?? 0;
    const kids = tn.children(id);
    if (kids.length && own) ws.note('tags', `${id}: ${own} entr${own === 1 ? 'y sits' : 'ies sit'} on it although it has subtags -- move ${own === 1 ? 'it' : 'them'} down`);
    if (!kids.length && n.key === 'topics' && (own < LEAF_MIN || own > LEAF_MAX)) ws.note('tags', `${id}: ${own} entries (a page holds ${LEAF_MIN} to ${LEAF_MAX})`);
  }
}

const mustExist = (tags, id, what = 'tag') => {
  if (!tags.some((t) => t.id === id)) throw new Error(`no ${what} "${id}"`);
};

const wouldLoop = (tags, id, parents) => {
  const probe = tagNet(tags.map((t) => (t.id === id ? { ...t, parents } : t)));
  return probe.cycles().includes(id);
};

export const TAG_OPS = {
  tag(ws, op) {
    const found = entries(ws).find((e) => e.key === op.entry);
    if (!found) throw new Error(`no word or composite "${op.entry}"`);
    const v = found.get();
    const next = { ...v };
    for (const [field, file, label] of [['topics', NETS.topic.file, 'topic'], ['isA', NETS.kind.file, 'kind']]) {
      if (!op[field]) continue;
      const tags = ws.data(file);
      for (const t of op[field]) mustExist(tags, t, `${label} tag`);
      next[field] = [...new Set(op[field])];
    }
    found.set(next);
    checkSizes(ws, NETS.topic, next.topics ?? []);
    checkSizes(ws, NETS.kind, next.isA ?? []);
  },

  tagAdd(ws, op) {
    const n = net(op);
    const tags = ws.data(n.file);
    if (!ID.test(op.id ?? '')) throw new Error(`tag id "${op.id}" must be lowercase words joined by hyphens`);
    if (ws.data(NETS.topic.file).some((t) => t.id === op.id) || ws.data(NETS.kind.file).some((t) => t.id === op.id)) throw new Error(`"${op.id}" is already a tag`);
    for (const p of op.parents ?? []) mustExist(tags, p, 'parent');
    for (const l of ['eng', 'rus', 'zh']) if (!op[l]) throw new Error(`tagAdd ${op.id}: give ${l}`);
    writeTags(ws, n.file, [...tags, { id: op.id, title: { eng: op.eng, rus: op.rus, zh: op.zh }, parents: op.parents ?? [], ...(op.note ? { note: op.note } : {}) }]);
    ws.note('tags', `${op.id}: new and empty -- give it entries (op "tag") or it is a page with none`);
  },

  tagEdit(ws, op) {
    const n = net(op);
    const tags = ws.data(n.file);
    mustExist(tags, op.id);
    writeTags(ws, n.file, tags.map((t) => (t.id === op.id
      ? { ...t, title: { eng: op.eng ?? t.title.eng, rus: op.rus ?? t.title.rus, zh: op.zh ?? t.title.zh }, ...(op.note !== undefined ? { note: op.note || undefined } : {}) }
      : t)));
  },

  tagRename(ws, op) {
    const n = net(op);
    const tags = ws.data(n.file);
    mustExist(tags, op.id);
    if (!ID.test(op.to ?? '')) throw new Error(`tag id "${op.to}" must be lowercase words joined by hyphens`);
    if (ws.data(NETS.topic.file).some((t) => t.id === op.to) || ws.data(NETS.kind.file).some((t) => t.id === op.to)) throw new Error(`"${op.to}" is already a tag`);
    writeTags(ws, n.file, tags.map((t) => ({ ...t, id: t.id === op.id ? op.to : t.id, parents: t.parents.map((p) => (p === op.id ? op.to : p)) })));
    const moved = retag(ws, n.key, (list) => list.map((t) => (t === op.id ? op.to : t)));
    ws.note('tags', `${op.id} -> ${op.to}: ${moved} entr${moved === 1 ? 'y' : 'ies'} follow`);
    const mention = new RegExp(`["'\`]${op.id}["'\`]`);
    for (const r of ws.files('src/').concat(ws.files('scripts/'))) {
      if (r === n.file || r.startsWith('src/data/words/') || r.startsWith('src/data/composites/')) continue;
      if (mention.test(ws.get(r))) ws.note('code', `${r} mentions "${op.id}" -- change it by hand`);
    }
  },

  tagMove(ws, op) {
    const n = net(op);
    const tags = ws.data(n.file);
    mustExist(tags, op.id);
    for (const p of op.parents) mustExist(tags, p, 'parent');
    if (wouldLoop(tags, op.id, op.parents)) throw new Error(`${op.id} cannot go under ${op.parents.join(', ')}: that puts it above itself`);
    writeTags(ws, n.file, tags.map((t) => (t.id === op.id ? { ...t, parents: op.parents } : t)));
    const was = tags.find((t) => t.id === op.id).parents;
    checkSizes(ws, n, [...was, ...op.parents]);
  },

  tagMerge(ws, op) {
    const n = net(op);
    const tags = ws.data(n.file);
    mustExist(tags, op.id);
    mustExist(tags, op.into, 'target tag');
    if (op.id === op.into) throw new Error('a tag cannot merge into itself');
    if (tagNet(tags).isUnder(op.into, op.id)) throw new Error(`${op.into} is under ${op.id}; merge the other way round, or move ${op.into} first`);
    const gone = tags.find((t) => t.id === op.id);
    const next = tags
      .filter((t) => t.id !== op.id)
      .map((t) => {
        const parents = [...new Set(t.parents.flatMap((p) => (p === op.id ? [op.into] : [p])))].filter((p) => p !== t.id);
        return { ...t, parents };
      });
    writeTags(ws, n.file, next);
    const moved = retag(ws, n.key, (list) => list.map((t) => (t === op.id ? op.into : t)));
    ws.note('tags', `${op.id} merged into ${op.into}: ${moved} entr${moved === 1 ? 'y' : 'ies'} moved; "${gone.title.eng}" is gone`);
    checkSizes(ws, n, [op.into]);
  },

  tagSplit(ws, op) {
    const n = net(op);
    const tags = ws.data(n.file);
    mustExist(tags, op.id);
    const children = op.into ?? [];
    if (children.length < 2) throw new Error('tagSplit: give at least two subtags in `into`');
    const known = new Set([...ws.data(NETS.topic.file), ...ws.data(NETS.kind.file)].map((t) => t.id));
    for (const c of children) {
      if (!ID.test(c.id ?? '')) throw new Error(`tag id "${c.id}" must be lowercase words joined by hyphens`);
      if (known.has(c.id)) throw new Error(`"${c.id}" is already a tag`);
      for (const l of ['eng', 'rus', 'zh']) if (!c[l]) throw new Error(`tagSplit ${c.id}: give ${l}`);
    }
    const ids = new Set(children.map((c) => c.id));
    for (const [e, to] of Object.entries(op.assign ?? {})) if (!ids.has(to)) throw new Error(`${e} is assigned to "${to}", which is not in \`into\``);
    const at = tags.findIndex((t) => t.id === op.id);
    const added = children.map((c) => ({ id: c.id, title: { eng: c.eng, rus: c.rus, zh: c.zh }, parents: [op.id], ...(c.note ? { note: c.note } : {}) }));
    writeTags(ws, n.file, [...tags.slice(0, at + 1), ...added, ...tags.slice(at + 1)]);
    let moved = 0;
    for (const e of entries(ws)) {
      const to = op.assign?.[e.key];
      const v = e.get();
      if (!to || !v[n.key]?.includes(op.id)) continue;
      e.set({ ...v, [n.key]: [...new Set(v[n.key].map((t) => (t === op.id ? to : t)))] });
      moved++;
    }
    ws.note('tags', `${op.id} split into ${children.map((c) => c.id).join(', ')}: ${moved} entr${moved === 1 ? 'y' : 'ies'} moved down`);
    checkSizes(ws, n, [op.id, ...ids]);
  },
};
