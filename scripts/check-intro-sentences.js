#!/usr/bin/env node
// Caption gate: the Hao-shuo-de sentences that stand outside a lesson's
// examples -- every example in an intro and every picture caption, in lessons
// and intros -- are written like a lesson example: word refs and quoted
// names, hanzi in step with the words (the audio reads them), and an English
// and a Russian meaning. Plain pinyin is refused, so a compound is always
// written as one (zhè-ge, not "zhè ge"). Rules in src/lib/caption-problems.js.
// Whether the sentence is grammatical is check-grammar's job (it parses these too).
//
//   npm run check-intro-sentences

import { LESSON_IDS, importLessonFile } from './lessons.js';
import { INTRO_IDS, importIntroFile } from './intros.js';
import { captionProblems } from '../src/lib/caption-problems.js';
import dictionaryData from '../src/data/dictionary.ts';

const words = dictionaryData.words;
const problems = [];
let count = 0;

const check = (chapter, entries, types) => {
  for (const e of entries) {
    if (!types.includes(e.type)) continue;
    count += 1;
    const sentence = { pinyin: e.pinyin, hanzi: e.ttsText, en: e.en?.[0], ru: e.ru?.[0] };
    for (const p of captionProblems(sentence, words)) problems.push(`${chapter}/${e.key}: ${p}  ("${e.pinyin ?? ''}")`);
  }
};
for (const id of LESSON_IDS) check(id, await importLessonFile(id, 'index.ts'), ['image']);
for (const id of INTRO_IDS) check(id, await importIntroFile(id), ['image', 'example']);

if (problems.length) {
  console.error(`check-intro-sentences: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`check-intro-sentences: OK for ${count} sentence(s) (intro examples and picture captions).`);
