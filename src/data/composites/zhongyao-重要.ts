import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 111,
  phase: 1,
  zh: "重要",
  py: "zhòngyào",
  en: "important",
  ru: "важный",
  pos: "adjective",
  hsd: ["{{word:zhong4}}-{{word:yao4}}", "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}}"],
  tts: ["重要", "很有价值"],
  literal: "very valuable",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:zhong4}}-{{word:yao4}}.",
      hanzi: "这个很重要。",
      en: "This is important.",
      ru: "Это важно.",
    },
    {
      pinyin: "{{Word:shen1ti3}} {{word:zui4}} {{word:zhong4}}-{{word:yao4}}.",
      hanzi: "身体最重要。",
      en: "Health comes first.",
      ru: "Здоровье важнее всего.",
    },
  ],
});
