// The page's check of a tree result (tree-check.js) on the real grammar: a tree the build made is checked, one changed
// on the way is not.

import { describe, expect, test } from 'bun:test';
import { loadTreeCheck } from './tree-check.js';
import dictionary from '../data/dictionary.ts';
import composites from '../data/composites.ts';
import { PATTERNS } from '../data/grammar/index.ts';
import TREE_DATA from '../data/tree-data.json';
import { createParser } from '../lib/grammar/parser.js';
import { makeTrees, treeText } from '../lib/grammar/tree.js';

const words = dictionary.words;
const parser = createParser({ patterns: PATTERNS, words, composites: composites.entries });
const trees = makeTrees({ rules: parser.rules, glue: parser.grammar.glue, words, composites: composites.entries, habits: { pairs: new Map(TREE_DATA.pairs), words: new Map(TREE_DATA.words) }, english: new Map(TREE_DATA.english) });
const treeOf = (refs) => trees.fromParse(parser.parse(refs, { maxTrees: 1 }), 0);

describe('the page checks a tree result', () => {
  test('the tree of a sentence it built reads back as that sentence, first', async () => {
    const check = await loadTreeCheck();
    const tree = treeOf('{{Word:wo3}} {{word:chi1}} {{word:fan4}}.');
    const { refs } = trees.build(tree);
    expect(check({ tree: treeText(tree), built: refs, english: 'I eat.' })).toEqual({ ok: true, first: true });
  });

  test('a tree that builds another sentence, or does not read, is not checked', async () => {
    const check = await loadTreeCheck();
    const tree = treeOf('{{Word:wo3}} {{word:chi1}} {{word:fan4}}.');
    expect(check({ tree: treeText(tree), built: '{{Word:ni3}} {{word:chi1}} {{word:fan4}}.' })).toMatchObject({ ok: false, why: 'it builds another sentence here' });
    expect(check({ tree: '[oops', built: '' }).ok).toBe(false);
  });
});
