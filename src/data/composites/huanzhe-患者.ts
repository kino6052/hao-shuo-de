import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8716,
  phase: 4,
  zh: "患者",
  py: "huànzhě",
  en: "patient; sufferer",
  ru: "больной; пациент",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:ren2}}",
    "{{word:qu4}} {{word:zhao3}} {{word:ren2}} {{word:kan4}} {{word:shen1ti3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["身体不好的人", "去找人看身体的人"],
  literal: "a person whose body is not well / a person who goes to find someone to look at the body",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["person"],
  proposed: true,
});
