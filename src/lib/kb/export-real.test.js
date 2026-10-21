// The OntoLex export of the real dictionary parses as Turtle and says what the data says: every core word and composite
// is an entry, every WordNet link is a reference, every word a description uses is an entry. It reads the real data and
// the WordNet links, so `npm run test:push` runs it, not `npm test`.

import { beforeAll, describe, expect, test } from 'bun:test';
import { openKb } from '../../../scripts/kb.js';
import { exportTurtle } from './export.js';
import { parseTurtle } from './turtle-check.js';

let kb;
let model;
let parsed;

beforeAll(async () => {
  kb = await openKb();
  model = kb.exportModel();
  parsed = parseTurtle(exportTurtle(model));
});

const ONTOLEX = 'http://www.w3.org/ns/lemon/ontolex#';
const TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';

describe('the export of the real dictionary', () => {
  test('is valid Turtle with an entry for every word and every composite', () => {
    const entries = parsed.triples.filter(([, p, o]) => p === TYPE && o === `${ONTOLEX}LexicalEntry`);
    expect(entries).toHaveLength(Object.keys(kb.source.words).length + kb.source.composites.length);
    expect(new Set(entries.map((t) => t[0])).size).toBe(entries.length);
  });

  test('every entry has a form with its hanzi and a sense', () => {
    const forms = parsed.triples.filter(([, p]) => p === `${ONTOLEX}canonicalForm`).length;
    const senses = parsed.triples.filter(([, p]) => p === `${ONTOLEX}sense`).length;
    expect(forms).toBe(Object.keys(kb.source.words).length + kb.source.composites.length);
    expect(senses).toBe(forms);
  });

  test('the WordNet links are references to CILI ids', () => {
    const refs = parsed.triples.filter(([, p]) => p === `${ONTOLEX}reference`);
    expect(refs.length).toBeGreaterThan(1000);
    expect(refs.every(([, , o]) => o.startsWith('http://ili.globalwordnet.org/ili/i'))).toBe(true);
  });

  test('every word that a description uses, and every end of a relation, is an entry', () => {
    const entries = new Set(parsed.triples.filter(([, p, o]) => p === TYPE && o === `${ONTOLEX}LexicalEntry`).map((t) => t[0]));
    const NS = 'ns#';
    const linked = parsed.triples.filter(([, p]) => p.includes(NS) && ['definedBy', 'kindOf', 'partOf', 'oppositeOf', 'closeTo', 'agentIs'].some((k) => p.endsWith(`${NS}${k}`)));
    expect(linked.length).toBeGreaterThan(5000);
    for (const [, , o] of linked) expect(entries.has(o)).toBe(true);
  });

  test('the counts add up and nothing is silently dropped', () => {
    const { counts } = model;
    expect(counts.words).toBe(Object.keys(kb.source.words).length);
    expect(counts.composites).toBe(kb.source.composites.length);
    const left = Object.values(counts.skipped).reduce((a, b) => a + b, 0);
    const kept = Object.values(counts.relations).reduce((a, b) => a + b, 0) + counts.groups;
    expect(kept + left).toBe(kb.relations().relations.length);
  });
});

describe('the tag nets of the real dictionary (E4)', () => {
  test('every topic and kind is a SKOS concept and every parent link is a skos:broader', () => {
    const SKOS_NS = 'http://www.w3.org/2004/02/skos/core#';
    const concepts = parsed.triples.filter(([, p, o]) => p === TYPE && o === `${SKOS_NS}Concept`).length;
    expect(concepts).toBe(kb.source.tags.topics.length + kb.source.tags.kinds.length);
    const links = [...kb.source.tags.topics, ...kb.source.tags.kinds].reduce((n, t) => n + t.parents.length, 0);
    expect(parsed.triples.filter(([, p]) => p === `${SKOS_NS}broader`).length).toBe(links);
  });
});
