import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 850,
  phase: 2,
  zh: "掉",
  py: "diào",
  en: "fall, drop",
  ru: "падать",
  pos: "verb",
  hsd: ["{{word:dao4}} {{word:di4}}-{{word:shang4}}"],
  tts: ["到地上"],
  literal: "reach the floor",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:shu1}} {{word:dao4}} {{word:di4}}-{{word:shang4}} {{word:le}}.",
      hanzi: "书到地上了。",
      en: "The book fell.",
      ru: "Книга упала.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:dao4}} {{word:di4}}-{{word:shang4}} {{word:le}}.",
      hanzi: "水到地上了。",
      en: "The water fell on the floor.",
      ru: "Вода пролилась на пол.",
    },
  ],
});
