import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1143,
  phase: 3,
  zh: "独立",
  py: "dúlì",
  en: "independent",
  ru: "независимый",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:yao4}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:bang1}}"],
  tts: ["不要别的人帮"],
  literal: "needs no one's help",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:yao4}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:bang1}}.",
      hanzi: "他不要别的人帮。",
      en: "He is independent.",
      ru: "Он независим.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:bang1}}.",
      hanzi: "我不要别的人帮。",
      en: "I am independent.",
      ru: "Я независим.",
    },
  ],
});
