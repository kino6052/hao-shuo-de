// The passive rule (the author's rule, review batch 10): Hao-shuo-de says the passive the spoken way, with ràng
// (X ràng Y + verb), never with 被 / bèi. Shared by scripts/check-passive.js (the whole book) and
// scripts/check-quick.js (one edited file).
//
//   passiveProblems('src/data/words/ren2.ts', source)  -> ['src/data/words/ren2.ts:12: passive with 被/bèi -- ...']

// what is scanned: the lessons, the sentence builder, the phrase book, the word and composite data
export const SCAN = [
  'src/content/lessons',
  'src/content/sentence-builder.yaml',
  'src/content/phrase-book.ts',
  'src/data/composites',
  'src/data/words',
  'src/content/word-builder.yaml',
  'src/lib/sentence-builder.js',
  'src/lib/word-builder.js',
  'src/lib/word-builder-parse.js',
];
// the composite 被 itself is the one place that names it
export const OWN = 'src/data/composites/bei-被.ts';
const SKIP = new Set([OWN, 'src/data/composites/index.ts']);
const BAD = /被|\{\{[Ww]ord:bei4\}\}|(?<![\p{L}])bèi(?![\p{L}])/u;

// -> whether the rule looks at this file (a repo path with forward slashes)
export const scanned = (rel) => !SKIP.has(rel) && SCAN.some((p) => rel === p || rel.startsWith(`${p}/`));

// -> one line per use of 被 / bèi in the file. A word's Chinese gloss (a `zh:` line) and its Mandarin reading (`py:`, 倍 is
// bèi) are the original text and are not scanned.
export function passiveProblems(rel, source) {
  const out = [];
  source.split('\n').forEach((line, i) => {
    if (/^\s*(zh|py):/.test(line)) return;
    if (BAD.test(line)) out.push(`${rel}:${i + 1}: passive with 被/bèi -- say it with ràng: ${line.trim().slice(0, 100)}`);
  });
  return out;
}

// -> a problem when the composite 被 does not say its passive with {{word:rang4}}, else null
export const ownProblem = (source) => (/hsd:\s*\[[^\]]*\{\{word:rang4\}\}/.test(source) ? null : `${OWN}: the passive must be written with {{word:rang4}}.`);
