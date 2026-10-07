import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 114,
  phase: 1,
  zh: "九",
  py: "jiǔ",
  en: "nine",
  ru: "девять",
  pos: "number",
  hsd: ["{{word:jiu3}}"],
  tts: ["九"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:jiu3}} {{word:dian3}} {{word:wo3}} {{word:shui4jiao4}}.",
      hanzi: "九点我睡觉。",
      en: "I go to bed at nine.",
      ru: "Я ложусь спать в девять.",
    },
    {
      pinyin: "{{Word:jiu3}}-{{light:ge4}} {{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:wan2r}}.",
      hanzi: "九个孩子在玩儿。",
      en: "Nine children are playing.",
      ru: "Девять детей играют.",
    },
  ],
});
