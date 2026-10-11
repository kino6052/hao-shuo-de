import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 499,
  phase: 1,
  zh: "做饭",
  py: "zuò fàn",
  en: "cook",
  ru: "готовить еду",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:fan4}}", "{{word:zuo4}} {{word:chi1}}-{{word:de}}"],
  tts: ["做饭", "做吃的"],
  literal: "make food",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ba4ba}} {{word:zai4}} {{word:zuo4}}-{{word:fan4}}.",
      hanzi: "爸爸在做饭。",
      en: "Dad is cooking.",
      ru: "Папа готовит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:hui4}} {{word:zuo4}}-{{word:fan4}}.",
      hanzi: "我不会做饭。",
      en: "I can't cook.",
      ru: "Я не умею готовить.",
    },
  ],
});
