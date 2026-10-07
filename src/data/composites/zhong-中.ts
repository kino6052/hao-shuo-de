import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 289,
  phase: 1,
  zh: "中",
  py: "zhōng",
  en: "middle",
  ru: "середина",
  pos: "noun",
  hsd: ["{{word:zhong1}}"],
  tts: ["中"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "他在中间。",
      en: "He's in the middle.",
      ru: "Он посередине.",
    },
    {
      pinyin: "{{Word:zai4}} {{word:liang3}}-{{light:ge4}} {{word:fang2}}-{{word:zi}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "在两个房子中间。",
      en: "Between the two houses.",
      ru: "Между двумя домами.",
    },
  ],
});
