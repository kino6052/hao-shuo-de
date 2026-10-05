// D63b: follow-ups to D63. nán-hái-zi and nǚ-hái-zi read plainly as male /
// female + child, so they need no constructive form; 公司's note still named qún.
// Run: npm run refactor -- refactors/D63b.ts [--write]

export default [
  { op: "composite", zh: "男孩子", set: { transparent: true } },
  { op: "composite", zh: "女孩子", set: { transparent: true } },
  { op: "composite", zh: "公司", set: { note: undefined } },
];
