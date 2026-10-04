#!/usr/bin/env node
// Rewrites the composite dictionary's descriptions (src/data/composites.json,
// fit "plain") into the form the Word Builder writes them in, so a reader who
// opens a dictionary word in the Word Builder sees exactly the dictionary's
// form, built question by question (src/lib/word-builder-parse.js says which
// forms it can read). Each such form's hanzi (`tts`) is rebuilt too.
// scripts/check-word-builder.js (a gate of `npm run check`) fails while any
// description is in an older form or has other hanzi.
//
//   node scripts/composites-builder-forms.js          # rewrite, and list what changed
//   node scripts/composites-builder-forms.js --check  # list only; exit 1 if anything would change

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { LESSON_IDS, importLessonFile } from "./lessons.js";
import { builderForm, REWRITTEN_FITS } from "../src/lib/word-builder-parse.js";
import { render, hanziSystem } from "../src/lib/word-builder.js";
import { hanziFromLessons } from "../src/lib/hanzi-map.js";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const FILE = resolve(ROOT, "src/data/composites.json");
const dict = JSON.parse(readFileSync(resolve(ROOT, "src/data/dictionary.json"), "utf-8"));
const check = process.argv.includes("--check");

// -> [{ entry, alt, from, to, tts }] for every description not in the Word
// Builder's form yet, and every form in it whose hanzi isn't what the Word
// Builder builds (then `from` and `to` are the same).
export function pendingRewrites(entries, hanzi) {
  const out = [];
  for (const entry of entries) {
    if (!entry.hsd || (entry.fit !== "plain" && entry.fit !== "natural")) continue;
    const tts = (entry.tts ?? "").split(" / ");
    entry.hsd.split(" / ").forEach((form, alt) => {
      const built = builderForm(dict, form);
      if (!built || (!built.same && !REWRITTEN_FITS.has(entry.fit))) return;
      const want = render(built.tree, hanziSystem(hanzi));
      if (!built.same || tts[alt] !== want) out.push({ entry, alt, from: form, to: built.form, tts: want });
    });
  }
  return out;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) {
  const data = JSON.parse(readFileSync(FILE, "utf-8"));
  const lessons = [];
  for (const id of LESSON_IDS) lessons.push(await importLessonFile(id, "index.ts"));
  const pending = pendingRewrites(data.entries, hanziFromLessons(lessons));
  const pinyin = (form) => form.replace(/\{\{[wW]ord:([a-z0-9-]+)\}\}/g, (_, id) => dict.words[id]?.term ?? id);
  for (const p of pending) {
    console.log(p.from === p.to ? `${p.entry.en}: hanzi -> ${p.tts}` : `${p.entry.en}: ${pinyin(p.from)}  ->  ${pinyin(p.to)}`);
  }

  if (check) {
    if (pending.length) {
      console.error(`composites-builder-forms: ${pending.length} description(s) not in the Word Builder's form -- run node scripts/composites-builder-forms.js`);
      process.exit(1);
    }
    console.log("composites-builder-forms: every description is in the Word Builder's form.");
  } else {
    for (const p of pending) {
      const forms = p.entry.hsd.split(" / ");
      const tts = (p.entry.tts ?? "").split(" / ");
      forms[p.alt] = p.to;
      // The hanzi line has one part per form; rebuild just this one.
      if (tts.length === forms.length) tts[p.alt] = p.tts;
      else if (forms.length === 1) tts.splice(0, tts.length, p.tts);
      p.entry.hsd = forms.join(" / ");
      p.entry.tts = tts.join(" / ");
    }
    writeFileSync(FILE, JSON.stringify(data, null, 1) + "\n");
    console.log(`composites-builder-forms: rewrote ${pending.length} description(s).`);
  }
}
