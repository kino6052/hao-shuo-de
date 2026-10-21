import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1430,
  phase: 3,
  zh: "道理",
  py: "dàolǐ",
  en: "reason, principle",
  ru: "смысл, принцип",
  pos: "noun",
  hsd: [
    "{{word:dao4}}-{{word:li3}}",
    "{{word:wei4}}-{{word:shen2me}} {{word:shi4}} {{word:dui4}}-{{word:de}}",
  ],
  tts: ["道理", "为什么是对的"],
  literal: "why it's right",
  fit: "natural",
  topics: ["ideas-and-opinions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:wei4}}-{{word:shen2me}} {{word:shi4}} {{word:dui4}}-{{word:de}}.",
      hanzi: "我知道为什么是对的。",
      en: "I know the reason why it is right.",
      ru: "Я знаю, почему это правильно.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dao4}}-{{word:li3}} {{word:hen3}} {{word:dui4}}.",
      hanzi: "你说的道理很对。",
      en: "The reason you give is right.",
      ru: "Твоя логика верна.",
    },
  ],
});
