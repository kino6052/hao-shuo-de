import { describe, expect, test } from 'bun:test';
import { tagNet, extraTags, tagReport, LEAF_MAX } from './tag-net.js';

const t = (id, parents = []) => ({ id, title: { eng: id, rus: id, zh: id }, parents });
// home > kitchen > (utensils, cookware); food > meals; cooking is under kitchen and food
const net = tagNet([t('home'), t('kitchen', ['home']), t('utensils', ['kitchen']), t('cookware', ['kitchen']), t('food'), t('meals', ['food']), t('cooking', ['kitchen', 'food'])]);

describe('the net', () => {
  test('tops, leaves, parents and children keep the file order', () => {
    expect(net.tops).toEqual(['home', 'food']);
    expect(net.leaves).toEqual(['utensils', 'cookware', 'meals', 'cooking']);
    expect(net.parents('cooking')).toEqual(['kitchen', 'food']);
    expect(net.children('kitchen')).toEqual(['utensils', 'cookware', 'cooking']);
  });

  test('above is nearest first without repeats, below is everything under', () => {
    expect(net.above('cooking')).toEqual(['kitchen', 'food', 'home']);
    expect(net.below('home')).toEqual(['kitchen', 'utensils', 'cookware', 'cooking']);
    expect(net.isUnder('cooking', 'food')).toBe(true);
    expect(net.isUnder('cooking', 'meals')).toBe(false);
  });

  test('a path runs from the tag up to a top tag, one for each way up', () => {
    expect(net.paths('cooking')).toEqual([['cooking', 'kitchen', 'home'], ['cooking', 'food']]);
    expect(net.paths('home')).toEqual([['home']]);
  });

  test('common gives the tags both are under, nearest to the first first', () => {
    expect(net.common('utensils', 'cookware')).toEqual(['kitchen', 'home']);
    expect(net.common('utensils', 'meals')).toEqual([]);
    expect(net.common('kitchen', 'cooking')).toEqual(['kitchen', 'home']);
  });

  test('a loop, even a tag under itself, is a cycle; a paths call on it still ends', () => {
    const loop = tagNet([t('a', ['b']), t('b', ['c']), t('c', ['a']), t('d', ['d']), t('e')]);
    expect(loop.cycles()).toEqual(['a', 'b', 'c', 'd']);
    expect(loop.paths('a')).toEqual([]);
    expect(net.cycles()).toEqual([]);
  });

  test('a parent that is not in the list is reported and left out of the walk', () => {
    const odd = tagNet([t('a', ['ghost'])]);
    expect(odd.unknownParents()).toEqual([{ id: 'a', parent: 'ghost' }]);
    expect(odd.parents('a')).toEqual([]);
  });
});

describe('extra tags', () => {
  test('a tag written beside one under it is extra', () => {
    expect(extraTags(net, ['kitchen', 'cookware'])).toEqual(['kitchen']);
    expect(extraTags(net, ['cookware', 'meals'])).toEqual([]);
    expect(extraTags(net, ['home', 'kitchen', 'utensils'])).toEqual(['home', 'kitchen']);
  });
});

describe('the report', () => {
  const words = { a: { topics: ['utensils'] }, b: { topics: ['kitchen'] }, c: {} };
  const kinds = [t('thing')];

  test('counts the leaves that are too big, too small or empty, the vague entries and the ones with no topic', () => {
    const many = Object.fromEntries(Array.from({ length: LEAF_MAX + 1 }, (_, i) => [`m${i}`, { topics: ['meals'] }]));
    const r = tagReport({ topics: net.tags, kinds, words: { ...words, ...many } });
    expect(r.sizes.big).toEqual([`meals ${LEAF_MAX + 1}`]);
    expect(r.sizes.small).toEqual(['utensils 1']);
    expect(r.sizes.empty).toEqual(['cookware', 'cooking']);
    expect(r.vague).toEqual(['b']);
    expect(r.missing.core.topics).toEqual(['c']);
    expect(r.errors.join('\n')).toContain('1 core word(s) have no topic: c');
  });

  test('composites are checked too: a missing topic or kind is an error', () => {
    const r = tagReport({ topics: net.tags, kinds, words: { a: { topics: ['utensils'] } }, composites: [{ zh: '刀', topics: ['nonesuch'] }, { zh: '勺' }] });
    expect(r.errors.join('\n')).toContain('composite 刀: topics names "nonesuch"');
    expect(r.counts.compositeNoTopic).toBe(1);
    expect(r.errors.join('\n')).toContain('1 composite(s) have no topic: 勺');
  });

  test('an entry that lists a tag twice, and a tag with no title, are errors', () => {
    const r = tagReport({ topics: [{ id: 'x', title: { eng: 'x' }, parents: [] }], kinds, words: { a: { topics: ['x', 'x'] } } });
    expect(r.errors.join('\n')).toContain('"x" has no rus title');
    expect(r.errors.join('\n')).toContain('words/a.ts: topics lists a tag twice');
  });
});
