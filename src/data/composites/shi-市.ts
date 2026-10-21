import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 642,
  phase: 2,
  zh: "市",
  py: "shì",
  en: "city",
  ru: "город",
  pos: "noun",
  hsd: [
    "{{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:jia1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["国家里的地方", "有很多的家的地方"],
  literal: "the place with very many homes",
  fit: "plain",
  topics: ["cities-towns-and-provinces"],
  isA: ["settlement"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:jia1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我们去有很多的家的地方。",
      en: "We're going to the city.",
      ru: "Мы едем в город.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:jia1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "有很多的家的地方很大。",
      en: "The city is big.",
      ru: "Город большой.",
    },
  ],
});
