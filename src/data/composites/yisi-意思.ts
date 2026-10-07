import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 308,
  phase: 1,
  zh: "意思",
  py: "yìsi",
  en: "meaning",
  ru: "смысл",
  pos: "noun",
  hsd: ["X {{word:shi4}} {{word:shen2me}}?"],
  tts: ["…是什么？"],
  literal: "what is X?",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zi4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "这个字是什么？",
      en: "What does this character mean?",
      ru: "Что значит этот иероглиф?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你说的是什么？",
      en: "What do you mean?",
      ru: "Что ты имеешь в виду?",
    },
  ],
});
