// Tests of the pieces that make `npm run check` quick (see OPTIMIZATIONS.md): stamp, cache, gate-cache, parse-memo, fs-memory, check-batch.
import { afterAll, describe, expect, test } from 'bun:test';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readdirSync, rmSync, utimesSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readCache, writeCache } from './cache.js';
import { lookupGate, lastGateMs, recordGate } from './gate-cache.js';
import { parseMemo } from './parse-memo.js';
import { ROOT, handDown, handedDown, stampOf } from './stamp.js';

const made = [];
const tmp = (inRepo = false) => {
  const d = inRepo ? mkdtempSync(join(ROOT, 'tmp-speed-test-')) : mkdtempSync(join(tmpdir(), 'hsd-speed-'));
  made.push(d);
  return d;
};
afterAll(() => {
  for (const d of made) rmSync(d, { recursive: true, force: true });
});

describe('stamp', () => {
  test('same files, same stamp; a changed size, time or new file changes it', () => {
    const root = tmp();
    mkdirSync(join(root, 'src'));
    writeFileSync(join(root, 'src/a.js'), 'one');
    const before = stampOf(['src'], { root });
    expect(stampOf(['src'], { root })).toBe(before);
    writeFileSync(join(root, 'src/a.js'), 'three');
    const sized = stampOf(['src'], { root });
    expect(sized).not.toBe(before);
    utimesSync(join(root, 'src/a.js'), new Date(1e12), new Date(1e12));
    const timed = stampOf(['src'], { root });
    expect(timed).not.toBe(sized);
    writeFileSync(join(root, 'src/b.js'), 'x');
    expect(stampOf(['src'], { root })).not.toBe(timed);
  });

  test('tests, READMEs and cache folders are not looked at; a missing path counts', () => {
    const root = tmp();
    mkdirSync(join(root, 'src/node_modules'), { recursive: true });
    const before = stampOf(['src', 'gone'], { root });
    writeFileSync(join(root, 'src/a.test.js'), 'x');
    writeFileSync(join(root, 'src/README.md'), 'x');
    writeFileSync(join(root, 'src/node_modules/m.js'), 'x');
    expect(stampOf(['src', 'gone'], { root })).toBe(before);
    writeFileSync(join(root, 'gone'), 'now here');
    expect(stampOf(['src', 'gone'], { root })).not.toBe(before);
  });

  test('a handed-down stamp is taken only for this repo', () => {
    handDown('speedtest', 'abc');
    expect(handedDown('speedtest', () => 'computed')).toBe('abc');
    process.env.HSD_STAMP_speedtest = 'C:\\elsewhere|abc';
    expect(handedDown('speedtest', () => 'computed')).toBe('computed');
    delete process.env.HSD_STAMP_speedtest;
  });
});

describe('cache', () => {
  test('writes whole, reads back, leaves no temp file, null when missing or damaged', () => {
    const dir = tmp();
    expect(readCache('x.json', dir)).toBeNull();
    writeCache('sub/x.json', { a: [1, 2] }, dir);
    expect(readCache('sub/x.json', dir)).toEqual({ a: [1, 2] });
    expect(readdirSync(join(dir, 'sub'))).toEqual(['x.json']);
    writeFileSync(join(dir, 'bad.json'), '{"a":');
    expect(readCache('bad.json', dir)).toBeNull();
  });

  test('HSD_NO_CACHE=1 turns reading off', () => {
    const dir = tmp();
    writeCache('x.json', { a: 1 }, dir);
    process.env.HSD_NO_CACHE = '1';
    try {
      expect(readCache('x.json', dir)).toBeNull();
    } finally {
      delete process.env.HSD_NO_CACHE;
    }
  });
});

describe('gate-cache', () => {
  test('a report is found under its stamp only, and survives in the file', () => {
    const dir = tmp();
    expect(lookupGate('s1', 'check-x', dir)).toBeNull();
    expect(lastGateMs('check-x', dir)).toBe(0);
    recordGate('s1', 'check-x', { ok: false, out: 'boom', ms: 1234 }, dir);
    expect(lookupGate('s1', 'check-x', dir)).toMatchObject({ ok: false, out: 'boom', ms: 1234 });
    expect(lookupGate('s2', 'check-x', dir)).toBeNull();
    expect(lastGateMs('check-x', dir)).toBe(1234);
    expect(readCache('gates.json', dir)['check-x'].stamp).toBe('s1');
    recordGate('s2', 'check-x --strict', { ok: true, out: '', ms: 5 }, dir);
    expect(lookupGate('s1', 'check-x', dir)).not.toBeNull(); // another key does not replace it
  });
});

describe('parse-memo', () => {
  const words = { ren2: { term: 'rén', pos: { eng: 'noun' }, classes: {} } };
  const patterns = [{ id: 'p', rules: [{ lhs: 'S', hsd: 'x' }] }];

  test('results are kept per space, written at flush, and merged with another writer', () => {
    const dir = tmp();
    const a = parseMemo({ dir });
    const sp = a.space({ patterns, words, composites: [] });
    expect(sp.get('k')).toBeUndefined();
    sp.set('k', { ok: 1 });
    expect(sp.get('k')).toEqual({ ok: 1 });
    // another process wrote the same space meanwhile
    writeCache(`${sp.name}.json`, { other: { ok: 2 } }, dir);
    a.flush();
    const b = parseMemo({ dir }).space({ patterns, words, composites: [] });
    expect(b.name).toBe(sp.name);
    expect(b.get('k')).toEqual({ ok: 1 });
    expect(b.get('other')).toEqual({ ok: 2 });
  });

  test('a changed rule or word class starts a new space; a changed definition does not', () => {
    const memo = parseMemo({ dir: tmp() });
    const name = (p, w) => memo.space({ patterns: p, words: w, composites: [] }).name;
    const base = name(patterns, words);
    expect(name([{ id: 'p', rules: [{ lhs: 'S', hsd: 'y' }] }], words)).not.toBe(base);
    expect(name(patterns, { ren2: { ...words.ren2, classes: { animate: 1 } } })).not.toBe(base);
    expect(name(patterns, { ren2: { ...words.ren2, def: 'person' } })).toBe(base);
  });
});

describe('fs-memory', () => {
  // runs under Node, as the gates do (Bun patches fs differently); the child prints "ok" or what differed
  const probe = (inRepo) => {
    const dir = tmp(inRepo);
    const script = join(tmp(), 'probe.mjs');
    writeFileSync(
      script,
      `import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { rememberFiles } from ${JSON.stringify(pathToFileURL(join(ROOT, 'scripts/fs-memory.js')).href)};
const dir = ${JSON.stringify(dir)};
const file = join(dir, 'f.txt');
fs.writeFileSync(file, 'one');
rememberFiles();
const first = fs.readFileSync(file, 'utf8');
await writeFile(file, 'two'); // not seen by the memory
const second = fs.readFileSync(file, 'utf8');
fs.writeFileSync(join(dir, 'g.txt'), 'x'); // a write into the repo forgets everything
const third = fs.readFileSync(file, 'utf8');
console.log(JSON.stringify([first, second, third, fs.readdirSync(dir).sort()]));`,
    );
    const r = spawnSync('node', [script], { encoding: 'utf8' });
    expect(r.status).toBe(0);
    return JSON.parse(r.stdout);
  };

  test('a repeat read comes from memory; a write through fs empties it', () => {
    expect(probe(true)).toEqual(['one', 'one', 'two', ['f.txt', 'g.txt']]);
  });

  test('files outside the repo are not remembered', () => {
    expect(probe(false)).toEqual(['one', 'two', 'two', ['f.txt', 'g.txt']]);
  });
});

describe('check-batch', () => {
  const names = ['zz-fixture-ok', 'zz-fixture-exit', 'zz-fixture-throw'];
  const bodies = ["console.log('hello'); process.stderr.write('err\\n');", "console.log('bad'); process.exit(3);", "throw new Error('kaboom');"];
  names.forEach((n, i) => {
    const file = join(ROOT, 'scripts', `${n}.js`);
    writeFileSync(file, bodies[i]);
    made.push(file);
  });

  test('each gate gets its own report; exit codes and throws end only that gate', () => {
    const r = spawnSync('node', [join(ROOT, 'scripts/check-batch.js'), JSON.stringify(names.map((n) => [n, []]))], { encoding: 'utf8' });
    expect(r.status).toBe(0);
    const events = r.stdout
      .split('\n')
      .filter((l) => l.startsWith('\u0001HSD '))
      .map((l) => JSON.parse(l.slice(5)));
    expect(events.filter((e) => e.start).map((e) => e.start)).toEqual(names);
    const done = Object.fromEntries(events.filter((e) => e.name).map((e) => [e.name, e]));
    expect(done['zz-fixture-ok']).toMatchObject({ ok: true, out: 'hello\nerr\n' });
    expect(done['zz-fixture-exit']).toMatchObject({ ok: false, out: 'bad\n' });
    expect(done['zz-fixture-throw'].ok).toBe(false);
    expect(done['zz-fixture-throw'].out).toContain('kaboom');
  });
});
