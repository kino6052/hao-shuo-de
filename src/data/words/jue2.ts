import { word } from "../../lib/word.ts";

export default word("jue2", {
  term: "jué",
  hanzi: "觉",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to feel, sense: {{word:jue2}}-{{light:de2}}, to feel, think",
    rus: "чувствовать: {{word:jue2}}-{{light:de2}} — чувствовать, считать",
    zh: "觉",
  },
  necessity: {
    index: 4,
    eng: "Feel: {{word:jue2}}-{{light:de2}} says what you feel or think.",
    rus: "Чувствовать: {{word:jue2}}-{{light:de2}} говорит, что вы чувствуете или думаете.",
  },
  senses: {
    decide: {
      hanzi: "决",
      eng: "decide",
      rus: "решать",
      compounds: ["jue2 ding4"],
      why: {
        eng: "Written 决, {{word:jue2}} means decide in {{word:jue2}}-{{word:ding4}}; on its own it is feel.",
        rus: "Записанное как 决, {{word:jue2}} значит «решать» в {{word:jue2}}-{{word:ding4}}; само по себе — «чувствовать».",
      },
    },
  },
});
