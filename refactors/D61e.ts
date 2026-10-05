// D61e: composite forms the author gave while the core was being rebuilt.
//   - airport: fēi-jī zhàn-de dì-fang, where the planes stand (站 is also a
//     station, as in chē-zhàn)
// Run: npm run refactor -- refactors/D61e.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;

export default [
  {
    op: "composite", zh: "机场",
    set: {
      hsd: [`${W("fei1")}-${W("ji1")} ${W("zhan4")}-${W("de")} ${W("di4")}-${L("fang1")}`],
      tts: ["飞机站的地方"], fit: "plain", literal: "the place where planes stand", proposed: true,
    },
  },
];
