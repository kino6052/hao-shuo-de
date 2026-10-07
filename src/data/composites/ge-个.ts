import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 16,
  phase: 1,
  zh: "个",
  py: "gè",
  en: "universal classifier",
  ru: "универсальный классификатор",
  pos: "classifier",
  hsd: ["{{word:ge4}}"],
  tts: ["个"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:ren2}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "那个人是谁？",
      en: "Who is that person?",
      ru: "Кто тот человек?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:le}} {{word:liang3}}-{{light:ge4}}.",
      hanzi: "我买了两个。",
      en: "I bought two.",
      ru: "Я купил два.",
    },
  ],
});
