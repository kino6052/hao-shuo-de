// What the questions are made from: a lesson's assembled entries (src/lib/lesson.ts) read back into its modules,
// each with its word cards, examples and exercises, every text with its word refs resolved to plain pinyin.
//
//   lessonSource({ id, number, entries }, dict) -> { id, number, weight, modules: [Module] }
//   Module: { id, pattern, info, weight, cards, examples, exercises }
//
// `weight` is how much a module (or lesson) teaches: its word cards, examples and exercises together. The draw
// (draw.js) gives each module, and in the final exam each lesson, a share of the questions in proportion to it.
//
// dict: { term(id) -> the word's pinyin, pos(id) -> its kind ("verb", "noun", ...) or null }; dictFrom() makes one
// from src/data/dictionary.ts. Pure: no Node or browser APIs.

import { replaceWordRefs, wordRefIds, refTerm, soleWordRef, resolveLessonRefs } from '../word-refs.js';

export const LANGS = ['en', 'ru', 'zh'];

// -> { term, pos } over the dictionary ({ words: { id: { term, pos: { eng } } } }).
export function dictFrom(dictionary) {
  const words = dictionary.words;
  return {
    term: (id) => words[id]?.term,
    pos: (id) => {
      const eng = words[id]?.pos?.eng;
      return eng ? String(eng).split(/[/,;]/)[0].trim().toLowerCase() : null;
    },
  };
}

// -> text with its refs resolved and its markdown marks taken out.
export function plainText(text, dict) {
  let out = String(text ?? '');
  try {
    out = resolveLessonRefs(out);
  } catch {
    // a {{title:..}} ref has no titles here; leave it to the gate
  }
  out = replaceWordRefs(out, (id, kind) => refTerm(dict.term(id) ?? id, kind));
  return out.replace(/\*\*|__|`/g, '').replace(/\s+/g, ' ').trim();
}

// -> { en, ru, zh } of an entry's sentences, resolved; a language not written yet is left out.
export function localized(entry, dict, map = (s) => s) {
  const out = {};
  for (const l of LANGS) {
    const list = entry?.[l];
    if (Array.isArray(list) && list.length) out[l] = map(plainText(list.join(' '), dict));
    else if (typeof list === 'string' && list) out[l] = map(plainText(list, dict));
  }
  return out;
}

// A card's gloss up to its first ";": "meal, rice; chī fàn: eat" -> "meal, rice", so it doesn't say the word.
const firstPart = (s) => s.split(';')[0].trim();

const textOf = (entry) => LANGS.map((l) => (entry?.[l] ?? []).join(' ')).join(' ');

export function lessonSource({ id, number, entries }, dict) {
  const modules = [];
  const byId = new Map();
  const mod = (mid) => {
    if (!byId.has(mid)) {
      const m = { id: mid, pattern: null, info: {}, weight: 0, cards: [], examples: [], exercises: [] };
      byId.set(mid, m);
      modules.push(m);
    }
    return byId.get(mid);
  };
  const answers = new Map();
  for (const e of entries) if (e.type === 'answer') answers.set(e.key.replace('.answer', '.exercise'), e);

  for (const e of entries) {
    if (!e.module || e.module === 'head') continue;
    const m = mod(e.module);
    if (e.type === 'info') {
      m.pattern = e.pattern ?? null;
      // the pattern line is the help after a wrong answer; an aside (a note, a story's reading tip) is not
      const first = e.items?.[0]?.text;
      if (first && e.subtype === 'grammar') m.info = localized(first, dict);
    } else if (e.type === 'vocab') {
      const word = soleWordRef(e.term);
      if (!word) continue;
      m.cards.push({
        key: e.key,
        word,
        sense: e.sense ?? null,
        term: dict.term(word) ?? word,
        hanzi: e.ttsText ?? '',
        audioFile: e.audioFile ?? null,
        gloss: localized(e, dict, firstPart),
      });
    } else if (e.type === 'example') {
      m.examples.push({
        key: e.key,
        raw: e.pinyin,
        pinyin: plainText(e.pinyin, dict),
        hanzi: e.ttsText ?? '',
        audioFile: e.audioFile ?? null,
        meaning: localized(e, dict),
        words: [...new Set(wordRefIds(e.pinyin))],
      });
    } else if (e.type === 'exercise') {
      const a = answers.get(e.key);
      if (!a) continue;
      const rawAnswer = (a.en ?? []).join(' ');
      m.exercises.push({
        key: e.key,
        prompt: localized(e, dict),
        answer: localized(a, dict),
        // a Hao-shuo-de answer (word refs, the same in every language) or a plain-language one
        hsd: /\{\{(word|Word|light|Light):/.test(rawAnswer),
        hanzi: a.ttsText ?? '',
        words: [...new Set(wordRefIds(textOf(e) + ' ' + textOf(a)))],
      });
    }
  }
  for (const m of modules) m.weight = m.cards.length + m.examples.length + m.exercises.length;
  return { id, number, modules, weight: modules.reduce((s, m) => s + m.weight, 0) };
}

// -> the lesson number each word is first introduced in (its word card), over sources in book order.
export function wordHomes(sources) {
  const home = new Map();
  for (const s of sources) for (const m of s.modules) for (const c of m.cards) if (!home.has(c.word)) home.set(c.word, s.number);
  return home;
}
