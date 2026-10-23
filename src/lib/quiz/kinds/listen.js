// Listen and choose (BOOK_PLAN.md §3): hear an example and pick what it means.
// Wrong choices: the meanings of other examples (the same module first, then the lesson, then earlier lessons),
// never one that says the same sentence or means the same.

import { pickWrong, choiceQuestion, tiersOf, base, normalize, choiceKey } from './util.js';
import { lessonWords } from './sentence.js';

export default {
  kind: 'listen',
  make(lesson, ctx) {
    const out = [];
    const mine = lessonWords(lesson);
    for (const m of lesson.modules) {
      for (const ex of m.examples) {
        if (!ex.hanzi || !ex.meaning.en) continue;
        const rng = ctx.rng(`${lesson.id}/${ex.key}/listen`);
        const wrongs = pickWrong(tiersOf(ctx.known.examples, lesson, m), 3, rng, (c) => c.meaning.en && choiceKey(c.meaning), [choiceKey(ex.meaning)],
          (c) => normalize(c.pinyin) !== normalize(ex.pinyin));
        const q = choiceQuestion(
          {
            ...base(lesson, m, 'listen', ex.key),
            prompt: { audio: { pinyin: ex.pinyin, hanzi: ex.hanzi, file: ex.audioFile } },
            words: ex.words.filter((w) => mine.has(w)),
            uses: [...ex.words, ...wrongs.flatMap((c) => c.words)],
          },
          { text: ex.meaning },
          wrongs.map((c) => ({ text: c.meaning })),
          rng,
        );
        if (q) out.push(q);
      }
    }
    return out;
  },
};
