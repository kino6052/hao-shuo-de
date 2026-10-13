// The smallest cover (KB_PLAN.md phase 4): checked against every subset, and against clingo.

import { describe, expect, test } from 'bun:test';
import { smallestCover } from './set-cover.js';
import { solve, rows, sym, str } from './clingo.js';

// every subset of the carriers that carries all the coverable items, smallest first
function brute(items, carriers) {
  const names = Object.keys(carriers);
  const coverable = new Set(Object.values(carriers).flat().filter((i) => items.includes(i)));
  const covers = [];
  for (let mask = 0; mask < 1 << names.length; mask++) {
    const chosen = names.filter((_, k) => mask & (1 << k));
    const got = new Set(chosen.flatMap((n) => carriers[n]));
    if ([...coverable].every((i) => got.has(i))) covers.push(chosen);
  }
  const size = Math.min(...covers.map((c) => c.length));
  const smallest = covers.filter((c) => c.length === size);
  const inAll = names.filter((n) => smallest.every((c) => c.includes(n)));
  const inSome = names.filter((n) => smallest.some((c) => c.includes(n)));
  return { size, forced: inAll, swappable: inSome.filter((n) => !inAll.includes(n)), extra: names.filter((n) => !inSome.includes(n)) };
}

// a small deterministic generator, so a failing case can be run again
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function instance(seed) {
  const r = rng(seed);
  const items = Array.from({ length: 4 + Math.floor(r() * 5) }, (_, k) => `i${k}`);
  const carriers = {};
  for (let k = 0; k < 4 + Math.floor(r() * 5); k++) carriers[`p${k}`] = items.filter(() => r() < 0.35);
  return { items, carriers };
}

describe('smallestCover', () => {
  test('a carrier that is the only one for an item is forced; two that carry the same are swappable; a spare is extra', () => {
    const r = smallestCover({
      items: ['a', 'b', 'c'],
      carriers: { solo: ['a'], twinOne: ['b'], twinTwo: ['b'], both: ['b', 'c'], spare: ['a'] },
    });
    expect(r.size).toBe(2);
    expect(r.forced).toEqual(['both']);
    expect(r.swappable.sort()).toEqual(['solo', 'spare']);
    expect(r.extra.sort()).toEqual(['twinOne', 'twinTwo']);
    expect(r.uncovered).toEqual([]);
  });

  test('an item nothing carries is named and left out of the cover', () => {
    const r = smallestCover({ items: ['a', 'z'], carriers: { p: ['a'], q: ['a'] } });
    expect(r.uncovered).toEqual(['z']);
    expect(r.size).toBe(1);
    expect(r.swappable.sort()).toEqual(['p', 'q']);
  });

  test('a carrier of things that are not items does not count', () => {
    const r = smallestCover({ items: ['a'], carriers: { p: ['a'], q: ['other'] } });
    expect(r).toEqual({ size: 1, forced: ['p'], swappable: [], extra: [], uncovered: [] });
  });

  test('nothing to carry is an empty cover', () => {
    expect(smallestCover({ items: [], carriers: { p: ['a'] } })).toEqual({ size: 0, forced: [], swappable: [], extra: [], uncovered: [] });
  });

  test('the same as trying every subset, on 40 small cases', () => {
    for (let seed = 1; seed <= 40; seed++) {
      const { items, carriers } = instance(seed);
      const got = smallestCover({ items, carriers });
      const want = brute(items, carriers);
      // carriers that carry no item are not in the search at all
      const live = (list) => list.filter((n) => carriers[n].length).sort();
      expect({ seed, size: got.size, forced: got.forced.sort(), swappable: got.swappable.sort(), extra: live(got.extra) }).toEqual({
        seed,
        size: want.size,
        forced: live(want.forced),
        swappable: live(want.swappable),
        extra: live(want.extra),
      });
    }
  });

  test('clingo finds the same size', async () => {
    const { items, carriers } = instance(7);
    let program = '';
    for (const [n, list] of Object.entries(carriers)) for (const i of list) program += `cover(${sym(n)},${str(i)}).\n`;
    program += 'item(I) :- cover(_,I).\n{ pick(P) : cover(P,_) }.\n:- item(I), not pick(P) : cover(P,I).\n#minimize { 1,P : pick(P) }.\n#show pick/1.\n';
    const r = await solve(program, { models: 0, options: ['--opt-mode=opt'] });
    expect(rows(r.models.at(-1), 'pick').length).toBe(smallestCover({ items, carriers }).size);
  });
});
