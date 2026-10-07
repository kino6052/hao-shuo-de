import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 38,
  phase: 1,
  zh: "也",
  py: "yě",
  en: "also",
  ru: "тоже",
  pos: "adverb",
  hsd: ["{{word:ye3}}"],
  tts: ["也"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ye3}} {{word:yao4}}.",
      hanzi: "我也要。",
      en: "I want some too.",
      ru: "Я тоже хочу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ye3}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}}.",
      hanzi: "他也是学生。",
      en: "He's a student too.",
      ru: "Он тоже студент.",
    },
  ],
});
