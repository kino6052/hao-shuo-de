import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1402,
  phase: 3,
  zh: "花费",
  py: "huāfèi",
  en: "spend",
  ru: "тратить",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  literal: "use",
  fit: "natural",
  topics: ["giving-and-getting"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:le}} {{word:hen3}} {{word:duo1}} {{word:jin1}}.",
      hanzi: "我用了很多金。",
      en: "I spent a lot of money.",
      ru: "Я потратил много денег.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yong4}} {{word:le}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "你用了多少金？",
      en: "How much did you spend?",
      ru: "Сколько ты потратил?",
    },
  ],
});
