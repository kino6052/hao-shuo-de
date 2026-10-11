import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 523,
  phase: 2,
  zh: "早饭",
  py: "zǎofàn",
  en: "breakfast",
  ru: "завтрак",
  pos: "noun",
  hsd: ["{{word:zao3}}-{{word:fan4}}"],
  tts: ["早饭"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:zao3}}-{{word:fan4}} {{word:shi4}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "早饭是水果。",
      en: "Breakfast is fruit.",
      ru: "Завтрак — это фрукты.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:he2}} {{word:wo3}} {{word:chi1}} {{word:zao3}}-{{word:fan4}} {{word:ma}}?",
      hanzi: "你要和我吃早饭吗？",
      en: "Do you want to have breakfast with me?",
      ru: "Хочешь позавтракать со мной?",
    },
  ],
});
