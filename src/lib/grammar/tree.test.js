// The meaning tree (tree.js) and the round trip (round-trip.js) on a tiny made-up grammar, so the tests keep their
// meaning when the book's patterns or words change. scripts/round-trip.js runs the same round trip on the book.

import { describe, expect, test } from 'bun:test';
import { createParser } from './parser.js';
import { makeTrees, readTreeText, sameTree, spellingHabits, spelledTokens, treeText } from './tree.js';
import { roundTrip, summarize } from './round-trip.js';

const w = (term, pos, eng = `the word ${term}`, extra = {}) => ({ term, pos: { eng: pos }, definition: { eng }, ...extra });
const words = {
  wo3: w('wǒ', 'pronoun', 'I, me'),
  ta1: w('tā', 'pronoun', 'he, she'),
  shi4: w('shì', 'verb', 'to be'),
  chi1: w('chī', 'verb', 'to eat'),
  kan4: w('kàn', 'verb', 'to look'),
  ren2: w('rén', 'noun', 'person'),
  nv3: w('nǚ', 'adjective/noun', 'female'),
  fan4: w('fàn', 'noun', 'meal; rice'),
  de: w('de', 'particle', 'of'),
  zhe4: w('zhè', 'pronoun', 'this'),
  ge4: w('gè', 'measure word', 'one of'),
  hao3: w('hǎo', 'adjective', 'good', { senses: { well: { eng: 'well' } } }),
};
const composites = [
  { zh: '女人', py: 'nǚrén', en: 'woman', pos: 'noun', hsd: '{{word:nv3}}-{{word:ren2}} / {{word:nv3}} {{word:ren2}}' },
  { zh: '其', py: 'qí', en: 'his, her', pos: 'adverb', hsd: '{{word:ta1}}-{{word:de}}' },
  { zh: '朋友', py: 'péngyou', en: 'friend', pos: 'noun', hsd: '{{word:hao3}}-{{word:de}} {{word:ren2}}' },
];
const rule = (lhs, hsd) => ({ lhs, hsd, eng: '' });
const patterns = [
  { id: 'frame', rules: [rule('Utt', 'S'), rule('Utt', 'S @comma S'), rule('Utt', 'NP @colon S'), rule('S', 'NP VP')] },
  { id: 'np', rules: [rule('NP', '@pronoun'), rule('NP', '@noun'), rule('NP', 'NP de NP'), rule('NP', '@pronoun-ta1 @noun'), rule('NP', 'zhe4 @measure_word @noun')] },
  { id: 'vp', rules: [rule('VP', 'shi4 NP'), rule('VP', '@verb NP'), rule('VP', '@verb @again'), rule('VP', '@adjective')] },
];
const parser = createParser({ patterns, words, composites });
const trees = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites });
const idOf = (lhs, rhs) => parser.rules.find((r) => r.lhs === lhs && r.rhs.join(' ') === rhs).id;
const ref = (...ids) => ids.map((id, i) => `{{${i ? 'word' : 'Word'}:${id}}}`).join(' ');
const treeOf = (text, k = 0) => trees.fromParse(parser.parse(text, { maxTrees: 20 }), k);

// wǒ shì rén, by hand
const np = (leaf) => ({ rule: idOf('NP', leaf.word && words[leaf.word].pos.eng === 'pronoun' ? '@pronoun' : '@noun'), slots: leaf.word && words[leaf.word].pos.eng === 'pronoun' ? { pronoun: leaf } : { noun: leaf } });
const sentence = (subject, vp) => ({ rule: idOf('Utt', 'S'), slots: { S: { rule: idOf('S', 'NP VP'), slots: { NP: subject, VP: vp } } } });
const woShiRen = sentence(np({ word: 'wo3' }), { rule: idOf('VP', 'shi4 NP'), slots: { NP: np({ word: 'ren2' }) } });

describe('the tree format', () => {
  test("a rule's slots are its right side without the words and commas it names, a second one numbered", () => {
    expect(trees.slotsOf(idOf('VP', 'shi4 NP'))).toEqual([{ name: 'NP', sym: 'NP' }]);
    expect(trees.slotsOf(idOf('NP', 'NP de NP'))).toEqual([{ name: 'NP', sym: 'NP' }, { name: 'NP2', sym: 'NP' }]);
    expect(trees.slotsOf(idOf('Utt', 'S @comma S'))).toEqual([{ name: 'S', sym: 'S' }, { name: 'S2', sym: 'S' }]);
    expect(trees.slotsOf(idOf('NP', '@pronoun-ta1 @noun')).map((s) => s.name)).toEqual(['pronoun', 'noun']);
  });

  test('the first reading of a parse is the tree of its rules and choices', () => {
    expect(treeOf(`${ref('wo3', 'shi4', 'ren2')}.`)).toEqual(woShiRen);
  });

  test('a chain that spells a composite is one leaf with its words, light syllables and senses are kept', () => {
    const t = treeOf('{{Word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.');
    expect(t.slots.S.slots.VP.slots.NP.slots.noun).toEqual({ composite: '女人', words: ['nv3', 'ren2'] });
    const light = treeOf('{{Word:wo3}} {{word:kan4}} {{light:ren2}}.');
    expect(light.slots.S.slots.VP.slots.NP.slots.noun).toEqual({ word: 'ren2', light: true });
    expect(treeOf('{{Word:wo3}} {{word:hao3#well}}.').slots.S.slots.VP.slots.adjective).toEqual({ word: 'hao3', sense: 'well' });
  });

  test('a name, an open X and a repeated syllable are leaves of their own', () => {
    expect(treeOf('"Jack" {{word:shi4}} X.').slots.S.slots).toEqual({
      NP: { rule: idOf('NP', '@noun'), slots: { noun: { quoted: 'Jack' } } },
      VP: { rule: idOf('VP', 'shi4 NP'), slots: { NP: { rule: idOf('NP', '@noun'), slots: { noun: { open: 'X' } } } } },
    });
    expect(treeOf('{{Word:wo3}} {{word:kan4}}-kan.').slots.S.slots.VP.slots).toEqual({ verb: { word: 'kan4' }, again: { again: 'kan' } });
  });
});

describe('the tree as one line', () => {
  test('a node is [rule slot=...], a leaf its word, composite, name, X or again', () => {
    expect(treeText(woShiRen)).toBe(`[${idOf('Utt', 'S')} S=[${idOf('S', 'NP VP')} NP=[${idOf('NP', '@pronoun')} pronoun=wo3] VP=[${idOf('VP', 'shi4 NP')} NP=[${idOf('NP', '@noun')} noun=ren2]]]]`);
    for (const text of ['{{Word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.', '{{Word:wo3}} {{word:kan4}} {{light:ren2}}.', '{{Word:wo3}} {{word:hao3#well}}.', '"Jack" {{word:shi4}} X.', '{{Word:wo3}} {{word:kan4}}-kan.']) {
      const t = treeOf(text);
      expect(readTreeText(treeText(t))).toEqual({ tree: t });
    }
    expect(treeText({ composite: '女人', words: ['nv3', 'ren2'], light: [1] })).toBe('女人[nv3 ren2~]');
    expect(treeText({ quoted: 'diàn', zi: true })).toBe('"diàn"-zi');
  });

  test('a line that does not read says where it stops', () => {
    expect(readTreeText('[a#1 S=[b#2 NP=wo3]').problem).toContain('the "]" of [a#1 is missing');
    expect(readTreeText('[a#1 S=[b#2 NP=wo3]] x').problem).toMatch(/text after the tree/);
    expect(readTreeText('[a#1 S=wo3 S=ni3]').problem).toMatch(/slot S is given twice/);
    expect(readTreeText('wo3').problem).toContain('starts with "["');
    expect(readTreeText('[a#1 NP=[b#2 noun=女人]]').problem).toMatch(/a tree or a leaf is expected/);
  });
});

describe('the checks', () => {
  test('a well-formed tree has no problems', () => {
    expect(trees.check(woShiRen)).toEqual([]);
    expect(trees.check(treeOf('{{Word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.'))).toEqual([]);
  });

  test('a word in a class it does not have, and a word the rule leaves out', () => {
    const t = sentence(np({ word: 'wo3' }), { rule: idOf('VP', '@verb NP'), slots: { verb: { word: 'ren2' }, NP: np({ word: 'fan4' }) } });
    expect(trees.check(t)).toEqual([`slot verb of ${idOf('VP', '@verb NP')} wants a verb, got rén (noun)`]);
    const taRen = { rule: idOf('NP', '@pronoun-ta1 @noun'), slots: { pronoun: { word: 'ta1' }, noun: { word: 'ren2' } } };
    expect(trees.check(sentence(taRen, { rule: idOf('VP', '@adjective'), slots: { adjective: { word: 'hao3' } } }))[0]).toMatch(/leaves out tā/);
  });

  test('a word the grammar names is never a choice', () => {
    const t = sentence(np({ word: 'wo3' }), { rule: idOf('VP', '@verb NP'), slots: { verb: { word: 'shi4' }, NP: np({ word: 'ren2' }) } });
    expect(trees.check(t)[0]).toMatch(/shì is only used where a rule names it/);
  });

  test('a missing rule, a slot the rule lacks, an empty slot, a rule of the wrong kind, an unknown word and sense', () => {
    expect(trees.check({ rule: 'nope#1', slots: {} })).toEqual(['the sentence: there is no rule "nope#1"']);
    const vp = idOf('VP', 'shi4 NP');
    expect(trees.check(sentence(np({ word: 'wo3' }), { rule: vp, slots: { NP2: np({ word: 'ren2' }) } }))).toEqual([`${vp} has no slot "NP2" (its slots: NP)`, `slot NP of ${vp} is empty`]);
    expect(trees.check(sentence(np({ word: 'wo3' }), np({ word: 'ren2' })))[0]).toMatch(/wants a VP, but np#2 makes a NP/);
    expect(trees.check(sentence(np({ word: 'wo3' }), { rule: vp, slots: { NP: { rule: idOf('NP', '@noun'), slots: { noun: { word: 'zzz' } } } } }))[0]).toMatch(/"zzz" is not a word/);
    expect(trees.check(sentence(np({ word: 'wo3' }), { rule: idOf('VP', '@adjective'), slots: { adjective: { word: 'hao3', sense: 'zzz' } } }))[0]).toMatch(/has no sense "zzz"/);
  });

  test('a composite must be spelled by its words, and a leaf is not a rule', () => {
    const vp = (noun) => sentence(np({ word: 'wo3' }), { rule: idOf('VP', 'shi4 NP'), slots: { NP: { rule: idOf('NP', '@noun'), slots: { noun } } } });
    expect(trees.check(vp({ composite: '女人', words: ['ren2', 'nv3'] }))[0]).toMatch(/"女人" is not spelled ren2 nv3; it is nv3-ren2 or nv3 ren2$/);
    expect(trees.check(vp({ composite: '朋友', words: ['hao3', 'de', 'ren2'] }))[0]).toMatch(/"朋友" is the phrase hao3-de ren2, not one composite; build it with the rules$/);
    expect(trees.check(vp({ composite: '猫', words: ['ren2'] }))[0]).toMatch(/"猫" is not a composite$/);
    expect(trees.check(sentence({ word: 'wo3' }, { rule: idOf('VP', 'shi4 NP'), slots: { NP: np({ word: 'ren2' }) } }))[0]).toMatch(/wants a NP, got the word wǒ/);
  });
});

describe('build and readback', () => {
  test('a tree builds its sentence: the named words come back, a capital on the first word', () => {
    expect(trees.build(woShiRen).refs).toBe('{{Word:wo3}} {{word:shi4}} {{word:ren2}}.');
    expect(trees.build(woShiRen, { end: '?' }).refs).toBe('{{Word:wo3}} {{word:shi4}} {{word:ren2}}?');
  });

  test("a composite's words are joined, and without the book's habits so is de", () => {
    expect(trees.build(treeOf('{{Word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.')).refs).toBe('{{Word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.');
    expect(trees.build(treeOf(`${ref('wo3', 'de', 'fan4', 'hao3')}.`)).refs).toBe('{{Word:wo3}}-{{word:de}} {{word:fan4}} {{word:hao3}}.');
  });

  test('commas come back, a colon gives the next word a capital, light syllables, senses and names are kept', () => {
    expect(trees.build(treeOf(`${ref('wo3', 'hao3')}, {{word:ta1}} {{word:hao3}}.`)).refs).toBe('{{Word:wo3}} {{word:hao3}}, {{word:ta1}} {{word:hao3}}.');
    expect(trees.build(treeOf('{{Word:wo3}}: {{Word:ta1}} {{word:hao3#well}}.')).refs).toBe('{{Word:wo3}}: {{Word:ta1}} {{word:hao3#well}}.');
    expect(trees.build(treeOf('"Jack" {{word:kan4}} {{light:ren2}}.')).refs).toBe('"Jack" {{word:kan4}} {{light:ren2}}.');
    expect(trees.build(treeOf('{{Word:wo3}} {{word:kan4}}-kan.')).refs).toBe('{{Word:wo3}} {{word:kan4}}-kan.');
  });

  test('the readback glosses each word by its first sense, in brackets named by the pattern', () => {
    expect(trees.readback(woShiRen)).toBe('[frame: I [vp: be person]]');
    expect(trees.readback(treeOf('{{Word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}.'))).toBe('[frame: I [vp: be woman]]');
    expect(trees.readback(treeOf(`${ref('wo3', 'hao3')}, {{word:ta1}} {{word:hao3}}.`))).toBe('[frame: I good, he good]');
  });

  test("a rule's English side is filled in, and an owner reads as my or of mine", () => {
    const base = [[idOf('Utt', 'S'), '{S}'], [idOf('S', 'NP VP'), '{NP} {VP}'], [idOf('VP', 'shi4 NP'), 'is {NP}'], [idOf('NP', '@pronoun'), '{pronoun}'], [idOf('NP', '@noun'), '{noun}']];
    const of = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites, english: new Map([...base, [idOf('NP', 'NP de NP'), '{NP2} of {NP}']]) });
    expect(of.readback(woShiRen)).toBe('I is person');
    expect(of.readback(treeOf(`${ref('wo3', 'de', 'fan4', 'shi4', 'fan4')}.`))).toBe('meal of mine is meal');
    const s = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites, english: new Map([...base, [idOf('NP', 'NP de NP'), "{NP}'s {NP2}"]]) });
    expect(s.readback(treeOf(`${ref('wo3', 'de', 'fan4', 'shi4', 'fan4')}.`))).toBe('my meal is meal');
    // a rule without one is glossed: VP -> @adjective has a single slot, so no brackets
    expect(of.readback(treeOf(`${ref('wo3', 'hao3')}.`))).toBe('I good');
    expect(of.ruleSays(idOf('VP', '@adjective'))).toBe(null);
  });

  test("a pattern rule's own say is its English side, and a draft goes before it", () => {
    const own = patterns.map((p) => (p.id === 'vp' ? { ...p, rules: p.rules.map((r) => (r.hsd === 'shi4 NP' ? { ...r, say: 'is {NP}' } : r)) } : p));
    const p2 = createParser({ patterns: own, words, composites });
    const id = p2.rules.find((r) => r.hsd === undefined && r.lhs === 'VP' && r.rhs.join(' ') === 'shi4 NP').id;
    expect(makeTrees({ rules: p2.rules, glue: p2.grammar.glue, words, composites }).ruleSays(id)).toBe('is {NP}');
    expect(makeTrees({ rules: p2.rules, glue: p2.grammar.glue, words, composites, english: new Map([[id, 'equals {NP}']]) }).ruleSays(id)).toBe('equals {NP}');
  });

  test('two trees are the same whatever the order of their keys; a reading leaves out light syllables', () => {
    const a = { rule: 'x', slots: { A: { word: 'wo3' }, B: { word: 'ren2', light: true } } };
    expect(sameTree(a, { slots: { B: { light: true, word: 'ren2' }, A: { word: 'wo3' } }, rule: 'x' })).toBe(true);
    expect(sameTree(a, { rule: 'x', slots: { A: { word: 'wo3' }, B: { word: 'ren2' } } })).toBe(false);
    expect(sameTree(a, { rule: 'x', slots: { A: { word: 'wo3' }, B: { word: 'ren2' } } }, { reading: true })).toBe(true);
  });
});

describe("the book's spelling habits", () => {
  test('spelled tokens say how each word is written: joined, light, a bare ge', () => {
    expect(spelledTokens('{{Word:zhe4}}-ge {{light:ren2}}, "Jack".')).toEqual([
      { kind: 'word', id: 'zhe4', light: false, joined: false },
      { kind: 'word', id: 'ge4', bare: true, joined: true },
      { kind: 'word', id: 'ren2', light: true, joined: false },
      { kind: 'mark', text: ',' },
      { kind: 'text', text: '"Jack"', joined: false },
    ]);
  });

  test('habits count each pair and each word', () => {
    const h = spellingHabits(['{{Word:zhe4}}-ge {{word:ren2}}.', '{{Word:zhe4}}-{{light:ge4}} {{word:ren2}}.', '{{Word:zhe4}}-ge {{word:fan4}}.']);
    expect(h.pairs.get('zhe4 ge4')).toEqual({ n: 3, after: 3, joined: 3, light: 1, bare: 2 });
    expect(h.words.get('zhe4')).toEqual({ n: 3, after: 0, joined: 0, light: 0, bare: 0 });
  });

  test('with habits the build joins and spells the way the book does, a pair before a word', () => {
    const habits = spellingHabits(['{{Word:zhe4}}-ge {{word:ren2}}.', '{{Word:zhe4}}-ge {{word:fan4}}.', '{{Word:zhe4}}-{{light:ge4}} {{word:ren2}}.', '{{Word:wo3}} {{light:de}} {{word:fan4}}.', '{{Word:wo3}} {{light:de}} {{word:ren2}}.']);
    const t = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites, habits });
    expect(t.build(treeOf(`${ref('zhe4', 'ge4', 'ren2', 'hao3')}.`)).refs).toBe('{{Word:zhe4}}-ge {{word:ren2}} {{word:hao3}}.');
    expect(t.build(treeOf(`${ref('wo3', 'de', 'fan4', 'hao3')}.`)).refs).toBe('{{Word:wo3}} {{light:de}} {{word:fan4}} {{word:hao3}}.');
  });

  test('a habit never joins words into a composite the tree reads word by word, except a word and de before a noun', () => {
    const habits = spellingHabits(['{{Word:ta1}}-{{word:de}} {{word:ren2}}.', '{{Word:ta1}}-{{word:de}} {{word:fan4}}.']);
    const t = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites, habits });
    // tā de wǒ as NP de NP: joining tā-de would spell 其, and 其 would be the first reading
    expect(t.build(treeOf(`${ref('ta1', 'de', 'wo3', 'hao3')}.`)).refs).toBe('{{Word:ta1}} {{word:de}} {{word:wo3}} {{word:hao3}}.');
    // before a noun the parser reads tā-de as two words first (Q6), so the habit may join them
    const built = t.build(treeOf(`${ref('ta1', 'de', 'ren2', 'hao3')}.`)).refs;
    expect(built).toBe('{{Word:ta1}}-{{word:de}} {{word:ren2}} {{word:hao3}}.');
    expect(sameTree(treeOf(built), treeOf(`${ref('ta1', 'de', 'ren2', 'hao3')}.`), { reading: true })).toBe(true);
  });
});

describe('the round trip', () => {
  const run = (text) => roundTrip(text, { parser, trees });

  test('a sentence comes back: the same words, and the tree is a reading of the built sentence', () => {
    const r = run(`${ref('wo3', 'shi4', 'ren2')}.`);
    expect(r).toMatchObject({ parsed: true, problems: [], built: '{{Word:wo3}} {{word:shi4}} {{word:ren2}}.', sameWords: true, sameSpelling: true, at: 0, ok: true });
  });

  test('a spelling the build writes otherwise still holds, counted as a spelling difference; the end mark is kept', () => {
    const r = run('{{word:wo3}} {{word:shi4}} {{word:ren2}}.');
    expect(r).toMatchObject({ ok: true, sameSpelling: false, built: '{{Word:wo3}} {{word:shi4}} {{word:ren2}}.' });
    expect(run(ref('wo3', 'shi4', 'ren2')).built).toBe(ref('wo3', 'shi4', 'ren2'));
  });

  test('a sentence that does not parse is only counted', () => {
    expect(run(ref('wo3', 'ren2'))).toEqual({ text: ref('wo3', 'ren2'), parsed: false, ok: false });
  });

  test('a composite the book joins and the first reading takes word by word is listed; a word and de before a noun is by design', () => {
    const r = run('{{Word:ta1}}-{{word:de}} {{word:ren2}} {{word:hao3}}.');
    expect(r.ok).toBe(true);
    expect(r.split).toEqual([{ zh: '其', words: ['ta1', 'de'], byDesign: true }]);
    expect(summarize([r])).toMatchObject({ split: 0, splitByDesign: 1 });
  });

  test('summarize counts what held and why', () => {
    const results = [`${ref('wo3', 'shi4', 'ren2')}.`, '{{word:wo3}} {{word:hao3}}.', ref('wo3', 'ren2')].map(run);
    expect(summarize(results)).toEqual({ sentences: 3, parsed: 2, ok: 2, problems: 0, sameWords: 2, sameSpelling: 1, first: 2, later: 0, lost: 0, split: 0, splitByDesign: 0 });
  });
});
