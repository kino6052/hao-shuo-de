import { describe, expect, test } from 'bun:test';
import { wordGraph, clusters, participation, neighbourSimilarity, compositeWords } from './graph.js';

const word = (term) => ({ term, hanzi: term, necessity: { index: 3 } });
const dictionary = {
  words: { a: word('a'), b: word('b'), c: word('c'), x: word('x'), y: word('y'), z: word('z'), de: word('de') },
  categories: [],
};
const entry = (zh, ...ids) => ({ zh, hsd: ids.map((id) => `{{word:${id}}}`).join('-{{word:de}} ') });
// two families (a b c) and (x y z), joined once by c-x
const composites = {
  entries: [entry('1', 'a', 'b'), entry('2', 'b', 'c'), entry('3', 'a', 'c'), entry('4', 'a', 'b', 'c'), entry('5', 'x', 'y'), entry('6', 'y', 'z'), entry('7', 'x', 'z'), entry('8', 'x', 'y', 'z'), entry('9', 'c', 'x')],
};

describe('graph', () => {
  test('a composite uses each word once, in all its forms', () => {
    expect([...compositeWords({ hsd: '{{word:a}}-{{word:b}} / {{Word:a}} {{light:c}}' })]).toEqual(['a', 'b', 'c']);
  });

  test('words that build together cluster together; structure words can be left out', () => {
    const { graph, reach } = wordGraph({ dictionary, composites }, { skip: ['de'] });
    expect(graph.hasNode('de')).toBe(false);
    expect(reach.get('c')).toBe(4);
    const parts = clusters(graph);
    expect(parts.get('a')).toBe(parts.get('b'));
    expect(parts.get('x')).toBe(parts.get('z'));
    expect(parts.get('a')).not.toBe(parts.get('x'));
    const p = participation(graph, parts);
    expect(p.get('c')).toBeGreaterThan(p.get('a'));
  });

  test('twins share partners', () => {
    const { graph } = wordGraph({ dictionary, composites }, { skip: ['de'] });
    expect(neighbourSimilarity(graph, 'a', 'b')).toBeGreaterThan(neighbourSimilarity(graph, 'a', 'y'));
  });
});
