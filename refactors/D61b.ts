// D61b: cards D61 left out or placed where the module was full.
//   - zǒu (walk, leave) gets its card in Moving, next to dòng.
//   - wǎn (late, evening) moves from days-years to the clock module, so
//     days-years keeps eight examples or fewer.
// Run: npm run refactor -- refactors/D61b.ts [--write]

const W = (id) => `{{word:${id}}}`;

export default [
  { op: "card", id: "zou3", to: "moving/move", en: `walk, leave; ${W("zou3")}-${W("lu4")}: walk`, ru: `идти пешком, уходить; ${W("zou3")}-${W("lu4")} — идти пешком` },
  { op: "move", id: "wan3", to: "numbers/clock" },
];
