import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1209,
  phase: 3,
  zh: "转变",
  py: "zhuǎnbiàn",
  en: "change, transform",
  ru: "меняться",
  pos: "verb",
  hsd: ["{{word:bian4}}"],
  tts: ["变"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bian4}} {{word:hao3}} {{word:le}}.",
      hanzi: "他变好了。",
      en: "He has changed for the better.",
      ru: "Он изменился к лучшему.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
      hanzi: "水变冷了。",
      en: "The water turned cold.",
      ru: "Вода стала холодной.",
    },
  ],
});
