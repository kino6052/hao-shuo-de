import { word } from "../../lib/word.ts";

export default word("de", {
  term: "de",
  hanzi: "的",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "possessive marker, structural adjectival particle; used to bind modifiers and multi-word description structures onto target nouns",
    rus: "показатель принадлежности, структурная определительная частица; используется для присоединения определений и многословных описательных конструкций к существительным",
    zh: "所属标记，结构性定语助词；用于把修饰语和多词描述结构连接到目标名词上",
  },
  necessity: {
    index: 5,
    eng: "Joins a describing word to a noun: {{word:da4}}-{{word:de}} {{word:di4fang1}}. Every description in Hao-shuo-de uses it.",
    rus: "Соединяет описание с существительным: {{word:da4}}-{{word:de}} {{word:di4fang1}}. Им пользуется каждое описание в Hǎo-shuō-de.",
  },
  maps: "pi",
});
