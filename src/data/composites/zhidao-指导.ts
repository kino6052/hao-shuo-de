import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1103,
  phase: 3,
  zh: "指导",
  py: "zhǐdǎo",
  en: "guide, instruct",
  ru: "руководить, наставлять",
  pos: "verb",
  hsd: ["{{word:bang1}} X {{word:zuo4}}"],
  tts: ["帮X做"],
  literal: "help X do it",
  fit: "plain",
  topics: ["teaching-homework-and-questions"],
  isA: ["learning-and-teaching"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:wo3}} {{word:zuo4}}.",
      hanzi: "他帮我做。",
      en: "He guides me.",
      ru: "Он направляет меня.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ta1}} {{word:zuo4}}.",
      hanzi: "我帮他做。",
      en: "I guide him.",
      ru: "Я направляю его.",
    },
  ],
});
