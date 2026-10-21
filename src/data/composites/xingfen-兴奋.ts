import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1463,
  phase: 3,
  zh: "兴奋",
  py: "xīngfèn",
  en: "excited",
  ru: "взволнованный",
  pos: "adjective",
  hsd: ["{{word:hen3}} {{word:kai1}}-{{word:xin1}}"],
  tts: ["很开心"],
  literal: "very happy",
  fit: "plain",
  topics: ["happy-feelings"],
  isA: ["feeling-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:jin1}}-{{word:tian1}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "他今天很开心。",
      en: "He is excited today.",
      ru: "Сегодня он очень взволнован.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "我们都很开心。",
      en: "We are all excited.",
      ru: "Мы все очень взволнованы.",
    },
  ],
});
