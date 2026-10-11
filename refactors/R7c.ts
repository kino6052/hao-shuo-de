// R7c: result is jié-guǒ (the author: "xué-de zuì-hòu fā-shēng-de dōng-xi - this
// is very bad ... should use jie-guo ... and we should change dictionary to use
// jie-guo for result too", then "jie guo will be a composite with jie -
// explicitly be catch-all").
//   - jié 结 is a core catch-all root: tie, knot (move-thing), with the sense
//     "result" chosen by jié-guǒ (result).
//   - 结果 is the composite jié-guǒ; 效果 and 年级 use it (xué-de jié-guǒ).
// Run: npm run refactor -- refactors/R7c.ts [--write]

const W = (id) => `{{word:${id}}}`;
const MOVE = "src/content/lessons/direction-and-result/move-thing.ts";
const RESULT = "src/content/lessons/direction-and-result/result.ts";
const text = (file, from, to) => ({ op: "text", file, from, to });

export default [
  {
    op: "add", id: "jie2", hanzi: "结", category: "manipulation-contact",
    pos: { eng: "verb", rus: "глагол", zh: "动词" },
    definition: {
      eng: `to tie, knot, bind together: ${W("ba3")} ${W("xian4")} ${W("jie2")}-${W("hao3")}, tie the thread up; in ${W("jie2")}-${W("guo3")}, the result`,
      rus: `завязывать, связывать: ${W("ba3")} ${W("xian4")} ${W("jie2")}-${W("hao3")} — завязать нитку; в ${W("jie2")}-${W("guo3")} — результат`,
      zh: "结，系，结果",
    },
    necessity: {
      index: 4,
      eng: `Tie, knot: ${W("jie2")}. It also ends things: ${W("jie2")}-${W("guo3")}, the result.`,
      rus: `Завязывать, узел: ${W("jie2")}. Им же всё заканчивается: ${W("jie2")}-${W("guo3")} — результат.`,
    },
  },
  {
    op: "sense", id: "jie2", key: "result", hanzi: "结", eng: "result, how it ends up", rus: "результат, чем всё кончилось",
    why: {
      eng: `Where a thing is tied up, it ends: ${W("jie2")}-${W("guo3")} is the result. On its own it is tie.`,
      rus: `Где вещь завязана, там она кончается: ${W("jie2")}-${W("guo3")} — результат. Сам по себе — «завязывать».`,
    },
    compounds: ["jie2 guo3"],
  },

  // jié (tie), with bǎ in move-thing
  { op: "card", id: "jie2", to: "direction-and-result/move-thing", en: "tie, knot", ru: "завязывать, узел" },
  text(MOVE,
    `{{word:fang4}}-{{word:xia4}} is \\"put down\\".",`,
    `{{word:fang4}}-{{word:xia4}} is \\"put down\\".",
      "",
      "{{word:jie2}} means tie: {{word:ba3}} {{word:xian4}} {{word:jie2}}-{{word:hao3}}, tie the thread up.",`),
  text(MOVE,
    `«вы-нуть», «под-нять».",`,
    `«вы-нуть», «под-нять».",
      "",
      "{{word:jie2}} значит «завязать»: {{word:ba3}} {{word:xian4}} {{word:jie2}}-{{word:hao3}} — завязать нитку.",`),
  text(MOVE,
    `      ru: "Он принёс палку наверх.",
    },
  ],`,
    `      ru: "Он принёс палку наверх.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:xian4}} {{word:jie2}}-{{word:hao3}} {{word:le}}.",
      hanzi: "他把线结好了。",
      en: "He tied the thread.",
      ru: "Он завязал нитку.",
    },
  ],`),
  text(MOVE,
    `      hanzi: "把包放下！",
    },
  ],`,
    `      hanzi: "把包放下！",
    },
    {
      en: "Tie the thread up!",
      ru: "Завяжи нитку!",
      answer: "{{Word:ba3}} {{word:xian4}} {{word:jie2}}-{{word:hao3}}!",
      hanzi: "把线结好！",
    },
  ],`),

  // jié-guǒ (result), in result
  { op: "card", id: "jie2", sense: "result", to: "direction-and-result/result", en: `result: ${W("jie2")}-${W("guo3")}`, ru: `результат: ${W("jie2")}-${W("guo3")}` },
  text(RESULT,
    `For \\"didn't\\", use {{word:mei2}} (Lesson {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",`,
    `For \\"didn't\\", use {{word:mei2}} (Lesson {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}. The result itself is {{word:jie2}}-{{word:guo3}}: {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}}, the result of study.",`),
  text(RESULT,
    `{{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
      "{{word:jian4}} после`,
    `{{word:mei2}} {{word:zhao3}}-{{word:dao4}}. Сам результат — {{word:jie2}}-{{word:guo3}}: {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}} — результат учёбы.",
      "{{word:jian4}} после`),
  text(RESULT,
    `      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:jian4}} {{word:le}} {{word:ma}}?",
      hanzi: "你听见了吗？",
      en: "Did you hear it?",
      ru: "Ты услышал?",`,
    `      pinyin: "{{Word:ni3}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你的学的结果很好。",
      en: "Your study results are good.",
      ru: "Твои результаты учёбы хорошие.",`),
  text(RESULT,
    `      hanzi: "我没看见。",
    },
  ],`,
    `      hanzi: "我没看见。",
    },
    {
      en: "The result is good.",
      ru: "Результат хороший.",
      answer: "{{Word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "结果很好。",
    },
  ],`),

  // the composites
  {
    op: "composite", zh: "结果",
    set: {
      hsd: [`${W("jie2")}-${W("guo3")}`], tts: ["结果"], fit: "natural", transparent: true, literal: undefined,
      examples: [
        { pinyin: "{{Word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.", hanzi: "结果很好。", en: "The result was good.", ru: "Результат был хороший." },
        { pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:jie2}}-{{word:guo3}} {{word:ma}}?", hanzi: "你知道结果吗？", en: "Do you know the result?", ru: "Ты знаешь результат?" },
      ],
    },
  },
  {
    op: "composite", zh: "效果",
    set: { hsd: [`${W("jie2")}-${W("guo3")}`], tts: ["结果"], fit: "plain", literal: undefined },
  },
  {
    op: "composite", zh: "年级",
    set: {
      hsd: [`${W("xue2")}-${W("de")} ${W("jie2")}-${W("guo3")}`], tts: ["学的结果"], literal: "the result of study",
      examples: [
        { pinyin: "{{Word:ta1}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:shi4}} {{word:san1}}.", hanzi: "他的学的结果是三。", en: "He's in third grade.", ru: "Он в третьем классе." },
        { pinyin: "{{Word:ni3}} {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:shi4}} {{word:shen2me}}?", hanzi: "你学的结果是什么？", en: "What grade are you in?", ru: "В каком ты классе?" },
      ],
    },
  },
];
