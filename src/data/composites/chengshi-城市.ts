import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 273,
  phase: 1,
  zh: "城市",
  py: "chéngshì",
  en: "city",
  ru: "город",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["国家里的地方"],
  literal: "a place in a country",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个国家里的地方很大。",
      en: "This city is big.",
      ru: "Этот город большой.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:na3}}-{{light:ge4}} {{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}?",
      hanzi: "你在哪个国家里的地方？",
      en: "Which city are you in?",
      ru: "В каком ты городе?",
    },
  ],
});
