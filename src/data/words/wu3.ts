import { word } from "../../lib/word.ts";

export default word("wu3", {
  term: "wǔ",
  hanzi: "五",
  pos: { eng: "number", rus: "числительное", zh: "数词" },
  definition: { eng: "five", rus: "пять", zh: "五" },
  necessity: {
    index: 4,
    eng: "Five. Numbers can't be described with other words.",
    rus: "Пять. Числа не описать другими словами.",
  },
  senses: {
    noon: {
      hanzi: "午",
      eng: "noon",
      rus: "полдень",
      compounds: ["shang4 wu3", "xia4 wu3", "zhong1 wu3"],
      why: {
        eng: "Written 午, {{word:wu3}} means noon in {{word:shang4}}-{{word:wu3}}, {{word:xia4}}-{{word:wu3}}, {{word:zhong1}}-{{word:wu3}}; on its own it is five.",
        rus: "Записанное как 午, {{word:wu3}} значит «полдень» в {{word:shang4}}-{{word:wu3}}, {{word:xia4}}-{{word:wu3}}, {{word:zhong1}}-{{word:wu3}}; само по себе — «пять».",
      },
    },
  },
});
