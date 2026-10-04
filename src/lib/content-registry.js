import dictionaryData from '../data/dictionary.json';
import { countDictionaryWords, buildWordIndex } from './dictionary-stats.js';
import { buildTsChapterView } from './chapter-content.js';
import { lessonNumber, BACK_MATTER_IDS } from '../content/book.js';

const mdModules = import.meta.glob('../content/*.md', { eager: true });
const chapterModules = import.meta.glob('../content/*.{yaml,yml}', { eager: true });
// Lessons live one per folder (../content/lessons/<id>/index.ts), while
// other *.ts chapters (intro-*) sit flat directly in content/. Only
// index.ts is a chapter module -- a lesson folder's module files and
// practice.ts (see src/lib/lesson.ts) are its building blocks, not separate
// chapters, so the glob must not also pick those up.
const lessonModules = import.meta.glob('../content/lessons/*/index.ts', { eager: true });
const flatTsModules = import.meta.glob('../content/*.ts', { eager: true });

const TYPE_ORDER = { intro: 0, lesson: 1, dictionary: 3, "sentence-builder": 3.5, "word-builder": 3.6, appendix: 4 };
const LANGS = ['eng', 'rus', 'zh'];

const wordRefs = { wordIndex: buildWordIndex(dictionaryData), wordCount: countDictionaryWords(dictionaryData) };

// Markdown sections are already language-specific (one file per language).
// Chapter (YAML) modules instead export one view per language from a single
// source file -- same `id`, present in every language's section list. New-
// style TS chapters (see src/lib/chapter-content.js) export raw `{ meta,
// default: entries }` and are transformed into that same per-language shape
// here rather than by a Vite transform plugin, since plain *.ts needs none.
const singleLangSections = Object.values(mdModules).map(m => m.default);
const multiLangSections = Object.values(chapterModules).map(m => m.default);
const tsView = (meta, entries, refs) => ({
  byLang: Object.fromEntries(LANGS.map(lang => [lang, buildTsChapterView(meta, entries, lang, refs)])),
});
// A lesson's number and order come from its position in src/content/book.js,
// never from the lesson itself, so lessons can move without being edited.
const lessonSections = Object.values(lessonModules).map(m => {
  const number = lessonNumber(m.meta.id);
  if (number === null) throw new Error(`Lesson "${m.meta.id}" isn't in src/content/book.js.`);
  return tsView({ ...m.meta, lessonNumber: number, order: number }, m.default, wordRefs);
});
// Every chapter's title, by language, for {{title:ID}} (intro-3's table of
// contents). Lessons, markdown, and YAML chapters are built first; a flat TS
// chapter's title is read straight from its title entry. An untranslated
// title falls back to English.
const LANG_KEYS = { eng: 'en', rus: 'ru', zh: 'zh' };
const chapterTitles = Object.fromEntries(LANGS.map(lang => [lang, new Map()]));
for (const lang of LANGS) {
  for (const s of lessonSections) {
    const view = s.byLang[lang];
    chapterTitles[lang].set(view.meta.id, view.meta.title === view.meta.id ? s.byLang.eng.meta.title : view.meta.title);
  }
  for (const c of multiLangSections) chapterTitles[lang].set(c.byLang[lang].meta.id, c.byLang[lang].meta.title || c.byLang.eng.meta.title);
  for (const m of Object.values(flatTsModules)) {
    const title = m.default.find(e => e.type === 'title');
    chapterTitles[lang].set(m.meta.id, (title?.[LANG_KEYS[lang]]?.length ? title[LANG_KEYS[lang]] : title?.en ?? [m.meta.id]).join(' '));
  }
}
for (const s of singleLangSections) {
  const lang = s.meta.language || 'eng';
  chapterTitles[lang]?.set(s.meta.id, s.meta.title);
}
for (const lang of LANGS) {
  for (const [id, title] of chapterTitles.eng) if (!chapterTitles[lang].has(id)) chapterTitles[lang].set(id, title);
}
const tsSections = [
  ...lessonSections,
  ...Object.values(flatTsModules).map(m => tsView(m.meta, m.default, { ...wordRefs, chapterTitles })),
];

const byLang = {};
for (const lang of LANGS) byLang[lang] = [];

for (const s of singleLangSections) {
  const lang = s.meta.language || 'eng';
  if (!byLang[lang]) byLang[lang] = [];
  byLang[lang].push(s);
}

for (const chapter of [...multiLangSections, ...tsSections]) {
  for (const lang of LANGS) {
    byLang[lang].push(chapter.byLang[lang]);
  }
}

// Reading order: intros, then lessons (book.js), then the back matter in the
// order book.js lists it, then anything else by type and `order`.
function rank(meta) {
  if (meta.type === 'intro') return [0, meta.order || 0];
  if (meta.type === 'lesson') return [1, meta.order || 0];
  const i = BACK_MATTER_IDS.indexOf(meta.id);
  if (i >= 0) return [2, i];
  return [3 + (TYPE_ORDER[meta.type] ?? 99), meta.order || 0];
}
for (const lang of Object.keys(byLang)) {
  byLang[lang].sort((a, b) => {
    const [ga, oa] = rank(a.meta);
    const [gb, ob] = rank(b.meta);
    return ga - gb || oa - ob;
  });
}

export const AVAILABLE_LANGS = Object.keys(byLang).sort();

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
