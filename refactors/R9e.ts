// R9e: qiú 球 (ball) becomes a core word, taught in comparing/than next to yuán
// (round). The composite 球 goes; 足球 says it with qiú, 地球 gets dì-qiú first
// (the Mandarin way). 篮球 (batch 10) follows in its proposal.
// Run: npm run refactor -- refactors/R9e.ts [--write]

const W = (id) => `{{word:${id}}}`;
const text = (file, from, to) => ({ op: "text", file, from, to });
const THAN = "src/content/lessons/comparing/than.ts";
const Z = `${W("yong4")}-${W("jiao3")}-${W("wan2r")}-${W("de")} ${W("qiu2")}`;

export default [
  {
    op: "add", id: "qiu2", hanzi: "球", category: "general",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `ball, sphere: ${W("wan2r")} ${W("qiu2")}, play with a ball; ${W("di4")}-${W("qiu2")}, the Earth`,
      rus: `мяч, шар: ${W("wan2r")} ${W("qiu2")} — играть в мяч; ${W("di4")}-${W("qiu2")} — Земля`,
      zh: "球，球体",
    },
    necessity: {
      index: 3,
      eng: `A ball: ${W("qiu2")}. Games and the Earth (${W("di4")}-${W("qiu2")}) need it; "the round thing" is clumsy.`,
      rus: `Мяч: ${W("qiu2")}. Он нужен играм и Земле (${W("di4")}-${W("qiu2")}); «круглая вещь» неуклюже.`,
    },
  },
  { op: "card", id: "qiu2", to: "comparing/than", en: "ball", ru: "мяч" },
  text(THAN,
    `{{word:chang2}} is long; a stick is {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, a long thing.",`,
    `{{word:chang2}} is long; a stick is {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, a long thing. {{word:qiu2}} is a ball: a round thing.",`),
  text(THAN,
    `{{word:chang2}} — длинный; палка — {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, длинная вещь.",`,
    `{{word:chang2}} — длинный; палка — {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, длинная вещь. {{word:qiu2}} — мяч: круглая вещь.",`),
  text(THAN,
    `    {
      pinyin: "{{Word:zhe4}}-ge {{word:lu4}} {{word:bi3}} {{word:na4}}-ge {{word:yuan3}}.",
      hanzi: "这个路比那个远。",
      en: "This way is farther than that one.",
      ru: "Эта дорога длиннее той.",
    },`,
    `    {
      pinyin: "{{Word:zhe4}}-ge {{word:qiu2}} {{word:bi3}} {{word:na4}}-ge {{word:da4}}.",
      hanzi: "这个球比那个大。",
      en: "This ball is bigger than that one.",
      ru: "Этот мяч больше того.",
    },`),
  text(THAN,
    `      hanzi: "这边的包比那边的大。",
    },
  ],`,
    `      hanzi: "这边的包比那边的大。",
    },
    {
      en: "The ball is harder than the bag.",
      ru: "Мяч твёрже сумки.",
      answer: "{{Word:qiu2}} {{word:bi3}} {{word:bao1}} {{word:ying4}}.",
      hanzi: "球比包硬。",
    },
  ],`),

  { op: "composite", zh: "足球", set: { hsd: [Z], tts: ["用脚玩儿的球"], literal: "the ball you play with your feet", examples: [
    { pinyin: `{{Word:ta1}} {{word:ai4}} ${Z}.`, hanzi: "他爱用脚玩儿的球。", en: "He loves soccer.", ru: "Он любит футбол." },
    { pinyin: `{{Word:wo3}}-${W("men")} ${W("yao4")} ${W("kan4")} ${Z}.`, hanzi: "我们要看用脚玩儿的球。", en: "We want to watch soccer.", ru: "Мы хотим смотреть футбол." },
  ] } },
  { op: "composite", zh: "地球", set: {
    hsd: [`${W("di4")}-${W("qiu2")}`, `${W("da4")} ${W("yuan2")} ${W("di4")}`],
    tts: ["地球", "大圆地"], fit: "natural",
  } },
];
