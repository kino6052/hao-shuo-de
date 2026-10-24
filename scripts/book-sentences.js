// Every Hao-shuo-de sentence of the book once, as word refs, with the kind of text it first comes from (lesson_example,
// composite_example, story, phrase_book, ...). Pinyin without refs is converted; a sentence that can't be is left out.
// Used by scripts/round-trip.js and scripts/rule-english.js.
//
//   bookSentences(kb, { kind }) -> Map(text -> kind)

import { pinyinProblems } from '../src/lib/pinyin-refs.js';
import { splitSentences } from '../src/lib/kb/parse.js';

export function bookSentences(kb, { kind } = {}) {
  const seen = new Map();
  for (const s of kb.facts.sentences) {
    if (kind && s.kind !== kind) continue;
    let refs = String(s.pinyin ?? '');
    if (!refs.includes('{{')) {
      const converted = pinyinProblems(refs, kb.parse.words, { composites: kb.source.composites });
      if (converted.problems.length) continue;
      refs = converted.refs;
    }
    for (const text of splitSentences(refs)) if (!seen.has(text)) seen.set(text, s.kind);
  }
  return seen;
}
