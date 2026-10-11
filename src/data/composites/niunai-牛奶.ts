import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 439,
  phase: 1,
  zh: "牛奶",
  py: "niúnǎi",
  en: "milk",
  ru: "молоко",
  pos: "noun",
  hsd: ["{{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bai2}}-{{word:se4}}-{{word:de}} {{word:shui3}}"],
  tts: ["动物的白色的水"],
  literal: "animals' white water",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:he1}} {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bai2}}-{{word:se4}}-{{word:de}} {{word:shui3}}.",
      hanzi: "孩子喝动物的白色的水。",
      en: "The child drinks milk.",
      ru: "Ребёнок пьёт молоко.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:le}} {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:bai2}}-{{word:se4}}-{{word:de}} {{word:shui3}}.",
      hanzi: "我买了动物的白色的水。",
      en: "I bought milk.",
      ru: "Я купил молоко.",
    },
  ],
});
