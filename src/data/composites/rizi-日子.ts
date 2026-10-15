import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 762,
  phase: 2,
  zh: "日子",
  py: "rìzi",
  en: "day; life",
  ru: "день; жизнь",
  pos: "noun",
  hsd: ["{{word:ri4}}-{{word:zi}}", "{{word:ri4}}"],
  tts: ["日子", "日"],
  literal: "day",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:hao3}} {{word:ri4}}-{{word:zi}}.",
      hanzi: "今天是好日子。",
      en: "Today is a good day.",
      ru: "Сегодня хороший день.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ri4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的日子很好。",
      en: "My life is good.",
      ru: "Моя жизнь хорошая.",
    },
  ],
});
