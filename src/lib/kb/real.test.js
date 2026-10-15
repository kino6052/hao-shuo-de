// The KB on the real data, checked against plain JavaScript: for some real
// words, the clingo answer to "what if we drop them" must equal what a few
// lines of loops over the same source give. This is the check that the facts,
// the compact text tier and the rules together say the same as the data.
//
// `node scripts/test.js` runs it (before a push): every answer here is a
// spawned solver over the whole dictionary. The parsing of the real book that
// used to be in this file is in real-parse.test.js.

import { beforeAll, describe, expect, test } from 'bun:test';
import { loadSource } from '../../../scripts/kb-source.js';
import { createKb } from './kb.js';
import { parseMemo } from '../../../scripts/parse-memo.js';
import { renderRemoval } from './whatif.js';
import { ruleWords } from '../grammar/grammar.js';
import { wordRefIds } from '../word-refs.js';
import { wordsOfText } from './facts.js';
import { findClingo } from './clingo.js';

let kb;
let source;

beforeAll(async () => {
  source = await loadSource();
  // the parse memory on disk (scripts/parse-memo.js): these tests only ask whether sentences parse
  kb = createKb(source, { parseMemo: parseMemo() });
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

describe('the grammar in a removal report (K20)', () => {
  test('a word that a pattern rule names brings the pattern into the report, with what is left of it', async () => {
    const r = await kb.remove(['bie2']);
    const dont = r.patterns.find((p) => p.id === 'bie-dont');
    expect(dont.rules.hit.length).toBe(dont.rules.total);
    expect(dont.effect).toBe('no rules left');
    expect(r.counts.patterns).toBe(r.patterns.length);
    expect(renderRemoval(r)).toContain('Grammar patterns that name it');
  });

  test('a word no pattern names leaves the section empty', async () => {
    const used = new Set(source.patterns.flatMap((p) => p.rules.flatMap((x) => ruleWords(x.hsd))));
    const free = Object.keys(source.words).find((id) => !used.has(id) && !source.patterns.some((p) => p.examples.some(([py]) => py.toLowerCase().includes(source.words[id].term.toLowerCase()))));
    const r = await kb.remove([free]);
    expect(r.patterns).toEqual([]);
  });
});

describe('the grammar in the candidates (K20)', () => {
  test('the patterns a word carries cost the same in the candidates as in the removal report', async () => {
    const model = kb.candidates();
    for (const id of ['bie2', 'hen3', 'de', 'kuai4']) {
      const c = model.consequences([id]);
      const r = await kb.remove([id]);
      expect(c.counts.patterns, id).toBe(r.counts.patterns);
      expect(c.counts.patternsDead, id).toBe(r.patterns.filter((p) => p.effect === 'no rules left' || p.effect === 'no examples left').length);
    }
    expect(model.consequences(['bie2']).parts.pattern).toBeGreaterThan(0);
  });
});
