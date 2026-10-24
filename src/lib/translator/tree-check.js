// The page's own check of a sentence the tree translator made (BROWSER_TRANSLATOR_PLAN.md B5, steps 2 to 4 in the
// browser): it reads the tree's one line, checks it, builds the sentence with the page's copy of the grammar and parses
// it back, the way the daemon's code did (tree-translate.js verify). Only a sentence that comes out the same and reads
// as its tree is shown as checked. The page loads it with its data (src/translator/tree-check.js); the daemon's `try`
// command runs it on the KB's (scripts/translator-daemon.js).
//
//   const check = makeTreeCheck({ patterns, words, composites, habits, english });
//   check({ tree, built, english }) -> { ok: true, first } | { ok: false, why }
//     tree: the line (tree.js treeText); built: the sentence with word refs the daemon built; first: the tree is the
//     sentence's first reading, the one a reader takes
//   habits { pairs, words } and english: Maps, from src/data/tree-data.json (treeData below)

import { createParser } from '../grammar/parser.js';
import { makeTrees, readTreeText, sameTree } from '../grammar/tree.js';

export function makeTreeCheck({ patterns, words, composites: entries, habits, english }) {
  const parser = createParser({ patterns, words, composites: entries });
  const trees = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites: entries, habits, english });
  return ({ tree: line, built, english: sentence = '' }) => {
    const read = readTreeText(String(line ?? ''));
    if (!read.tree) return { ok: false, why: read.problem };
    const problems = trees.check(read.tree);
    if (problems.length) return { ok: false, why: problems.join('; ') };
    const end = /[?!]/.exec(String(sentence).trim().slice(-1))?.[0] ?? '.';
    const { refs } = trees.build(read.tree, { end });
    if (refs !== built) return { ok: false, why: 'it builds another sentence here' };
    const parsed = parser.parse(refs, { maxTrees: 50 });
    if (!parsed.ok) return { ok: false, why: 'it does not parse here' };
    for (let k = 0; k < parsed.trees.length; k++) if (sameTree(trees.fromParse(parsed, k), read.tree, { reading: true })) return { ok: true, first: k === 0 };
    return { ok: false, why: 'it does not read as its tree here' };
  };
}

// tree-data.json's lists as the Maps makeTreeCheck takes
export const treeData = (data) => ({ habits: { pairs: new Map(data.pairs), words: new Map(data.words) }, english: new Map(data.english) });
