import { describe, expect, test } from 'bun:test';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createKb } from './kb.js';
import { source } from './fixture.js';
import { wordRefIds } from '../word-refs.js';
import { NAMES, appendRow, readScoreboard, renderScoreboard, sayability, scoreboardRow } from './scoreboard.js';

const kb = createKb(source);
const date = new Date('2026-10-12T10:00:00Z');
const tmp = () => join(mkdtempSync(join(tmpdir(), 'scoreboard-')), 'scoreboard.csv');

describe('the row', () => {
  test('counts what is in the data, and leaves out what the solver would say', async () => {
    const row = await scoreboardRow(kb, { label: 'fixture', date, atoms: false });
    const forms = source.composites.flatMap((c) => (c.hsd ? c.hsd.split(' / ') : []));
    expect(row.date).toBe('2026-10-12');
    expect(row.label).toBe('fixture');
    expect(row.words).toBe(Object.keys(source.words).length);
    expect(row.composites).toBe(source.composites.length);
    expect(row.forms).toBe(forms.length);
    expect(row.avg_form_words).toBe(Math.round((100 * forms.reduce((n, f) => n + wordRefIds(f).length, 0)) / forms.length) / 100);
    expect(row.items).toBe(source.coverage.flatMap((g) => g.items).length);
    expect(row.smallest_set).toBe('');
    expect(Object.keys(row)).toEqual(NAMES);
  });

  test('the meaning columns: what is said, what is carried once, how many words trace down to a prime', async () => {
    // the fixture has one coverage group, grammar, with two items
    const row = await scoreboardRow(kb, { date, atoms: false });
    expect(row).toMatchObject({ primes_said: '', primes_once: '', categories_said: '', grammar_said: 2, traced_words: 0 });
    const withPrimes = createKb({ ...source, coverage: [{ key: 'atoms', items: [{ key: 'EAT', eng: 'eat', words: ['chi1'], forms: [] }] }, ...source.coverage] });
    const r = await scoreboardRow(withPrimes, { date, atoms: false });
    expect(r).toMatchObject({ primes_said: 1, primes_once: 1, grammar_said: 2, traced_words: 2 });
  });

  test('with the solver, the atoms columns fill in; with nothing reviewed every word is in the set', async () => {
    const row = await scoreboardRow(kb, { date });
    expect(row.marked_atoms).toBe(0);
    expect(row.unreviewed).toBe(row.words);
    expect(row.smallest_set).toBe(row.words);
    expect(row.true_atoms).toBe(0);
    expect(row.unchecked).toBe(0);
  });

  test('a number that cannot be measured yet stays empty: no grammar patterns, no parse rate', async () => {
    const row = await scoreboardRow(kb, { date, atoms: false });
    expect(row.patterns).toBe(0);
    expect(row.parse_rate).toBe('');
  });
});

describe('sayability', () => {
  const band = (upTo, said, total = upTo) => ({ upTo, said, near: 0, missing: total - said, total });
  const report = {
    mandarin: { bands: [band(500, 450), band(1000, 800), band(3000, 1500)] },
    englishTop: { bands: [band(500, 400), band(1000, 700), band(3000, 1980)] },
    basic: { said: 51, total: 100 },
    sentences: { said: 7, total: 8 },
  };

  test('each band is the share said, as a fraction like parse_rate', () => {
    expect(sayability(report)).toEqual({
      said_mandarin_1000: 0.8,
      said_mandarin_3000: 0.5,
      said_mandarin_all: 0.5,
      said_english_500: 0.8,
      said_english_1000: 0.7,
      said_english_3000: 0.66,
      covered_english_3000: 0.66,
      said_basic_english: 0.51,
      said_sentences: 0.875,
    });
  });

  test('a list too short for a band, or no list at all, leaves that column empty', () => {
    const short = { ...report, mandarin: { bands: [band(300, 250)] }, basic: { said: 0, total: 0 }, sentences: { said: 0, total: 0 } };
    expect(sayability(short)).toMatchObject({ said_mandarin_1000: '', said_mandarin_3000: '', said_basic_english: '', said_sentences: '', said_english_500: 0.8 });
  });

  test('the row carries them; the fixture has no word lists, so they stay empty', async () => {
    const row = await scoreboardRow(kb, { date, atoms: false });
    for (const n of Object.keys(sayability(report))) expect(row[n]).toBe('');
  });
});

describe('the file', () => {
  const row = (extra) => ({ ...Object.fromEntries(NAMES.map((n) => [n, ''])), date: '2026-10-12', ...extra });

  test('rows are appended, and a label with commas and quotes survives', () => {
    const file = tmp();
    expect(appendRow(file, row({ label: 'W1, "atoms"', words: 230 }))).toBe(1);
    expect(appendRow(file, row({ label: 'second', words: 231 }))).toBe(2);
    const rows = readScoreboard(file);
    expect(rows.map((r) => r.label)).toEqual(['W1, "atoms"', 'second']);
    expect(rows.map((r) => r.words)).toEqual([230, 231]);
    expect(readFileSync(file, 'utf-8').split('\n')[0]).toBe(NAMES.join(','));
  });

  test('a file with other columns is rewritten with these: new ones empty, old ones dropped', () => {
    const file = tmp();
    writeFileSync(file, 'date,label,words,gone\n2026-01-01,old,10,99\n');
    appendRow(file, row({ label: 'new', words: 11 }));
    const rows = readScoreboard(file);
    expect(rows).toHaveLength(2);
    expect(rows[0]).toMatchObject({ date: '2026-01-01', label: 'old', words: 10, composites: '' });
    expect('gone' in rows[0]).toBe(false);
  });

  test('no file is no rows', () => {
    expect(readScoreboard(tmp())).toEqual([]);
  });
});

describe('the text', () => {
  test('shows each number and the change since the last stored row', () => {
    const before = [{ ...Object.fromEntries(NAMES.map((n) => [n, ''])), date: '2026-10-01', label: 'earlier', words: 230, unreviewed: 185, smallest_set: 230 }];
    const now = { ...before[0], date: '2026-10-12', label: 'later', unreviewed: 100, smallest_set: 230 };
    const text = renderScoreboard(now, before);
    expect(text).toContain('against the row of 2026-10-01 (earlier)');
    expect(text).toMatch(/unreviewed\s+100\s+\(-85\)/);
    // no change, nothing after the number
    expect(text).toMatch(/smallest_set\s+230\s{3}/);
    expect(text).toContain('1 stored row(s).');
  });

  test('without an earlier row it says so', () => {
    const now = Object.fromEntries(NAMES.map((n) => [n, '']));
    expect(renderScoreboard(now, [])).toContain('(no earlier row)');
  });
});
