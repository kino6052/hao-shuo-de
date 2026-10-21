import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 843,
  phase: 2,
  zh: "快要",
  py: "kuàiyào",
  en: "soon, about to",
  ru: "скоро",
  pos: "adverb",
  hsd: ["{{word:kuai4}}-{{word:yao4}}", "{{word:kuai4}} … {{word:le}}"],
  tts: ["快要", "快…了"],
  literal: "fast-want",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["before-and-after"],
  isA: ["time-order"],
  note: "kuài lái le: almost here.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:kuai4}}-{{word:yao4}} {{word:lai2}} {{word:le}}.",
      hanzi: "他快要来了。",
      en: "He is about to come.",
      ru: "Он вот-вот придёт.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:kuai4}}-{{word:yao4}} {{word:mei2}} {{word:you3}} {{word:le}}.",
      hanzi: "水快要没有了。",
      en: "The water is about to run out.",
      ru: "Вода скоро кончится.",
    },
  ],
});
