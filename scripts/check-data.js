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
//   6. Every grammar pattern (src/data/grammar/) is named after its file, covers
//      real coverage items, is taught in a real module, has rules that use only
//      real words, and every example of it parses by that pattern.
//
//   npm run check-data

import { WORDS } from '../src/data/words/index.ts';
import { ENTRIES } from '../src/data/composites/index.ts';
import { GROUPS } from '../src/data/coverage/index.ts';
import CATEGORIES from '../src/data/maps/categories.ts';
import ANTONYMS from '../src/data/maps/antonyms.ts';
import SYNONYMS from '../src/data/maps/synonyms.ts';
import CONNECTIONS from '../src/data/maps/connections.ts';
import STRUCTURE from '../src/data/maps/structure.ts';
import { buildData } from './build-data.js';
import { compositeFileName } from './data-files.js';
import { dataFiles } from './build-data.js';
import { wordRefIds } from '../src/lib/word-refs.js';
import { paraphraseProblems, paraphraseCounts, paraphraseStatus, PARAPHRASES_REQUIRED } from '../src/lib/paraphrase.js';
import { kindsProblems, needsBuiltForm, undecidedForms, SPELLED_NEED_BUILT_FORM } from '../src/lib/form-kinds.js';
import { PATTERNS } from '../src/data/grammar/index.ts';
import { createParser, patternsOf } from '../src/lib/grammar/parser.js';
import { pinyinToRefs } from '../src/lib/pinyin-refs.js';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const errors = [];
const ids = new Set(Object.keys(WORDS));

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
  for (const [cls, c] of Object.entries(w.classes ?? {})) {
    const at = `${where} class "${cls}"`;
    if (c === 'main') continue;
    for (const l of ['eng', 'rus']) if (!c?.why?.[l]) errors.push(`${at}: no why.${l}`);
    if (!c?.example || typeof c.example !== 'string') errors.push(`${at}: no example sentence`);
    if (c?.proposed !== undefined && typeof c.proposed !== 'boolean') errors.push(`${at}: proposed must be true or left out`);
  }
  for (const r of wordRefIds(JSON.stringify([w.definition, w.necessity]))) if (!ids.has(r)) errors.push(`${where}: refers to unknown word ${r}`);
  for (const p of paraphraseProblems(id, w, WORDS)) errors.push(`${where}: ${p}`);
}

// 2b. paraphrases: every word says itself without the word, or is marked an atom (K3)
const counts = paraphraseCounts(WORDS);
if (PARAPHRASES_REQUIRED && counts.none) {
  const names = Object.entries(WORDS).filter(([, w]) => paraphraseStatus(w) === 'none').map(([id]) => id);
  errors.push(`${counts.none} word(s) have neither a paraphrase nor an atom mark: ${names.slice(0, 12).join(', ')}${names.length > 12 ? ', ...' : ''}`);
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
    for (const ref of wordRefIds(forms.join(' '))) if (!ids.has(ref)) errors.push(`maps/${name}.ts: ${id}'s phrase names unknown word ${ref}`);
  }
}
// structure: every end is a word or a composite, opposite kinds belong to real pairs, no group written twice
{
  const zhs = new Set(ENTRIES.map((e) => e.zh));
  const known = (e) => ids.has(e) || zhs.has(e);
  const KINDS = ['either-or', 'more-or-less', 'other-side', 'undoing', 'by-not'];
  const pairs = new Set(ANTONYMS.pairs.map(([a, b]) => `${a}|${b}`));
  for (const [k, kind] of Object.entries(STRUCTURE.oppositeKinds)) {
    if (!pairs.has(k)) errors.push(`maps/structure.ts: opposite kind for "${k}", which is not a pair of antonyms.ts (in that order)`);
    if (!KINDS.includes(kind)) errors.push(`maps/structure.ts: "${k}" has the unknown opposite kind "${kind}"`);
  }
  const seen = new Set();
  const note = (where, ends, why) => {
    for (const e of ends) if (!known(e)) errors.push(`maps/structure.ts ${where}: "${e}" is neither a word nor a composite`);
    if (!String(why ?? '').trim()) errors.push(`maps/structure.ts ${where}: no why`);
    if (new Set(ends).size !== ends.length) errors.push(`maps/structure.ts ${where}: an end is listed twice`);
    const k = where + ' ' + [...ends].sort().join(' ');
    if (seen.has(k)) errors.push(`maps/structure.ts ${where}: written twice`);
    seen.add(k);
  };
  for (const o of STRUCTURE.opposites ?? []) {
    note(`opposite ${o.a}|${o.b}`, [o.a, o.b], o.why);
    if (!KINDS.includes(o.kind)) errors.push(`maps/structure.ts opposite ${o.a}|${o.b}: unknown kind "${o.kind}"`);
  }
  for (const p of STRUCTURE.parts) note(`part-of ${p.whole}`, [p.whole, ...p.parts], p.why);
  for (const g of STRUCTURE.groups) {
    if (g.members.length < 2) errors.push(`maps/structure.ts ${g.kind} [${g.members}]: needs two or more members`);
    note(`${g.kind} [${g.members.slice(0, 3)}…]`, g.members, g.why);
  }
  for (const f of STRUCTURE.families) note(`family ${f.name}`, Object.values(f.facets).flat(), f.why);
}
// connections: two or more known words, a why, no connection written twice
{
  const seen = new Set();
  for (const c of CONNECTIONS) {
    const here = c.words.join(', ');
    for (const w of c.words) if (!ids.has(w)) errors.push(`maps/connections.ts: [${here}] names unknown word ${w}`);
    if (new Set(c.words).size < 2) errors.push(`maps/connections.ts: [${here}] needs two or more different words`);
    if (!String(c.why ?? '').trim()) errors.push(`maps/connections.ts: [${here}] has no why`);
    const k = [...new Set(c.words)].sort().join(' ');
    if (seen.has(k)) errors.push(`maps/connections.ts: [${here}] written twice`);
    seen.add(k);
  }
}
for (const g of GROUPS) for (const item of g.items) {
  for (const w of item.words) if (!ids.has(w)) errors.push(`coverage/${g.key}.ts ${item.key}: unknown word ${w}`);
  for (const ref of wordRefIds(item.forms.join(' '))) if (!ids.has(ref)) errors.push(`coverage/${g.key}.ts ${item.key}: form names unknown word ${ref}`);
}

// 5. composite file names
const files = dataFiles('composites', ['meta.ts']);
ENTRIES.forEach((e, i) => {
  const want = compositeFileName(e);
  if (files[i] !== want) errors.push(`composites/${files[i]}: should be named ${want}`);
});

// 5b. built or spelled (K9): an explicit `kinds` is well formed; the compounds the rule can't decide are counted
let kindsToReview = 0;
const bareSpelled = [];
for (const e of ENTRIES) {
  for (const p of kindsProblems(e)) errors.push(`composites/${compositeFileName(e)}: ${p}`);
  if (undecidedForms(e).length) kindsToReview++;
  if (needsBuiltForm(e)) bareSpelled.push(e.zh);
}
// K23: a spelled form with no built form beside it is hidden vocabulary with nothing to fall back on (a failure since K4)
if (SPELLED_NEED_BUILT_FORM && bareSpelled.length) errors.push(`${bareSpelled.length} composite(s) have a spelled form and no built form (K23): ${bareSpelled.slice(0, 12).join(', ')}${bareSpelled.length > 12 ? ', ...' : ''}`);

// 6. grammar patterns
const patternFiles = dataFiles('grammar');
const coverageItems = new Set(GROUPS.flatMap((g) => g.items.map((i) => `${g.key}:${i.key}`)));
const LESSONS = fileURLToPath(new URL('../src/content/lessons/', import.meta.url));
const parser = createParser({ patterns: PATTERNS, words: WORDS, composites: ENTRIES });
for (const e of parser.errors) errors.push(`grammar/: ${e}`);
PATTERNS.forEach((p, i) => {
  const where = `grammar/${patternFiles[i]}`;
  if (`${p.id}.ts` !== patternFiles[i]) errors.push(`${where}: pattern("${p.id}") doesn't match the file name`);
  for (const l of ['eng', 'rus']) if (!p.meaning?.[l]) errors.push(`${where}: no meaning.${l}`);
  for (const c of p.covers) if (!coverageItems.has(c)) errors.push(`${where}: covers "${c}", which is not a coverage item`);
  if (p.taught && !existsSync(resolve(LESSONS, `${p.taught}.ts`))) errors.push(`${where}: taught in "${p.taught}", which is not a lesson module`);
  for (const ref of wordRefIds(p.template.hsd)) if (!ids.has(ref)) errors.push(`${where}: template names unknown word ${ref}`);
  if (!p.examples.length) errors.push(`${where}: no examples`);
  for (const [pinyin] of p.examples) {
    let r;
    try {
      r = parser.parse(pinyinToRefs(pinyin, WORDS), { maxTrees: 500 });
    } catch (err) {
      errors.push(`${where}: example "${pinyin}": ${err.message}`);
      continue;
    }
    if (!r.ok) errors.push(`${where}: example "${pinyin}" does not parse`);
    else if (!r.trees.some((t) => patternsOf(t).includes(p.id))) errors.push(`${where}: example "${pinyin}" parses, but not by this pattern`);
  }
});

if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\ncheck-data: ${errors.length} problem(s).`);
  process.exit(1);
}
console.log(`check-data: OK -- ${ids.size} words, ${ENTRIES.length} composites, ${GROUPS.length} coverage groups, ${PATTERNS.length} grammar patterns.`);
if (bareSpelled.length) console.log(`check-data: ${bareSpelled.length} composite(s) have a spelled form and no built form (K23, potentially dangerous); set SPELLED_NEED_BUILT_FORM (src/lib/form-kinds.js) to true to make this a failure.`);
if (kindsToReview) console.log(`check-data: ${kindsToReview} composite(s) have a Mandarin compound still to be marked built or spelled (review: /__review/?kinds=1).`);
if (counts.none) {
  console.log(
    `check-data: ${counts.none} of ${counts.total} words have neither a paraphrase nor an atom mark yet (${counts.paraphrase} paraphrased, ${counts.clumsy} clumsy, ${counts.atom} atoms); the gate fails on this once PARAPHRASES_REQUIRED (src/lib/paraphrase.js) is true.`,
  );
}
