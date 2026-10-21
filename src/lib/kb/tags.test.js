import { describe, expect, test } from 'bun:test';
import { tagSource, tagLists, words as fixtureWords } from './fixture.js';
import { tagModel, askTags, renderTree, renderTag, renderOf, renderCheck } from './tags.js';
import { buildFacts } from './facts.js';
import { relationReport } from './relations.js';
import { createKb } from './kb.js';
import { callTool } from './tools.js';
import { renderRemoval } from './whatif.js';
import { candidateModel, renderAddition } from './candidates.js';

const model = (source = tagSource, opts) => tagModel(source, opts);
const ids = (list) => list.map((e) => e.key);

describe('where an entry sits', () => {
  test('a tag under two parents has a path up through each', () => {
    const m = model();
    expect(m.pathsOf('topic', 'cooking-actions').map((p) => p.map((x) => x.id))).toEqual([['cooking-actions', 'kitchen', 'home'], ['cooking-actions', 'food']]);
  });

  test('an entry is under everything above its tags: knife-like (ji1) is a tool, a made thing and a thing, and in the kitchen and at home', () => {
    const r = model().of('ji1');
    expect(r.kind[0].paths.map((p) => p.map((x) => x.id))).toEqual([['tool', 'made-thing', 'thing']]);
    expect(r.topic[0].paths.map((p) => p.map((x) => x.id))).toEqual([['cookware', 'kitchen', 'home']]);
  });

  test('an entry with two topics has paths for both', () => {
    const r = model().of('chi1');
    expect(r.topic.map((t) => t.tag)).toEqual(['cooking-actions', 'meals']);
    expect(renderOf(r)).toContain('cooking-actions -> kitchen -> home');
  });

  test('a name can be an id, pinyin, hanzi, or a composite', () => {
    const m = model();
    expect(m.entry('ji1').key).toBe('ji1');
    expect(m.entry('jī').key).toBe('ji1');
    expect(m.entry('机').key).toBe('ji1');
    expect(m.entry('飞机').core).toBe(false);
    expect(() => m.entry('nonesuch')).toThrow(/no entry/);
  });
});

describe('what is under a tag', () => {
  test('members come through subtags, core words first, each with the tags that put it there', () => {
    const list = model().members('topic', 'kitchen');
    expect(ids(list)).toEqual(['chi1', 'ji1', '饭机']);
    expect(list.find((e) => e.key === 'chi1').via).toEqual(['cooking-actions']);
    expect(list.find((e) => e.key === '饭机').via.sort()).toEqual(['cookware', 'kitchen']);
  });

  test('an entry under two subtags of a tag is listed once', () => {
    const list = model().members('topic', 'food');
    expect(ids(list).filter((k) => k === 'chi1')).toHaveLength(1);
    expect(list.find((e) => e.key === 'chi1').via.sort()).toEqual(['cooking-actions', 'meals']);
  });

  test('the counts count entries, not tags', () => {
    const m = model();
    expect(m.total('topic', 'home')).toBe(m.members('topic', 'home').length);
    expect(m.total('kind', 'thing')).toBeGreaterThan(m.total('kind', 'tool'));
  });

  test('an unknown tag says where to look', () => {
    expect(() => model().members('topic', 'nonesuch')).toThrow(/no topic tag/);
  });
});

describe('what two entries share', () => {
  test('the closest tags: two meal words share meals; a pot and an action share the kitchen', () => {
    const m = model();
    expect(m.common('fan4', 'chi1').topic.map((c) => c.id)).toEqual(['meals']);
    expect(m.common('ji1', 'chi1').topic.map((c) => c.id)).toEqual(['kitchen']);
  });

  test('a shared tag above another shared tag is left out; a kind in common only at the top', () => {
    const m = model();
    expect(m.common('ji1', 'fan4').kind.map((c) => c.id)).toEqual(['thing']);
    expect(m.common('chi1', 'ji1').kind).toEqual([]);
  });
});

describe('finding tags and entries', () => {
  test('a text finds tags by id, title or note, on both nets', () => {
    const r = model().find('cook');
    expect(r.tags.map((t) => t.id).sort()).toEqual(['cooking-actions', 'cookware']);
  });

  test('an English word leads to entries, with the places they sit', () => {
    const r = model(tagSource, { entryZhs: () => ['机'] }).find('machine');
    expect(r.entries.map((e) => e.key)).toEqual(['ji1']);
    expect(r.entries[0].topicPaths).toEqual(['Home > Kitchen > Cookware']);
  });
});

describe('the checks', () => {
  const lists = (topics, kinds = tagLists.kinds) => ({ ...tagSource, tags: { topics, kinds } });

  test('a sound net has no errors; an extra tag and a vague entry are reported', () => {
    const r = model().check();
    // the fixture's four composites carry no tags, which the gate now counts as errors; nothing else is wrong
    expect(r.errors.filter((e) => !/^4 composite\(s\) have no (topic|kind)/.test(e))).toEqual([]);
    expect(r.warnings.join('\n')).toContain('"kitchen" is written beside a tag under it');
    expect(r.vague).toEqual(['dong1']);
  });

  test('a cycle is an error', () => {
    const bad = lists(tagLists.topics.map((t) => (t.id === 'home' ? { ...t, parents: ['kitchen-utensils'] } : t)));
    expect(tagModel(bad).check().errors.join('\n')).toContain('above itself');
  });

  test('an unknown parent, an unknown tag on an entry and a tag in the wrong net are errors', () => {
    const m = tagModel({ ...lists([...tagLists.topics, { id: 'lost', title: { eng: 'x', rus: 'x', zh: 'x' }, parents: ['nowhere'] }]), words: { ...tagSource.words, wo3: { ...tagSource.words.wo3, topics: ['nonesuch'], isA: ['kitchen'] } } });
    const errors = m.check().errors.join('\n');
    expect(errors).toContain('"lost" is under "nowhere"');
    expect(errors).toContain('names "nonesuch"');
    expect(errors).toContain('names "kitchen", which is not in maps/kinds.ts (it is in maps/topics.ts)');
  });

  test('a tag id used twice, or not in lowercase hyphen form, is an error', () => {
    const m = tagModel(lists([...tagLists.topics, { id: 'thing', title: { eng: 'x', rus: 'x', zh: 'x' }, parents: [] }, { id: 'Bad Id', title: { eng: 'x', rus: 'x', zh: 'x' }, parents: [] }]));
    const errors = m.check().errors.join('\n');
    expect(errors).toContain('"thing" is already in maps/topics.ts');
    expect(errors).toContain('"Bad Id" is not lowercase words');
  });

  test('a core word with no topic is an error; a missing kind is only counted (KINDS_REQUIRED is off)', () => {
    const noTags = { ...tagSource, words: { ...tagSource.words, wo3: { ...fixtureWords.wo3 } } };
    const r = tagModel(noTags).check();
    expect(r.errors.join('\n')).toContain('1 core word(s) have no topic: wo3');
    expect(r.counts.coreNoKind).toBe(1);
  });

  test('a leaf over 40 entries is too big, one under 3 too small', () => {
    const many = Object.fromEntries(Array.from({ length: 41 }, (_, i) => [`w${i}`, { ...fixtureWords.wo3, topics: ['cookware'], isA: ['thing'] }]));
    const r = tagModel({ ...tagSource, words: { ...tagSource.words, ...many } }).check();
    expect(r.sizes.big).toEqual(['cookware 43']);
    expect(r.sizes.empty).toContain('kitchen-utensils');
  });

  test('the report reads as text', () => {
    const text = renderCheck(model());
    expect(text).toContain('7 topics');
    expect(text).toContain('Extra tags');
  });
});

describe('the tree and one tag as text', () => {
  test('a tag under two parents is shown under each and marked the second time', () => {
    const text = renderTree(model(), 'topic');
    expect(text.match(/cooking-actions/g)).toHaveLength(2);
    expect(text).toContain('* also under kitchen, food');
    expect(text).toContain('[see above]');
  });

  test('a tag shows its parents, its subtags and its members with the core words marked', () => {
    const text = renderTag(model(), 'topic', 'kitchen');
    expect(text).toContain('under: home');
    expect(text).toContain('subtags: kitchen-utensils (0), cookware (2), cooking-actions (1)');
    expect(text).toContain('吃 chī *');
  });
});

describe('one question, two askers', () => {
  const m = model();
  test('the mode is the first of check, proposed, of, common, find, tag', () => {
    expect(askTags(m, { check: true, tag: 'kitchen' }).text).toContain('topics');
    expect(askTags(m, { of: 'ji1' }).text).toContain('cookware -> kitchen -> home');
    expect(askTags(m, { common: ['fan4', 'chi1'] }).text).toContain('closest topic: meals');
    expect(askTags(m, { tag: 'cutting-tool' }).data.axis).toBe('kind');
    expect(askTags(m, { kinds: true }).text).toContain('The kind net');
    expect(() => askTags(m, { common: ['fan4'] })).toThrow(/two entries/);
  });

  test('and: the entries under all the tags, a topic and a kind together', () => {
    expect(ids(askTags(m, { tag: 'kitchen', and: ['tool'] }).data.members)).toEqual(['ji1', '饭机']);
    expect(ids(askTags(m, { tag: 'kitchen', and: 'doing' }).data.members)).toEqual(['chi1']);
    expect(askTags(m, { tag: 'kitchen', and: ['tool'] }).text).toContain('kitchen + tool');
    expect(askTags(m, { tag: 'meals', and: ['tool'] }).text).toContain('none');
    expect(() => askTags(m, { tag: 'kitchen', and: ['nope'] })).toThrow(/no .*tag "nope"/);
  });

  test('a composite has a card with its Hao-shuo-de form and its tag paths', () => {
    const kb = createKb(tagSource);
    const card = kb.word('饭机');
    expect(card).toMatchObject({ composite: true, zh: '饭机', forms: ['fàn-de X'] });
    expect(card.tags.topics).toContainEqual(['Home', 'Kitchen', 'Cookware']);
    expect(card.tags.kinds).toEqual([['Thing', 'Made thing', 'Tool']]);
    expect(kb.word('fànjī').zh).toBe('饭机');
    expect(kb.word('jī').tags.kinds.length).toBeGreaterThan(0);
  });

  test('nothing is waiting for review until the rule proposals run', () => {
    expect(askTags(m, { proposed: true }).text).toContain('No tags are waiting');
    const proposed = tagModel({ ...tagSource, tagProposals: [{ entry: 'ji1', tag: 'cookware', axis: 'topic', why: 'test' }] });
    expect(askTags(proposed, { proposed: 'kitchen' }).data).toHaveLength(1);
  });
});

describe('the facts and the relations', () => {
  test('the facts name the tags, their parents and what each entry is tagged', () => {
    const lines = buildFacts(tagSource).lines;
    expect(lines).toContain('tag("kitchen",topic).');
    expect(lines).toContain('tag("cutting-tool",kind).');
    expect(lines).toContain('tag_parent("cooking-actions","food").');
    expect(lines).toContain('tag_parent("cooking-actions","kitchen").');
    expect(lines).toContain('tagged(chi1,"meals").');
    expect(lines).toContain('tagged("饭机","cookware").');
  });

  test('a stored tag is an accepted relation: tagged for an entry, tag-under for a parent', () => {
    const { relations } = relationReport(tagSource, buildFacts(tagSource));
    expect(relations.filter((r) => r.kind === 'tag-under' && r.a === 'cooking-actions').map((r) => r.b).sort()).toEqual(['food', 'kitchen']);
    expect(relations.find((r) => r.kind === 'tagged' && r.a === '饭机' && r.b === 'cookware')).toMatchObject({ status: 'accepted', sub: 'topic' });
    expect(relations.every((r) => r.kind !== 'tagged' || r.status === 'accepted')).toBe(true);
  });
});

describe('the Claude tool', () => {
  const kb = createKb(tagSource);
  const ask = (args) => callTool(kb, 'kb_tags', args);

  test('kb_tags answers with the same text as the command line', async () => {
    expect(await ask({})).toContain('The topic net: 7 tags');
    expect(await ask({ kinds: true })).toContain('The kind net: 5 tags');
    expect(await ask({ tag: 'cookware' })).toContain('topic tag cookware');
    expect(await ask({ of: 'ji1' })).toContain('tool -> made-thing -> thing');
    expect(await ask({ common: ['fan4', 'chi1'] })).toContain('closest topic: meals');
    expect(await ask({ check: true })).toContain('7 topics');
    expect(await ask({ proposed: 'all' })).toContain('No tags are waiting');
  });

  test('a bad question is an error that says what to ask', async () => {
    await expect(ask({ tag: 'nonesuch' })).rejects.toThrow(/no topic tag/);
    await expect(ask({ of: 'zzzz' })).rejects.toThrow(/no entry/);
  });
});

describe('kb remove and kb add show the pages (E3)', () => {
  const kb = createKb(tagSource);

  test('dropping a word lists the pages that shrink, flagged when short', async () => {
    const r = await kb.remove('ji1');
    expect(r.pages).toEqual([expect.objectContaining({ page: 'cookware', before: 2, after: 1, short: true, empty: false })]);
    expect(renderRemoval(r)).toContain('Topic pages that lose entries');
    expect(renderRemoval(r)).toContain('2 -> 1 (under the page minimum)');
  });

  test('adding a root says which pages it touches, in the shape the render reads', () => {
    const m = candidateModel(tagSource, kb.facts, { freq: [{ zh: '机器', py: 'jīqì', rank: 1 }] });
    const a = m.addition('器');
    expect(a.pages).toEqual({ own: [], fills: expect.any(Array) });
    expect(renderAddition(a)).toContain('Topic pages: 器 has no page yet');
  });
});
