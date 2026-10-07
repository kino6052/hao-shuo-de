import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 392,
  phase: 1,
  zh: "年轻",
  py: "niánqīng",
  en: "young",
  ru: "молодой",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:lao3}}"],
  tts: ["不老"],
  literal: "not old",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hai2}} {{word:bu4}} {{word:lao3}}.",
      hanzi: "他还不老。",
      en: "He's still young.",
      ru: "Он ещё молодой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ma1ma}} {{word:bu4}} {{word:lao3}}.",
      hanzi: "我妈妈不老。",
      en: "My mom is young.",
      ru: "Моя мама молодая.",
    },
  ],
});
