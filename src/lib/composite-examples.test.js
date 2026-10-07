import { describe, expect, test } from 'bun:test';
import dictionary from '../data/dictionary.ts';
import { pinyinToRefs } from './pinyin-refs.js';
import { exampleProblems, hanziMatches } from './composite-examples.js';

const words = dictionary.words;
const refs = (p) => pinyinToRefs(p, words);

describe('pinyin to refs', () => {
  test('toned syllables are words, light ones light, capitals kept', () => {
    expect(refs('Wǒ xiǎng chī-fàn.')).toBe('{{Word:wo3}} {{word:xiang3}} {{word:chi1}}-{{word:fan4}}.');
    expect(refs('dōng-xi')).toBe('{{word:dong1}}-{{light:xi1}}');
  });

  test('names in quotes, an erhua r and refs written out stay', () => {
    expect(refs('Tā zài "Zhōngguó".')).toBe('{{Word:ta1}} {{word:zai4}} "Zhōngguó".');
    expect(refs('xiě-de miànr')).toBe('{{word:xie3}}-{{word:de}} {{word:mian4}}r');
    expect(refs('jué-{{light:de2}}')).toBe('{{word:jue2}}-{{light:de2}}');
  });

  test('a syllable that is no word is an error', () => {
    expect(() => refs('Wǒ lèi le.')).toThrow();
  });
});

describe('composite examples', () => {
  test('the hanzi spell the words, senses and quotes included', () => {
    expect(hanziMatches(refs('Shí-jiān dào le.'), '时间到了。', words)).toBe(true);
    expect(hanziMatches(refs('Shí-jiān dào le.'), '十间到了。', words)).toBe(false);
    expect(hanziMatches(refs('Wǒ zài "Zhōngguó" xué.'), '我在中国学。', words)).toBe(true);
    expect(hanziMatches(refs('xiě-de miànr'), '写的面儿', words)).toBe(true);
    expect(hanziMatches(refs('Tā hěn hǎo.'), '她很好。', words)).toBe(true);
  });

  test('an example uses one of the forms, in order', () => {
    const entry = { hsd: 'X {{word:rang4}} Y + verb / {{word:shi4}}' };
    const ok = { pinyin: refs('Wǒ-de bāo ràng tā ná-zǒu le.'), hanzi: '我的包让他拿走了。', en: 'e', ru: 'r' };
    expect(exampleProblems(entry, ok, words)).toEqual([]);
    const off = { pinyin: refs('Wǒ ná le.'), hanzi: '我拿了。', en: 'e', ru: 'r' };
    expect(exampleProblems(entry, off, words)).toContain('uses none of its forms');
  });
});
