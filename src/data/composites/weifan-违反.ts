import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7488,
  phase: 4,
  zh: "违反",
  py: "wéifǎn",
  en: "violate; go against (a rule)",
  ru: "нарушать; противоречить",
  pos: "verb",
  hsd: [
    "{{word:zuo4}} X {{word:bu4}} {{word:rang4}} {{word:zuo4}}-{{word:de}}",
    "{{word:bu4}} {{word:zuo4}} X {{word:shuo1}} {{word:yao4}} {{word:zuo4}}-{{word:de}}",
  ],
  tts: ["做X不让做的", "不做X说要做的"],
  literal: "do what X does not let you do / not do what X says to do",
  fit: "plain",
  topics: ["laws-and-rules"],
  isA: ["doing"],
  proposed: true,
});
