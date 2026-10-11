// R5: composite review, batch 5 (ranks 401-500), as the author decided it at
// /__review/?batch=5 (review/decisions/batch-5.json): 92 approved, 8 edited.
//   Approved proposals (from review/proposals/batch-5.mjs): 房间, 接, 收, 新年,
//   方便, 有用, 楼, 离开, 窗户, 累, 经常, 老人, 花, 记得, 走路, 里面, 下雨,
//   飞机, 餐厅, 饭店, 书包; 懂 is the proposal (míng-bai, zhīdào).
//   The author's own forms:
//   - 或 "should be removed from core, use hái-shì instead": huò leaves. Or is
//     hái-shì, a choice in a question (inside-a-sentence/and-or is rewritten
//     by hand; name and if use it too). 或者 and 转 follow; 还是 keeps one form.
//     zhě stays, for the one who does it (zuò-zhě), and its card moves to
//     roles-of-a-word/person.
//   - 春天 nián-de tóu-yī-ge bù-fen (the author wrote dì-yī; the book's first
//     is tóu-yī-ge); 街 lù; 记 zhīdào; 超市 mǎi-dōng-xi-de dì-fang; 雨 cóng tiān
//     xià-lái-de shuǐ; 风 kuài-fēi-de kōng-qì.
//   - Tired is not a want: 累 is méi-yǒu lì le, xiǎng shuì-jiào (not yào).
// Run: npm run refactor -- refactors/R5.ts [--write]

import proposals from "../review/proposals/batch-5.mjs";

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
// one sentence: pinyin, hanzi and glosses swapped in a file
const sentence = (file, from, to) => [
  { op: "text", file, from: from.pinyin, to: to.pinyin },
  { op: "text", file, from: from.hanzi, to: to.hanzi },
  { op: "text", file, from: from.en, to: to.en },
  { op: "text", file, from: from.ru, to: to.ru },
];

export default [
  // -- approved proposals ------------------------------------------------------
  ...["懂", "房间", "接", "收", "新年", "方便", "有用", "楼", "离开", "窗户", "经常", "老人", "花2", "记得", "走路", "里面", "下雨", "飞机", "餐厅", "饭店", "书包"].map((zh) => approved(zh)),
  // tired: no strength left, and wanting to sleep (xiǎng, not yào)
  approved("累", { hsd: [`${W("mei2")}-${W("you3")} ${W("li4")} ${W("le")}`, `${W("xiang3")} ${W("shui4jiao4")}`], tts: ["没有力了", "想睡觉"], literal: "no strength left / would like to sleep" }),

  // -- the author's forms --------------------------------------------------------
  form("春天", [`${W("nian2")}-${W("de")} ${W("tou2")}-${W("yi1")}-ge ${W("bu4")}-${L("fen1")}`], ["年的头一个部分"], { literal: "the first part of the year" }),
  form("街", [W("lu4")], ["路"], { fit: "word", literal: "road" }),
  form("超市", [`${W("mai3")}-${W("dong1")}-${L("xi1")}-${W("de")} ${PLACE}`], ["买东西的地方"], { literal: "a place to buy things" }),
  form("雨", [`${W("cong2")} ${W("tian1")} ${W("xia4")}-${W("lai2")}-${W("de")} ${W("shui3")}`], ["从天下来的水"], { literal: "water that comes down from the sky" }),
  form("风", [`${W("kuai4")}-${W("fei1")}-${W("de")} ${W("kong1")}-${W("qi4")}`], ["快飞的空气"], { literal: "air that flies fast" }),
  // 记 stays zhīdào (the proposal, hái zhīdào, was not taken) and 懂 is the proposal

  // -- or is hái-shì: huò leaves -------------------------------------------------
  form("或", [`${W("hai2")}-${W("shi4")}`], ["还是"], { fit: "natural", literal: "or" }),
  form("或者", [`${W("hai2")}-${W("shi4")}`], ["还是"], { fit: "natural", transparent: true }),
  form("还是", [`${W("hai2")}-${W("shi4")}`], ["还是"], { fit: "natural" }),
  { op: "text", file: "src/data/composites/haishi-还是.ts",
    from: `      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:huo4}}-{{word:zhe3}} {{word:hou4}}-{{word:tian1}}.",
      hanzi: "明天或者后天。",
      en: "Tomorrow or the day after.",
      ru: "Завтра или послезавтра.",`,
    to: `      pinyin: "{{Word:ni3}} {{word:ming2}}-{{word:tian1}} {{word:hai2}}-{{word:shi4}} {{word:hou4}}-{{word:tian1}} {{word:lai2}}?",
      hanzi: "你明天还是后天来？",
      en: "Are you coming tomorrow or the day after?",
      ru: "Ты придёшь завтра или послезавтра?",` },
  form("转", [`${W("qu4")} ${W("zuo3")}-${W("bian1")} ${W("hai2")}-${W("shi4")} ${W("you4")}-${W("bian1")}`, `${W("yuan2")}-${W("yuan2")}-${W("de")} ${W("dong4")}`], ["去左边还是右边", "圆圆地动"], { literal: "go left or right / move round and round" }),

  // the lessons that used huò-zhě
  ...sentence(`${LESSONS}greetings-and-feelings/name.ts`,
    { pinyin: `{{Word:ta1}} {{word:jiao4}} \\"Tom\\" {{word:huo4}}-{{word:zhe3}} \\"Tim\\".`, hanzi: `他叫\\"Tom\\"或者\\"Tim\\"。`, en: "He's called Tom or Tim.", ru: "Его зовут Том или Тим." },
    { pinyin: `{{Word:ta1}} {{word:jiao4}} \\"Tom\\" {{word:hai2}}-{{word:shi4}} \\"Tim\\"?`, hanzi: `他叫\\"Tom\\"还是\\"Tim\\"？`, en: "Is he called Tom or Tim?", ru: "Его зовут Том или Тим?" }),
  ...sentence(`${LESSONS}linking-sentences/if.ts`,
    { pinyin: `{{Word:ru2guo3}} {{word:ni3}} {{word:yao4}}, {{word:he1}} {{word:shui3}} {{word:huo4}}-{{word:zhe3}} {{word:chi1}} {{word:fan4}}.`, hanzi: "如果你要，喝水或者吃饭。", en: "If you want, drink some water or eat something.", ru: "Если хочешь, попей воды или поешь." },
    { pinyin: `{{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:ni3}} {{word:yao4}} {{word:he1}} {{word:shui3}} {{word:hai2}}-{{word:shi4}} {{word:chi1}} {{word:fan4}}?`, hanzi: "如果你来，你要喝水还是吃饭？", en: "If you come, do you want water or food?", ru: "Если придёшь, ты хочешь воды или еды?" }),

  // coverage: the "or" entry
  { op: "text", file: "src/data/coverage/grammar.ts",
    from: `      words: ["huo4", "zhe3"],
      forms: ["A {{word:huo4}}-{{word:zhe3}} B"],`,
    to: `      words: ["hai2", "shi4"],
      forms: ["A {{word:hai2}}-{{word:shi4}} B"],` },

  // zhě stays: the one who does it (zuò-zhě), taught with the other -de rén words
  { op: "edit", id: "zhe3", set: {
    definition: {
      eng: `the one who: after a verb, the person who does it; ${W("zuo4")}-${W("zhe3")}, the author`,
      rus: `тот, кто: после глагола — тот, кто это делает; ${W("zuo4")}-${W("zhe3")} — автор`,
      zh: "者",
    },
    necessity: {
      index: 2,
      eng: `The one who: after a verb it names who does it, as in ${W("zuo4")}-${W("zhe3")}.`,
      rus: `Тот, кто: после глагола называет того, кто это делает, как в ${W("zuo4")}-${W("zhe3")}.`,
    },
  } },
  { op: "card", id: "zhe3", to: "roles-of-a-word/person", en: `the one who (after a verb): ${W("zuo4")}-${W("zhe3")}, author`, ru: `тот, кто (после глагола): ${W("zuo4")}-${W("zhe3")} — автор` },
  { op: "text", file: `${LESSONS}roles-of-a-word/person.ts`,
    from: `{{word:zi}} is a light ending many nouns have.",`,
    to: `{{word:zi}} is a light ending many nouns have.",
      "",
      "{{word:zhe3}} says -{{word:de}} {{word:ren2}} in one short word: {{word:zuo4}}-{{word:zhe3}} is the one who makes it, the author.",` },
  { op: "text", file: `${LESSONS}roles-of-a-word/person.ts`,
    from: `{{word:zi}} — лёгкое окончание многих существительных.",`,
    to: `{{word:zi}} — лёгкое окончание многих существительных.",
      "",
      "{{word:zhe3}} говорит -{{word:de}} {{word:ren2}} одним коротким словом: {{word:zuo4}}-{{word:zhe3}} — тот, кто это делает, автор.",` },
  { op: "text", file: `${LESSONS}roles-of-a-word/person.ts`,
    from: `      hanzi: "孩子在家里玩儿。",
      en: "The child is playing at home.",
      ru: "Ребёнок играет дома.",
    },`,
    to: `      hanzi: "孩子在家里玩儿。",
      en: "The child is playing at home.",
      ru: "Ребёнок играет дома.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:shu1}}-{{word:de}} {{word:zuo4}}-{{word:zhe3}} {{word:shi4}} {{word:wo3}}.",
      hanzi: "这个书的作者是我。",
      en: "I'm the author of this book.",
      ru: "Автор этой книги — я.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:xue2}}-{{word:zhe3}}.",
      hanzi: "他是学者。",
      en: "He's a scholar.",
      ru: "Он учёный.",
    },` },

  // the generated grammar overview shows the lesson's two lines (--write rebuilds it)
  { op: "text", file: "src/content/appendix-grammar.ts",
    from: `"A {{word:huo4}}-{{word:zhe3}} B, or: {{word:zhe4}}-ge {{word:huo4}}-{{word:zhe3}} {{word:na4}}-ge (this one or that one)"`,
    to: `"A {{word:hai2}}-{{word:shi4}} B, or (a choice): {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge? (this one or that one?)"` },
  { op: "text", file: "src/content/appendix-grammar.ts",
    from: `"A {{word:huo4}}-{{word:zhe3}} B — или: {{word:zhe4}}-ge {{word:huo4}}-{{word:zhe3}} {{word:na4}}-ge (это или то)"`,
    to: `"A {{word:hai2}}-{{word:shi4}} B — или (выбор): {{word:zhe4}}-ge {{word:hai2}}-{{word:shi4}} {{word:na4}}-ge? (это или то?)"` },

  // huò leaves the core
  { op: "remove", id: "huo4" },

  // -- the whole batch is reviewed ------------------------------------------------
  { op: "reviewed", from: 401, to: 500 },
];
