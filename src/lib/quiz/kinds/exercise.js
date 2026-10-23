// The lesson's exercises (BOOK_PLAN.md §3), as chosen answers: an exercise's question and four answers; pick its
// own. Wrong choices: the answers of other exercises of the same sort (Hao-shuo-de or plain language), the same
// module first, then the lesson, then earlier lessons. (Typed answers are for later.)

import { pickWrong, choiceQuestion, tiersOf, base, normalize, choiceKey } from './util.js';
import { lessonWords } from './sentence.js';

const answerText = (ex) => (ex.hsd ? { any: ex.answer.en } : ex.answer);

export default {
  kind: 'exercise',
  make(lesson, ctx) {
    const out = [];
    const mine = lessonWords(lesson);
    for (const m of lesson.modules) {
      for (const ex of m.exercises) {
        if (!ex.prompt.en || !ex.answer.en) continue;
        const rng = ctx.rng(`${lesson.id}/${ex.key}/exercise`);
        const wrongs = pickWrong(tiersOf(ctx.known.exercises, lesson, m, (c) => c.hsd === ex.hsd), 3, rng, (c) => c.answer.en && choiceKey(c.answer), [choiceKey(ex.answer)],
          (c) => normalize(c.prompt.en) !== normalize(ex.prompt.en));
        const q = choiceQuestion(
          {
            ...base(lesson, m, 'exercise', ex.key),
            prompt: { text: ex.prompt },
            words: ex.words.filter((w) => mine.has(w)),
            uses: [...ex.words, ...wrongs.flatMap((c) => c.words)],
          },
          { text: answerText(ex) },
          wrongs.map((c) => ({ text: answerText(c) })),
          rng,
        );
        if (q) out.push(q);
      }
    }
    return out;
  },
};
