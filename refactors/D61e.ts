// D61e: composite forms the author gave while the core was being rebuilt.
//   - airport: fēi-jī zhàn-de dì-fang, where the planes stand (站 is also a
//     station, as in chē-zhàn)
//   - shape (形状, rank 2261): yàng-zi, the look (样子 is also how Mandarin
//     asks for a shape: shénme yàng-zi?); more exactly, the look of its outside
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
  {
    op: "composite", zh: "形状",
    create: { rank: 2261, phase: 5, py: "xíngzhuàng", en: "shape", ru: "форма", pos: "noun" },
    set: {
      hsd: [`${W("yang4")}-${L("zi")}`, `${W("wai4")}-${W("mian4")}-${W("de")} ${W("yang4")}-${L("zi")}`],
      tts: ["样子", "外面的样子"], fit: "plain", literal: "the look / the look of its outside", proposed: true,
    },
  },
];
