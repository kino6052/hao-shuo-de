#!/usr/bin/env node
// Type-checks the project with `tsc --noEmit` (see tsconfig.json). Vite strips
// types without checking them, so this gate is the build's only type check.
// Ignores the extra arguments check-all passes to every gate.
//
//   node scripts/check-types.js   # same as npm run typecheck

import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const TSC = fileURLToPath(new URL('../node_modules/typescript/bin/tsc', import.meta.url));

const run = spawnSync(process.execPath, [TSC, '--noEmit'], { cwd: ROOT, stdio: 'inherit' });
if (run.status !== 0) {
  console.error('\ncheck-types: type errors found -- fix them, or run npm run typecheck to see them again.');
  process.exit(1);
}
console.log('check-types: no type errors.');
