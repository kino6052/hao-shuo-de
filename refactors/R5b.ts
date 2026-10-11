// R5b (with the author): dì 第 is core. "We need dì in core vocab so that we
// use dì-yī, dì-èr and so on." dì (the floor) gets a sense, 第, in front of a
// number: dì-yī, first; dì-èr, second. It is taught with hào, the other
// word that numbers things (numbers/label). 第 (rank 687) and 春天 use it.
// Run: npm run refactor -- refactors/R5b.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const FILE = "src/content/lessons/numbers/label.ts";
const ORDER = ["yi1", "er4", "san1", "si4", "wu3", "liu4", "qi1", "ba1", "jiu3", "shi2"];

export default [
  {
    op: "sense", id: "di4", key: "order", hanzi: "第", eng: "order (first, second …)", rus: "порядок (первый, второй …)",
    why: {
      eng: `Written 第, ${W("di4")} puts a number in order in ${W("di4")}-${W("yi1")} (first) and ${W("di4")}-${W("er4")} (second); on its own it is the floor.`,
      rus: `Записанное как 第, ${W("di4")} ставит число по порядку в ${W("di4")}-${W("yi1")} («первый») и ${W("di4")}-${W("er4")} («второй»); само по себе — «пол».`,
    },
    compounds: ORDER.map((n) => `di4 ${n}`),
  },
  { op: "edit", id: "di4", set: {
    definition: {
      eng: `floor, horizontal surface, platform; before a number, the order: ${W("di4")}-${W("yi1")}, first; ${W("di4")}-${W("er4")}, second`,
      rus: `пол, горизонтальная поверхность; перед числом — порядок: ${W("di4")}-${W("yi1")} — первый; ${W("di4")}-${W("er4")} — второй`,
      zh: "地板，水平表面，平台；第",
    },
    necessity: {
      index: 3,
      eng: `The floor, the ground. Mountains, soil, and "down there" are described from it. Before a number it gives the order: ${W("di4")}-${W("yi1")}, first.`,
      rus: `Пол, земля. Через него описывают горы, почву и «внизу». Перед числом он задаёт порядок: ${W("di4")}-${W("yi1")} — первый.`,
    },
  } },
  { op: "card", id: "di4", sense: "order", to: "numbers/label", en: `first, second …: ${W("di4")}-${W("yi1")}, ${W("di4")}-${W("er4")}`, ru: `первый, второй …: ${W("di4")}-${W("yi1")}, ${W("di4")}-${W("er4")}` },

  { op: "text", file: FILE,
    from: `      "**number + {{word:hao4}}**",
    ],`,
    to: `      "**number + {{word:hao4}}**",
      "",
      "To say first, second, put {{word:di4}} before the number: {{word:di4}}-{{word:yi1}} is first, {{word:di4}}-{{word:er4}} is second.",
    ],` },
  { op: "text", file: FILE,
    from: `      "**число + {{word:hao4}}**",
    ],`,
    to: `      "**число + {{word:hao4}}**",
      "",
      "Чтобы сказать «первый», «второй», поставьте {{word:di4}} перед числом: {{word:di4}}-{{word:yi1}} — первый, {{word:di4}}-{{word:er4}} — второй.",
    ],` },
  { op: "text", file: FILE,
    from: `    en: "number + {{word:hao4}}, number …: {{Word:er4}}-{{word:hao4}} (number two)",
    ru: "число + {{word:hao4}} — номер: {{Word:er4}}-{{word:hao4}} (номер два)",`,
    to: `    en: "number + {{word:hao4}}, number …: {{Word:er4}}-{{word:hao4}} (number two). {{word:di4}} + number, the order: {{word:di4}}-{{word:yi1}} (first)",
    ru: "число + {{word:hao4}} — номер: {{Word:er4}}-{{word:hao4}} (номер два). {{word:di4}} + число — порядок: {{word:di4}}-{{word:yi1}} (первый)",` },
  { op: "text", file: FILE,
    from: `      en: "Road number six leads to my home.",
      ru: "Дорога номер шесть ведёт к моему дому.",
    },`,
    to: `      en: "Road number six leads to my home.",
      ru: "Дорога номер шесть ведёт к моему дому.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:di4}}-{{word:yi1}}.",
      hanzi: "他是第一。",
      en: "He's first.",
      ru: "Он первый.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:di4}}-{{word:san1}}-ge.",
      hanzi: "我是第三个。",
      en: "I'm the third one.",
      ru: "Я третий.",
    },
    {
      pinyin: "{{Word:di4}}-{{word:er4}}-ge {{word:ren2}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "第二个人在哪里？",
      en: "Where is the second person?",
      ru: "Где второй человек?",
    },` },
  { op: "text", file: FILE,
    from: `      answer: "{{Word:si4}}-{{word:hao4}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "四号在哪里？",
    },`,
    to: `      answer: "{{Word:si4}}-{{word:hao4}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "四号在哪里？",
    },
    {
      en: "He's second.",
      ru: "Он второй.",
      answer: "{{Word:ta1}} {{word:shi4}} {{word:di4}}-{{word:er4}}.",
      hanzi: "他是第二。",
    },` },

  // 第 (rank 687) says it with dì; spring is the first part of the year
  { op: "composite", zh: "第", set: {
    hsd: [`${W("di4")}-${W("yi1")}`], tts: ["第一"], literal: "first", fit: "natural",
    note: "dì in front of a number puts it in order: dì-yī, first; dì-èr, second.",
  } },
  { op: "composite", zh: "春天", set: {
    hsd: [`${W("nian2")}-${W("de")} ${W("di4")}-${W("yi1")}-${W("bu4")}-${L("fen1")}`],
    tts: ["年的第一部分"], literal: "the first part of the year",
  } },
];
