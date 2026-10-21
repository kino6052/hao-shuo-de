import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1492,
  phase: 3,
  zh: "广场",
  py: "guǎngchǎng",
  en: "square, plaza",
  ru: "площадь",
  pos: "noun",
  hsd: [
    "{{word:ren2}}-{{word:duo1}}-{{word:de}} {{word:kong1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["人多的空的地方"],
  literal: "an open place with many people",
  fit: "plain",
  topics: ["places-in-town"],
  isA: ["outdoor-place"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ren2}}-{{word:duo1}}-{{word:de}} {{word:kong1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我在人多的空的地方。",
      en: "I am in the square.",
      ru: "Я на площади.",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:duo1}}-{{word:de}} {{word:kong1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "人多的空的地方很大。",
      en: "The square is big.",
      ru: "Площадь большая.",
    },
  ],
});
