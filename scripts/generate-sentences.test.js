import { describe, expect, test } from 'bun:test';
import { parsePair, pickSentences } from './generate-sentences.js';

const credit = 'CC-BY 2.0 (France) Attribution: tatoeba.org #1 (A) & #2 (B)';
const line = (en, zh) => `${en}\t${zh}\t${credit}`;
const common = [...'我你他好吃饭喝水很大小'];

describe('parsePair', () => {
  test('reads the pair and the credit of the Mandarin sentence', () => {
    expect(parsePair(line('Hi.', '你好。'))).toEqual({ en: 'Hi.', zh: '你好。', id: '2', by: 'B' });
  });
  test('a line without two sides is null', () => {
    expect(parsePair('only one side')).toBeNull();
  });
});

describe('pickSentences', () => {
  test('keeps short sentences made of common characters, simplest first', () => {
    const out = pickSentences([line('I eat rice.', '我吃饭。'), line('You are good.', '你很好。'), line('He drinks water.', '他喝水。')], common);
    expect(out.map((s) => s.zh)).toEqual(['我吃饭。', '你很好。', '他喝水。']);
  });
  test('drops a sentence with an uncommon character, a digit, a Latin letter, or that is too short or long', () => {
    const out = pickSentences([line('x', '我爱你。'), line('x', '我吃3个。'), line('x', '我吃rice'), line('x', '我吃'), line('x', '我我我我我我我我我我我我我')], common);
    expect(out).toEqual([]);
  });
  test('a repeated Mandarin or English side is dropped once', () => {
    const out = pickSentences([line('I eat.', '我吃饭。'), line('I eat rice.', '我吃饭。'), line('I eat.', '我喝水。')], common);
    expect(out).toHaveLength(1);
  });
  test('stops at the count', () => {
    const out = pickSentences([line('a', '我吃饭。'), line('b', '你喝水。'), line('c', '他很好。')], common, { count: 2 });
    expect(out).toHaveLength(2);
  });
});
