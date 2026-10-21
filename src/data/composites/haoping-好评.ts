import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6395,
  phase: 4,
  zh: "好评",
  py: "hǎopíng",
  en: "positive review",
  ru: "хороший отзыв",
  pos: "noun",
  hsd: [
    "{{word:shuo1}} X {{word:hen3}} {{word:hao3}}-{{word:de}} {{word:hua4}}",
    "{{word:ren2}} {{word:shuo1}} X {{word:hao3}}",
  ],
  tts: ["说X很好的话", "人说X好"],
  literal: "words that say X is very good",
  fit: "plain",
  topics: ["comments-and-recommending"],
  isA: ["language-thing"],
  proposed: true,
});
