import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 307,
  phase: 1,
  zh: "得到",
  py: "dédào",
  en: "get",
  ru: "получать",
  pos: "verb",
  hsd: ["{{word:de2}}-{{word:dao4}}", "{{word:de2}}"],
  tts: ["得到", "得"],
  literal: "get-reach",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:de2}}-{{word:dao4}} {{word:le}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他得到了工作。",
      en: "He got the job.",
      ru: "Он получил работу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:de2}}-{{word:dao4}} {{word:le}} {{word:shen2me}}?",
      hanzi: "你得到了什么？",
      en: "What did you get?",
      ru: "Что ты получил?",
    },
  ],
});
