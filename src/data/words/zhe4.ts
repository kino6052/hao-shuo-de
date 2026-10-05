import { word } from "../../lib/word.ts";

export default word("zhe4", {
  term: "zhè",
  hanzi: "这",
  pos: { eng: "pronoun/adjective", rus: "местоимение/прилагательное", zh: "代词/形容词" },
  definition: {
    eng: "this, these; syntactically binds as zhe-ge",
    rus: "этот, эти; синтаксически связывается как zhe-ge",
    zh: "这，这些；在语法上以 zhe-ge 形式连接",
  },
  necessity: {
    index: 5,
    eng: "Without it, you can't point at what's here: no \"this\".",
    rus: "Без него нельзя указать на то, что рядом: нет «это».",
  },
  maps: "ni",
});
