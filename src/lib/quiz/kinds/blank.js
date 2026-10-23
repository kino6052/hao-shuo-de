// Fill the blank (BOOK_PLAN.md §3): an example with one word hidden, and its meaning; pick the missing word.
// The hidden word is one of the lesson's new words (up to two questions per example); an example without one
// hides a word picked at random. Wrong choices: other words the learner has met, of the same kind first, never
// one that shares a meaning with the hidden word (the meaning shown makes exactly one choice right).

import { wordRefRe, refTerm } from '../../word-refs.js';
import { plainText } from '../source.js';
import { shuffle } from '../rng.js';
import { pickWrong, choiceQuestion, wrongCards, base, normalize } from './util.js';
import { lessonWords } from './sentence.js';

const GAP = '\u0000GAP\u0000';
export const BLANK = '___';
const PER_EXAMPLE = 2;

export default {
  kind: 'blank',
  make(lesson, ctx) {
    const out = [];
    const mine = lessonWords(lesson);
    const cardOf = new Map(ctx.known.cards.map((c) => [c.word, c]));
    for (const m of lesson.modules) {
      for (const ex of m.examples) {
        if (!ex.meaning.en) continue;
        const refs = [...String(ex.raw).matchAll(wordRefRe())];
        if (!refs.length) continue;
        const rng = ctx.rng(`${lesson.id}/${ex.key}/blank`);
        const seen = new Set();
        let targets = refs.filter((r) => mine.has(r[2]) && !seen.has(r[2]) && seen.add(r[2])).slice(0, PER_EXAMPLE);
        if (!targets.length) targets = shuffle(refs.filter((r) => cardOf.has(r[2])), rng).slice(0, 1);
        for (const r of targets) {
          const [full, kind, id] = r;
          const rightTerm = refTerm(ctx.dict.term(id) ?? id, kind);
          const card = cardOf.get(id) ?? { word: id, gloss: {} };
          const blanked = plainText(ex.raw.slice(0, r.index) + GAP + ex.raw.slice(r.index + full.length), ctx.dict).replace(GAP, BLANK);
          const wrongs = pickWrong(wrongCards(card, lesson, ctx), 3, rng, (c) => normalize(refTerm(c.term, kind)), [normalize(rightTerm)]);
          const q = choiceQuestion(
            {
              ...base(lesson, m, 'blank', ex.key, `/${id}`),
              prompt: { pinyin: blanked, text: ex.meaning },
              words: [id],
              uses: [...ex.words, ...wrongs.map((c) => c.word)],
            },
            { text: { any: rightTerm } },
            wrongs.map((c) => ({ text: { any: refTerm(c.term, kind) } })),
            rng,
          );
          if (q) out.push(q);
        }
      }
    }
    return out;
  },
};
