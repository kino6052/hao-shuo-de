import { describe, expect, test } from 'bun:test';
import { tmpdir } from 'os';
import { join } from 'path';
import { solve, engine, findClingo, MAX_PROGRAM_BYTES, parseAtom, parseTerm, rows, tables, str, sym, atom } from './clingo.js';

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

// Both engines must give the same answers: wasm always, native when clingo is installed
// (tools/clingo/ or the PATH; see src/lib/kb/clingo.js). Without it the native tests are skipped.
const native = findClingo();
const engines = ['wasm', ...(native ? ['native'] : [])];

for (const engine of engines) {
  describe(`solving (${engine})`, () => {
    const run = (program, opts = {}) => solve(program, { ...opts, engine });

    test('a plain program', async () => {
      const r = await run('a(1..3). b(X) :- a(X), X > 1.');
      expect(r.status).toBe('SATISFIABLE');
      expect(r.engine).toBe(engine);
      expect(rows(r.models[0], 'b').flat().sort()).toEqual([2, 3]);
    });

    test('unicode strings go in and come out unchanged', async () => {
      const r = await run('word(hao3). term(hao3,"hǎo"). hz(hao3,"好"). out(T,H) :- term(W,T), hz(W,H).');
      expect(rows(r.models[0], 'out')).toEqual([['hǎo', '好']]);
    });

    test('an unsatisfiable program says so', async () => {
      const r = await run('a. :- a.');
      expect(r.status).toBe('UNSATISFIABLE');
      expect(r.models).toEqual([]);
    });

    test('the optimum, and every optimal model', async () => {
      // choose two of three, as cheap as possible: {1,2} is the only cheapest
      const one = await run('a(1..3). { b(X) : a(X) } = 2. #minimize { X,X : b(X) }.', { models: 0, options: ['--opt-mode=optN'] });
      expect(one.costs).toEqual([3]);
      const best = one.models.filter((m) => m.optimal);
      expect(best.map((m) => rows(m, 'b').flat().sort())).toEqual([[1, 2]]);
      // two equally cheap answers
      const two = await run('a(1..2). { b(X) : a(X) } = 1. #minimize { 1,X : b(X) }.', { models: 0, options: ['--opt-mode=optN'] });
      expect(two.models.filter((m) => m.optimal).map((m) => rows(m, 'b').flat()).sort()).toEqual([[1], [2]]);
    });

    test('brave and cautious consequences are the way to ask "in some" and "in all"', async () => {
      const some = await run('{ p; q } = 1.', { models: 0, options: ['--enum-mode=brave'] });
      expect(some.models.at(-1).atoms.sort()).toEqual(['p', 'q']);
      const all = await run('{ p; q } = 1. r.', { models: 0, options: ['--enum-mode=cautious'] });
      expect(all.models.at(-1).atoms).toEqual(['r']);
    });

    test('a number of models is respected', async () => {
      expect((await run('{ p; q }.', { models: 0 })).models).toHaveLength(4);
      expect((await run('{ p; q }.', { models: 2 })).models).toHaveLength(2);
    });

    test('tables groups a model by predicate', async () => {
      const r = await run('a(1). a(2). b(x).');
      expect(tables(r.models[0])).toEqual({ a: [[1], [2]], b: [['x']] });
    });

    test('a syntax error throws', async () => {
      await expect(run('a(')).rejects.toThrow(/clingo/);
    });

    test('a program line that is not a program is not a crash either', async () => {
      await expect(run('this is not clingo')).rejects.toThrow(/clingo/);
    });
  });
}

describe('the size limit belongs to wasm', () => {
  // about 1.2 MB of facts, then a count of them
  const big = `${Array.from({ length: 110_000 }, (_, i) => `n(${100_000 + i}).`).join('\n')}\ncount(N) :- N = #count{ X : n(X) }.`;

  test('wasm refuses a program over the limit before it runs, and says what to do', async () => {
    expect(big.length).toBeGreaterThan(MAX_PROGRAM_BYTES);
    await expect(solve(big, { engine: 'wasm' })).rejects.toThrow(/takes at most.*tools\/clingo/);
  });

  test.skipIf(!native)('native has no such limit', async () => {
    const r = await solve(big, { engine: 'native' });
    expect(rows(r.models[0], 'count')).toEqual([[110_000]]);
  }, 60_000);

  test.skipIf(!native)('native stops a run that takes too long, and the next one works (bun can do this one in-process: it is a child process)', async () => {
    const slow = await solve('{ pick(1..40) } = 20.', { engine: 'native', models: 0, timeoutMs: 300 });
    expect(slow.status).toBe('TIMEOUT');
    expect((await solve('a.', { engine: 'native' })).status).toBe('SATISFIABLE');
  }, 30_000);
});

describe('choosing the engine', () => {
  test('KB_CLINGO=wasm forces the built-in one, even when clingo is installed', async () => {
    const before = process.env.KB_CLINGO;
    process.env.KB_CLINGO = 'wasm';
    try {
      expect(engine().name).toBe('wasm');
      expect((await solve('a.')).engine).toBe('wasm');
    } finally {
      if (before === undefined) delete process.env.KB_CLINGO;
      else process.env.KB_CLINGO = before;
    }
  });

  test('asking for native when there is none is an error that says where to put it', async () => {
    const before = process.env.KB_CLINGO;
    process.env.KB_CLINGO = join(tmpdir(), 'no-such-clingo');
    try {
      await expect(solve('a.', { engine: 'native' })).rejects.toThrow(/no native clingo.*tools\/clingo/);
      // the default quietly falls back
      expect((await solve('a.')).engine).toBe('wasm');
    } finally {
      if (before === undefined) delete process.env.KB_CLINGO;
      else process.env.KB_CLINGO = before;
    }
  });

  test('engine() says which one runs', () => {
    const e = engine();
    expect(['native', 'wasm']).toContain(e.name);
    if (e.name === 'native') expect(e.version).toMatch(/^5\./);
    else expect(e.limit).toBe(MAX_PROGRAM_BYTES);
  });
});
