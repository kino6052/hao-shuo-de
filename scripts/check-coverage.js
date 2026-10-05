#!/usr/bin/env node
// Checks that Hao-shuo-de can still say what it must (src/data/coverage/):
// the atoms of meaning (the NSM semantic primes), Aristotle's ten categories,
// and the core grammar and relationships.
//
//   1. Nothing is left out: the atoms are exactly the 65 primes, the
//      categories exactly Aristotle's ten, and the grammar exactly the core
//      list (scripts/coverage-canon.js keeps the lists, so deleting an item
//      from src/data/coverage/ fails here).
//   2. Every item has at least one Hao-shuo-de form, and every {{word:id}} in
//      its forms is a dictionary word. Its `words` -- the dictionary words
//      that carry it -- are dictionary words that appear in one of its forms.
//   (A word's `covers` -- "atoms:GOOD", "grammar:compare" -- is derived from
//   the items' `words` by src/data/dictionary.ts, so it can't disagree.)
//
// It also warns (without failing) about words that may be redundant, counting
// how many composite-dictionary entries (src/data/composites/) each word
// helps say. A word that builds 10 or more composites earns its place and
// isn't flagged. Of the rest, it flags a word that carries nothing here and
// has a necessity of 2 or less; one that carries nothing, has a necessity of
// 3 or less, and builds at most one composite; one whose every item another
// word carries too, with a necessity of 3 or less; and one with a single-word
// synonym, with a necessity of 3 or less. They're the first to look at when a
// better word needs the room.
//   3. An atom's `lesson`: one of its forms uses only words introduced by the
//      end of that lesson. A category's or grammar item's `taught`
//      ("lesson/module"): that lesson has that module, and one of the forms
//      uses only words introduced by the end of that lesson.
//   4. The book shows it: some lesson example or answer uses all the words of
//      one of its forms -- for an atom, in any lesson; for a category or a
//      grammar item, in the module that teaches it.
//
// So removing a word, moving a word or a module to a later lesson, or cutting
// the last sentence that shows an item fails here until it's fixed.
//
//   node scripts/check-coverage.js

import { LESSON_IDS, importLessonFile } from './lessons.js';
import { NSM_PRIMES, ARISTOTLE_CATEGORIES, CORE_GRAMMAR } from './coverage-canon.js';
import dictionaryData from '../src/data/dictionary.ts';
import compositesData from '../src/data/composites.ts';
import coverage from '../src/data/coverage.ts';
import { wordRefIds, soleWordRef } from '../src/lib/word-refs.js';

const dictionary = dictionaryData.words;
const composites = compositesData.entries;

// The dictionary words a form or sentence uses. The counting word is written
// plainly ("san1-ge"), so a bare "ge" counts as ge4.
const wordsOf = (form) => {
  const words = wordRefIds(form);
  if (/(^|[\s-])ge(?![a-z])/.test(form.replace(/\{\{[^}]+\}\}/g, ' '))) words.push('ge4');
  return words;
};

// word id -> position of the lesson that introduces it; lesson id -> its
// modules; and every example and answer, with the words it uses
const home = new Map();
const modules = new Map();
const sentences = [];
for (const [i, id] of LESSON_IDS.entries()) {
  const entries = await importLessonFile(id, 'index.ts');
  modules.set(id, new Set(entries.map((e) => e.module)));
  for (const e of entries) {
    const word = e.type === 'vocab' && !e.sense && soleWordRef(e.term); // a sense card isn't the word's home
    if (word) home.set(word, i);
    const text = e.type === 'example' ? e.pinyin : e.type === 'answer' ? [].concat(e.en)[0] : null;
    if (text) sentences.push({ where: `${id}/${e.module}`, words: new Set(wordsOf(text)) });
  }
}
// -> whether some sentence (in `where`, if given) uses every word of `form`
const shown = (form, where) =>
  sentences.some((s) => (!where || s.where === where) && wordsOf(form).every((w) => s.words.has(w)));
// -> whether every word of `form` is introduced by the end of lesson `upTo` (a position)
const sayableBy = (form, upTo) => {
  const words = wordsOf(form);
  return words.length > 0 && words.every((w) => home.has(w) && home.get(w) <= upTo);
};

const errors = [];
const counts = [];

// 1. nothing is left out
for (const [key, canon, name] of [['atoms', NSM_PRIMES, 'NSM prime'], ['categories', ARISTOTLE_CATEGORIES, "Aristotle's category"], ['grammar', CORE_GRAMMAR, 'core grammar item']]) {
  const have = new Set(coverage.groups.find((g) => g.key === key)?.items.map((item) => item.key) ?? []);
  for (const k of canon) if (!have.has(k)) errors.push(`${key}: "${k}" is missing -- every ${name} must be covered`);
  for (const k of have) if (!canon.includes(k)) errors.push(`${key}: "${k}" isn't a${key === 'atoms' ? 'n' : ''} ${name} (see scripts/coverage-canon.js)`);
}

for (const group of coverage.groups) {
  for (const item of group.items) {
    const where = `${group.key} "${item.key}"`;
    if (!item.forms?.length) {
      errors.push(`${where} has no Hao-shuo-de form`);
      continue;
    }
    if (!item.words?.length) errors.push(`${where} names no dictionary word that carries it ("words")`);
    for (const w of item.words ?? []) {
      if (!dictionary[w]) errors.push(`${where}: "${w}" in "words" isn't a dictionary word`);
      else if (!item.forms.some((form) => wordsOf(form).includes(w))) errors.push(`${where}: "${w}" carries it, but none of its forms uses it`);
    }
    for (const form of item.forms) {
      if (!wordsOf(form).length) errors.push(`${where}: "${form}" uses no dictionary word`);
      for (const w of wordsOf(form)) {
        if (!dictionary[w]) errors.push(`${where}: {{word:${w}}} isn't a dictionary word -- give it a form that still works`);
      }
    }
    let lesson = item.lesson;
    if (item.taught) {
      const [taughtLesson, module] = item.taught.split('/');
      lesson = taughtLesson;
      if (modules.has(lesson) && !modules.get(lesson).has(module)) {
        errors.push(`${where}: taught in "${item.taught}", but lesson "${lesson}" has no module "${module}"`);
      }
    }
    const upTo = LESSON_IDS.indexOf(lesson);
    if (upTo < 0) {
      errors.push(`${where}: no lesson "${lesson}" in src/content/book.js`);
      continue;
    }
    if (!item.forms.some((form) => sayableBy(form, upTo))) {
      errors.push(`${where}: no form can be said by Lesson ${upTo + 1} (${lesson}) -- a word it needs is missing or comes later`);
    }
    if (!item.forms.some((form) => shown(form, item.taught))) {
      errors.push(`${where}: no lesson ${item.taught ? `example or answer in ${item.taught}` : 'example or answer'} says it -- add one that uses one of its forms`);
    }
  }
  counts.push(`${group.items.length} ${group.key}`);
}

// word id -> the items it carries
const carried = new Map();
for (const group of coverage.groups) {
  for (const item of group.items) {
    for (const w of item.words ?? []) carried.set(w, [...(carried.get(w) ?? []), `${group.key}:${item.key}`]);
  }
}

// Potentially redundant words: warnings only. builds: word id -> how many
// composites use it (gaps and skips have no form, so they don't count).
const BUILDS_ENOUGH = 10;
const builds = new Map();
const glosses = new Map(); // word id -> the composites it helps say, by their English gloss
for (const entry of composites) {
  if (!entry.hsd || entry.fit === 'gap' || entry.fit === 'skip') continue;
  for (const w of new Set(wordsOf(entry.hsd))) {
    builds.set(w, (builds.get(w) ?? 0) + 1);
    glosses.set(w, [...(glosses.get(w) ?? []), entry.en]);
  }
}
const warnings = [];
for (const [id, word] of Object.entries(dictionary)) {
  const need = word.necessity?.index ?? 5;
  const used = builds.get(id) ?? 0;
  if (used >= BUILDS_ENOUGH) continue;
  const items = carried.get(id) ?? [];
  const reasons = [];
  if (!items.length && need <= 2) reasons.push('carries no atom, category, or grammar item');
  else if (!items.length && need <= 3 && used <= 1) reasons.push('carries nothing, and hardly any composite needs it');
  if (items.length && need <= 3 && items.every((c) => [...carried].some(([other, list]) => other !== id && list.includes(c)))) {
    reasons.push(`everything it carries (${items.join(', ')}) another word carries too`);
  }
  const twins = (word.synonyms ?? []).map((form) => soleWordRef(form)).filter((w) => w && dictionary[w]);
  if (twins.length && need <= 3) reasons.push(`close to ${twins.map((w) => dictionary[w].term).join(', ')}`);
  if (reasons.length) {
    const chunk = used ? ` [${[...new Set(glosses.get(id))].join(', ')}]` : '';
    warnings.push({ need, used, text: `${word.term} (${id}, necessity ${need}, in ${used} composite${used === 1 ? '' : 's'}${chunk}): ${reasons.join('; ')}` });
  }
}
if (warnings.length) {
  console.log(`check-coverage: ${warnings.length} word(s) may be redundant (warnings; lowest necessity, then fewest composites, first):`);
  for (const w of warnings.sort((a, b) => a.need - b.need || a.used - b.used)) console.log(`  ~ ${w.text}`);
}

if (errors.length) {
  console.error(`check-coverage: ${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check-coverage: Hao-shuo-de can still say all of them: ${counts.join(', ')}.`);
