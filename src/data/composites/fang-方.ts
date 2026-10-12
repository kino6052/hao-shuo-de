import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1118,
  phase: 3,
  zh: "方",
  py: "fāng",
  en: "square; direction",
  ru: "квадрат; сторона",
  pos: "adjective",
  hsd: [
    "{{word:fang1}}",
    "{{word:si4}}-ge {{word:bian1}} {{word:yi1}}-{{word:yang4}}-{{word:de}}",
    "{{word:bian1}}",
  ],
  tts: ["方", "四个边一样的", "边"],
  literal: "with four equal sides / a side",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个方很大。",
      en: "This square is big.",
      ru: "Этот квадрат большой.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zuo3}} {{word:fang1}}.",
      hanzi: "他在左方。",
      en: "He is on the left side.",
      ru: "Он слева.",
    },
  ],
});
