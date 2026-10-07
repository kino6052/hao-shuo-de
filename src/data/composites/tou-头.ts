import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 166,
  phase: 1,
  zh: "头",
  py: "tóu",
  en: "head",
  ru: "голова",
  pos: "noun",
  hsd: ["{{word:tou2}}"],
  tts: ["头"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的头很大。",
      en: "His head is big.",
      ru: "У него большая голова.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}}-{{light:fa1}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "她的头发很长。",
      en: "Her hair is long.",
      ru: "У неё длинные волосы.",
    },
  ],
});
