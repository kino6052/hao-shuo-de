import { describe, expect, test } from 'bun:test';
import { createKb } from './kb.js';
import { tagSource, tagLists } from './fixture.js';

// the rules of kb/rules/tags.lp, run by the solver over the fixture's tag nets (loaded with every kb_query)
const rows = async (source, program) => (await createKb(source).query(program)).models[0];

describe('kb/rules/tags.lp', () => {
  test('under goes any number of steps up, and an entry is in every tag above its own', async () => {
    const m = await rows(tagSource, '#show under/2. #show in_tag/2.');
    expect(m.under).toContainEqual(['kitchen-utensils', 'home']);
    expect(m.under).toContainEqual(['cooking-actions', 'food']);
    expect(m.in_tag).toContainEqual(['ji1', 'home']);
    expect(m.in_tag).toContainEqual(['chi1', 'food']);
    expect(m.in_tag).toContainEqual(['chi1', 'kitchen']);
    expect(m.in_tag).not.toContainEqual(['ji1', 'food']);
  });

  test('extra, vague, empty and small leaf tags are found', async () => {
    const m = await rows(tagSource, '#show extra_tag/2. #show vague/1. #show empty_tag/1. #show small_leaf/1.');
    expect(m.extra_tag).toEqual([['饭机', 'kitchen']]);
    expect(m.vague).toEqual([['dong1']]);
    expect(m.empty_tag.map((x) => x[0]).sort()).toEqual(['cutting-tool', 'kitchen-utensils']);
    expect(m.small_leaf.map((x) => x[0]).sort()).toEqual(['cooking-actions', 'cookware']);
  });

  test('untagged says which axis is missing, and a cycle or an unknown tag is named', async () => {
    const bare = { ...tagSource, words: { ...tagSource.words, wo3: { ...tagSource.words.wo3, topics: undefined, isA: ['nonesuch'] } }, tags: { ...tagLists, topics: tagLists.topics.map((t) => (t.id === 'home' ? { ...t, parents: ['kitchen-utensils'] } : t)) } };
    const m = await rows(bare, '#show untagged/2. #show unknown_tag/2. #show tag_cycle/1.');
    expect(m.untagged).toContainEqual(['wo3', 'topic']);
    expect(m.untagged).toContainEqual(['飞机', 'topic']);
    expect(m.unknown_tag).toEqual([['wo3', 'nonesuch']]);
    expect(m.tag_cycle.map((x) => x[0]).sort()).toEqual(['home', 'kitchen', 'kitchen-utensils']);
  });
});
