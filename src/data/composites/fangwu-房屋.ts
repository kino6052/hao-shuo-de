import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1337,
  phase: 3,
  zh: "房屋",
  py: "fángwū",
  en: "house",
  ru: "дом, здание",
  pos: "noun",
  hsd: ["{{word:jia1}}"],
  tts: ["家"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jia1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个家很大。",
      en: "This house is big.",
      ru: "Этот дом большой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mai3}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:jia1}}.",
      hanzi: "他买了一个家。",
      en: "He bought a house.",
      ru: "Он купил дом.",
    },
  ],
});
