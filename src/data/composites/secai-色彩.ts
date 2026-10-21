import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1183,
  phase: 3,
  zh: "色彩",
  py: "sècǎi",
  en: "color",
  ru: "цвет, краска",
  pos: "noun",
  hsd: ["{{word:yan2se4}}"],
  tts: ["颜色"],
  fit: "word",
  topics: ["colours"],
  isA: ["colour-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}}-{{light:ge4}} {{word:yan2se4}}.",
      hanzi: "我爱这个颜色。",
      en: "I love this color.",
      ru: "Я люблю этот цвет.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "你要什么颜色？",
      en: "What color do you want?",
      ru: "Какой цвет ты хочешь?",
    },
  ],
});
