// The result of a try (BOOK_PLAN.md §3): the score, how the learner did in each section and lesson, the lessons that
// went worst, and the words they missed.
//
//   scoreTry(items, responses, { passMark, sectionOf }) -> {
//     right, total, percent, passed (null without a pass mark),
//     byLesson: [{ lesson, right, total }], bySection: [{ section, right, total }],
//     worst: [lesson ids, worst first, only those with a wrong answer], missed: [word ids], known: [word ids]
//   }
// responses[i] is the learner's answer to items[i] (a choice's place among the item's choices, or the tokens).

import { isCorrect } from './question.js';

// -> whether a response to a drawn item is right (its choices are shuffled, so the place is the item's).
export function itemCorrect(item, response) {
  if (item.question.kind === 'order') return isCorrect(item.question, response);
  return response === item.answer;
}

function tally(list, keyOf) {
  const map = new Map();
  for (const x of list) {
    const k = keyOf(x);
    const t = map.get(k) ?? { right: 0, total: 0 };
    t.total++;
    if (x.ok) t.right++;
    map.set(k, t);
  }
  return map;
}

export function scoreTry(items, responses, { passMark = null, sectionOf = () => null } = {}) {
  const marked = items.map((item, i) => ({ item, ok: itemCorrect(item, responses[i]) }));
  const right = marked.filter((m) => m.ok).length;
  const total = items.length;
  const percent = total ? Math.round((100 * right) / total) : 0;
  const byLesson = [...tally(marked, (m) => m.item.question.lesson)].map(([lesson, t]) => ({ lesson, ...t }));
  const bySection = [...tally(marked, (m) => sectionOf(m.item.question.lesson))].filter(([s]) => s).map(([section, t]) => ({ section, ...t }));
  const worst = byLesson.filter((l) => l.right < l.total).sort((a, b) => a.right / a.total - b.right / b.total || b.total - a.total).map((l) => l.lesson);
  const missed = [...new Set(marked.filter((m) => !m.ok).flatMap((m) => m.item.question.words))];
  const known = [...new Set(marked.filter((m) => m.ok).flatMap((m) => m.item.question.words))].filter((w) => !missed.includes(w));
  return { right, total, percent, passed: passMark == null ? null : right >= Math.ceil(passMark * total), byLesson, bySection, worst, missed, known };
}
