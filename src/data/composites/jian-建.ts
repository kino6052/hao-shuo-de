import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 645,
  phase: 2,
  zh: "建",
  py: "jiàn",
  en: "build",
  ru: "строить",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  literal: "make",
  fit: "plain",
  topics: ["making-and-doing"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:fang2}}-{{word:jian1}}.",
      hanzi: "他做了一个房间。",
      en: "He built a room.",
      ru: "Он построил комнату.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zuo4}} {{word:yi1}}-{{light:ge4}} {{word:jia1}}.",
      hanzi: "我要做一个家。",
      en: "I'm going to build a home.",
      ru: "Я построю дом.",
    },
  ],
});
