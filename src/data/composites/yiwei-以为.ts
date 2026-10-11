import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 736,
  phase: 2,
  zh: "以为",
  py: "yǐwéi",
  en: "think (wrongly)",
  ru: "думать (ошибочно)",
  pos: "verb",
  hsd: ["{{word:xiang3}}"],
  tts: ["想"],
  literal: "feel, think",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:ta1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我想他在家。",
      en: "I thought he was at home.",
      ru: "Я думал, он дома.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:shui3}}.",
      hanzi: "我想这个是水。",
      en: "I thought this was water.",
      ru: "Я думал, это вода.",
    },
  ],
});
