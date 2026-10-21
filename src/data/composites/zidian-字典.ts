import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 637,
  phase: 2,
  zh: "字典",
  py: "zìdiǎn",
  en: "dictionary",
  ru: "словарь",
  pos: "noun",
  hsd: ["{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:ci2}}-{{word:de}} {{word:shu1}}"],
  tts: ["有很多的词的书"],
  literal: "a book with very many words",
  fit: "plain",
  topics: ["writing"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:ci2}}-{{word:de}} {{word:shu1}}.",
      hanzi: "这是有很多的词的书。",
      en: "This is a dictionary.",
      ru: "Это словарь.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:ci2}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的有很多的词的书在哪里？",
      en: "Where is your dictionary?",
      ru: "Где твой словарь?",
    },
  ],
});
