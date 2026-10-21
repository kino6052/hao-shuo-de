import { word } from "../../lib/word.ts";

export default word("lu4", {
  term: "lù",
  hanzi: "路",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "road, path, street; the way to a place", rus: "дорога, путь", zh: "路" },
  necessity: {
    index: 3,
    eng: "A road, the way to a place. Asking the way needs it.",
    rus: "Дорога, путь куда-то. Без него не спросить дорогу.",
  },
  topics: ["the-road"],
  isA: ["outdoor-place"],
  paraphrase: {
    forms: [
      "{{word:ren2}} {{word:he2}} {{word:che1}} {{word:zou3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    ],
    verdict: "clumsy",
  },
});
