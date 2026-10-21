import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1277,
  phase: 3,
  zh: "反对",
  py: "fǎnduì",
  en: "oppose",
  ru: "возражать, быть против",
  pos: "verb",
  hsd: ["{{word:shuo1}} {{word:bu4}}", "{{word:shuo1}} {{word:bu4}} {{word:dui4}}"],
  tts: ["说不", "说不对"],
  literal: "say no / say it's not right",
  fit: "plain",
  topics: ["agreeing-and-praising"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:bu4}}.",
      hanzi: "我说不。",
      en: "I object.",
      ru: "Я возражаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:bu4}}, {{word:wo3}} {{word:ye3}} {{word:shuo1}} {{word:bu4}}.",
      hanzi: "他说不，我也说不。",
      en: "He objects and so do I.",
      ru: "Он против, и я тоже.",
    },
  ],
});
