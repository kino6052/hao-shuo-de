// Finds a complete Hao-shuo-de sentence written inline inside otherwise-English
// text -- a FAQ answer, a prose paragraph, an info box (KB_PLAN.md K7: every
// sentence of the book parses, not only the ones in an `examples` array).
//
//   inlineSentences(text) -> ["{{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.", ...]
//
// A sentence is two or more words -- runs of word refs and quoted sounds
// ("Miāo-miao"), joined only by spaces and hyphens -- ending at a
// sentence-final mark (. ! ? …); an English gloss in parens may sit between
// the run and the mark ("... (Everyone needs water)."), and is dropped from
// the result. A run that ends any other way -- a comma, an open clause -- is
// only part of a sentence, not one on its own, and is left alone:
// "{{word:chi1}}-{{word:wan2}} {{word:hou4}}, ..." does not match. Nor does
// one word named in passing, however it is hyphenated: "say
// {{word:mei2}}-{{word:you3}}." is the word for "don't have", not a sentence
// -- a run with no space in it, only hyphens, is one word, not two. Nor does
// a grammar template that stands in a real word with a bare X or Y
// ("X-{{word:wan2}} {{word:hou4}}", "after finishing X"): X and Y are never
// real words, so they cannot join a run, and a template never reads as one.

import { wordRefRe } from '../word-refs.js';

const token = () => `(?:${wordRefRe().source}|"[^"]*"|\\b[XY]\\b)`;
const sentenceRe = () => new RegExp(`(?<run>${token()}(?:[ -]+${token()})+)(?:\\s*\\([^()]*\\))?(?<end>[.!?…])`, 'gu');

// text -> the Hao-shuo-de sentences it writes inline, each ending in its mark.
export function inlineSentences(text) {
  const out = [];
  for (const m of String(text ?? '').matchAll(sentenceRe())) {
    const chunks = m.groups.run.trim().split(/\s+/);
    if (chunks.length >= 2 && !/\b[XY]\b/.test(m.groups.run)) out.push(`${m.groups.run}${m.groups.end}`);
  }
  return out;
}
