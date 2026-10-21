import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8465,
  phase: 4,
  zh: "血管",
  py: "xuèguǎn",
  en: "blood vessel",
  ru: "кровеносный сосуд",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:hong2}}-{{word:se4}} {{word:shui3}} {{word:zou3}}-{{word:de}} {{word:lu4}}",
    "{{word:shen1ti3}}-{{word:li3}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:shui3}}-{{word:de}} {{word:lu4}}",
  ],
  tts: ["身体里的红色水走的路", "身体里红色的水的路"],
  literal: "the road the red water in the body walks / the road of the red water in the body",
  fit: "plain",
  topics: ["inside-the-body"],
  isA: ["body-part"],
  proposed: true,
});
