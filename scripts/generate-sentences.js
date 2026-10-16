#!/usr/bin/env node
// Picks about 1000 everyday sentences for the yardsticks (KB_PLAN.md phase 6, K12) out of the Tatoeba pairs
// (the manythings.org cmn-eng.zip, a copy of tatoeba.org's sentences; CC-BY 2.0 France). A sentence is kept when it is short,
// has no digits or Latin letters, and every character is one of the characters of the most common Mandarin words (which
// are all simplified, so Traditional sentences fall out). The simplest come first, by how common their characters are;
// a repeated Mandarin or English side is dropped.
//
//   node scripts/generate-sentences.js <path to cmn.txt> [--count 1000] [--words 1500]
//
// Output: kb/yardsticks/sentences.json   [{ zh, en, id, by }]  (id: the Tatoeba id of the Mandarin sentence, by: its author;
// the credit the license asks for). The file is committed; the download is not.

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { loadFrequencyList } from './frequency-list.js';

const OUT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../kb/yardsticks/sentences.json');
const MIN_CHARS = 3;
const MAX_CHARS = 12;

// "Hi.\t你好。\tCC-BY 2.0 (France) Attribution: tatoeba.org #538123 (CM) & #4857568 (musclegirlxyp)" -> a pair, or null
export function parsePair(line) {
  const [en, zh, credit = ''] = line.replace(/\r$/, '').split('\t');
  if (!en || !zh) return null;
  const m = credit.match(/#(\d+) \(([^)]*)\) & #(\d+) \(([^)]*)\)/);
  return { en: en.trim(), zh: zh.trim(), id: m?.[3] ?? '', by: m?.[4] ?? '' };
}

// -> the sentences, simplest first: { zh, en, id, by }
export function pickSentences(lines, commonChars, { count = 1000 } = {}) {
  const rank = new Map([...commonChars].map((c, i) => [c, i]));
  const seenZh = new Set();
  const seenEn = new Set();
  const scored = [];
  for (const line of lines) {
    const p = parsePair(line);
    if (!p) continue;
    const chars = [...p.zh.replace(/[，。！？、；：“”‘’…—\s]/g, '')];
    if (chars.length < MIN_CHARS || chars.length > MAX_CHARS) continue;
    if (/[0-9A-Za-z]/.test(p.zh) || !chars.every((c) => rank.has(c))) continue;
    // the average rank of its characters, with a little weight on the rarest one: a sentence is as hard as its hardest character
    const ranks = chars.map((c) => rank.get(c));
    scored.push({ ...p, score: ranks.reduce((a, b) => a + b, 0) / ranks.length + Math.max(...ranks) / 4 });
  }
  scored.sort((a, b) => a.score - b.score || a.zh.length - b.zh.length || a.zh.localeCompare(b.zh));
  const out = [];
  for (const s of scored) {
    const en = s.en.toLowerCase();
    if (seenZh.has(s.zh) || seenEn.has(en)) continue;
    seenZh.add(s.zh);
    seenEn.add(en);
    out.push({ zh: s.zh, en: s.en, id: s.id, by: s.by });
    if (out.length >= count) break;
  }
  return out;
}

function main() {
  const args = process.argv.slice(2);
  const opt = (name, fallback) => (args.includes(name) ? Number(args[args.indexOf(name) + 1]) : fallback);
  const path = args.find((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));
  if (!path) throw new Error('usage: node scripts/generate-sentences.js <path to cmn.txt> [--count 1000] [--words 1500]');
  const freq = loadFrequencyList();
  if (!freq) throw new Error('no Mandarin frequency list (see scripts/frequency-list.js)');
  // the characters of the most common words, in the order they first appear
  const chars = [];
  for (const w of freq.slice(0, opt('--words', 1500))) for (const c of w.zh) if (!chars.includes(c)) chars.push(c);
  const sentences = pickSentences(readFileSync(path, 'utf8').split('\n'), chars, { count: opt('--count', 1000) });
  mkdirSync(resolve(OUT, '..'), { recursive: true });
  writeFileSync(OUT, `[\n${sentences.map((s) => JSON.stringify(s)).join(',\n')}\n]\n`);
  console.log(`generate-sentences: ${sentences.length} sentences from ${chars.length} common characters -> kb/yardsticks/sentences.json`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) main();
