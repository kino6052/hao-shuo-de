import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1270,
  phase: 3,
  zh: "区",
  py: "qū",
  en: "district",
  ru: "район",
  pos: "noun",
  hsd: ["{{word:di4}}-{{light:fang1}}"],
  tts: ["地方"],
  fit: "word",
  topics: ["cities-towns-and-provinces"],
  isA: ["place"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个地方很大。",
      en: "This district is big.",
      ru: "Этот район большой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:zai4}} {{word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我家在这个地方。",
      en: "My home is in this district.",
      ru: "Мой дом в этом районе.",
    },
  ],
});
