#!/usr/bin/env node
// Links the composites and words to WordNet (KB_PLAN.md phase 6): exports the entries, then runs the Python linker in
// the gitignored venv (.venv-kb). `npm run wordnet -- --links-only` redoes the links and skips the four-minute English
// index, which only changes with the WordNet release. Needs the venv (see scripts/python/link_wordnet.py).

import { existsSync } from 'fs';
import { spawnSync } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const python = resolve(ROOT, '.venv-kb', process.platform === 'win32' ? 'Scripts/python.exe' : 'bin/python');

if (!existsSync(python)) {
  console.error('wordnet: no .venv-kb. Set it up once (pip install wn wordfreq; wn.download oewn:2025, omw-cmn:2.0, cili:1.0); see KB_PLAN.md phase 6.');
  process.exit(1);
}

const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: 'inherit', env: { ...process.env, PYTHONUTF8: '1' } });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run(process.execPath, ['scripts/english-export.js']);
run(python, ['-W', 'ignore', 'scripts/python/link_wordnet.py', ...process.argv.slice(2)]);
