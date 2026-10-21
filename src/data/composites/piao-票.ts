import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 773,
  phase: 2,
  zh: "票",
  py: "piào",
  en: "ticket",
  ru: "билет",
  pos: "noun",
  hsd: [
    "{{word:rang4}}-{{word:ren2}}-{{word:jin4}}-{{word:qu4}}-{{word:de}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让人进去的写的东西"],
  literal: "a written thing that lets a person go in",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:rang4}}-{{word:ren2}}-{{word:jin4}}-{{word:qu4}}-{{word:de}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有让人进去的写的东西。",
      en: "I have a ticket.",
      ru: "У меня есть билет.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:rang4}}-{{word:ren2}}-{{word:jin4}}-{{word:qu4}}-{{word:de}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你有让人进去的写的东西吗？",
      en: "Do you have a ticket?",
      ru: "У тебя есть билет?",
    },
  ],
});
