#!/usr/bin/env node
// Word-order gate: inside one lesson, a word may not be used before the word card that introduces it ("new
// words", like bù in the lesson that teaches it). check-early-words compares lessons with each other; this
// one compares the places inside a lesson, in reading order: an earlier module, or an earlier entry of the
// same module, that uses a word whose card comes later is a problem. The cover picture's sentence (the "head"
// module) previews the lesson, so it is listed apart and is not an error. The rules for what counts as "using"
// a word are in scripts/early-words.js. It fails for problems in the blocking lessons
// (scripts/finished-lessons.js: the finished lessons, or the lessons you name, or every lesson with --strict),
// and reports the rest.
//
// The uses that were already in the book when the gate came (scripts/word-order-known.json, one line per lesson,
// module and word) are tolerated, so the gate stops new ones now and the old ones can be fixed one lesson at a
// time. Naming lessons, or --strict, ignores that list. Fixing a use makes its line stale: the gate says so, and
// --known writes the list again from what the book has now.
//
//   npm run check-word-order                          # every lesson; fails for new uses in finished ones
//   npm run check-word-order -- not is                # only these lessons; fails for them
//   npm run check-word-order -- --summary             # one line per lesson
//   npm run check-word-order -- --covers              # also list the cover sentences
//   npm run check-word-order -- --strict              # fails for any lesson, known or not
//   npm run check-word-order -- --known               # write the list of known uses

import { readFileSync, writeFileSync } from 'fs';
import { findWordsBeforeCard } from './early-words.js';
import { gatePolicy } from './finished-lessons.js';
import { LESSON_IDS, lessonNumber, importLessonFile } from './lessons.js';
import dictionaryData from '../src/data/dictionary.ts';

const { args, named, blocking, scopeLabel, summary: summaryOnly } = gatePolicy();
const showCovers = args.includes('--covers');
const KNOWN_FILE = new URL('./word-order-known.json', import.meta.url);
const useKey = (p) => `${p.lesson} | ${p.module} | ${p.word}`;

// Every lesson is loaded (a card's place depends on its whole lesson); naming lessons only limits what is reported.
const lessons = [];
for (const id of LESSON_IDS) lessons.push({ id, number: lessonNumber(id), entries: await importLessonFile(id, 'index.ts') });
lessons.sort((a, b) => a.number - b.number);

const unknown = named.filter((id) => !lessons.some((l) => l.id === id));
if (unknown.length) {
  console.error(`check-word-order: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}
const reported = lessons.filter((l) => named.length === 0 || named.includes(l.id));
const { problems } = findWordsBeforeCard(lessons, dictionaryData.words);
const early = problems.filter((p) => p.kind === 'before-card');
if (args.includes('--known')) {
  const keys = [...new Set(early.map(useKey))];
  writeFileSync(KNOWN_FILE, `${JSON.stringify(keys, null, 2)}\n`);
  console.log(`check-word-order: wrote ${keys.length} known use(s) to scripts/word-order-known.json`);
  process.exit(0);
}
// the known uses stand for themselves only when the whole book is checked, not a lesson you named or --strict
const useKnown = !args.includes('--strict') && named.length === 0;
let known = new Set();
try { known = new Set(JSON.parse(readFileSync(KNOWN_FILE, 'utf-8'))); } catch { /* no list: nothing is known */ }
const mine = early.filter((p) => reported.some((l) => l.id === p.lesson));
const isNew = (p) => !(useKnown && known.has(useKey(p)));
const covers = problems.filter((p) => p.kind === 'cover' && reported.some((l) => l.id === p.lesson));

for (const lesson of reported) {
  const list = mine.filter((p) => p.lesson === lesson.id);
  if (!list.length) continue;
  const words = [...new Set(list.map((p) => `${p.word} (card in ${p.cardModule})`))];
  const fresh = list.some(isNew);
  console.log(`${summaryOnly ? '' : '\n'}${lesson.id}: ${list.length} use(s) of ${words.length} word(s) -- ${words.join(', ')}${blocking(lesson.id) && fresh ? '  ✗ blocking' : fresh ? '' : '  (known)'}`);
  if (summaryOnly) continue;
  for (const p of list) {
    const text = p.text.replace(/\s+/g, ' ');
    console.log(`  ${p.key}  [${p.word}, card ${p.cardKey}]  "${text.length > 110 ? `${text.slice(0, 110)}…` : text}"`);
  }
}
if (covers.length) {
  if (showCovers) {
    console.log('\nCover sentences that use a word before its card (not errors):');
    for (const p of covers) console.log(`  ${p.lesson}: ${p.word} (card in ${p.cardModule})`);
  } else console.log(`\ncheck-word-order: ${covers.length} cover sentence use(s) before their card (--covers to list them).`);
}

const stale = [...known].filter((k) => useKnown && !early.some((p) => useKey(p) === k));
if (stale.length) console.log(`\ncheck-word-order: ${stale.length} known use(s) no longer happen -- run with --known to drop them: ${stale.slice(0, 5).join('; ')}${stale.length > 5 ? '; …' : ''}`);
const failingLessons = [...new Set(mine.filter((p) => blocking(p.lesson) && isNew(p)).map((p) => p.lesson))];
if (!mine.length) {
  console.log(`check-word-order: every word comes after its card within its lesson (${reported.length} lesson(s)).`);
} else if (failingLessons.length) {
  console.error(`\ncheck-word-order: words used before their card, in ${scopeLabel}: ${failingLessons.join(', ')}. Move the card up, or the use down.`);
  if (useKnown) console.error('(Uses that were already there are in scripts/word-order-known.json and do not count; these are new.)');
  process.exit(1);
} else {
  const others = new Set(mine.map((p) => p.lesson)).size;
  console.log(`\ncheck-word-order: OK for ${scopeLabel}. ${mine.length} use(s) in ${others} lesson(s), ${useKnown ? 'all known' : 'reported only'}.`);
}
