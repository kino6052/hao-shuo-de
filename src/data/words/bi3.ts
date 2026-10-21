import { word } from "../../lib/word.ts";

export default word("bi3", {
  term: "bǐ",
  hanzi: "比",
  pos: { eng: "preposition", rus: "предлог", zh: "介词" },
  definition: { eng: "comparison", rus: "сравнение", zh: "比较" },
  necessity: {
    index: 4,
    eng: "Than: A {{word:bi3}} B {{word:da4}}, A is bigger than B. Comparing two things needs it.",
    rus: "Чем: A {{word:bi3}} B {{word:da4}} — A больше, чем B. Без него не сравнить две вещи.",
  },
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  classes: {
    verb: {
      why: {
        eng: "To compare two things: bǐ yī-xià is compare for a moment; bǐ-de rén are the people who compare.",
        rus: "Сравнивать две вещи: bǐ yī-xià — сравнить на мгновение; bǐ-de rén — люди, которые сравнивают.",
      },
      example: "Tā shì bǐ-de rén.",
    },
  },
  atom: {
    eng: "A grammar word for comparing (\"X bǐ Y dà\"); any other way of comparing already needs a comparing word.",
    rus: "Служебное слово сравнения («X bǐ Y dà»); любой другой способ сравнить уже требует слова сравнения.",
  },
});
