// "Try it before writing" (KB_PLAN.md K20): the comparison of two gate runs, the text for the author,
// and one run on a real copy of the repo with a single cheap gate.

import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync } from 'fs';
import { tmpdir } from 'os';
import { Workspace } from './refactor-lib.js';
import { checkInCopy, compareBoards, compareGates, renderCheck } from './refactor-check.js';

const pass = { ok: true, lines: [] };
const fail = (...lines) => ({ ok: false, lines });

describe('compareGates', () => {
  test('a gate that passes today and fails after is a break; the reverse is a fix', () => {
    const r = compareGates({ a: pass, b: fail('x') }, { a: fail('boom'), b: pass });
    expect(r.breaks).toEqual([{ gate: 'a', lines: ['boom'] }]);
    expect(r.fixes).toEqual([{ gate: 'b', lines: ['x'] }]);
    expect(r.same).toEqual([]);
  });

  test('a gate that fails both times shows only the lines that differ', () => {
    const r = compareGates({ a: fail('one', 'two') }, { a: fail('two', 'three') });
    expect(r.same).toEqual([{ gate: 'a', added: ['three'], gone: ['one'] }]);
  });

  test('a gate that fails the same way, or passes both times, is not mentioned', () => {
    const r = compareGates({ a: fail('x'), b: pass }, { a: fail('x'), b: pass });
    expect(r).toEqual({ breaks: [], fixes: [], same: [] });
  });
});

describe('compareBoards', () => {
  test('lists the numbers that moved, not the date or the label', () => {
    const r = compareBoards({ date: '1', label: 'a', words: 10, patterns: 3 }, { date: '2', label: 'b', words: 9, patterns: 3 });
    expect(r).toEqual([{ name: 'words', before: 10, after: 9 }]);
  });
  test('nothing to compare when a side did not run', () => {
    expect(compareBoards(null, { words: 1 })).toEqual([]);
  });
});

describe('renderCheck', () => {
  test('names a break, a fix, new lines in a failing gate and the numbers that move', () => {
    const text = renderCheck({
      breaks: [{ gate: 'check-data', lines: ['a: refers to unknown word zz'] }],
      fixes: [{ gate: 'check-grammar' }],
      same: [{ gate: 'check-coverage', added: ['new item'], gone: [] }],
      board: [{ name: 'words', before: 10, after: 9 }],
      copy: null,
    });
    expect(text).toContain('✗ check-data would fail');
    expect(text).toContain('refers to unknown word zz');
    expect(text).toContain('✓ check-grammar');
    expect(text).toContain('new item');
    expect(text).toContain('words: 10 -> 9  (-1)');
  });
  test('says so when nothing new fails', () => {
    expect(renderCheck({ breaks: [], fixes: [], same: [], board: [], copy: null })).toContain('No gate would fail that does not fail today.');
  });
});

describe('checkInCopy', () => {
  const copies = () => readdirSync(tmpdir()).filter((n) => n.startsWith('hsd-check-')).length;
  const opts = { gates: [['check-data', []]], rebuild: [], scoreboard: false };

  test('a change that breaks a gate is reported, the copy is removed and the real file is untouched', async () => {
    const ws = new Workspace();
    const path = ws.wordIds().map((id) => ws.wordPath(id))[0];
    ws.set(path, ws.get(path).replace(/(definition: \{\s+eng: ")/, '$1{{word:nope9}} '));
    expect(ws.get(path)).toContain('{{word:nope9}}');
    const before = copies();
    const real = readFileSync(path, 'utf-8');
    const r = await checkInCopy(ws, opts);
    expect(r.breaks.map((b) => b.gate)).toEqual(['check-data']);
    expect(copies()).toBe(before);
    expect(readFileSync(path, 'utf-8')).toBe(real);
  }, 120_000);

  test('no change, no break', async () => {
    const r = await checkInCopy(new Workspace(), opts);
    expect(r.breaks).toEqual([]);
    expect(r.same).toEqual([]);
  }, 120_000);
});
