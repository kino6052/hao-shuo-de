import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 800,
  phase: 2,
  zh: "也许",
  py: "yěxǔ",
  en: "maybe",
  ru: "может быть",
  pos: "adverb",
  hsd: ["{{word:ke3}}-{{word:neng2}}"],
  tts: ["可能"],
  fit: "word",
  topics: ["adverbs"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:lai2}}.",
      hanzi: "他可能来。",
      en: "Maybe he will come.",
      ru: "Возможно, он придёт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ke3}}-{{word:neng2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "我可能不来。",
      en: "Maybe I won't come.",
      ru: "Возможно, я не приду.",
    },
  ],
});
