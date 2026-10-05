// D60c (BOOK_PLAN.md D60): catch-all words. A toned sound is one word;
// its other hanzi are senses, used only inside the compounds listed here
// (src/lib/senses.js). The four words below split into their sounds:
//   shíjiān -> shí (时) + jiān     xiànzài -> xiàn (现) + zài
//   wèidào  -> wèi (味) + dào (道) juéde   -> jué (觉, new) + {{light:de2}}
// and existing words gain senses that open real compounds (今天, 上午, 爱好
// as ài-hào, 比较, 鸡蛋 ...). Only compounds that are composites are listed;
// more come with phase 4. Run: npm run refactor -- refactors/D60c.ts [--write]

const verb = { eng: "verb", rus: "глагол", zh: "动词" };
const w = (pos, eng, rus, zh, index, needEng, needRus) => ({ pos, definition: { eng, rus, zh }, necessity: { index, eng: needEng, rus: needRus } });

// -> a sense op: what the hanzi means, why it's this word, and its compounds.
// `alone` is what the word means on its own.
const sense = (id, key, hanzi, eng, rus, alone, compounds) => {
  const list = compounds.map((c) => c.split(" ").map((p) => `{{word:${p}}}`).join("-"));
  return {
    op: "sense", id, key, hanzi, eng, rus, compounds,
    why: {
      eng: `Written ${hanzi}, {{word:${id}}} means ${eng} in ${list.join(", ")}; on its own it is ${alone.eng}.`,
      rus: `Записанное как ${hanzi}, {{word:${id}}} значит «${rus}» в ${list.join(", ")}; само по себе — «${alone.rus}».`,
    },
  };
};
const ten = { eng: "ten", rus: "десять" };
const line = { eng: "line", rus: "линия" };
const forWei = { eng: "for", rus: "для" };
const arrive = { eng: "arrive", rus: "прийти" };

export default [
  // -- shí: 时 (time), 食 (food) ---------------------------------------------------------
  sense("shi2", "time", "时", "time", "время", ten, ["shi2 jian1", "shi2 hou4", "xiao3 shi2", "you3 shi2"]),
  sense("shi2", "food", "食", "food", "еда", ten, ["shi2 wu4"]),
  sense("hou4", "season", "候", "time, season", "время, сезон", { eng: "after, behind", rus: "после, позади" }, ["shi2 hou4"]),
  {
    op: "split", id: "shi2jian1", into: ["shi2", "jian1"], senses: { shi2: "time" },
    cards: { shi2: { en: "time (in {{word:shi2}}-{{word:jian1}})", ru: "время (в {{word:shi2}}-{{word:jian1}})" } },
  },

  // -- xiàn: 现 (now, appear) --------------------------------------------------------------
  sense("xian4", "now", "现", "now, appear", "сейчас, появляться", line, ["xian4 zai4", "fa1 xian4", "chu1 xian4"]),
  {
    op: "split", id: "xian4zai4", into: ["xian4", "zai4"], senses: { xian4: "now" },
    cards: { xian4: { en: "now (in {{word:xian4}}-{{word:zai4}})", ru: "сейчас (в {{word:xian4}}-{{word:zai4}})" } },
  },

  // -- wèi: 味 (taste), 未 (not yet); dào: 道 (way); lǐ: 理 (reason) -------------------------------
  sense("wei4", "taste", "味", "taste", "вкус", forWei, ["wei4 dao4"]),
  sense("wei4", "notyet", "未", "not yet", "ещё не", forWei, ["wei4 lai2"]),
  sense("dao4", "way", "道", "way", "путь", arrive, ["wei4 dao4", "dao4 li3"]),
  sense("li3", "reason", "理", "reason", "смысл, порядок", { eng: "inside", rus: "внутри" }, ["dao4 li3"]),
  {
    op: "split", id: "wei4dao4", into: ["wei4", "dao4"], senses: { wei4: "taste", dao4: "way" },
    cards: {
      wei4: { en: "taste (in {{word:wei4}}-{{word:dao4}})", ru: "вкус (в {{word:wei4}}-{{word:dao4}})" },
      dao4: { en: "way (in {{word:wei4}}-{{word:dao4}}: taste)", ru: "путь (в {{word:wei4}}-{{word:dao4}} — вкус)" },
    },
  },

  // -- jué: 觉 (feel, new), 决 (decide) ---------------------------------------------------------
  {
    op: "split", id: "jue2de", into: ["jue2", "de2"], light: ["de2"],
    words: {
      jue2: w(verb, "to feel, sense: {{word:jue2}}-{{light:de2}}, to feel, think", "чувствовать: {{word:jue2}}-{{light:de2}} — чувствовать, считать", "觉", 4,
        "Feel: {{word:jue2}}-{{light:de2}} says what you feel or think.", "Чувствовать: {{word:jue2}}-{{light:de2}} говорит, что вы чувствуете или думаете."),
    },
    cards: { jue2: { en: "feel; {{word:jue2}}-{{light:de2}}: feel, think", ru: "чувствовать; {{word:jue2}}-{{light:de2}} — чувствовать, считать" } },
  },
  sense("jue2", "decide", "决", "decide", "решать", { eng: "feel", rus: "чувствовать" }, ["jue2 ding4"]),
  {
    op: "add", id: "ding4", hanzi: "定", category: "truth-value",
    ...w({ eng: "adjective/verb", rus: "прилагательное/глагол", zh: "形容词/动词" }, "fixed, settled; to settle: {{word:yi1}}-{{word:ding4}}, surely; {{word:jue2}}-{{word:ding4}}, to decide", "твёрдый, решённый; решить: {{word:yi1}}-{{word:ding4}} — обязательно; {{word:jue2}}-{{word:ding4}} — решить", "定", 3,
      "Settled: {{word:yi1}}-{{word:ding4}} (surely) and {{word:jue2}}-{{word:ding4}} (decide).", "Решённый: {{word:yi1}}-{{word:ding4}} (обязательно) и {{word:jue2}}-{{word:ding4}} (решить)."),
  },
  { op: "card", id: "ding4", to: "greetings-and-feelings/feel", en: "settled; {{word:yi1}}-{{word:ding4}}: surely", ru: "решённый; {{word:yi1}}-{{word:ding4}} — обязательно" },
  {
    op: "text", file: "src/content/lessons/greetings-and-feelings/feel.ts", from: "  examples: [\n",
    to: '  examples: [\n    {\n      pinyin: "{{Word:wo3}} {{word:yi1}}-{{word:ding4}} {{word:lai2}}.",\n      hanzi: "我一定来。",\n      en: "I\'ll surely come.",\n      ru: "Я обязательно приду.",\n    },\n',
  },

  // -- senses that open compounds already in the composite dictionary ------------------------------
  sense("ming2", "name", "名", "name", "имя", { eng: "bright", rus: "яркий" }, ["you3 ming2"]),
  sense("jin1", "today", "今", "this, now", "этот, нынешний", { eng: "gold, money", rus: "золото, деньги" }, ["jin1 tian1", "jin1 nian2"]),
  sense("gong1", "public", "公", "public", "общий", { eng: "work", rus: "работа" }, ["gong1 yuan2"]),
  sense("yuan2", "garden", "园", "garden, park", "сад, парк", { eng: "round", rus: "круглый" }, ["gong1 yuan2"]),
  sense("yuan2", "origin", "原", "origin", "исток", { eng: "round", rus: "круглый" }, ["yuan2 lai2"]),
  sense("qi4", "device", "器", "device", "прибор", { eng: "air", rus: "воздух" }, ["ji1 qi4"]),
  sense("qi4", "steam", "汽", "steam", "пар", { eng: "air", rus: "воздух" }, ["qi4 che1"]),
  sense("dong1", "winter", "冬", "winter", "зима", { eng: "east", rus: "восток" }, ["dong1 tian1"]),
  sense("wu3", "noon", "午", "noon", "полдень", { eng: "five", rus: "пять" }, ["shang4 wu3", "xia4 wu3", "zhong1 wu3"]),
  sense("shi4", "matter", "事", "matter, thing to do", "дело", { eng: "be", rus: "быть" }, ["mei2 shi4"]),
  sense("hao4", "fond", "好", "be fond of", "любить", { eng: "number", rus: "номер" }, ["ai4 hao4"]),
  sense("jiao4", "compare", "较", "compare", "сравнивать", { eng: "call", rus: "звать" }, ["bi3 jiao4"]),
  sense("ji1", "chicken", "鸡", "chicken", "курица", { eng: "machine", rus: "машина" }, ["ji1 dan4"]),
  sense("dan4", "egg", "蛋", "egg", "яйцо", { eng: "but", rus: "но" }, ["ji1 dan4"]),

  // ài-hǎo was Hao-shuo-de's guess; Mandarin says ài-hào (爱好).
  { op: "composite", zh: "爱好", set: { hsd: ["{{word:ai4}}-{{word:hao4}}", "{{word:ai4}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"], tts: ["爱好", "爱做的东西"], proposed: true } },

  // the Word Builder: xiànzài and juéde are gone
  { op: "text", file: "src/lib/word-builder.js", from: '"dian3", "zhong3", "xian4zai4",', to: '"dian3", "zhong3",' },
  { op: "text", file: "src/lib/word-builder.js", from: 'const ROLE_OVERRIDES = { jue2de: "verb" };', to: "const ROLE_OVERRIDES = {};" },
  { op: "text", file: "src/lib/word-builder.test.js", from: 'expect(roleOf(dict, "jue2de")).toBe("verb");', to: 'expect(roleOf(dict, "jue2")).toBe("verb");' },

  { op: "compounds" },
  // shíhou: hòu is light
  { op: "refs", label: "shí-hou", pattern: "\\{\\{(w|W)ord:shi2\\}\\}-\\{\\{word:hou4\\}\\}", to: "{{$1ord:shi2}}-{{light:hou4}}" },
];
