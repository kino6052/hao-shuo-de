// The rule files (kb/rules/*.lp), read from disk. Node and bun only: the
// learner pages never run the reasoner.

import { readFileSync } from 'fs';

const DIR = new URL('../../../kb/rules/', import.meta.url);

// -> the text of kb/rules/<name>.lp
export const readRule = (name) => readFileSync(new URL(`${name}.lp`, DIR), 'utf-8');

// -> the rule files joined, each under a comment saying where it came from.
export const readRules = (...names) => names.map((n) => `% ---- kb/rules/${n}.lp\n${readRule(n)}`).join('\n');
