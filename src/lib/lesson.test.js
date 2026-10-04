import { describe, expect, test } from 'bun:test';
import { lesson, lessonModule } from './lesson.ts';

const tong = lessonModule({
  id: 'through',
  words: [{ term: '{{word:tong1}}', hanzi: '通', en: 'go through', ru: 'проходить через' }],
  prose: { en: ['**To say go through** …'], ru: ['…'], tldr: { en: 'tldr' }, necessity: { en: 'why' } },
  info: { en: 'tōng-guò + place', ru: 'tōng-guò + место' },
  examples: [{ pinyin: '{{Word:wo3}}.', hanzi: '我。', en: 'Me.' }],
  exercises: [{ en: 'Me.', ru: 'Я.', answer: '{{Word:wo3}}.', hanzi: '我。' }],
  faq: [{ question: { en: 'Why?' }, en: 'Because.' }],
});
const seems = lessonModule({
  id: 'seems',
  prose: { en: 'Seems.' },
  info: { kind: 'note', title: { en: 'Note' }, items: [{ en: 'one' }, { en: 'two', items: [{ en: 'nested' }] }] },
  exercises: [{ en: 'Q?', answer: { en: 'A.', ru: 'О.' } }],
});

describe('lesson', () => {
  const entries = lesson('direction-and-result', { title: { en: 'Verbs 2' }, summary: { en: 'S.' }, modules: [tong, seems] });

  test('each module is words, explanation, info, examples, exercises, answers, then its FAQ', () => {
    expect(entries.map((e) => e.key)).toEqual([
      'title', 'summary',
      'through.word1', 'through.prose', 'through.info', 'through.example1', 'through.exercise1', 'through.answer1', 'through.faq1',
      'seems.prose', 'seems.info', 'seems.exercise1', 'seems.answer1',
    ]);
    expect(entries.map((e) => e.module)).toEqual(['head', 'head', ...Array(7).fill('through'), ...Array(4).fill('seems')]);
  });

  test('builds the chapter entries chapter-content.js renders', () => {
    const get = (key) => entries.find((e) => e.key === key);
    expect(get('through.word1')).toMatchObject({ type: 'vocab', term: '{{word:tong1}}', ttsText: '通', en: ['go through'], ru: ['проходить через'], zh: [] });
    expect(get('through.prose')).toMatchObject({ type: 'prose', tldr: { en: ['tldr'], ru: [], zh: [] }, necessity: { en: ['why'], ru: [], zh: [] } });
    expect(get('seems.prose').tldr).toBeUndefined();
    expect(get('through.example1')).toMatchObject({ type: 'example', pinyin: '{{Word:wo3}}.', ttsText: '我。', en: ['Me.'] });
  });

  test('a one-line info block is a pattern; a note stays out of the grammar overview', () => {
    const line = entries.find((e) => e.key === 'through.info');
    expect(line).toMatchObject({ type: 'info', subtype: 'grammar', items: [{ text: { en: ['tōng-guò + place'], ru: ['tōng-guò + место'], zh: [] } }] });
    expect(line.title).toBeUndefined();
    const note = entries.find((e) => e.key === 'seems.info');
    expect(note.subtype).toBeUndefined();
    expect(note.title).toEqual({ en: ['Note'], ru: [], zh: [] });
    expect(note.items[1].items[0].text.en).toEqual(['nested']);
  });

  test('a plain answer is given in every language its question is written in', () => {
    expect(entries.find((e) => e.key === 'through.answer1')).toMatchObject({ en: ['{{Word:wo3}}.'], ru: ['{{Word:wo3}}.'], zh: [], ttsText: '我。' });
    expect(entries.find((e) => e.key === 'seems.answer1')).toMatchObject({ en: ['A.'], ru: ['О.'], zh: [] });
  });

  test('a module listed twice is an error', () => {
    expect(() => lesson('x', { title: { en: 'X' }, summary: { en: 'S' }, modules: [seems, seems] })).toThrow('listed twice');
  });
});
