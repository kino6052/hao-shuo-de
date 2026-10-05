// D63 (with the author): back to descriptions where they say it well.
//   - zuó leaves: yesterday is qián-yī-tiān (前一天, the day before).
//   - bǎi leaves, and líng 零 (zero) joins: big numbers are read digit by
//     digit, the way Mandarin reads years and phone numbers: 200 is
//     èr-líng-líng, a hundred yī-líng-líng, 2026 èr-líng-èr-liù.
//   - ér leaves: a son is nán-hái-zi, a daughter nǚ-hái-zi (a boy, a girl).
//   - jiāo leaves: to teach is to help learn, bāng + person + xué + verb
//     (everyday-patterns/teach is rewritten by hand).
//   - qún leaves: a group is hěn-duō rén; the composites that used it get
//     new descriptions (inside-a-sentence/group is rewritten by hand).
// Run: npm run refactor -- refactors/D63.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const T = "src/content/lessons/numbers/teens.ts";
const thing = `${W("dong1")}-${L("xi1")}`;
const set = (zh, hsd, tts, literal, fit = "plain") => ({ op: "composite", zh, set: { hsd, tts, fit, literal, proposed: true } });

export default [
  // -- zero, and digits for big numbers -------------------------------------------------
  {
    op: "add", id: "ling2", hanzi: "零", category: "numbers-ordinals",
    pos: { eng: "number", rus: "числительное", zh: "数词" },
    definition: {
      eng: `zero; big numbers are read digit by digit: ${W("er4")}-${W("ling2")}-${W("ling2")}, 200; ${W("er4")}-${W("ling2")}-${W("er4")}-${W("liu4")} ${W("nian2")}, the year 2026`,
      rus: `ноль; большие числа читают по цифрам: ${W("er4")}-${W("ling2")}-${W("ling2")} — 200; ${W("er4")}-${W("ling2")}-${W("er4")}-${W("liu4")} ${W("nian2")} — 2026 год`,
      zh: "零",
    },
    necessity: {
      index: 4,
      eng: `Zero, and with it every number past ninety-nine, read digit by digit.`,
      rus: `Ноль, а с ним и все числа больше девяноста девяти, прочитанные по цифрам.`,
    },
  },
  { op: "card", id: "ling2", to: "numbers/teens", en: "zero", ru: "ноль" },
  { op: "text", file: T, from: `      "After ninety-nine comes {{word:yi1}}-{{word:bai3}}, a hundred.",`,
    to: `      "Past ninety-nine, say the digits one by one, with {{word:ling2}} for zero: {{word:yi1}}-{{word:ling2}}-{{word:ling2}} is 100, {{word:er4}}-{{word:ling2}}-{{word:ling2}} is 200. Years are said the same way.",` },
  { op: "text", file: T, from: `      "После девяноста девяти идёт {{word:yi1}}-{{word:bai3}} — сто.",`,
    to: `      "После девяноста девяти называйте цифры по одной, а ноль — {{word:ling2}}: {{word:yi1}}-{{word:ling2}}-{{word:ling2}} — это 100, {{word:er4}}-{{word:ling2}}-{{word:ling2}} — 200. Годы называют так же.",` },
  { op: "text", file: T, from: `      pinyin: "{{Word:yi1}}-{{word:bai3}}.",
      hanzi: "一百。",
      en: "A hundred.",
      ru: "Сто.",`, to: `      pinyin: "{{Word:er4}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "二零零。",
      en: "Two hundred.",
      ru: "Двести.",` },
  { op: "text", file: T, from: `      pinyin: "{{Word:san1}}-{{word:bai3}}-ge {{word:ren2}}.",
      hanzi: "三百个人。",
      en: "Three hundred people.",
      ru: "Триста человек.",`, to: `      pinyin: "{{Word:er4}}-{{word:ling2}}-{{word:er4}}-{{word:liu4}} {{word:nian2}}.",
      hanzi: "二零二六年。",
      en: "The year 2026.",
      ru: "2026 год.",` },
  { op: "text", file: T, from: `      en: "Two hundred.",
      ru: "Двести.",
      answer: "{{Word:liang3}}-{{word:bai3}}.",
      hanzi: "两百。",`, to: `      en: "Three hundred (digit by digit).",
      ru: "Триста (по цифрам).",
      answer: "{{Word:san1}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "三零零。",` },
  { op: "replace", id: "bai3", with: `${W("yi1")}-${W("ling2")}-${W("ling2")}`, hanzi: { "百": "一零零" } },
  set("百", [`${W("yi1")}-${W("ling2")}-${W("ling2")}`, `${W("shi2")}-ge ${W("shi2")}`], ["一零零", "十个十"], "one-zero-zero / ten tens"),
  set("千", [`${W("yi1")}-${W("ling2")}-${W("ling2")}-${W("ling2")}`, `${W("shi2")}-ge ${W("shi2")}-ge ${W("shi2")}`], ["一零零零", "十个十个十"], "one-zero-zero-zero / ten tens of tens"),
  set("万", [`${W("yi1")}-${W("ling2")}-${W("ling2")}-${W("ling2")}-${W("ling2")}`], ["一零零零零"], "one-zero-zero-zero-zero"),
  set("零", [W("ling2")], ["零"], undefined, "word"),

  // -- yesterday: the day before ----------------------------------------------------------
  { op: "replace", id: "zuo2", with: `${W("qian2")}-${W("yi1")}`, hanzi: { "昨": "前一" } },
  set("昨天", [`${W("qian2")}-${W("yi1")}-${W("tian1")}`, `${W("qian2")} ${W("yi1")}-ge ${W("ri4")}`], ["前一天", "前一个日"], "the day before / the sun before"),

  // -- son and daughter: a boy, a girl ---------------------------------------------------------
  { op: "senseCompounds", id: "nan2", key: "male", add: ["nan2 hai2 zi"] },
  { op: "composite", zh: "男孩子", create: { rank: 5421, phase: 4, py: "nánháizi", en: "boy; son", ru: "мальчик; сын", pos: "noun" }, set: { hsd: [`${W("nan2")}-${W("hai2")}-${L("zi")}`], tts: ["男孩子"], fit: "natural", proposed: true } },
  { op: "composite", zh: "女孩子", create: { rank: 5422, phase: 4, py: "nǚháizi", en: "girl; daughter", ru: "девочка; дочь", pos: "noun" }, set: { hsd: [`${W("nv3")}-${W("hai2")}-${L("zi")}`], tts: ["女孩子"], fit: "natural", proposed: true } },
  { op: "refs", label: "ér-zi -> nán-hái-zi", pattern: "\\{\\{(w|W)ord:er2\\}\\}-\\{\\{light:zi\\}\\}", to: "{{$1ord:nan2}}-{{word:hai2}}-{{light:zi}}", hanzi: ["儿子", "男孩子"] },
  { op: "refs", label: "nǚ-ér -> nǚ-hái-zi", pattern: "\\{\\{(w|W)ord:nv3\\}\\}-\\{\\{word:er2\\}\\}", to: "{{$1ord:nv3}}-{{word:hai2}}-{{light:zi}}", hanzi: ["女儿", "女孩子"] },
  set("儿子", [`${W("nan2")}-${W("hai2")}-${L("zi")}`], ["男孩子"], "boy (said of your son)"),
  set("女儿", [`${W("nv3")}-${W("hai2")}-${L("zi")}`], ["女孩子"], "girl (said of your daughter)"),
  { op: "remove", id: "er2" },

  // -- teach: help learn ----------------------------------------------------------------------
  set("教", [`${W("bang1")} X ${W("xue2")}`], ["帮X学"], "help X learn"),
  set("教室", [`${W("xue2")}-${W("de")} ${W("fang2")}-${W("jian1")}`], ["学的房间"], "the learning room"),
  set("教师", [`${W("bang1")}-${W("ren2")}-${W("xue2")}-${W("de")} ${W("ren2")}`], ["帮人学的人"], "the one who helps people learn"),
  set("老师", [`${W("bang1")}-${W("ren2")}-${W("xue2")}-${W("de")} ${W("ren2")}`], ["帮人学的人"], "the one who helps people learn"),
  set("教育", [`${W("bang1")} ${W("ren2")} ${W("xue2")}`], ["帮人学"], "helping people learn"),
  set("指导", [`${W("bang1")} X ${W("zuo4")}`], ["帮X做"], "help X do it"),
  { op: "remove", id: "jiao1" },

  // -- group: many people ----------------------------------------------------------------------
  set("群", [`${W("hen3")}-${W("duo1")} ${W("ren2")}`], ["很多人"], "many people"),
  set("人群", [`${W("hen3")}-${W("duo1")} ${W("ren2")}`], ["很多人"], "many people"),
  set("组", [`${W("yi1")}-${W("qi3")}-${W("de")} ${W("ren2")}`], ["一起的人"], "the people together"),
  set("组织", [`${W("yi1")}-${W("qi3")}-${W("zuo4")}-${W("de")} ${W("ren2")}`, `${W("ba3")} ${W("ren2")} ${W("fang4")} ${W("zai4")} ${W("yi1")}-${W("qi3")}`], ["一起做的人", "把人放在一起"], "the people who do it together / put people together"),
  set("班", [`${W("yi1")}-${W("qi3")}-${W("xue2")}-${W("de")} ${W("ren2")}`], ["一起学的人"], "the people who learn together"),
  set("团队", [`${W("yi1")}-${W("qi3")}-${W("zuo4")}-${W("de")} ${W("ren2")}`], ["一起做的人"], "the people who do it together"),
  set("部门", [`${W("yi1")}-${W("qi3")}-${W("gong1")}-${W("zuo4")}-${W("de")} ${W("ren2")}`], ["一起工作的人"], "the people who work together"),
  set("公司", [`${W("yi1")}-${W("qi3")}-${W("gong1")}-${W("zuo4")}-${W("de")} ${W("di4")}-${L("fang1")}`], ["一起工作的地方"], "where people work together"),
  set("员工", [`${W("gong1")}-${W("zuo4")}-${W("de")} ${W("ren2")}`], ["工作的人"], "the working person"),
  set("经理", [`${W("gong1")}-${W("zuo4")}-${W("de")} ${W("tou2")}`], ["工作的头"], "the head of the work"),
  set("老板", [`${W("gong1")}-${W("zuo4")}-${W("de")} ${W("tou2")}`], ["工作的头"], "the head of the work"),
  set("主席", [`${W("hen3")}-${W("duo1")}-${W("ren2")}-${W("li3")} ${W("zui4")} ${W("da4")}-${W("de")} ${W("ren2")}`], ["很多人里最大的人"], "the biggest among many people"),
  set("成员", [`${W("hen3")}-${W("duo1")}-${W("ren2")}-${W("li3")}-${W("de")} ${W("yi1")}-ge`], ["很多人里的一个"], "one of many people"),
  set("代表", [`${W("bang1")} ${W("hen3")}-${W("duo1")} ${W("ren2")} ${W("shuo1")}-${W("de")} ${W("ren2")}`], ["帮很多人说的人"], "the one who speaks for many people"),
  set("加入", [`${W("jin4")}-${W("dao4")} X-${W("li3")}`], ["进到X里"], "go into X"),
  set("句子", [`${W("fang4")} ${W("zai4")} ${W("yi1")}-${W("qi3")}-${W("de")} ${W("ci2")}`], ["放在一起的词"], "words put together"),
  set("品牌", [`${thing}-${W("de")} ${W("ming2")}-${L("zi4")}`], ["东西的名字"], "the name of a thing"),
  set("人民", [`${W("guo2")}-${W("de")} ${W("ren2")}`], ["国的人"], "the country's people"),
  set("社会", [`${W("zai4")}-${W("yi1")}-${W("qi3")}-${W("de")} ${W("hen3")}-${W("duo1")} ${W("ren2")}`], ["在一起的很多人"], "many people together"),
  set("文化", [`${W("yi1")}-${W("xie1")} ${W("ren2")}-${W("de")} ${W("fang1")}-${W("fa3")}`], ["一些人的方法"], "a people's way"),
  { op: "remove", id: "qun2" },
];
