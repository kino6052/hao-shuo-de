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
    real: {
      hanzi: "实",
      eng: "real, solid",
      rus: "настоящий, реальный",
      why: {
        eng: "Written 实, {{word:shi2}} means real in {{word:shi4}}-{{word:shi2}} (fact), {{word:zhen1}}-{{word:shi2}} (true) and {{word:xian4}}-{{word:shi2}} (reality); on its own it is ten.",
        rus: "Записанное как 实, {{word:shi2}} значит «настоящий» в {{word:shi4}}-{{word:shi2}} (факт), {{word:zhen1}}-{{word:shi2}} (правдивый) и {{word:xian4}}-{{word:shi2}} (реальность); само по себе — «десять».",
      },
      compounds: ["shi4 shi2", "zhen1 shi2", "xian4 shi2"],
    },
  },
});
