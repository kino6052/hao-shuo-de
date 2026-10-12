// R12-ji (with the author): "we will need to add jide for remember as core vocab".
// dé (得) is already a word, so only jì 记 (remember) joins; jì-de is built from it
// (like jué-de). It is taught with the feeling verbs (greetings-and-feelings/feel).
//   - 记 is now the word itself; 记得 = jì-de; 忘记 = xiàn-zài bù jì-de le; 记者 = jì-zhě
//     (the one who records, like 作者 zuò-zhě).
// Run: npm run refactor -- refactors/R12-ji.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const JIDE = `${W("ji4")}-${L("de2")}`;

export default [
  {
    op: "add", id: "ji4", hanzi: "记", category: "cognition",
    pos: { eng: "verb", rus: "глагол", zh: "动词" },
    definition: {
      eng: `to remember, keep in mind: ${JIDE}, to remember; ${W("bu4")} ${JIDE}, to have forgotten`,
      rus: `помнить, держать в памяти: ${JIDE} — помнить; ${W("bu4")} ${JIDE} — не помнить`,
      zh: "记，记住",
    },
    necessity: {
      index: 4,
      eng: `Remember: ${JIDE} says you still have it in mind; ${W("bu4")} ${JIDE} says you have lost it.`,
      rus: `Помнить: ${JIDE} говорит, что вы это ещё держите в памяти; ${W("bu4")} ${JIDE} — что вы это потеряли.`,
    },
  },
  // (the lesson module src/content/lessons/greetings-and-feelings/remember.ts was written by hand:
  // feel.ts already holds the most examples in a row the gate allows)
  {
    op: "composite", zh: "记",
    set: {
      hsd: [W("ji4")], tts: ["记"], fit: "word",
      examples: [
        { pinyin: `{{Word:ni3}} ${W("ji4")} ${W("wo3")} ${W("ma")}?`, hanzi: "你记我吗？", en: "Do you remember me?", ru: "Ты меня помнишь?" },
        { pinyin: `{{Word:wo3}} ${W("ji4")} ${W("na4")}-${L("ge4")} ${W("di4")}-${L("fang1")}.`, hanzi: "我记那个地方。", en: "I remember that place.", ru: "Я помню то место." },
      ],
    },
  },
  {
    op: "composite", zh: "记得",
    set: {
      hsd: [JIDE], tts: ["记得"], fit: "plain", literal: "remember-get",
      examples: [
        { pinyin: `{{Word:ni3}} ${JIDE} ${W("ta1")}-${W("de")} ${W("ming2")}-${L("zi4")} ${W("ma")}?`, hanzi: "你记得他的名字吗？", en: "Do you remember his name?", ru: "Ты помнишь, как его зовут?" },
        { pinyin: `{{Word:wo3}} ${JIDE} ${W("lu4")}.`, hanzi: "我记得路。", en: "I remember the way.", ru: "Я помню дорогу." },
      ],
    },
  },
  {
    op: "composite", zh: "忘记",
    set: {
      hsd: [`${W("xian4")}-${W("zai4")} ${W("bu4")} ${JIDE} ${W("le")}`], tts: ["现在不记得了"], literal: "now don't remember anymore",
      examples: [
        { pinyin: `{{Word:wo3}} ${W("xian4")}-${W("zai4")} ${W("bu4")} ${JIDE} ${W("lu4")} ${W("le")}.`, hanzi: "我现在不记得路了。", en: "I've forgotten the way.", ru: "Я забыл дорогу." },
        { pinyin: `{{Word:ta1}} ${W("xian4")}-${W("zai4")} ${W("bu4")} ${JIDE} ${W("wo3")} ${W("le")}.`, hanzi: "他现在不记得我了。", en: "He's forgotten me.", ru: "Он меня забыл." },
      ],
    },
  },
  {
    op: "composite", zh: "记者",
    set: { hsd: [`${W("ji4")}-${W("zhe3")}`], tts: ["记者"], literal: "the one who remembers/records", fit: "plain" },
  },
];
