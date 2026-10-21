import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 650,
  phase: 2,
  zh: "总",
  py: "zǒng",
  en: "always",
  ru: "всегда",
  pos: "adverb",
  hsd: ["{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} …"],
  tts: ["什么时间都"],
  literal: "at any time",
  fit: "natural",
  topics: ["always-and-all-along"],
  isA: ["frequency"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:lai2}}.",
      hanzi: "他什么时间都来。",
      en: "He always comes.",
      ru: "Он приходит всегда.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "什么时间都很好。",
      en: "Any time is fine.",
      ru: "Любое время подходит.",
    },
  ],
});
