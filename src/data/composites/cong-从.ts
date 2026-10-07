import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 137,
  phase: 1,
  zh: "从",
  py: "cóng",
  en: "from",
  ru: "от",
  pos: "preposition",
  hsd: ["{{word:cong2}}"],
  tts: ["从"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:cong2}} {{word:na3}}-{{word:li3}} {{word:lai2}}?",
      hanzi: "你从哪里来？",
      en: "Where are you from?",
      ru: "Откуда ты?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:zou3}}-{{word:lu4}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "我从家走路去学校。",
      en: "I walk from home to school.",
      ru: "Я хожу из дома в школу пешком.",
    },
  ],
});
