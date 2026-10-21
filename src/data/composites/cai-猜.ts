import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 865,
  phase: 2,
  zh: "猜",
  py: "cāi",
  en: "guess",
  ru: "угадывать",
  pos: "verb",
  hsd: ["{{word:xiang3}} {{word:shi4}} …"],
  tts: ["想是…"],
  literal: "think it's …",
  fit: "plain",
  topics: ["knowing-and-understanding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:shi4}} {{word:shui3}}.",
      hanzi: "我想是水。",
      en: "I guess it's water.",
      ru: "Думаю, это вода.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "你想是谁？",
      en: "Who do you guess it is?",
      ru: "Как думаешь, кто это?",
    },
  ],
});
