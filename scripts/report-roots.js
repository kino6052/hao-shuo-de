#!/usr/bin/env node
// Which roots would bring Hao-shuo-de closest to real Chinese: for every
// character the dictionary doesn't have yet, how many words of the frequency
// list it would complete -- words whose other characters are all Hao-shuo-de
// words (main hanzi or a sense's). A root that completes many common words is
// worth a place in the core (BOOK_PLAN.md D60: "a root that opens many words
// beats a low count"). Reported only; never fails.
//
// Each candidate is read with its sound in those words, and marked:
//   new word   no dictionary word has that toned sound
//   sense of X the sound is already the word X, so the root joins X as a
//              sense (one toned sound is one word, src/lib/senses.js)
//
// The frequency list (misc/translation/src/dictionaries/dictionary.raw.csv)
// lives outside this repo; set HSD_FREQ_CSV to its path, or keep a checkout
// of misc/ or jiandanhua-dictionary/ next to this repo. Skips quietly if it's
// missing.
//
//   npm run report-roots                    top candidates over the whole list
//   npm run report-roots -- --top 2000      only the 2000 most common words
//   npm run report-roots -- --show 电        the words one root would complete
//   npm run report-roots -- --json

import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import dictionaryData from '../src/data/dictionary.ts';
import compositesData from '../src/data/composites.ts';
import { ROOT } from './refactor-lib.js';
import { toneless } from '../src/lib/word-refs.js';

const CANDIDATES = [
  process.env.HSD_FREQ_CSV,
  resolve(ROOT, '../misc/translation/src/dictionaries/dictionary.raw.csv'),
  resolve(ROOT, '../kino6052/jiandanhua-dictionary/misc/translation/src/dictionaries/dictionary.raw.csv'),
  resolve(ROOT, '../jiandanhua-dictionary/misc/translation/src/dictionaries/dictionary.raw.csv'),
].filter(Boolean);

export const FREQ_CSV = CANDIDATES.find((p) => existsSync(p)) ?? null;

function parseLine(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (const ch of line) {
    if (ch === '"') q = !q;
    else if (ch === ',' && !q) out.push(cur), (cur = '');
    else cur += ch;
  }
  out.push(cur);
  return out;
}

// -> [{ zh, py, pos, speaking, writing, rank }] in frequency order (speaking
// commonality, then writing), without the ignored rows; one row per word.
export function loadFrequencyList(path = FREQ_CSV) {
  if (!path) return null;
  const rows = readFileSync(path, 'utf-8').trim().split('\n').slice(1).map(parseLine);
  const seen = new Set();
  return rows
    .map((r) => ({ n: Number(r[0]), zh: r[1].replace(/\d+$/, ''), py: r[2], pos: r[3], speaking: Number(r[9]), writing: Number(r[10]), ignored: !!r[11]?.trim() }))
    .filter((r) => !r.ignored && r.zh)
    .sort((a, b) => b.speaking - a.speaking || b.writing - a.writing || a.n - b.n)
    .filter((r) => (seen.has(r.zh) ? false : seen.add(r.zh)))
    .map((r, i) => ({ ...r, rank: i + 1 }));
}

const V = 'aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ';
const SYL = new RegExp(`(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?[${V}]+(?:ng(?![${V}])|n(?![${V}])|r(?![${V}]))?`, 'gi');

// -> the syllables of a pinyin word, one per character, or null if they don't line up.
export function syllables(py, zh) {
  const s = py.normalize('NFC').toLowerCase().replace(new RegExp(`[^a-z${V}]`, 'g'), ' ').match(SYL) ?? [];
  const chars = [...zh];
  // erhua: 一会儿 is yīhuìr, two syllables for three characters
  if (s.length === chars.length - 1 && chars[chars.length - 1] === '儿' && /r$/.test(s[s.length - 1])) {
    s[s.length - 1] = s[s.length - 1].slice(0, -1);
    s.push('r');
  }
  return s.length === chars.length ? s : null;
}

if (process.argv[1]?.endsWith('report-roots.js')) {
  if (!FREQ_CSV) {
    console.log('report-roots: no frequency list (set HSD_FREQ_CSV) -- skipped.');
    process.exit(0);
  }
  const args = process.argv.slice(2);
  const flag = (k) => {
    const i = args.indexOf(`--${k}`);
    return i < 0 ? undefined : args[i + 1];
  };
  const top = Number(flag('top') ?? Infinity);
  const show = flag('show');
  const list = loadFrequencyList().filter((r) => r.rank <= top);

  // what Hao-shuo-de can already write: main hanzi and sense hanzi, by sound
  const W = dictionaryData.words;
  const have = new Set();
  const soundOf = new Map(); // toned term -> id
  for (const [id, w] of Object.entries(W)) {
    soundOf.set(w.term, id);
    if ([...w.hanzi].length === 1) have.add(w.hanzi);
    for (const s of Object.values(w.senses ?? {})) have.add(s.hanzi);
  }
  const listed = new Set(compositesData.entries.map((e) => e.zh));

  const roots = new Map(); // char -> { words: [], sounds: Map }
  let complete = 0;
  for (const r of list) {
    const chars = [...r.zh];
    const missing = [...new Set(chars.filter((c) => !have.has(c)))];
    if (!missing.length) {
      complete++;
      continue;
    }
    if (missing.length !== 1) continue;
    const c = missing[0];
    const syl = syllables(r.py, r.zh);
    const sound = syl ? syl[chars.indexOf(c)] : null;
    const e = roots.get(c) ?? { char: c, words: [], sounds: new Map() };
    e.words.push(r);
    if (sound) e.sounds.set(sound, (e.sounds.get(sound) ?? 0) + 1);
    roots.set(c, e);
  }

  // score: completed words, the common ones counting more
  const weight = (rank) => (rank <= 1000 ? 3 : rank <= 2000 ? 2 : 1);
  const ranked = [...roots.values()]
    .map((e) => {
      const sound = [...e.sounds].sort((a, b) => b[1] - a[1])[0]?.[0] ?? '?';
      const clash = soundOf.get(sound);
      const toneMatch = [...soundOf.keys()].find((t) => toneless(t) === toneless(sound) && t !== sound);
      return {
        root: e.char,
        sound,
        as: clash ? `sense of ${clash} (${W[clash].hanzi})` : 'new word',
        toneNeighbour: toneMatch ? `${toneMatch} ${W[soundOf.get(toneMatch)].hanzi}` : '',
        words: e.words.length,
        score: e.words.reduce((s, r) => s + weight(r.rank), 0),
        unlisted: e.words.filter((r) => !listed.has(r.zh)).length,
        examples: e.words.slice(0, 10).map((r) => r.zh),
        all: e.words,
      };
    })
    .sort((a, b) => b.score - a.score || b.words - a.words);

  if (show) {
    const e = ranked.find((x) => x.root === show);
    if (!e) {
      console.log(`report-roots: ${show} completes no word (or is already a word).`);
      process.exit(0);
    }
    console.log(`${e.root} ${e.sound} (${e.as}) completes ${e.words} word(s):`);
    for (const r of e.all) console.log(`  ${String(r.rank).padStart(5)}  ${r.zh}  ${r.py}  ${listed.has(r.zh) ? '' : '(not in the composites yet)'}`);
    process.exit(0);
  }
  if (args.includes('--json')) {
    console.log(JSON.stringify(ranked.map(({ all: _a, ...r }) => r), null, 2));
    process.exit(0);
  }
  console.log(`report-roots: ${list.length} words in the list; ${complete} already written with Hao-shuo-de hanzi alone.`);
  console.log('Roots that would complete the most words (score: top-1000 words count 3, top-2000 2, the rest 1):\n');
  console.log('  root  sound     score words  as');
  for (const r of ranked.slice(0, Number(flag('limit') ?? 60))) {
    console.log(
      `  ${r.root}    ${r.sound.padEnd(8)} ${String(r.score).padStart(4)} ${String(r.words).padStart(5)}  ${r.as}${r.toneNeighbour ? `  [tone: ${r.toneNeighbour}]` : ''}  ${r.examples.join(' ')}`,
    );
  }
}
