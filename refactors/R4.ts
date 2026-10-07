// R4: composite review, batch 4 (ranks 301-400), as the author decided it at
// /__review/?batch=4 (review/decisions/batch-4.json): 90 approved, 10 edited.
//   Approved proposals (from review/proposals/batch-4.mjs): 回答 huí-huà,
//   希望 xiǎng, 星期 qī-tiān, 普通话 "Zhōngguó" huà, 音乐, 高中, 上学, 上班
//   qù gōng-zuò, 上面, 下面, 商店, 店, 好像 kàn-qǐ-lái, 干净, 快乐 kāi-xīn, and
//   常 cháng-cháng: cháng gets a sense 常 (often), only in cháng-cháng.
//   The author's own forms:
//   - qíguài leaves the core ("should not be a word"): 奇怪 is described,
//     yǐ-qián-méi-kàn-guò-de / nán-míng-bái-de / nán-kàn-de / nán-tīng-de
//     (the author wrote zhī-qián; zhī is only inside zhīdào, so yǐ-qián). Its
//     sentences: L12 takes other adjectives taught by then; later lessons
//     and the stories use the descriptions. 正常 (normal) was bù qíguài: a
//     proposed hé dà-jiā yī-yàng, for its batch.
//   - 清楚 hěn-bù-nán míng-bái; 特别 hěn bù yī-yàng, yě hěn hǎo; 考试
//     kàn-nǐ-xué-de-duō-hǎo-de dōng-xi; 忘, 忘记 xiàn-zài bù zhīdào le.
// Run: npm run refactor -- refactors/R4.ts [--write]

import proposals from "../review/proposals/batch-4.mjs";

const W = (id) => `{{word:${id}}}`;
const Wc = (id) => `{{Word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const LESSONS = "src/content/lessons/";
const Q = W("qi2guai4");

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
const NEVER_SEEN = `${W("yi3")}-${W("qian2")}-${W("mei2")}-${W("kan4")}-${W("guo4")}-${W("de")}`;

export default [
  // -- approved proposals ------------------------------------------------------
  ...["回答", "希望", "星期", "普通话", "音乐", "高中", "上学", "上班", "上面", "下面", "商店", "店", "好像", "干净", "快乐"].map((zh) => approved(zh)),
  {
    op: "sense", id: "chang2", key: "often", hanzi: "常", eng: "often", rus: "часто",
    why: {
      eng: `Written 常, ${W("chang2")} means often, in ${W("chang2")}-${W("chang2")}: what goes on long and long again. On its own it is long.`,
      rus: `Записанное как 常, ${W("chang2")} значит «часто» в ${W("chang2")}-${W("chang2")}: то, что длится и повторяется. Само по себе — «длинный».`,
    },
    compounds: ["chang2 chang2"],
  },
  approved("常"),

  // -- the author's forms --------------------------------------------------------
  form("清楚", [`${W("hen3")}-${W("bu4")}-${W("nan2")} ${W("ming2")}-${W("bai2")}`], ["很不难明白"], { literal: "very easy to understand" }),
  form("特别", [`${W("hen3")} ${W("bu4")} ${W("yi1")}-${W("yang4")}, ${W("ye3")} ${W("hen3")} ${W("hao3")}`], ["很不一样，也很好"], { literal: "very different, and good too" }),
  form("考试", [`${W("kan4")}-${W("ni3")}-${W("xue2")}-${W("de")}-${W("duo1")}-${W("hao3")}-${W("de")} ${W("dong1")}-${L("xi1")}`], ["看你学得多好的东西"], { literal: "a thing that sees how well you learned" }),
  form("忘", [`${W("xian4")}-${W("zai4")} ${W("bu4")} ${W("zhi1dao4")} ${W("le")}`], ["现在不知道了"], { literal: "now don't know anymore" }),
  form("忘记", [`${W("xian4")}-${W("zai4")} ${W("bu4")} ${W("zhi1dao4")} ${W("le")}`], ["现在不知道了"], { literal: "now don't know anymore" }),

  // -- qíguài leaves -------------------------------------------------------------
  form("奇怪",
    [NEVER_SEEN, `${W("nan2")}-${W("ming2")}-${W("bai2")}-${W("de")}`, `${W("nan2")}-${W("kan4")}-${W("de")}`, `${W("nan2")}-${W("ting1")}-${W("de")}`],
    ["以前没看过的", "难明白的", "难看的", "难听的"],
    { literal: "never seen before / hard to understand / ugly / unpleasant to hear", fit: "plain" }),
  form("正常", [`${W("he2")} ${W("da4")}-${W("jia1")} ${W("yi1")}-${W("yang4")}`], ["和大家一样"], { literal: "like everyone", fit: "plain", proposed: true }),

  // L12 how-much: adjectives taught by then
  ...sentence(`${LESSONS}how-much/very.ts`,
    { pinyin: `${W("hen3")} ${Q}-${W("de")} ${W("dong4")}`, hanzi: "我看过很奇怪的动物。", en: "I've seen a very strange animal.", ru: "Я видел очень странное животное." },
    { pinyin: `${W("hen3")} ${W("da4")}-${W("de")} ${W("dong4")}`, hanzi: "我看过很大的动物。", en: "I've seen a very big animal.", ru: "Я видел очень большое животное." }),
  ...sentence(`${LESSONS}how-much/not.ts`,
    { pinyin: `${W("bu4")} ${W("hen3")} ${Q}.`, hanzi: "这个不很奇怪。", en: "This isn't very strange.", ru: "Это не очень странно." },
    { pinyin: `${W("bu4")} ${W("hen3")} ${W("tian2")}.`, hanzi: "这个不很甜。", en: "This isn't very sweet.", ru: "Это не очень сладкое." }),
  ...sentence(`${LESSONS}how-much/really.ts`,
    { pinyin: `${Wc("ta1")} ${W("zhen1")} ${Q}.`, hanzi: "她真奇怪。", en: "She's really strange.", ru: "Она правда странная." },
    { pinyin: `${Wc("ta1")} ${W("zhen1")} ${W("hao3")}.`, hanzi: "她真好。", en: "She's really nice.", ru: "Она правда хорошая." }),
  ...sentence(`${LESSONS}how-much/really.ts`,
    { pinyin: `${W("ren2")} ${W("zhen1")} ${Q}.`, hanzi: "那个人真奇怪。", en: "That person is really strange.", ru: "Тот человек правда странный." },
    { pinyin: `${W("ren2")} ${W("zhen1")} ${W("kuai4")}.`, hanzi: "那个人真快。", en: "That person is really fast.", ru: "Тот человек правда быстрый." }),
  { op: "uncard", id: "qi2guai4" },

  // L16, L21, L22: the descriptions
  ...sentence(`${LESSONS}direction-and-result/seems.ts`,
    { pinyin: `${W("hen3")} ${Q}.`, hanzi: "听起来很奇怪。", en: "That sounds strange.", ru: "Звучит странно." },
    { pinyin: `${W("hen3")} ${W("bu4")} ${W("yi1")}-${W("yang4")}.`, hanzi: "听起来很不一样。", en: "That sounds very different.", ru: "Звучит совсем по-другому." }),
  ...sentence(`${LESSONS}linking-sentences/but.ts`,
    { pinyin: `${W("hen3")} ${Q}, ${W("dan4")}`, hanzi: "这个方法很奇怪，但是很好。", en: "This way is strange, but it's good.", ru: "Этот способ странный, но хороший." },
    { pinyin: `${W("hen3")} ${W("nan2")} ${W("ming2")}-${W("bai2")}, ${W("dan4")}`, hanzi: "这个方法很难明白，但是很好。", en: "This way is hard to understand, but it's good.", ru: "Этот способ трудно понять, но он хороший." }),
  { op: "text", file: `${LESSONS}greetings-and-feelings/hear.ts`, from: `${Q}-${W("de")} ${W("sheng1yin1")}`, to: `${NEVER_SEEN.replace(W("kan4"), W("ting1"))} ${W("sheng1yin1")}`, all: true },
  { op: "text", file: `${LESSONS}greetings-and-feelings/hear.ts`, from: "(I hear a strange sound.)", to: "(I hear a sound I've never heard before.)" },
  { op: "text", file: `${LESSONS}greetings-and-feelings/hear.ts`, from: "(Я слышу странный звук.)", to: "(Я слышу звук, которого раньше не слышал.)" },
  { op: "text", file: `${LESSONS}greetings-and-feelings/hear.ts`, from: "我听到奇怪的声音。", to: "我听到以前没听过的声音。" },
  { op: "text", file: `${LESSONS}greetings-and-feelings/hear.ts`, from: `en: "I hear a strange sound.",`, to: `en: "I hear a sound I've never heard before.",` },
  { op: "text", file: `${LESSONS}greetings-and-feelings/hear.ts`, from: `ru: "Я слышу странный звук.",`, to: `ru: "Я слышу звук, которого раньше не слышал.",` },
  // the generated grammar overview (rebuilt on --write) carries the info line too
  { op: "text", file: "src/content/appendix-grammar.ts", from: `${Q}-${W("de")} ${W("sheng1yin1")}`, to: `${NEVER_SEEN.replace(W("kan4"), W("ting1"))} ${W("sheng1yin1")}`, all: true },

  // the stories: the ugly duckling is ugly; the beans were never seen before
  { op: "text", file: "src/content/appendix-stories.ts", from: `${W("zhen1")} ${Q}!`, to: `${W("zhen1")} ${W("nan2")}-${W("kan4")}!` },
  { op: "text", file: "src/content/appendix-stories.ts", from: "你真奇怪！你和我们不一样！", to: "你真难看！你和我们不一样！" },
  { op: "text", file: "src/content/appendix-stories.ts", from: `\\"You're so strange! You're not like us!\\"`, to: `\\"You're so ugly! You're not like us!\\"` },
  { op: "text", file: "src/content/appendix-stories.ts", from: `${W("shi4")} ${Q}-${W("de")} ${W("fei1")}`, to: `${W("shi4")} ${W("nan2")}-${W("kan4")}-${W("de")} ${W("fei1")}` },
  { op: "text", file: "src/content/appendix-stories.ts", from: "他不是奇怪的飞的动物", to: "他不是难看的飞的动物" },
  { op: "text", file: "src/content/appendix-stories.ts", from: "He wasn't a strange duckling.", to: "He wasn't an ugly duckling." },
  { op: "text", file: "src/content/appendix-stories.ts", from: `${W("yi1")}-ge ${Q}-${W("de")} ${W("lao3")}`, to: `${W("yi1")}-ge ${NEVER_SEEN} ${W("lao3")}` },
  { op: "text", file: "src/content/appendix-stories.ts", from: `${W("hen3")} ${Q}-${W("de")} ${W("xiao3")}`, to: `${NEVER_SEEN} ${W("xiao3")}` },
  { op: "text", file: "src/content/appendix-stories.ts", from: "在路上，一个奇怪的老男人说：给我你的动物，我给你五个很奇怪的小圆东西。", to: "在路上，一个以前没看过的老男人说：给我你的动物，我给你五个以前没看过的小圆东西。" },
  { op: "text", file: "src/content/appendix-stories.ts", from: `On the road, a strange old man said`, to: `On the road, an old man he'd never seen said` },
  { op: "text", file: "src/content/appendix-stories.ts", from: `(Literally: \\"five very strange little round things.\\")`, to: `(Literally: \\"five little round things never seen before.\\")` },

  // the Word Builder's two-syllable example
  { op: "text", file: "src/lib/word-builder.test.js", from: `way: word(node("qi2guai4")) }), py)).toBe("qíguài-de shuō")`, to: `way: word(node("gan1jing4")) }), py)).toBe("gānjìng-de shuō")` },
  { op: "text", file: "src/lib/word-builder.js", from: "(kuai4 = 1, qi2guai4 = 2)", to: "(kuai4 = 1, gan1jing4 = 2)" },

  { op: "remove", id: "qi2guai4" },
  { op: "compounds" },
  { op: "reviewed", from: 301, to: 400 },
];
