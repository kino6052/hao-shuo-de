import { describe, expect, test } from 'bun:test';
import { intro, introSection } from './intro.ts';

const first = introSection({
  id: 'first',
  prose: { en: ['<h2>Hi</h2>', 'One.'], ru: ['<h2>Привет</h2>', 'Раз.'] },
  image: { file: 'intro-9-first', alt: { en: 'A cat.', ru: 'Кошка.' }, pinyin: 'miāo', hanzi: '喵', en: 'Meow.' },
  examples: [{ pinyin: 'Nǐ hǎo ma?', hanzi: '你好吗？', en: 'How are you?' }],
});
const second = introSection({ id: 'second', prose: { en: 'Two.', tldr: { en: 'Two' }, necessity: { en: 'Because' } } });

describe('intro', () => {
  const entries = intro('intro-9', { title: { en: 'T' }, summary: { en: 'S.' }, sections: [first, second] });

  test('a section is its text, its picture, then its examples', () => {
    expect(entries.map((e) => e.key)).toEqual(['title', 'summary', 'first.prose', 'first.image', 'first.example1', 'second.prose']);
    expect(entries.map((e) => e.module)).toEqual(['head', 'head', 'first', 'first', 'first', 'second']);
  });

  test('builds the entries chapter-content.js renders', () => {
    const get = (key) => entries.find((e) => e.key === key);
    expect(get('first.prose')).toMatchObject({ type: 'prose', en: ['<h2>Hi</h2>', 'One.'], zh: [] });
    expect(get('first.image')).toMatchObject({ type: 'image', file: 'intro-9-first', ttsText: '喵', alt: { en: ['A cat.'], ru: ['Кошка.'], zh: [] } });
    expect(get('first.example1')).toMatchObject({ type: 'example', pinyin: 'Nǐ hǎo ma?', en: ['How are you?'] });
    expect(get('second.prose')).toMatchObject({ tldr: { en: ['Two'] }, necessity: { en: ['Because'] } });
  });

  test('a section listed twice is an error', () => {
    expect(() => intro('x', { title: { en: 'X' }, summary: { en: 'S' }, sections: [first, first] })).toThrow('listed twice');
  });
});
