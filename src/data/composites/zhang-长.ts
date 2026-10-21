import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 907,
  phase: 2,
  zh: "长",
  py: "zhǎng",
  en: "grow",
  ru: "расти",
  pos: "verb",
  hsd: ["{{word:bian4}} {{word:da4}}"],
  tts: ["变大"],
  literal: "get bigger",
  fit: "natural",
  topics: ["increasing-and-rising"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}} {{word:bian4}} {{word:da4}} {{word:le}}.",
      hanzi: "这个动物变大了。",
      en: "This animal has grown.",
      ru: "Это животное выросло.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bian4}} {{word:da4}} {{word:le}}.",
      hanzi: "你变大了。",
      en: "You've grown.",
      ru: "Ты вырос.",
    },
  ],
});
