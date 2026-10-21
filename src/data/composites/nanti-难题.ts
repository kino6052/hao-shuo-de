import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1441,
  phase: 3,
  zh: "难题",
  py: "nántí",
  en: "hard problem",
  ru: "трудная задача",
  pos: "noun",
  hsd: [
    "{{word:nan2}}-{{word:ti2}}",
    "{{word:hen3}}-{{word:nan2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["难题", "很难的东西"],
  literal: "something very difficult",
  fit: "natural",
  topics: ["hard-and-difficult"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:nan2}}-{{word:ti2}}.",
      hanzi: "这是难题。",
      en: "This is a hard problem.",
      ru: "Это трудная задача.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hen3}}-{{word:nan2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是很难的东西。",
      en: "This is a very hard thing.",
      ru: "Это очень трудная вещь.",
    },
  ],
});
