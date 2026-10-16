#!/usr/bin/env node
// Writes the small word lists the language is measured against (KB_PLAN.md phase 6, K12): kb/yardsticks/.
//   mandarin-frequency.json   the 6000 most common Mandarin words [{ zh, py, rank }] (the list in misc/, see frequency-list.js)
//   basic-english.json        the Basic English word base the author trimmed in misc/ [{ en, group, zh: [...] }]
// The English top 3000 comes from scripts/python/english_top.py (wordfreq). The sentences and the grammar lists have their
// own scripts. The files are committed, so the measuring never needs misc/ or Python; run this again only when those change.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { loadFrequencyList } from './frequency-list.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const OUT = resolve(ROOT, 'kb/yardsticks');
const BASIC = [process.env.HSD_BASIC_ENGLISH, resolve(ROOT, '../misc/scripts/basic-english-mandarin.json'), resolve(ROOT, '../jiandanhua-dictionary/misc/scripts/basic-english-mandarin.json')].filter(Boolean).find((p) => existsSync(p));
const TOP = 6000;

// one entry per line: small to ship, and a change shows as the entries it touches
const lines = (items) => `[\n${items.map((i) => JSON.stringify(i)).join(',\n')}\n]\n`;

export function basicEnglish(raw) {
  const out = [];
  for (const [group, items] of Object.entries(raw)) for (const it of items) out.push({ en: it.en, group, zh: [...new Set((it.senses ?? []).map((s) => s.zh).filter(Boolean))] });
  return out;
}

function main() {
  mkdirSync(OUT, { recursive: true });
  const freq = loadFrequencyList();
  if (!freq) throw new Error('no Mandarin frequency list (set HSD_FREQ_CSV, see scripts/frequency-list.js)');
  writeFileSync(resolve(OUT, 'mandarin-frequency.json'), lines(freq.slice(0, TOP).map(({ zh, py, rank }) => ({ zh, py, rank }))));
  console.log(`generate-yardsticks: ${Math.min(TOP, freq.length)} Mandarin words`);
  if (BASIC) {
    const basic = basicEnglish(JSON.parse(readFileSync(BASIC, 'utf8')));
    writeFileSync(resolve(OUT, 'basic-english.json'), lines(basic));
    console.log(`generate-yardsticks: ${basic.length} Basic English words`);
  } else console.log('generate-yardsticks: no basic-english-mandarin.json (set HSD_BASIC_ENGLISH); Basic English left as it was');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) main();
