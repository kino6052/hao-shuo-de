// Resolves two kinds of {{...}} references in chapter content:
//   {{word:ID}}       -- the CURRENT pinyin term for a dictionary word. This
//                        is what lets a word's spelling (or definition)
//                        change in src/data/dictionary.json and have every
//                        chapter that references it by id pick up the new
//                        term automatically, instead of requiring a manual
//                        find-and-replace across lesson files. dictionary.json
//                        is the single source of truth for every word's
//                        spelling; lesson content should reference words by
//                        id via this mechanism rather than hardcoding pinyin.
//   {{Word:ID}}       -- same, but capitalizes the term's first letter, for
//                        sentence-initial use (e.g. {{Word:hao3}} -> "Hǎo").
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
// Pure and environment-agnostic (no Node/fs APIs) so it can be imported from
// both the browser bundle (src/lib/chapter-content.js, for *.ts chapters)
// and the Node build scripts (scripts/word-refs.js, for *.yaml chapters).

import { LESSON_NUMBERS } from '../content/book.js';

const WORD_REF_RE = /\{\{(word|Word):([a-z0-9-]+)\}\}/g;
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

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function resolveWordRefs(text, index, wordCount, chapterTitles) {
  return resolveLessonRefs(text, chapterTitles)
    .replace(WORD_REF_RE, (full, kind, id) => {
      if (!index.has(id)) {
        throw new Error(
          `Unknown word id "${id}" referenced as ${full}. Check src/data/dictionary.json -- it must have a "${id}" key under "words".`,
        );
      }
      const term = index.get(id);
      return kind === 'Word' ? capitalize(term) : term;
    })
    .replace(COUNT_REF_RE, () => {
      if (wordCount === undefined) {
        throw new Error('{{dictionaryCount}} used but no wordCount was passed to resolveWordRefs.');
      }
      return String(wordCount);
    });
}
