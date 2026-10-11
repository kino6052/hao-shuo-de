import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 639,
  phase: 2,
  zh: "家庭",
  py: "jiātíng",
  en: "family",
  ru: "семья",
  pos: "noun",
  hsd: ["{{word:jia1}}"],
  tts: ["家"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我爱我的家。",
      en: "I love my family.",
      ru: "Я люблю свою семью.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jia1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个家很大。",
      en: "This family is big.",
      ru: "Эта семья большая.",
    },
  ],
});
