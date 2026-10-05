#!/usr/bin/env node
// Rewrites the composite dictionary's descriptions (src/data/composites/,
// fit "plain") into the form the Word Builder writes them in, so a reader who
// opens a dictionary word in the Word Builder sees exactly the dictionary's
// form, built question by question (src/lib/word-builder-parse.js says which
// forms it can read). Each such form's hanzi (`tts`) is rebuilt too.
// scripts/check-word-builder.js (a gate of `npm run check`) fails while any
// description is in an older form or has other hanzi.
//
//   node scripts/composites-builder-forms.js          # rewrite, and list what changed
//   node scripts/composites-builder-forms.js --check  # list only; exit 1 if anything would change

import { resolve } from "path";
import { fileURLToPath } from "url";
import { builderForm, REWRITTEN_FITS } from "../src/lib/word-builder-parse.js";
import { render, hanziSystem } from "../src/lib/word-builder.js";
import { wordHanzi } from "../src/lib/hanzi-map.js";
import { writeComposite } from "./data-files.js";
import dictionaryData from "../src/data/dictionary.ts";
import compositesData from "../src/data/composites.ts";
import { replaceWordRefs, refTerm } from "../src/lib/word-refs.js";

const dict = dictionaryData;
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
  const pending = pendingRewrites(compositesData.entries, wordHanzi());
  const pinyin = (form) => replaceWordRefs(form, (id, kind) => (dict.words[id] ? refTerm(dict.words[id].term, kind) : id));
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
    for (const entry of new Set(pending.map((p) => p.entry))) writeComposite(entry);
    console.log(`composites-builder-forms: rewrote ${pending.length} description(s).`);
  }
}
