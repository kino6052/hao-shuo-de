// The Mandarin frequency list (misc/translation/src/dictionaries/dictionary.raw.csv),
// which lives outside this repo: set HSD_FREQ_CSV to its path, or keep a checkout
// of misc/ or jiandanhua-dictionary/ next to this repo. Shared by report-roots and the KB.

import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { ROOT } from './refactor-lib.js';

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
