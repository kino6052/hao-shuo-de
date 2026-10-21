import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1097,
  phase: 3,
  zh: "成立",
  py: "chénglì",
  en: "be founded",
  ru: "основываться",
  pos: "verb",
  hsd: ["{{word:shi4}} X {{word:shi2}}-{{word:jian1}} {{word:kai1shi3}}-{{word:de}}"],
  tts: ["是X时间开始的"],
  literal: "it began at time X",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:jin1}}-{{word:tian1}} {{word:shi2}}-{{word:jian1}} {{word:kai1shi3}}-{{word:de}}.",
      hanzi: "这个是今天时间开始的。",
      en: "This was founded today.",
      ru: "Это основано сегодня.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:shi4}} {{word:ming2}}-{{word:tian1}} {{word:shi2}}-{{word:jian1}} {{word:kai1shi3}}-{{word:de}}.",
      hanzi: "那个是明天时间开始的。",
      en: "That will be founded tomorrow.",
      ru: "То будет основано завтра.",
    },
  ],
});
