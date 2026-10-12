import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1111,
  phase: 3,
  zh: "数字",
  py: "shùzì",
  en: "digit, number",
  ru: "цифра, число",
  pos: "noun",
  hsd: ["{{word:shu4}}-{{word:zi4}}"],
  tts: ["数字"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:shu4}}-{{word:zi4}}.",
      hanzi: "我爱数字。",
      en: "I love numbers.",
      ru: "Я люблю цифры.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shu4}}-{{word:zi4}} {{word:shi4}} {{word:san1}}.",
      hanzi: "这个数字是三。",
      en: "This number is three.",
      ru: "Это число — три.",
    },
  ],
});
