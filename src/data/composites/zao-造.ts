import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1217,
  phase: 3,
  zh: "造",
  py: "zào",
  en: "make",
  ru: "делать, создавать",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  topics: ["building-and-producing"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:che1}}.",
      hanzi: "他做车。",
      en: "He builds cars.",
      ru: "Он строит машины.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:fang2}}-{{word:zi}}.",
      hanzi: "我做了一个房子。",
      en: "I built a house.",
      ru: "Я построил дом.",
    },
  ],
});
