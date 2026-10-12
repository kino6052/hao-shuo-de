// R14: composite review, batch 14 (ranks 1301-1400), as the author decided it at
// /__review/?batch=14 (review/decisions/batch-14.json): 92 approved as they were, 8 edited.
//   The author's own forms:
//   - 复习 yòu xué / yòu kàn yī-xià; 姓名 jiào-de cí / jiào-shénme (shares 名's first form).
//   - 娱乐 wánr / wánr-de; 将来 huì lái-de shí-jiān / wèi-lái (like 未来).
//   - 工资 gōng-zuò-de jīn; 电器 "diàn"-zi-de gōng-jù.
//   - 翻译 bǎ yī-zhǒng shuō-de biàn bié-de shuō-de / bǎ yī-zhǒng huà biàn bié-de huà.
//   - 画面: "we need to add hua to the core vocab". huà 话 is already a word, so 画 joins it as
//     a sense (like wèi 为/未/味): "Written 画, huà means draw in huà-miàn". It is taught in
//     where-it-is/in-on-under, next to miàn. 画面 = huà-miàn (its old form stays second).
//   需 (1222, from batch 13) is still undecided and stays proposed.
// Run: npm run refactor -- refactors/R14.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const form = (zh, hsd, tts, set = {}) => ({ op: "composite", zh, set: { hsd, tts, ...set } });
const text = (file, from, to) => ({ op: "text", file, from, to });
const IN_ON_UNDER = "src/content/lessons/where-it-is/in-on-under.ts";

export default [
  // -- 画 (draw): a sense of huà 话, taught with miàn --------------------------------
  {
    op: "sense", id: "hua4", key: "draw", hanzi: "画", eng: "draw, picture", rus: "рисовать, картина",
    why: {
      eng: `Written 画, ${W("hua4")} means draw, picture in ${W("hua4")}-${W("mian4")} (picture, scene); on its own it is words.`,
      rus: `Записанное как 画, ${W("hua4")} значит «рисовать, картина» в ${W("hua4")}-${W("mian4")} (картинка, кадр); само по себе — «слова».`,
    },
    compounds: ["hua4 mian4"],
  },
  { op: "card", id: "hua4", sense: "draw", to: "where-it-is/in-on-under",
    en: `draw, picture (in ${W("hua4")}-${W("mian4")}: picture, scene)`,
    ru: `рисовать, картина (в ${W("hua4")}-${W("mian4")} — картинка, кадр)` },
  text(IN_ON_UNDER,
    `{{word:wang3}} is a net, and the internet too: {{word:zai4}} {{word:wang3}}-{{word:shang4}} is online.",`,
    `{{word:wang3}} is a net, and the internet too: {{word:zai4}} {{word:wang3}}-{{word:shang4}} is online.",
      "{{word:hua4}}-{{word:mian4}} is the side you look at, a picture or scene: here {{word:hua4}} is written 画, draw.",`),
  text(IN_ON_UNDER,
    `{{word:wang3}} — сеть, и интернет тоже: {{word:zai4}} {{word:wang3}}-{{word:shang4}} — в интернете.",`,
    `{{word:wang3}} — сеть, и интернет тоже: {{word:zai4}} {{word:wang3}}-{{word:shang4}} — в интернете.",
      "{{word:hua4}}-{{word:mian4}} — сторона, на которую смотрят: картинка, кадр. Здесь {{word:hua4}} пишется 画, «рисовать».",`),
  form("画面", [`${W("hua4")}-${W("mian4")}`, `${W("kan4")}-${W("dao4")}-${W("de")} ${W("dong1")}-${L("xi1")}`], ["画面", "看到的东西"], { literal: "the drawn side / what you see", fit: "natural" }),

  // -- the author's own forms ----------------------------------------------------------
  form("复习", [`${W("you4")} ${W("xue2")}`, `${W("you4")} ${W("kan4")} ${W("yi1")}-${W("xia4")}`], ["又学", "又看一下"], { literal: "learn again / look again for a moment" }),
  form("姓名", [`${W("jiao4")}-${W("de")} ${W("ci2")}`, `${W("jiao4")}-${W("shen2me")}`], ["叫的词", "叫什么"], { literal: "the word it is called / what it is called" }),
  form("娱乐", [W("wan2r"), `${W("wan2r")}-${W("de")}`], ["玩儿", "玩儿的"], { literal: "play / of play" }),
  form("将来", [`${W("hui4")} ${W("lai2")}-${W("de")} ${W("shi2")}-${W("jian1")}`, `${W("wei4")}-${W("lai2")}`], ["会来的时间", "未来"], { literal: "the time that will come / not yet come" }),
  form("工资", [`${W("gong1")}-${W("zuo4")}-${W("de")} ${W("jin1")}`], ["工作的金"], { literal: "the money of work" }),
  form("电器", [`"diàn"-${L("zi")}-${W("de")} ${W("gong1")}-${W("ju4")}`], ["电子的工具"], { literal: "an electronic tool" }),
  form(
    "翻译",
    [
      `${W("ba3")} ${W("yi1")}-${W("zhong3")} ${W("shuo1")}-${W("de")} ${W("bian4")} ${W("bie2")}-${W("de")} ${W("shuo1")}-${W("de")}`,
      `${W("ba3")} ${W("yi1")}-${W("zhong3")} ${W("hua4")} ${W("bian4")} ${W("bie2")}-${W("de")} ${W("hua4")}`,
    ],
    ["把一种说的变别的说的", "把一种话变别的话"],
    { literal: "turn one kind of speech into another" },
  ),

  // -- reviewed (the proposed marks go) ------------------------------------------------
  { op: "reviewed", from: 1301, to: 1400 },
];
