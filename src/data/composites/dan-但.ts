import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 292,
  phase: 1,
  zh: "但",
  py: "dàn",
  en: "but",
  ru: "но",
  pos: "conjunction",
  hsd: ["{{word:dan4}}", "{{word:dan4}}-{{word:shi4}}"],
  tts: ["但", "但是"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:xiao3}}, {{word:dan4}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "他很小，但很有力。",
      en: "He's small but strong.",
      ru: "Он маленький, но сильный.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:chi1}}, {{word:dan4}} {{word:mei2}}-{{word:you3}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我想吃，但没有时间。",
      en: "I want to eat, but I have no time.",
      ru: "Я хочу поесть, но нет времени.",
    },
  ],
});
