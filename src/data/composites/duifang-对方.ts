import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1485,
  phase: 3,
  zh: "对方",
  py: "duìfāng",
  en: "the other side",
  ru: "другая сторона",
  pos: "noun",
  hsd: ["{{word:dui4}}-{{word:fang1}}", "{{word:na4}}-{{word:bian1}}-{{word:de}} {{word:ren2}}"],
  tts: ["对方", "那边的人"],
  literal: "the person on the other side",
  fit: "natural",
  topics: ["gathering-and-getting-along"],
  isA: ["person"],
  examples: [
    {
      pinyin: "{{Word:dui4}}-{{word:fang1}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "对方不说。",
      en: "The other side doesn't speak.",
      ru: "Другая сторона молчит.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:bian1}}-{{word:de}} {{word:ren2}} {{word:shuo1}} {{word:bu4}}.",
      hanzi: "那边的人说不。",
      en: "The other side says no.",
      ru: "Другая сторона отвечает отказом.",
    },
  ],
});
