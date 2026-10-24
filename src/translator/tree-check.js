// The page's own check of a sentence the tree translator made (BROWSER_TRANSLATOR_PLAN.md B5): the check itself is
// src/lib/translator/tree-check.js; this loads it with the page's copy of the grammar, the words, the composites and
// src/data/tree-data.json. Loaded in its own chunk the first time a tree result is on the page.
//
//   const check = await loadTreeCheck();
//   check({ tree, built, english }) -> { ok: true, first } | { ok: false, why }

import dictionary from '../data/dictionary.ts';
import composites from '../data/composites.ts';
import { PATTERNS } from '../data/grammar/index.ts';
import TREE_DATA from '../data/tree-data.json';
import { makeTreeCheck, treeData } from '../lib/translator/tree-check.js';

let made = null;
export const loadTreeCheck = async () => (made ??= makeTreeCheck({ patterns: PATTERNS, words: dictionary.words, composites: composites.entries, ...treeData(TREE_DATA) }));
