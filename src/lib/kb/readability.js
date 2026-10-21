// Readability numbers for one sentence (TRANSLATOR_PLAN.md B4): how many words it has, how deeply its phrases sit
// inside each other, and its longest description (a phrase that names a thing by describing it), each with a warning
// when it goes over a limit. 伞 (umbrella) is one description of 14 words: inside a sentence it still parses, but
// nobody can read it. Pure: it takes what kb_check_text already has (the sentence as word refs and its parse).
//
//   readability({ refs, parse, words, reading })
//     -> { words, depth, longestDescription: { words, text }, warnings: [string] }
//
//   words      every word the sentence says (a chain like nǚ-rén is two words; commas and the end mark are not words)
//   depth      the most levels open at once on one path of the reading. A level is a modifier before a noun (X-de Y), a
//              clause after yīnwèi, rúguǒ or dànshì, or a quote after shuō. Nothing open: 0. Several modifiers in a
//              row before one noun are one level; a modifier inside a modifier is two.
//   longestDescription
//              the widest modified noun (grammar symbol ModNP: "dà-de dì-fang", "wǒ-de jiā", a relative clause and
//              its noun) in words, with its text as written. { words: 0, text: '' } when there is none.
//   warnings   one line for each number over its limit ("too long: ...", "too deep: ...")
//
// depth and longestDescription are read off the reading `reading` of `parse` (a result of the grammar parser; 0, the
// first, unless told). They are null when the sentence has no reading to measure (it does not parse, or `parse` is a
// stored result that has no trees); `words` and its warning still come from the tokens.
//
// Why the first reading, and not the simplest: the grammar allows readings no reader takes, and they are often the
// simplest. "Tā shuō: wǒ zhīdào nǐ xiǎng chī wǒ māma zuò-de fàn." has 2,228 readings; the one meant (a quote with
// "wǒ māma zuò-de fàn" inside) is 2 deep, the first reading is 2 deep too, and the simplest (depth 0) reads "tā shuō"
// as a call and zuò-de as one verb. The first reading can overstate instead: "Wǒ hé wǒ māma jīn-tiān zài jiā lǐ
// chī-le hěn duō hǎo-chī-de fàn." reads first as one 17-word noun ("the food that ..."), so its description warning
// is wrong (its words warning is right: a description over the limit is always a sentence over it too). The numbers
// of the reading meant are the exact ones: pass `reading` (kb_check_reading does, step 7 of the translate skill).
//
//   renderReadability(r) -> the lines kb_check_text shows

import { replaceWordRefs, refTerm, wordRefRe } from '../word-refs.js';

// The limits come from the book itself (measured 2026-10-21): every Hao-shuo-de sentence of the book that parses
// (5,153: the lessons' examples and answers, the composite examples, the stories, the phrase book), measured with
// this function on its first reading (at its lesson's level; the whole grammar's for a text outside the lessons).
// Each limit is the 95th percentile of its numbers, so about one book sentence in twenty is over it:
//
//                              median   90th   95th   99th   max
//   words                        5       9      10     15     36
//   depth                        0       1       1      2      3
//   longest description (*)      4       9      10     13     20
//
//   (*) over the 1,758 sentences that have a description; the other sentences have none to measure
//
// The stories read longer than the rest (median 11 words, 95th percentile 20 words and 2 levels deep), so about half
// of their sentences are over MAX_WORDS. The numbers are the parser's first reading, which is not always the one a
// reader takes; the limits were set on the same kind of reading, so they stay fair to each other.
export const MAX_WORDS = 10;
export const MAX_DEPTH = 1;
export const MAX_DESCRIPTION = 10;

// the words of a span of tokens: commas and colons are tokens of the parse, not words
const isWord = (token) => !/^[,;:]$/.test(token.text);

// where each token of a sentence of refs starts and ends, so a phrase can be shown as written (hyphens kept)
const TOKEN = new RegExp(`${wordRefRe().source}|"[^"]*"|\\p{L}+|[,;:]`, 'gu');
const spansOf = (refs) => [...refs.matchAll(TOKEN)].map((m) => [m.index, m.index + m[0].length]);

// -> { depth, widest: the ModNP node with the most words (the outermost on a tie), or null } over one reading
function measureTree(tree, wordsIn) {
  let depth = 0;
  let widest = null;
  let most = 0;
  const walk = (node, parent, open) => {
    if (!node.children) return;
    // a Say that holds another Say is one quote with something said before it (lái le, shuō: ...)
    const level = open + (node.sym === 'Mod' || node.sym === 'Clause' || (node.sym === 'Say' && parent !== 'Say') ? 1 : 0);
    depth = Math.max(depth, level);
    if (node.sym === 'ModNP') {
      const size = wordsIn(node);
      if (size > most) (widest = node), (most = size);
    }
    for (const child of node.children) walk(child, node.sym, level);
  };
  walk(tree, null, 0);
  return { depth, widest };
}

export function readability({ refs, parse, words = {}, reading = 0 }) {
  const tokens = parse.tokens ?? [];
  const before = [0]; // before[i]: the words among tokens 0..i-1
  tokens.forEach((t) => before.push(before[before.length - 1] + (isWord(t) ? 1 : 0)));
  const count = before[tokens.length];
  const warnings = [];
  if (count > MAX_WORDS) warnings.push(`too long: ${count} words (limit ${MAX_WORDS})`);

  const tree = parse.ok && !parse.slim ? parse.trees?.[reading] : null;
  if (!tree) return { words: count, depth: null, longestDescription: null, warnings };

  const { depth, widest } = measureTree(tree, (node) => before[node.to] - before[node.from]);
  const longest = { words: 0, text: '' };
  if (widest) {
    const written = String(refs).normalize('NFC');
    const spans = spansOf(written);
    // as written when the tokens line up with the refs; else the words of the parse, spaced
    const phrase = spans.length === tokens.length ? written.slice(spans[widest.from][0], spans[widest.to - 1][1]) : null;
    longest.words = before[widest.to] - before[widest.from];
    longest.text = phrase === null
      ? tokens.slice(widest.from, widest.to).map((t) => t.text).join(' ')
      : replaceWordRefs(phrase, (id, kind) => refTerm(words[id]?.term ?? id, kind.toLowerCase()));
  }
  if (depth > MAX_DEPTH) warnings.push(`too deep: ${depth} levels of describing phrases, clauses or quotes inside each other (limit ${MAX_DEPTH})`);
  if (longest.words > MAX_DESCRIPTION) warnings.push(`too long: the description "${longest.text}" is ${longest.words} words (limit ${MAX_DESCRIPTION})`);
  return { words: count, depth, longestDescription: longest, warnings };
}

// -> the lines for kb_check_text: the numbers, then one line for each warning
export function renderReadability(r) {
  const numbers = r.depth === null ? `${r.words} words` : `${r.words} words, depth ${r.depth}, ${r.longestDescription.words ? `longest description ${r.longestDescription.words} words` : 'no description'}`;
  return [numbers, ...r.warnings];
}
