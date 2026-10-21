import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 999,
  phase: 2,
  zh: "资源",
  py: "zīyuán",
  en: "resources",
  ru: "ресурсы",
  pos: "noun",
  hsd: ["{{word:you3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["有用的东西"],
  literal: "useful things",
  fit: "plain",
  topics: ["money-wealth-and-value"],
  isA: ["material"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:you3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有有用的东西。",
      en: "I have resources.",
      ru: "У меня есть ресурсы.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "有用的东西很多。",
      en: "There are many resources.",
      ru: "Ресурсов много.",
    },
  ],
});
