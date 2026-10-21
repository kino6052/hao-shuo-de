// K7: heads that the WordNet cross-check (`kb cross-check kindOf` and `headless`) showed were wrong or missing.
//   - 父母 and 家长: the head is 人 (a person), not 妈妈. Their form is bàba-māma, which the head rule reads as "a kind of
//     māma"; WordNet has mother under parent, the other way round.
//   - 面条儿: its form is a quoted sound ("miàn"), so the head rule finds no head; noodles are a kind of 食物 (food).
// Made by Claude on 2026-10-21 without a review by the author. The forms and the examples stay as they are.
// Run: npm run refactor -- refactors/K7.ts [--diff] [--write]

export default [
  { op: "composite", zh: "父母", set: { head: "ren2" } },
  { op: "composite", zh: "家长", set: { head: "ren2" } },
  { op: "composite", zh: "面条儿", set: { head: "食物" } },
];
