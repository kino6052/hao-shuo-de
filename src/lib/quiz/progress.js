// A record of progress (BOOK_PLAN.md Phase 5, Q10): the best score of each test and the words missed, kept in the
// learner's browser only (nothing is sent; another device starts again).
//
//   record: { tests: { [lesson id or "final-exam"]: { best, total, tries, passed? } }, missed: { [wordId]: count } }
//
// The functions take the storage (localStorage, or a stand-in in a test) so they stay pure.

export const RECORD_KEY = 'haoshuode-tests';

export const emptyRecord = () => ({ tests: {}, missed: {} });

export function loadRecord(storage) {
  try {
    const raw = storage?.getItem(RECORD_KEY);
    const r = raw ? JSON.parse(raw) : null;
    return r && typeof r === 'object' ? { tests: r.tests ?? {}, missed: r.missed ?? {} } : emptyRecord();
  } catch {
    return emptyRecord();
  }
}

const listeners = new Set();

// -> unsubscribe; fn runs after every saved try (the sidebar's marks).
export function subscribeRecord(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// -> the record after a try: the best score kept, each missed word counted up, each word got right counted down.
export function addTry(record, id, result) {
  const prev = record.tests[id];
  const better = !prev || result.right / result.total > prev.best / prev.total;
  const test = {
    best: better ? result.right : prev.best,
    total: better ? result.total : prev.total,
    tries: (prev?.tries ?? 0) + 1,
    ...(result.passed != null ? { passed: Boolean(prev?.passed) || result.passed } : {}),
  };
  const missed = { ...record.missed };
  for (const w of result.missed) missed[w] = (missed[w] ?? 0) + 1;
  for (const w of result.known) {
    if (!missed[w]) continue;
    missed[w] -= 1;
    if (missed[w] <= 0) delete missed[w];
  }
  return { tests: { ...record.tests, [id]: test }, missed };
}

export function saveTry(storage, id, result) {
  const next = addTry(loadRecord(storage), id, result);
  try {
    storage?.setItem(RECORD_KEY, JSON.stringify(next));
  } catch {
    // storage full or blocked: the try still shows its result
  }
  for (const fn of listeners) fn(next);
  return next;
}

// -> the missed words, most missed first.
export const toReview = (record) => Object.entries(record.missed).sort((a, b) => b[1] - a[1]).map(([w]) => w);
