// Composites that say it the same way (any form in common) -- the synonyms
// to keep consistent. The review page shows the same links per entry.
//   node scripts/composite-same-form.js            # all groups, biggest first
//   node scripts/composite-same-form.js 汉语        # the groups one composite is in
import dictionary from '../src/data/dictionary.ts';
import composites from '../src/data/composites.ts';
import { resolveWordRefs } from '../src/lib/word-refs.js';
import { buildWordIndex } from '../src/lib/dictionary-stats.js';

const idx = buildWordIndex(dictionary);
const byForm = new Map();
for (const e of composites.entries) {
  for (const f of e.hsd ? e.hsd.split(' / ').map((x) => resolveWordRefs(x, idx)) : []) {
    if (!byForm.has(f)) byForm.set(f, []);
    byForm.get(f).push(e);
  }
}
const want = process.argv[2];
const groups = [...byForm].filter(([, es]) => es.length > 1 && (!want || es.some((e) => e.zh === want)));
groups.sort((a, b) => b[1].length - a[1].length);
for (const [form, es] of groups) {
  console.log(`${form}  (${es.length})`);
  for (const e of es.sort((a, b) => a.rank - b.rank)) console.log(`   #${e.rank} ${e.zh} ${e.py} -- ${e.en}`);
}
console.log(`${groups.length} group(s) of composites with a form in common.`);
