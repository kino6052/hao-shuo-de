import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 913,
  phase: 2,
  zh: "面包",
  py: "miànbāo",
  en: "bread",
  ru: "хлеб",
  pos: "noun",
  hsd: ["{{word:mian4}}-{{word:bao1}}", "{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["面包", "吃的东西"],
  literal: "food",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}} {{word:mian4}}-{{word:bao1}}.",
      hanzi: "我要吃面包。",
      en: "I want to eat bread.",
      ru: "Я хочу съесть хлеб.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:mian4}}-{{word:bao1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个面包很好。",
      en: "This bread is good.",
      ru: "Этот хлеб хороший.",
    },
  ],
});
