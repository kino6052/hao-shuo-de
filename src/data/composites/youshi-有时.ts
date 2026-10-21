import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 856,
  phase: 2,
  zh: "有时",
  py: "yǒushí",
  en: "sometimes",
  ru: "иногда",
  pos: "adverb",
  hsd: ["{{word:you3}}-{{word:shi2}}", "{{word:you3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["有时", "有的时间"],
  literal: "some of the time",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["sometimes-rarely-and-never"],
  isA: ["frequency"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}}-{{word:shi2}} {{word:lai2}}.",
      hanzi: "我有时来。",
      en: "Sometimes I come.",
      ru: "Иногда я прихожу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}}-{{word:shi2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他有时不来。",
      en: "Sometimes he doesn't come.",
      ru: "Иногда он не приходит.",
    },
  ],
});
