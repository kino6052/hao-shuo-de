// Sanity check for the Akinator (AKINATOR_PLAN.md B7): simple, everyday things must be easy to find.
// For each plain English word the hint alone (no answers) must lead to the expected entry, and each plain start word
// ("food", "kitchen", "doing") must open a question. Slow (it builds the pool: ~15 s the first time), so it is not part of
// `npm run check`; run `npm run check-akinator` before a push or after changing the pool, the hint or the engine.
//
//   node scripts/check-akinator.js [--list]

import { openKb } from './kb.js';
import { askAkinator } from '../src/lib/kb/akinator-ask.js';
import { createBrowserAkinator } from '../src/lib/kb/akinator-browser.js';
import { exportPool } from '../src/lib/kb/akinator-export.js';
import { findJargon } from './jargon.js';

// [what a learner would type, the entries (hanzi) of which at least one must show among the words or composites]
const SIMPLE = [
  ['food', ['吃', '食物', '饭']], ['eat', ['吃']], ['drink', ['喝']], ['water', ['水']], ['rice', ['饭', '米饭']],
  ['home', ['家']], ['friend', ['朋友']], ['mother', ['妈妈']], ['father', ['爸爸']], ['child', ['孩子']],
  ['money', ['金', '钱']], ['hot', ['热']], ['big', ['大']], ['small', ['小']], ['good', ['好']],
  ['go', ['去']], ['come', ['来']], ['see', ['看']], ['say', ['说']], ['know', ['知道']],
  ['book', ['书']], ['person', ['人']], ['day', ['天', '日']], ['water', ['水']], ['car', ['车']],
];
// plain words that must open a first question
const STARTS = ['situation', 'doing', 'food', 'kitchen', 'compare', 'animal'];

const kb = await openKb({ memo: true });
const problems = [];
if (process.argv.includes('--list')) console.log(`${SIMPLE.length} simple ideas, ${STARTS.length} start words`);

for (const [hint, wanted] of SIMPLE) {
  const { data } = askAkinator(kb, { hint, finish: true, limit: 8 });
  const shown = [...data.result.words, ...data.result.composites].map((it) => it.text.zh);
  if (!wanted.some((zh) => shown.includes(zh))) problems.push(`hint "${hint}": expected ${wanted.join(' or ')}, got ${shown.slice(0, 6).join(' ') || 'nothing'}`);
}
for (const start of STARTS) {
  try {
    const { data } = askAkinator(kb, { start });
    if (data.stage !== 'question') problems.push(`start "${start}": no question (${data.stage})`);
    else if (data.effective < 2) problems.push(`start "${start}": nothing left to ask`);
  } catch (e) {
    problems.push(`start "${start}": ${e.message}`);
  }
}

// the same ideas through the browser's engine, built from the exported file (D2): glosses only, no WordNet, so it may find less
const lessons = (kb.source.lessons ?? []).map(({ id, number }) => ({ id, number }));
const exported = exportPool(kb.pool(), { ak: kb.akinator(), lessons, nets: kb.tags().nets });
const browser = createBrowserAkinator(JSON.parse(JSON.stringify(exported)));
// the questions the learner reads: no grammar jargon (BOOK_PLAN.md rule 4)
for (const q of [...exported.ask.filter(Boolean).flat(), ...exported.first.map((c) => c.label)]) {
  for (const h of findJargon(q)) problems.push(`question "${q}" says "${h.term}"`);
}
let browserFound = 0;
for (const [hint, wanted] of SIMPLE) {
  const data = browser.ask({ hint, finish: true, limit: 8 });
  const shown = [...data.result.words, ...data.result.composites].map((it) => it.text.zh);
  if (wanted.some((zh) => shown.includes(zh))) browserFound++;
  else problems.push(`browser, hint "${hint}": expected ${wanted.join(' or ')}, got ${shown.slice(0, 6).join(' ') || 'nothing'}`);
}
for (const start of STARTS) {
  try {
    const data = browser.ask({ start });
    if (data.stage !== 'question') problems.push(`browser, start "${start}": no question (${data.stage})`);
  } catch (e) {
    problems.push(`browser, start "${start}": ${e.message}`);
  }
}

if (problems.length) {
  console.error(`Akinator sanity: ${problems.length} problem${problems.length === 1 ? '' : 's'}`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`Akinator sanity: ${SIMPLE.length} simple ideas found, ${STARTS.length} start words open a question, also in the browser (${browserFound} ideas).`);
