import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1195,
  phase: 3,
  zh: "解释",
  py: "jiěshì",
  en: "explain",
  ru: "объяснять",
  pos: "verb",
  hsd: ["{{word:shuo1}}-{{word:ming2}}"],
  tts: ["说明"],
  literal: "say it clearly",
  fit: "natural",
  topics: ["explaining-and-describing"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}-{{word:ming2}}.",
      hanzi: "我说明。",
      en: "I explain.",
      ru: "Я объясняю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:ming2}} {{word:ma}}?",
      hanzi: "你说明吗？",
      en: "Will you explain?",
      ru: "Ты объяснишь?",
    },
  ],
});
