import { describe, expect, test } from 'bun:test';
import { checkForm } from './check-form.js';
import { words } from './fixture.js';

describe('a word the hanzi write as one of its senses', () => {
  test('takes that sense (shí written 时 is the time sense)', () => {
    const r = checkForm(words, { forms: 'wǒ-de shí / wǒ-de shí', tts: '我的时 / 我的十' });
    expect(r.ok).toBe(true);
    expect(r.forms.map((f) => f.refs)).toEqual(['{{word:wo3}}-{{word:de}} {{word:shi2#time}}', '{{word:wo3}}-{{word:de}} {{word:shi2}}']);
  });
  test('hanzi that are neither the word nor a sense are still wrong', () => {
    const r = checkForm(words, { forms: 'wǒ-de shí', tts: '我的石' });
    expect(r.ok).toBe(false);
    expect(r.problems[0]).toMatch(/don't spell its words/);
  });
});
