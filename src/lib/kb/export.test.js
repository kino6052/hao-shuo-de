import { describe, expect, test } from 'bun:test';
import { buildExport, encodeName, exportFragment, exportTurtle, renderExportSummary } from './export.js';
import { parseTurtle } from './turtle-check.js';

const words = {
  wo3: { term: 'wǒ', hanzi: '我', pos: { eng: 'pronoun' }, definition: { eng: 'I, me', rus: 'я' } },
  da3: { term: 'dǎ', hanzi: '打', pos: { eng: 'verb' }, definition: { eng: 'hit, "fight"', rus: 'бить' } },
  guo2: { term: 'guó', hanzi: '国', pos: { eng: 'noun/suffix' }, definition: { eng: 'country', rus: 'страна' } },
  he2: { term: 'hé', hanzi: '和', pos: { eng: 'conjunction' }, definition: { eng: 'and\nwith', rus: 'и' } },
  hao3: { term: 'hǎo', hanzi: '好', pos: { eng: 'adjective' }, definition: { eng: 'good', rus: 'хороший' } },
  huai4: { term: 'huài', hanzi: '坏', pos: { eng: 'adjective' }, definition: { eng: 'bad', rus: 'плохой' } },
};
const composites = [
  { zh: '战争', py: 'zhànzhēng', en: 'war', ru: 'война', pos: 'noun', hsd: '{{word:guo2}} {{word:he2}} {{word:guo2}} {{word:da3}}', tts: '国和国打', literal: 'country and country fight', proposed: true },
  { zh: '打人', py: 'dǎrén', en: 'hit\nsomeone, \\ "hard"', pos: 'verb', hsd: '{{word:da3}} {{word:ren2}}' },
  { zh: '好人', py: 'hǎorén', en: 'good person', pos: 'noun', hsd: '{{word:hao3}} {{word:ren2}}', tts: ['好人'] },
];
const links = { linked: { 战争: ['i41872'], 好人: ['i1', 'i2'] }, words: { hao3: ['i77'] } };
const relations = [
  { kind: 'kind-of', status: 'accepted', a: '战争', b: 'da3', ends: 'composite-word', why: 'war hangs under fight' },
  { kind: 'opposite', status: 'accepted', a: 'hao3', b: 'huai4', ends: 'word', why: 'good and bad' },
  { kind: 'opposite', status: 'proposed', a: '打人', b: '好人', ends: 'composite', why: 'a guess' },
  { kind: 'place-of', status: 'accepted', a: '战争', b: 'a text, not an entry', ends: 'composite-text', why: '' },
  { kind: 'scale', status: 'proposed', members: ['hao3', 'huai4'], a: 'hao3', ends: 'mixed', why: 'good < bad' },
  { kind: 'set', status: 'accepted', members: ['wo3'], a: 'wo3', ends: 'word', why: 'one is not a group' },
];
const date = new Date('2026-10-21T10:00:00Z');
const model = (extra) => buildExport({ words, composites, links, relations, date, ...extra });
const has = (triples, s, p, o) => triples.some(([a, b, c]) => a === s && b === p && (o === undefined || c === o));

const NS = 'https://haoshuode.example/';
const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
const ONTOLEX = 'http://www.w3.org/ns/lemon/ontolex#';

describe('the file parses', () => {
  test('the whole file is valid Turtle with every prefix declared', () => {
    const { prefixes, triples } = parseTurtle(exportTurtle(model()));
    expect(prefixes.ontolex).toBe(ONTOLEX);
    expect(prefixes.hsdw).toBe(`${NS}word/`);
    expect(triples.length).toBeGreaterThan(50);
  });

  test('quotes, a newline and non-ASCII text in a gloss survive', () => {
    const { triples } = parseTurtle(exportTurtle(model()));
    const gloss = triples.find(([s, p]) => s === `${NS}word/da3_sense` && p === 'http://www.w3.org/2004/02/skos/core#definition');
    expect(gloss[2]).toBe('"hit, "fight""@en');
    expect(triples.some(([s, , o]) => s === `${NS}word/he2_sense` && o === '"and with"@en')).toBe(true); // a word's gloss is one line
    expect(triples.some(([s, , o]) => s === `${NS}entry/${encodeName('打人')}_sense` && o === '"hit\nsomeone, \\ "hard""@en')).toBe(true);
  });

  test('a broken file is refused by the checker', () => {
    expect(() => parseTurtle('@prefix a: <x> .\nb:c a:d "e" .')).toThrow('prefix "b" is not declared');
    expect(() => parseTurtle('@prefix a: <x> .\na:b a:c "open .')).toThrow('not closed');
    expect(() => parseTurtle('@prefix a: <x> .\na:b a:c a:d')).toThrow();
  });
});

describe('entries', () => {
  const { triples } = parseTurtle(exportTurtle(model()));
  const word = `${NS}word/wo3`;

  test('a core word is a lexical entry with a form (hanzi and pinyin) and a sense (English and Russian)', () => {
    expect(has(triples, word, RDF_TYPE, `${ONTOLEX}LexicalEntry`)).toBe(true);
    expect(has(triples, `${word}_form`, `${ONTOLEX}writtenRep`, '"我"@cmn-Hans')).toBe(true);
    expect(has(triples, `${word}_form`, `${ONTOLEX}writtenRep`, '"wǒ"@cmn-Latn-pinyin')).toBe(true);
    expect(has(triples, `${word}_sense`, 'http://www.w3.org/2004/02/skos/core#definition', '"I, me"@en')).toBe(true);
    expect(has(triples, `${word}_sense`, 'http://www.w3.org/2004/02/skos/core#definition', '"я"@ru')).toBe(true);
    expect(has(triples, word, 'http://www.lexinfo.net/ontology/3.0/lexinfo#partOfSpeech', 'http://www.lexinfo.net/ontology/3.0/lexinfo#pronoun')).toBe(true);
  });

  test('a WordNet link is an ontolex:reference to the CILI id, on words and on composites', () => {
    expect(has(triples, `${NS}word/hao3_sense`, `${ONTOLEX}reference`, 'http://ili.globalwordnet.org/ili/i77')).toBe(true);
    const war = `${NS}entry/${encodeName('战争')}`;
    expect(has(triples, `${war}_sense`, `${ONTOLEX}reference`, 'http://ili.globalwordnet.org/ili/i41872')).toBe(true);
    const good = `${NS}entry/${encodeName('好人')}_sense`;
    expect(triples.filter(([s, p]) => s === good && p === `${ONTOLEX}reference`)).toHaveLength(2);
  });

  test('a composite lists its description in hanzi, the words it uses once each, and is marked proposed', () => {
    const war = `${NS}entry/${encodeName('战争')}`;
    expect(has(triples, war, `${NS}ns#description`, '"国和国打"@cmn-Hans')).toBe(true);
    const used = triples.filter(([s, p]) => s === war && p === `${NS}ns#definedBy`).map((t) => t[2]);
    expect(used.sort()).toEqual([`${NS}word/da3`, `${NS}word/guo2`, `${NS}word/he2`]);
    expect(has(triples, war, `${NS}ns#status`, '"proposed"')).toBe(true);
    expect(has(triples, `${NS}entry/${encodeName('打人')}`, `${NS}ns#status`)).toBe(false);
  });

  test('every entry is in the lexicon', () => {
    const entries = triples.filter(([s, p]) => s === `${NS}ns#lexicon` && p === 'http://www.w3.org/ns/lemon/lime#entry');
    expect(entries).toHaveLength(Object.keys(words).length + composites.length);
  });
});

describe('relations', () => {
  test('accepted relations with two entries at the ends become triples; the rest are counted as left out', () => {
    const m = model();
    const { triples } = parseTurtle(exportTurtle(m));
    expect(has(triples, `${NS}entry/${encodeName('战争')}`, `${NS}ns#kindOf`, `${NS}word/da3`)).toBe(true);
    expect(has(triples, `${NS}word/hao3`, `${NS}ns#oppositeOf`, `${NS}word/huai4`)).toBe(true);
    expect(m.counts.relations).toEqual({ kindOf: 1, oppositeOf: 1 });
    expect(m.counts.skipped.proposed).toBe(2);
    expect(m.counts.skipped['an end is not an entry (place-of)']).toBe(1);
    expect(m.counts.skipped['a group with fewer than two entries (set)']).toBe(1);
    expect(m.counts.groups).toBe(0);
  });

  test('with includeProposed, a proposed relation is a triple marked by an owl:Axiom, and a scale is a group', () => {
    const m = model({ includeProposed: true });
    const { triples } = parseTurtle(exportTurtle(m));
    const a = `${NS}entry/${encodeName('打人')}`;
    const b = `${NS}entry/${encodeName('好人')}`;
    expect(has(triples, a, `${NS}ns#oppositeOf`, b)).toBe(true);
    const axiom = triples.find(([, p, o]) => p === 'http://www.w3.org/2002/07/owl#annotatedTarget' && o === b)[0];
    expect(has(triples, axiom, `${NS}ns#status`, '"proposed"')).toBe(true);
    expect(m.counts.proposedRelations).toBe(1);
    expect(m.counts.groups).toBe(1);
    expect(has(triples, `${NS}group/scale-1`, `${NS}ns#member`, `${NS}word/huai4`)).toBe(true);
  });

  test('a symmetric relation is declared symmetric', () => {
    const { triples } = parseTurtle(exportTurtle(model()));
    expect(has(triples, `${NS}ns#oppositeOf`, RDF_TYPE, 'http://www.w3.org/2002/07/owl#SymmetricProperty')).toBe(true);
    expect(has(triples, `${NS}ns#kindOf`, RDF_TYPE, 'http://www.w3.org/2002/07/owl#SymmetricProperty')).toBe(false);
  });
});

describe('a fragment, the base IRI and the summary', () => {
  test('one entry alone parses and carries its relations; an unknown name is null', () => {
    const m = model();
    const text = exportFragment(m, '战争');
    const { triples } = parseTurtle(text);
    expect(has(triples, `${NS}entry/${encodeName('战争')}`, `${NS}ns#kindOf`, `${NS}word/da3`)).toBe(true);
    expect(triples.some(([s]) => s.includes('hao3'))).toBe(false);
    expect(exportFragment(m, 'nope')).toBeNull();
  });

  test('the base IRI can be changed', () => {
    const { prefixes } = parseTurtle(exportTurtle(model({ base: 'https://example.org/hsd/' })));
    expect(prefixes.hsdw).toBe('https://example.org/hsd/word/');
  });

  test('names with hanzi are percent-encoded; plain ones are kept', () => {
    expect(encodeName('战争')).toBe('%E6%88%98%E4%BA%89');
    expect(encodeName('wo3')).toBe('wo3');
    expect(encodeName('a.b')).toBe('a%2Eb');
  });

  test('the summary says how many entries, senses and links', () => {
    const text = renderExportSummary(model().counts);
    expect(text).toContain('6 core words, 3 composites (1 proposed)');
    expect(text).toContain('senses: 9, 3 linked to WordNet');
    expect(text).toContain('kindOf 1');
  });
});
