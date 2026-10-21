import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 993,
  phase: 2,
  zh: "科学",
  py: "kēxué",
  en: "science",
  ru: "наука",
  pos: "noun",
  hsd: ["{{word:ren2}} {{word:zen3me}} {{word:zhi1dao4}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["人怎么知道东西"],
  literal: "how people know things",
  fit: "plain",
  topics: ["ideas-and-opinions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ren2}} {{word:zen3me}} {{word:zhi1dao4}} {{word:dong1}}-{{light:xi1}}?",
      hanzi: "人怎么知道东西？",
      en: "What is science?",
      ru: "Что такое наука?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:xue2}} {{word:ren2}} {{word:zen3me}} {{word:zhi1dao4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我要学人怎么知道东西。",
      en: "I want to study science.",
      ru: "Я хочу изучать науку.",
    },
  ],
});
