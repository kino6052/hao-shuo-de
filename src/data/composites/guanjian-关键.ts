import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1038,
  phase: 3,
  zh: "关键",
  py: "guānjiàn",
  en: "crux, key",
  ru: "ключевой момент",
  pos: "noun",
  hsd: [
    "{{word:zui4}} {{word:you3}} {{word:zhong4}}-{{word:yao4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["最有重要的部分"],
  literal: "the most important part",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zui4}} {{word:you3}} {{word:zhong4}}-{{word:yao4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "这是最有重要的部分。",
      en: "This is the key part.",
      ru: "Это ключевая часть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zui4}} {{word:you3}} {{word:zhong4}}-{{word:yao4}}-{{word:de}} {{word:bu4}}-{{light:fen1}} {{word:ma}}?",
      hanzi: "你知道最有重要的部分吗？",
      en: "Do you know the key part?",
      ru: "Ты знаешь ключевую часть?",
    },
  ],
});
