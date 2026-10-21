import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9321,
  phase: 4,
  zh: "鉴定",
  py: "jiàndìng",
  en: "appraise; authenticate; appraisal",
  ru: "определять подлинность; экспертиза",
  pos: "verb",
  hsd: [
    "{{word:kan4}} X {{word:shi4}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:kan4}} X {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:hai2}}-{{word:shi4}} {{word:bu4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["看X是不是真的", "看X是真的还是不真的"],
  literal: "look whether X is real / look whether X is real or not real",
  fit: "plain",
  topics: ["checking-and-testing"],
  isA: ["thinking-action"],
  proposed: true,
});
