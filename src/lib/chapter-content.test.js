// Run with `bun test`. Mirrors vite-plugin-chapter.test.js's style: plain-JS
// input in, exact output-shape assertions, no mocking.
import { describe, test, expect } from 'bun:test';
import { buildTsChapterView } from './chapter-content.js';

const meta = { id: 'test-chapter', type: 'intro', lessonNumber: 1, order: 1 };

describe('buildTsChapterView: title/summary', () => {
  test('title present for the language overrides the id; missing (empty array) falls back to id', () => {
    const entries = [{ type: 'title', en: ['Hello'], zh: [], ru: [] }];
    expect(buildTsChapterView(meta, entries, 'eng').meta.title).toBe('Hello');
    expect(buildTsChapterView(meta, entries, 'zh').meta.title).toBe('test-chapter');
  });

  test('summary lifts into tldrSummary as the overview entry; missing is just omitted (not flagged)', () => {
    const entries = [{ type: 'summary', en: ['Overview'], zh: [], ru: [] }];
    const eng = buildTsChapterView(meta, entries, 'eng');
    expect(eng.tldrSummary).toEqual([{ tldr: 'Overview', necessity: undefined, isOverview: true }]);
    expect(eng.missingBlocks).toEqual([]);

    const zh = buildTsChapterView(meta, entries, 'zh');
    expect(zh.tldrSummary).toEqual([]);
    expect(zh.missingBlocks).toEqual([]);
  });
});

describe('buildTsChapterView: prose', () => {
  test('joins multiple sentences (soft break, reads as one paragraph)', () => {
    const entries = [{ type: 'prose', en: ['Hello **world**.', 'Second sentence.'], zh: [], ru: [] }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe('<p>Hello <strong>world</strong>.\nSecond sentence.</p>\n');
    expect(out.missingBlocks).toEqual([]);
  });

  test('a sentence that is its own raw HTML block still renders as its own block', () => {
    const entries = [{ type: 'prose', en: ['Intro sentence.', '<h2>A heading</h2>', 'Closing sentence.'], zh: [], ru: [] }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe('<p>Intro sentence.</p>\n<h2>A heading</h2>\nClosing sentence.');
  });

  test('empty-array placeholder renders nothing and flags the entry index as missing', () => {
    const entries = [{ type: 'prose', en: ['Hello.'], zh: [], ru: [] }];
    const out = buildTsChapterView(meta, entries, 'zh');
    expect(out.bodyHtml).toBe('');
    expect(out.missingBlocks).toEqual([0]);
  });

  test('resolves {{word:..}}/{{dictionaryCount}} refs via injected wordIndex/wordCount', () => {
    const entries = [{ type: 'prose', en: ['Say {{Word:hao3}}, {{dictionaryCount}} words.'], zh: [], ru: [] }];
    const wordIndex = new Map([['hao3', 'hǎo']]);
    const out = buildTsChapterView(meta, entries, 'eng', { wordIndex, wordCount: 138 });
    expect(out.bodyHtml).toBe('<p>Say Hǎo, 138 words.</p>\n');
  });
});

describe('buildTsChapterView: example/story', () => {
  test('example rows land in examples, story rows in story, keyed by pinyin + audio fields', () => {
    const entries = [
      { type: 'example', pinyin: 'Nǐ hǎo.', en: ['Hello.'], zh: [], ru: [], audioFile: 'a.mp3' },
      { type: 'story', pinyin: 'Wǒ hǎo.', en: ['I am good.'], zh: [], ru: [] },
    ];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.examples).toEqual([{ pinyin: 'Nǐ hǎo.', translation: 'Hello.', audioFile: 'a.mp3', ttsText: undefined }]);
    expect(out.story).toEqual([{ pinyin: 'Wǒ hǎo.', translation: 'I am good.', audioFile: undefined, ttsText: undefined }]);
    expect(out.missingBlocks).toEqual([]);
  });

  test('missing translation for the language is flagged and dropped, not pushed with undefined text', () => {
    const entries = [{ type: 'example', pinyin: 'Nǐ hǎo.', en: ['Hello.'], zh: [], ru: [] }];
    const out = buildTsChapterView(meta, entries, 'zh');
    expect(out.examples).toEqual([]);
    expect(out.missingBlocks).toEqual([0]);
  });
});

describe('buildTsChapterView: unsupported entry type', () => {
  test('throws, naming the chapter id and the bad type', () => {
    const entries = [{ type: 'vocab', en: ['x'], zh: [], ru: [] }];
    expect(() => buildTsChapterView(meta, entries, 'eng')).toThrow(
      'Chapter entry type "vocab" (in test-chapter) isn\'t supported by the TS chapter transform yet.',
    );
  });
});
