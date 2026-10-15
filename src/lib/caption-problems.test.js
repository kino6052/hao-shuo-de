import { describe, expect, test } from 'bun:test';
import { captionProblems } from './caption-problems.js';

const words = {
  zhe4: { term: 'zhè', hanzi: '这' },
  ge4: { term: 'gè', hanzi: '个' },
  yao4: { term: 'yào', hanzi: '要' },
  wo3: { term: 'wǒ', hanzi: '我' },
};
const ok = { pinyin: '{{Word:wo3}} {{word:yao4}} {{word:zhe4}}-ge.', hanzi: '我要这个。', en: 'I want this one.', ru: 'Я хочу этот.' };

describe('captionProblems', () => {
  test('a sentence of word refs with matching hanzi is fine, and so are quoted names', () => {
    expect(captionProblems(ok, words)).toEqual([]);
    expect(captionProblems({ ...ok, pinyin: '{{Word:wo3}} {{word:yao4}} "Miāo-miao".', hanzi: '我要喵喵。' }, words)).toEqual([]);
  });
  test('plain pinyin is refused, so "zhè ge" cannot pass for zhè-ge', () => {
    const p = captionProblems({ ...ok, pinyin: 'Wǒ yào zhè ge.' }, words);
    expect(p.join(' ')).toContain('plain pinyin outside word refs: Wǒ, yào, zhè');
    expect(captionProblems({ ...ok, pinyin: '{{Word:wo3}} {{word:yao4}} {{word:zhe4}} ge.' }, words).join(' ')).toContain('plain pinyin');
  });
  test('gè must be hyphenated to the word before it, even written as a ref', () => {
    const spaced = captionProblems({ ...ok, pinyin: '{{Word:wo3}} {{word:yao4}} {{word:zhe4}} {{word:ge4}}.' }, words);
    expect(spaced.join(' ')).toContain('joined to the word before it');
    expect(captionProblems({ ...ok, pinyin: '{{Word:wo3}} {{word:yao4}} {{word:zhe4}}-{{word:ge4}}.' }, words)).toEqual([]);
  });
  test('hanzi are needed and must spell the words', () => {
    expect(captionProblems({ ...ok, hanzi: undefined }, words)).toContain('no hanzi');
    expect(captionProblems({ ...ok, hanzi: '我要那个。' }, words).join(' ')).toContain("don't spell its words");
  });
  test('both meanings are needed, and refs must be words', () => {
    expect(captionProblems({ ...ok, ru: undefined }, words)).toContain('no ru');
    expect(captionProblems({ ...ok, pinyin: '{{Word:wo3}} {{word:nope}}.' }, words).join(' ')).toContain('not words: nope');
  });
});
