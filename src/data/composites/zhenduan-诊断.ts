import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6291,
  phase: 4,
  zh: "诊断",
  py: "zhěnduàn",
  en: "diagnose",
  ru: "ставить диагноз",
  pos: "verb",
  hsd: [
    "{{word:kan4}} {{word:shen1ti3}}, {{word:zhi1dao4}} {{word:wei4}}-{{word:shen2me}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["看身体，知道为什么不好"],
  literal: "look at the body, know why it is not good",
  fit: "plain",
  topics: ["at-the-doctor"],
  isA: ["thinking-action"],
  proposed: true,
});
