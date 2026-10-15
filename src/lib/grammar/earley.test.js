import { describe, expect, test } from 'bun:test';
import { buildLexicon, lex, posClasses } from './lexicon.js';
import { makeGrammar, parse } from './earley.js';
import { buildGrammar } from './grammar.js';
import { createParser, bracket, explainFailure, patternsOf } from './parser.js';

const w = (term, pos) => ({ term, pos: { eng: pos } });
const words = {
  wo3: w('wǒ', 'pronoun'),
  kan4: w('kàn', 'verb'),
  shi4: w('shì', 'verb'),
  ren2: w('rén', 'noun'),
  nv3: w('nǚ', 'adjective/noun'),
  yong4: w('yòng', 'verb/coverb'),
  wang4: w('wàng', 'noun'),
  ge4: w('gè', 'measure word'),
  hao3: w('hǎo', 'adjective'),
};
const composites = [{ zh: '女人', py: 'nǚrén', pos: 'noun', hsd: '{{word:nv3}}-{{word:ren2}} / {{word:nv3}} {{word:ren2}}' }];
const lexicon = buildLexicon({ words, composites });
const ref = (...ids) => ids.map((id) => `{{word:${id}}}`).join(' ');
const rule = (lhs, rhs, id = `${lhs}>${rhs}`) => ({ lhs, rhs: rhs.split(' '), id, pattern: 'toy' });

describe('lex', () => {
  test('a chain that spells a composite also gets one edge over its words', () => {
    const r = lex('{{Word:nv3}}-{{word:ren2}}.', lexicon);
    expect(r.n).toBe(2);
    const whole = r.edges.find((e) => e.composite);
    expect(whole).toMatchObject({ from: 0, to: 2, composite: '女人' });
    expect(whole.classes.has('noun')).toBe(true);
    // the parts are still there
    expect(r.edges.filter((e) => e.id).map((e) => e.id)).toEqual(['nv3', 'ren2']);
  });

  test('a composite only counts when its words are joined by hyphens', () => {
    expect(lex(ref('nv3', 'ren2'), lexicon).edges.some((e) => e.composite)).toBe(false);
  });

  test('a word with two parts of speech has both classes', () => {
    expect([...lex(ref('nv3'), lexicon).edges[0].classes].sort()).toEqual(['adjective', 'noun']);
    expect(posClasses('noun/measure word')).toEqual(['noun', 'measure_word']);
  });

  test('a bare ge is gè, a comma is a word of its own, the end mark is dropped', () => {
    const r = lex('{{Word:wo3}}-ge, {{word:ren2}}!', lexicon);
    expect(r.tokens.map((t) => t.text)).toEqual(['wǒ', 'gè', ',', 'rén']);
    expect(r.edges[1].id).toBe('ge4');
    expect(r.edges[2].classes.has('comma')).toBe(true);
    expect(r.edges[2].classes.has('colon')).toBe(false);
  });

  test('a colon is a comma and a colon', () => {
    const r = lex('{{Word:wo3}}: {{word:ren2}}.', lexicon);
    expect([...r.edges[1].classes].sort()).toEqual(['colon', 'comma']);
  });

  test('a syllable that is not a word is a problem, and fits nothing', () => {
    const r = lex(`${ref('wo3')} zzz`, lexicon);
    expect(r.problems).toEqual(['"zzz" is not a word of the dictionary (a bare syllable, or English)']);
    expect(r.edges.at(-1).classes.has('unknown')).toBe(true);
  });

  test('an id that is not in the dictionary is a problem', () => {
    expect(lex('{{word:nope}}', lexicon).problems).toEqual(['"nope" is not a word']);
  });
});

describe('the chart parser', () => {
  const lat = (...ids) => lex(ref(...ids), lexicon);

  test('left recursion and a plain sentence', () => {
    const g = makeGrammar([rule('Utt', 'S'), rule('S', 'NP VP'), rule('NP', '@pronoun'), rule('NP', '@noun'), rule('NP', 'NP NP'), rule('VP', 'shi4 NP')], { glue: new Set(['shi4']) });
    const r = parse(lat('wo3', 'shi4', 'ren2'), g);
    expect(r.ok).toBe(true);
    expect(r.treeCount).toBe(1);
  });

  test('every tree of an ambiguous sentence comes back (a PP that attaches two ways)', () => {
    const g = makeGrammar([
      rule('Utt', 'S'),
      rule('S', 'NP VP'),
      rule('NP', '@pronoun'),
      rule('NP', '@noun'),
      rule('NP', 'NP PP'),
      rule('PP', 'yong4 NP'),
      rule('VP', '@verb NP'),
      rule('VP', 'VP PP'),
    ], { glue: new Set(['yong4']) });
    const r = parse(lat('wo3', 'kan4', 'ren2', 'yong4', 'wang4'), g);
    expect(r.ok).toBe(true);
    expect(r.treeCount).toBe(2);
    expect(r.trees).toHaveLength(2);
  });

  test('a reading that uses a preferred rule comes first, whichever rule it is', () => {
    const uses = (t, id) => t.rule === id || (t.children ?? []).some((c) => uses(c, id));
    for (const id of ['NP>NP PP', 'VP>VP PP']) {
      const rules = [
        rule('Utt', 'S'),
        rule('S', 'NP VP'),
        rule('NP', '@pronoun'),
        rule('NP', '@noun'),
        rule('NP', 'NP PP'),
        rule('PP', 'yong4 NP'),
        rule('VP', '@verb NP'),
        rule('VP', 'VP PP'),
      ].map((r) => (r.id === id ? { ...r, preferred: true } : r));
      const r = parse(lat('wo3', 'kan4', 'ren2', 'yong4', 'wang4'), makeGrammar(rules, { glue: new Set(['yong4']) }));
      expect(r.treeCount).toBe(2);
      expect(uses(r.trees[0], id)).toBe(true);
    }
  });

  test('N nouns in a row under NP -> NP NP has Catalan-many trees', () => {
    const g = makeGrammar([rule('Utt', 'NP'), rule('NP', '@noun'), rule('NP', 'NP NP')]);
    expect(parse(lat('ren2', 'ren2', 'ren2'), g).treeCount).toBe(2);
    expect(parse(lat('ren2', 'ren2', 'ren2', 'ren2'), g).treeCount).toBe(5);
  });

  test('a word the grammar names only matches by name (no double reading of shì)', () => {
    const rules = [rule('Utt', 'S'), rule('S', 'NP VP'), rule('NP', '@pronoun'), rule('NP', '@noun'), rule('VP', 'shi4 NP'), rule('VP', '@verb NP')];
    expect(parse(lat('wo3', 'shi4', 'ren2'), makeGrammar(rules, { glue: new Set() })).treeCount).toBe(2);
    expect(parse(lat('wo3', 'shi4', 'ren2'), makeGrammar(rules, { glue: new Set(['shi4']) })).treeCount).toBe(1);
  });

  test('the composite reading and the split reading are both tried', () => {
    const l = lex('{{word:wo3}} {{word:shi4}} {{word:nv3}}-{{word:ren2}}', lexicon);
    // no rule joins two nouns: only the composite reading parses
    const g = makeGrammar([rule('Utt', 'S'), rule('S', 'NP VP'), rule('NP', '@pronoun'), rule('NP', '@noun'), rule('VP', 'shi4 NP')], { glue: new Set(['shi4']) });
    const r = parse(l, g);
    expect(r.ok).toBe(true);
    expect(JSON.stringify(r.trees[0])).toContain('女人');
  });

  test('a failure says where it stopped and what could have come', () => {
    const g = makeGrammar([rule('Utt', 'S'), rule('S', 'NP VP'), rule('NP', '@pronoun'), rule('NP', '@noun'), rule('VP', 'shi4 NP')], { glue: new Set(['shi4']) });
    const r = parse(lat('wo3', 'shi4', 'shi4'), g);
    expect(r.ok).toBe(false);
    expect(r.failure.at).toBe(2);
    expect(r.failure.expected).toEqual(['@noun', '@pronoun']);
    expect(r.failure.pieces.map((p) => [p.sym, p.from, p.to])).toEqual([['NP', 0, 1], ['?', 1, 2], ['?', 2, 3]]);
  });

  test('running out of words is a failure at the end', () => {
    const g = makeGrammar([rule('Utt', 'S'), rule('S', 'NP VP'), rule('NP', '@pronoun'), rule('VP', 'shi4 NP')], { glue: new Set(['shi4']) });
    const r = parse(lat('wo3', 'shi4'), g);
    expect(r.ok).toBe(false);
    expect(r.failure.at).toBe(2);
  });

  test('an empty sentence does not parse', () => {
    const g = makeGrammar([rule('Utt', 'NP'), rule('NP', '@noun')]);
    expect(parse(lex('', lexicon), g).ok).toBe(false);
  });

  test('a rule with an empty right side is refused', () => {
    expect(() => makeGrammar([{ lhs: 'A', rhs: [], id: 'x' }])).toThrow(/empty right side/);
  });
});

describe('buildGrammar finds problems in the patterns', () => {
  const p = (rules) => [{ id: 'p', rules }];

  test('a nonterminal nobody defines, an unknown class, an unknown word, a lowercase left side', () => {
    const { errors } = buildGrammar(p([{ lhs: 'Utt', hsd: 'Missing' }, { lhs: 'NP', hsd: '@thing' }, { lhs: 'VP', hsd: 'zzz4' }, { lhs: 'bad', hsd: '@noun' }]), { words, composites });
    expect(errors).toEqual([
      'p#1: Missing has no rule',
      'p#2: no word is @thing',
      'p#3: "zzz4" is not a word',
      'p#4: the left side "bad" must start with a capital letter',
    ]);
  });

  test('a clean pattern has no errors, and its rules are named after it', () => {
    const { errors, rules } = buildGrammar(p([{ lhs: 'Utt', hsd: 'NP' }, { lhs: 'NP', hsd: '@noun' }]), { words, composites });
    expect(errors).toEqual([]);
    expect(rules.map((r) => r.id)).toEqual(['p#1', 'p#2']);
  });
});

describe('createParser', () => {
  const patterns = [
    {
      id: 'frame',
      rules: [
        { lhs: 'Utt', hsd: 'S' },
        { lhs: 'S', hsd: 'NP VP' },
        { lhs: 'NP', hsd: '@pronoun' },
        { lhs: 'NP', hsd: '@noun' },
        { lhs: 'VP', hsd: 'shi4 NP' },
      ],
    },
  ];
  const parser = createParser({ patterns, words, composites });

  test('a parse names its patterns and prints as brackets', () => {
    const r = parser.parse(`${ref('wo3', 'shi4', 'ren2')}.`);
    expect(r.ok).toBe(true);
    expect(r.patterns).toEqual(['frame']);
    expect(bracket(r)).toBe('[Utt [S [NP wǒ] [VP shì [NP rén]]]]');
    expect(patternsOf(r.trees[0])).toEqual(['frame']);
  });

  test('a failure is explained in words', () => {
    const r = parser.parse(ref('wo3', 'ren2'));
    expect(r.ok).toBe(false);
    expect(explainFailure(r, words)).toBe('"rén" doesn\'t fit (word 2 of 2); a pattern could continue with shì');
    expect(r.failure.token).toBe('rén');
  });
});
