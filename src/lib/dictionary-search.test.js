import { describe, expect, test } from 'bun:test';
import { fold, matcher, filterTree } from './dictionary-search.js';

describe('matching a query', () => {
  test('tones, case and hyphens do not matter', () => {
    expect(fold('Chī-fàn')).toBe('chi fan');
    const m = matcher('chi fan');
    expect(m('chī-fàn')).toBe(true);
    expect(matcher('chīfàn')('chī-fàn')).toBe(true);
    expect(matcher('FAN')('rice, a meal')).toBe(false);
    expect(matcher('rice')('Cooked RICE')).toBe(true);
  });

  test('hanzi and Russian match as they are', () => {
    expect(matcher('吃')('吃', 'chī')).toBe(true);
    expect(matcher('еда')('food', 'Еда')).toBe(true);
  });

  test('an empty query matches nothing in particular: null, so the page shows everything', () => {
    expect(matcher('')).toBe(null);
    expect(matcher('  ')).toBe(null);
  });

  test('any field may match, missing fields are skipped', () => {
    expect(matcher('x')(undefined, null, 'box')).toBe(true);
    expect(matcher('x')(undefined, null)).toBe(false);
  });
});

describe('cutting the category tree down', () => {
  const tree = [
    { key: 'home', title: { eng: 'Home' }, children: [
      { key: 'kitchen', title: { eng: 'Kitchen' }, wordIds: ['dao1', 'wan3'] },
      { key: 'bedroom', title: { eng: 'Bedroom' }, wordIds: ['chuang2'] },
    ] },
    { key: 'food', title: { eng: 'Food' }, wordIds: ['fan4'] },
  ];
  const names = { dao1: 'knife', wan3: 'bowl', chuang2: 'bed', fan4: 'rice' };
  const comps = { bedroom: [{ zh: '枕头', en: 'pillow' }] };
  const how = (q) => {
    const m = matcher(q);
    return {
      titleMatches: (n) => m(n.title.eng),
      wordMatches: (id) => m(names[id]),
      pageEntries: (n) => comps[n.key] ?? [],
      entryMatches: (e) => m(e.zh, e.en),
    };
  };

  test('a matching entry keeps its page and the groups above it, and only that entry', () => {
    const r = filterTree(tree, how('bowl'));
    expect(r).toHaveLength(1);
    expect(r[0].children).toHaveLength(1);
    expect(r[0].children[0]).toMatchObject({ key: 'kitchen', wordIds: ['wan3'], entries: [] });
  });

  test('a composite on a page is found too', () => {
    const r = filterTree(tree, how('pillow'));
    expect(r[0].children[0]).toMatchObject({ key: 'bedroom', wordIds: [], entries: [{ zh: '枕头', en: 'pillow' }] });
  });

  test('a matching name keeps the whole group or page, untouched', () => {
    const home = filterTree(tree, how('home'));
    expect(home).toEqual([tree[0]]);
    const kitchen = filterTree(tree, how('kitchen'));
    expect(kitchen[0].children).toEqual([tree[0].children[0]]);
  });

  test('no match leaves nothing', () => {
    expect(filterTree(tree, how('zzz'))).toEqual([]);
  });
});
