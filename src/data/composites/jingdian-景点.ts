import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1510,
  phase: 3,
  zh: "景点",
  py: "jǐngdiǎn",
  en: "sight, scenic spot",
  ru: "достопримечательность",
  pos: "noun",
  hsd: ["{{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["好看的地方"],
  literal: "a beautiful place",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["place"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这是好看的地方。",
      en: "This is a scenic spot.",
      ru: "Это живописное место.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我爱好看的地方。",
      en: "I love scenic spots.",
      ru: "Я люблю живописные места.",
    },
  ],
});
