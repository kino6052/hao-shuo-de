import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1005,
  phase: 3,
  zh: "业务",
  py: "yèwù",
  en: "business, work",
  ru: "дела",
  pos: "noun",
  hsd: ["{{word:yao4}} {{word:zuo4}}-{{word:de}}"],
  tts: ["要做的"],
  literal: "what is to be done",
  fit: "plain",
  topics: ["business-and-economy"],
  isA: ["activity-name"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:yao4}} {{word:zuo4}}-{{word:de}}.",
      hanzi: "这是我要做的。",
      en: "This is my business.",
      ru: "Это моё дело.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他要做的很多。",
      en: "He has a lot of business.",
      ru: "У него много дел.",
    },
  ],
});
