import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1182,
  phase: 3,
  zh: "至少",
  py: "zhìshǎo",
  en: "at least",
  ru: "по крайней мере",
  pos: "adverb",
  hsd: ["{{word:zui4}} {{word:shao3}}"],
  tts: ["最少"],
  literal: "least",
  fit: "natural",
  topics: ["a-little-and-rather"],
  isA: ["degree-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zui4}} {{word:shao3}} {{word:mai3}} {{word:san1}}-{{light:ge4}}.",
      hanzi: "我最少买三个。",
      en: "I buy at least three.",
      ru: "Я куплю как минимум три.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zui4}} {{word:shao3}} {{word:yao4}} {{word:liang3}}-{{light:ge4}}.",
      hanzi: "他最少要两个。",
      en: "He wants at least two.",
      ru: "Ему нужно как минимум два.",
    },
  ],
});
