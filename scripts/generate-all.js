#!/usr/bin/env node
// Runs the generators of `npm run build` in one process, each only when what it reads has changed.
//
//   npm run generate               the build's first step (node --import ./scripts/fast-data.js scripts/generate-all.js)
//   npm run generate -- --fresh    every step, whatever is remembered
//
// One process: the data comes through one bundle (scripts/fast-data.js), and the two steps that need the KB share one,
// opened with the parse memory (scripts/parse-memo.js), so only a new or changed sentence is parsed. Run apart, each step
// loaded the data or the KB from nothing (10 to 16 s each) and the Akinator pool parsed every sentence again (50 s).
//
// Only what changed: each step names what it reads. A stamp of those files (scripts/stamp.js: path, time and size) is
// remembered in .cache/generate.json when the run ends; a step whose stamp is the one remembered, and whose files are
// there, is skipped. The stamps of all the steps are taken in one walk of the repo, and again only after a step changed
// one of its files, so a step always sees what the steps before it wrote. Every step writes its files only when their
// text changed (scripts/write-changed.js), so an output that came out the same keeps its time and the other stamps stay
// valid: the gates' remembered reports, the KB source, the data bundle.
//
// The steps run in an order where no step reads what a later one writes. The KB does not read any of the files written
// here, and none of them is a module a later step imports (those come from the bundle as it was when the run began).
// The inputs are on the generous side: a missed input would leave a stale file, a spare one only costs a run.

import { existsSync, statSync } from 'fs';
import { resolve } from 'path';
import { readCache, writeCache } from './cache.js';
import { ROOT, sharedStats, stampOf } from './stamp.js';

const LIB = ['src/lib', 'package.json'];
// what the KB is made from (scripts/kb.js, scripts/source-cache.js), the rules and lists under kb/ and the drafts in review/
const KB = ['src/data', 'src/content', 'kb', 'review', 'scripts/kb.js', 'scripts/kb-source.js', 'scripts/kb-source-worker.js', 'scripts/lessons.js', 'scripts/parse-memo.js', ...LIB];

export const STEPS = [
  { name: 'dictionary', script: 'generate-dictionary.js', reads: ['src/data', ...LIB], writes: ['src/content/dictionary.md', 'src/content/dictionary.rus.md', 'src/content/dictionary.zh.md'] },
  { name: 'grammar-overview', script: 'generate-grammar-overview.js', reads: ['src/content', 'src/data', 'scripts/lessons.js', ...LIB], writes: ['src/content/appendix-grammar.ts'] },
  { name: 'word-usage', script: 'generate-word-usage.js', reads: ['src/content', 'src/data', 'scripts/list-content-files.js', 'scripts/word-refs.js', ...LIB], writes: ['src/data/word-usage.json'] },
  { name: 'relations', script: 'generate-relations.js', reads: KB, writes: ['src/data/relations.json'], kb: true },
  { name: 'akinator-data', script: 'generate-akinator-data.js', reads: [...KB, 'src/lib/kb/akinator-export.js'], writes: ['src/data/akinator-pool.json'], kb: true },
  { name: 'tree-data', script: 'generate-tree-data.js', reads: [...KB, 'scripts/book-sentences.js', 'scripts/rule-english.js'], writes: ['src/data/tree-data.json'], kb: true },
];

const MEMORY = 'generate.json';
// a step's stamp: what it reads, its own script, and the runtime
const stampOfStep = (step) => `${process.version}:${stampOf([...step.reads, `scripts/${step.script}`, 'scripts/generate-all.js', 'scripts/write-changed.js'])}`;
// every step's stamp, in one walk of the repo
const stampAll = () => sharedStats(() => Object.fromEntries(STEPS.map((step) => [step.name, stampOfStep(step)])));
// the times of a step's files: did it write?
const timesOf = (step) => step.writes.map((f) => (existsSync(resolve(ROOT, f)) ? statSync(resolve(ROOT, f)).mtimeMs : 0)).join();

async function main() {
  const fresh = process.argv.includes('--fresh');
  const remembered = (!fresh && readCache(MEMORY)) || {};
  let kbOpened = null;
  const sharedKb = async () => {
    const { openKb } = await import('./kb.js');
    return (kbOpened ??= openKb({ memo: true }));
  };
  const failed = new Set();
  const began = performance.now();
  let stamps = stampAll();
  for (const step of STEPS) {
    if (remembered[step.name] === stamps[step.name] && step.writes.every((f) => existsSync(resolve(ROOT, f)))) {
      console.log(`generate: ${step.name} unchanged, skipped`);
      continue;
    }
    const t0 = performance.now();
    const before = timesOf(step);
    try {
      const { generate } = await import(`./${step.script}`);
      await generate(step.kb ? { kb: await sharedKb() } : {});
      console.log(`generate: ${step.name} done in ${((performance.now() - t0) / 1000).toFixed(1)} s`);
    } catch (e) {
      failed.add(step.name);
      console.error(`generate: ${step.name} failed: ${e.message}`);
    }
    if (timesOf(step) !== before) stamps = stampAll();
  }
  // the stamps as the files are now, so what this run wrote counts as seen; a failed step runs again next time
  const after = {};
  for (const step of STEPS) if (!failed.has(step.name)) after[step.name] = stamps[step.name];
  writeCache(MEMORY, after);
  console.log(`generate: ${failed.size ? `${failed.size} failed` : 'all done'} (${((performance.now() - began) / 1000).toFixed(1)} s)`);
  if (failed.size) process.exitCode = 1;
}

await main();
