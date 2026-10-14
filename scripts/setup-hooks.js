#!/usr/bin/env node
// Points git at .githooks/, so every commit refreshes the generated parts of the READMEs (scripts/generate-readme.js).
// Runs after `npm install` / `bun install` (the "prepare" script), is safe to run again, and says nothing outside a
// git checkout.
//
//   npm run hooks

import { execFileSync } from 'node:child_process';

try {
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], { stdio: 'ignore' });
  console.log('git hooks: .githooks/ is on (every commit refreshes the READMEs).');
} catch {
  // not a git checkout, or git is missing: nothing to set up
}
