import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8671,
  phase: 4,
  zh: "残疾",
  py: "cánjí",
  en: "disability; handicap",
  ru: "инвалидность; увечье",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}} {{word:you3}} {{word:yi1}} {{word:bu4}}-{{light:fen1}} {{word:bu4}} {{word:neng2}} {{word:yong4}}",
    "{{word:shen1ti3}} {{word:you3}} {{word:yi1}} {{word:bu4}}-{{light:fen1}} {{word:bu4}} {{word:neng2}} {{word:dong4}}",
  ],
  tts: ["身体有一部分不能用", "身体有一部分不能动"],
  literal: "one part of the body cannot be used / one part of the body cannot move",
  fit: "plain",
  topics: ["injuries"],
  isA: ["state-name"],
  proposed: true,
});
