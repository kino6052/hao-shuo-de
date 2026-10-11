import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 528,
  phase: 2,
  zh: "牙",
  py: "yá",
  en: "tooth",
  ru: "зуб",
  pos: "noun",
  hsd: ["{{word:ya2}}"],
  tts: ["牙"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:ya2}} {{word:hen3}} {{word:bai2}}.",
      hanzi: "你的牙很白。",
      en: "Your teeth are very white.",
      ru: "У тебя очень белые зубы.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ya2}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "我的牙不好。",
      en: "My teeth aren't good.",
      ru: "У меня плохие зубы.",
    },
  ],
});
