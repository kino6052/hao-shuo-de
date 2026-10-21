import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1066,
  phase: 3,
  zh: "基础",
  py: "jīchǔ",
  en: "basis, foundation",
  ru: "основа",
  pos: "noun",
  hsd: [
    "{{word:zui4}} {{word:xia4}}-{{word:mian4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
    "{{word:cong2}} {{word:ling2}} {{word:kai1shi3}}",
  ],
  tts: ["最下面的部分", "从零开始"],
  literal: "the lowest part / start from zero",
  fit: "plain",
  topics: ["ideas-and-opinions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zui4}} {{word:xia4}}-{{word:mian4}}-{{word:de}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "最下面的部分很大。",
      en: "The foundation is big.",
      ru: "Основа большая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:ling2}} {{word:kai1shi3}}.",
      hanzi: "我从零开始。",
      en: "I start from scratch.",
      ru: "Я начинаю с нуля.",
    },
  ],
});
