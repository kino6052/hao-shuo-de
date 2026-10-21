import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 512,
  phase: 2,
  zh: "墙",
  py: "qiáng",
  en: "wall",
  ru: "стена",
  pos: "noun",
  hsd: [
    "{{word:fang2}}-{{word:jian1}}-{{word:de}} {{word:ying4}}-{{word:de}} {{word:mian4}}",
    "{{word:ying4}}-{{word:de}} {{word:bian1}}",
  ],
  tts: ["房间的硬的面", "硬的边"],
  literal: "the hard face of a room / a hard edge",
  fit: "plain",
  topics: ["house-and-doors"],
  isA: ["building-part"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mo1}} {{word:fang2}}-{{word:jian1}}-{{word:de}} {{word:ying4}}-{{word:de}} {{word:mian4}}.",
      hanzi: "我摸房间的硬的面。",
      en: "I touch the wall.",
      ru: "Я трогаю стену.",
    },
    {
      pinyin: "{{Word:fang2}}-{{word:jian1}}-{{word:de}} {{word:ying4}}-{{word:de}} {{word:mian4}} {{word:shi4}} {{word:bai2}}-{{word:de}}.",
      hanzi: "房间的硬的面是白的。",
      en: "The wall is white.",
      ru: "Стена белая.",
    },
  ],
});
