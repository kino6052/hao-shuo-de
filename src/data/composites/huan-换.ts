import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 849,
  phase: 2,
  zh: "换",
  py: "huàn",
  en: "exchange, change",
  ru: "менять",
  pos: "verb",
  hsd: ["{{word:gei3}} X, {{word:na2}} Y"],
  tts: ["给X，拿Y"],
  literal: "give X, take Y",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shu1}}, {{word:na2}} {{word:ni3}}-{{word:de}} {{word:shui3}}.",
      hanzi: "我给你书，拿你的水。",
      en: "I swap you my book for your water.",
      ru: "Я меняю тебе книгу на воду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:shui3}}, {{word:na2}} {{word:wo3}}-{{word:de}} {{word:shu1}}.",
      hanzi: "他给我水，拿我的书。",
      en: "He swaps me water for my book.",
      ru: "Он меняет мне воду на книгу.",
    },
  ],
});
