import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1099,
  phase: 3,
  zh: "技术",
  py: "jìshù",
  en: "technology, skill",
  ru: "техника, технология",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}"],
  tts: ["做东西的方法"],
  literal: "the way of making things",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我学做东西的方法。",
      en: "I study technology.",
      ru: "Я изучаю технику.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "他知道做东西的方法。",
      en: "He has the skill.",
      ru: "Он владеет техникой.",
    },
  ],
});
