import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1397,
  phase: 3,
  zh: "缺点",
  py: "quēdiǎn",
  en: "shortcoming",
  ru: "недостаток",
  pos: "noun",
  hsd: ["{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["不好的地方"],
  literal: "the bad points",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我有不好的地方。",
      en: "I have shortcomings.",
      ru: "У меня есть недостатки.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他有很多不好的地方。",
      en: "He has many shortcomings.",
      ru: "У него много недостатков.",
    },
  ],
});
