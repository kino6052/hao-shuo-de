import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 753,
  phase: 2,
  zh: "心情",
  py: "xīnqíng",
  en: "mood",
  ru: "настроение",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{light:zi}}"],
  tts: ["心里的样子"],
  literal: "the way things are in the heart",
  fit: "natural",
  note: "xīn-lǐ hěn hǎo: in a good mood.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的心里的样子很好。",
      en: "I'm in a good mood.",
      ru: "У меня хорошее настроение.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你的心里的样子好吗？",
      en: "Are you in a good mood?",
      ru: "У тебя хорошее настроение?",
    },
  ],
});
