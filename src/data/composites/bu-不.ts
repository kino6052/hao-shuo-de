import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 2,
  phase: 1,
  zh: "不",
  py: "bù",
  en: "not",
  ru: "не",
  pos: "adverb",
  hsd: ["{{word:bu4}}"],
  tts: ["不"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "我不吃。",
      en: "I'm not eating.",
      ru: "Я не ем.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "这个不好。",
      en: "This isn't good.",
      ru: "Это нехорошо.",
    },
  ],
});
