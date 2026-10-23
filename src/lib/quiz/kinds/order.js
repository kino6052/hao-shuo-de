// Put in order (BOOK_PLAN.md §3): an example cut into its words, with its meaning; put it back together.
// Only sentences of 3 to 8 words with at least two different words; the example's own order is the answer.

import { makeQuestion } from '../question.js';
import { base } from './util.js';
import { lessonWords, sentenceTokens } from './sentence.js';

export const MIN_TOKENS = 3;
export const MAX_TOKENS = 8;

export default {
  kind: 'order',
  make(lesson, ctx) {
    const out = [];
    const mine = lessonWords(lesson);
    for (const m of lesson.modules) {
      for (const ex of m.examples) {
        // the first word loses its capital, so it doesn't give the start away
        const tokens = sentenceTokens(ex.pinyin).map((t, i) => (i === 0 ? t.charAt(0).toLowerCase() + t.slice(1) : t));
        if (!ex.meaning.en || tokens.length < MIN_TOKENS || tokens.length > MAX_TOKENS) continue;
        if (new Set(tokens.map((t) => t.toLowerCase())).size < 2) continue;
        out.push(makeQuestion({
          ...base(lesson, m, 'order', ex.key),
          prompt: { text: ex.meaning },
          tokens,
          words: ex.words.filter((w) => mine.has(w)),
          uses: ex.words,
        }));
      }
    }
    return out;
  },
};
