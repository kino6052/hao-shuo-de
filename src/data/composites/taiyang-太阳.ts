import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 165,
  phase: 1,
  zh: "太阳",
  py: "tàiyáng",
  en: "sun",
  ru: "солнце",
  pos: "noun",
  hsd: ["{{word:ri4}}"],
  tts: ["日"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ri4}} {{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "日出来了。",
      en: "The sun has come out.",
      ru: "Вышло солнце.",
    },
    {
      pinyin: "{{Word:ri4}} {{word:hen3}} {{word:re4}}.",
      hanzi: "日很热。",
      en: "The sun is hot.",
      ru: "Солнце жаркое.",
    },
  ],
});
