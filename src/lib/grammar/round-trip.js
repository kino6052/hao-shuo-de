// The round trip (BROWSER_TRANSLATOR_PLAN.md B3): a book sentence -> its first reading as a meaning tree (tree.js)
// -> the sentence the tree builds -> parsed again. It holds when the tree passes its own checks, the built sentence
// has the same words in the same order, and one of its readings is the same tree. The spelling (hyphens, capitals,
// light syllables, the end mark) is compared too, but only counted: two spellings of one sentence read the same.
// Pure: the parser and the trees come in.
//
//   roundTrip(text, { parser, trees, maxTrees }) -> {
//     text, parsed,        the sentence (word refs) and whether it parses at all (else nothing more is tried)
//     problems,            tree.js's checks on its first reading
//     built,               the sentence the tree builds
//     sameWords,           the same words in the same order
//     sameSpelling,        written exactly the same
//     at,                  which reading of the built sentence is the tree: 0 the first, -1 none of the first maxTrees
//     readings,            how many readings the built sentence has
//     split,               composites the book writes as one chain (dòng-wù) that the first reading takes word by word:
//                          [{ zh, words }]. Not a failure of the round trip, a question about the reading order
//     ok,                  parsed, no problems, the same words, and the tree comes back
//   }
//   summarize(results) -> { sentences, parsed, ok, problems, sameWords, sameSpelling, first, later, lost, split }

import { sameTree, spelledTokens } from './tree.js';

const END = /[.!?…]+$/;

// the words of a parse, as one string: ids for words, the text for the rest
const wordsOf = (tokens) => tokens.map((t) => (t.kind === 'word' ? t.id : t.kind === 'comma' ? ',' : t.text)).join(' ');

// the chains of joined words that spell a composite, where no composite of the first reading covers them
function splitComposites(text, first, trees) {
  const spans = [];
  const walk = (t) => (t.children ? t.children.forEach(walk) : t.edge?.composite && spans.push([t.from, t.to]));
  walk(first.trees[0]);
  const spelled = spelledTokens(text);
  const out = [];
  for (let a = 0; a < spelled.length; a++) {
    if (!spelled[a].id) continue;
    for (let b = a + 1; b < spelled.length && spelled[b].id && spelled[b].joined; b++) {
      const ids = spelled.slice(a, b + 1).map((t) => t.id);
      const zh = trees.compositesOf(ids);
      if (zh.length && !spans.some(([from, to]) => from <= a && to >= b + 1)) out.push({ zh: zh[0], words: ids });
    }
  }
  return out;
}

export function roundTrip(text, { parser, trees, maxTrees = 200 }) {
  const first = parser.parse(text, { maxTrees: 1 });
  if (!first.ok) return { text, parsed: false, ok: false };
  const tree = trees.fromParse(first, 0);
  const problems = trees.check(tree);
  const end = END.exec(text.trim())?.[0] ?? '';
  const { refs: built } = trees.build(tree, { end });
  const again = parser.parse(built, { maxTrees });
  const sameWords = again.tokens ? wordsOf(again.tokens) === wordsOf(first.tokens) : false;
  let at = -1;
  // the build may say a word light where the book did not (its habit), which is spelling, not another reading
  for (let k = 0; k < again.trees.length && at < 0; k++) if (sameTree(trees.fromParse(again, k), tree, { reading: true })) at = k;
  return {
    text,
    parsed: true,
    tree,
    problems,
    built,
    sameWords,
    sameSpelling: built === text.trim(),
    at,
    readings: again.treeCount,
    split: splitComposites(text, first, trees),
    ok: problems.length === 0 && sameWords && at >= 0,
  };
}

export function summarize(results) {
  const parsed = results.filter((r) => r.parsed);
  return {
    sentences: results.length,
    parsed: parsed.length,
    ok: parsed.filter((r) => r.ok).length,
    problems: parsed.filter((r) => r.problems.length).length,
    sameWords: parsed.filter((r) => r.sameWords).length,
    sameSpelling: parsed.filter((r) => r.sameSpelling).length,
    first: parsed.filter((r) => r.at === 0).length,
    later: parsed.filter((r) => r.at > 0).length,
    lost: parsed.filter((r) => r.at < 0).length,
    split: parsed.filter((r) => r.split.length).length,
  };
}
