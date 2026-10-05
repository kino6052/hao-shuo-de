import { word } from "../../lib/word.ts";

export default word("shi2", {
  term: "shí",
  hanzi: "十",
  pos: { eng: "number", rus: "числительное", zh: "数词" },
  definition: { eng: "ten", rus: "десять", zh: "十" },
  necessity: {
    index: 4,
    eng: "Ten, and the base of every bigger number: {{word:shi2}}-{{word:er4}} is twelve.",
    rus: "Десять — основа всех чисел побольше: {{word:shi2}}-{{word:er4}} — двенадцать.",
  },
  senses: {
    time: {
      hanzi: "时",
      eng: "time",
      rus: "время",
      compounds: ["shi2 jian1", "shi2 hou4", "xiao3 shi2", "you3 shi2"],
      why: {
        eng: "Written 时, {{word:shi2}} means time in {{word:shi2}}-{{word:jian1}}, {{word:shi2}}-{{light:hou4}}, {{word:xiao3}}-{{word:shi2}}, {{word:you3}}-{{word:shi2}}; on its own it is ten.",
        rus: "Записанное как 时, {{word:shi2}} значит «время» в {{word:shi2}}-{{word:jian1}}, {{word:shi2}}-{{light:hou4}}, {{word:xiao3}}-{{word:shi2}}, {{word:you3}}-{{word:shi2}}; само по себе — «десять».",
      },
    },
    food: {
      hanzi: "食",
      eng: "food",
      rus: "еда",
      compounds: ["shi2 wu4"],
      why: {
        eng: "Written 食, {{word:shi2}} means food in {{word:shi2}}-{{word:wu4}}; on its own it is ten.",
        rus: "Записанное как 食, {{word:shi2}} значит «еда» в {{word:shi2}}-{{word:wu4}}; само по себе — «десять».",
      },
    },
  },
});
