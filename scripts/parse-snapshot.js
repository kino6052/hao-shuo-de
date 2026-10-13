// How every sentence parses, as one JSON object (src/lib/kb/parse-diff.js snapshotOf). `kb parse-diff`
// runs this file at a git ref (it is copied into the export, so a ref from before it existed works) and
// here, and compares the two.
//
//   node scripts/parse-snapshot.js [--all]     --all adds composite examples, stories and the phrase book

import { parseReport } from '../src/lib/kb/parse-report.js';
import { snapshotOf } from '../src/lib/kb/parse-diff.js';

// the texts after the lessons (K7)
export const OTHER_TEXTS = [
  { id: 'composite-examples', title: 'composite examples', kinds: ['composite_example'] },
  { id: 'stories', title: 'stories', kinds: ['story'] },
  { id: 'phrase-book', title: 'phrase book', kinds: ['phrase_book'] },
];

// -> the snapshot of the KB `kb`
export function snapshotFor(kb, { all = false } = {}) {
  const lessons = kb.source.lessons.map(({ id, number }) => ({ id, number }));
  const report = parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons, groups: all ? OTHER_TEXTS : [] });
  return snapshotOf(report);
}

// no top-level await: kb.js imports this file too, and an entry that waits for kb.js while kb.js waits for the entry never settles
if (process.argv[1]?.endsWith('parse-snapshot.js')) {
  import('./kb.js')
    .then(({ openKb }) => openKb())
    .then((kb) => console.log(JSON.stringify(snapshotFor(kb, { all: process.argv.includes('--all') }))))
    .catch((e) => {
      console.error(e.stack || e.message);
      process.exit(1);
    });
}
