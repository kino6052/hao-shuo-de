// Word and meaning, one way (BOOK_PLAN.md §3): a word card's word (pinyin and hanzi) -> pick its meaning.
// Wrong choices: the meanings of other words the learner has met (wrongCards in util.js).

import { pickWrong, choiceQuestion, wrongCards, base, choiceKey } from './util.js';

export default {
  kind: 'meaning',
  make(lesson, ctx) {
    const out = [];
    for (const m of lesson.modules) {
      for (const card of m.cards) {
        if (!card.gloss.en) continue;
        const rng = ctx.rng(`${lesson.id}/${card.key}/meaning`);
        const wrongs = pickWrong(wrongCards(card, lesson, ctx), 3, rng, (c) => c.gloss.en && choiceKey(c.gloss), [choiceKey(card.gloss)]);
        const q = choiceQuestion(
          { ...base(lesson, m, 'meaning', card.key), prompt: { pinyin: card.term, hanzi: card.hanzi }, words: [card.word], uses: wrongs.map((c) => c.word) },
          { text: card.gloss },
          wrongs.map((c) => ({ text: c.gloss })),
          rng,
        );
        if (q) out.push(q);
      }
    }
    return out;
  },
};
