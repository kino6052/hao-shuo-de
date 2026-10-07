import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 86,
  phase: 1,
  zh: "手",
  py: "shǒu",
  en: "hand",
  ru: "рука",
  pos: "noun",
  hsd: ["{{word:shou3}}"],
  tts: ["手"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我的手很冷。",
      en: "My hands are cold.",
      ru: "У меня холодные руки.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shou3}}-{{word:li3}} {{word:you3}} {{word:shu1}}.",
      hanzi: "他手里有书。",
      en: "He has a book in his hand.",
      ru: "У него в руке книга.",
    },
  ],
});
