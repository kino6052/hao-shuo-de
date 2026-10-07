import { describe, expect, test } from 'bun:test';
import { refChains, refSenses, chainHanzi, senseKey } from './senses.js';

const words = {
  shi2: {
    hanzi: '十',
    senses: {
      time: { hanzi: '时', compounds: ['shi2 jian1', 'shi2 hou4', 'xiao3 shi2'] },
      food: { hanzi: '食', compounds: ['shi2 wu4'] },
    },
  },
  jian1: { hanzi: '间' },
  hou4: { hanzi: '后' },
  xiao3: { hanzi: '小' },
  wu4: { hanzi: '物' },
  chang2: { hanzi: '长', senses: { often: { hanzi: '常', compounds: ['chang2 chang2'] } } },
  yi1: { hanzi: '一' },
};

describe('senses', () => {
  test('refs joined by hyphens are one chain', () => {
    const chains = refChains('{{Word:shi2}}-{{word:jian1}} {{word:yi1}}-{{light:shi2}}');
    expect(chains.map((c) => c.map((r) => r.id))).toEqual([['shi2', 'jian1'], ['yi1', 'shi2']]);
  });

  test('a listed compound gives its sense; anything else is the main sense', () => {
    expect(refSenses('{{word:shi2}}-{{word:jian1}}', words)).toEqual([
      { id: 'shi2', sense: 'time', named: false },
      { id: 'jian1', sense: undefined, named: false },
    ]);
    expect(refSenses('{{word:xiao3}}-{{word:shi2}}', words)[1].sense).toBe('time');
    expect(refSenses('{{word:shi2}}-{{word:wu4}}', words)[0].sense).toBe('food');
    expect(refSenses('{{word:shi2}} {{word:jian1}}', words)[0].sense).toBeUndefined();
    expect(refSenses('{{word:yi1}}-{{word:shi2}}', words)[1].sense).toBeUndefined();
  });

  test('a ref that names its sense has it, alone or in a chain', () => {
    expect(refSenses('{{word:shi2#food}}', words)).toEqual([{ id: 'shi2', sense: 'food', named: true }]);
    expect(refSenses('{{Light:shi2#food}}-{{word:jian1}}', words)[0]).toEqual({ id: 'shi2', sense: 'food', named: true });
    expect(refChains('{{word:shi2#food}} {{word:yi1}}')[0][0]).toMatchObject({ id: 'shi2', sense: 'food' });
  });

  test('a compound that says its word twice gives both the sense', () => {
    expect(chainHanzi(['chang2', 'chang2'], words)).toBe('常常');
    expect(chainHanzi(['chang2'], words)).toBe('长');
  });

  test('the hanzi of a chain uses the sense hanzi', () => {
    expect(chainHanzi(['shi2', 'jian1'], words)).toBe('时间');
    expect(chainHanzi(['yi1', 'shi2'], words)).toBe('一十');
  });

  test('cards and uses match by id and sense', () => {
    expect(senseKey('shi2', 'time')).toBe('shi2#time');
    expect(senseKey('shi2')).toBe('shi2');
  });
});
