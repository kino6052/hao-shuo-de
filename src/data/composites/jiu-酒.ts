import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 903,
  phase: 2,
  zh: "酒",
  py: "jiǔ",
  en: "alcohol",
  ru: "алкоголь",
  pos: "noun",
  hsd: ["{{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}"],
  tts: ["让头变乱的水"],
  literal: "water that makes your head messy",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:he1}} {{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}.",
      hanzi: "我不喝让头变乱的水。",
      en: "I don't drink alcohol.",
      ru: "Я не пью алкоголь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}.",
      hanzi: "他要让头变乱的水。",
      en: "He wants a drink.",
      ru: "Он хочет выпить.",
    },
  ],
});
