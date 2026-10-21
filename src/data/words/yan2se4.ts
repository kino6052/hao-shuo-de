import { word } from "../../lib/word.ts";

export default word("yan2se4", {
  term: "yánsè",
  hanzi: "颜色",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "color, pigment, tint frame", rus: "цвет, пигмент, цветовой оттенок", zh: "颜色，色素，色调范围" },
  necessity: {
    index: 3,
    eng: "Color itself: without it, you can't ask \"what color is it?\"",
    rus: "Сам цвет: без него не спросить «какого это цвета?»",
  },
  topics: ["colours"],
  isA: ["colour-quality"],
  maps: "kule",
  paraphrase: {
    forms: ["{{word:bai2}}, {{word:hei1}}, {{word:hong2}} {{word:zhe4}}-{{word:yang4}}-{{word:de}}"],
    verdict: "clumsy",
    note: "A list of examples cannot take its place; colour is the idea behind them.",
  },
});
