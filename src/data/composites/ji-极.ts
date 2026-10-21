import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 669,
  phase: 2,
  zh: "极",
  py: "jí",
  en: "extremely",
  ru: "крайне",
  pos: "adverb",
  hsd: ["{{word:hen3}}-{{word:hen3}}"],
  tts: ["很很"],
  literal: "very very",
  fit: "plain",
  topics: ["degree-words"],
  isA: ["degree-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}}-{{word:hen3}} {{word:hao3}}.",
      hanzi: "他很很好。",
      en: "He is extremely good.",
      ru: "Он чрезвычайно хорош.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:hen3}}-{{word:hen3}} {{word:re4}}.",
      hanzi: "这里很很热。",
      en: "It's extremely hot here.",
      ru: "Здесь невероятно жарко.",
    },
  ],
});
