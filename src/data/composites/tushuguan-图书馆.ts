import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 272,
  phase: 1,
  zh: "图书馆",
  py: "túshūguǎn",
  en: "library",
  ru: "библиотека",
  pos: "noun",
  hsd: [
    "{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:shu1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["有很多的书的地方"],
  literal: "the place with many books",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:shu1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "我去有很多的书的地方看书。",
      en: "I go to the library to read.",
      ru: "Я хожу в библиотеку читать.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:shu1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "有很多的书的地方在哪里？",
      en: "Where's the library?",
      ru: "Где библиотека?",
    },
  ],
});
