import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 770,
  phase: 2,
  zh: "气",
  py: "qì",
  en: "air; anger",
  ru: "воздух; злость",
  pos: "noun",
  hsd: ["{{word:qi4}}"],
  tts: ["气"],
  fit: "word",
  topics: ["weather"],
  isA: ["liquid-or-gas"],
  note: "For anger, say shēng-qì.",
  examples: [
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:you3}} {{word:qi4}}.",
      hanzi: "天上有气。",
      en: "There is air in the sky.",
      ru: "В небе есть воздух.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:qi4}}.",
      hanzi: "我有气。",
      en: "I'm angry.",
      ru: "Я сержусь.",
    },
  ],
});
