import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1299,
  phase: 3,
  zh: "地点",
  py: "dìdiǎn",
  en: "location",
  ru: "место",
  pos: "noun",
  hsd: ["{{word:di4}}-{{light:fang1}}", "{{word:di4}}-{{word:dian3}}"],
  tts: ["地方", "地点"],
  literal: "ground point",
  fit: "natural",
  kinds: ["built", "spelled"],
  topics: ["place-location-and-space"],
  isA: ["place-word"],
  note: "Real Mandarin: 地点.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{word:dian3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个地点很好。",
      en: "This location is good.",
      ru: "Это место хорошее.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:di4}}-{{word:dian3}} {{word:ma}}?",
      hanzi: "你知道地点吗？",
      en: "Do you know the location?",
      ru: "Ты знаешь место?",
    },
  ],
});
