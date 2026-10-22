// The book in the app: its outline up front, each chapter's text when the chapter opens.
//
// The outline (virtual:book-outline, worked out by scripts/book-outline.js) gives every chapter's id, type,
// title, number and file per language, in reading order: enough for the sidebar, the router and a page's
// heading. The chapters themselves are fetched by loadChapter(), each in a chunk of its own, so the first
// chunk carries none of the lessons' text.
//
// Three kinds of chapter file, all under src/content/:
//   *.md                one file per language; vite-plugin-markdown.js makes it the page's view
//   *.yaml              every language in one file; vite-plugin-chapter.js makes a view per language
//   *.ts                a lesson (lessons/<id>/index.ts), an intro (intros/<id>/index.ts) or a flat chapter;
//                       src/lib/chapter-view.js builds its view (only index.ts is a chapter: a lesson
//                       folder's other files are its building blocks, see src/lib/lesson.ts)

import outline from 'virtual:book-outline';

const files = {
  ...import.meta.glob('../content/*.md'),
  ...import.meta.glob('../content/*.{yaml,yml}'),
  ...import.meta.glob(['../content/lessons/*/index.ts', '../content/*.ts', '../content/intros/*/index.ts']),
};

export const AVAILABLE_LANGS = outline.langs;

// A section is { meta } with the outline's entry as meta until its chapter is loaded.
const byLang = Object.fromEntries(Object.entries(outline.sections).map(([lang, list]) => [lang, list.map((meta) => ({ meta }))]));

export function getSections(lang) {
  return byLang[lang] || byLang.eng || [];
}

export function buildToc(sections) {
  return sections.map(s => ({
    id: s.meta.id,
    type: s.meta.type,
    tocLabel: s.meta.type === 'lesson'
      ? `${s.meta.lessonNumber} · ${s.meta.title}`
      : s.meta.title,
  }));
}

// lang/id -> the chapter's view once loaded, and the loads under way
const views = new Map();
const loading = new Map();

// -> the chapter's view if it is loaded already, else undefined
export function loadedChapter(lang, meta) {
  return views.get(`${lang}/${meta.id}`);
}

// -> a promise of the chapter's view: the same object the page rendered before the split. A failed load is
// forgotten, so the next visit tries again.
export function loadChapter(lang, meta) {
  const key = `${lang}/${meta.id}`;
  if (views.has(key)) return Promise.resolve(views.get(key));
  if (!loading.has(key)) {
    const load = files[`../content/${meta.file}`];
    if (!load) return Promise.reject(new Error(`No chapter file src/content/${meta.file}`));
    const view = Promise.all([load(), meta.file.endsWith('.ts') ? import('./chapter-view.js') : null])
      .then(([m, builder]) => {
        if (meta.file.endsWith('.md')) return m.default;
        if (!builder) return m.default.byLang[lang];
        return builder.tsChapterView(m, meta, lang, outline.titles);
      })
      .then((v) => (views.set(key, v), v))
      .finally(() => loading.delete(key));
    loading.set(key, view);
  }
  return loading.get(key);
}
