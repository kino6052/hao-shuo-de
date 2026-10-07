import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 207,
  phase: 1,
  zh: "跟",
  py: "gēn",
  en: "with, and",
  ru: "с, и",
  pos: "preposition",
  hsd: ["{{word:he2}}"],
  tts: ["和"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}.",
      hanzi: "我和他一起去。",
      en: "I'm going with him.",
      ru: "Я иду с ним.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:shei2}} {{word:shuo1}}-{{word:hua4}}?",
      hanzi: "你和谁说话？",
      en: "Who are you talking with?",
      ru: "С кем ты разговариваешь?",
    },
  ],
});
