import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1156,
  phase: 3,
  zh: "相当",
  py: "xiāngdāng",
  en: "quite",
  ru: "довольно",
  pos: "verb",
  hsd: ["{{word:hen3}}"],
  tts: ["很"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这很大。",
      en: "This is quite big.",
      ru: "Это довольно большое.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:ai4}} {{word:wo3}}.",
      hanzi: "他很爱我。",
      en: "He loves me quite a lot.",
      ru: "Он довольно сильно любит меня.",
    },
  ],
});
