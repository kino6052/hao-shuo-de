import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 883,
  phase: 2,
  zh: "红色",
  py: "hóngsè",
  en: "red",
  ru: "красный",
  pos: "noun",
  hsd: ["{{word:hong2}}-{{word:se4}}"],
  tts: ["红色"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:hong2}}-{{word:se4}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "红色很好看。",
      en: "Red is beautiful.",
      ru: "Красный красив.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}.",
      hanzi: "我的包是红色。",
      en: "My bag is red.",
      ru: "Моя сумка красная.",
    },
  ],
});
