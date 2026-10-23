// Small helpers for the templates made from example sentences.

// -> the word ids a lesson's word cards introduce.
export const lessonWords = (lesson) => new Set(lesson.modules.flatMap((m) => m.cards.map((c) => c.word)));

// -> the words of a pinyin sentence, without the punctuation at their ends ("shuǐ." -> "shuǐ"); hyphens stay.
export const sentenceTokens = (pinyin) =>
  String(pinyin)
    .split(/\s+/)
    .map((t) => t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter(Boolean);
