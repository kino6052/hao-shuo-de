import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1482,
  phase: 3,
  zh: "家乡",
  py: "jiāxiāng",
  en: "hometown",
  ru: "родные места",
  pos: "noun",
  hsd: ["{{word:sheng1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["生的地方"],
  literal: "the place you were born",
  fit: "plain",
  topics: ["cities-towns-and-provinces"],
  isA: ["place"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:sheng1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这是我生的地方。",
      en: "This is my hometown.",
      ru: "Это мой родной город.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:sheng1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你生的地方在哪里？",
      en: "Where is your hometown?",
      ru: "Где твой родной город?",
    },
  ],
});
