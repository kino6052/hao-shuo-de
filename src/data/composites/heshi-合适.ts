import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1286,
  phase: 3,
  zh: "合适",
  py: "héshì",
  en: "suitable",
  ru: "подходящий",
  pos: "adjective",
  hsd: ["{{word:dui4}} X {{word:hao3}}", "{{word:bu4}} {{word:da4}} {{word:bu4}} {{word:xiao3}}"],
  tts: ["对X好", "不大不小"],
  literal: "good for X / not big, not small",
  fit: "plain",
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dui4}} {{word:wo3}} {{word:hao3}}.",
      hanzi: "这个对我好。",
      en: "This suits me.",
      ru: "Это мне подходит.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:yi1fu}} {{word:bu4}} {{word:da4}} {{word:bu4}} {{word:xiao3}}.",
      hanzi: "这衣服不大不小。",
      en: "This coat fits just right.",
      ru: "Эта одежда как раз по размеру.",
    },
  ],
});
