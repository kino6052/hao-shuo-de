import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 102,
  phase: 1,
  zh: "国家",
  py: "guójiā",
  en: "country",
  ru: "страна",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:jia1}}", "{{word:guo2}}"],
  tts: ["国家", "国"],
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["country-and-nation"],
  isA: ["settlement"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:qu4}} {{word:guo4}} {{word:na3}}-{{word:xie1}} {{word:guo2}}-{{word:jia1}}?",
      hanzi: "你去过哪些国家？",
      en: "Which countries have you been to?",
      ru: "В каких странах ты был?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:guo2}}-{{word:jia1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个国家很大。",
      en: "This country is big.",
      ru: "Эта страна большая.",
    },
  ],
});
