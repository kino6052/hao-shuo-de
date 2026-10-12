import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1311,
  phase: 3,
  zh: "定",
  py: "dìng",
  en: "settle, fix",
  ru: "установить, решить",
  pos: "verb",
  hsd: ["{{word:ding4}}", "{{word:bu4}} {{word:bian4}} {{word:le}}"],
  tts: ["定", "不变了"],
  literal: "won't change anymore",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ding4}} {{word:le}}.",
      hanzi: "我定了。",
      en: "I've settled it.",
      ru: "Я решил.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:bian4}} {{word:le}}.",
      hanzi: "这个不变了。",
      en: "This is fixed now.",
      ru: "Это теперь не изменится.",
    },
  ],
});
