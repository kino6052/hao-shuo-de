#!/usr/bin/env node
// Composite-description gate (KB_PLAN.md phase 4, K7): the patterns read every description of the composite
// dictionary that is more than one word. A description of one word or a hyphen chain (zhēn, zhòng-yào) is a word
// standing for the word and is not read as a phrase.
//
// A description the author knows about is listed in kb/form-gaps.json ({ zh, form, why }); it does not fail.
// A new one fails. A listed one that now parses fails too, so the list only shrinks: remove it.
//
//   node scripts/check-forms.js              # the gate
//   node scripts/check-forms.js --list       # name every known gap as well
//   node scripts/check-forms.js --update     # add the new gaps to the list (empty why)

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { openKb } from './kb.js';
import { formsOf } from './forms.js';
import { formText } from '../src/lib/kb/form-report.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const FILE = resolve(ROOT, 'kb/form-gaps.json');
const args = process.argv.slice(2);
const list = args.includes('--list');
const update = args.includes('--update');

const kb = await openKb({ memo: true });
const report = formsOf(kb);
const said = (f) => formText(f.form, kb.source.words);
const key = (f) => `${f.zh} | ${said(f)}`;
const gaps = report.forms.filter((f) => f.kind === 'phrase' && !f.ok);

const known = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : [];
const knownKey = new Map(known.map((k) => [`${k.zh} | ${k.form}`, k]));
const seen = new Set(gaps.map(key));
const fresh = gaps.filter((f) => !knownKey.has(key(f)));
const fixed = known.filter((k) => !seen.has(`${k.zh} | ${k.form}`));

if (update && fresh.length) {
  const add = fresh.map((f) => ({ zh: f.zh, form: said(f), why: '' }));
  writeFileSync(FILE, `${JSON.stringify([...known, ...add], null, 2)}\n`);
  console.log(`check-forms: ${add.length} gap(s) added to kb/form-gaps.json; say why for each.`);
  process.exit(0);
}

const errors = [];
for (const f of fresh) errors.push(`${f.zh} (${f.pos}): "${said(f)}" does not parse -- ${f.why}`);
for (const k of fixed) errors.push(`kb/form-gaps.json: ${k.zh} "${k.form}" parses now; remove it from the list`);

const c = report.counts;
console.log(`check-forms: ${c.parses} of ${c.parses + c.fails} descriptions parse (${c.word} more are one word); ${gaps.length - fresh.length} known gap${gaps.length - fresh.length === 1 ? '' : 's'}.`);
if (list) for (const f of gaps) if (knownKey.has(key(f))) console.log(`  known: ${f.zh} "${said(f)}"${knownKey.get(key(f)).why ? ` (${knownKey.get(key(f)).why})` : ''}`);
if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`check-forms: ${errors.length} problem(s). A gap is a missing pattern (fix the rule), or a description for the author to reword or accept (kb/form-gaps.json).`);
  process.exit(1);
}
