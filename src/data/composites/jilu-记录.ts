import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1198,
  phase: 3,
  zh: "记录",
  py: "jìlù",
  en: "record",
  ru: "записывать, запись",
  pos: "verb",
  hsd: ["{{word:xie3}}-{{word:xia4}}-{{word:lai2}}"],
  tts: ["写下来"],
  literal: "write it down",
  fit: "plain",
  topics: ["writing-things-down"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xie3}}-{{word:xia4}}-{{word:lai2}}.",
      hanzi: "我写下来。",
      en: "I record it.",
      ru: "Я записываю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xie3}}-{{word:xia4}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他写下来了。",
      en: "He recorded it.",
      ru: "Он записал.",
    },
  ],
});
