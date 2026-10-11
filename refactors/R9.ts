// R9: composite review, batch 9 (ranks 801-900), as the author decided it at
// /__review/?batch=9 (review/decisions/batch-9.json): 85 approved, 15 edited.
//   Approved proposals (review/proposals/batch-9.mjs): 云, 低, 假期, 冰箱, 同事,
//   家具, 手表, 星星, 眼镜, 窗.
//   The author's own forms:
//   - 养 also kàn-hǎo X (the same as 照顾); 垃圾 also bù gān-jìng-de dōng-xi.
//   - 出租车 dǎ chē / chē; 唱 fā hǎo-tīng-de shēngyīn ("fa shēngyīn").
//   - 河 and 海 are chang/hěn-dà-de yǒu-shuǐ-de dì-fang; 游 zài shuǐ-lǐ wánr or guò-shuǐ.
//   - 玻璃 tōng-kàn-de liào; 电影 is a hǎo-wánr-de kàn-de dōng-xi, and 电影院 the place for it.
//   - 电池 "diàn"-lì-de xiǎo-de dōng-xi (diàn is not core); 礼物 gěi-nǐ-de dōng-xi.
//   - 男朋友 / 女朋友 nán-de / nǚ-de ài-rén ("ai-ren").
//   - 痛 ("very fundamental word - need as core") and 油 ("potentially add as a core
//     word") become core words: tòng in how-much/very, yóu in who-does-what/have.
//     The composites 痛 and 油 go; 疼 is now tòng.
//   - 绿色 is zhí-wù-de yán-sè (R9c: colours made of obvious things).
// Run: npm run refactor -- refactors/R9.ts [--write]

import proposals from "../review/proposals/batch-9.mjs";

const W = (id) => `{{word:${id}}}`;
const THING = `${W("dong1")}-{{light:xi1}}`;
const PLACE = `${W("di4")}-{{light:fang1}}`;
const text = (file, from, to) => ({ op: "text", file, from, to });
const VERY = "src/content/lessons/how-much/very.ts";
const HAVE = "src/content/lessons/who-does-what/have.ts";

const approved = (zh) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}) },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });

const WANWAN = `${W("hao3")}-${W("wan2r")}-${W("de")}`;

export default [
  // -- two new core words: tòng 痛 (pain) and yóu 油 (oil) ---------------------------
  {
    op: "add", id: "tong4", hanzi: "痛", category: "temperature-taste",
    pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
    definition: {
      eng: `pain, painful, to hurt: ${W("wo3")}-${W("de")} ${W("tou2")} ${W("hen3")} ${W("tong4")}, my head hurts`,
      rus: `боль, больно, болеть: ${W("wo3")}-${W("de")} ${W("tou2")} ${W("hen3")} ${W("tong4")} — у меня болит голова`,
      zh: "痛，疼",
    },
    necessity: {
      index: 4,
      eng: `Pain: ${W("tong4")}. A feeling the body has and no other word describes. A doctor needs it first.`,
      rus: `Боль: ${W("tong4")}. Ощущение тела, которое не описать другими словами. Врачу оно нужно в первую очередь.`,
    },
  },
  { op: "card", id: "tong4", to: "how-much/very", en: "pain, painful", ru: "боль, больно" },
  text(VERY,
    `    {
      pinyin: "{{Word:shui3}}-{{word:de}} {{word:jia4zhi2}} {{word:hen3}} {{word:da4}}.",
      hanzi: "水的价值很大。",
      en: "Water's value is great.",
      ru: "Ценность воды велика.",
    },`,
    `    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:tong4}}.",
      hanzi: "我的头很痛。",
      en: "My head hurts a lot.",
      ru: "У меня сильно болит голова.",
    },`),
  text(VERY,
    `      hanzi: "她的身体很好。",
    },
  ],`,
    `      hanzi: "她的身体很好。",
    },
    {
      en: "I'm in a lot of pain.",
      ru: "Мне очень больно.",
      answer: "{{Word:wo3}} {{word:hen3}} {{word:tong4}}.",
      hanzi: "我很痛。",
    },
  ],`),

  {
    op: "add", id: "you2", hanzi: "油", category: "food-drink",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `oil, cooking oil, fat: ${W("zuo4")} ${W("fan4")} ${W("yong4")} ${W("you2")}, cooking uses oil`,
      rus: `масло, жир: ${W("zuo4")} ${W("fan4")} ${W("yong4")} ${W("you2")} — для готовки нужно масло`,
      zh: "油，食用油",
    },
    necessity: {
      index: 3,
      eng: `Oil for cooking and for machines: ${W("you2")}. Without it, you can only say "the liquid used to cook".`,
      rus: `Масло для еды и для машин: ${W("you2")}. Без него остаётся только «жидкость для готовки».`,
    },
  },
  { op: "card", id: "you2", to: "who-does-what/have", en: "oil", ru: "масло" },
  text(HAVE,
    `      pinyin: "{{Word:ta1}} {{word:you3}} {{word:jin1}}.",
      hanzi: "她有金。",
      en: "She has money.",
      ru: "У неё есть деньги.",`,
    `      pinyin: "{{Word:ta1}} {{word:you3}} {{word:you2}}.",
      hanzi: "她有油。",
      en: "She has oil.",
      ru: "У неё есть масло.",`),
  text(HAVE,
    `      hanzi: "她没有书。",
    },
  ],`,
    `      hanzi: "她没有书。",
    },
    {
      en: "She has oil.",
      ru: "У неё есть масло.",
      answer: "{{Word:ta1}} {{word:you3}} {{word:you2}}.",
      hanzi: "她有油。",
    },
  ],`),
  // 疼 says it with tòng too
  form("疼", [W("tong4")], ["痛"], {
    literal: "pain", fit: "word",
    examples: [
      { pinyin: "{{Word:wo3}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:tong4}}.", hanzi: "我的头很痛。", en: "My head hurts.", ru: "У меня болит голова." },
      { pinyin: "{{Word:ta1}} {{word:hen3}} {{word:tong4}}, {{word:yao4}} {{word:qu4}} {{word:kan4}} {{word:bang1}}-{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.", hanzi: "他很痛，要去看帮身体不好的人。", en: "He's in pain and has to see a doctor.", ru: "Ему больно, ему надо к врачу." },
    ],
  }),

  // -- the approved proposals --------------------------------------------------------
  ...["云", "低", "假期", "冰箱", "同事", "家具", "手表", "星星", "眼镜", "窗"].map((zh) => approved(zh)),

  // -- the author's own forms ----------------------------------------------------------
  { op: "composite", zh: "养", addForm: [`${W("kan4")}-${W("hao3")} X`, "看好X"], set: { literal: "have at home / look after well" } },
  form("出租车", [`${W("da3")} ${W("che1")}`, W("che1")], ["打车", "车"], { literal: "take a car / the car", fit: "natural", note: "Same as 打车." }),
  form("唱", [`${W("fa1")} ${W("hao3")}-${W("ting1")}-${W("de")} ${W("sheng1yin1")}`], ["发好听的声音"], { literal: "make a nice sound" }),
  { op: "composite", zh: "垃圾", addForm: [`${W("bu4")} ${W("gan1jing4")}-${W("de")} ${THING}`, "不干净的东西"], set: { literal: "things nobody wants / unclean things" } },
  form("河", [`${W("chang2")}-${W("de")} ${W("you3")}-${W("shui3")}-${W("de")} ${PLACE}`], ["长的有水的地方"], { literal: "a long place with water" }),
  form("海", [`${W("hen3")}-${W("da4")}-${W("de")} ${W("you3")}-${W("shui3")}-${W("de")} ${PLACE}`], ["很大的有水的地方"], { literal: "a very big place with water" }),
  form("游", [`${W("zai4")} ${W("shui3")}-${W("li3")} ${W("wan2r")}`, `${W("guo4")}-${W("shui3")}`], ["在水里玩儿", "过水"], { literal: "play in the water / cross the water" }),
  form("玻璃", [`${W("tong1")}-${W("kan4")}-${W("de")} ${W("liao4")}`], ["通看的料"], { literal: "material you can see through" }),
  form("电影", [`${WANWAN} ${W("kan4")}-${W("de")} ${THING}`], ["好玩儿的看的东西"], {
    literal: "a fun thing to watch", fit: "natural",
    examples: [
      { pinyin: `{{Word:wo3}}-${W("men")} ${W("qu4")} ${W("kan4")} ${WANWAN} ${W("kan4")}-${W("de")} ${THING}.`, hanzi: "我们去看好玩儿的看的东西。", en: "We're going to see a movie.", ru: "Мы идём смотреть фильм." },
      { pinyin: `{{Word:zhe4}}-{{light:ge4}} ${WANWAN} ${W("kan4")}-${W("de")} ${THING} ${W("hen3")} ${W("hao3")}.`, hanzi: "这个好玩儿的看的东西很好。", en: "This movie is good.", ru: "Этот фильм хороший." },
    ],
  }),
  form("电影院", [`${W("kan4")} ${WANWAN} ${W("kan4")}-${W("de")} ${THING}-${W("de")} ${PLACE}`], ["看好玩儿的看的东西的地方"], { literal: "the place where you watch fun things to watch" }),
  form("电池", [`"diàn"-${W("li4")}-${W("de")} ${W("xiao3")}-${W("de")} ${THING}`], ["电力的小的东西"], { literal: "the small thing with electric power" }),
  form("礼物", [`${W("gei3")}-${W("ni3")}-${W("de")} ${THING}`], ["给你的东西"], { literal: "a thing for you" }),
  form("男朋友", [`${W("nan2")}-${W("de")} ${W("ai4")}-${W("ren2")}`], ["男的爱人"], { literal: "the man one loves" }),
  form("女朋友", [`${W("nv3")}-${W("de")} ${W("ai4")}-${W("ren2")}`], ["女的爱人"], { literal: "the woman one loves" }),

  { op: "reviewed", from: 801, to: 900 },
];
