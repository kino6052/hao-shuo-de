// R7d: guǒ 果 is taught in L19 (roles-of-a-word/name), so the "result" sense of
// jié (jié-guǒ) is taught there too, as a two-word name; jié "tie" stays in
// direction-and-result/move-thing. The old composite 结 became the word.
// Run: npm run refactor -- refactors/R7d.ts [--write]

const W = (id) => `{{word:${id}}}`;
const NAME = "src/content/lessons/roles-of-a-word/name.ts";
const text = (file, from, to) => ({ op: "text", file, from, to });

export default [
  { op: "card", id: "jie2", sense: "result", to: "roles-of-a-word/name", en: `result: ${W("jie2")}-${W("guo3")}`, ru: `результат: ${W("jie2")}-${W("guo3")}` },
  text(NAME,
    `and {{word:shui3}}-{{word:guo3}} (water fruit) is fruit.",`,
    `and {{word:shui3}}-{{word:guo3}} (water fruit) is fruit. {{word:jie2}} is tie, and {{word:jie2}}-{{word:guo3}} (tie fruit) is the result: where a thing ends up.",`),
  text(NAME,
    `а {{word:shui3}}-{{word:guo3}} («водяной плод») — фрукты.",`,
    `а {{word:shui3}}-{{word:guo3}} («водяной плод») — фрукты. {{word:jie2}} — «завязать», а {{word:jie2}}-{{word:guo3}} («завязанный плод») — результат: то, чем всё кончилось.",`),
  text(NAME,
    `      pinyin: "{{Word:xie3}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "写的方法。",
      en: "The way of writing.",
      ru: "Способ писать.",`,
    `      pinyin: "{{Word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "结果很好。",
      en: "The result is good.",
      ru: "Результат хороший.",`),
  text(NAME,
    `      hanzi: "飞机在天上。",
    },
  ],`,
    `      hanzi: "飞机在天上。",
    },
    {
      en: "What is the result?",
      ru: "Каков результат?",
      answer: "{{Word:jie2}}-{{word:guo3}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "结果是什么？",
    },
  ],`),
];
