// A *.ts chapter's view, built when the chapter opens (src/lib/content-registry.js fetches this module with
// the first one): the word refs and the chapter builder stay out of the app's first chunk.

import dictionaryData from '../data/dictionary.ts';
import { countDictionaryWords, buildWordIndex } from './dictionary-stats.js';
import { buildTsChapterView } from './chapter-content.js';

const wordRefs = { wordIndex: buildWordIndex(dictionaryData), wordCount: countDictionaryWords(dictionaryData) };
const titleMaps = new WeakMap(); // the outline's titles -> { lang: Map(id -> title) }, made once per outline

// m: the chapter's module ({ meta, default: entries }); meta: its outline entry; titles: the outline's
// { lang: { id: title } }, which only a flat chapter's {{title:ID}} refs use (intro-3's table of contents).
// A lesson's number and order come from its place in src/content/book.js, by way of the outline.
export function tsChapterView(m, meta, lang, titles) {
  if (meta.type === 'lesson') {
    return buildTsChapterView({ ...m.meta, lessonNumber: meta.lessonNumber, order: meta.order }, m.default, lang, wordRefs);
  }
  if (!titleMaps.has(titles)) titleMaps.set(titles, Object.fromEntries(Object.entries(titles).map(([l, byId]) => [l, new Map(Object.entries(byId))])));
  return buildTsChapterView(m.meta, m.default, lang, { ...wordRefs, chapterTitles: titleMaps.get(titles) });
}
