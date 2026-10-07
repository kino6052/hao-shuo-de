import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 388,
  phase: 1,
  zh: "带",
  py: "dài",
  en: "bring, take along",
  ru: "приносить",
  pos: "verb",
  hsd: ["{{word:na2}}-{{word:lai2}}", "{{word:na2}}-{{word:qu4}}"],
  tts: ["拿来", "拿去"],
  literal: "take-come / take-go",
  fit: "natural",
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:shu1}} {{word:na2}}-{{word:lai2}}.",
      hanzi: "把书拿来。",
      en: "Bring the book.",
      ru: "Принеси книгу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:na2}}-{{word:qu4}}.",
      hanzi: "你把这个拿去。",
      en: "Take this with you.",
      ru: "Возьми это с собой.",
    },
  ],
});
