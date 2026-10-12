import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1170,
  phase: 3,
  zh: "管理",
  py: "guǎnlǐ",
  en: "manage",
  ru: "управлять",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:zuo4}} {{word:hao3}}"],
  tts: ["把X做好"],
  literal: "keep X in good order",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:jia1}} {{word:zuo4}} {{word:hao3}}.",
      hanzi: "我把家做好。",
      en: "I manage the home.",
      ru: "Я управляю домом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:shu1}} {{word:zuo4}} {{word:hao3}}.",
      hanzi: "他把书做好。",
      en: "He manages the books.",
      ru: "Он ведёт книги.",
    },
  ],
});
