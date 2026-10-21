import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 651,
  phase: 2,
  zh: "情况",
  py: "qíngkuàng",
  en: "situation",
  ru: "ситуация",
  pos: "noun",
  hsd: ["{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{light:zi}}"],
  tts: ["现在的样子"],
  literal: "the way things are now",
  fit: "plain",
  topics: ["situations-and-needs"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "现在的样子很好。",
      en: "The situation is good.",
      ru: "Ситуация хорошая.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:ma}}?",
      hanzi: "你知道现在的样子吗？",
      en: "Do you know the situation?",
      ru: "Ты знаешь, какова ситуация?",
    },
  ],
});
