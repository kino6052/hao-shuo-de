import { word } from "../../lib/word.ts";

export default word("hao4", {
  term: "hào",
  hanzi: "号",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "sequence marker, number identity, ordinal number prefix",
    rus: "показатель порядка, числовой идентификатор, префикс порядкового числительного",
    zh: "序号标记，数字身份，序数前缀",
  },
  necessity: {
    index: 3,
    eng: "Number in a series: the second one, number five, the 3rd of the month.",
    rus: "Номер по порядку: второй, номер пять, третье число месяца.",
  },
  maps: "nanpa",
  senses: {
    fond: {
      hanzi: "好",
      eng: "be fond of",
      rus: "любить",
      compounds: ["ai4 hao4"],
      why: {
        eng: "Written 好, {{word:hao4}} means be fond of in {{word:ai4}}-{{word:hao4}}; on its own it is number.",
        rus: "Записанное как 好, {{word:hao4}} значит «любить» в {{word:ai4}}-{{word:hao4}}; само по себе — «номер».",
      },
    },
  },
});
