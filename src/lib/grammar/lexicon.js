// From a sentence in Hao-shuo-de to the word lattice the parser reads
// (KB_PLAN.md phase 1, the grammar slice). Pure: runs in Node and in the browser.
//
//   buildLexicon({ words, composites }) -> the lexicon (once per data set)
//   lex(text, lexicon, { extra, forms }) -> { n, edges, tokens, problems }; extra = { wordId: [class, ...] } lets a word
//                                          fill more classes in this sentence only (the class proposals try that);
//                                          forms: true reads a composite's description, where A, B, C and … stand for
//                                          things the form leaves open, like X, Y and Z
//
// The text is the form the book stores: word refs {{word:wo3}} {{Word:wo3}}
// {{light:xi1}}, a bare "ge", quoted names, hyphens that glue a chain
// (nǚ-rén, dà-de, hěn-duō-de) and punctuation. Each word is one position in
// the lattice. Every position has an edge for the word alone, with the word
// classes its `pos` gives it (a word of "noun/directional" is both). A chain
// that spells a composite entry (nǚ-rén -> 女人, a noun) also gets one edge
// over its words, so the parser can read it as one noun or as its parts:
//
//   edge { from, to, id?, composite?, term, classes: Set }
//
// A word said twice in a row (rén-rén, hǎo-hǎo) gets the class "again" on its
// second edge, and a bare light syllable that repeats the word before it
// (kàn-kan, xiè-xie) is an "again" edge too, so a rule can say @verb @again.
//
// A lone X, Y or Z stands for a thing the example leaves open ("I do it with X"):
// it is one noun, the class "slot". In a composite's description (forms: true) so do A, B and C,
// and … ("hé … yī-yàng"), which is a sentence end anywhere else; there a slot may also be a verb
// (X-wán hòu, "after doing X").
//
// Nothing here knows grammar rules; the parser decides which reading fits.

import { wordRefRe } from '../word-refs.js';

// A word's part of speech as word classes: "noun/measure word" -> noun, measure_word.
export const posClasses = (eng) =>
  String(eng ?? '')
    .toLowerCase()
    .split('/')
    .map((p) => p.trim().replace(/\s+/g, '_'))
    .filter(Boolean);

// Every class a word fills: its part of speech and the classes it lists besides (K6).
export const classesOf = (word) => [...new Set([...posClasses(word?.pos?.eng), ...Object.keys(word?.classes ?? {})])];

// a bare syllable the book writes without a ref
const BARE = { ge: 'ge4' };

const REF_SOURCE = wordRefRe().source;
// a form that is one hyphen-joined chain of words: {{word:nv3}}-{{word:ren2}}
const CHAIN_FORM = new RegExp(`^(?:${REF_SOURCE})(?:-(?:${REF_SOURCE}))+$`);

const TOKEN = new RegExp(`${REF_SOURCE}|"[^"]*"|\\p{L}+|[-,;:]|[.!?…]+`, 'gu');

// -> { words, chains } where chains maps "nv3 ren2" to the composites spelled by that chain.
export function buildLexicon({ words, composites = [] }) {
  const chains = new Map();
  for (const c of composites) {
    const classes = posClasses(c.pos);
    // the forms are one " / "-joined string (data/composites.ts) or the list a data file holds
    for (const form of Array.isArray(c.hsd) ? c.hsd : c.hsd ? c.hsd.split(' / ') : []) {
      if (!CHAIN_FORM.test(form)) continue;
      const ids = [...form.matchAll(wordRefRe())].map((m) => m[2]);
      const key = ids.join(' ');
      if (!chains.has(key)) chains.set(key, []);
      if (!chains.get(key).some((x) => x.zh === c.zh)) chains.get(key).push({ zh: c.zh, py: c.py, classes });
    }
  }
  return { words, chains };
}

const termOf = (words, id) => words[id]?.term ?? id;

// a syllable without its tone marks, to tell whether a bare syllable repeats a word
const plain = (s) => String(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

// -> { n, edges, tokens, problems } for one sentence (see the header).
//    tokens[i] is the word at position i: { text, id?, kind } for showing it.
export function lex(text, lexicon, { extra = {}, forms = false } = {}) {
  const { words, chains } = lexicon;
  const src = String(text).normalize('NFC');
  const items = [];
  let prevEnd = 0;
  let joined = false;
  for (const m of src.matchAll(TOKEN)) {
    const gap = src.slice(prevEnd, m.index);
    prevEnd = m.index + m[0].length;
    const [tok] = m;
    if (tok === '-') {
      joined = items.length > 0 && gap === '' && Boolean(items.at(-1).word);
      continue;
    }
    const glued = joined && gap === '';
    joined = false;
    if (forms && tok.startsWith('…')) {
      items.push({ kind: 'slot', word: true, text: '…', glued });
    } else if (/^[.!?…]+$/.test(tok)) {
      items.push({ kind: 'end', text: tok });
    } else if (/^[,;:]$/.test(tok)) {
      items.push({ kind: 'comma', text: tok, word: false });
    } else if (tok.startsWith('{{')) {
      const ref = new RegExp(`^${REF_SOURCE}$`).exec(tok);
      items.push({ kind: 'word', word: true, id: ref[2], glued });
    } else if (tok.startsWith('"')) {
      items.push({ kind: 'quoted', word: true, text: tok.slice(1, -1), glued });
    } else if (forms ? /^[A-CX-Z]$/.test(tok) : /^[XYZ]$/.test(tok)) {
      items.push({ kind: 'slot', word: true, text: tok, glued });
    } else if (Object.hasOwn(BARE, tok.toLowerCase())) {
      items.push({ kind: 'word', word: true, id: BARE[tok.toLowerCase()], glued });
    } else {
      items.push({ kind: 'unknown', word: true, text: tok, glued });
    }
  }

  const tokens = [];
  const edges = [];
  const problems = [];
  let chainStart = 0;
  const closeChain = () => {
    // every run of two or more words that spells a composite entry
    for (let a = chainStart; a < tokens.length; a++) {
      for (let b = a + 2; b <= tokens.length; b++) {
        if (tokens.slice(a, b).some((t) => !t.id)) continue;
        for (const c of chains.get(tokens.slice(a, b).map((t) => t.id).join(' ')) ?? []) {
          edges.push({ from: a, to: b, composite: c.zh, term: c.py, classes: new Set(c.classes) });
        }
      }
    }
  };
  for (const it of items) {
    if (it.kind === 'end') continue;
    if (!it.word) {
      closeChain();
      tokens.push({ kind: 'comma', text: it.text });
      edges.push({ from: tokens.length - 1, to: tokens.length, term: it.text, classes: new Set(['comma']) });
      chainStart = tokens.length;
      continue;
    }
    if (!it.glued) {
      closeChain();
      chainStart = tokens.length;
    }
    const i = tokens.length;
    if (it.kind === 'word') {
      const w = words[it.id];
      if (!w) problems.push(`"${it.id}" is not a word`);
      const classes = new Set([...classesOf(w), ...(extra[it.id] ?? [])]);
      if (tokens.at(-1)?.id === it.id) classes.add('again');
      tokens.push({ kind: 'word', id: it.id, text: termOf(words, it.id) });
      edges.push({ from: i, to: i + 1, id: it.id, term: termOf(words, it.id), classes });
    } else if (it.kind === 'slot') {
      tokens.push({ kind: 'slot', text: it.text });
      // in a description a slot may also stand for what is done (X-wán hòu: after doing X)
      edges.push({ from: i, to: i + 1, term: it.text, classes: new Set(forms ? ['noun', 'slot', 'verb'] : ['noun', 'slot']) });
    } else if (it.kind === 'quoted') {
      tokens.push({ kind: 'quoted', text: `"${it.text}"` });
      edges.push({ from: i, to: i + 1, term: `"${it.text}"`, classes: new Set(['noun', 'quoted']) });
    } else if (it.glued && tokens.at(-1)?.id && plain(termOf(words, tokens.at(-1).id)) === plain(it.text)) {
      tokens.push({ kind: 'again', text: it.text });
      edges.push({ from: i, to: i + 1, term: it.text, classes: new Set(['again']) });
    } else {
      problems.push(`"${it.text}" is not a word of the dictionary (a bare syllable, or English)`);
      tokens.push({ kind: 'unknown', text: it.text });
      edges.push({ from: i, to: i + 1, term: it.text, classes: new Set(['unknown']) });
    }
  }
  closeChain();
  return { n: tokens.length, edges, tokens, problems };
}
