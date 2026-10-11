import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 560,
  phase: 2,
  zh: "小孩儿",
  py: "xiǎoháir",
  en: "child",
  ru: "ребёнок",
  pos: "noun",
  hsd: ["{{word:xiao3}}-{{word:hai2}}-{{light:zi}}"],
  tts: ["小孩子"],
  literal: "little child",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:ai4}} {{word:wan2r}}.",
      hanzi: "小孩子爱玩儿。",
      en: "Children love to play.",
      ru: "Дети любят играть.",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:bu4}} {{word:neng2}} {{word:kai1}} {{word:che1}}.",
      hanzi: "小孩子不能开车。",
      en: "Children can't drive.",
      ru: "Дети не могут водить машину.",
    },
  ],
});
