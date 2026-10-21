#!/usr/bin/env node
// Yardstick gate: every word of the word lists is covered, the finish line of KB_PLAN.md Phase 9 (K30). It fails when
//
//   - a word of the Mandarin frequency list (all 5329) has no entry;
//   - a word of the English top 3000 or of Basic English is neither said by an entry, explained in
//     kb/yardsticks/english-explained.json, nor said as a kind of (…-de X); or
//   - the explained list is wrong: a `how` it does not know, a `say` form the dictionary cannot write or the grammar
//     cannot read, an inflected form whose `base` no entry says.
//
// An explained word an entry now says is only reported (drop its explanation). `--summary` prints the counts alone.
//
//   node scripts/check-yardsticks.js [--summary]

import { openKb } from './kb.js';
import { checkForm } from '../src/lib/kb/check-form.js';
import { isWordForm } from '../src/lib/kb/form-report.js';
import { englishVerdict } from '../src/lib/kb/yardsticks.js';
import { explainFailure } from '../src/lib/grammar/parser.js';

// grammar: said by a pattern or a core word (`say` shows how); name: a person or place, written in quotes; inflection: a
// form of `base`, which an entry says; spelling: a written form of other words (gonna, im); abbreviation: letters for a
// name or a phrase (uk, bbc, etc); foreign: a word of another language in English text (de, el, san); web: a word of
// the internet (http, lol); swearing: a curse said by how it is used, not by an entry
export const HOWS = ['grammar', 'name', 'inflection', 'spelling', 'abbreviation', 'foreign', 'web', 'swearing'];

const summary = process.argv.includes('--summary');
const kb = await openKb({ memo: true });
const words = kb.source.words;
const report = kb.yardsticks();
const explained = kb.yardstickLists().explained?.words ?? {};
const problems = [];

for (const [en, x] of Object.entries(explained)) {
  if (!HOWS.includes(x.how)) problems.push(`english-explained.json: "${en}" has how "${x.how}", not one of ${HOWS.join(', ')}`);
  if (!String(x.note ?? '').trim() && !x.say) problems.push(`english-explained.json: "${en}" says neither how (say) nor why (note)`);
  if (x.how === 'inflection') {
    if (!x.base) problems.push(`english-explained.json: "${en}" is an inflection with no base`);
    else if (englishVerdict({ lookup: kb.english }, x.base) === 'missing') problems.push(`english-explained.json: "${en}" is a form of "${x.base}", which no entry says`);
  }
  if (x.say) {
    // [[pinyin, hanzi], ...], like a composite spec's forms
    const say = [].concat(x.say).map((s) => [].concat(s));
    const r = checkForm(words, { forms: say.map(([py]) => py), tts: say.map(([, hz]) => hz ?? '') });
    for (const p of r.problems) problems.push(`english-explained.json: "${en}" say: ${p}`);
    for (const f of r.forms) {
      if (!f.refs || isWordForm(f.refs) || /^"[^"]*"$/.test(f.plain)) continue;
      const parsed = kb.parser.parse(f.refs, { maxTrees: 1, forms: true });
      if (!parsed.ok) problems.push(`english-explained.json: "${en}" say "${f.plain}" does not parse -- ${parsed.problems[0] ?? explainFailure(parsed, words).split('; a pattern could continue')[0]}`);
    }
  }
}

const m = report.mandarin;
const e = report.englishTop;
const b = report.basic;
const all = (list) => list.bands.at(-1);
console.log(`check-yardsticks: Mandarin ${all(m).said} of ${m.total} have an entry; English 3000: ${all(e).said} said, ${all(e).explained} explained, ${all(e).near} as a kind of, ${e.missing.length} missing; Basic English: ${b.said} said, ${b.explained} explained, ${b.near} as a kind of, ${b.missing} missing.`);
if (m.missing.length) problems.push(`${m.missing.length} Mandarin word(s) have no entry: ${m.missing.slice(0, 20).map((w) => w.zh).join(' ')}${m.missing.length > 20 ? ' …' : ''}`);
if (e.missing.length) problems.push(`${e.missing.length} English word(s) are not said, explained or a kind of: ${e.missing.slice(0, 30).join(', ')}${e.missing.length > 30 ? ' …' : ''}`);
if (b.missing) problems.push(`${b.missing} Basic English word(s) are not said, explained or a kind of: ${b.words.slice(0, 30).map((w) => w.en).join(', ')}`);
if (e.stale.length) console.log(`  explained, but an entry says it now (drop the explanation): ${e.stale.join(', ')}`);

if (problems.length) {
  if (!summary) for (const p of problems) console.error(`  ${p}`);
  console.error(`check-yardsticks: ${problems.length} problem(s).`);
  process.exit(1);
}
console.log('check-yardsticks: every yardstick word is covered.');
