import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1050,
  phase: 3,
  zh: "历史",
  py: "lìshǐ",
  en: "history",
  ru: "история",
  pos: "noun",
  hsd: [
    "{{word:guo4}}-{{word:qu4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["过去发生的东西"],
  literal: "what happened in the past",
  fit: "plain",
  topics: ["history-and-culture"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:guo4}}-{{word:qu4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我爱看过去发生的东西。",
      en: "I love reading history.",
      ru: "Я люблю читать историю.",
    },
    {
      pinyin: "{{Word:guo4}}-{{word:qu4}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "过去发生的东西很多。",
      en: "There is a lot of history.",
      ru: "Истории много.",
    },
  ],
});
