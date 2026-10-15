import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1464,
  phase: 3,
  zh: "减",
  py: "jiǎn",
  en: "subtract, minus",
  ru: "вычитать, минус",
  pos: "verb",
  hsd: ["{{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B"],
  tts: ["从…里面拿…"],
  literal: "take B from A",
  fit: "plain",
  note: "7 − 3: cóng qī lǐ-miàn ná sān (Lesson {{lesson:time-and-sums}}).",
  examples: [
    {
      pinyin: "{{Word:cong2}} {{word:shi2}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}.",
      hanzi: "从十里面拿三。",
      en: "Ten minus three.",
      ru: "Десять минус три.",
    },
    {
      pinyin: "{{Word:cong2}} {{word:wu3}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:yi1}}.",
      hanzi: "从五里面拿一。",
      en: "Five minus one.",
      ru: "Пять минус один.",
    },
  ],
});
