#!/usr/bin/env node
// Word-order gate: inside one lesson, a word may not be used before the word card that introduces it ("new
// words", like bù in the lesson that teaches it). check-early-words compares lessons with each other; this
// one compares the places inside a lesson, in reading order: an earlier module, or an earlier entry of the
// same module (another card's gloss, too), that uses a word whose card comes later is a problem. Every part of
// a module counts -- the cards, the explanation with its TL;DR line, the info box, the picture, the examples,
// the exercises and answers, the FAQ, and the story -- in English, Russian and Chinese. The cover picture's
// sentence (the "head" module) previews the lesson, so it is listed apart and is not an error; so is the
// TL;DR box at the top of the page, which previews every module's TL;DR line (each line counts where its
// module is). The rules for what counts as "using" a word are in scripts/early-words.js. It fails for
// problems in the blocking lessons (scripts/finished-lessons.js: the finished lessons, or the lessons you
// name, or every lesson with --strict), and reports the rest.
//
//   npm run check-word-order                          # every lesson; fails for the finished ones
//   npm run check-word-order -- not is                # only these lessons; fails for them
//   npm run check-word-order -- --summary             # one line per lesson
//   npm run check-word-order -- --covers              # also list the cover sentences

import { findWordsBeforeCard } from './early-words.js';
import { gatePolicy } from './finished-lessons.js';
import { LESSON_IDS, lessonNumber, importLessonFile } from './lessons.js';
import dictionaryData from '../src/data/dictionary.ts';

const { args, named, blocking, scopeLabel, summary: summaryOnly } = gatePolicy();
const showCovers = args.includes('--covers');

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
const mine = problems.filter((p) => p.kind === 'before-card' && reported.some((l) => l.id === p.lesson));
const covers = problems.filter((p) => p.kind === 'cover' && reported.some((l) => l.id === p.lesson));

for (const lesson of reported) {
  const list = mine.filter((p) => p.lesson === lesson.id);
  if (!list.length) continue;
  const words = [...new Set(list.map((p) => `${p.word} (card in ${p.cardModule})`))];
  console.log(`${summaryOnly ? '' : '\n'}${lesson.id}: ${list.length} use(s) of ${words.length} word(s) -- ${words.join(', ')}${blocking(lesson.id) ? '  ✗ blocking' : ''}`);
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

const failingLessons = [...new Set(mine.filter((p) => blocking(p.lesson)).map((p) => p.lesson))];
if (!mine.length) {
  console.log(`check-word-order: every word comes after its card within its lesson (${reported.length} lesson(s)).`);
} else if (failingLessons.length) {
  console.error(`\ncheck-word-order: words used before their card, in ${scopeLabel}: ${failingLessons.join(', ')}. Move the card up, or the use down.`);
  process.exit(1);
} else {
  const others = new Set(mine.map((p) => p.lesson)).size;
  console.log(`\ncheck-word-order: OK for ${scopeLabel}. ${mine.length} use(s) in ${others} other lesson(s), reported only.`);
}
