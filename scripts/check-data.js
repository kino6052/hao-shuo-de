#!/usr/bin/env node
// Checks the data folders (src/data/) hold together, so a word or composite
// is added, changed or removed by touching its own file and nothing silently
// goes stale:
//
//   1. The generated index files match their folders (scripts/build-data.js).
//   2. Every word file is valid: its id matches its file name, its fields are
//      filled in (a `word add` TODO fails here), its senses are complete.
//   3. Every word sits in exactly one category leaf, and every leaf names
//      real words.
//   4. Antonym/synonym pairs and phrases, and coverage items, name real words.
//   5. Every composite file is named <toneless pinyin>-<hanzi>.ts.
//
//   npm run check-data

import { WORDS } from '../src/data/words/index.ts';
import { ENTRIES } from '../src/data/composites/index.ts';
import { GROUPS } from '../src/data/coverage/index.ts';
import CATEGORIES from '../src/data/maps/categories.ts';
import ANTONYMS from '../src/data/maps/antonyms.ts';
import SYNONYMS from '../src/data/maps/synonyms.ts';
import { buildData } from './build-data.js';
import { compositeFileName } from './data-files.js';
import { dataFiles } from './build-data.js';

const errors = [];
const ids = new Set(Object.keys(WORDS));
const refIds = (s) => [...String(s).matchAll(/\{\{(?:word|Word|light):([^}]+)\}\}/g)].map((m) => m[1]);

// 1. indexes
for (const path of buildData({ check: true })) errors.push(`${path.split('/src/')[1]}: out of date -- run npm run data`);

// 2. word files
const TODO = /\bTODO\b/;
for (const [id, w] of Object.entries(WORDS)) {
  const where = `words/${id}.ts`;
  if (w.id !== id) errors.push(`${where}: word("${w.id}") doesn't match the file name`);
  for (const k of ['term', 'hanzi']) if (!w[k]) errors.push(`${where}: no ${k}`);
  for (const k of ['pos', 'definition']) for (const l of ['eng', 'rus', 'zh']) {
    if (!w[k]?.[l]) errors.push(`${where}: no ${k}.${l}`);
    else if (TODO.test(w[k][l])) errors.push(`${where}: ${k}.${l} is still TODO`);
  }
  if (!w.necessity || ![1, 2, 3, 4, 5].includes(w.necessity.index)) errors.push(`${where}: necessity.index must be 1-5`);
  for (const l of ['eng', 'rus']) {
    if (!w.necessity?.[l]) errors.push(`${where}: no necessity.${l}`);
    else if (TODO.test(w.necessity[l])) errors.push(`${where}: necessity.${l} is still TODO`);
  }
  for (const [key, s] of Object.entries(w.senses ?? {})) {
    const at = `${where} sense "${key}"`;
    if (!s.hanzi) errors.push(`${at}: no hanzi`);
    for (const l of ['eng', 'rus']) {
      if (!s[l]) errors.push(`${at}: no ${l} meaning`);
      if (!s.why?.[l]) errors.push(`${at}: no why.${l}`);
    }
    if (!s.compounds?.length) errors.push(`${at}: no compounds listed`);
    for (const c of s.compounds ?? []) {
      const parts = c.split(' ');
      if (!parts.includes(id)) errors.push(`${at}: compound "${c}" doesn't contain ${id}`);
      for (const p of parts) if (!ids.has(p)) errors.push(`${at}: compound "${c}" names unknown word ${p}`);
    }
  }
  for (const r of refIds(JSON.stringify([w.definition, w.necessity]))) if (!ids.has(r)) errors.push(`${where}: refers to unknown word ${r}`);
}

// 3. categories
const placed = new Map();
const walk = (c, path) => {
  const here = [...path, c.key];
  for (const w of c.wordIds ?? []) {
    if (!ids.has(w)) errors.push(`maps/categories.ts ${here.join(' > ')}: unknown word ${w}`);
    placed.set(w, [...(placed.get(w) ?? []), here.join(' > ')]);
  }
  for (const ch of c.children ?? []) walk(ch, here);
};
CATEGORIES.forEach((c) => walk(c, []));
for (const id of ids) {
  const at = placed.get(id) ?? [];
  if (!at.length) errors.push(`words/${id}.ts: in no category -- add it to a leaf in maps/categories.ts`);
  else if (at.length > 1) errors.push(`words/${id}.ts: in ${at.length} categories (${at.join('; ')})`);
}

// 4. relations and coverage
for (const [name, r] of [['antonyms', ANTONYMS], ['synonyms', SYNONYMS]]) {
  const seen = new Set();
  for (const [a, b] of r.pairs) {
    for (const w of [a, b]) if (!ids.has(w)) errors.push(`maps/${name}.ts: pair [${a}, ${b}] names unknown word ${w}`);
    const k = [a, b].sort().join(' ');
    if (seen.has(k)) errors.push(`maps/${name}.ts: pair [${a}, ${b}] written twice`);
    seen.add(k);
  }
  for (const [id, forms] of Object.entries(r.phrases)) {
    if (!ids.has(id)) errors.push(`maps/${name}.ts: phrases for unknown word ${id}`);
    for (const ref of refIds(forms.join(' '))) if (!ids.has(ref)) errors.push(`maps/${name}.ts: ${id}'s phrase names unknown word ${ref}`);
  }
}
for (const g of GROUPS) for (const item of g.items) {
  for (const w of item.words) if (!ids.has(w)) errors.push(`coverage/${g.key}.ts ${item.key}: unknown word ${w}`);
  for (const ref of refIds(item.forms.join(' '))) if (!ids.has(ref)) errors.push(`coverage/${g.key}.ts ${item.key}: form names unknown word ${ref}`);
}

// 5. composite file names
const files = dataFiles('composites', ['meta.ts']);
ENTRIES.forEach((e, i) => {
  const want = compositeFileName(e);
  if (files[i] !== want) errors.push(`composites/${files[i]}: should be named ${want}`);
});

if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\ncheck-data: ${errors.length} problem(s).`);
  process.exit(1);
}
console.log(`check-data: OK -- ${ids.size} words, ${ENTRIES.length} composites, ${GROUPS.length} coverage groups.`);
