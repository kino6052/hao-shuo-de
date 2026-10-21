import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 633,
  phase: 2,
  zh: "城",
  py: "chéng",
  en: "city, town",
  ru: "город",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["国家里的地方"],
  literal: "a place in the country",
  fit: "plain",
  topics: ["countries-and-cities"],
  isA: ["settlement"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我的家在国家里的地方。",
      en: "My home is in the city.",
      ru: "Мой дом в городе.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qu4}} {{word:guo2}}-{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他去国家里的地方。",
      en: "He's going to town.",
      ru: "Он едет в город.",
    },
  ],
});
