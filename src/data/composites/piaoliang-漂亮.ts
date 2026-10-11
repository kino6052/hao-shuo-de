import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 435,
  phase: 1,
  zh: "漂亮",
  py: "piàoliang",
  en: "beautiful",
  ru: "красивый",
  pos: "adjective",
  hsd: ["{{word:hao3}}-{{word:kan4}}"],
  tts: ["好看"],
  literal: "good to look at",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zhen1}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "你真好看。",
      en: "You're beautiful.",
      ru: "Ты красивая.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang2}}-{{word:zi}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "这个房子很好看。",
      en: "This house is beautiful.",
      ru: "Этот дом красивый.",
    },
  ],
});
