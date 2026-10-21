import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1520,
  phase: 3,
  zh: "正好",
  py: "zhènghǎo",
  en: "just right",
  ru: "как раз",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:duo1}} {{word:bu4}} {{word:shao3}}"],
  tts: ["不多不少"],
  literal: "not too much, not too little",
  fit: "plain",
  topics: ["suitable-and-fair"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:duo1}} {{word:bu4}} {{word:shao3}}.",
      hanzi: "这个不多不少。",
      en: "This is just right.",
      ru: "Это как раз то, что нужно.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:bu4}} {{word:duo1}} {{word:bu4}} {{word:shao3}}.",
      hanzi: "水不多不少。",
      en: "The water is just right.",
      ru: "Воды в самый раз.",
    },
  ],
});
