import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 675,
  phase: 2,
  zh: "毕业",
  py: "bìyè",
  en: "graduate",
  ru: "окончить учёбу",
  pos: "verb",
  hsd: ["{{word:xue2}}-{{word:wan2}} {{word:le}}"],
  tts: ["学完了"],
  literal: "finished learning",
  fit: "natural",
  topics: ["studying"],
  isA: ["life-change"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xue2}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我学完了。",
      en: "I've graduated.",
      ru: "Я закончил учёбу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xue2}}-{{word:wan2}} {{word:le}} {{word:zhong1}}-{{word:xue2}}.",
      hanzi: "他学完了中学。",
      en: "He has finished middle school.",
      ru: "Он закончил среднюю школу.",
    },
  ],
});
