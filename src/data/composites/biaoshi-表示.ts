import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 701,
  phase: 2,
  zh: "表示",
  py: "biǎoshì",
  en: "express",
  ru: "выражать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}}-{{word:chu1}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:shuo1}}",
  ],
  tts: ["说出心里的东西", "说"],
  literal: "say",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他说他不来。",
      en: "He says he isn't coming.",
      ru: "Он говорит, что не придёт.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}} {{word:shen2me}}?",
      hanzi: "你说什么？",
      en: "What do you say?",
      ru: "Что ты говоришь?",
    },
  ],
});
