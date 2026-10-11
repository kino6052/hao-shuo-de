// R7: composite review, batch 7 (ranks 601-700), as the author decided it at
// /__review/?batch=7 (review/decisions/batch-7.json): 80 approved, 18 edited;
// 家庭 (639) and 服务 (666) were not decided and stay unreviewed.
//   Approved proposals (from review/proposals/batch-7.mjs): 光, 单位, 周, 市,
//   极, 母亲, 考虑, 肯定 (and 字典, which the author wrote out the same way).
//   New core words the author asked for:
//   - tì 替, "instead of": 代表 is "someone who speaks instead of X", and it
//     is the plain way to say instead (tì wǒ qù, he goes in my place).
//   - shù 数, "the number of": 分数 is the good/bad number (the batch-7 note
//     "we will need to add shu4 to the core dictionary"), and 数 becomes it.
//   - liào 料, "stuff to make something from": 材料 ("a very critical and
//     important word"; "if everything is awkward, we will need to add liao4").
//   The author's own forms: 句子 fàng-zài-yī-qǐ-de cí (chained), 城 guó-jiā-lǐ-de
//   dì-fang, 安排 dǎ-suàn, 年级 xué-de jié-guǒ (the result), 总 shénme shí-jiān
//   dōu, 情况 xiàn-zài-de yàng-zi, 意见 xiǎng-fǎ, 提高 bǐ qián zuò-hǎo yī-diǎn,
//   消息 xiàn-zài fā-shēng-de, 答案 duì-wèn-de shuō-de, 自然 wài-miàn / a place
//   with many plants / "since always X", 节目 zài kàn-de-jī kàn-de dōng-xi.
// Run: npm run refactor -- refactors/R7.ts [--write]

import proposals from "../review/proposals/batch-7.mjs";

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const LESSONS = "src/content/lessons/";
const PLACE = `${W("di4")}-${L("fang1")}`;
const THING = `${W("dong1")}-${L("xi1")}`;

const approved = (zh, extra = {}) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}), ...extra },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });
const text = (file, from, to) => ({ op: "text", file, from, to });

export default [
  // -- new core words: tì, shù, liào ----------------------------------------------
  {
    op: "add", id: "ti4", hanzi: "替", category: "place-nouns-prepositions",
    pos: { eng: "preposition", rus: "предлог", zh: "介词" },
    definition: {
      eng: `instead of, for (in someone's place): ${W("ti4")} ${W("wo3")} ${W("qu4")}, goes in my place; ${W("ti4")} ${W("ni3")} ${W("shuo1")}, says it for you`,
      rus: `вместо, за (кого-то): ${W("ti4")} ${W("wo3")} ${W("qu4")} — идёт вместо меня; ${W("ti4")} ${W("ni3")} ${W("shuo1")} — говорит за тебя`,
      zh: "替，代替",
    },
    necessity: {
      index: 4,
      eng: `Instead of someone: ${W("ti4")} ${W("wo3")}. Without it, you can't act or speak in another's place.`,
      rus: `Вместо кого-то: ${W("ti4")} ${W("wo3")}. Без него нельзя сделать или сказать что-то за другого.`,
    },
  },
  { op: "card", id: "ti4", to: "inside-a-sentence/give", en: "instead of, in someone's place", ru: "вместо, за (кого-то)" },
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `, I write to you.",`,
    `, I write to you.",
      "",
      "{{word:ti4}} before a verb means in someone's place: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}, he goes instead of me.",`),
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `{{word:xie3}} — я пишу тебе.",`,
    `{{word:xie3}} — я пишу тебе.",
      "",
      "{{word:ti4}} перед глаголом значит «вместо»: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}} — он идёт вместо меня.",`),
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `(I give you water.)",`,
    `(I give you water.) {{word:ti4}} + person + verb, instead of: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}. (He goes instead of me.)",`),
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `(Я даю тебе воду.)",`,
    `(Я даю тебе воду.) {{word:ti4}} + человек + глагол — вместо: {{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}. (Он идёт вместо меня.)",`),
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:yi1fu}}.",
      hanzi: "她给我衣服。",
      en: "She gives me clothes.",
      ru: "Она даёт мне одежду.",`,
    `      pinyin: "{{Word:wo3}} {{word:ti4}} {{word:ni3}} {{word:shuo1}}.",
      hanzi: "我替你说。",
      en: "I'll say it for you.",
      ru: "Я скажу за тебя.",`),
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}.",
      hanzi: "给我一点水。",
      en: "Give me a little water.",
      ru: "Дай мне немного воды.",`,
    `      pinyin: "{{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "他替我去。",
      en: "He goes instead of me.",
      ru: "Он идёт вместо меня.",`),
  text(`${LESSONS}inside-a-sentence/give.ts`,
    `      hanzi: "给我包。",
    },
  ],`,
    `      hanzi: "给我包。",
    },
    {
      en: "He says it for me.",
      ru: "Он говорит за меня.",
      answer: "{{Word:ta1}} {{word:ti4}} {{word:wo3}} {{word:shuo1}}.",
      hanzi: "他替我说。",
    },
  ],`),

  {
    op: "add", id: "shu4", hanzi: "数", category: "abstract-substantives",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `number, amount, count: ${W("ren2")}-${W("de")} ${W("shu4")}, the number of people; ${W("hao3")}-${W("huai4")}-${W("de")} ${W("shu4")}, a score`,
      rus: `число, количество: ${W("ren2")}-${W("de")} ${W("shu4")} — число людей; ${W("hao3")}-${W("huai4")}-${W("de")} ${W("shu4")} — оценка`,
      zh: "数，数目",
    },
    necessity: {
      index: 4,
      eng: `How many there are: ${W("ren2")}-${W("de")} ${W("shu4")}. ${W("hao4")} only names things; ${W("shu4")} counts them.`,
      rus: `Сколько чего-то: ${W("ren2")}-${W("de")} ${W("shu4")}. ${W("hao4")} только называет, ${W("shu4")} считает.`,
    },
  },
  { op: "card", id: "shu4", to: "numbers/count-kinds", en: "number, amount (how many there are)", ru: "число, количество (сколько есть)" },
  text(`${LESSONS}numbers/count-kinds.ts`,
    `/ number-{{word:bu4}}-{{light:fen1}}**",`,
    `/ number-{{word:bu4}}-{{light:fen1}}**",
      "",
      "To say how many there are, use {{word:shu4}} (the number of): {{word:ren2}}-{{word:de}} {{word:shu4}} is the number of people.",`),
  text(`${LESSONS}numbers/count-kinds.ts`,
    `/ число-{{word:bu4}}-{{light:fen1}}**",`,
    `/ число-{{word:bu4}}-{{light:fen1}}**",
      "",
      "Чтобы сказать, сколько чего-то, используйте {{word:shu4}} (число): {{word:ren2}}-{{word:de}} {{word:shu4}} — число людей.",`),
  text(`${LESSONS}numbers/count-kinds.ts`,
    `(I've been there three times.)",`,
    `(I've been there three times.) {{word:shu4}}, the number of: {{word:ren2}}-{{word:de}} {{word:shu4}}.",`),
  text(`${LESSONS}numbers/count-kinds.ts`,
    `(Я был там три раза.)",`,
    `(Я был там три раза.) {{word:shu4}} — число: {{word:ren2}}-{{word:de}} {{word:shu4}}.",`),
  text(`${LESSONS}numbers/count-kinds.ts`,
    `      hanzi: "我去过三次。",
      en: "I've been there three times.",
      ru: "Я был там три раза.",
    },
  ],`,
    `      hanzi: "我去过三次。",
      en: "I've been there three times.",
      ru: "Я был там три раза.",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:de}} {{word:shu4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "人的数很多。",
      en: "There are a lot of people.",
      ru: "Людей много.",
    },
  ],`),
  text(`${LESSONS}numbers/count-kinds.ts`,
    `      hanzi: "我有两种植物。",
    },
  ],`,
    `      hanzi: "我有两种植物。",
    },
    {
      en: "There are few plants.",
      ru: "Растений мало.",
      answer: "{{Word:zhi2wu4}}-{{word:de}} {{word:shu4}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "植物的数很少。",
    },
  ],`),

  {
    op: "add", id: "liao4", hanzi: "料", category: "containers-materials",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `material, ingredients, the stuff something is made from: ${W("zuo4")} ${W("fan4")} ${W("yao4")} ${W("liao4")}, cooking needs ingredients`,
      rus: `материал, продукты, то, из чего делают: ${W("zuo4")} ${W("fan4")} ${W("yao4")} ${W("liao4")} — для готовки нужны продукты`,
      zh: "料，材料",
    },
    necessity: {
      index: 4,
      eng: `The stuff you make things from: ${W("liao4")}. Without it, you can't name what a thing is made of.`,
      rus: `То, из чего всё делают: ${W("liao4")}. Без него не назвать, из чего что сделано.`,
    },
  },
  { op: "card", id: "liao4", to: "becoming-and-making/make", en: "material, ingredients (what something is made from)", ru: "материал, продукты (из чего делают)" },
  text(`${LESSONS}becoming-and-making/make.ts`,
    `(What did you get?)",`,
    `(What did you get?)",
      "",
      "{{word:liao4}} is the stuff something is made from: {{word:zuo4}} {{word:fan4}} {{word:yao4}} {{word:liao4}}, cooking takes ingredients.",`),
  text(`${LESSONS}becoming-and-making/make.ts`,
    `(Что ты получил?)",`,
    `(Что ты получил?)",
      "",
      "{{word:liao4}} — то, из чего что-то делают: {{word:zuo4}} {{word:fan4}} {{word:yao4}} {{word:liao4}} — для готовки нужны продукты.",`),
  text(`${LESSONS}becoming-and-making/make.ts`,
    `(I fixed it.)",`,
    `(I fixed it.) {{word:liao4}}, the stuff to make it from: {{word:zuo4}} {{word:fan4}} {{word:yao4}} {{word:liao4}}.",`),
  text(`${LESSONS}becoming-and-making/make.ts`,
    `(Я починил.)",`,
    `(Я починил.) {{word:liao4}} — из чего делают: {{word:zuo4}} {{word:fan4}} {{word:yao4}} {{word:liao4}}.",`),
  text(`${LESSONS}becoming-and-making/make.ts`,
    `      hanzi: "不要做乱！",
      en: "Don't make a mess!",
      ru: "Не устраивай беспорядок!",
    },
  ],
  exercises`,
    `      hanzi: "不要做乱！",
      en: "Don't make a mess!",
      ru: "Не устраивай беспорядок!",
    },
    {
      pinyin: "{{Word:zuo4}} {{word:fan4}} {{word:yao4}} {{word:hen3}}-{{word:duo1}} {{word:liao4}}.",
      hanzi: "做饭要很多料。",
      en: "Cooking takes a lot of ingredients.",
      ru: "Для готовки нужно много продуктов.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hao3}}-{{word:de}} {{word:liao4}}.",
      hanzi: "我有好的料。",
      en: "I have good material.",
      ru: "У меня хороший материал.",
    },
  ],
  exercises`),
  text(`${LESSONS}becoming-and-making/make.ts`,
    `      hanzi: "不要做乱！",
    },
  ],
});`,
    `      hanzi: "不要做乱！",
    },
    {
      en: "I have a lot of ingredients.",
      ru: "У меня много продуктов.",
      answer: "{{Word:wo3}} {{word:you3}} {{word:hen3}}-{{word:duo1}} {{word:liao4}}.",
      hanzi: "我有很多料。",
    },
  ],
});`),

  // -- approved proposals --------------------------------------------------------
  ...["光", "单位", "周", "市", "极", "母亲", "考虑", "肯定", "字典"].map((zh) => approved(zh)),

  // -- the author's forms --------------------------------------------------------
  form("代表", [`${W("ti4")} X ${W("shuo1")}-${W("de")} ${W("ren2")}`, `${W("ti4")} X`], ["替X说的人", "替X"],
    { literal: "a person who speaks instead of X / stands in for X", fit: "plain" }),
  form("数", [W("shu4")], ["数"], { fit: "word", literal: undefined }),
  form("分数", [`${W("hao3")}-${W("huai4")}-${W("de")} ${W("shu4")}`], ["好坏的数"], { literal: "the good-or-bad number" }),
  form("句子", [`${W("fang4")}-${W("zai4")}-${W("yi1")}-${W("qi3")}-${W("de")} ${W("ci2")}`], ["放在一起的词"], { literal: "words put together" }),
  form("城", [`${W("guo2")}-${W("jia1")}-${W("li3")}-${W("de")} ${PLACE}`], ["国家里的地方"], { literal: "a place in the country" }),
  form("安排", [`${W("da3")}-${W("suan4")}`, `${W("ba3")} ${THING} ${W("fang4")}-${W("hao3")}`, `${W("ba3")} ${THING} ${W("fang4")} ${W("zai4")} ${W("hao3")}-${W("de")} ${PLACE}`],
    ["打算", "把东西放好", "把东西放在好的地方"], { literal: "plan / put the things right / put the things in good places" }),
  form("年级", [`${W("xue2")}-${W("de")} ${W("zui4")}-${W("hou4")} ${W("fa1")}-${W("sheng1")}-${W("de")} ${THING}`], ["学的最后发生的东西"], { literal: "what finally happens from studying (the result)" }),
  form("总", [`${W("shen2me")} ${W("shi2")}-${W("jian1")} ${W("dou1")}`], ["什么时间都"], { literal: "at any time" }),
  form("情况", [`${W("xian4")}-${W("zai4")}-${W("de")} ${W("yang4")}-${L("zi")}`], ["现在的样子"], { literal: "the way things are now" }),
  form("意见", [`${W("xiang3")}-${W("fa3")}`], ["想法"], { literal: "thought-way" }),
  form("提高", [`${W("bi3")} ${W("qian2")} ${W("zuo4")}-${W("hao3")} ${W("yi1")}-${W("dian3")}`], ["比前做好一点"], { literal: "do it a bit better than before" }),
  form("材料", [W("liao4")], ["料"], { fit: "plain", literal: undefined, note: "材 is not a core character; liào alone says the stuff something is made from." }),
  form("消息", [`${W("xian4")}-${W("zai4")}-${W("fa1")}-${W("sheng1")}-${W("de")}`], ["现在发生的"], { literal: "what is happening now" }),
  form("答案", [`${W("dui4")}-${W("wen4")}-${W("de")} ${W("shuo1")}-${W("de")}`], ["对问的说的"], { literal: "what is said to the question" }),
  form("自然", [`${W("wai4")}-${W("mian4")}`, `${W("you3")} ${W("duo1")} ${W("zhi2wu4")}-${W("de")} ${PLACE}`, `${W("cong2")} ${W("yi3")}-${W("qian2")} ${W("jiu4")} X`],
    ["外面", "有多植物的地方", "从以前就X"], { literal: "outside / a place with many plants / since before, already X" }),
  form("节目", [`${W("zai4")} ${W("kan4")}-${W("de")}-${W("ji1")} ${W("kan4")}-${W("de")} ${THING}`], ["在看的机看的东西"], { literal: "the thing watched on the watching machine" }),

  // -- the whole batch is reviewed, except 家庭 (639) and 服务 (666) ---------------------
  { op: "reviewed", from: 601, to: 638 },
  { op: "reviewed", from: 640, to: 665 },
  { op: "reviewed", from: 667, to: 700 },
];
