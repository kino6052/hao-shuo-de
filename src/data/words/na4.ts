import { word } from "../../lib/word.ts";

export default word("na4", {
  term: "nà",
  hanzi: "那",
  pos: { eng: "pronoun/adjective", rus: "местоимение/прилагательное", zh: "代词/形容词" },
  definition: {
    eng: "that, those; syntactically binds as na-ge",
    rus: "тот, те; синтаксически связывается как na-ge",
    zh: "那，那些；在语法上以 na-ge 形式连接",
  },
  necessity: {
    index: 5,
    eng: "Without it, you can't point at what's over there: no \"that\".",
    rus: "Без него нельзя указать на то, что далеко: нет «то».",
  },
  topics: ["this-that-such"],
  isA: ["pronoun"],
  maps: "ni",
  atom: {
    eng: "\"That\" is learned by pointing at what is away from you; it stands beside zhè, not under it.",
    rus: "«Тот» усваивают, показывая на то, что вдали; nà стоит рядом с zhè, а не под ним.",
  },
});
