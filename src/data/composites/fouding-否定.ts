import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7428,
  phase: 4,
  zh: "否定",
  py: "fǒudìng",
  en: "negate; deny; negative",
  ru: "отрицать; отрицательный",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} X {{word:bu4}} {{word:dui4}}",
    "{{word:shuo1}} X {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["说X不对", "说X不是真的"],
  literal: "say X is not right / say X is not true",
  fit: "plain",
  topics: ["agreeing-and-praising"],
  isA: ["speaking-action"],
  proposed: true,
});
