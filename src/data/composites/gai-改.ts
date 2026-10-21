import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 759,
  phase: 2,
  zh: "改",
  py: "gǎi",
  en: "change, correct",
  ru: "исправить",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["做的不一样"],
  literal: "make it different",
  fit: "natural",
  topics: ["becoming-and-turning-into"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我把这个做的不一样。",
      en: "I changed this.",
      ru: "Я изменил это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:shu1}} {{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他把书做的不一样。",
      en: "He changed the book.",
      ru: "Он изменил книгу.",
    },
  ],
});
