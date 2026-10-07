// The example sentences of the composite dictionary (Composite.examples): a
// couple of sentences per entry that use one of its forms. Pure, for the app,
// check-book and scripts/composite-examples.js.
//
//   exampleProblems(entry, example, words) -> [problem, ...] (empty when fine)
//   spelledHanzi(pinyin, words)            -> what the refs spell, as slots
//   hanziMatches(pinyin, hanzi, words)     -> whether the hanzi spell the refs
//
// `words` is { [id]: { term, hanzi, senses? } } (the dictionary's words).
// `entry` is in the assembled shape (src/data/composites.ts): hsd " / "-joined.

import { wordRefRe, wordRefIds } from './word-refs.js';
import { chainSenses, senseHanzi } from './senses.js';

// Characters a word may be written with besides its own: tā is 他, 她 or 它;
// de is 的, 得 or 地.
const ALSO = { 他: '他她它', 的: '的得地' };
const CJK = /[㐀-鿿]/;

// -> the slots the pinyin's refs spell, in order: a string of the characters
// a slot may be, '*' for a name or sound in quotes (any characters), or '儿?'
// for an erhua r after a word (miànr: 面儿).
export function spelledHanzi(pinyin, words) {
  const text = String(pinyin);
  const refs = [...text.matchAll(wordRefRe())].map((m) => ({ id: m[2], sense: m[3], start: m.index, end: m.index + m[0].length }));
  // hyphen chains decide the senses (shí-jiān is 时间)
  const senses = new Array(refs.length);
  for (let i = 0; i < refs.length; ) {
    let j = i + 1;
    while (j < refs.length && text.slice(refs[j - 1].end, refs[j].start) === '-') j++;
    const inferred = chainSenses(refs.slice(i, j).map((r) => r.id), words);
    for (let k = i; k < j; k++) senses[k] = refs[k].sense ?? inferred[k - i];
    i = j;
  }
  const slots = [];
  // the text between words: an erhua r right after the word before, then
  // any names or sounds in quotes
  const between = (s, afterWord) => {
    if (afterWord && /^r\b/.test(s)) slots.push('儿?');
    slots.push(...(s.match(/"[^"]*"/g) ?? []).map(() => '*'));
  };
  let at = 0;
  refs.forEach((r, i) => {
    between(text.slice(at, r.start), i > 0);
    for (const ch of senseHanzi(words, r.id, senses[i])) slots.push(ALSO[ch] ?? ch);
    at = r.end;
  });
  between(text.slice(at), refs.length > 0);
  return slots;
}

// -> true when the hanzi (punctuation aside) spell the refs, slot by slot.
export function hanziMatches(pinyin, hanzi, words) {
  const slots = spelledHanzi(pinyin, words);
  const chars = [...String(hanzi)].filter((c) => CJK.test(c));
  const go = (s, c) => {
    if (s === slots.length) return c === chars.length;
    const slot = slots[s];
    if (slot === '*') {
      for (let k = c; k <= chars.length; k++) if (go(s + 1, k)) return true;
      return false;
    }
    if (slot === '儿?') return (chars[c] === '儿' && go(s + 1, c + 1)) || go(s + 1, c);
    return c < chars.length && slot.includes(chars[c]) && go(s + 1, c + 1);
  };
  return go(0, 0);
}

// -> true when the example uses the form: its words, in order (others may
// come between them: X ràng Y), or its quoted sound.
function usesForm(example, form) {
  const want = wordRefIds(form);
  if (!want.length) return (form.match(/"[^"]*"/g) ?? []).some((q) => example.includes(q));
  const have = wordRefIds(example);
  let k = 0;
  for (const id of have) if (id === want[k]) k++;
  return k === want.length;
}

export function exampleProblems(entry, example, words) {
  const problems = [];
  for (const key of ['pinyin', 'hanzi', 'en', 'ru']) if (!example[key]) problems.push(`no ${key}`);
  if (!example.pinyin) return problems;
  const unknown = wordRefIds(example.pinyin).filter((id) => !words[id]);
  if (unknown.length) problems.push(`not words: ${unknown.join(', ')}`);
  else if (example.hanzi && !hanziMatches(example.pinyin, example.hanzi, words)) {
    problems.push(`hanzi "${example.hanzi}" don't spell its words (${spelledHanzi(example.pinyin, words).map((s) => s[0]).join('')})`);
  }
  // plain pinyin outside refs and quotes (only X, Y and an erhua r may stand there)
  const bare = example.pinyin.replace(wordRefRe(), ' ').replace(/"[^"]*"/g, ' ').match(/\p{L}+/gu) ?? [];
  const stray = bare.filter((w) => !['X', 'Y', 'r'].includes(w));
  if (stray.length) problems.push(`plain pinyin outside word refs: ${stray.join(', ')}`);
  if (entry.hsd && !entry.hsd.split(' / ').some((f) => usesForm(example.pinyin, f))) problems.push('uses none of its forms');
  return problems;
}
