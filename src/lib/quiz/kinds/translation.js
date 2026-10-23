// Pick the translation (BOOK_PLAN.md §3): an English sentence and four Hao-shuo-de sentences; pick the right one.
// Wrong choices: other examples the learner has met (the same module first), never one with the same meaning or
// the same words. (The plan's KB-made near misses are not used yet: every wrong choice is a real example.)

import { pickWrong, choiceQuestion, tiersOf, base, normalize, choiceKey } from './util.js';
import { lessonWords } from './sentence.js';

export default {
  kind: 'translation',
  make(lesson, ctx) {
    const out = [];
    const mine = lessonWords(lesson);
    for (const m of lesson.modules) {
      for (const ex of m.examples) {
        if (!ex.meaning.en) continue;
        const rng = ctx.rng(`${lesson.id}/${ex.key}/translation`);
        const wrongs = pickWrong(tiersOf(ctx.known.examples, lesson, m), 3, rng, (c) => normalize(c.pinyin), [normalize(ex.pinyin)],
          (c) => c.meaning.en && choiceKey(c.meaning) !== choiceKey(ex.meaning));
        const q = choiceQuestion(
          {
            ...base(lesson, m, 'translation', ex.key),
            prompt: { text: ex.meaning },
            words: ex.words.filter((w) => mine.has(w)),
            uses: [...ex.words, ...wrongs.flatMap((c) => c.words)],
          },
          { text: { any: ex.pinyin } },
          wrongs.map((c) => ({ text: { any: c.pinyin } })),
          rng,
        );
        if (q) out.push(q);
      }
    }
    return out;
  },
};
