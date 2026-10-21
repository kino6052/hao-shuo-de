import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1445,
  phase: 3,
  zh: "顾客",
  py: "gùkè",
  en: "customer",
  ru: "клиент, покупатель",
  pos: "noun",
  hsd: ["{{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}}"],
  tts: ["买东西的人"],
  literal: "a person who buys",
  fit: "plain",
  topics: ["shopping"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是买东西的人。",
      en: "He is a customer.",
      ru: "Он покупатель.",
    },
    {
      pinyin: "{{Word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "买东西的人很多。",
      en: "There are many customers.",
      ru: "Покупателей много.",
    },
  ],
});
