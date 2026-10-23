#!/usr/bin/env node
// Hanzi gate: with the default setting (pinyin, src/lib/settings.js) no page of the book shows a Chinese character.
// Hanzi appear only through the writing settings: src/components/Hsd.jsx for a sentence or a word, the <hsd-w>
// markup of word refs and {{hanzi:..}} for a note (src/lib/word-refs.js). Checks, in English and Russian (the
// Chinese book's own explanations are Chinese, so it is not checked):
//   chapters    every .ts chapter's page text as the page builds it (src/lib/chapter-content.js), and the .yaml and
//               .md chapters' text, with the {{hanzi:..}} notes, the markup's attributes (an audio-example's zh)
//               and the data fields (hanzi, ttsText) left out
//   data        the words' and composites' English and Russian text the dictionaries show (definitions, senses,
//               their notes)
//   interface   the sidebar, buttons and headings (src/lib/i18n.js)
//   components  src/app.jsx and src/components/*.jsx: no character written in them, and no hanzi field (hanzi, zh,
//               tts) shown straight as a child; only Hsd.jsx writes them
// Allowed: the logo's 好 (Sidebar.jsx) and the Chinese book's button 中 (i18n.js LANG_CONFIG).
//
//   npm run check-hanzi
//   npm run check-hanzi -- --summary    # counts per file only

import { readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import matter from 'gray-matter';
import { parse as parseYaml } from 'yaml';
import { listContentFiles } from './list-content-files.js';
import { buildTsChapterView } from '../src/lib/chapter-content.js';
import { buildWordIndex, countDictionaryWords } from '../src/lib/dictionary-stats.js';
import dictionaryData from '../src/data/dictionary.ts';
import { WORDS } from '../src/data/words/index.ts';
import { ENTRIES } from '../src/data/composites/index.ts';
import { UI } from '../src/lib/i18n.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');
const summary = process.argv.includes('--summary');

const HAN = /\p{Script=Han}/u;
const HAN_RUN = /\p{Script=Han}+/gu;
const problems = []; // { where, path, text }

// -> the text a reader sees of a string: no {{hanzi:..}} notes, no <hsd-h> notes, no tags (so no attributes)
const visible = (s) =>
  String(s)
    .replace(/\{\{hanzi:[^}]*\}\}/g, '')
    .replace(/<hsd-h>[\s\S]*?<\/hsd-h>/g, '')
    .replace(/<[^>]*>/g, ' ');

function report(where, path, text) {
  const s = visible(text);
  if (!HAN.test(s)) return;
  const m = HAN_RUN.exec(s);
  HAN_RUN.lastIndex = 0;
  const at = m.index;
  problems.push({ where, path, text: `…${s.slice(Math.max(0, at - 40), at + m[0].length + 40).replace(/\s+/g, ' ')}…` });
}

// walks an object's strings; `skip(key)` leaves a key's whole subtree out
function walk(value, where, skip, path = '') {
  if (typeof value === 'string') return report(where, path, value);
  if (!value || typeof value !== 'object') return;
  for (const [k, v] of Object.entries(value)) {
    if (skip(k)) continue;
    walk(v, where, skip, path ? `${path}.${k}` : k);
  }
}

// --- chapters ---

const refs = { wordIndex: buildWordIndex(dictionaryData), wordCount: countDictionaryWords(dictionaryData) };
// intro-3's table of contents names chapters by {{title:ID}}: any title will do here
const anyTitle = { get: (id) => id };
const chapterTitles = { eng: anyTitle, rus: anyTitle };
const VIEW_SKIP = new Set(['ttsText', 'audioFile', 'refs', 'file', 'embed', 'link', 'meta']);
const DATA_SKIP = new Set(['zh', 'hanzi', 'ttsText', 'tts']);

const files = listContentFiles(CONTENT_DIR).sort();
for (const file of files.filter((f) => f.endsWith('.ts') && (!f.includes('/') || f.endsWith('/index.ts')))) {
  const m = await import(pathToFileURL(join(CONTENT_DIR, file)));
  if (!m.meta || !Array.isArray(m.default)) continue;
  for (const lang of ['eng', 'rus']) {
    const view = buildTsChapterView(m.meta, m.default, lang, { ...refs, chapterTitles });
    walk(view, `${file} (${lang})`, (k) => VIEW_SKIP.has(k));
    report(`${file} (${lang})`, 'title', view.meta.title);
  }
}
for (const file of files.filter((f) => /\.ya?ml$/.test(f))) {
  walk(parseYaml(readFileSync(join(CONTENT_DIR, file), 'utf-8')), file, (k) => DATA_SKIP.has(k));
}
for (const file of files.filter((f) => f.endsWith('.md'))) {
  const { data, content } = matter(readFileSync(join(CONTENT_DIR, file), 'utf-8'));
  if (data.language === 'zh') continue;
  content.split('\n').forEach((line, i) => report(file, `line ${i + 1 + (data.language ? 0 : 0)}`, line));
}

// --- data the dictionaries show ---

const TEXT_KEYS = new Set(['eng', 'rus', 'en', 'ru', 'literal']);
// only the English and Russian text under an entry (a word's definition.eng, a sense's why.rus, a composite's en)
function walkText(value, where, path = '', inText = false) {
  if (typeof value === 'string') return inText && report(where, path, value);
  if (!value || typeof value !== 'object') return;
  for (const [k, v] of Object.entries(value)) {
    if (DATA_SKIP.has(k) || k === 'pinyin' || k === 'hsd') continue;
    walkText(v, where, path ? `${path}.${k}` : k, inText || TEXT_KEYS.has(k));
  }
}
for (const [id, w] of Object.entries(WORDS)) walkText(w, `src/data/words/${id}.ts`);
for (const c of ENTRIES) walkText(c, `composite ${c.zh ? '(' + c.py + ')' : c.py}`);

// --- the interface ---

for (const lang of ['eng', 'rus']) {
  for (const [key, value] of Object.entries(UI[lang])) report(`src/lib/i18n.js (${lang})`, key, typeof value === 'function' ? String(value) : value);
}

// --- components ---

const ALLOWED = { 'src/components/Sidebar.jsx': '好' };
const HANZI_FIELD = /\b(?:hanzi|zh|tts|ttsText)\b/;
// -> the source without comments (// to the line's end, /* */ and {/* */})
const uncommented = (src) => src.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:'"`\\])\/\/.*$/gm, '$1');
const components = ['src/app.jsx', ...readdirSync(resolve(ROOT, 'src/components')).filter((f) => f.endsWith('.jsx')).map((f) => `src/components/${f}`)];
for (const file of components.filter((f) => f !== 'src/components/Hsd.jsx')) {
  const src = uncommented(readFileSync(resolve(ROOT, file), 'utf-8'));
  const lineOf = (index) => src.slice(0, index).split('\n').length;
  for (const m of src.matchAll(HAN_RUN)) {
    if ((ALLOWED[file] ?? '').includes(m[0])) continue;
    problems.push({ where: file, path: `line ${lineOf(m.index)}`, text: `a character written in the code: ${m[0]}` });
  }
  // an expression shown as a child: right after a tag's ">" (not an arrow's "=>"), or right after such an
  // expression, holding a hanzi field
  const child = /(?<!=)>\s*((?:\{(?:[^{}]|\{[^{}]*\})*\}\s*)+)/g;
  for (const m of src.matchAll(child)) {
    for (const expr of m[1].match(/\{(?:[^{}]|\{[^{}]*\})*\}/g) ?? []) {
      // not shown: a prop (hanzi={..} to Hsd, ttsText={..} to AudioButton), a string ("zh"), the condition before &&
      const own = expr
        .slice(1, -1)
        .replace(/\b[\w-]+=\{(?:[^{}]|\{[^{}]*\})*\}/g, '')
        .replace(/(["'])[^"'\n]*\1/g, '')
        .replace(/^[^<>{}&]*&&/, '');
      if (!HANZI_FIELD.test(own)) continue;
      problems.push({ where: file, path: `line ${lineOf(m.index)}`, text: `a hanzi field shown outside Hsd: ${expr.replace(/\s+/g, ' ').slice(0, 80)}` });
    }
  }
}

// --- report ---

const byWhere = new Map();
for (const p of problems) byWhere.set(p.where, [...(byWhere.get(p.where) ?? []), p]);
if (problems.length === 0) {
  console.log('check-hanzi: no hanzi on any page with the default setting.');
} else {
  for (const [where, list] of byWhere) {
    console.log(`${where}: ${list.length}`);
    if (!summary) for (const p of list) console.log(`  ${p.path}: ${p.text}`);
  }
  console.log(`\ncheck-hanzi: ${problems.length} place(s) in ${byWhere.size} file(s) show hanzi with the default setting.`);
  console.log('Fix: show a sentence through Hsd (src/components/Hsd.jsx), and write a note\'s characters as {{hanzi:..}}.');
  process.exit(1);
}
