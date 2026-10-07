import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 260,
  phase: 1,
  zh: "为",
  py: "wèi",
  en: "for",
  ru: "для",
  pos: "preposition",
  hsd: ["{{word:wei4}}", "{{word:gei3}}", "{{word:dui4}}"],
  tts: ["为", "给", "对"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:wei4}} {{word:ni3}} {{word:zuo4}} {{word:le}} {{word:fan4}}.",
      hanzi: "我为你做了饭。",
      en: "I cooked for you.",
      ru: "Я приготовил для тебя.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:gei3}} {{word:ni3}}.",
      hanzi: "这个给你。",
      en: "This is for you.",
      ru: "Это тебе.",
    },
  ],
});
