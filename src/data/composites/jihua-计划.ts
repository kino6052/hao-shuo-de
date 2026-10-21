import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 703,
  phase: 2,
  zh: "计划",
  py: "jìhuà",
  en: "plan",
  ru: "план",
  pos: "noun",
  hsd: ["{{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:fang1}}-{{word:fa3}}"],
  tts: ["要做的方法"],
  literal: "the way you're going to do it",
  fit: "plain",
  topics: ["plans-and-goals"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我有要做的方法。",
      en: "I have a plan.",
      ru: "У меня есть план.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:fang1}}-{{word:fa3}} {{word:ma}}?",
      hanzi: "你有要做的方法吗？",
      en: "Do you have a plan?",
      ru: "У тебя есть план?",
    },
  ],
});
