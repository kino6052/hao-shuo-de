// The real patterns (src/data/grammar/) against the real dictionary: the
// patterns hold together, and each one's examples parse by that pattern.

import { describe, expect, test } from 'bun:test';
import { existsSync } from 'fs';
import { PATTERNS } from '../../data/grammar/index.ts';
import dictionary from '../../data/dictionary.ts';
import compositesData from '../../data/composites.ts';
import coverage from '../../data/coverage.ts';
import { createParser, patternsOf } from './parser.js';
import { pinyinToRefs } from '../pinyin-refs.js';

const words = dictionary.words;
const composites = compositesData.entries;
const parser = createParser({ patterns: PATTERNS, words, composites });
const items = new Set(coverage.groups.flatMap((g) => g.items.map((i) => `${g.key}:${i.key}`)));

describe('the patterns', () => {
  test('there are the nine, with distinct ids', () => {
    expect(PATTERNS.map((p) => p.id).sort()).toEqual(
      ['adverb-before-verb', 'bu-negation', 'de-modifier', 'hen-adjective', 'ma-question', 'shi-copula', 'stacked-modifiers', 'subject-predicate', 'svo'],
    );
  });

  test('the rules use only words, classes and parts of a sentence that exist', () => {
    expect(parser.errors).toEqual([]);
  });

  test('every pattern says what it covers and where it is taught, and both exist', () => {
    for (const p of PATTERNS) {
      for (const c of p.covers) expect(items.has(c), `${p.id} covers ${c}`).toBe(true);
      if (p.taught) {
        const [lesson, module] = p.taught.split('/');
        expect(existsSync(new URL(`../../content/lessons/${lesson}/${module}.ts`, import.meta.url)), `${p.id} is taught in ${p.taught}`).toBe(true);
      }
      expect(p.meaning.eng && p.meaning.rus, p.id).toBeTruthy();
      expect(p.examples.length, p.id).toBeGreaterThan(0);
    }
  });

  test("a pattern's template only names words that exist", () => {
    for (const p of PATTERNS) for (const m of p.template.hsd.matchAll(/\{\{(?:word|Word):([a-z0-9]+)\}\}/g)) expect(words[m[1]], `${p.id}: ${m[1]}`).toBeDefined();
  });
});

describe('every example parses, and by its own pattern', () => {
  for (const p of PATTERNS) {
    for (const [pinyin] of p.examples) {
      test(`${p.id}: ${pinyin}`, () => {
        const r = parser.parse(pinyinToRefs(pinyin, words));
        expect(r.problems).toEqual([]);
        expect(r.ok, JSON.stringify(r.failure)).toBe(true);
        // some reading of it uses this pattern's rules
        expect(r.trees.some((t) => patternsOf(t).includes(p.id)), `readings: ${r.trees.map((t) => patternsOf(t))}`).toBe(true);
      });
    }
  }
});

describe('what the patterns do not allow', () => {
  const ok = (pinyin) => parser.parse(pinyinToRefs(pinyin, words)).ok;

  test('hěn needs an adjective, not a noun', () => {
    expect(ok('Shuǐ hěn hǎo.')).toBe(true);
    expect(ok('Shuǐ hěn rén.')).toBe(false);
  });

  test('shì is shì, not "a verb": it takes a noun, and no object-verb reading is added', () => {
    const r = parser.parse(pinyinToRefs('Wǒ shì rén.', words));
    expect(r.treeCount).toBe(1);
  });

  test('ma ends a sentence', () => {
    expect(ok('Zhè shì rén ma?')).toBe(true);
    expect(ok('Zhè ma shì rén.')).toBe(false);
  });

  test('bù can stack with an adverb phrase before it, and only before a predicate', () => {
    expect(ok('Wǒ bù hěn zǎo lái.')).toBe(true);
    expect(ok('Bù wǒ ài nǐ.')).toBe(false);
  });

  test('a sentence of several modifiers reads one way', () => {
    const r = parser.parse(pinyinToRefs('Wǒ-de dà-de hǎo-de jiā.', words));
    expect(r.ok).toBe(true);
    expect(r.treeCount).toBe(1);
  });
});
