import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1336,
  phase: 3,
  zh: "愿望",
  py: "yuànwàng",
  en: "wish",
  ru: "желание",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:li3}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["心里要的东西"],
  literal: "what your heart wants",
  fit: "plain",
  topics: ["wishes-hopes-and-longing"],
  isA: ["feeling-name"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:xin1}}-{{word:li3}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是我心里要的东西。",
      en: "This is my wish.",
      ru: "Это моё желание.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xin1}}-{{word:li3}} {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你心里要的东西是什么？",
      en: "What is your wish?",
      ru: "Какое у тебя желание?",
    },
  ],
});
