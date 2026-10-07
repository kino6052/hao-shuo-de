import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 219,
  phase: 1,
  zh: "错",
  py: "cuò",
  en: "wrong",
  ru: "неправильный",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:dui4}}"],
  tts: ["不对"],
  literal: "not right",
  fit: "natural",
  note: "duì also means \"right\".",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "你说得不对。",
      en: "What you said is wrong.",
      ru: "Ты неправ.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zi4}} {{word:xie3}}-{{word:de}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "这个字写得不对。",
      en: "This character is written wrong.",
      ru: "Этот иероглиф написан неправильно.",
    },
  ],
});
