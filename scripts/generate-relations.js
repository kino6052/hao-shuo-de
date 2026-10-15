#!/usr/bin/env node
// Writes the accepted relations the dictionaries show to the learner (KB_PLAN.md K18, phase 5):
// opposites, words said the same way, close words, and wholes and their parts. A relation still proposed is not
// shown; it waits on the relations review page (/__review/?relations).
//
// Output: src/data/relations.json, structured as
//   { composites: { <zh>: { opposite?, same?, close?, partOf?, parts? : [end, ...] } },
//     words:      { <id>:  { ... the same keys ... } } }
// where an end is a composite's hanzi or "word:<id>". Regenerate with `npm run relations`; the build does it.

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { openKb } from './kb.js';

const OUT_PATH = resolve(fileURLToPath(new URL('.', import.meta.url)), '../src/data/relations.json');

// the kinds the learner sees, as pairs or groups -> the key each end stores the others under
const SYMMETRIC = { opposite: 'opposite', close: 'close', 'same-form': 'same' };

export function relationsIndex(report, { words, composites }) {
  const wordIds = new Set(Object.keys(words));
  const zhs = new Set(composites.map((c) => c.zh));
  const end = (e) => (zhs.has(e) ? e : wordIds.has(e) ? `word:${e}` : null);
  const out = { composites: {}, words: {} };
  const put = (e, key, other) => {
    const ref = end(e);
    const target = end(other);
    if (!ref || !target || ref === target) return;
    const [bucket, name] = ref.startsWith('word:') ? ['words', ref.slice(5)] : ['composites', ref];
    const list = ((out[bucket][name] ??= {})[key] ??= []);
    if (!list.includes(target)) list.push(target);
  };
  for (const r of report.relations) {
    if (r.status !== 'accepted') continue;
    if (SYMMETRIC[r.kind]) {
      const members = r.members ?? [r.a, r.b];
      for (const a of members) for (const b of members) if (a !== b) put(a, SYMMETRIC[r.kind], b);
    } else if (r.kind === 'part-of' && r.ends !== 'composite-text') {
      put(r.a, 'partOf', r.b);
      put(r.b, 'parts', r.a);
    }
  }
  // stable order, so a regeneration changes only what the data changed
  const sorted = (m) => Object.fromEntries(Object.keys(m).sort().map((k) => [k, Object.fromEntries(Object.entries(m[k]).sort().map(([key, list]) => [key, [...list].sort()]))]));
  return { composites: sorted(out.composites), words: sorted(out.words) };
}

async function main() {
  const kb = await openKb();
  const index = relationsIndex(kb.relations(), { words: kb.source.words, composites: kb.source.composites });
  const text = JSON.stringify(index, null, 1) + '\n';
  writeFileSync(OUT_PATH, text);
  console.log(`generate-relations: ${Object.keys(index.composites).length} composites and ${Object.keys(index.words).length} words with relations`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main();
