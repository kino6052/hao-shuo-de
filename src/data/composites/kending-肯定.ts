import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 696,
  phase: 2,
  zh: "肯定",
  py: "kěndìng",
  en: "definitely",
  ru: "конечно",
  pos: "verb",
  hsd: ["{{word:yi1}}-{{word:ding4}}"],
  tts: ["一定"],
  literal: "one-fixed",
  fit: "natural",
  transparent: true,
  topics: ["agreeing-and-praising"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yi1}}-{{word:ding4}} {{word:lai2}}.",
      hanzi: "他一定来。",
      en: "He's definitely coming.",
      ru: "Он обязательно придёт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yi1}}-{{word:ding4}} {{word:qu4}}.",
      hanzi: "我一定去。",
      en: "I'm definitely going.",
      ru: "Я обязательно пойду.",
    },
  ],
});
