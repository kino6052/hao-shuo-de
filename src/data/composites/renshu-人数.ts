import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1240,
  phase: 3,
  zh: "人数",
  py: "rénshù",
  en: "number of people",
  ru: "число людей",
  pos: "noun",
  hsd: ["{{word:ren2}}-{{word:shu4}}", "{{word:duo1}}-{{word:shao3}} {{word:ren2}}"],
  tts: ["人数", "多少人"],
  literal: "how many people",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["totals-and-parts"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:ren2}}-{{word:shu4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "人数很多。",
      en: "The number of people is large.",
      ru: "Людей много.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:ren2}}-{{word:shu4}}.",
      hanzi: "我不知道人数。",
      en: "I don't know how many people.",
      ru: "Я не знаю, сколько людей.",
    },
  ],
});
