import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 997,
  phase: 2,
  zh: "质量",
  py: "zhìliàng",
  en: "quality",
  ru: "качество",
  pos: "noun",
  hsd: ["{{word:hao3}} {{word:bu4}} {{word:hao3}}"],
  tts: ["好不好"],
  literal: "good or not",
  fit: "natural",
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:hao3}} {{word:bu4}} {{word:hao3}}?",
      hanzi: "好不好？",
      en: "Is the quality good?",
      ru: "Хорошее ли качество?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hao3}} {{word:bu4}} {{word:hao3}}?",
      hanzi: "这个好不好？",
      en: "Is this of good quality?",
      ru: "Это хорошего качества?",
    },
  ],
});
