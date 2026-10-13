// Which patterns a word carries (K20), on small made-up patterns and the real dictionary.

import { describe, expect, test } from 'bun:test';
import dictionary from '../../data/dictionary.ts';
import { ruleWords } from '../grammar/grammar.js';
import { patternsCarrying, renderPatternUses } from './grammar-uses.js';

const words = dictionary.words;
const pattern = (id, rules, examples, hsd = '') => ({ id, taught: 'x/y', covers: [], rules, examples, template: { hsd, eng: '' } });

const patterns = [
  pattern('dont', [{ lhs: 'VP', hsd: '=bie2 VP' }], [['Bié pà!', "Don't be afraid!"]], '{{word:bie2}} + verb'),
  pattern('adverb', [{ lhs: 'VP', hsd: 'hen3 @adjective' }, { lhs: 'VP', hsd: '@adjective' }], [['Hěn hǎo.', 'Very good.'], ['Hǎo.', 'Good.']]),
  pattern('plain', [{ lhs: 'VP', hsd: '@verb' }], [['Wǒ chī.', 'I eat.']]),
];

describe('the words a rule names', () => {
  test('a bare id, =id and the ids a class leaves out; classes and parts of a sentence name none', () => {
    expect(ruleWords('=bie2 VP')).toEqual(['bie2']);
    expect(ruleWords('hen3 =duo1 @adjective-zhe4-na4')).toEqual(['hen3', 'duo1', 'zhe4', 'na4']);
    expect(ruleWords('NP @noun @comma')).toEqual([]);
  });
});

describe('the patterns a word carries', () => {
  test('a rule or an example that names the word is a hit; a pattern that does not is left out', () => {
    const list = patternsCarrying(patterns, words, ['bie2']);
    expect(list.map((x) => x.id)).toEqual(['dont']);
    expect(list[0].rules.hit).toEqual([{ lhs: 'VP', hsd: '=bie2 VP' }]);
    expect(list[0].examples.hit).toEqual(['Bié pà!']);
    expect(list[0].template).toBe(true);
    expect(list[0].effect).toBe('no rules left');
  });

  test('what is left says whether the pattern loses rules, examples or only the template', () => {
    const [x] = patternsCarrying(patterns, words, ['hen3']);
    expect(x.id).toBe('adverb');
    expect(x.rules).toEqual({ total: 2, hit: [{ lhs: 'VP', hsd: 'hen3 @adjective' }] });
    expect(x.examples.hit).toEqual(['Hěn hǎo.']);
    expect(x.effect).toBe('loses rules');
    const only = patternsCarrying([pattern('t', [{ lhs: 'VP', hsd: '@verb' }], [['Wǒ chī.', '']], '{{word:chi1}}')], words, ['chi1']);
    expect(only[0].effect).toBe('no examples left');
  });

  test('several words at once, and the lines for a report', () => {
    const list = patternsCarrying(patterns, words, ['bie2', 'hen3']);
    expect(list.map((x) => x.id)).toEqual(['dont', 'adverb']);
    const lines = renderPatternUses(list);
    expect(lines[0]).toContain('dont (taught in x/y): 1 of 1 rule names it');
    expect(lines[1]).toContain('1 of 2 rules names it');
    expect(lines[1]).toContain('1 of 2 examples uses it');
  });
});
