import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 863,
  phase: 2,
  zh: "照顾",
  py: "zhàogù",
  en: "take care of",
  ru: "заботиться",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:hao3}} X"],
  tts: ["看好X"],
  literal: "watch over X",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:hao3}} {{word:hai2}}-{{word:zi}}.",
      hanzi: "我看好孩子。",
      en: "I take care of the child.",
      ru: "Я присматриваю за ребёнком.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:hao3}} {{word:ta1}}.",
      hanzi: "你看好他。",
      en: "You take care of him.",
      ru: "Ты присматриваешь за ним.",
    },
  ],
});
