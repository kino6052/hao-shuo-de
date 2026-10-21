import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1202,
  phase: 3,
  zh: "词典",
  py: "cídiǎn",
  en: "dictionary",
  ru: "словарь",
  pos: "noun",
  hsd: [
    "{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:ci2}}-{{word:de}} {{word:shu1}}",
    "{{word:shuo1}} {{word:ci2}} {{word:shi4}} {{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["有很多的词的书", "说词是什么的写的东西"],
  literal: "a written thing that says what words mean",
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
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:ci2}}-{{word:de}} {{word:shu1}}.",
      hanzi: "我看有很多的词的书。",
      en: "I look in the dictionary.",
      ru: "Я смотрю в словаре.",
    },
  ],
});
