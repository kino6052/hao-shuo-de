import { readdirSync } from 'fs';
import { join, relative } from 'path';

// Recursively lists every file under `dir`, returned as paths relative to
// `dir` with forward slashes regardless of OS (so callers can match/join
// them consistently). Content used to be flat, but lessons now live one per
// folder (src/content/lesson-01/index.ts, ...), so a plain readdirSync no
// longer sees everything -- this is the recursive equivalent both build
// scripts need.
export function listContentFiles(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listContentFiles(full, base));
    } else {
      out.push(relative(base, full).split('\\').join('/'));
    }
  }
  return out;
}
