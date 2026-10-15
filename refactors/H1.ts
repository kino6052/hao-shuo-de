// H1: another way to say 百 and 千 than `shí-ge shí` / `shí-ge shí-ge shí` (forms-hundred, KB_PLAN §4a B).
// The old second forms fail the grammar; `shí-ge shí-de shù` and `shí-ge shí-ge-de shí-de shù` parse (`kb parse`).
// The plain yī-líng-líng forms stay. The second example of each entry says the new form.
// Run: npm run refactor -- refactors/H1.ts [--write]

const W = (id: string) => `{{word:${id}}}`;
const C = (id: string) => `{{Word:${id}}}`;
const L = (id: string) => `{{light:${id}}}`;

const ling = (n: number) => Array(n).fill(W("ling2")).join("-");

export default [
  {
    op: "composite",
    zh: "百",
    set: {
      hsd: [`${W("yi1")}-${ling(2)}`, `${W("shi2")}-${L("ge4")} ${W("shi2")}-${W("de")} ${W("shu4")}`],
      tts: ["一零零", "十个十的数"],
      literal: "one-zero-zero / a number of ten tens",
      examples: [
        {
          pinyin: `${C("zhe4")}-${L("ge4")} ${W("yao4")} ${W("yi1")}-${ling(2)} ${W("jin1")}.`,
          hanzi: "这个要一零零金。",
          en: "This costs a hundred.",
          ru: "Это стоит сто.",
        },
        {
          pinyin: `${C("shi2")}-${L("ge4")} ${W("shi2")}-${W("de")} ${W("shu4")} ${W("shi4")} ${W("yi1")}-${ling(2)}.`,
          hanzi: "十个十的数是一零零。",
          en: "A number of ten tens is a hundred.",
          ru: "Число из десяти десятков — это сто.",
        },
      ],
    },
  },
  {
    op: "composite",
    zh: "千",
    set: {
      hsd: [`${W("yi1")}-${ling(3)}`, `${W("shi2")}-${L("ge4")} ${W("shi2")}-${L("ge4")}-${W("de")} ${W("shi2")}-${W("de")} ${W("shu4")}`],
      tts: ["一零零零", "十个十个的十的数"],
      literal: "one-zero-zero-zero / a number of ten tens of tens",
      examples: [
        {
          pinyin: `${C("zhe4")}-${L("ge4")} ${W("yao4")} ${W("yi1")}-${ling(3)} ${W("jin1")}.`,
          hanzi: "这个要一零零零金。",
          en: "This costs a thousand.",
          ru: "Это стоит тысячу.",
        },
        {
          pinyin: `${C("shi2")}-${L("ge4")} ${W("shi2")}-${L("ge4")}-${W("de")} ${W("shi2")}-${W("de")} ${W("shu4")} ${W("shi4")} ${W("yi1")}-${ling(3)}.`,
          hanzi: "十个十个的十的数是一零零零。",
          en: "A number of ten tens of tens is a thousand.",
          ru: "Число из десяти по десять десятков — это тысяча.",
        },
      ],
    },
  },
];
