import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1383,
  phase: 3,
  zh: "痛苦",
  py: "tòngkǔ",
  en: "painful, suffering",
  ru: "мучительный, страдание",
  pos: "adjective",
  hsd: ["{{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:bu4}} {{word:hao3}}"],
  tts: ["心里很不好"],
  literal: "feeling very bad inside",
  fit: "plain",
  topics: ["sad-and-angry"],
  isA: ["feeling-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "我心里很不好。",
      en: "I am in pain.",
      ru: "Мне очень тяжело.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "他心里很不好。",
      en: "He is suffering.",
      ru: "Ему очень тяжело.",
    },
  ],
});
