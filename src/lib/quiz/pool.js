// A pool of questions for each lesson (BOOK_PLAN.md Phase 5), made from the lesson's own content by every template
// in kinds/. Wrong choices only come from what the learner has met by then (this lesson and the ones before), so a
// pool never uses a word before its lesson. Deterministic: the same lessons always give the same pools.
//
//   buildPools(sources, dict) -> [Pool], in book order
//   Pool: { lesson, number, weight, modules: [{ id, pattern, weight, info }], questions: [Question] }
//
// sources: lessonSource() for every lesson, in book order (source.js).

import { TEMPLATES } from './kinds/index.js';
import { rngFrom } from './rng.js';

export function buildPools(sources, dict, templates = TEMPLATES) {
  const known = { cards: [], examples: [], exercises: [] };
  const pools = [];
  for (const lesson of sources) {
    for (const m of lesson.modules) {
      const tag = (item) => ({ ...item, lesson: lesson.id, number: lesson.number, module: m.id });
      known.cards.push(...m.cards.map(tag));
      known.examples.push(...m.examples.map(tag));
      known.exercises.push(...m.exercises.map(tag));
    }
    const ctx = { known, dict, rng: (key) => rngFrom(`pool/${key}`) };
    const questions = templates.flatMap((t) => t.make(lesson, ctx));
    pools.push({
      lesson: lesson.id,
      number: lesson.number,
      weight: lesson.weight,
      modules: lesson.modules.map(({ id, pattern, weight, info }) => ({ id, pattern, weight, info })),
      questions,
    });
  }
  return pools;
}
