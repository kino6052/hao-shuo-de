// The book's outline: for every language, each chapter's id, type, title, number and file, in reading order,
// and the titles a {{title:ID}} ref shows. The app's first chunk carries only this (as virtual:book-outline,
// vite-plugin-outline.js); a chapter's text is fetched when it opens (src/lib/content-registry.js).
//
// Each title is worked out the way the chapter's own page works it out, by the same code:
//   a lesson, an intro, a flat *.ts chapter   chapterTitle() in src/lib/chapter-content.js
//   a *.yaml chapter                          its view from vite-plugin-chapter.js
//   a *.md chapter                            its front matter with the word refs resolved, as vite-plugin-markdown.js
//
//   node scripts/book-outline.js    print the outline as JSON
//
// outlineOf() takes the chapters already read, so a test can hand it a few; loadChapters() reads them from
// src/content/ (the files the app's globs pick up).

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { chapterTitle } from '../src/lib/chapter-content.js';
import { lessonNumber, BACK_MATTER_IDS, FINAL_EXAM_ID } from '../src/content/book.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');

const LANGS = ['eng', 'rus', 'zh'];
const LANG_KEYS = { eng: 'en', rus: 'ru', zh: 'zh' };
const TYPE_ORDER = { intro: 0, lesson: 1, dictionary: 3, 'sentence-builder': 3.5, 'word-builder': 3.6, 'word-map': 3.7, akinator: 3.8, appendix: 4 };

// Reading order: intros, then lessons (book.js), then the back matter in the
// order book.js lists it, then anything else by type and `order`.
function rank(meta) {
  if (meta.type === 'intro') return [0, meta.order || 0];
  if (meta.type === 'lesson') return [1, meta.order || 0];
  if (meta.id === FINAL_EXAM_ID) return [1, Infinity]; // right after the last lesson (Q8)
  const i = BACK_MATTER_IDS.indexOf(meta.id);
  if (i >= 0) return [2, i];
  return [3 + (TYPE_ORDER[meta.type] ?? 99), meta.order || 0];
}

// one chapter in the outline: what the sidebar, the page's heading and the router need, and where its text is
const entry = (meta, file) => ({
  id: meta.id,
  type: meta.type,
  title: meta.title,
  ...(meta.lessonNumber != null && { lessonNumber: meta.lessonNumber }),
  ...(meta.order != null && { order: meta.order }),
  file,
});

// chapters: { md: [{ file, meta }], yaml: [{ file, byLang }], ts: [{ file, meta, entries }] }, file relative to
// src/content/; refs: { wordIndex, wordCount } as the pages get them.
// -> { langs, sections: { lang: [entry] }, titles: { lang: { id: title } } }
export function outlineOf({ md = [], yaml = [], ts = [] }, refs = {}) {
  const lessons = ts.filter((c) => c.meta.type === 'lesson').map((c) => {
    const number = lessonNumber(c.meta.id);
    if (number === null) throw new Error(`Lesson "${c.meta.id}" isn't in src/content/book.js.`);
    return { ...c, meta: { ...c.meta, lessonNumber: number, order: number } };
  });
  const flat = ts.filter((c) => c.meta.type !== 'lesson');

  // the titles {{title:ID}} shows: an untranslated one falls back to English
  const titles = Object.fromEntries(LANGS.map((lang) => [lang, {}]));
  for (const lang of LANGS) {
    for (const c of lessons) {
      const title = chapterTitle(c.meta, c.entries, lang, refs);
      titles[lang][c.meta.id] = title === c.meta.id ? chapterTitle(c.meta, c.entries, 'eng', refs) : title;
    }
    for (const c of yaml) titles[lang][c.byLang[lang].meta.id] = c.byLang[lang].meta.title || c.byLang.eng.meta.title;
    for (const c of flat) {
      const t = c.entries.find((e) => e.type === 'title');
      titles[lang][c.meta.id] = (t?.[LANG_KEYS[lang]]?.length ? t[LANG_KEYS[lang]] : t?.en ?? [c.meta.id]).join(' ');
    }
  }
  for (const c of md) {
    const lang = c.meta.language || 'eng';
    if (titles[lang]) titles[lang][c.meta.id] = c.meta.title;
  }
  for (const lang of LANGS) for (const [id, title] of Object.entries(titles.eng)) titles[lang][id] ??= title;

  // markdown is one file per language; the other chapters are in every language
  const sections = Object.fromEntries(LANGS.map((lang) => [lang, []]));
  for (const c of md) (sections[c.meta.language || 'eng'] ??= []).push(entry(c.meta, c.file));
  const flatRefs = { ...refs, chapterTitles: Object.fromEntries(LANGS.map((lang) => [lang, new Map(Object.entries(titles[lang]))])) };
  for (const lang of LANGS) {
    for (const c of yaml) sections[lang].push(entry(c.byLang[lang].meta, c.file));
    for (const c of lessons) sections[lang].push(entry({ ...c.meta, title: chapterTitle(c.meta, c.entries, lang, refs) }, c.file));
    for (const c of flat) sections[lang].push(entry({ ...c.meta, title: chapterTitle(c.meta, c.entries, lang, flatRefs) }, c.file));
  }
  for (const list of Object.values(sections)) {
    list.sort((a, b) => {
      const [ga, oa] = rank(a);
      const [gb, ob] = rank(b);
      return ga - gb || oa - ob;
    });
  }
  return { langs: Object.keys(sections).sort(), sections, titles };
}

// -> the chapters in src/content/, read as outlineOf() takes them, and the word refs the pages resolve with
export async function loadChapters() {
  const [{ listContentFiles }, { loadWordIndex, loadDictionaryWordCount, resolveWordRefs }, { transformChapterSource }, { default: matter }] = await Promise.all([
    import('./list-content-files.js'),
    import('./word-refs.js'),
    import('../vite-plugin-chapter.js'),
    import('gray-matter'),
  ]);
  const refs = { wordIndex: loadWordIndex(), wordCount: loadDictionaryWordCount() };
  const files = listContentFiles(CONTENT_DIR);
  const read = (file) => readFileSync(resolve(CONTENT_DIR, file), 'utf-8');
  const md = files
    .filter((f) => /^[^/]+\.md$/.test(f))
    .map((file) => ({ file, meta: matter(resolveWordRefs(read(file), refs.wordIndex, refs.wordCount)).data }));
  const yaml = files.filter((f) => /^[^/]+\.ya?ml$/.test(f)).map((file) => ({ file, ...transformChapterSource(read(file), refs) }));
  const tsFiles = files.filter((f) => /^(?:[^/]+\.ts|lessons\/[^/]+\/index\.ts|intros\/[^/]+\/index\.ts)$/.test(f));
  const ts = await Promise.all(tsFiles.map(async (file) => {
    const m = await import(pathToFileURL(resolve(CONTENT_DIR, file)));
    return { file, meta: m.meta, entries: m.default };
  }));
  return { chapters: { md, yaml, ts }, refs };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { chapters, refs } = await loadChapters();
  process.stdout.write(JSON.stringify(outlineOf(chapters, refs)));
}
