import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 150,
  phase: 1,
  zh: "变",
  py: "biàn",
  en: "become",
  ru: "становиться",
  pos: "verb",
  hsd: ["{{word:bian4}}"],
  tts: ["变"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:tian1}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
      hanzi: "天变冷了。",
      en: "It's turned cold.",
      ru: "Похолодало.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:sheng1yin1}} {{word:bian4}} {{word:le}}.",
      hanzi: "他的声音变了。",
      en: "His voice has changed.",
      ru: "Его голос изменился.",
    },
  ],
});
