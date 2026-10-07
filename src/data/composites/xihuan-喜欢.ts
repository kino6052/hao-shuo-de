import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 81,
  phase: 1,
  zh: "喜欢",
  py: "xǐhuan",
  en: "like",
  ru: "нравиться",
  pos: "verb",
  hsd: ["{{word:ai4}}", "{{word:jue2}}-{{light:de2}} X {{word:hao3}}"],
  tts: ["爱", "觉得X好"],
  literal: "love / find X good",
  fit: "word",
  note: "ài is strong for everyday liking; jué-de X hǎo (find X good) is the softer, everyday like.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我爱这个地方。",
      en: "I love this place.",
      ru: "Я люблю это место.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我觉得这个很好。",
      en: "I like this one.",
      ru: "Мне это нравится.",
    },
  ],
});
