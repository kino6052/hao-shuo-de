// K6b: word classes, the second: sān-biān, wǔ-biān, liù-biān (three, five, six sides), found when the composite
// descriptions were read by the patterns (`node scripts/kb.js classes`). Proposed: the author has not accepted it.
// Run: npm run refactor -- refactors/K6b.ts [--check] [--write]

export default [
  {
    op: "classes",
    id: "bian1",
    add: {
      measure_word: {
        why: {
          eng: "Counts the sides of a flat shape: sān-biān is three sides, so sān-biān-de yàng-zi is a three-sided shape.",
          rus: "Считает стороны плоской фигуры: sān-biān — три стороны, а sān-biān-de yàng-zi — трёхсторонняя фигура.",
        },
        example: "Wǒ yào sān-biān-de yàng-zi.",
        proposed: true,
      },
    },
  },
];
