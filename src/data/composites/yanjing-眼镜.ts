import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 876,
  phase: 2,
  zh: "眼镜",
  py: "yǎnjìng",
  en: "glasses",
  ru: "очки",
  pos: "noun",
  hsd: ["{{word:bang1}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["帮人看的东西"],
  literal: "a thing that helps a person see",
  fit: "plain",
  topics: ["accessories"],
  isA: ["headwear-or-accessory"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:bang1}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有帮人看的东西。",
      en: "I have glasses.",
      ru: "У меня есть очки.",
    },
    {
      pinyin: "{{Word:bang1}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "帮人看的东西在家里。",
      en: "The glasses are at home.",
      ru: "Очки дома.",
    },
  ],
});
