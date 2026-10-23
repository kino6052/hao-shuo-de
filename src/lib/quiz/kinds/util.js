// Shared by the question templates: picking wrong choices and building a choice question.

import { makeQuestion, choiceKey, normalize } from '../question.js';
import { shuffle } from '../rng.js';

// -> up to n candidates, the first tier first (each tier shuffled), skipping any whose key is taken or that
// `ok` rejects. keyOf(c) -> the text key that must differ from the right answer's and the others'.
export function pickWrong(tiers, n, rng, keyOf, taken, ok = () => true) {
  const out = [];
  const keys = new Set(taken);
  for (const tier of tiers) {
    for (const c of shuffle(tier, rng)) {
      if (out.length >= n) return out;
      const k = keyOf(c);
      if (!k || keys.has(k) || !ok(c)) continue;
      keys.add(k);
      out.push(c);
    }
  }
  return out;
}

// -> a choice question with the right choice at a random place, or null with too few wrong choices (it needs 2+).
export function choiceQuestion(base, right, wrongs, rng) {
  if (wrongs.length < 2) return null;
  const all = shuffle([{ ...right, right: true }, ...wrongs], rng);
  return makeQuestion({
    ...base,
    choices: all.map(({ text, key }) => ({ text, ...(key ? { key } : {}) })),
    answer: all.findIndex((c) => c.right),
  });
}

// the items of a gloss ("look, read" -> ["look", "read"]), to keep two words that share a meaning apart
export const glossItems = (gloss) =>
  new Set(String(gloss?.en ?? '').split(/[,/(]|\bor\b/).map((s) => normalize(s).replace(/^(to|a|an|the) /, '')).filter(Boolean));

// -> the base of a question on one item of a module: its id, lesson, module, pattern, source and help line.
export const base = (lesson, m, kind, key, extra = '') => ({
  id: `${lesson.id}/${key}/${kind}${extra}`,
  kind,
  lesson: lesson.id,
  module: m.id,
  pattern: m.pattern,
  source: `${lesson.id}/${key}`,
  help: m.info,
});

// the word cards a wrong word or meaning can come from: words the learner has met that share no meaning with
// the card's word, the same kind (verb, noun, ...) in this lesson first, then the same kind, then any
export function wrongCards(card, lesson, ctx) {
  const pos = ctx.dict.pos(card.word);
  const mine = glossItems(card.gloss);
  const pool = ctx.known.cards.filter((c) => c.word !== card.word && !overlaps(glossItems(c.gloss), mine));
  const samePos = (c) => pos && ctx.dict.pos(c.word) === pos;
  return [pool.filter((c) => samePos(c) && c.lesson === lesson.id), pool.filter(samePos), pool];
}

// the wrong-choice tiers over known items: the same module, the rest of the lesson, then earlier lessons
export function tiersOf(items, lesson, m, same = () => true) {
  const mine = items.filter((c) => c.lesson === lesson.id && c.module === m.id && same(c));
  const lessonRest = items.filter((c) => c.lesson === lesson.id && c.module !== m.id && same(c));
  const earlier = items.filter((c) => c.lesson !== lesson.id && same(c));
  return [mine, lessonRest, earlier];
}
export const overlaps = (a, b) => [...a].some((x) => b.has(x));

export { choiceKey, normalize };
