import { word } from "../../lib/word.ts";

export default word("bu4", {
  term: "bù",
  hanzi: "不",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "not, no; used for standard negation of verbs and adjectives, except for you",
    rus: "не, нет; используется для стандартного отрицания глаголов и прилагательных, кроме you",
    zh: "不，没；用于动词和形容词的标准否定，you 除外",
  },
  necessity: {
    index: 5,
    eng: "Not. Without it, you can't say no.",
    rus: "Не. Без него нельзя ничего отрицать.",
  },
  maps: "ala",
  senses: {
    part: {
      hanzi: "部",
      eng: "part",
      rus: "часть",
      why: {
        eng: "Written 部, {{word:bu4}} means part in {{word:bu4}}-{{light:fen1}}; on its own it is not.",
        rus: "Записанное как 部, {{word:bu4}} значит «часть» в {{word:bu4}}-{{light:fen1}}; само по себе — «не».",
      },
      compounds: ["bu4 fen1"],
    },
  },
});
