import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1319,
  phase: 3,
  zh: "尤其",
  py: "yóuqí",
  en: "especially",
  ru: "особенно",
  pos: "adverb",
  hsd: ["{{word:zui4}}"],
  tts: ["最"],
  literal: "most",
  fit: "plain",
  topics: ["especially-and-in-person"],
  isA: ["degree-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:he1}} {{word:shui3}}, {{word:zui4}} {{word:ai4}} {{word:he1}} {{word:re4}}-{{word:de}}.",
      hanzi: "我爱喝水，最爱喝热的。",
      en: "I love water, especially hot.",
      ru: "Я люблю воду, особенно горячую.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:shu1}}, {{word:zui4}} {{word:ai4}} {{word:kan4}} {{word:xiao3}}-{{word:shuo1}}.",
      hanzi: "我爱看书，最爱看小说。",
      en: "I love books, especially novels.",
      ru: "Я люблю книги, особенно романы.",
    },
  ],
});
