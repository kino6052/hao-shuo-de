#!/usr/bin/env node
// Word Builder gate for the composite dictionary (src/data/composites/):
// every description the Word Builder can read is written the way it writes
// it, with matching hanzi, so a word opened in the Word Builder shows exactly
// the dictionary's form, built question by question. It fails for
//
//   - a description (fit "plain") in an older form: run
//     node scripts/composites-builder-forms.js to rewrite it;
//   - a form in the Word Builder's form whose hanzi (`tts`) isn't what the
//     Word Builder builds from the lessons' word cards.
//
// Descriptions the Word Builder can't read yet (bǎ … nòng-hǎo, bāng rén …)
// don't fail; they're counted, and --list names them.
//
//   npm run check-word-builder
//   npm run check-word-builder -- --list

import { readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { LESSON_IDS, importLessonFile } from "./lessons.js";
import { builderForm, REWRITTEN_FITS } from "../src/lib/word-builder-parse.js";
import { render, hanziSystem } from "../src/lib/word-builder.js";
import { wordHanzi } from "../src/lib/hanzi-map.js";
import dictionaryData from "../src/data/dictionary.ts";
import compositesData from "../src/data/composites.ts";
import { replaceWordRefs, refTerm } from "../src/lib/word-refs.js";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const dict = dictionaryData;
const { entries } = compositesData;
const list = process.argv.includes("--list");

const lessons = [];
for (const id of LESSON_IDS) lessons.push(await importLessonFile(id, "index.ts"));
const hanzi = hanziSystem(wordHanzi());
const pinyin = (form) => replaceWordRefs(form, (id, kind) => (dict.words[id] ? refTerm(dict.words[id].term, kind) : id));

const errors = [];
const unread = [];
let shown = 0;
for (const e of entries) {
  if (!e.hsd || (e.fit !== "plain" && e.fit !== "natural")) continue;
  const forms = e.hsd.split(" / ");
  const tts = (e.tts ?? "").split(" / ");
  let read = false;
  forms.forEach((form, i) => {
    const built = builderForm(dict, form);
    if (!built) return;
    read = true;
    if (!built.same) {
      if (REWRITTEN_FITS.has(e.fit)) errors.push(`"${e.en}" (${e.zh}): ${pinyin(form)} should be ${pinyin(built.form)}`);
      return;
    }
    shown++;
    const want = render(built.tree, hanzi);
    if (tts[i] !== want) errors.push(`"${e.en}" (${e.zh}): hanzi "${tts[i] ?? ""}" should be "${want}" for ${pinyin(form)}`);
  });
  if (!read && REWRITTEN_FITS.has(e.fit)) unread.push(`"${e.en}" (${e.zh}): ${pinyin(e.hsd)}`);
}

if (list) for (const line of unread) console.log(`  not read yet: ${line}`);
console.log(
  `check-word-builder: ${shown} dictionary word(s) open in the Word Builder; ` +
    `${unread.length} description(s) it can't read yet${list ? "" : " (--list to name them)"}.`,
);
if (errors.length) {
  for (const err of errors) console.error(`  ${err}`);
  console.error(
    `check-word-builder: ${errors.length} problem(s) -- run node scripts/composites-builder-forms.js to rewrite descriptions and their hanzi.`,
  );
  process.exit(1);
}
