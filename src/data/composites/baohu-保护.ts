import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 293,
  phase: 1,
  zh: "保护",
  py: "bǎohù",
  en: "protect",
  ru: "защищать",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:rang4}} X {{word:bian4}} {{word:huai4}}"],
  tts: ["不让X变坏"],
  literal: "not let X go bad",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:bu4}} {{word:rang4}} {{word:shui3}}-{{word:guo3}} {{word:bian4}} {{word:huai4}}.",
      hanzi: "不让水果变坏。",
      en: "Keep the fruit from spoiling.",
      ru: "Не дай фруктам испортиться.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yao4}} {{word:bu4}} {{word:rang4}} {{word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:bian4}} {{word:huai4}}.",
      hanzi: "我们要不让这个地方变坏。",
      en: "We must protect this place.",
      ru: "Мы должны беречь это место.",
    },
  ],
});
