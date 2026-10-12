// The KB on the real data, checked against plain JavaScript: for some real
// words, the clingo answer to "what if we drop them" must equal what a few
// lines of loops over the same source give. This is the check that the facts,
// the compact text tier and the rules together say the same as the data.

import { beforeAll, describe, expect, test } from 'bun:test';
import { loadSource } from '../../../scripts/kb-source.js';
import { createKb } from './kb.js';
import { wordRefIds } from '../word-refs.js';
import { wordsOfText } from './facts.js';
import { findClingo } from './clingo.js';
import { parseReport, renderParseReport } from './parse-report.js';

let kb;
let source;

beforeAll(async () => {
  source = await loadSource();
  kb = createKb(source);
}, 60_000);

// the plain-JS answer
function expected(ids) {
  const gone = new Set(ids);
  const broken = (form) => wordRefIds(form).some((w) => gone.has(w));
  const redo = [];
  const loses = [];
  for (const c of source.composites) {
    const forms = c.hsd ? c.hsd.split(' / ') : [];
    if (!forms.length) continue;
    const n = forms.filter(broken).length;
    if (n === forms.length) redo.push(c.zh);
    else if (n > 0) loses.push(c.zh);
  }
  const sentences = kb.facts.sentences.filter((s) => wordsOfText(s.pinyin).some((w) => gone.has(w)));
  const byKind = {};
  for (const s of sentences) byKind[s.kind] = (byKind[s.kind] ?? 0) + 1;
  const lost = [];
  for (const g of source.coverage) {
    for (const it of g.items) {
      if (it.forms?.length && it.forms.every(broken)) lost.push(`${g.key}:${it.key}`);
    }
  }
  return { redo: redo.sort(), loses: loses.sort(), sentences: sentences.length, byKind, lost: lost.sort() };
}

describe('remove on the real data equals plain loops', () => {
  const cases = [['deng1'], ['de'], ['wo3'], ['shi4'], ['hao3', 'chi1'], ['wo3', 'ni3', 'de']];
  for (const ids of cases) {
    test(`drop ${ids.join(' + ')}`, async () => {
      for (const id of ids) expect(source.words[id]).toBeDefined();
      const r = await kb.remove(ids);
      const want = expected(ids);
      expect(r.composites.redo.map((c) => c.zh).sort()).toEqual(want.redo);
      expect(r.composites.loses.map((c) => c.zh).sort()).toEqual(want.loses);
      expect(r.book.sentences.length).toBe(want.sentences);
      for (const [kind, n] of Object.entries(want.byKind)) expect(r.book.counts[kind]).toBe(n);
      expect(r.coverage.lost.map((i) => i.id).sort()).toEqual(want.lost);
    }, 60_000);
  }
});

describe('the explorer questions on the real data', () => {
  test('the program for a what-if fits in clingo-wasm even for the commonest words', async () => {
    const common = ['de', 'wo3', 'ni3', 'shi4', 'bu4', 'ta1', 'le', 'ma'].filter((id) => source.words[id]);
    expect(common.length).toBeGreaterThan(3);
    // the built-in engine is the one with the size limit, so this runs on it even when clingo is installed
    const before = process.env.KB_CLINGO;
    process.env.KB_CLINGO = 'wasm';
    try {
      const r = await kb.remove(common);
      expect(r.words.map((w) => w.id)).toEqual(common);
    } finally {
      if (before === undefined) delete process.env.KB_CLINGO;
      else process.env.KB_CLINGO = before;
    }
  }, 60_000);

  test.skipIf(!findClingo())('the two engines give the same what-if on the real data', async () => {
    const before = process.env.KB_CLINGO;
    const ask = async (setting) => {
      if (setting === undefined) delete process.env.KB_CLINGO;
      else process.env.KB_CLINGO = setting;
      return JSON.stringify(await kb.remove(['wo3', 'de']));
    };
    try {
      expect(await ask('wasm')).toBe(await ask(before));
    } finally {
      if (before === undefined) delete process.env.KB_CLINGO;
      else process.env.KB_CLINGO = before;
    }
  }, 60_000);

  test('every word has a card, and the counts on the card equal the loops', () => {
    for (const id of ['deng1', 'de', 'hao3']) {
      const card = kb.word(id);
      const used = source.composites.filter((c) => (c.hsd ? c.hsd.split(' / ') : []).some((f) => wordRefIds(f).includes(id)));
      expect(card.composites.usedBy).toBe(used.length);
      const sentences = kb.facts.sentences.filter((s) => wordsOfText(s.pinyin).includes(id));
      expect(card.sentences.total).toBe(sentences.length);
    }
  });

  test('a name that is not a word says so', () => {
    expect(() => kb.word('qqqq')).toThrow(/no word/);
  });
});

describe('the parse report on lessons 1-4', () => {
  const lessons = () => source.lessons.filter((l) => l.number <= 4).map(({ id, number }) => ({ id, number }));
  const report = () => parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, lessons: lessons() });

  test('lessons 2 and 3 parse completely; the gaps are all in lesson 4', () => {
    const r = report();
    const by = Object.fromEntries(r.lessons.map((l) => [l.number, l]));
    expect(by[2].parsed).toBe(by[2].total);
    expect(by[3].parsed).toBe(by[3].total);
    expect(by[2].total + by[3].total).toBeGreaterThan(30);
    expect(r.failures.every((f) => f.lesson === 'pointing')).toBe(true);
  });

  test('an English answer that names a word or two is left out, not counted as a failure', () => {
    const r = report();
    expect(r.skipped.length).toBeGreaterThan(0);
    expect(r.failures.some((f) => f.lesson === 'sounds-and-symbols')).toBe(false);
  });

  test('it prints as markdown with the rate, the lessons, and what does not parse', () => {
    const text = renderParseReport(report(), source.words, { title: 'Parse report: lessons 1-4' });
    expect(text).toMatch(/^# Parse report: lessons 1-4/);
    expect(text).toMatch(/\d+ of \d+ sentences parse/);
    expect(text).toContain('## What does not parse');
    expect(text).toContain('| 2. words-and-sentences |');
  });
});
