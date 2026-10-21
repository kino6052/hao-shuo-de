import { describe, expect, test } from 'bun:test';
import dictionary from '../data/dictionary.ts';
import compositesData from '../data/composites.ts';
import { pinyinToRefs, pinyinProblems } from './pinyin-refs.js';

const words = dictionary.words;
const composites = compositesData.entries;
const to = (text) => pinyinToRefs(text, words, { composites });

describe('a glued word with no tone of its own reads the chain a composite spells', () => {
  test('jì-de is jì-dé (记得), not jì + de (的)', () => {
    expect(to('Wǒ bù jì-de le.')).toContain('{{word:ji4}}-{{light:de2}}');
  });

  test('míng-zi is míng-zì (名字), not míng + zi (孩子\'s zi)', () => {
    expect(to('Tā de míng-zi.')).toContain('{{word:ming2}}-{{light:zi4}}');
  });

  test('hái-zi still reads as hái + zi (孩子), unaffected', () => {
    expect(to('Hái-zi hǎo.')).toContain('{{Word:hai2}}-{{word:zi}}');
  });

  test('wǒ-de (the possessive particle) is unaffected -- no false chain to dé', () => {
    expect(to('Wǒ-de shū.')).toContain('{{Word:wo3}}-{{word:de}}');
  });

  test('a bare, unglued "de" stays the particle', () => {
    expect(to('Zhè shì wǒ de shū.')).toContain('{{word:wo3}} {{word:de}}');
  });
});

describe('pinyinProblems names every unknown word, not just the first', () => {
  test('two unknown words are both reported', () => {
    const { refs, problems } = pinyinProblems('Wǒ hdfkj le nǐ hskfhksf.', words, { composites });
    expect(refs).toContain('hdfkj');
    expect(refs).toContain('hskfhksf');
    expect(problems.map((p) => p.token)).toEqual(['hdfkj', 'hskfhksf']);
  });

  test('a token matching a composite\'s own pinyin suggests that composite\'s form', () => {
    const { problems } = pinyinProblems('Wǒ wàngjì le.', words, { composites });
    const hit = problems.find((p) => p.token === 'wàngjì');
    expect(hit).toBeDefined();
    expect(hit.suggestion).toMatchObject({ zh: '忘记' });
    // shown as pinyin to read, kept as refs to write
    expect(hit.suggestion.form).not.toContain('{{');
    expect(hit.suggestion.refs).toContain('{{word:');
  });

  test('a sentence with no problems still converts', () => {
    const { refs, problems } = pinyinProblems('Wǒ shì rén.', words, { composites });
    expect(problems).toEqual([]);
    expect(refs).toBe(to('Wǒ shì rén.'));
  });
});

describe('pinyinToRefs still throws on the first unknown word (unchanged behavior)', () => {
  test('an unknown word throws', () => {
    expect(() => to('Wǒ hdfkj le.')).toThrow();
  });
});
