import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1058,
  phase: 3,
  zh: "品牌",
  py: "pǐnpái",
  en: "brand",
  ru: "бренд, марка",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ming2}}-{{light:zi4}}"],
  tts: ["东西的名字"],
  literal: "the name of a thing",
  fit: "plain",
  topics: ["business-and-economy"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ming2}}-{{word:zi4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个东西的名字很好。",
      en: "This brand is good.",
      ru: "Этот бренд хороший.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ming2}}-{{word:zi4}} {{word:ma}}?",
      hanzi: "你知道东西的名字吗？",
      en: "Do you know the brand?",
      ru: "Ты знаешь этот бренд?",
    },
  ],
});
