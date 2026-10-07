import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 341,
  phase: 1,
  zh: "上班",
  py: "shàngbān",
  en: "go to work",
  ru: "ходить на работу",
  pos: "verb",
  hsd: ["{{word:qu4}} {{word:gong1}}-{{word:zuo4}}"],
  tts: ["去工作"],
  literal: "go to work",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ba4ba}} {{word:ba1}} {{word:dian3}} {{word:qu4}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "爸爸八点去工作。",
      en: "Dad goes to work at eight.",
      ru: "Папа уходит на работу в восемь.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wo3}} {{word:bu4}} {{word:qu4}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "今天我不去工作。",
      en: "I'm not going to work today.",
      ru: "Сегодня я не иду на работу.",
    },
  ],
});
