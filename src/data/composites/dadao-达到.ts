import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1211,
  phase: 3,
  zh: "达到",
  py: "dádào",
  en: "reach, achieve",
  ru: "достигать",
  pos: "verb",
  hsd: ["{{word:dao4}}"],
  tts: ["到"],
  fit: "word",
  topics: ["arriving-and-reaching"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:dao4}} {{word:le}} {{word:zui4}} {{word:gao1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他到了最高的地方。",
      en: "He reached the highest place.",
      ru: "Он добрался до самого высокого места.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:dao4}} {{word:le}} {{word:wo3}} {{word:xiang3}} {{word:dao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我到了我想到的地方。",
      en: "I reached the place I wanted to reach.",
      ru: "Я добрался туда, куда хотел.",
    },
  ],
});
