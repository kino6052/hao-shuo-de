// Length limits for the short text fields (BOOK_PLAN.md §1, rule 7). Shared
// by scripts/check-summaries.js (the summary gate) and scripts/check-book.js
// (which enforces them for lessons and intros on every build).

import { plainText } from './jargon.js';

// A chapter summary: what you'll be able to say.
export const SUMMARY_MAX_WORDS = 50;
// A prose block's tldr (the one thing to remember) and necessity (why it helps).
export const TLDR_MAX_WORDS = 20;

// Words as a reader counts them: a {{word:..}} ref is one word, HTML tags are none.
export function countWords(text) {
  return plainText(text).split(/\s+/).filter(Boolean).length;
}
