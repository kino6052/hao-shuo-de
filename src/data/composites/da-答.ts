import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1390,
  phase: 3,
  zh: "答",
  py: "dá",
  en: "answer",
  ru: "отвечать",
  pos: "verb",
  hsd: [
    "{{word:hui2}}-{{word:hua4}}",
    "{{word:dui4}} {{word:wen4}}-{{word:de}} {{word:ren2}} {{word:shuo1}}",
  ],
  tts: ["回话", "对问的人说"],
  literal: "say to the one who asked",
  fit: "natural",
  topics: ["asking-and-answering"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hui2}}-{{word:hua4}} {{word:le}}.",
      hanzi: "我回话了。",
      en: "I answered.",
      ru: "Я ответил.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:wen4}}-{{word:de}} {{word:ren2}} {{word:shuo1}}.",
      hanzi: "他对问的人说。",
      en: "He answers the one who asked.",
      ru: "Он отвечает спросившему.",
    },
  ],
});
