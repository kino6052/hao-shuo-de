import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 80,
  phase: 1,
  zh: "听",
  py: "tīng",
  en: "hear",
  ru: "слышать",
  pos: "verb",
  hsd: ["{{word:ting1}}"],
  tts: ["听"],
  fit: "word",
  examples: [
    { pinyin: "{{Word:ni3}} {{word:ting1}}!", hanzi: "你听！", en: "Listen!", ru: "Послушай!" },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ting1}} {{word:ta1}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "我爱听他说话。",
      en: "I love listening to him talk.",
      ru: "Я люблю его слушать.",
    },
  ],
});
