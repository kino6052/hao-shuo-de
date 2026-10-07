import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 176,
  phase: 1,
  zh: "房子",
  py: "fángzi",
  en: "house",
  ru: "дом",
  pos: "noun",
  hsd: ["{{word:fang2}}-{{light:zi}}", "{{word:jia1}}"],
  tts: ["房子", "家"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:fang2}}-{{word:zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的房子很大。",
      en: "His house is big.",
      ru: "У него большой дом.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:mai3}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:fang2}}-{{word:zi}}.",
      hanzi: "我们买了一个房子。",
      en: "We bought a house.",
      ru: "Мы купили дом.",
    },
  ],
});
