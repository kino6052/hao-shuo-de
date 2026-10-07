import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 197,
  phase: 1,
  zh: "睡觉",
  py: "shuìjiào",
  en: "sleep",
  ru: "спать",
  pos: "verb",
  hsd: ["{{word:shui4jiao4}}"],
  tts: ["睡觉"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shi2}} {{word:dian3}} {{word:shui4jiao4}}.",
      hanzi: "我十点睡觉。",
      en: "I go to bed at ten.",
      ru: "Я ложусь спать в десять.",
    },
    {
      pinyin: "{{Word:shui4jiao4}} {{word:qian2}} {{word:bie2}} {{word:chi1}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "睡觉前别吃东西。",
      en: "Don't eat before bed.",
      ru: "Не ешь перед сном.",
    },
  ],
});
