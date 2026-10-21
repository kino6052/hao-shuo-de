import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1255,
  phase: 3,
  zh: "允许",
  py: "yǔnxǔ",
  en: "allow",
  ru: "разрешать",
  pos: "verb",
  hsd: ["{{word:rang4}}"],
  tts: ["让"],
  literal: "let",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  note: "bù jiào: won't let.",
  examples: [
    {
      pinyin: "{{Word:ba4ba}} {{word:rang4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "爸爸让我去。",
      en: "Dad allows me to go.",
      ru: "Папа разрешает мне идти.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:chi1}}.",
      hanzi: "他不让我吃。",
      en: "He doesn't allow me to eat.",
      ru: "Он не разрешает мне есть.",
    },
  ],
});
