// R1: composite review, batch 1 (ranks 1-100), as the author decided it at
// /__review/?batch=1 (review/decisions/batch-1.json): 99 approved, 1 kept.
//   - 更 (even more): hái, as Mandarin says it in a comparison
//     (tā bǐ wǒ hái gāo), instead of "use bǐ".
//   - 喜欢 (like): ài, or the softer jué-de X hǎo (find X good).
//   - 事 (matter): kept as dōng-xi.
// Run: npm run refactor -- refactors/R1.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default [
  {
    op: "composite", zh: "更",
    set: {
      hsd: [W("hai2")], tts: ["还"], literal: "still, even", fit: "plain",
      note: "In a comparison Mandarin itself says 还 for even more: tā bǐ wǒ hái gāo, he is even taller than me.",
    },
  },
  {
    op: "composite", zh: "喜欢",
    set: {
      hsd: [W("ai4"), `${W("jue2")}-${L("de2")} X ${W("hao3")}`], tts: ["爱", "觉得X好"],
      literal: "love / find X good",
      note: "ài is strong for everyday liking; jué-de X hǎo (find X good) is the softer, everyday like.",
    },
  },
  { op: "reviewed", from: 1, to: 100 },
];
