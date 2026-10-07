import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 48,
  phase: 1,
  zh: "地方",
  py: "dìfang",
  en: "a place",
  ru: "место",
  pos: "noun",
  hsd: ["{{word:di4}}-{{light:fang1}}"],
  tts: ["地方"],
  fit: "natural",
  transparent: true,
  role: "noun",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个地方很好。",
      en: "This place is nice.",
      ru: "Это хорошее место.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:shen2me}} {{word:di4}}-{{light:fang1}}?",
      hanzi: "你在什么地方？",
      en: "Where are you?",
      ru: "Где ты?",
    },
  ],
});
