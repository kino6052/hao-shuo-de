#!/usr/bin/env node
// Type-checks the project with `tsc --noEmit` (see tsconfig.json). Vite strips
// types without checking them, so this gate is the build's only type check.
// Ignores the extra arguments check-all passes to every gate.
//
//   node scripts/check-types.js   # same as npm run typecheck

import { spawnSync } from 'child_process';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const TSC = fileURLToPath(new URL('../node_modules/typescript/bin/tsc', import.meta.url));

// incremental: tsc keeps what it learned about unchanged files in .cache, so a re-check looks only at what changed
mkdirSync(`${ROOT}.cache`, { recursive: true });
// tsc's errors are taken in and printed here: inside a batch (scripts/check-batch.js) only what this process prints
// reaches the report, and a child writing straight to the terminal would be lost
const pretty = process.stdout.isTTY ? ['--pretty'] : [];
const run = spawnSync(process.execPath, [TSC, '--noEmit', '--incremental', '--tsBuildInfoFile', `${ROOT}.cache/tsc.tsbuildinfo`, ...pretty], {
  cwd: ROOT,
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
});
const said = `${run.stdout ?? ''}${run.stderr ?? ''}`.replace(/\n+$/, '');
if (said) console.log(said);
if (run.error) console.error(`check-types: tsc did not run: ${run.error.message}`);
if (run.status !== 0) {
  console.error('\ncheck-types: type errors found -- fix them, or run npm run typecheck to see them again.');
  process.exit(1);
}
console.log('check-types: no type errors.');
