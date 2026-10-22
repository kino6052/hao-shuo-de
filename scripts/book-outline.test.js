// The book's outline (scripts/book-outline.js) over a few made-up chapters: the reading order, the lesson
// numbers from book.js, markdown in its own language only, and the title fallbacks.

import { describe, expect, test } from 'bun:test';
import { outlineOf } from './book-outline.js';
import { lessonNumber } from '../src/content/book.js';

const title = (en, ru = [], zh = []) => ({ type: 'title', en, ru, zh });
const chapters = {
  md: [
    { file: 'dictionary.rus.md', meta: { id: 'dictionary', type: 'dictionary', title: 'Словарь', order: 1, language: 'rus' } },
    { file: 'dictionary.md', meta: { id: 'dictionary', type: 'dictionary', title: 'The Dictionary', order: 1, language: 'eng' } },
    { file: 'appendix-pinyin.md', meta: { id: 'appendix-pinyin', type: 'appendix', title: 'Pinyin', language: 'eng' } },
  ],
  yaml: [
    {
      file: 'word-map.yaml',
      byLang: {
        eng: { meta: { id: 'word-map', type: 'word-map', title: 'Word Map' } },
        rus: { meta: { id: 'word-map', type: 'word-map', title: 'Карта слов' } },
        zh: { meta: { id: 'word-map', type: 'word-map', title: '' } },
      },
    },
  ],
  ts: [
    { file: 'phrase-book.ts', meta: { id: 'phrase-book', type: 'appendix' }, entries: [title(['Phrase', 'Book'], ['Разговорник'])] },
    { file: 'lessons/colors/index.ts', meta: { id: 'colors', type: 'lesson' }, entries: [title(['Colors'], ['Цвета'])] },
    { file: 'intros/intro-1/index.ts', meta: { id: 'intro-1', type: 'intro', lessonNumber: 1, order: 1 }, entries: [title(['Welcome'])] },
  ],
};

describe('the book outline', () => {
  const outline = outlineOf(chapters);

  test('lists the chapters in reading order: intros, lessons, then the back matter as book.js orders it', () => {
    expect(outline.sections.eng.map((e) => e.id)).toEqual(['intro-1', 'colors', 'phrase-book', 'appendix-pinyin', 'dictionary', 'word-map']);
  });

  test('a lesson takes its number from book.js, and every entry names its file', () => {
    const colors = outline.sections.rus.find((e) => e.id === 'colors');
    expect(colors).toEqual({ id: 'colors', type: 'lesson', title: 'Цвета', lessonNumber: lessonNumber('colors'), order: lessonNumber('colors'), file: 'lessons/colors/index.ts' });
  });

  test('a markdown chapter is in its own language only', () => {
    expect(outline.sections.rus.find((e) => e.id === 'dictionary').file).toBe('dictionary.rus.md');
    expect(outline.sections.zh.some((e) => e.id === 'dictionary' || e.id === 'appendix-pinyin')).toBe(false);
    expect(outline.langs).toEqual(['eng', 'rus', 'zh']);
  });

  test('an untranslated title is the id on the page but English in a {{title:ID}} ref', () => {
    expect(outline.sections.zh.find((e) => e.id === 'colors').title).toBe('colors');
    expect(outline.titles.zh.colors).toBe('Colors');
    expect(outline.titles.zh['word-map']).toBe('Word Map');
    expect(outline.titles.zh.dictionary).toBe('The Dictionary');
    expect(outline.titles.eng['phrase-book']).toBe('Phrase Book');
  });

  test('a lesson missing from book.js is an error', () => {
    const stray = { file: 'lessons/stray/index.ts', meta: { id: 'stray', type: 'lesson' }, entries: [] };
    expect(() => outlineOf({ ts: [stray] })).toThrow('isn\'t in src/content/book.js');
  });
});
