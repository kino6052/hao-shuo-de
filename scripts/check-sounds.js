#!/usr/bin/env node
// Checks the dictionary's sounds, so a word is never two words and a use is
// never ambiguous (BOOK_PLAN.md D60, catch-all words):
//
// Errors:
//   1. Two words with the same toned term (zuò 做 and zuò 坐): make one a
//      sense of the other, or rename one.
//   2. A word that is just other words joined, sound and hanzi alike (the
//      yīxià case): write it as those words instead.
//   3. A sense compound that isn't real Mandarin: its hanzi (with the sense's
//      hanzi) must be a composite in src/data/composites/.
//   4. One compound listed under two senses of the same word.
//   5. A composite whose hanzi uses a sense's hanzi where its Hao-shuo-de form
//      doesn't use that sense (时 in the hanzi, but no listed compound).
//   6. A lesson that introduces two senses of one word (main sense included).
// (A sense used before its card is check-early-words; a sense without its
// meaning, why or compounds is check-data.)
//
// Reported, not errors:
//   - words that differ only by tone (jiǎo / jiāo / jiào);
//   - a one-syllable word that sounds like a syllable inside a longer word
//     written with other hanzi.
//
//   npm run check-sounds              errors, plus a count of the reports
//   npm run check-sounds -- --report  errors, plus every report line

import dictionaryData from '../src/data/dictionary.ts';
import compositesData from '../src/data/composites.ts';
import { loadLessons } from './lessons.js';
import { soleWordRef, toneless, wordRefIds } from '../src/lib/word-refs.js';
import { refSenses, chainHanzi, senseKey } from '../src/lib/senses.js';
import { idSyllables } from './refactor-lib.js';

const words = dictionaryData.words;
const ids = Object.keys(words);
const errors = [];
const reports = [];
const report = process.argv.includes('--report');

// 1. one toned term, one word
const byTerm = new Map();
for (const id of ids) byTerm.set(words[id].term, [...(byTerm.get(words[id].term) ?? []), id]);
for (const [term, list] of byTerm) if (list.length > 1) errors.push(`${list.join(', ')}: the same sound "${term}" -- make one a sense of the other, or rename one`);

// 2. a word that is other words joined. Splits the word's syllables into runs
// that are words, and compares the hanzi (with senses) as well as the sound.
for (const id of ids) {
  const syl = idSyllables(id);
  if (syl.length < 2) continue;
  const tryFrom = (i) => {
    if (i === syl.length) return [[]];
    const out = [];
    for (let j = i + 1; j <= syl.length; j++) {
      const part = syl.slice(i, j).join('');
      if (part === id || !words[part]) continue;
      for (const rest of tryFrom(j)) out.push([part, ...rest]);
    }
    return out;
  };
  for (const parts of tryFrom(0)) {
    if (chainHanzi(parts, words) === words[id].hanzi) {
      errors.push(`${id} (${words[id].term} ${words[id].hanzi}) is just ${parts.join(' + ')} -- write it as ${parts.map((p) => words[p].term).join('-')}`);
      break;
    }
  }
}

// 3, 4. sense compounds are real, and each is listed once
const compositeZh = new Set(compositesData.entries.map((e) => e.zh));
for (const id of ids) {
  const seen = new Map();
  for (const [key, s] of Object.entries(words[id].senses ?? {})) {
    for (const c of s.compounds) {
      if (seen.has(c)) errors.push(`${id}: compound "${c}" is listed under two senses (${seen.get(c)}, ${key})`);
      seen.set(c, key);
      const parts = c.split(' ');
      if (parts.some((p) => !words[p])) continue; // check-data reports it
      const zh = chainHanzi(parts, words);
      if (!zh.includes(s.hanzi)) errors.push(`${id} sense "${key}": compound "${c}" doesn't come out with ${s.hanzi} (${zh}) -- is it listed under the right word?`);
      else if (!compositeZh.has(zh)) errors.push(`${id} sense "${key}": compound "${c}" (${zh}) isn't a composite -- only real Mandarin words can be listed`);
    }
  }
}

// 5. a sense's hanzi in a composite's hanzi needs that sense in its form
for (const e of compositesData.entries) {
  if (!e.hsd || !e.tts) continue;
  const forms = e.hsd.split(' / ');
  const tts = e.tts.split(' / ');
  forms.forEach((form, i) => {
    const hz = tts[i] ?? '';
    const uses = refSenses(form, words);
    for (const { id } of uses) {
      for (const [key, s] of Object.entries(words[id]?.senses ?? {})) {
        if (!hz.includes(s.hanzi) || s.hanzi === words[id].hanzi) continue;
        if (uses.some((u) => u.id === id && u.sense === key)) continue;
        // the character may belong to another word of the form
        if (uses.some((u) => u.id !== id && (u.sense ? words[u.id].senses[u.sense].hanzi : words[u.id].hanzi).includes(s.hanzi))) continue;
        errors.push(`composite "${e.zh}": its hanzi ${hz} writes ${s.hanzi} (${id}, sense "${key}"), but its form ${form} doesn't use a compound listed for that sense`);
      }
    }
  });
}

// 6. one sense of a word per lesson
const lessons = await loadLessons();
for (const lesson of lessons) {
  const senses = new Map();
  for (const entry of lesson.entries) {
    if (entry.type !== 'vocab') continue;
    const id = soleWordRef(entry.term);
    if (!id) continue;
    senses.set(id, [...(senses.get(id) ?? []), entry.sense ?? 'main']);
  }
  for (const [id, list] of senses) if (list.length > 1) errors.push(`${lesson.id}: introduces ${list.length} senses of ${id} (${list.join(', ')}) -- one per lesson`);
}

// Reports: words that differ only by tone; one syllable inside another word
const byToneless = new Map();
for (const id of ids) {
  const t = toneless(words[id].term);
  byToneless.set(t, [...(byToneless.get(t) ?? []), id]);
}
for (const [t, list] of byToneless) if (list.length > 1) reports.push(`tone only: ${list.map((id) => `${words[id].term} ${words[id].hanzi}`).join(' / ')}`);
for (const id of ids) {
  const syl = idSyllables(id);
  if (syl.length !== 1) continue;
  for (const other of ids) {
    const os = idSyllables(other);
    if (os.length < 2) continue;
    const at = os.indexOf(id);
    if (at < 0) continue;
    const ch = [...words[other].hanzi][at];
    if (ch && ch !== words[id].hanzi && !Object.values(words[id].senses ?? {}).some((s) => s.hanzi === ch))
      reports.push(`inside a word: ${words[id].term} ${words[id].hanzi} sounds like the ${ch} in ${words[other].term} ${words[other].hanzi}`);
  }
}
void wordRefIds;
void senseKey;

if (reports.length) {
  if (report) {
    console.log('Reported (not errors):');
    for (const r of reports) console.log(`  ${r}`);
  } else console.log(`check-sounds: ${reports.length} report line(s) (--report to list them).`);
}
if (errors.length) {
  console.error(`\ncheck-sounds: ${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check-sounds: OK -- ${ids.length} words, no two with one sound.`);
