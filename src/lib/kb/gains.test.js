import { describe, expect, test } from 'bun:test';
import { GAINS, gainModel, renderGainExplain, renderGains } from './gains.js';
import { source } from './fixture.js';

// the fixture's core: 我 吃 饭 飞 机 的 十/时 间 东 西 对 个
const f = (zh, py, rank) => ({ zh, py, rank });
const freq = [f('机场', 'jīchǎng', 10), f('飞机场', 'fēijīchǎng', 20), f('场地', 'chǎngdì', 30), f('地', 'dì', 40), f('场', 'chǎng', 50), f('吃饭', 'chīfàn', 60)];
const withFollowers = {
  ...source,
  composites: [...source.composites, { rank: 7, zh: '饭后', py: 'fànhòu', en: 'after a meal', hsd: '{{word:wo3}} {{word:chi1}} {{word:fan4}} {{word:de}}', tts: '我吃饭的' }],
};
const model = gainModel(withFollowers, { freq });

describe('gains: which word to promote', () => {
  test('without a frequency list nothing is ranked', () => {
    const none = gainModel(source);
    expect(none.rank()).toBeNull();
    expect(none.explain('场')).toBeNull();
    expect(renderGains(null)).toContain('No frequency list');
  });

  test('alone: a character that completes words comes first, and says which', () => {
    const r = model.rank({ mode: 'alone' });
    expect(r.words[0].zh).toBe('场');
    expect(r.words[0].completes).toEqual(['机场', '飞机场']);
    expect(r.words[0].parts.completes).toBe(6); // two words in the top 1000, 3 each
  });

  test('a word with two missing characters is near, not complete', () => {
    const r = model.explain('场');
    expect(r.near).toEqual(['场地']);
    expect(r.parts.near).toBe(3);
    expect(r.gain).toBe(GAINS.completes * 6 + GAINS.near * 3 + GAINS.shorter * 0 + GAINS.reach * r.parts.reach);
  });

  test('path: a partner pays in its turn, once the first one is in', () => {
    const r = model.rank({ target: 14, mode: 'path' });
    const order = r.words.map((x) => x.zh);
    expect(order[0]).toBe('场');
    expect(order).toContain('地');
    const dì = r.words.find((x) => x.zh === '地');
    expect(dì.completes).toEqual(['场地']);
    expect(r.words.map((x) => x.step)).toEqual(r.words.map((_, i) => i + 1));
  });

  test('a description inside other descriptions is shorter with its word', () => {
    const r = model.explain('吃饭');
    expect(r.shorter.map((s) => s.zh)).toEqual(['饭后']);
    expect(r.shorter[0].words).toBe(1);
    expect(r.parts.shorter).toBeGreaterThan(0);
  });

  test('a hyphenated compound is one word already, so it shortens nothing', () => {
    // 飞机 is fēi-jī: one piece
    expect(model.explain('飞机').parts.shorter).toBe(0);
  });

  test('what a word needs first, and what is already core', () => {
    expect(model.explain('场地').needs).toEqual(['场', '地']);
    expect(model.explain('机场').needs).toEqual(['场']);
    expect(model.explain('机').already).toBe(true);
    expect(model.explain('不存在').unknown).toBe(true);
  });

  test('the text names the parts and the words behind them', () => {
    const text = renderGains(model.rank({ mode: 'alone' }), { limit: 2 });
    expect(text).toContain('场 chǎng');
    expect(text).toContain('completes: 机场 飞机场');
    expect(renderGainExplain(model.explain('场地'))).toContain('it needs 场 地 first');
  });
});
