import { describe, expect, test } from 'bun:test';
import { solve, parseAtom, parseTerm, rows, tables, str, sym, atom } from './clingo.js';

describe('reading atoms', () => {
  test('constants, numbers and strings', () => {
    expect(parseAtom('uses("飞机",1,2,ji1)')).toEqual({ pred: 'uses', args: ['飞机', 1, 2, 'ji1'], neg: false });
    expect(parseAtom('flag')).toEqual({ pred: 'flag', args: [], neg: false });
    expect(parseAtom('-p(-3)')).toEqual({ pred: 'p', args: [-3], neg: true });
  });
  test('strings keep commas, parentheses and escaped quotes', () => {
    expect(parseAtom('t("a, (b) \\"c\\"",x)').args).toEqual(['a, (b) "c"', 'x']);
  });
  test('functions and tuples', () => {
    expect(parseTerm('f(a,(1,2))')).toEqual({ fn: 'f', args: ['a', { fn: '', args: [1, 2] }] });
  });
  test('a broken term throws', () => {
    expect(() => parseTerm('f(a')).toThrow();
  });
});

describe('writing facts', () => {
  test('str escapes quotes and backslashes', () => {
    expect(str('a"b\\c')).toBe('"a\\"b\\\\c"');
  });
  test('sym keeps word ids bare and quotes anything else', () => {
    expect(sym('hao3')).toBe('hao3');
    expect(sym('who-does-what')).toBe('"who-does-what"');
    expect(sym('3d')).toBe('"3d"');
  });
  test('atom quotes strings, keeps numbers and {sym}', () => {
    expect(atom('uses', '飞机', 1, { sym: 'ji1' })).toBe('uses("飞机",1,ji1)');
    expect(atom('flag')).toBe('flag');
  });
});

describe('solving', () => {
  test('a plain program', async () => {
    const r = await solve('a(1..3). b(X) :- a(X), X > 1.');
    expect(r.status).toBe('SATISFIABLE');
    expect(rows(r.models[0], 'b').flat().sort()).toEqual([2, 3]);
  });

  test('unicode strings go in and come out unchanged', async () => {
    const r = await solve('word(hao3). term(hao3,"hǎo"). hz(hao3,"好"). out(T,H) :- term(W,T), hz(W,H).');
    expect(rows(r.models[0], 'out')).toEqual([['hǎo', '好']]);
  });

  test('an unsatisfiable program says so', async () => {
    const r = await solve('a. :- a.');
    expect(r.status).toBe('UNSATISFIABLE');
    expect(r.models).toEqual([]);
  });

  test('the optimum, and every optimal model', async () => {
    // choose two of three, as cheap as possible: {1,2} is the only cheapest
    const one = await solve('a(1..3). { b(X) : a(X) } = 2. #minimize { X,X : b(X) }.', { models: 0, options: ['--opt-mode=optN'] });
    expect(one.costs).toEqual([3]);
    const best = one.models.filter((m) => m.optimal);
    expect(best.map((m) => rows(m, 'b').flat().sort())).toEqual([[1, 2]]);
    // two equally cheap answers
    const two = await solve('a(1..2). { b(X) : a(X) } = 1. #minimize { 1,X : b(X) }.', { models: 0, options: ['--opt-mode=optN'] });
    expect(two.models.filter((m) => m.optimal).map((m) => rows(m, 'b').flat()).sort()).toEqual([[1], [2]]);
  });

  test('brave and cautious consequences are the way to ask "in some" and "in all"', async () => {
    const some = await solve('{ p; q } = 1.', { models: 0, options: ['--enum-mode=brave'] });
    expect(some.models.at(-1).atoms.sort()).toEqual(['p', 'q']);
    const all = await solve('{ p; q } = 1. r.', { models: 0, options: ['--enum-mode=cautious'] });
    expect(all.models.at(-1).atoms).toEqual(['r']);
  });

  test('tables groups a model by predicate', async () => {
    const r = await solve('a(1). a(2). b(x).');
    expect(tables(r.models[0])).toEqual({ a: [[1], [2]], b: [['x']] });
  });

  test('a syntax error throws', async () => {
    await expect(solve('a(')).rejects.toThrow(/clingo/);
  });
});
