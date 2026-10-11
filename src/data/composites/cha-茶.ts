import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 464,
  phase: 1,
  zh: "茶",
  py: "chá",
  en: "tea",
  ru: "чай",
  pos: "noun",
  hsd: ["{{word:zhi2wu4}}-{{word:de}} {{word:re4}}-{{word:shui3}}"],
  tts: ["植物的热水"],
  literal: "plant hot water",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:he1}} {{word:zhi2wu4}}-{{word:de}} {{word:re4}}-{{word:shui3}} {{word:ma}}?",
      hanzi: "你喝植物的热水吗？",
      en: "Would you like some tea?",
      ru: "Будешь чай?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:he1}} {{word:zhi2wu4}}-{{word:de}} {{word:re4}}-{{word:shui3}}.",
      hanzi: "我爱喝植物的热水。",
      en: "I love drinking tea.",
      ru: "Я люблю пить чай.",
    },
  ],
});
