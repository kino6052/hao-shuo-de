// The tag ops (TAGS_PLAN.md E2), applied in memory to the real nets and entries: nothing is written.

import { describe, expect, test } from 'bun:test';
import { Workspace, applyOps, OP_NAMES } from './refactor-lib.js';
import { tagNet } from '../src/lib/tag-net.js';

const TOPICS = 'src/data/maps/topics.ts';
const KINDS = 'src/data/maps/kinds.ts';
const run = (ops) => {
  const ws = new Workspace();
  applyOps(ws, ops);
  return ws;
};
const usingTopic = (ws, id) => [...ws.wordIds().map((w) => ws.word(w)), ...ws.composites().map((c) => c.entry)].filter((e) => e.topics?.includes(id));

// a page with a few entries, found in the data
const base = new Workspace();
const pages = tagNet(base.data(TOPICS));
const leaf = pages.leaves.find((id) => usingTopic(base, id).length >= 3);
const [leafB] = pages.leaves.filter((id) => id !== leaf && usingTopic(base, id).length >= 3);
const topCount = (ws, id) => usingTopic(ws, id).length;

describe('the tag ops', () => {
  test('are known ops', () => {
    expect(OP_NAMES).toEqual(expect.arrayContaining(['tag', 'tagAdd', 'tagEdit', 'tagRename', 'tagMove', 'tagMerge', 'tagSplit']));
  });

  test('an untouched net is written back as it was', () => {
    const ws = run([{ op: 'tagEdit', net: 'topic', id: leaf }, { op: 'tagEdit', net: 'kind', id: 'thing' }]);
    expect(ws.changes()).toEqual([]);
  });

  test('tagRename changes the net and every entry under the tag', () => {
    const n = topCount(base, leaf);
    const ws = run([{ op: 'tagRename', net: 'topic', id: leaf, to: 'brand-new-page' }]);
    expect(ws.data(TOPICS).some((t) => t.id === leaf)).toBe(false);
    expect(topCount(ws, 'brand-new-page')).toBe(n);
    expect(topCount(ws, leaf)).toBe(0);
  });

  test('tagRename refuses a taken id and a bad id', () => {
    expect(() => run([{ op: 'tagRename', net: 'topic', id: leaf, to: leafB }])).toThrow(/already a tag/);
    expect(() => run([{ op: 'tagRename', net: 'topic', id: leaf, to: 'Bad Id' }])).toThrow(/lowercase/);
  });

  test('tagMerge moves the entries and the subtags and drops the tag', () => {
    const total = topCount(base, leaf) + topCount(base, leafB);
    const ws = run([{ op: 'tagMerge', net: 'topic', id: leaf, into: leafB }]);
    expect(ws.data(TOPICS).some((t) => t.id === leaf)).toBe(false);
    expect(topCount(ws, leafB)).toBe(total);
    expect(ws.notes.some((n) => n.kind === 'tags' && n.text.includes(`${leaf} merged into ${leafB}`))).toBe(true);
  });

  test('tagMove refuses to put a tag above itself, and moves it otherwise', () => {
    const top = pages.tops[0];
    const child = pages.children(top)[0];
    expect(() => run([{ op: 'tagMove', net: 'topic', id: top, parents: [child] }])).toThrow(/above itself/);
    const other = pages.tops[1];
    const ws = run([{ op: 'tagMove', net: 'topic', id: child, parents: [other] }]);
    expect(ws.data(TOPICS).find((t) => t.id === child).parents).toEqual([other]);
  });

  test('tagSplit adds subtags and moves the assigned entries down; the rest stay and are reported', () => {
    const [first, second] = usingTopic(base, leaf);
    const key = (e) => e.zh ?? e.hanzi;
    const ws = run([{
      op: 'tagSplit', net: 'topic', id: leaf,
      into: [{ id: 'half-one', eng: 'One', rus: 'Один', zh: '一' }, { id: 'half-two', eng: 'Two', rus: 'Два', zh: '二' }],
      assign: { [key(first)]: 'half-one', [key(second)]: 'half-two' },
    }]);
    expect(ws.data(TOPICS).filter((t) => t.parents.includes(leaf)).map((t) => t.id)).toEqual(['half-one', 'half-two']);
    expect(topCount(ws, 'half-one')).toBe(1);
    expect(topCount(ws, leaf)).toBe(topCount(base, leaf) - 2);
    expect(ws.notes.some((n) => n.text.includes(`${leaf}:`) && n.text.includes('subtags'))).toBe(true);
  });

  test('tag sets an entry\'s tags and refuses a tag from the other net or none', () => {
    const entry = usingTopic(base, leaf)[0];
    const key = entry.zh ?? entry.hanzi;
    const ws = run([{ op: 'tag', entry: key, topics: [leafB] }]);
    expect(topCount(ws, leaf)).toBe(topCount(base, leaf) - 1);
    expect(() => run([{ op: 'tag', entry: key, topics: ['thing'] }])).toThrow(/no topic tag/);
    expect(() => run([{ op: 'tag', entry: 'zzzz' }])).toThrow(/no word or composite/);
  });

  test('tagAdd makes an empty page and says so; a taken or untitled tag is refused', () => {
    const ws = run([{ op: 'tagAdd', net: 'kind', id: 'brand-new-kind', eng: 'New', rus: 'Новый', zh: '新', parents: ['thing'] }]);
    expect(ws.data(KINDS).at(-1).id).toBe('brand-new-kind');
    expect(ws.notes.some((n) => n.kind === 'tags')).toBe(true);
    expect(() => run([{ op: 'tagAdd', net: 'kind', id: 'thing', eng: 'x', rus: 'x', zh: 'x', parents: [] }])).toThrow(/already a tag/);
    expect(() => run([{ op: 'tagAdd', net: 'kind', id: 'fresh-one', eng: 'x', rus: 'x', parents: [] }])).toThrow(/give zh/);
  });
});
