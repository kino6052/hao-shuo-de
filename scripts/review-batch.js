#!/usr/bin/env node
// Turns a reviewed batch of the word or kinds review into a refactor list:
// the author's decisions (review/decisions/words-N.json, kinds-N.json) and
// Claude's proposals (review/proposals/words-N.mjs, kinds-N.mjs) in, the ops
// out. The list is the record of the decision, like the composite ones.
//
//   node scripts/review-batch.js words 1            writes refactors/W1.ts
//   node scripts/review-batch.js kinds 1            writes refactors/K1.ts
//   node scripts/review-batch.js words 1 --stdout   prints it instead
//
// Then: npm run refactor -- refactors/W1.ts [--write]. Words and entries not
// decided yet are left out and named in the list's header; run it again when
// the rest is decided (the list is rewritten whole).

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { loadSource } from './kb-source.js';
import { wordOps, kindsOps, refactorListText } from '../src/lib/kb/review.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

async function readProposals(mode, n) {
  const file = resolve(ROOT, 'review/proposals', `${mode}-${n}.mjs`);
  return existsSync(file) ? (await import(pathToFileURL(file).href)).default ?? {} : {};
}

function readDecisions(mode, n) {
  const file = resolve(ROOT, 'review/decisions', `${mode}-${n}.json`);
  return existsSync(file) ? JSON.parse(readFileSync(file, 'utf-8')).decisions ?? {} : {};
}

export async function reviewList(mode, n, source) {
  const proposals = await readProposals(mode, n);
  const decisions = readDecisions(mode, n);
  if (mode === 'words') {
    const { ops, undecided } = wordOps(source, n, proposals, decisions);
    return { name: `W${n}`, title: `word batch ${n}: paraphrases and atom marks`, ops, undecided };
  }
  if (mode === 'kinds') {
    const { ops, undecided } = kindsOps(source, n, proposals, decisions);
    return { name: `K${n}`, title: `kinds batch ${n}: built or spelled`, ops, undecided };
  }
  throw new Error('usage: node scripts/review-batch.js words|kinds <batch> [--stdout]');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [mode, nText, ...flags] = process.argv.slice(2);
  const n = Number(nText);
  try {
    if (!['words', 'kinds'].includes(mode) || !(n >= 1)) throw new Error('usage: node scripts/review-batch.js words|kinds <batch> [--stdout]');
    const list = await reviewList(mode, n, await loadSource());
    const text = refactorListText(list);
    if (flags.includes('--stdout')) console.log(text);
    else {
      writeFileSync(resolve(ROOT, 'refactors', `${list.name}.ts`), text);
      console.log(`refactors/${list.name}.ts: ${list.ops.length} op(s), ${list.undecided.length} not decided yet`);
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
