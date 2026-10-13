// The comparison of two parse snapshots (K20): which sentences start or stop parsing, read another way.

import { describe, expect, test } from 'bun:test';
import { diffSnapshots, renderParseDiff, snapshotOf, unchanged } from './parse-diff.js';

const snap = (status, readings = 1, first = '[Utt a]', patterns = ['p']) => ({ where: 'l/m k', text: 'a', status, readings: status === 'ok' ? readings : 0, patterns: status === 'ok' ? patterns : [], first: status === 'ok' ? first : '' });

describe('snapshotOf', () => {
  test('one entry per sentence: how it parses, how many ways, by which patterns, and the first reading', () => {
    const ok = { text: 'a', ok: true, treeCount: 3, patterns: ['p', 'q'], trees: [{ sym: 'Utt', children: [{ sym: 'x', edge: { term: 'a' }, from: 0, to: 1 }] }], tokens: [{ text: 'a' }] };
    const report = {
      lessons: [
        {
          items: [
            { lesson: 'one', module: 'm', key: 'k1', piece: ok },
            { lesson: 'one', module: 'm', key: 'k2', piece: { text: 'b', ok: false }, late: [{ id: 'z', lesson: 5 }] },
            { lesson: 'one', module: 'm', key: 'k3', piece: { text: 'c', ok: false } },
          ],
        },
      ],
    };
    const s = snapshotOf(report);
    expect(Object.keys(s)).toEqual(['one|m|k1|a', 'one|m|k2|b', 'one|m|k3|c']);
    expect(s['one|m|k1|a']).toMatchObject({ status: 'ok', readings: 3, patterns: ['p', 'q'], first: '[Utt a]', where: 'one/m k1' });
    expect(s['one|m|k2|b'].status).toBe('late');
    expect(s['one|m|k3|c'].status).toBe('fails');
  });
});

describe('diffSnapshots', () => {
  test('a sentence that now parses, one that stops, and one that only moved between "late" and "fails"', () => {
    const d = diffSnapshots({ a: snap('fails'), b: snap('ok'), c: snap('late'), d: snap('ok') }, { a: snap('ok'), b: snap('late'), c: snap('fails'), d: snap('ok') });
    expect(d.starts.map((x) => x.key)).toEqual(['a']);
    expect(d.stops.map((x) => x.key)).toEqual(['b']);
    expect(d.moved.map((x) => x.key)).toEqual(['c']);
    expect(d.same).toBe(1);
  });

  test('readings count only when the bucket changes (1, 2-5, 6-20, 20+); a new first reading is listed apart', () => {
    const d = diffSnapshots(
      { a: snap('ok', 3), b: snap('ok', 7), c: snap('ok', 1), d: snap('ok', 2, '[Utt x]'), e: snap('ok', 30) },
      { a: snap('ok', 4), b: snap('ok', 2), c: snap('ok', 2), d: snap('ok', 2, '[Utt y]'), e: snap('ok', 25) },
    );
    expect(d.fewer.map((x) => x.key)).toEqual(['b']);
    expect(d.more.map((x) => x.key)).toEqual(['c']);
    expect(d.changed.map((x) => x.key)).toEqual(['d']);
    expect(d.same).toBe(2); // a stays 2-5, e stays... 30 -> 25 is 20+ both times
  });

  test('sentences in one snapshot only are counted, not compared', () => {
    const d = diffSnapshots({ a: snap('ok') }, { b: snap('ok') });
    expect(d.added.map((x) => x.key)).toEqual(['b']);
    expect(d.gone.map((x) => x.key)).toEqual(['a']);
    expect(unchanged(d)).toBe(false);
  });

  test('the same twice is unchanged', () => {
    const s = { a: snap('ok'), b: snap('fails') };
    const d = diffSnapshots(s, s);
    expect(unchanged(d)).toBe(true);
    expect(renderParseDiff(d)).toContain('No sentence parses differently (2 compared).');
  });
});

describe('renderParseDiff', () => {
  test('names the sentence, where it is, and what happened', () => {
    const before = { a: { ...snap('ok', 1, '[Utt q]', ['old']), text: 'wo', where: 'l/m k1' } };
    const after = { a: { ...snap('late'), text: 'wo', where: 'l/m k1' } };
    const text = renderParseDiff(diffSnapshots(before, after), {}, { title: 'T' });
    expect(text).toContain('T');
    expect(text).toContain('1 of 1 sentences parse differently');
    expect(text).toContain('Stop parsing (1)');
    expect(text).toContain('l/m k1');
    expect(text).toContain('only with a pattern taught later');
    expect(text).toContain('it was read by old');
  });
  test('stops after `limit` rows and says how many more', () => {
    const before = Object.fromEntries(['a', 'b', 'c'].map((k) => [k, snap('fails')]));
    const after = Object.fromEntries(['a', 'b', 'c'].map((k) => [k, snap('ok')]));
    expect(renderParseDiff(diffSnapshots(before, after), {}, { limit: 1 })).toContain('… and 2 more');
  });
});
