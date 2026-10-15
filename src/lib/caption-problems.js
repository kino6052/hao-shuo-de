// What must hold for a Hao-shuo-de sentence that stands outside a lesson's
// examples: an intro example and a picture's caption (src/lib/intro.ts,
// src/lib/lesson.ts).
//
//   captionProblems(sentence, words) -> [problem, ...] (empty when fine)
//
// `sentence` is { pinyin, hanzi, en, ru } (the first line of en and ru);
// `words` is { [id]: { term, hanzi, senses? } } (the dictionary's words).
//
// It must be written the way a lesson example is, with word refs and quoted
// names or sounds ({{Word:wo3}} {{word:yao4}} "Miāo-miao"), so a word is a
// real dictionary word and a compound is written as one (zhè-ge, never
// "zhè ge"). Plain pinyin typed straight into the sentence is refused, except
// the toneless -ge of zhè-ge / nà-ge, which lessons write that way. It needs
// hanzi (the audio reads them), in step with the words, and an English and a
// Russian meaning. The grammar gate (scripts/check-grammar.js) parses it too.

import { exampleProblems } from './composite-examples.js';

// -ge after a ref is the word gè, which lessons write without a ref.
const withGe = (pinyin) => String(pinyin).replace(/(\}\})-ge\b/g, '$1-{{word:ge4}}');

export function captionProblems(sentence, words) {
  const problems = exampleProblems({}, { ...sentence, pinyin: sentence.pinyin && withGe(sentence.pinyin) }, words);
  // gè is bound to the word before it: zhè-ge, yī-ge. A space ("zhè ge") makes it two words.
  if (/\{\{word:ge4\}\}/.test(String(sentence.pinyin ?? '').replace(/-\{\{word:ge4\}\}/g, ''))) {
    problems.push('gè must be joined to the word before it with a hyphen (zhè-ge, yī-ge)');
  }
  return problems;
}
