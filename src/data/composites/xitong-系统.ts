import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 994,
  phase: 2,
  zh: "系统",
  py: "xìtǒng",
  en: "system",
  ru: "система",
  pos: "noun",
  hsd: [
    "{{word:you3}}-{{word:duo1}}-{{word:bu4}}-{{light:fen1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["有多部分的东西"],
  literal: "a thing with many parts",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:you3}}-{{word:duo1}}-{{word:bu4}}-{{light:fen1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个有多部分的东西很大。",
      en: "This system is big.",
      ru: "Эта система большая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:zhi1dao4}} {{word:you3}}-{{word:duo1}}-{{word:bu4}}-{{light:fen1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我想知道有多部分的东西。",
      en: "I want to understand the system.",
      ru: "Я хочу понять систему.",
    },
  ],
});
