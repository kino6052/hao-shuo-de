import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 991,
  phase: 2,
  zh: "研究",
  py: "yánjiū",
  en: "research",
  ru: "исследовать",
  pos: "verb",
  hsd: ["{{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:hao3}}-{{word:hao3}} {{word:xue2}}"],
  tts: ["好好看，好好学"],
  literal: "look carefully, learn carefully",
  fit: "plain",
  topics: ["knowing-and-understanding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:hao3}}-{{word:hao3}} {{word:xue2}}.",
      hanzi: "我好好看，好好学。",
      en: "I do research.",
      ru: "Я занимаюсь исследованием.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hao3}}-{{word:hao3}} {{word:kan4}}, {{word:hao3}}-{{word:hao3}} {{word:xue2}}.",
      hanzi: "他好好看，好好学。",
      en: "He does research.",
      ru: "Он занимается исследованием.",
    },
  ],
});
