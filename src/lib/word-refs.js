// Resolves two kinds of {{...}} references in chapter content:
//   {{word:ID}}       -- the CURRENT pinyin term for a dictionary word
//                        (src/data/words/ID.ts). This is what lets a word's
//                        spelling change in one file and every chapter that
//                        references it by id pick up the new term, instead
//                        of a find-and-replace across lesson files.
//   {{Word:ID}}       -- same, but capitalizes the term's first letter, for
//                        sentence-initial use (e.g. {{Word:hao3}} -> "Hǎo").
//   {{light:ID}}      -- the term with no tone mark: the light (neutral)
//                        tone a syllable takes at the end of some words
//                        (dōng-{{light:xi1}} -> dōng-xi, "thing", where
//                        dōng-xī would be "east and west"). Still a use of
//                        the word. {{Light:ID}} capitalizes.
//   {{dictionaryCount}} -- the CURRENT total word count of the dictionary,
//                        so prose stating "N words" never drifts out of
//                        sync as words are added or removed.
//   {{lesson:ID}}     -- the CURRENT number of a lesson (src/content/book.js),
//                        so "Lesson {{lesson:numbers}}" stays right when
//                        lessons move.
//   {{title:ID}}      -- any chapter's title, for intro-3's table of
//                        contents. Only works where the caller passes
//                        `chapterTitles` (src/lib/content-registry.js).
//
// Every script and component that reads word references uses the parser
// below (wordRefRe, wordRefIds, replaceWordRefs, soleWordRef), so the syntax
// lives in one place.
//
// Pure and environment-agnostic (no Node/fs APIs) so it can be imported from
// both the browser bundle (src/lib/chapter-content.js, for *.ts chapters)
// and the Node build scripts (scripts/word-refs.js, for *.yaml chapters).

import { LESSON_NUMBERS } from '../content/book.js';

const WORD_REF_SOURCE = String.raw`\{\{(word|Word|light|Light):([a-z0-9_-]+)\}\}`;
const COUNT_REF_RE = /\{\{dictionaryCount\}\}/g;
const LESSON_REF_RE = /\{\{lesson:([a-z0-9-]+)\}\}/g;
const TITLE_RE = /\{\{title:([a-z0-9-]+)\}\}/g;

// -> text with every {{lesson:ID}} (and, given titles, {{title:ID}}) resolved.
export function resolveLessonRefs(text, chapterTitles) {
  return text
    .replace(LESSON_REF_RE, (full, id) => {
      if (!LESSON_NUMBERS.has(id)) {
        throw new Error(`Unknown lesson id "${id}" referenced as ${full}. Check src/content/book.js.`);
      }
      return String(LESSON_NUMBERS.get(id));
    })
    .replace(TITLE_RE, (full, id) => {
      const title = chapterTitles?.get(id);
      if (title === undefined) throw new Error(`No title for chapter "${id}" (${full}).`);
      return title;
    });
}

// -> a fresh global regex over word refs: match[1] the kind (word, Word,
// light, Light), match[2] the id. Fresh each call, since a /g regex keeps
// state between uses.
export const wordRefRe = () => new RegExp(WORD_REF_SOURCE, 'g');

// -> the ids of every word ref in text, in order, repeats kept.
export const wordRefIds = (text) => [...String(text).matchAll(wordRefRe())].map((m) => m[2]);

// -> text with each word ref replaced by fn(id, kind, full).
export const replaceWordRefs = (text, fn) => String(text).replace(wordRefRe(), (full, kind, id) => fn(id, kind, full));

// -> the id when text is exactly one word ref of any kind, else null.
export function onlyWordRef(text) {
  return new RegExp(`^${WORD_REF_SOURCE}$`).exec(String(text ?? ''))?.[2] ?? null;
}

// -> the id when text is exactly one {{word:ID}} (a vocabulary card's term), else null.
export function soleWordRef(text) {
  const m = new RegExp(`^${WORD_REF_SOURCE}$`).exec(String(text ?? ''));
  return m && m[1] === 'word' ? m[2] : null;
}

// -> pinyin with its tone marks removed (ü kept): dōng -> dong.
export const toneless = (pinyin) => pinyin.normalize('NFD').replace(/[\u0300\u0301\u0304\u030C]/g, '').normalize('NFC');

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// -> how a ref of this kind writes the term.
export function refTerm(term, kind) {
  const t = kind === 'light' || kind === 'Light' ? toneless(term) : term;
  return kind === 'Word' || kind === 'Light' ? capitalize(t) : t;
}

export function resolveWordRefs(text, index, wordCount, chapterTitles) {
  return replaceWordRefs(resolveLessonRefs(text, chapterTitles), (id, kind, full) => {
      if (!index.has(id)) {
        throw new Error(
          `Unknown word id "${id}" referenced as ${full}. Check src/data/words/ -- there must be a ${id}.ts.`,
        );
      }
      return refTerm(index.get(id), kind);
    })
    .replace(COUNT_REF_RE, () => {
      if (wordCount === undefined) {
        throw new Error('{{dictionaryCount}} used but no wordCount was passed to resolveWordRefs.');
      }
      return String(wordCount);
    });
}
