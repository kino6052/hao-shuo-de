import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 665,
  phase: 2,
  zh: "有名",
  py: "yǒumíng",
  en: "famous",
  ru: "знаменитый",
  pos: "adjective",
  hsd: [
    "{{word:you3}}-{{word:ming2}}",
    "{{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}}",
  ],
  tts: ["有名", "人人都知道的"],
  literal: "everyone knows it",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["clever-skilled-and-famous"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:you3}}-{{word:ming2}}.",
      hanzi: "他很有名。",
      en: "He is very famous.",
      ru: "Он очень известный.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:you3}}-{{word:ming2}}.",
      hanzi: "这个地方很有名。",
      en: "This place is famous.",
      ru: "Это место известно.",
    },
  ],
});
