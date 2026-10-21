import { describe, expect, test } from 'bun:test';
import { inlineSentences } from './inline-sentences.js';

describe('inlineSentences', () => {
  test('finds a word-ref run ending in a period', () => {
    expect(inlineSentences('{{word:wan2}} is "finish": {{word:chi1}}-{{word:wan2}} {{word:le}}.')).toEqual(['{{word:chi1}}-{{word:wan2}} {{word:le}}.']);
  });

  test('drops an English gloss between the run and the mark', () => {
    expect(inlineSentences('For example, {{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}} (Everyone needs water).')).toEqual([
      '{{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.',
    ]);
  });

  test('leaves a single word named in passing alone', () => {
    expect(inlineSentences('{{word:wan2}} means "finished".')).toEqual([]);
  });

  test('leaves a hyphen-only compound named in passing alone, however it is cited', () => {
    expect(inlineSentences('The syllables are never split apart: {{word:dong4}}-{{word:wu4}}, {{word:shui4jiao4}}, {{word:dan4}}-{{word:shi4}}.')).toEqual([]);
    expect(inlineSentences('To give a choice, put {{word:hai2}}-{{word:shi4}} (or).')).toEqual([]);
    expect(inlineSentences('For "don\'t have", say {{word:mei2}}-{{word:you3}}.')).toEqual([]);
  });

  test('leaves a comma-terminated fragment alone (only part of a sentence)', () => {
    expect(inlineSentences('{{word:chi1}}-{{word:wan2}} {{word:hou4}}, you can leave.')).toEqual([]);
  });

  test('finds every sentence in longer text', () => {
    expect(
      inlineSentences('{{Word:wo3}} {{word:sheng1}}-{{word:qi4}} {{word:le}}. Some English in between. {{word:wo3}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}!'),
    ).toEqual(['{{Word:wo3}} {{word:sheng1}}-{{word:qi4}} {{word:le}}.', '{{word:wo3}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}!']);
  });

  test('a quoted sound can join a run', () => {
    expect(inlineSentences('{{Word:ta1}} {{word:jiao4}} "Miāo-miao".')).toEqual(['{{Word:ta1}} {{word:jiao4}} "Miāo-miao".']);
  });

  test('leaves a grammar template with a bare X or Y alone', () => {
    expect(inlineSentences('"So" is said with X-{{word:wan2}} {{word:hou4}}.')).toEqual([]);
  });

  test('plain English has nothing to find', () => {
    expect(inlineSentences('Nothing here is Hao-shuo-de.')).toEqual([]);
  });

  test('empty input', () => {
    expect(inlineSentences('')).toEqual([]);
    expect(inlineSentences(undefined)).toEqual([]);
  });
});
