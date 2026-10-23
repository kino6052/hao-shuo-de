import { describe, expect, test } from 'bun:test';
import { segments, fromCodes, withAuthored, hanziText, wordHanzi, rubyPairs, short } from './script-words.js';
import { chainCodes, resolveWordRefs } from './word-refs.js';

const words = {
  zai4: { term: 'zài', hanzi: '在', senses: { again: { hanzi: '再', compounds: ['zai4 jian4'] } } },
  jian4: { term: 'jiàn', hanzi: '见' },
  xue2: { term: 'xué', hanzi: '学' },
  xiao4: { term: 'xiào', hanzi: '笑', senses: { school: { hanzi: '校', compounds: ['xue2 xiao4'] } } },
  dong1: { term: 'dōng', hanzi: '东' },
  xi1: { term: 'xī', hanzi: '西' },
  ta1: { term: 'tā', hanzi: '他' },
  hao3: { term: 'hǎo', hanzi: '好' },
  mian4: { term: 'miàn', hanzi: '面' },
  zhi1dao4: { term: 'zhīdào', hanzi: '知道' },
};
const index = new Map(Object.entries(words).map(([id, w]) => [id, w.term]));
const hanzi = (refs) => segments(refs, words).map((s) => (s.word ? wordHanzi(s.word) : hanziText(s.text))).join('');

describe('segments', () => {
  test('refs joined by "-" are one word, written with the sense its compound gives', () => {
    const segs = segments('{{Word:zai4}}-{{word:jian4}}!', words);
    expect(segs).toHaveLength(2);
    expect(segs[0].word.py).toBe('Zài-jiàn');
    expect(segs[0].word.parts.map((p) => [p.id, p.sense, p.zh])).toEqual([['zai4', 'again', '再'], ['jian4', undefined, '见']]);
    expect(segs[1]).toEqual({ text: '!' });
  });

  test('a word alone is its main sense; a named sense or a compound gives the other character', () => {
    expect(hanzi('{{word:xiao4}}')).toBe('笑');
    expect(hanzi('{{word:xiao4#school}}')).toBe('校');
    expect(hanzi('{{word:xue2}}-{{word:xiao4}}')).toBe('学校');
  });

  test('an erhua r right after a word belongs to it', () => {
    const [word, rest] = segments('{{word:mian4}}r.', words);
    expect(word.word.parts.map((p) => p.zh)).toEqual(['面', '儿']);
    expect(word.word.py).toBe('miànr');
    expect(rest).toEqual({ text: '.' });
  });

  test('a sentence in hanzi: no spaces, Chinese punctuation', () => {
    expect(hanzi('{{Word:ta1}} {{word:hao3}}, {{word:dong1}}-{{light:xi1}}?')).toBe('他好，东西？');
  });
});

describe('fromCodes', () => {
  test('the codes of a chain give the same word back', () => {
    expect(chainCodes('{{Word:zai4}}-{{light:jian4}}')).toEqual(['zai4', '~jian4']);
    expect(wordHanzi(fromCodes('zai4.~jian4', words))).toBe('再见');
    expect(chainCodes('{{word:xiao4#school}}')).toEqual(['xiao4#school']);
    expect(wordHanzi(fromCodes('xiao4#school', words))).toBe('校');
    expect(chainCodes('{{word:mian4}}r')).toEqual(['mian4', 'r']);
    expect(fromCodes('mian4.r', words).py).toBe('miànr');
  });

  test('a light ref keeps no tone', () => {
    expect(fromCodes('dong1.~xi1', words).py).toBe('dōng-xi');
  });
});

describe('withAuthored', () => {
  test('the characters the author wrote win when they spell as many characters', () => {
    const segs = withAuthored(segments('{{Word:ta1}} {{word:hao3}}.', words), '她好。');
    expect(segs[0].word.parts[0].zh).toBe('她');
    expect(segs[2].word.parts[0].zh).toBe('好');
  });

  test('a different count leaves the derived characters', () => {
    const segs = withAuthored(segments('{{Word:ta1}} {{word:hao3}}.', words), '她很好。');
    expect(segs[0].word.parts[0].zh).toBe('他');
  });
});

describe('hanziText', () => {
  test('spaces and hyphens go; punctuation becomes Chinese', () => {
    expect(hanziText(', ')).toBe('，');
    expect(hanziText('?')).toBe('？');
    expect(hanziText('...')).toBe('……');
    expect(hanziText(' - ')).toBe('');
  });
});

describe('short', () => {
  test('the first sense of a meaning, without brackets', () => {
    expect(short('to love, have compassion for, show deep affection to')).toBe('to love');
    expect(short('the area around; region; neighbourhood')).toBe('the area around');
    expect(short('glad, fond (only inside a longer word)')).toBe('glad');
    expect(short('学习；读书')).toBe('学习');
    expect(short('dad: bàba-māma are the parents')).toBe('dad');
    expect(short('A friend. Someone you like.')).toBe('A friend');
  });

  test('a meaning that is all brackets keeps its words; a long one is cut', () => {
    expect(short('(particle: le and a together)')).toBe('particle: le and a together');
    expect(short('a very long meaning that goes on and on without any break')).toBe('a very long meaning that goes on an…');
    expect(short(undefined)).toBe('');
  });
});

describe('rubyPairs', () => {
  test('one pair per character, a part of two characters split by its syllables', () => {
    expect(rubyPairs(segments('{{word:xue2}}-{{word:xiao4}}', words)[0].word)).toEqual([['学', 'xué'], ['校', 'xiào']]);
    expect(rubyPairs(segments('{{word:zhi1dao4}}', words)[0].word)).toEqual([['知', 'zhī'], ['道', 'dào']]);
    expect(rubyPairs(segments('{{word:mian4}}r', words)[0].word)).toEqual([['面', 'miàn'], ['儿', 'r']]);
  });
});

describe('resolveWordRefs with markup', () => {
  test('a chain becomes one <hsd-w> with its codes; a {{hanzi:..}} note becomes <hsd-h>', () => {
    const text = 'Say {{Word:zai4}}-{{word:jian4}}{{hanzi: (再见)}}, or {{light:xi1}} and {{word:xiao4#school}}.';
    expect(resolveWordRefs(text, index, 0, undefined, { markup: true })).toBe(
      'Say <hsd-w w=zai4.jian4>Zài-jiàn</hsd-w><hsd-h> (再见)</hsd-h>, or <hsd-w w=~xi1>xi</hsd-w> and <hsd-w w=xiao4#school>xiào</hsd-w>.',
    );
  });

  test('without markup the words are pinyin and the note is gone', () => {
    expect(resolveWordRefs('Say {{Word:zai4}}-{{word:jian4}}{{hanzi: (再见)}}.', index, 0)).toBe('Say Zài-jiàn.');
  });

  test('an erhua r is part of the word', () => {
    expect(resolveWordRefs('{{word:mian4}}r.', index, 0, undefined, { markup: true })).toBe('<hsd-w w=mian4.r>miànr</hsd-w>.');
  });
});
