import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 604,
  phase: 2,
  zh: "产生",
  py: "chǎnshēng",
  en: "produce",
  ru: "производить",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:chu1}}"],
  tts: ["做出"],
  literal: "make come out",
  fit: "plain",
  topics: ["appearing-and-developing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:chu1}} {{word:yi1}}-{{light:ge4}} {{word:hao3}} {{word:xiang3}}-{{word:fa3}}.",
      hanzi: "他做出一个好想法。",
      en: "He came up with a good idea.",
      ru: "Он придумал хорошую идею.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:zuo4}}-{{word:chu1}} {{word:hen3}}-{{word:duo1}} {{word:shui3}}.",
      hanzi: "这里做出很多水。",
      en: "This place produces a lot of water.",
      ru: "Здесь получается много воды.",
    },
  ],
});
