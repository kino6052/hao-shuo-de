import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 941,
  phase: 2,
  zh: "抱",
  py: "bào",
  en: "hug, hold",
  ru: "обнимать",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:liang3}}-ge {{word:shou3}} {{word:na2}}"],
  tts: ["用两个手拿"],
  literal: "hold with two hands",
  fit: "word",
  topics: ["carrying-and-holding"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:liang3}}-{{light:ge4}} {{word:shou3}} {{word:na2}} {{word:ta1}}.",
      hanzi: "我用两个手拿他。",
      en: "I hug him.",
      ru: "Я обнимаю его.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:liang3}}-{{light:ge4}} {{word:shou3}} {{word:na2}} {{word:wo3}}.",
      hanzi: "他用两个手拿我。",
      en: "He hugs me.",
      ru: "Он обнимает меня.",
    },
  ],
});
