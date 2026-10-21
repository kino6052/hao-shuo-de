import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1231,
  phase: 3,
  zh: "不断",
  py: "búduàn",
  en: "constantly",
  ru: "постоянно",
  pos: "verb",
  hsd: ["{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} …"],
  tts: ["什么时间都"],
  literal: "at any time",
  fit: "plain",
  topics: ["how-often"],
  isA: ["frequency"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}} {{word:shuo1}}.",
      hanzi: "他什么时间都在说。",
      en: "He talks all the time.",
      ru: "Он говорит не умолкая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}} {{word:xue2}}.",
      hanzi: "我什么时间都在学。",
      en: "I'm studying constantly.",
      ru: "Я учусь постоянно.",
    },
  ],
});
