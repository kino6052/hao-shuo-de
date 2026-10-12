import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1501,
  phase: 3,
  zh: "感动",
  py: "gǎndòng",
  en: "moved, touched",
  ru: "растроганный",
  pos: "adjective",
  hsd: [
    "{{word:xin1}}-{{word:dong4}}",
    "{{word:rang4}} {{word:xin1}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:hao3}}",
  ],
  tts: ["心动", "让心觉得很好"],
  literal: "the heart moves / make the heart feel very good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xin1}}-{{word:dong4}} {{word:le}}.",
      hanzi: "我心动了。",
      en: "I am moved.",
      ru: "Я тронут.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:hua4}} {{word:rang4}} {{word:xin1}} {{word:jue2}}-{{word:de2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的话让心觉得很好。",
      en: "His words touch the heart.",
      ru: "Его слова трогают сердце.",
    },
  ],
});
