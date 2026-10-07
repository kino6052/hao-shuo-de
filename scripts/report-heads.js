#!/usr/bin/env node
// Rebalancing the vocabulary by heads and naturalness: where the composites
// hang (src/lib/heads.js), how close they are to Mandarin (src/lib/
// naturalness.js), and which roots would bring them closer.
//
//   1. naturalness  how many composites say Mandarin's own word, by phase,
//                   and weighted toward common words
//   2. heads        the busiest heads, with how close their composites are:
//                   a generic head (dōng-xi, rén, dì-fang ...) carrying many
//                   descriptions is where Mandarin has a more exact root
//   3. roots        the hanzi that, as a new word or a new sense of a word
//                   with the same sound, would let the most composites say
//                   Mandarin's own word (or at least its core); weighted by
//                   how common those words are
//   4. idle         words that head nothing and few composites use
//   5. families     the numbers stay one family; categories the families split
//
// Pinyin for the roots comes from the frequency list (../misc/translation/
// src/dictionaries/dictionary.raw.csv); without it the roots are listed
// without their sound.
//
//   npm run report-heads              all sections
//   npm run report-heads -- --top 40  longer lists

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import dictionary from '../src/data/dictionary.ts';
import composites from '../src/data/composites.ts';
import coverage from '../src/data/coverage.ts';
import { headCounts, headHanzi } from '../src/lib/heads.js';
import { naturalness, naturalnessSummary, coreHanzi, NATURALNESS } from '../src/lib/naturalness.js';
import { analyzeFamilies, categoryFit, wordCategories } from '../src/lib/graph.js';
import { wordRefIds } from '../src/lib/word-refs.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const CSV = resolve(ROOT, '../misc/translation/src/dictionaries/dictionary.raw.csv');
const args = process.argv.slice(2);
const TOP = Number(args[args.indexOf('--top') + 1]) || 25;

const W = dictionary.words;
const term = (id) => W[id]?.term ?? id;
const entries = composites.entries;
const { heads, direct, under } = headCounts(dictionary, entries);
const score = new Map(entries.map((e) => [e.zh, naturalness(e, headHanzi(heads.get(e.zh), W))]));
const weightOf = (e) => 1000 / e.rank;
const pct = (n, all) => `${Math.round((n / all) * 100)}%`;

// 1. naturalness
console.log('1. NATURALNESS: how close the composites are to Mandarin');
const all = naturalnessSummary(entries.map((entry) => ({ entry, score: score.get(entry.zh) })));
const line = (label, s) =>
  console.log(`   ${label.padEnd(9)} ${[5, 4, 3, 2, 1].map((k) => `${'●'.repeat(k).padStart(5)} ${String(s.counts[k]).padStart(4)}`).join('  ')}   average ${s.average.toFixed(2)}`);
line('all', all);
for (const phase of [...new Set(entries.map((e) => e.phase))].sort())
  line(`phase ${phase}`, naturalnessSummary(entries.filter((e) => e.phase === phase).map((entry) => ({ entry, score: score.get(entry.zh) }))));
console.log(`   weighted toward common words: ${all.weighted.toFixed(2)} of 5; ${pct(all.counts[5], all.n)} say Mandarin's own word`);
console.log(`   (${Object.entries(NATURALNESS).map(([k, v]) => `${k} = ${v.eng}`).reverse().join(', ')})`);

// 2. heads
console.log(`\n2. HEADS: what each word or compound carries (direct), and how close those are`);
const headName = (key) => (key.startsWith('w:') ? term(key.slice(2)) : key.slice(2));
const busiest = [...direct].sort((a, b) => b[1].length - a[1].length).slice(0, TOP);
for (const [key, es] of busiest) {
  const s = naturalnessSummary(es.map((entry) => ({ entry, score: score.get(entry.zh) })));
  const loose = es.filter((e) => (score.get(e.zh) ?? 5) <= 2).length;
  console.log(`   ${headName(key).padEnd(10)} ${String(es.length).padStart(4)} composites, average closeness ${s.average.toFixed(1)}, ${loose} loose descriptions`);
}

// 3. roots: which hanzi would bring the most composites to Mandarin's own word
const have = new Set();
for (const w of Object.values(W)) {
  have.add(w.hanzi);
  for (const s of Object.values(w.senses ?? {})) have.add(s.hanzi);
}
const longest = Math.max(...[...have].map((h) => h.length));
const writable = (zh, extra) => {
  for (let i = 0; i < zh.length; ) {
    let n = Math.min(longest, zh.length - i);
    while (n > 0 && !have.has(zh.slice(i, i + n)) && !(n === 1 && zh[i] === extra)) n--;
    if (!n) return false;
    i += n;
  }
  return true;
};
const pinyin = new Map(); // hanzi -> pinyin of the character on its own
if (existsSync(CSV)) {
  for (const row of readFileSync(CSV, 'utf-8').split(/\r?\n/).slice(1)) {
    const [, zh, py] = row.split(',');
    if (zh && [...zh].length === 1 && !pinyin.has(zh)) pinyin.set(zh, (py ?? '').normalize('NFC'));
  }
}
// a character the list has no row for: read its syllable off a composite's
// pinyin once the other characters' syllables are known (学校 xuéxiào -> xiào)
const known = (c) => pinyin.get(c) ?? Object.values(W).find((w) => w.hanzi === c)?.term;
const syllableOf = (c) => {
  for (const e of entries) {
    const i = [...e.zh].indexOf(c);
    if (i < 0 || !e.py) continue;
    const others = [...e.zh].map((x, k) => (k === i ? null : known(x)));
    if (others.some((x, k) => k !== i && !x)) continue;
    const before = others.slice(0, i).join('').normalize('NFC');
    const after = others.slice(i + 1).join('').normalize('NFC');
    const py = e.py.normalize('NFC').replace(/\s|'/g, '');
    if (py.startsWith(before) && py.endsWith(after) && py.length > before.length + after.length) return py.slice(before.length, py.length - after.length);
  }
  return undefined;
};
const byTerm = new Map(Object.entries(W).map(([id, w]) => [w.term.normalize('NFC'), id]));
const candidates = new Map(); // hanzi -> { exact: [], core: [] }
for (const e of entries) {
  const s = score.get(e.zh);
  if (s === 5 || e.fit === 'name' || e.fit === 'skip') continue;
  const missing = [...new Set([...e.zh].filter((c) => !have.has(c)))];
  if (missing.length === 1 && writable(e.zh, missing[0])) {
    const c = missing[0];
    if (!candidates.has(c)) candidates.set(c, { exact: [], core: [] });
    candidates.get(c).exact.push(e);
  }
  const core = coreHanzi(e);
  if ((s ?? 1) < 3 && !have.has(core) && !candidates.get(core)?.exact.includes(e)) {
    if (!candidates.has(core)) candidates.set(core, { exact: [], core: [] });
    candidates.get(core).core.push(e);
  }
}
const gain = ({ exact, core }) => exact.reduce((a, e) => a + weightOf(e) * (5 - (score.get(e.zh) ?? 1)), 0) + core.reduce((a, e) => a + weightOf(e) * 2, 0);
console.log(`\n3. ROOTS: hanzi that would bring composites to Mandarin's own word (exact) or its core`);
console.log(`   gain weighs each composite by how common it is; "sense of X" = the sound is already the word X`);
for (const [c, v] of [...candidates].sort((a, b) => gain(b[1]) - gain(a[1])).slice(0, TOP)) {
  const py = pinyin.get(c) ?? syllableOf(c);
  const owner = py && byTerm.get(py);
  const how = !py ? '?' : owner ? `sense of ${term(owner)}` : `new word ${py}`;
  const sample = [...new Set([...v.exact, ...v.core])].sort((a, b) => a.rank - b.rank).slice(0, 7).map((e) => e.zh).join(' ');
  console.log(`   ${c} ${how.padEnd(16)} gain ${gain(v).toFixed(1).padStart(6)}   exact ${String(v.exact.length).padStart(2)}, core ${String(v.core.length).padStart(2)}   ${sample}`);
}

// 4. idle words
console.log(`\n4. IDLE: words that head nothing (with how many composites use them at all)`);
const uses = new Map();
for (const e of entries) for (const id of new Set(wordRefIds(e.hsd ?? ''))) uses.set(id, (uses.get(id) ?? 0) + 1);
const idle = Object.keys(W).filter((id) => !under.has(id)).sort((a, b) => (uses.get(a) ?? 0) - (uses.get(b) ?? 0));
console.log(`   ${idle.map((id) => `${term(id)} (${uses.get(id) ?? 0}, necessity ${W[id].necessity.index})`).join(', ') || 'none'}`);

// 5. families
const fam = analyzeFamilies({ dictionary, composites, coverage });
const fit = categoryFit(dictionary, fam.parts);
const nums = [...wordCategories(dictionary)].filter(([id, c]) => c.leaf === 'numbers-ordinals' && W[id]).map(([id]) => id);
const numsOne = new Set(nums.map((id) => fam.parts.get(id))).size === 1;
console.log(`\n5. FAMILIES: ${fam.clusters.length} families; categories keep ${pct(fit.purity, 1)} of their words together; numbers ${numsOne ? 'are one family' : 'are SPLIT'}`);
for (const s of fit.split) console.log(`   ${s.leaf} is split over ${s.families} families: ${s.ids.map((id) => `${term(id)}→${fam.parts.get(id)}`).join(' ')}`);
if (!numsOne) process.exitCode = 1;
