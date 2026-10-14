// Remembers what each gate said, so `npm run check` does not run a gate whose input has not changed.
//
// A gate only reads the repo, so its report is decided by the files: the same files, the same report. The key of a result
// is a stamp of those files (scripts/stamp.js: path, modified time and size of everything under src, scripts, kb, review,
// refactors and public, plus the plan, the config and the lockfiles) and the Node version, and the result is the report, pass or fail. Change anything and every
// gate runs again; change nothing (a second `npm run check`, a check after a commit, `refactor --check` against today's files)
// and every gate answers at once.
//
// All the results are one file, .cache/gates.json, read once and kept in memory: a file just written costs about ten
// milliseconds the first time it is read, so seventeen files would cost more than the answers are worth.
//
//   const stamp = gateStamp();
//   const hit = lookupGate(stamp, 'check-forms');                  // { ok, out, ms } or null
//   recordGate(stamp, 'check-forms', { ok: true, out: '...', ms: 4100 });
//
// `npm run check -- --fresh` (or HSD_NO_CACHE=1) ignores what is remembered.
//
// The full pass (`check-all --full`, before a push) trusts no report kept by file stamps: it runs every gate. What it
// finds is kept under the committed tree instead (treeStamp: git's hash of HEAD's files), when no gate input differs
// from what is committed, so a second push of the same commit answers at once. The gates read nothing outside INPUTS
// but node_modules (the lockfiles stand for it), and git ignores nothing inside them, so the tree names their input.

import { execFileSync } from 'child_process';
import { rmSync } from 'fs';
import { resolve } from 'path';
import { CACHE_DIR, readCache, writeCache } from './cache.js';
import { ROOT, stampOf } from './stamp.js';

// the lockfiles too: an update of a package (TypeScript, esbuild) can change a report
export const INPUTS = ['src', 'scripts', 'kb', 'review', 'refactors', 'public', 'package.json', 'package-lock.json', 'bun.lock', 'tsconfig.json', 'BOOK_PLAN.md', 'vite.config.js'];
const FILE = 'gates.json';

// the Node that runs the gates is part of the key: another version can parse, sort or fail differently
export const gateStamp = (root) => `${process.version}:${stampOf(INPUTS, root ? { root } : undefined)}`;

const git = (args, root) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

// -> the gate inputs that differ from the last commit (changed, new, deleted; paths from the repo root),
//    [] when there are none, null outside a git checkout
export function uncommittedInputs(root = ROOT) {
  let out;
  try {
    out = git(['-c', 'core.quotePath=false', 'status', '--porcelain=v1', '-z', '--untracked-files=all', '--', ...INPUTS], root);
  } catch {
    return null;
  }
  const parts = out.split('\0');
  const paths = [];
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    paths.push(parts[i].slice(3));
    if (/^[RC]/.test(parts[i])) i++; // a rename: the old name follows
  }
  return paths;
}

// -> a key for the committed tree, when every gate input is as committed; else null
export function treeStamp(root = ROOT) {
  const changed = uncommittedInputs(root);
  if (!changed || changed.length) return null;
  try {
    return `${process.version}:tree:${git(['rev-parse', 'HEAD^{tree}'], root).trim()}`;
  } catch {
    return null; // no commit yet
  }
}

// the results of each cache folder, read once: { [key]: { stamp, ok, out, ms } }
const memory = new Map();
const rows = (dir) => {
  if (!memory.has(dir)) memory.set(dir, readCache(FILE, dir) ?? {});
  return memory.get(dir);
};

// -> { ok, out, ms } when this gate (key: its name and arguments) was last run on files with this stamp
export function lookupGate(stamp, key, dir = CACHE_DIR) {
  const kept = rows(dir)[key];
  return kept && kept.stamp === stamp ? kept : null;
}

// -> how long this gate took the last time it ran, on any files (0 when unknown): the slowest are started first
export const lastGateMs = (key, dir = CACHE_DIR) => rows(dir)[key]?.ms ?? 0;

export function recordGate(stamp, key, { ok, out, ms }, dir = CACHE_DIR) {
  const all = rows(dir);
  all[key] = { stamp, ok, out, ms };
  writeCache(FILE, all, dir);
  // the folder of one file per gate that came before
  rmSync(resolve(dir, 'gates'), { recursive: true, force: true });
}
