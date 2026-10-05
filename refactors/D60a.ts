// D60a (BOOK_PLAN.md D60): the plain splits. Each word below is written with
// words whose hanzi spell it (dōngxi 东西 = dōng 东 + xī 西), so every sentence
// keeps its meaning and only its pinyin form changes (dōng-xi). The parts
// take the old word's card; a part taught later moves its card earlier
// (dòng: L11 -> L2, dì: L10 -> L3). The old word's composite becomes the
// Mandarin compound (fit natural), and the Word Builder offers the nouns as
// units. Run: npm run refactor -- refactors/D60a.ts [--write]

const noun = { eng: "noun", rus: "существительное", zh: "名词" };
const adj = { eng: "adjective", rus: "прилагательное", zh: "形容词" };
const conj = { eng: "conjunction", rus: "союз", zh: "连词" };
const prep = { eng: "preposition/coverb", rus: "предлог/коверб", zh: "介词/动介词" };
const aux = { eng: "auxiliary", rus: "вспомогательный глагол", zh: "助动词" };
const pron = { eng: "pronoun", rus: "местоимение", zh: "代词" };
const suffix = { eng: "noun/suffix", rus: "существительное/суффикс", zh: "名词/后缀" };

// -> a new word's data: part of speech, definition, necessity.
const w = (pos, eng, rus, zh, index, needEng, needRus) => ({
  pos,
  definition: { eng, rus, zh },
  necessity: { index, eng: needEng, rus: needRus },
});

const colour = (id, hanzi, eng, rus) =>
  w(adj, `${eng}; with {{word:se4}}, the colour: {{word:${id}}}-{{word:se4}}`, `${rus}; с {{word:se4}} — цвет: {{word:${id}}}-{{word:se4}}`, hanzi, 3,
    `${eng[0].toUpperCase() + eng.slice(1)}: {{word:${id}}}-{{word:de}} on its own, {{word:${id}}}-{{word:se4}} as the colour.`,
    `${rus[0].toUpperCase() + rus.slice(1)}: {{word:${id}}}-{{word:de}} отдельно, {{word:${id}}}-{{word:se4}} — как цвет.`);

export default [
  // -- why: wèishénme -> wèi + shénme ----------------------------------------
  {
    op: "split", id: "wei4shen2me", into: ["wei4", "shen2me"],
    words: {
      wei4: w(prep, "for, for the sake of: {{word:wei4}}-{{word:shen2me}}, why (\"for what\")", "для, ради: {{word:wei4}}-{{word:shen2me}} — почему («для чего»)", "为", 3,
        "For: {{word:wei4}}-{{word:shen2me}}, why, is \"for what\".", "Для: {{word:wei4}}-{{word:shen2me}} — почему, «для чего»."),
    },
    cards: { wei4: { en: "for; {{word:wei4}}-{{word:shen2me}}: why", ru: "для; {{word:wei4}}-{{word:shen2me}} — почему" } },
  },
  { op: "category", id: "wei4", to: "place-nouns-prepositions" },

  // -- animal: dòngwù -> dòng + wù (dòng's card moves to L2) ----------------
  {
    op: "split", id: "dong4wu4", into: ["dong4", "wu4"],
    words: {
      wu4: w(noun, "thing, creature, in words: {{word:dong4}}-{{word:wu4}}, animal (\"moving creature\")", "вещь, существо, в словах: {{word:dong4}}-{{word:wu4}} — животное («движущееся существо»)", "物", 3,
        "Creature, thing: {{word:dong4}}-{{word:wu4}}, an animal, is a creature that moves.", "Существо, вещь: {{word:dong4}}-{{word:wu4}}, животное, — существо, которое движется."),
    },
    cards: { wu4: { en: "creature, thing; {{word:dong4}}-{{word:wu4}}: animal", ru: "существо; {{word:dong4}}-{{word:wu4}} — животное" } },
  },
  { op: "category", id: "wu4", to: "general" },

  // -- thing: dōngxi -> dōng + xī, written dōng-{{light:xi1}} ----------------
  {
    op: "split", id: "dong1xi", into: ["dong1", "xi1"], light: ["xi1"],
    words: {
      dong1: w(noun, "east; with {{word:xi1}} said lightly, {{word:dong1}}-{{light:xi1}} is a thing (\"east and west\": everything)", "восток; с лёгким {{word:xi1}} — {{word:dong1}}-{{light:xi1}}, вещь («восток и запад»: всё)", "东", 4,
        "East, and the first half of {{word:dong1}}-{{light:xi1}}, \"thing\", which most descriptions end in.", "Восток и первая половина {{word:dong1}}-{{light:xi1}}, «вещь», которой кончается большинство описаний."),
      xi1: w(noun, "west; said lightly after {{word:dong1}}, {{word:dong1}}-{{light:xi1}}, a thing", "запад; лёгкое после {{word:dong1}}: {{word:dong1}}-{{light:xi1}} — вещь", "西", 4,
        "West, and the second half of {{word:dong1}}-{{light:xi1}}, \"thing\".", "Запад и вторая половина {{word:dong1}}-{{light:xi1}}, «вещь»."),
    },
    cards: {
      dong1: { en: "east; {{word:dong1}}-{{light:xi1}}: thing", ru: "восток; {{word:dong1}}-{{light:xi1}} — вещь" },
      xi1: { en: "west", ru: "запад" },
    },
  },
  { op: "category", id: "dong1", to: "relative-position" },
  { op: "category", id: "xi1", to: "relative-position" },

  // -- woman: nǚrén -> nǚ + rén ---------------------------------------------
  {
    op: "split", id: "nv3ren2", into: ["nv3", "ren2"],
    words: {
      nv3: w({ eng: "adjective/noun", rus: "прилагательное/существительное", zh: "形容词/名词" }, "female, woman: {{word:nv3}}-{{word:ren2}}, a woman", "женский, женщина: {{word:nv3}}-{{word:ren2}} — женщина", "女", 4,
        "Female: {{word:nv3}}-{{word:ren2}} is a woman.", "Женский: {{word:nv3}}-{{word:ren2}} — женщина."),
    },
    cards: { nv3: { en: "female; {{word:nv3}}-{{word:ren2}}: woman", ru: "женский; {{word:nv3}}-{{word:ren2}} — женщина" } },
  },

  // -- place: dìfāng -> dì + fāng, written dì-{{light:fang1}} (dì's card moves to L3)
  {
    op: "split", id: "di4fang1", into: ["di4", "fang1"], light: ["fang1"],
    words: {
      fang1: w(noun, "side, direction; way, method: {{word:di4}}-{{light:fang1}}, a place; {{word:fang1}}-{{word:fa3}}, a method", "сторона, направление; способ: {{word:di4}}-{{light:fang1}} — место; {{word:fang1}}-{{word:fa3}} — способ", "方", 4,
        "Side, direction: {{word:di4}}-{{light:fang1}} (place) and {{word:fang1}}-{{word:fa3}} (method) are built on it.", "Сторона, направление: на нём построены {{word:di4}}-{{light:fang1}} (место) и {{word:fang1}}-{{word:fa3}} (способ)."),
    },
    cards: { fang1: { en: "side, direction; {{word:di4}}-{{light:fang1}}: place", ru: "сторона; {{word:di4}}-{{light:fang1}} — место" } },
  },
  { op: "category", id: "fang1", to: "relative-position" },

  // -- method: fāngfǎ -> fāng + fǎ ------------------------------------------
  {
    op: "split", id: "fang1fa3", into: ["fang1", "fa3"],
    words: {
      fa3: w(noun, "method, way; law: {{word:fang1}}-{{word:fa3}}, a method; {{word:kan4}}-{{word:fa3}}, a view; {{word:shuo1}}-{{word:fa3}}, a way of saying it", "способ; закон: {{word:fang1}}-{{word:fa3}} — способ; {{word:kan4}}-{{word:fa3}} — взгляд; {{word:shuo1}}-{{word:fa3}} — то, как это говорят", "法", 3,
        "Way, method: after a verb it says the way it's done ({{word:kan4}}-{{word:fa3}}, a view; {{word:yong4}}-{{word:fa3}}, how to use it).", "Способ: после глагола — как это делают ({{word:kan4}}-{{word:fa3}} — взгляд; {{word:yong4}}-{{word:fa3}} — как этим пользоваться)."),
    },
    cards: { fa3: { en: "way, method; {{word:fang1}}-{{word:fa3}}: method", ru: "способ; {{word:fang1}}-{{word:fa3}} — способ" } },
  },

  // -- but: dànshì -> dàn + shì ---------------------------------------------
  {
    op: "split", id: "dan4shi4", into: ["dan4", "shi4"],
    words: {
      dan4: w(conj, "but; {{word:dan4}}-{{word:shi4}}, but", "но; {{word:dan4}}-{{word:shi4}} — но", "但", 4,
        "But: {{word:dan4}} or {{word:dan4}}-{{word:shi4}} turns a sentence against the one before.", "Но: {{word:dan4}} или {{word:dan4}}-{{word:shi4}} противопоставляет предложение предыдущему."),
    },
    cards: { dan4: { en: "but; {{word:dan4}}-{{word:shi4}}: but", ru: "но; {{word:dan4}}-{{word:shi4}} — но" } },
  },

  // -- maybe: kěnéng -> kě + néng --------------------------------------------
  {
    op: "split", id: "ke3neng2", into: ["ke3", "neng2"],
    words: {
      ke3: w(aux, "can, may; worth (before a verb): {{word:ke3}}-{{word:neng2}}, maybe, possible", "можно; стоит (перед глаголом): {{word:ke3}}-{{word:neng2}} — может быть, возможно", "可", 3,
        "Can, may: {{word:ke3}}-{{word:neng2}} is maybe, and before a verb it makes \"worth doing\".", "Можно: {{word:ke3}}-{{word:neng2}} — может быть, а перед глаголом — «стоит сделать»."),
    },
    cards: { ke3: { en: "can, may; {{word:ke3}}-{{word:neng2}}: maybe", ru: "можно; {{word:ke3}}-{{word:neng2}} — может быть" } },
  },

  // -- the same: yīyàng -> yī + yàng -----------------------------------------
  {
    op: "split", id: "yi1yang4", into: ["yi1", "yang4"],
    words: {
      yang4: w(noun, "look, way, kind: {{word:yi1}}-{{word:yang4}}, the same (\"one look\"); {{word:zhe4}}-{{word:yang4}}, like this; {{word:zen3me}}-{{word:yang4}}, how", "вид, образ: {{word:yi1}}-{{word:yang4}} — одинаковый («один вид»); {{word:zhe4}}-{{word:yang4}} — так; {{word:zen3me}}-{{word:yang4}} — как", "样", 4,
        "Look, way: {{word:yi1}}-{{word:yang4}} (the same) and {{word:zhe4}}-{{word:yang4}} (like this) are built on it.", "Вид, образ: на нём построены {{word:yi1}}-{{word:yang4}} (одинаковый) и {{word:zhe4}}-{{word:yang4}} (так)."),
    },
    cards: { yang4: { en: "look, way; {{word:yi1}}-{{word:yang4}}: the same", ru: "вид; {{word:yi1}}-{{word:yang4}} — одинаковый" } },
  },
  { op: "category", id: "yang4", to: "kind-part" },

  // -- where: nǎlǐ -> nǎ + lǐ -------------------------------------------------
  {
    op: "split", id: "na3li3", into: ["na3", "li3"],
    words: {
      na3: w(pron, "which: {{word:na3}}-{{word:li3}}, where; {{word:na3}}-ge, which one", "какой, который: {{word:na3}}-{{word:li3}} — где; {{word:na3}}-ge — который", "哪", 3,
        "Which: {{word:na3}}-{{word:li3}} (where) and {{word:na3}}-ge (which one).", "Какой: {{word:na3}}-{{word:li3}} (где) и {{word:na3}}-ge (который)."),
    },
    cards: { na3: { en: "which; {{word:na3}}-{{word:li3}}: where", ru: "какой; {{word:na3}}-{{word:li3}} — где" } },
  },

  // -- other: biéde -> bié + de -----------------------------------------------
  {
    op: "split", id: "bie2de", into: ["bie2", "de"],
    words: {
      bie2: w({ eng: "adjective/adverb", rus: "прилагательное/наречие", zh: "形容词/副词" }, "other; before a verb, don't: {{word:bie2}}-{{word:de}}, other; {{word:bie2}}-{{word:ren2}}, other people", "другой; перед глаголом — не надо: {{word:bie2}}-{{word:de}} — другой; {{word:bie2}}-{{word:ren2}} — другие люди", "别", 3,
        "Other: {{word:bie2}}-{{word:de}} {{word:ren2}}, other people.", "Другой: {{word:bie2}}-{{word:de}} {{word:ren2}} — другие люди."),
    },
    cards: { bie2: { en: "other; {{word:bie2}}-{{word:de}}: other", ru: "другой; {{word:bie2}}-{{word:de}} — другой" } },
  },

  // -- left: zuǒbiān -> zuǒ + biān --------------------------------------------
  {
    op: "split", id: "zuo3bian1", into: ["zuo3", "bian1"],
    words: {
      zuo3: w({ eng: "noun/directional", rus: "существительное/направление", zh: "名词/方向" }, "left: {{word:zuo3}}-{{word:bian1}}, the left side", "левый: {{word:zuo3}}-{{word:bian1}} — левая сторона", "左", 3,
        "Left: {{word:zuo3}}-{{word:bian1}}, the left side.", "Левый: {{word:zuo3}}-{{word:bian1}} — левая сторона."),
    },
    cards: { zuo3: { en: "left; {{word:zuo3}}-{{word:bian1}}: left side", ru: "левый; {{word:zuo3}}-{{word:bian1}} — левая сторона" } },
  },

  // -- tool: gōngjù -> gōng + jù -----------------------------------------------
  {
    op: "split", id: "gong1ju4", into: ["gong1", "ju4"],
    words: {
      gong1: w(noun, "work, labour: {{word:gong1}}-{{word:ju4}}, a tool; {{word:gong1}}-{{word:ren2}}, a worker", "работа, труд: {{word:gong1}}-{{word:ju4}} — инструмент; {{word:gong1}}-{{word:ren2}} — рабочий", "工", 3,
        "Work: {{word:gong1}}-{{word:ju4}} (tool) and {{word:gong1}}-{{word:ren2}} (worker) are built on it.", "Работа: на нём построены {{word:gong1}}-{{word:ju4}} (инструмент) и {{word:gong1}}-{{word:ren2}} (рабочий)."),
      ju4: w(noun, "tool, thing to use, in words: {{word:gong1}}-{{word:ju4}}, a tool", "орудие, предмет, в словах: {{word:gong1}}-{{word:ju4}} — инструмент", "具", 3,
        "Implement: the second half of {{word:gong1}}-{{word:ju4}}, tool.", "Орудие: вторая половина {{word:gong1}}-{{word:ju4}}, инструмент."),
    },
    cards: {
      gong1: { en: "work; {{word:gong1}}-{{word:ju4}}: tool", ru: "работа; {{word:gong1}}-{{word:ju4}} — инструмент" },
      ju4: { en: "implement, thing to use", ru: "орудие, предмет" },
    },
  },
  { op: "category", id: "gong1", to: "abstract-substantives" },

  // -- or: huòzhě -> huò + zhě --------------------------------------------------
  {
    op: "split", id: "huo4zhe3", into: ["huo4", "zhe3"],
    words: {
      huo4: w(conj, "or: {{word:huo4}}-{{word:zhe3}}, or", "или: {{word:huo4}}-{{word:zhe3}} — или", "或", 3,
        "Or: {{word:huo4}} or {{word:huo4}}-{{word:zhe3}}, one or the other.", "Или: {{word:huo4}} или {{word:huo4}}-{{word:zhe3}} — одно или другое."),
      zhe3: w(suffix, "the one who: after a verb, the person who does it; {{word:huo4}}-{{word:zhe3}}, or", "тот, кто: после глагола — тот, кто это делает; {{word:huo4}}-{{word:zhe3}} — или", "者", 2,
        "The one who: after a verb it names who does it, and it ends {{word:huo4}}-{{word:zhe3}}.", "Тот, кто: после глагола называет того, кто это делает, и заканчивает {{word:huo4}}-{{word:zhe3}}."),
    },
    cards: {
      huo4: { en: "or; {{word:huo4}}-{{word:zhe3}}: or", ru: "или; {{word:huo4}}-{{word:zhe3}} — или" },
      zhe3: { en: "the one who", ru: "тот, кто" },
    },
  },
  { op: "category", id: "zhe3", to: "grammatical-particles" },

  // -- colours: báisè ... -> bái ... + sè ----------------------------------------
  {
    op: "split", id: "bai2se4", into: ["bai2", "se4"],
    words: {
      bai2: colour("bai2", "白", "white", "белый"),
      se4: w(noun, "colour, in words: {{word:bai2}}-{{word:se4}}, white; {{word:yan2se4}}, colour", "цвет, в словах: {{word:bai2}}-{{word:se4}} — белый; {{word:yan2se4}} — цвет", "色", 3,
        "Colour: each colour word ends in it ({{word:hong2}}-{{word:se4}}, red).", "Цвет: им кончается каждое слово цвета ({{word:hong2}}-{{word:se4}} — красный)."),
    },
    cards: { bai2: { en: "white", ru: "белый" }, se4: { en: "colour (in colour words)", ru: "цвет (в словах цвета)" } },
  },
  { op: "split", id: "hei1se4", into: ["hei1", "se4"], words: { hei1: colour("hei1", "黑", "black", "чёрный") }, cards: { hei1: { en: "black", ru: "чёрный" } } },
  { op: "split", id: "hong2se4", into: ["hong2", "se4"], words: { hong2: colour("hong2", "红", "red", "красный") }, cards: { hong2: { en: "red", ru: "красный" } } },
  { op: "split", id: "huang2se4", into: ["huang2", "se4"], words: { huang2: colour("huang2", "黄", "yellow", "жёлтый") }, cards: { huang2: { en: "yellow", ru: "жёлтый" } } },
  { op: "split", id: "lan2se4", into: ["lan2", "se4"], words: { lan2: colour("lan2", "蓝", "blue", "синий") }, cards: { lan2: { en: "blue", ru: "синий" } } },

  { op: "relation", kind: "antonyms", add: ["bai2", "hei1"] },

  // -- the old words' composites: Mandarin's compounds now; nouns become units --
  { op: "composite", zh: "东西", set: { fit: "natural", role: "noun", proposed: true }, addForm: ["{{word:wu4}}", "物"] },
  { op: "composite", zh: "动物", set: { fit: "natural", role: "noun", transparent: true, proposed: true } },
  { op: "composite", zh: "地方", set: { fit: "natural", role: "noun", transparent: true, proposed: true } },
  { op: "composite", zh: "工具", set: { fit: "natural", role: "noun", transparent: true, proposed: true } },
  { op: "composite", zh: "方法", set: { fit: "natural", role: "noun", transparent: true, proposed: true } },
  ...["为什么", "但是", "可能", "一样", "哪里", "别的", "左边", "或者", "女人", "黑色", "红色", "黄色"].map((zh) => ({
    op: "composite", zh, set: { fit: "natural", transparent: true, proposed: true },
  })),

  // -- the Word Builder's word lists ------------------------------------------------
  { op: "text", file: "src/lib/word-builder.js", from: 'const PLACE_WORDS = new Set(["jia1", "di4fang1"]);', to: 'const PLACE_WORDS = new Set(["jia1", "地方"]);' },
  { op: "text", file: "src/lib/word-builder.js", from: 'export const START_NOUNS = ["dong1xi", "ren2", "dong4wu4", "zhi2wu4", "gong1ju4", "di4fang1"];', to: 'export const START_NOUNS = ["东西", "ren2", "动物", "zhi2wu4", "工具", "地方"];' },
  { op: "text", file: "src/lib/word-builder.js", from: 'const COLORS = new Set(["bai2se4", "hei1se4", "hong2se4", "huang2se4", "lan2se4"]);', to: 'const COLORS = new Set(["bai2", "hei1", "hong2", "huang2", "lan2"]);' },
  { op: "text", file: "src/lib/word-builder.js", from: '"zhen1", "bie2de",', to: '"zhen1", "bie2",' },
  { op: "text", file: "src/lib/word-builder.js", from: '"pang2bian1", "zuo3bian1", "you4bian1", "fu4jin4",', to: '"pang2bian1", "zuo3", "you4bian1", "fu4jin4", "fang1", "dong1", "xi1", "se4", "zhe3",' },
  { op: "text", file: "src/lib/word-builder.js", from: 'const ROLE_OVERRIDES = { jue2de: "verb", fang1fa3: "noun" };', to: 'const ROLE_OVERRIDES = { jue2de: "verb" };' },

  // -- the compound rule over every composite -----------------------------------------
  { op: "compounds" },
];
