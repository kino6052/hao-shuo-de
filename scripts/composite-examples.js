#!/usr/bin/env node
// Writes example sentences into the composite dictionary. The sentences are
// written by hand in plain pinyin, one file per review batch:
//
//   review/examples/batch-<n>.mjs
//     export default { [zh]: [[pinyin, hanzi, en, ru], ...] }
//     export const light = { qi: "qi4" }   (optional: light syllables to read so)
//
// Each sentence becomes word refs (src/lib/pinyin-refs.js) and is checked
// (src/lib/composite-examples.js): dictionary words only, hanzi in step with
// the words, one of the entry's forms used. A dry run lists the problems;
// --write puts the examples into the composite files when there are none.
//
//   npm run composite-examples -- review/examples/batch-1.mjs [--write]

import { existsSync } from 'fs';
import { resolve } from 'path';
import { pathToFileURL } from 'url';
import dictionary from '../src/data/dictionary.ts';
import composites from '../src/data/composites.ts';
import { pinyinToRefs } from '../src/lib/pinyin-refs.js';
import { exampleProblems } from '../src/lib/composite-examples.js';
import { resolveWordRefs } from '../src/lib/word-refs.js';
import { buildWordIndex } from '../src/lib/dictionary-stats.js';
import { writeComposite } from './data-files.js';

const file = process.argv.slice(2).find((a) => !a.startsWith('--'));
const write = process.argv.includes('--write');
if (!file) {
  console.error('usage: npm run composite-examples -- review/examples/batch-<n>.mjs [--write]');
  process.exit(1);
}
const mod = await import(pathToFileURL(resolve(file)).href);
const source = mod.default;
// Written before the batch is reviewed, the sentences may use a proposed form
// (review/proposals/batch-<n>.mjs) rather than the current one: both count.
const proposalFile = resolve(file).replace(/examples([\\/])batch-/, 'proposals$1batch-');
const proposals = proposalFile !== resolve(file) && existsSync(proposalFile) ? (await import(pathToFileURL(proposalFile).href)).default : {};
const withProposal = (entry) => {
  const p = proposals[entry.zh];
  return p ? { ...entry, hsd: [entry.hsd, ...p.hsd].filter(Boolean).join(' / ') } : entry;
};
const words = dictionary.words;
const index = buildWordIndex(dictionary);
const byZh = new Map(composites.entries.map((e) => [e.zh, e]));

const problems = [];
const out = new Map();
for (const [zh, list] of Object.entries(source)) {
  const entry = byZh.get(zh);
  if (!entry) {
    problems.push(`${zh}: no such composite`);
    continue;
  }
  const examples = [];
  for (const [pinyin, hanzi, en, ru] of list) {
    let refs;
    try {
      refs = pinyinToRefs(pinyin, words, { light: mod.light ?? {} });
    } catch (e) {
      problems.push(`${zh}: ${e.message}`);
      continue;
    }
    const x = { pinyin: refs, hanzi, en, ru };
    const p = exampleProblems(withProposal(entry), x, words);
    if (p.length) problems.push(`${zh} "${pinyin}": ${p.join('; ')}`);
    // the refs must read back as written (tone marks, capitals, hyphens)
    else if (resolveWordRefs(refs, index).normalize('NFC') !== resolveWordRefs(pinyin, index).normalize('NFC')) {
      problems.push(`${zh} "${pinyin}": reads back as "${resolveWordRefs(refs, index)}"`);
    }
    examples.push(x);
  }
  out.set(zh, examples);
}

// entries of the batch's ranks the file leaves out
const n = Number(file.match(/batch-(\d+)/)?.[1]);
if (n) {
  const missing = composites.entries.filter((e) => e.rank > (n - 1) * 100 && e.rank <= n * 100 && !source[e.zh] && !e.examples?.length);
  if (missing.length) problems.push(`without examples: ${missing.map((e) => `${e.rank} ${e.zh}`).join(', ')}`);
}

const count = [...out.values()].reduce((s, l) => s + l.length, 0);
console.log(`composite-examples ${file}: ${out.size} entries, ${count} sentences.`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
if (!write) {
  console.log('No problems (dry run -- add --write to put them in).');
  process.exit(0);
}
for (const [zh, examples] of out) writeComposite({ ...byZh.get(zh), examples });
console.log(`Wrote the examples of ${out.size} entries.`);
