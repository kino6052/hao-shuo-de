import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1256,
  phase: 3,
  zh: "免费",
  py: "miǎnfèi",
  en: "free of charge",
  ru: "бесплатный",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:yong4}} {{word:gei3}} {{word:jin1}}"],
  tts: ["不用给金"],
  literal: "no need to pay",
  fit: "plain",
  topics: ["prices-and-discounts"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:yong4}} {{word:gei3}} {{word:jin1}}.",
      hanzi: "这个不用给金。",
      en: "This is free.",
      ru: "Это бесплатно.",
    },
    {
      pinyin: "{{Word:he1}} {{word:shui3}} {{word:bu4}} {{word:yong4}} {{word:gei3}} {{word:jin1}}.",
      hanzi: "喝水不用给金。",
      en: "The water is free.",
      ru: "Вода бесплатна.",
    },
  ],
});
