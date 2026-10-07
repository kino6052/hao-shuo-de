// R2: composite review, batch 2 (ranks 101-200), as the author decided it at
// /__review/?batch=2 (review/decisions/batch-2.json): 89 approved, 11 edited.
//   Approved proposals: 被 X ràng Y (the spoken passive), 所以 X, jiù Y /
//   yīnwèi zhè-ge, 电脑 suàn-de jī, 子 zi, 当然 bù yòng shuō, 电
//   ràng-jī-qì-dòng-de lì, 简单 bù nán.
//   The author's own forms:
//   - 新 is xīn on its own: xīn's sense 新 (new) may now stand alone, where
//     it describes a thing (心, heart, is the thing itself). Such a use names
//     its sense: {{word:xin1#new}}.
//   - wǔ loses its sense 午 (noon): too specific for the core. 上午, 下午,
//     中午 keep only their descriptions.
//   - guǒ 果 (fruit) joins, for shuǐ-guǒ; the fruit sentences that said
//     zhíwù shēng-de dōng-xi now say shuǐ-guǒ.
//   - 纸 is xiě-de miànr (the surface you write on); 表面 (surface) is miànr.
//   - 朋友 hǎo-guānxi-de rén; 电影 zài-kàn-de-jī-kàn-de dōng-xi; 电话 huà-jī;
//     问题 wèn-tí and 手机 shǒu-jī with no description after them.
// Run: npm run refactor -- refactors/R2.ts [--write]

const W = (id) => `{{word:${id}}}`;
const Wc = (id) => `{{Word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const FRUIT = `${W("zhi2wu4")} ${W("sheng1")}-${W("de")} ${W("dong1")}-${L("xi1")}`;
const EGG = `${W("fei1")}-${W("de")} ${W("dong4")}-${W("wu4")} ${W("sheng1")}-${W("de")} ${W("dong1")}-${L("xi1")}`;
const SHUIGUO = `${W("shui3")}-${W("guo3")}`;

// the fruit description -> shuǐ-guǒ in a lesson file (pinyin and hanzi)
const fruit = (file, capital) => [
  ...(capital ? [{ op: "text", file, from: `${Wc("zhi2wu4")} ${W("sheng1")}-${W("de")} ${W("dong1")}-${L("xi1")}`, to: `${Wc("shui3")}-${W("guo3")}`, all: true }] : []),
  ...(capital !== "only" ? [{ op: "text", file, from: FRUIT, to: SHUIGUO, all: true }] : []),
  { op: "text", file, from: "植物生的东西", to: "水果", all: true },
];
const LESSONS = "src/content/lessons/";

export default [
  // -- xīn: 新 on its own --------------------------------------------------
  {
    op: "sense", id: "xin1", key: "new", hanzi: "新", eng: "new", rus: "новый",
    why: {
      eng: `Written 新, ${W("xin1")} means new. As a thing it is the heart (${W("wo3")}-${W("de")} ${W("xin1")}); describing a thing it is new: ${W("xin1#new")}-${W("de")} ${W("shu1")}, a new book, and ${W("xin1")}-${W("nian2")}, the New Year.`,
      rus: `Записанное как 新, ${W("xin1")} значит «новый». Как вещь это сердце (${W("wo3")}-${W("de")} ${W("xin1")}); как описание вещи — «новый»: ${W("xin1#new")}-${W("de")} ${W("shu1")} — новая книга, ${W("xin1")}-${W("nian2")} — Новый год.`,
    },
    compounds: ["xin1 nian2"],
    alone: true,
  },
  {
    op: "text", file: `${LESSONS}numbers/days-years.ts`,
    from: `en: "new (in ${W("xin1")}-${W("nian2")}: New Year)",`,
    to: `en: "new: ${W("xin1")}-${W("nian2")}, New Year; also on its own, describing a thing",`,
  },
  {
    op: "text", file: `${LESSONS}numbers/days-years.ts`,
    from: `ru: "новый (в ${W("xin1")}-${W("nian2")} — Новый год)",`,
    to: `ru: "новый: ${W("xin1")}-${W("nian2")} — Новый год; и сам по себе, как описание вещи",`,
  },
  {
    op: "composite", zh: "新",
    set: {
      hsd: [W("xin1#new")], tts: ["新"], literal: undefined, fit: "word",
      note: "xīn on its own: the heart as a thing, new when it describes one.",
    },
  },

  // -- wǔ: no 午 -------------------------------------------------------------
  {
    op: "composite", zh: "上午",
    set: { hsd: [`${W("ri4")} ${W("qi3")}-${W("lai2")}-${W("de")} ${W("shi2")}-${W("jian1")}`], tts: ["日起来的时间"], fit: "plain" },
  },
  {
    op: "composite", zh: "下午",
    set: {
      hsd: [`${W("shi2")}-${W("er4")}-${W("dian3")} ${W("hou4")}-${W("de")} ${W("ri4")}-${W("de")} ${W("shi2")}-${W("jian1")}`],
      tts: ["十二点后的日的时间"], fit: "plain",
    },
  },
  {
    op: "composite", zh: "中午",
    set: { hsd: [`${W("shi2")}-${W("er4")}-${W("dian3")}`], tts: ["十二点"], fit: "plain" },
  },
  { op: "edit", id: "wu3", set: { senses: undefined } },

  // -- guǒ: fruit ------------------------------------------------------------
  {
    op: "add", id: "guo3", hanzi: "果", category: "food-drink",
    pos: { eng: "noun", rus: "существительное", zh: "名词" },
    definition: {
      eng: `fruit, what a plant bears; ${SHUIGUO}, fruit to eat`,
      rus: `плод; ${SHUIGUO} — фрукты`,
      zh: "果",
    },
    necessity: {
      index: 3,
      eng: `Fruit, which everyone eats: ${SHUIGUO}. It could be described, but Mandarin's short name is easier.`,
      rus: `Фрукты, которые едят все: ${SHUIGUO}. Их можно описать, но короткое китайское название проще.`,
    },
  },
  { op: "card", id: "guo3", to: "roles-of-a-word/name", en: `fruit; ${SHUIGUO}: fruit to eat`, ru: `плод; ${SHUIGUO} — фрукты` },
  {
    op: "text", file: `${LESSONS}roles-of-a-word/name.ts`,
    from: `${W("sheng1")} means give birth: ${FRUIT} (what a plant gives birth to) is fruit, and ${EGG} (what a flying animal gives birth to) is an egg. Some names are just two words: ${W("shou3")}-${W("ji1")} (hand machine) is a phone, and ${W("fei1")}-${W("ji1")} (flying machine) is a plane.`,
    to: `${W("sheng1")} means give birth: ${EGG} (what a flying animal gives birth to) is an egg. Some names are just two words: ${W("shou3")}-${W("ji1")} (hand machine) is a phone, ${W("fei1")}-${W("ji1")} (flying machine) is a plane, and ${SHUIGUO} (water fruit) is fruit.`,
  },
  {
    op: "text", file: `${LESSONS}roles-of-a-word/name.ts`,
    from: `${W("sheng1")} значит «рожать»: ${FRUIT} (то, что рождает растение) — фрукт, а ${EGG} (то, что рождает летающее животное) — яйцо. Некоторые названия — просто два слова: ${W("shou3")}-${W("ji1")} («ручная машина») — телефон, а ${W("fei1")}-${W("ji1")} («летающая машина») — самолёт.`,
    to: `${W("sheng1")} значит «рожать»: ${EGG} (то, что рождает летающее животное) — яйцо. Некоторые названия — просто два слова: ${W("shou3")}-${W("ji1")} («ручная машина») — телефон, ${W("fei1")}-${W("ji1")} («летающая машина») — самолёт, а ${SHUIGUO} («водяной плод») — фрукты.`,
  },
  { op: "text", file: `${LESSONS}roles-of-a-word/name.ts`, from: `, ${FRUIT} (fruit)"`, to: `, ${EGG} (an egg)"` },
  { op: "text", file: `${LESSONS}roles-of-a-word/name.ts`, from: `, ${FRUIT} (фрукт)"`, to: `, ${EGG} (яйцо)"` },
  ...fruit(`${LESSONS}roles-of-a-word/name.ts`, true),
  ...fruit(`${LESSONS}roles-of-a-word/thing.ts`),
  ...fruit(`${LESSONS}inside-a-sentence/and-or.ts`),
  ...fruit(`${LESSONS}linking-sentences/but.ts`),
  { op: "text", file: `${LESSONS}linking-sentences/but.ts`, from: `en: "This plant's fruit is yellow, but it isn't sweet.",`, to: `en: "This fruit is yellow, but it isn't sweet.",` },
  { op: "text", file: `${LESSONS}linking-sentences/but.ts`, from: `ru: "Плоды этого растения жёлтые, но не сладкие.",`, to: `ru: "Этот фрукт жёлтый, но не сладкий.",` },
  ...fruit(`${LESSONS}doubling-words/describe.ts`, "only"),
  {
    op: "composite", zh: "水果",
    set: { hsd: [SHUIGUO], tts: ["水果"], literal: "water fruit", fit: "natural", transparent: true },
  },

  // -- surface: miànr --------------------------------------------------------
  {
    op: "composite", zh: "纸",
    set: { hsd: [`${W("xie3")}-${W("de")} ${W("mian4")}r`], tts: ["写的面儿"], literal: "the surface you write on", fit: "plain" },
  },
  {
    op: "composite", zh: "表面",
    set: { hsd: [`${W("mian4")}r`, `${W("wai4")}-${W("mian4")}`], tts: ["面儿", "外面"], literal: "surface / the outside", fit: "natural" },
  },

  // -- the approved proposals ------------------------------------------------
  {
    op: "composite", zh: "被",
    set: {
      hsd: [`X ${W("rang4")} Y + verb`], tts: ["X让Y…"], literal: "X lets Y do it", fit: "natural",
      note: "Spoken Mandarin uses 让 for the passive too: wǒ-de bāo ràng tā ná-zǒu le, my bag got taken by him.",
    },
  },
  {
    op: "composite", zh: "所以",
    set: {
      hsd: [`X, ${W("jiu4")} Y`, `${W("yin1wei4")} ${W("zhe4")}-${L("ge4")}`], tts: ["X，就Y", "因为这个"],
      literal: "X, then Y / because of this", fit: "natural",
      note: "Mandarin often says so with 就 alone: tā lěng le, jiù huí jiā le.",
    },
  },
  {
    op: "composite", zh: "电脑",
    set: { hsd: [`${W("suan4")}-${W("de")} ${W("ji1")}`], tts: ["算的机"], literal: "the calculating machine", fit: "plain" },
  },
  {
    op: "composite", zh: "子",
    set: { hsd: [W("zi")], tts: ["子"], literal: undefined, fit: "word", note: undefined },
  },
  {
    op: "composite", zh: "当然",
    set: { hsd: [`${W("bu4")} ${W("yong4")} ${W("shuo1")}`], tts: ["不用说"], literal: "no need to say", fit: "natural" },
  },
  {
    op: "composite", zh: "电",
    set: {
      hsd: [`${W("rang4")}-${W("ji1")}-${W("qi4")}-${W("dong4")}-${W("de")} ${W("li4")}`], tts: ["让机器动的力"],
      literal: "the force that makes machines move",
    },
  },
  {
    op: "composite", zh: "简单",
    set: {
      hsd: [`${W("bu4")} ${W("nan2")}`, `${W("bu4")}-${L("fen1")}-${W("hen3")}-${W("shao3")}-${W("de")}`], tts: ["不难", "部分很少的"],
      literal: "not hard / with few parts", fit: "natural",
      note: "bù nán for easy; the parts description for not complicated.",
    },
  },

  // -- the author's other forms ----------------------------------------------
  {
    op: "composite", zh: "问题",
    set: { hsd: [`${W("wen4")}-${W("ti2")}`], tts: ["问题"], literal: undefined, transparent: true },
  },
  {
    op: "composite", zh: "手机",
    set: { hsd: [`${W("shou3")}-${W("ji1")}`], tts: ["手机"], literal: "hand machine", transparent: true },
  },
  {
    op: "composite", zh: "电话",
    set: { hsd: [`${W("hua4")}-${W("ji1")}`], tts: ["话机"], literal: "talk machine", fit: "natural", transparent: true },
  },
  {
    op: "composite", zh: "朋友",
    set: { hsd: [`${W("hao3")}-${W("guan1xi")}-${W("de")} ${W("ren2")}`], tts: ["好关系的人"], literal: "a person you have good relations with", fit: "plain" },
  },
  {
    op: "composite", zh: "电影",
    set: {
      hsd: [`${W("zai4")}-${W("kan4")}-${W("de")}-${W("ji1")}-${W("kan4")}-${W("de")} ${W("dong1")}-${L("xi1")}`], tts: ["在看的机看的东西"],
      literal: "what you watch on the watching machine", fit: "plain",
    },
  },

  { op: "compounds" },
  { op: "reviewed", from: 101, to: 200 },
];
