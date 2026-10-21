import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1063,
  phase: 3,
  zh: "国际",
  py: "guójì",
  en: "international",
  ru: "международный",
  pos: "adjective",
  hsd: ["{{word:hen3}}-{{word:duo1}}-{{word:guo2}}-{{word:de}}"],
  tts: ["很多国的"],
  literal: "of many countries",
  fit: "plain",
  topics: ["countries-and-cities"],
  isA: ["place-relation"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hen3}}-{{word:duo1}}-{{word:guo2}}-{{word:de}}.",
      hanzi: "这是很多国的。",
      en: "This is international.",
      ru: "Это международное.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hen3}}-{{word:duo1}}-{{word:guo2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我爱很多国的东西。",
      en: "I love international things.",
      ru: "Я люблю международное.",
    },
  ],
});
