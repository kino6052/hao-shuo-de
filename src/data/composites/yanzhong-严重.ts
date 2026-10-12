import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1006,
  phase: 3,
  zh: "严重",
  py: "yánzhòng",
  en: "serious",
  ru: "серьёзный",
  pos: "adjective",
  hsd: ["{{word:zhong4}}-{{word:yao4}}", "{{word:dui4}} X {{word:hen3}} {{word:zhong4}}-{{word:yao4}}"],
  tts: ["重要", "对X很重要"],
  literal: "important / important to X",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:hen3}} {{word:zhong4}}-{{word:yao4}}.",
      hanzi: "这很重要。",
      en: "This is serious.",
      ru: "Это серьёзно.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:zhong4}}-{{word:yao4}}.",
      hanzi: "这对我很重要。",
      en: "This is serious for me.",
      ru: "Для меня это серьёзно.",
    },
  ],
});
