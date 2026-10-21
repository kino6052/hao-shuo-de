import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1114,
  phase: 3,
  zh: "整个",
  py: "zhěnggè",
  en: "whole, entire",
  ru: "весь, целый",
  pos: "adjective",
  hsd: ["X {{word:dou1}} …"],
  tts: ["X都"],
  literal: "all of X",
  fit: "plain",
  topics: ["all-and-some"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shu1}} {{word:dou1}} {{word:shi4}} {{word:wo3}}-{{word:de}}.",
      hanzi: "这书都是我的。",
      en: "The whole book is mine.",
      ru: "Вся книга моя.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jia1}} {{word:dou1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个家都很大。",
      en: "The whole home is big.",
      ru: "Весь дом большой.",
    },
  ],
});
