import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 154,
  phase: 1,
  zh: "哪",
  py: "nǎ",
  en: "which",
  ru: "какой",
  pos: "pronoun",
  hsd: ["{{word:na3}}", "{{word:shen2me}}"],
  tts: ["哪", "什么"],
  fit: "word",
  note: "shénme also means \"which\".",
  examples: [
    {
      pinyin: "{{Word:na3}}-{{light:ge4}} {{word:shi4}} {{word:ni3}}-{{word:de}}?",
      hanzi: "哪个是你的？",
      en: "Which one is yours?",
      ru: "Который твой?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:na3}} {{word:yi1}}-{{light:ge4}}?",
      hanzi: "你要哪一个？",
      en: "Which one do you want?",
      ru: "Какой ты хочешь?",
    },
  ],
});
