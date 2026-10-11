// R6: composite review, batch 6 (ranks 501-600), as the author decided it at
// /__review/?batch=6 (review/decisions/batch-6.json): 82 approved, 17 edited;
// 墙 (512, "unsure") and 发展 (585, not decided) are left for later.
//   Approved proposals (from review/proposals/batch-6.mjs): 别, 午饭, 晚饭,
//   卫生间, 司机, 周末, 奶奶, 爷爷, 夏天, 大人, 好多, 小孩儿, 女孩儿, 男孩儿,
//   小朋友, 好玩儿, 饮料, 苹果, 米饭, 看病, 遇见, 跑步, 聊天儿, 呢, 吧, 嗯, 汉字.
//   The author's own forms:
//   - 刚才 yī-xià yǐ-qián; 厕所 wèi-shēng-jiān ("your proposal was really
//     strange given that bathroom was just next to it").
//   - Relatives are "my parents' boy/girl child, bigger/smaller than me":
//     哥哥, 姐姐, 妹妹 (and 弟弟 the same way).
//   - Words that were forms become core: zǎo 早 (zǎo-fàn, zǎo-shang), yá 牙
//     (tooth), dùzi 肚子 (belly); 胖 is dùzi hěn dà.
//   - A thing is described by what a person does to it, not by what it
//     "does": 椅子 ràng-rén-zuò-xià-de dōng-xi (the chair doesn't sit). The
//     same fix for 沙发, and the tool words: 笔 and the like (R6b).
//   - Wanting is xiǎng, not yào ("yào means you will do it"): 渴 xiǎng hē
//     shuǐ, 累 xiǎng shuìjiào (R5), the phrase book. And jué-de (feel) is
//     xiǎng (think) where it means think: 认为, 以为, 相信, 信, 意见, 思想,
//     观点, 想法, 猜, 思考, 信任, 设计. Feelings keep jué-de.
//   - 游泳 zài shuǐ-lǐ wánr / guò shuǐ qù X dì-fang; 跳舞 dòng-yī-dòng;
//     专家 zhīdào hěn-duō-de rén (and someone who has done X for a long time);
//     政府 guó-jiā-de jué-dìng-zhě; 文化 shēng-huó-de fāng-fǎ; 解决 bǎ
//     wèn-tí jiù méi le.
// Run: npm run refactor -- refactors/R6.ts [--write]

import proposals from "../review/proposals/batch-6.mjs";

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const LESSONS = "src/content/lessons/";
const PLACE = `${W("di4")}-${L("fang1")}`;
const THING = `${W("dong1")}-${L("xi1")}`;
const SHANG = `${W("zao3")}-${L("shang4")}`;

const approved = (zh, extra = {}) => {
  const p = proposals[zh];
  if (!p) throw new Error(`no proposal for ${zh}`);
  return {
    op: "composite", zh,
    set: { hsd: p.hsd, tts: p.tts, literal: p.literal, ...(p.fit ? { fit: p.fit } : {}), ...(p.transparent ? { transparent: true } : {}), ...extra },
  };
};
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });
// a parent's child, bigger or smaller than me
const kin = (zh, boyGirl, size, literal) =>
  form(zh, [`${W("wo3")} ${W("ba4ba")}-${W("ma1ma")}-${W("de")} ${W("bi3")}-${W("wo3")}-${W(size)}-${W("de")} ${W(boyGirl)}-${W("hai2")}-${L("zi")}`],
    [`我爸爸妈妈的比我${size === "da4" ? "大" : "小"}的${boyGirl === "nan2" ? "男" : "女"}孩子`], { literal, fit: "plain" });
// "think" instead of "feel" where it means think
const think = (zh, hsd, tts, set = {}) => form(zh, hsd, tts, { proposed: true, ...set });
const XIANG = W("xiang3");
const WHAT_THOUGHT = `${XIANG}-${W("de")} ${THING}`;
const text = (file, from, to) => ({ op: "text", file, from, to });

export default [
  // -- new core words: zǎo, yá, dùzi ----------------------------------------------
  {
    op: "add", id: "zao3", hanzi: "早", category: "time",
    pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
    definition: {
      eng: `early; morning: ${SHANG}, morning; ${W("zao3")}-${W("fan4")}, breakfast; ${W("hen3")} ${W("zao3")}, it's early`,
      rus: `ранний; утро: ${SHANG} — утро; ${W("zao3")}-${W("fan4")} — завтрак; ${W("hen3")} ${W("zao3")} — ещё рано`,
      zh: "早，早上",
    },
    necessity: {
      index: 3,
      eng: `Early, and the morning (${SHANG}): the other end of ${W("wan3")}.`,
      rus: `Ранний и утро (${SHANG}): другой конец от ${W("wan3")}.`,
    },
  },
  { op: "card", id: "zao3", to: "numbers/clock", en: `early; ${SHANG}: morning`, ru: `ранний; ${SHANG} — утро` },
  text(`${LESSONS}numbers/clock.ts`,
    `{{word:wan3}}-{{light:shang4}} is the evening; {{word:wan3}} alone is late.",`,
    `{{word:wan3}}-{{light:shang4}} is the evening; {{word:wan3}} alone is late. {{word:zao3}}-{{light:shang4}} is the morning; {{word:zao3}} alone is early.",`),
  text(`${LESSONS}numbers/clock.ts`,
    `{{word:wan3}}-{{light:shang4}} — вечер; само {{word:wan3}} — поздно.",`,
    `{{word:wan3}}-{{light:shang4}} — вечер; само {{word:wan3}} — поздно. {{word:zao3}}-{{light:shang4}} — утро; само {{word:zao3}} — рано.",`),
  text(`${LESSONS}numbers/clock.ts`,
    `      hanzi: "很晚了。",
      en: "It's late.",
      ru: "Уже поздно.",
    },`,
    `      hanzi: "很晚了。",
      en: "It's late.",
      ru: "Уже поздно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zao3}}-{{light:shang4}} {{word:liu4}}-{{word:dian3}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我早上六点吃饭。",
      en: "I eat at six in the morning.",
      ru: "Я ем в шесть утра.",
    },`),
  text(`${LESSONS}numbers/clock.ts`,
    `      answer: "{{Word:ta1}} {{word:wan3}}-{{light:shang4}} {{word:shi2}}-{{word:dian3}} {{word:shui4jiao4}}.",
      hanzi: "他晚上十点睡觉。",
    },`,
    `      answer: "{{Word:ta1}} {{word:wan3}}-{{light:shang4}} {{word:shi2}}-{{word:dian3}} {{word:shui4jiao4}}.",
      hanzi: "他晚上十点睡觉。",
    },
    {
      en: "I eat at seven in the morning.",
      ru: "Я ем в семь утра.",
      answer: "{{Word:wo3}} {{word:zao3}}-{{light:shang4}} {{word:qi1}}-{{word:dian3}} {{word:chi1}} {{word:fan4}}.",
      hanzi: "我早上七点吃饭。",
    },`),

  {
    op: "add", id: "ya2", hanzi: "牙", category: "body",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `tooth, teeth: ${W("wo3")}-${W("de")} ${W("ya2")} ${W("hen3")} ${W("bai2")}, my teeth are white`,
      rus: `зуб, зубы: ${W("wo3")}-${W("de")} ${W("ya2")} ${W("hen3")} ${W("bai2")} — у меня белые зубы`,
      zh: "牙",
    },
    necessity: {
      index: 4,
      eng: "Teeth: a part of the body that needs its own word.",
      rus: "Зубы: часть тела, которой нужно своё слово.",
    },
  },
  {
    op: "add", id: "du4zi", hanzi: "肚子", category: "body",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `belly, stomach: ${W("wo3")}-${W("de")} ${W("du4zi")} ${W("hen3")} ${W("da4")}, I have a big belly`,
      rus: `живот: ${W("wo3")}-${W("de")} ${W("du4zi")} ${W("hen3")} ${W("da4")} — у меня большой живот`,
      zh: "肚子",
    },
    necessity: {
      index: 4,
      eng: "The belly: where food goes, and it is the way to say fat or hungry.",
      rus: "Живот: куда идёт еда, и через него говорят «толстый» или «голодный».",
    },
  },
  { op: "card", id: "ya2", to: "roles-of-a-word/parts", en: "tooth", ru: "зуб" },
  { op: "card", id: "du4zi", to: "roles-of-a-word/parts", en: "belly", ru: "живот" },
  // parts: three sentences give way to the new words (a module holds at most eight)
  text(`${LESSONS}roles-of-a-word/parts.ts`,
    `      pinyin: "{{Word:ni3}}-{{word:de}} {{word:bi2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "你的鼻子是红色的。",
      en: "Your nose is red.",
      ru: "У тебя красный нос.",`,
    `      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:bai2}}.",
      hanzi: "我的牙很白。",
      en: "My teeth are white.",
      ru: "У меня белые зубы.",`),
  text(`${LESSONS}roles-of-a-word/parts.ts`,
    `      pinyin: "{{Word:wo3}} {{word:shen1ti3}}-{{word:de}} {{word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:re4}}.",
      hanzi: "我身体的外面很热。",
      en: "My skin is hot.",
      ru: "У меня горячая кожа.",`,
    `      pinyin: "{{Word:dong4}}-{{word:wu4}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "动物的牙很硬。",
      en: "The animal's teeth are hard.",
      ru: "У животного крепкие зубы.",`),
  text(`${LESSONS}roles-of-a-word/parts.ts`,
    `      pinyin: "{{Word:dong4}}-{{word:wu4}}-{{word:de}} {{word:mao2}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "动物的毛很硬。",
      en: "The animal's fur is stiff.",
      ru: "У животного жёсткая шерсть.",`,
    `      pinyin: "{{Word:wo3}}-{{word:de}} {{word:du4zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的肚子很大。",
      en: "My belly is big.",
      ru: "У меня большой живот.",`),
  text(`${LESSONS}roles-of-a-word/parts.ts`,
    `      answer: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的鼻子很小。",
    },`,
    `      answer: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的鼻子很小。",
    },
    {
      en: "His teeth are white.",
      ru: "У него белые зубы.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:bai2}}.",
      hanzi: "他的牙很白。",
    },
    {
      en: "His belly is small.",
      ru: "У него маленький живот.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:du4zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "他的肚子很小。",
    },`),

  // -- approved proposals ------------------------------------------------------
  ...["别", "午饭", "晚饭", "卫生间", "司机", "周末", "奶奶", "爷爷", "夏天", "大人", "好多", "小孩儿", "女孩儿", "男孩儿", "小朋友", "好玩儿", "饮料", "苹果", "米饭", "看病", "遇见", "跑步", "聊天儿", "呢", "吧", "嗯", "汉字"].map((zh) => approved(zh)),

  // -- the author's forms --------------------------------------------------------
  form("刚才", [`${W("yi1")}-${W("xia4")} ${W("yi3")}-${W("qian2")}`], ["一下以前"], { literal: "a moment before" }),
  form("厕所", [`${W("wei4")}-${W("sheng1")}-${W("jian1")}`], ["卫生间"], { fit: "natural", transparent: true, literal: undefined }),
  kin("哥哥", "nan2", "da4", "my parents' boy, bigger than me"),
  kin("姐姐", "nv3", "da4", "my parents' girl, bigger than me"),
  kin("妹妹", "nv3", "xiao3", "my parents' girl, smaller than me"),
  kin("弟弟", "nan2", "xiao3", "my parents' boy, smaller than me"),
  form("早饭", [`${W("zao3")}-${W("fan4")}`], ["早饭"], { fit: "natural", transparent: true, literal: undefined }),
  form("椅子", [`${W("rang4")}-${W("ren2")}-${W("zuo4")}-${W("xia4")}-${W("de")} ${THING}`], ["让人坐下的东西"], { literal: "a thing that lets a person sit down" }),
  form("沙发", [`${W("da4")}-${W("de")} ${W("rang4")}-${W("ren2")}-${W("zuo4")}-${W("xia4")}-${W("de")} ${THING}`], ["大的让人坐下的东西"], { literal: "a big thing that lets a person sit down" }),
  form("游泳", [`${W("zai4")} ${W("shui3")}-${W("li3")} ${W("wan2r")}`, `${W("guo4")} ${W("shui3")} ${W("qu4")} X ${PLACE}`], ["在水里玩儿", "过水去X地方"],
    { literal: "play in the water / cross the water to a place", fit: "plain" }),
  form("牙", [W("ya2")], ["牙"], { fit: "word", literal: undefined }),
  form("肚子", [W("du4zi")], ["肚子"], { fit: "word", literal: undefined }),
  form("胖", [`${W("du4zi")} ${W("hen3")} ${W("da4")}`], ["肚子很大"], { literal: "the belly is very big" }),
  form("渴", [`${XIANG} ${W("he1")} ${W("shui3")}`], ["想喝水"], { literal: "would like to drink water" }),
  form("跳舞", [`${W("dong4")}-${W("yi1")}-${W("dong4")}`], ["动一动"], { literal: "move a bit", fit: "plain" }),
  form("专家", [`${W("zuo4")} X ${W("hen3")} ${W("chang2")}-${W("de")} ${W("shi2")}-${W("jian1")}-${W("de")} ${W("ren2")}`, `${W("zhi1dao4")} ${W("hen3")}-${W("duo1")}-${W("de")} ${W("ren2")}`],
    ["做X很长的时间的人", "知道很多的人"], { literal: "a person who has done X for a long time / a person who knows a lot" }),
  form("政府", [`${W("guo2")}-${W("jia1")}-${W("de")} ${W("jue2")}-${W("ding4")}-${W("zhe3")}`], ["国家的决定者"], { literal: "the country's decider" }),
  form("文化", [`${W("sheng1")}-${W("huo2")}-${W("de")} ${W("fang1")}-${W("fa3")}`], ["生活的方法"], { literal: "the way of life" }),
  form("解决", [`${W("ba3")} ${W("wen4")}-${W("ti2")} ${W("jiu4")} ${W("mei2")} ${W("le")}`], ["把问题就没了"], { literal: "the problem is gone" }),

  // zǎo: the morning is zǎo-shang
  form("早", [W("zao3")], ["早"], { fit: "word", literal: undefined, note: undefined,
    examples: [
      { pinyin: "{{Word:ta1}} {{word:lai2}}-{{word:de}} {{word:hen3}} {{word:zao3}}.", hanzi: "他来得很早。", en: "He came early.", ru: "Он пришёл рано." },
      { pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wo3}} {{word:zao3}} {{word:qi3}}-{{word:lai2}}.", hanzi: "今天我早起来。", en: "Today I got up early.", ru: "Сегодня я встал рано." },
    ] }),
  form("早上", [SHANG], ["早上"], { fit: "natural", transparent: true, literal: undefined,
    examples: [
      { pinyin: `{{Word:zao3}}-{{light:shang4}} {{word:wo3}} {{word:he1}} {{word:shui3}}.`, hanzi: "早上我喝水。", en: "In the morning I drink water.", ru: "Утром я пью воду." },
      { pinyin: `{{Word:ta1}} {{word:zao3}}-{{light:shang4}} {{word:zou3}} {{word:le}}.`, hanzi: "他早上走了。", en: "He left in the morning.", ru: "Он ушёл утром." },
    ] }),
  form("早晨", [SHANG], ["早上"], { fit: "natural", transparent: true, literal: undefined }),

  // -- relatives: the same rule for the rest -------------------------------------
  form("姐妹", [`${W("wo3")} ${W("ba4ba")}-${W("ma1ma")}-${W("de")} ${W("nv3")}-${W("hai2")}-${L("zi")}`], ["我爸爸妈妈的女孩子"], { proposed: true, literal: "my parents' girls" }),
  form("兄弟", [`${W("wo3")} ${W("ba4ba")}-${W("ma1ma")}-${W("de")} ${W("nan2")}-${W("hai2")}-${L("zi")}`], ["我爸爸妈妈的男孩子"], { proposed: true, literal: "my parents' boys" }),

  // -- jué-de (feel) -> xiǎng (think) where it means think ----------------------------
  think("认为", [XIANG], ["想"]),
  think("以为", [XIANG], ["想"]),
  think("相信", [`${XIANG} ${W("shi4")} ${W("zhen1")}-${W("de")}`], ["想是真的"], { literal: "think it's true",
    examples: [
      { pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.", hanzi: "我想是真的。", en: "I believe it.", ru: "Я верю." },
      { pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:ta1}} {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:ma}}?", hanzi: "你想他说的是真的吗？", en: "Do you believe what he said?", ru: "Ты веришь тому, что он сказал?" },
    ] }),
  think("信", [`${XIANG} ${W("shi4")} ${W("zhen1")}-${W("de")}`, `${W("gei3")} ${W("yuan3")}-${W("de")} ${W("ren2")} ${W("xie3")}-${W("de")} ${THING}`], ["想是真的", "给远的人写的东西"], { literal: "think it's true / something written to someone far away" }),
  think("意见", [WHAT_THOUGHT], ["想的东西"]),
  think("思想", [WHAT_THOUGHT], ["想的东西"]),
  think("观点", [WHAT_THOUGHT], ["想的东西"]),
  think("想法", [`${W("xiang3")}-${W("fa3")}`, WHAT_THOUGHT], ["想法", "想的东西"]),
  think("猜", [`${XIANG} ${W("shi4")} …`], ["想是…"], { literal: "think it's …" }),
  think("思考", [XIANG], ["想"]),
  think("信任", [`${XIANG} X ${W("shuo1")}-${W("de")} ${W("shi4")} ${W("zhen1")}-${W("de")}`], ["想X说的是真的"]),
  think("设计", [`${W("zuo4")} ${W("qian2")}, ${XIANG} ${W("zen3me")} ${W("zuo4")}`], ["做前，想怎么做"]),

  // -- phrase book: tired and hungry are wanted, not "will" ----------------------------
  text("src/content/phrase-book.ts",
    `pinyin: "{{Word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
    ttsText: "我要睡觉。",`,
    `pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:shui4jiao4}}.",
    ttsText: "我想睡觉。",`),
  text("src/content/phrase-book.ts",
    `pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}} {{word:fan4}}.",
    ttsText: "我要吃饭。",`,
    `pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:chi1}} {{word:fan4}}.",
    ttsText: "我想吃饭。",`),

  // -- the whole batch is reviewed, except 墙 (512) and 发展 (585) ------------------------
  { op: "reviewed", from: 501, to: 511 },
  { op: "reviewed", from: 513, to: 584 },
  { op: "reviewed", from: 586, to: 600 },
];
