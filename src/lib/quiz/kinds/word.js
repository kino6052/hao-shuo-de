// Word and meaning, the other way (BOOK_PLAN.md §3): a meaning from a word card -> pick the word.
// Wrong choices: other words the learner has met that don't share the meaning (wrongCards in util.js).

import { pickWrong, choiceQuestion, wrongCards, base, normalize } from './util.js';

export default {
  kind: 'word',
  make(lesson, ctx) {
    const out = [];
    for (const m of lesson.modules) {
      for (const card of m.cards) {
        if (!card.gloss.en) continue;
        const rng = ctx.rng(`${lesson.id}/${card.key}/word`);
        const wrongs = pickWrong(wrongCards(card, lesson, ctx), 3, rng, (c) => normalize(c.term), [normalize(card.term)]);
        const q = choiceQuestion(
          { ...base(lesson, m, 'word', card.key), prompt: { text: card.gloss }, words: [card.word], uses: wrongs.map((c) => c.word) },
          { text: { any: card.term } },
          wrongs.map((c) => ({ text: { any: c.term } })),
          rng,
        );
        if (q) out.push(q);
      }
    }
    return out;
  },
};
