import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 634,
  phase: 2,
  zh: "基本",
  py: "jīběn",
  en: "basic; basically",
  ru: "основной; в основном",
  pos: "adjective",
  hsd: ["{{word:da4}} {{word:bu4}}-{{light:fen1}}"],
  tts: ["大部分"],
  literal: "for the most part",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:ren2}} {{word:dou1}} {{word:lai2}}.",
      hanzi: "大部分人都来。",
      en: "Most people are coming.",
      ru: "Приходит большинство людей.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:shui3}} {{word:shi4}} {{word:re4}}-{{word:de}}.",
      hanzi: "大部分水是热的。",
      en: "Most of the water is hot.",
      ru: "Большая часть воды горячая.",
    },
  ],
});
