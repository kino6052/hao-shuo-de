import { word } from "../../lib/word.ts";

export default word("xian4", {
  term: "xiàn",
  hanzi: "线",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "line, rope, hair, thread, cord, flexible long thing",
    rus: "линия, верёвка, волос, нить, шнур, длинный гибкий предмет",
    zh: "线，绳子，头发，线绳，长而柔软的东西",
  },
  necessity: {
    index: 2,
    eng: "A line, a thread, a rope: anything long and thin.",
    rus: "Линия, нитка, верёвка — всё длинное и тонкое.",
  },
  maps: "linja",
  senses: {
    now: {
      hanzi: "现",
      eng: "now, appear",
      rus: "сейчас, появляться",
      compounds: ["xian4 zai4", "fa1 xian4", "chu1 xian4"],
      why: {
        eng: "Written 现, {{word:xian4}} means now, appear in {{word:xian4}}-{{word:zai4}}, {{word:fa1}}-{{word:xian4}}, {{word:chu1}}-{{word:xian4}}; on its own it is line.",
        rus: "Записанное как 现, {{word:xian4}} значит «сейчас, появляться» в {{word:xian4}}-{{word:zai4}}, {{word:fa1}}-{{word:xian4}}, {{word:chu1}}-{{word:xian4}}; само по себе — «линия».",
      },
    },
  },
});
