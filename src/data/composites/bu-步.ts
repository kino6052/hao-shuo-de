import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 769,
  phase: 2,
  zh: "步",
  py: "bù",
  en: "step",
  ru: "шаг",
  pos: "noun",
  hsd: ["{{word:jiao3}} {{word:dong4}} {{word:yi1}}-{{word:ci4}}"],
  tts: ["脚动一次"],
  literal: "one move of the foot",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:dong4}} {{word:yi1}}-{{word:ci4}}.",
      hanzi: "我的脚动一次。",
      en: "My foot moves once, one step.",
      ru: "Моя нога двигается раз — шаг.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jiao3}} {{word:dong4}} {{word:yi1}}-{{word:ci4}}.",
      hanzi: "他的脚动一次。",
      en: "His foot moves once, one step.",
      ru: "Его нога двигается раз — шаг.",
    },
  ],
});
