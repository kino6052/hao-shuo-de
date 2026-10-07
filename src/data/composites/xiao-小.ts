import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 54,
  phase: 1,
  zh: "小",
  py: "xiǎo",
  en: "little",
  ru: "маленький",
  pos: "adjective",
  hsd: ["{{word:xiao3}}"],
  tts: ["小"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bao1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "这个包很小。",
      en: "This bag is small.",
      ru: "Эта сумка маленькая.",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:ai4}} {{word:wan2r}}.",
      hanzi: "小的孩子爱玩儿。",
      en: "Little children love to play.",
      ru: "Маленькие дети любят играть.",
    },
  ],
});
