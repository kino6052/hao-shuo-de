import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1287,
  phase: 3,
  zh: "同时",
  py: "tóngshí",
  en: "at the same time",
  ru: "одновременно",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["一样的时间"],
  literal: "at the same time",
  fit: "plain",
  topics: ["now-and-recently"],
  isA: ["time-order"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zai4}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:lai2}}.",
      hanzi: "我们在一样的时间来。",
      en: "We came at the same time.",
      ru: "Мы пришли одновременно.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:qu4}}.",
      hanzi: "他们一样的时间去。",
      en: "They go at the same time.",
      ru: "Они уходят в одно время.",
    },
  ],
});
