// The snapshot of the parses at a git ref, for `kb parse-diff` (KB_PLAN.md K20): the repo as it was
// at the ref is written to a temporary folder (with a temporary index, so the real index and files
// are not touched), `scripts/parse-snapshot.js` is run there, and the folder is removed.
//
//   snapshotAtRef('HEAD', { all: false }) -> the snapshot (src/lib/kb/parse-diff.js), or throws

import { spawn, spawnSync } from 'child_process';
import { copyFileSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';
import { ROOT } from './refactor-lib.js';
import { newCopy } from './temp-copy.js';
import { memoEnv } from './parse-memo.js';

// the two files copied into the export, so a ref from before they existed can be snapshotted too
const OVERLAY = ['scripts/parse-snapshot.js', 'src/lib/kb/parse-diff.js'];

// what the KB reads
const PATHS = ['src', 'scripts', 'kb', 'package.json', 'tsconfig.json'];

function git(args, { env = {}, input } = {}) {
  const r = spawnSync('git', args, { cwd: ROOT, encoding: 'utf-8', input, env: { ...process.env, ...env }, maxBuffer: 256 * 1024 * 1024 });
  if (r.status !== 0) throw new Error(`git ${args[0]}: ${(r.stderr || r.error?.message || 'failed').trim().split('\n')[0]}`);
  return r.stdout;
}

// writes the files of `ref` under `dir`
export function exportRef(ref, dir) {
  const index = join(dir, '.git-index');
  const env = { GIT_INDEX_FILE: index };
  git(['rev-parse', '--verify', `${ref}^{commit}`]);
  git(['read-tree', ref], { env });
  const names = git(['ls-tree', '-r', '-z', '--name-only', ref, '--', ...PATHS]);
  git(['checkout-index', '-f', '-z', '--stdin', `--prefix=${dir.replaceAll('\\', '/')}/`], { env, input: names });
  rmSync(index, { force: true });
}

export async function snapshotAtRef(ref, { all = false } = {}) {
  const copy = newCopy('hsd-ref-');
  try {
    exportRef(ref, copy.dir);
    for (const f of OVERLAY) {
      mkdirSync(join(copy.dir, f, '..'), { recursive: true });
      copyFileSync(join(ROOT, f), join(copy.dir, f));
    }
    copy.linkModules();
    const out = await new Promise((done, fail) => {
      const child = spawn(process.execPath, [join(copy.dir, 'scripts', 'parse-snapshot.js'), ...(all ? ['--all'] : [])], { cwd: copy.dir, env: memoEnv(), stdio: ['ignore', 'pipe', 'pipe'] });
      let text = '';
      let err = '';
      child.stdout.on('data', (d) => (text += d));
      child.stderr.on('data', (d) => (err += d));
      child.on('error', fail);
      child.on('close', (code) => (code === 0 ? done(text) : fail(new Error(`the parses at ${ref} did not run: ${err.trim().split('\n').pop() || `exit ${code}`}`))));
    });
    return JSON.parse(out);
  } finally {
    copy.remove();
  }
}
