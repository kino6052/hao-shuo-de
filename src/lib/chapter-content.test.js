// Run with `bun test`. Mirrors vite-plugin-chapter.test.js's style: plain-JS
// input in, exact output-shape assertions, no mocking.
import { describe, test, expect } from 'bun:test';
import { buildTsChapterView } from './chapter-content.js';

const meta = { id: 'test-chapter', type: 'lesson', lessonNumber: 1, order: 1 };

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
  test('renders markdown body and lifts tldr/necessity into tldrSummary', () => {
    const entries = [{
      type: 'prose',
      en: ['Hello **world**.', 'Second sentence.'],
      zh: [], ru: [],
      tldr: { en: ['Says hi'], zh: [], ru: [] },
      necessity: { en: ['Core'], zh: [], ru: [] },
    }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe('<p>Hello <strong>world</strong>.\nSecond sentence.</p>\n');
    expect(out.tldrSummary).toEqual([{ tldr: 'Says hi', necessity: 'Core' }]);
    expect(out.missingBlocks).toEqual([]);
  });

  test('a sentence that is its own raw HTML block still renders as its own block', () => {
    const entries = [{
      type: 'prose',
      en: ['Intro sentence.', '<h2>A heading</h2>', 'Closing sentence.'],
      zh: [], ru: [],
      tldr: { en: ['x'], zh: [], ru: [] },
      necessity: { en: ['x'], zh: [], ru: [] },
    }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe('<p>Intro sentence.</p>\n<h2>A heading</h2>\nClosing sentence.');
  });

  test('entry missing tldr/necessity entirely is flagged (every prose entry is expected to carry both)', () => {
    const entries = [{ type: 'prose', en: ['Hello.'], zh: [], ru: [] }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe('<p>Hello.</p>\n');
    expect(out.missingBlocks).toEqual([0]);
  });

  test('empty-array placeholder for the language renders nothing and flags the entry index as missing', () => {
    const entries = [{
      type: 'prose',
      en: ['Hello.'], zh: [], ru: [],
      tldr: { en: ['x'], zh: [], ru: [] },
      necessity: { en: ['x'], zh: [], ru: [] },
    }];
    const out = buildTsChapterView(meta, entries, 'zh');
    expect(out.bodyHtml).toBe('');
    expect(out.missingBlocks).toEqual([0]);
  });

  test('resolves {{word:..}}/{{dictionaryCount}} refs via injected wordIndex/wordCount', () => {
    const entries = [{
      type: 'prose',
      en: ['Say {{Word:hao3}}, {{dictionaryCount}} words.'], zh: [], ru: [],
      tldr: { en: ['x'], zh: [], ru: [] },
      necessity: { en: ['x'], zh: [], ru: [] },
    }];
    const wordIndex = new Map([['hao3', 'hǎo']]);
    const out = buildTsChapterView(meta, entries, 'eng', { wordIndex, wordCount: 138 });
    expect(out.bodyHtml).toBe('<p>Say Hǎo, 138 words.</p>\n');
  });
});

describe('buildTsChapterView: vocab', () => {
  test('collects {pinyin, definition, audioFile, ttsText}, keyed off `term`', () => {
    const entries = [{ type: 'vocab', term: 'mā', en: ['mother'], zh: [], ru: [], ttsText: 'ma1' }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.vocab).toEqual([{ pinyin: 'mā', definition: 'mother', audioFile: undefined, ttsText: 'ma1' }]);
    expect(out.missingBlocks).toEqual([]);
  });

  test('missing translation for the language is flagged and dropped', () => {
    const entries = [{ type: 'vocab', term: 'mā', en: ['mother'], zh: [], ru: [] }];
    const out = buildTsChapterView(meta, entries, 'zh');
    expect(out.vocab).toEqual([]);
    expect(out.missingBlocks).toEqual([0]);
  });

  test('resolves {{word:..}} refs in `term` itself, not just in the definition', () => {
    const entries = [{ type: 'vocab', term: '{{word:zhe4}}-ge', en: ['this one'], zh: [], ru: [] }];
    const wordIndex = new Map([['zhe4', 'zhè']]);
    const out = buildTsChapterView(meta, entries, 'eng', { wordIndex, wordCount: 1 });
    expect(out.vocab).toEqual([{ pinyin: 'zhè-ge', definition: 'this one', audioFile: undefined, ttsText: undefined }]);
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

  test('resolves {{word:..}} refs in `pinyin` itself, not just in the translation', () => {
    const entries = [{ type: 'example', pinyin: '{{Word:zhe4}}-ge {{word:shi4}} {{word:ren2}}.', en: ['This is a person.'], zh: [], ru: [] }];
    const wordIndex = new Map([['zhe4', 'zhè'], ['shi4', 'shì'], ['ren2', 'rén']]);
    const out = buildTsChapterView(meta, entries, 'eng', { wordIndex, wordCount: 3 });
    expect(out.examples).toEqual([{ pinyin: 'Zhè-ge shì rén.', translation: 'This is a person.', audioFile: undefined, ttsText: undefined }]);
  });
});

describe('buildTsChapterView: exercise/answer', () => {
  test('exercise entries collect into plain strings, answers collect {text, audioFile, ttsText}', () => {
    const entries = [
      { type: 'exercise', en: ['What tone is this?'], zh: [], ru: [] },
      { type: 'answer', en: ['Fourth tone.'], zh: [], ru: [], audioFile: 'a.mp3' },
    ];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.exercise).toEqual(['What tone is this?']);
    expect(out.answers).toEqual([{ text: 'Fourth tone.', audioFile: 'a.mp3', ttsText: undefined }]);
  });

  test('missing language flags the entry and drops it from the collected list', () => {
    const entries = [
      { type: 'exercise', en: ['Q'], zh: [], ru: [] },
      { type: 'answer', en: ['A'], zh: [], ru: [] },
    ];
    const out = buildTsChapterView(meta, entries, 'zh');
    expect(out.exercise).toEqual([]);
    expect(out.answers).toEqual([]);
    expect(out.missingBlocks).toEqual([0, 1]);
  });
});

describe('buildTsChapterView: info/warning', () => {
  test('info entry renders as a single unit: icon + title + nested list', () => {
    const entries = [{
      type: 'info',
      title: { en: ['Heads up'], zh: [], ru: [] },
      items: [{ text: { en: ['First point'], zh: [], ru: [] } }],
    }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe(
      '<div class="info-block"><span class="info-block-icon" aria-hidden="true">ℹ️</span>' +
      '<div class="info-block-content"><div class="info-block-title">Heads up</div><ul><li>First point</li></ul></div></div>',
    );
    expect(out.missingBlocks).toEqual([]);
  });

  test('warning entry uses the warning icon/classes and renders without a title', () => {
    const entries = [{ type: 'warning', items: [{ text: { en: ['Careful'], zh: [], ru: [] } }] }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toBe(
      '<div class="warning-block"><span class="warning-block-icon" aria-hidden="true">⚠️</span>' +
      '<div class="warning-block-content"><ul><li>Careful</li></ul></div></div>',
    );
  });

  test('ordered: true renders that level as <ol>, and nested items recurse', () => {
    const entries = [{
      type: 'info',
      ordered: true,
      items: [{ text: { en: ['Step one'], zh: [], ru: [] }, items: [{ text: { en: ['Detail'], zh: [], ru: [] } }] }],
    }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toContain('<ol><li>Step one<ul><li>Detail</li></ul></li></ol>');
  });

  test('an item missing the language is skipped, siblings still render, entry flagged missing', () => {
    const entries = [{
      type: 'info',
      items: [
        { text: { en: ['Present'], zh: [], ru: [] } },
        { text: { en: [], zh: [], ru: [] } },
      ],
    }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.bodyHtml).toContain('<li>Present</li>');
    expect(out.bodyHtml).not.toContain('undefined');
    expect(out.missingBlocks).toEqual([0]);
  });

  test('subtype grammar + tag collects the entry into grammarRules alongside rendering inline', () => {
    const entries = [{
      type: 'info',
      subtype: 'grammar',
      tag: 'adjectives/causative',
      title: { en: ['Causative -de'], zh: [], ru: [] },
      items: [{ text: { en: ['x'], zh: [], ru: [] } }],
    }];
    const out = buildTsChapterView(meta, entries, 'eng');
    expect(out.grammarRules).toEqual([{ tag: 'adjectives/causative', title: 'Causative -de', html: out.bodyHtml }]);
  });
});

describe('buildTsChapterView: unsupported entry type', () => {
  test('throws, naming the chapter id and the bad type', () => {
    const entries = [{ type: 'heading', en: ['x'], zh: [], ru: [] }];
    expect(() => buildTsChapterView(meta, entries, 'eng')).toThrow(
      'Chapter entry type "heading" (in test-chapter) isn\'t supported by the TS chapter transform yet.',
    );
  });
});
