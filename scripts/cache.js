// Where the scripts keep what they have already worked out (.cache/, not in git), and how to write it safely.
//
//   readCache('source.json')            -> the parsed file, or null (missing, or damaged)
//   writeCache('source.json', value)    -> writes it whole: temp file first, then renamed, so a reader never sees half a file
//
// Several scripts run at once (npm run check), so every write is all-or-nothing; the worst that happens when two
// write the same file is that the later one wins. HSD_NO_CACHE=1 turns reading off (every script then works from the files).

import { mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { ROOT } from './stamp.js';

export const CACHE_DIR = resolve(ROOT, '.cache');
export const cacheOff = () => process.env.HSD_NO_CACHE === '1';

export function readCache(name, dir = CACHE_DIR) {
  if (cacheOff()) return null;
  try {
    return JSON.parse(readFileSync(resolve(dir, name), 'utf8'));
  } catch {
    return null;
  }
}

export function writeCache(name, value, dir = CACHE_DIR) {
  const file = resolve(dir, name);
  const tmp = `${file}.${process.pid}.tmp`;
  try {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(tmp, JSON.stringify(value));
    renameSync(tmp, file);
  } catch {
    try {
      rmSync(tmp, { force: true });
    } catch {
      /* a cache that cannot be written is only slower */
    }
  }
}
