// A short fingerprint of a set of files, for the caches (scripts/cache.js): "has anything I read changed?"
//
//   stampOf(['src/data', 'scripts/lessons.js'])  -> 40 hex characters
//
// It looks at each file's path, modified time and size, not its contents, so it takes a fraction of a second
// for the whole repo. A folder is walked; a file is taken as given. Not looked into: node_modules, .git, .cache,
// dist, tools, generated reports, the READMEs (the pre-commit hook writes them from the files they describe), tests (*.test.js).
// Notes count (*.md, .about): some gates read them (check-book and check-jargon read chapters in .md, check-passive reads .about).

import { readdirSync, statSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

export const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

const SKIP_DIR = new Set(['node_modules', '.git', '.cache', 'dist', 'tools', '.vite', '.claude', 'reports']);
const SKIP_FILE = /(^README\.md|\.test\.js|\.test\.ts|\.tsbuildinfo)$/;

// While `sharedStats` runs, what the stamps look at is read from disk once and kept (a script that works out several stamps
// of overlapping folders walks each file once). Never kept longer: a long-running process must see its files change.
let shared = null;
export function sharedStats(fn) {
  shared = { dirs: new Map(), files: new Map() };
  try {
    return fn();
  } finally {
    shared = null;
  }
}
const listing = (dir) => {
  if (shared?.dirs.has(dir)) return shared.dirs.get(dir);
  let entries = null;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    /* not there */
  }
  shared?.dirs.set(dir, entries);
  return entries;
};
const statOf = (full) => {
  if (shared?.files.has(full)) return shared.files.get(full);
  const s = statSync(full);
  const row = { dir: s.isDirectory(), mtimeMs: s.mtimeMs, size: s.size };
  shared?.files.set(full, row);
  return row;
};

// -> every file under `dir` the stamp looks at, as [relative path, mtimeMs, size]
function walk(dir, rel, out) {
  const entries = listing(dir);
  if (!entries) return;
  for (const e of entries) {
    const path = `${rel}/${e.name}`;
    if (e.isDirectory()) {
      if (!SKIP_DIR.has(e.name)) walk(resolve(dir, e.name), path, out);
    } else if (!SKIP_FILE.test(e.name)) {
      const s = statOf(resolve(dir, e.name));
      out.push([path, s.mtimeMs, s.size]);
    }
  }
}

// A script that starts others (check-all) works a stamp out once and hands it down in the environment, so each child
// does not walk the repo again (that walk is about half a second per process). The value names the repo it was
// worked out for, so a child running in a copy of the repo never takes it.
export const handDown = (name, value) => (process.env[`HSD_STAMP_${name}`] = `${ROOT}|${value}`);
export const handedDown = (name, compute) => {
  const given = process.env[`HSD_STAMP_${name}`];
  return given?.startsWith(`${ROOT}|`) ? given.slice(ROOT.length + 1) : compute();
};

export function stampOf(paths, { root = ROOT } = {}) {
  const rows = [];
  for (const p of paths) {
    const full = resolve(root, p);
    let s;
    try {
      s = statOf(full);
    } catch {
      rows.push([p, 0, -1]); // a missing path counts too: creating it changes the stamp
      continue;
    }
    if (s.dir) walk(full, p, rows);
    else rows.push([p, s.mtimeMs, s.size]);
  }
  rows.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const h = createHash('sha1');
  for (const [p, m, z] of rows) h.update(`${p}\0${m}\0${z}\n`);
  return h.digest('hex');
}
