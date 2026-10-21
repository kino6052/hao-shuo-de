import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 861,
  phase: 2,
  zh: "游",
  py: "yóu",
  en: "swim",
  ru: "плавать",
  pos: "verb",
  hsd: ["{{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:wan2r}}", "{{word:guo4}}-{{word:shui3}}"],
  tts: ["在水里玩儿", "过水"],
  literal: "play in the water / cross the water",
  fit: "plain",
  topics: ["sports"],
  isA: ["moving-action"],
  note: "Same as 游泳.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:wan2r}}.",
      hanzi: "我在水里玩儿。",
      en: "I swim.",
      ru: "Я плаваю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:guo4}}-{{word:shui3}}.",
      hanzi: "他过水。",
      en: "He swims across.",
      ru: "Он переплывает.",
    },
  ],
});
