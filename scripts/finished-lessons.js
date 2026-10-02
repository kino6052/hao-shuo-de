// Which chapters' problems fail a gate (BOOK_PLAN.md §6).
//
// Every gate (check-jargon, check-early-words, check-word-use,
// check-grammar-blocks, check-practice) reports problems in the whole book, but only fails
// for "blocking" chapters:
//   - chapter ids given on the command line -> exactly those chapters
//   - --strict -> every chapter
//   - otherwise (e.g. on every build) -> the finished lessons below
//
// A lesson goes on this list once its Phase 2 rewrite passes every gate.
// From then on, every build keeps it that way.

export const FINISHED_LESSONS = ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05', 'lesson-06', 'lesson-07', 'lesson-08', 'lesson-09', 'lesson-10', 'lesson-11', 'lesson-12', 'lesson-13', 'lesson-14', 'lesson-15', 'lesson-16', 'lesson-17', 'lesson-18', 'lesson-19', 'lesson-20', 'lesson-21', 'lesson-22'];

export function gatePolicy(argv = process.argv) {
  const args = argv.slice(2);
  const strict = args.includes('--strict');
  const named = args.filter((a) => !a.startsWith('--'));
  const blocking = (id) => strict || (named.length ? named.includes(id) : FINISHED_LESSONS.includes(id));
  const scopeLabel = strict ? 'every chapter' : named.length ? named.join(', ') : 'the finished lessons';
  return { args, strict, named, blocking, scopeLabel, summary: args.includes('--summary') };
}
