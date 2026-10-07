import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 107,
  phase: 1,
  zh: "最",
  py: "zuì",
  en: "most",
  ru: "самый",
  pos: "adverb",
  hsd: ["{{word:zui4}}"],
  tts: ["最"],
  fit: "word",
  note: "Lesson {{lesson:comparing}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zui4}} {{word:gao1}}.",
      hanzi: "他最高。",
      en: "He's the tallest.",
      ru: "Он самый высокий.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zui4}} {{word:ai4}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我最爱水果。",
      en: "I love fruit most of all.",
      ru: "Больше всего я люблю фрукты.",
    },
  ],
});
