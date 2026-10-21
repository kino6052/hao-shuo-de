// The gaps of a parse report against the known-gaps list (kb/grammar-gaps.json), on made-up items: no parser here.

import { describe, expect, test } from 'bun:test';
import { splitGaps } from './parse-report.js';

const words = { wo3: { term: 'wǒ' }, hao3: { term: 'hǎo' }, shui3: { term: 'shuǐ' }, shi4: { term: 'shì' } };
const gap = (lesson, module, ...ids) => ({ lesson, module, piece: { ok: false, text: `${ids.map((i) => `{{word:${i}}}`).join(' ')}.` } });
const wrong = gap('modifying-nouns', 'like', 'shui3', 'shi4', 'hao3'); // a FAQ quotes it as the wrong way
const odd = gap('pointing', 'this', 'hao3', 'wo3');
const report = { failures: [wrong], late: [{ ...odd, late: [{ id: 'later', lesson: 9 }] }] };
const list = [
  { text: 'shuǐ shì hǎo.', why: 'cited as wrong on purpose' },
  { text: 'wǒ hǎo.', why: 'not in this report' },
];

describe('splitGaps', () => {
  test('a gap whose text is on the list is known, any other is fresh', () => {
    const r = splitGaps(report, list, words);
    expect(r.gaps).toEqual([wrong, report.late[0]]);
    expect(r.known).toEqual([wrong]);
    expect(r.fresh).toEqual([report.late[0]]);
  });

  test('a listed text the report does not show is fixed', () => {
    expect(splitGaps(report, list, words).fixed).toEqual([list[1]]);
  });

  test('with an empty list every gap is fresh', () => {
    const r = splitGaps(report, [], words);
    expect(r.known).toEqual([]);
    expect(r.fresh.length).toBe(2);
    expect(r.fixed).toEqual([]);
  });

  test('an item with no piece (a sentence that could not be read) is not a gap of the grammar', () => {
    const r = splitGaps({ failures: [{ lesson: 'x', module: 'y', error: 'could not be read', piece: null }], late: [] }, list, words);
    expect(r.gaps).toEqual([]);
  });
});
