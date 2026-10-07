import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 52,
  phase: 1,
  zh: "家",
  py: "jiā",
  en: "home",
  ru: "дом",
  pos: "noun",
  hsd: ["{{word:jia1}}"],
  tts: ["家"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的家很小。",
      en: "My home is small.",
      ru: "Мой дом маленький.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "我要回家。",
      en: "I want to go home.",
      ru: "Я хочу домой.",
    },
  ],
});
