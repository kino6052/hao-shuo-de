import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1218,
  phase: 3,
  zh: "部",
  py: "bù",
  en: "part, department",
  ru: "часть, отдел",
  pos: "noun",
  hsd: ["{{word:bu4}}-{{light:fen1}}"],
  tts: ["部分"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个部分很好。",
      en: "This part is good.",
      ru: "Эта часть хороша.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:na4}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我爱那个部分。",
      en: "I like that part.",
      ru: "Мне нравится та часть.",
    },
  ],
});
