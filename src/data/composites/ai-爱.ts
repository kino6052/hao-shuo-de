import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 91,
  phase: 1,
  zh: "爱",
  py: "ài",
  en: "love",
  ru: "любить",
  pos: "verb",
  hsd: ["{{word:ai4}}"],
  tts: ["爱"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我爱我的家。",
      en: "I love my family.",
      ru: "Я люблю свою семью.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:ai4}} {{word:hai2}}-{{word:zi}}.",
      hanzi: "妈妈爱孩子。",
      en: "Mom loves her children.",
      ru: "Мама любит детей.",
    },
  ],
});
