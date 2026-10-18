// Finds words a lesson uses before the lesson that introduces them
// (BOOK_PLAN.md §4a, rule 2), and pinyin words that aren't in the dictionary
// at all. Pure functions over already-loaded lesson entries, so both
// scripts/check-early-words.js (the gate) and scripts/check-book.js (the build
// check) share them, and scripts/early-words.test.js can test them on small
// made-up lessons.
//
// A word counts as "used" when it appears as a {{word:id}} ref anywhere in a
// lesson (vocab glosses, prose, callouts, examples, exercises, answers,
// tldr/necessity), or as plain pinyin typed straight into the text:
//   - any word with a tone mark (kěyǐ, dòng, guò) anywhere, since English
//     text doesn't use tone marks;
//   - in pinyin-only fields (example pinyin, answers), also toneless words
//     that are a dictionary word (de, le, ma) or a known toneless form of one
//     (the "ge" in zhè-ge is gè). Other toneless words are skipped there,
//     because sounds and names ("wang-wang", "Lisa") aren't vocabulary --
//     except known pinyin words missing from the dictionary (like "men").
// Lesson 1 is exempt: it shows words as sound examples.

import { wordRefIds, wordRefRe, soleWordRef } from '../src/lib/word-refs.js';
import { refSenses, senseKey } from '../src/lib/senses.js';

const TONE_MARK_RE = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i;
// The book's own name and its mascot's are not vocabulary.
const NAME_RE = /h[aǎ]o-shu[oō]-de|mi[aā]o-mi[aā]o/gi;
// Toneless spellings of dictionary words, as they appear inside compounds.
const TONELESS_FORMS = { ge: 'ge4' };
// Toneless pinyin words that are real Mandarin but not in the dictionary, so
// they're flagged instead of being skipped like sounds and names.
const TONELESS_NOT_IN_DICTIONARY = new Set(['men']);

const norm = (s) => s.normalize('NFC').toLowerCase();

// -> Map(term -> id) for looking up plain pinyin.
export function termIndex(dictionary) {
  return new Map(Object.entries(dictionary).map(([id, w]) => [norm(w.term), id]));
}

// -> [{ id, token }] for every word used in `text`. `id` is null for a
// pinyin word that isn't in the dictionary.
export function wordsIn(text, terms, { pinyinField = false } = {}) {
  const found = [];
  for (const id of wordRefIds(text)) found.push({ id, token: `{{word:${id}}}` });
  const rest = text.replace(wordRefRe(), ' ').replace(NAME_RE, ' ').replace(/<[^>]*>/g, ' ');
  for (const raw of rest.split(/[\s\-–—.,!?;:()"'`“”‘’«»\[\]\/…*_]+/)) {
    if (!raw) continue;
    const token = norm(raw);
    if (!/^[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]+$/.test(token)) continue;
    const hasTone = TONE_MARK_RE.test(token);
    if (!hasTone && !pinyinField) continue;
    const id = terms.get(token) ?? TONELESS_FORMS[token] ?? null;
    if (id || hasTone || TONELESS_NOT_IN_DICTIONARY.has(token)) found.push({ id, token: raw });
  }
  return found;
}

// Every piece of text in one assembled lesson entry, with whether it's a
// pinyin-only field.
function textsOf(entry) {
  const out = [];
  const add = (text, pinyinField = false) => { if (typeof text === 'string' && text) out.push({ text, pinyinField }); };
  const addAll = (arr, pinyinField = false) => (arr ?? []).forEach((t) => add(t, pinyinField));
  if (entry.type === 'vocab') { addAll(entry.en); return out; } // the term itself is the introduction
  if (entry.type === 'example' || entry.type === 'story' || entry.type === 'image') add(entry.pinyin, true);
  addAll(entry.en, entry.type === 'answer');
  addAll(entry.tldr?.en);
  addAll(entry.necessity?.en);
  addAll(entry.title?.en);
  addAll(entry.question?.en);
  const walkItems = (items) => (items ?? []).forEach((it) => { addAll(it.text?.en ?? it.en); walkItems(it.items); });
  walkItems(entry.items);
  return out;
}

// A catch-all word's sense counts as its own word: shí-jiān needs the card
// for shí's "time" sense, a bare shí needs its main card (src/lib/senses.js).
//
// introductions(lessons) -> Map(id or id#sense -> { lesson, number, module }): where each card first appears
// (the home lesson of findEarlyWords, also read by `kb add`).
//
// lessons: [{ id, number, entries: [{ key, ...assembled entry }] }] in order.
// -> { home: Map(id or id#sense -> lesson number), problems: [{ lesson, key, kind, word, home?, text }] }
//    kind 'early': a dictionary word used before its home lesson
//    kind 'not-in-dictionary': a pinyin word the dictionary doesn't have
//    kind 'never-introduced': a dictionary word no lesson introduces
export function introductions(lessons) {
  const first = new Map();
  for (const lesson of lessons) {
    lesson.entries.forEach((entry, index) => {
      if (entry.type !== 'vocab') return;
      const id = soleWordRef(entry.term);
      const key = id && senseKey(id, entry.sense);
      if (key && !first.has(key)) first.set(key, { lesson: lesson.id, number: lesson.number, module: entry.module ?? '', index, key: entry.key });
    });
  }
  return first;
}

// The words used in one entry, in order: [{ id, token, sense, text }] (id is null for a pinyin word the
// dictionary doesn't have). Shared by the two gates below.
function usesIn(entry, terms, dictionary) {
  const out = [];
  for (const { text, pinyinField } of textsOf(entry)) {
    // wordsIn lists the refs first, in order, so the i-th ref's sense is senses[i].
    const senses = refSenses(text, dictionary);
    wordsIn(text, terms, { pinyinField }).forEach(({ id, token }, i) => out.push({ id, token, sense: senses[i]?.sense, text }));
  }
  return out;
}

// Words used in a lesson before the card that introduces them in that same lesson (the order of the lesson,
// not just the order of the lessons): a word may not show up in an earlier module, or earlier in its own, than
// its card. The cover picture (the "head" module) previews what the lesson teaches, so its sentence is
// reported apart (kind 'cover') and never counts as an early use. Lesson 1 is exempt, as in findEarlyWords.
//
// -> { problems: [{ lesson, key, module, kind: 'before-card' | 'cover', word, cardKey, cardModule, text }] }
export function findWordsBeforeCard(lessons, dictionary) {
  const terms = termIndex(dictionary);
  const cards = introductions(lessons);
  const problems = [];
  for (const lesson of lessons) {
    if (lesson.number === 1) continue;
    lesson.entries.forEach((entry, index) => {
      for (const { id, sense, text } of usesIn(entry, terms, dictionary)) {
        if (!id || !dictionary[id]) continue; // check-early-words reports it
        const card = cards.get(senseKey(id, sense));
        if (!card || card.lesson !== lesson.id || card.index <= index) continue;
        const word = `${dictionary[id].term}${sense ? ` (${sense})` : ''}`;
        const kind = entry.module === 'head' ? 'cover' : 'before-card';
        problems.push({ lesson: lesson.id, key: entry.key, module: entry.module ?? '', kind, word, cardKey: card.key, cardModule: card.module, text });
      }
    });
  }
  return { problems };
}

// The intros come before every lesson, so no dictionary word is "early" in
// them; but any pinyin word in them (a caption, an example, a blurb) must
// still be a dictionary word. -> [{ lesson, key, kind: 'not-in-dictionary', word, text }]
export function findUnknownWordsInIntros(intros, dictionary) {
  const terms = termIndex(dictionary);
  const problems = [];
  for (const intro of intros) {
    for (const entry of intro.entries) {
      for (const { text, pinyinField } of textsOf(entry)) {
        for (const { id, token } of wordsIn(text, terms, { pinyinField })) {
          if (!id || !dictionary[id]) problems.push({ lesson: intro.id, key: entry.key, kind: 'not-in-dictionary', word: id ?? token, text });
        }
      }
    }
  }
  return problems;
}

export function findEarlyWords(lessons, dictionary) {
  const terms = termIndex(dictionary);
  const home = new Map([...introductions(lessons)].map(([key, x]) => [key, x.number]));
  const problems = [];
  for (const lesson of lessons) {
    if (lesson.number === 1) continue;
    for (const entry of lesson.entries) {
      for (const { id, token, sense, text } of usesIn(entry, terms, dictionary)) {
        const base = { lesson: lesson.id, key: entry.key, text };
        const key = senseKey(id, sense);
        const word = id && dictionary[id] ? `${dictionary[id].term}${sense ? ` (${sense})` : ''}` : null;
        if (!id || !dictionary[id]) problems.push({ ...base, kind: 'not-in-dictionary', word: id ?? token });
        else if (!home.has(key)) problems.push({ ...base, kind: 'never-introduced', word });
        else if (home.get(key) > lesson.number) problems.push({ ...base, kind: 'early', word, home: home.get(key) });
      }
    }
  }
  return { home, problems };
}
