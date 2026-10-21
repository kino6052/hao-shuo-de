import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1088,
  phase: 3,
  zh: "当作",
  py: "dàngzuò",
  en: "treat as",
  ru: "считать чем-то",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}} X {{word:shi4}} Y"],
  tts: ["觉得X是Y"],
  literal: "think of X as Y",
  fit: "plain",
  topics: ["opinions-and-guesses"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:ta1}} {{word:shi4}} {{word:wo3}} {{word:ba4ba}}.",
      hanzi: "我觉得他是我爸爸。",
      en: "I treat him as my father.",
      ru: "Я считаю его отцом.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:ni3}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我觉得你是我的家。",
      en: "I treat you as my home.",
      ru: "Я считаю тебя своим домом.",
    },
  ],
});
