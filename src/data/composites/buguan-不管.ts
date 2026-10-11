import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 597,
  phase: 2,
  zh: "不管",
  py: "bùguǎn",
  en: "no matter",
  ru: "неважно",
  pos: "conjunction",
  hsd: ["{{word:shen2me}} … {{word:dou1}}"],
  tts: ["什么…都"],
  literal: "whatever … all",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:shen2me}} {{word:wo3}} {{word:dou1}} {{word:yao4}}.",
      hanzi: "什么我都要。",
      en: "No matter what, I want it.",
      ru: "Что бы это ни было, я хочу.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:ta1}} {{word:dou1}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "什么他都不怕。",
      en: "He's afraid of nothing.",
      ru: "Он ничего не боится.",
    },
  ],
});
