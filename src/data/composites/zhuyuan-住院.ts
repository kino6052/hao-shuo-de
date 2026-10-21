import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6931,
  phase: 4,
  zh: "住院",
  py: "zhùyuàn",
  en: "be in hospital; be hospitalized",
  ru: "лежать в больнице, лечь в больницу",
  pos: "verb",
  hsd: [
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}, {{word:liu2}} {{word:zai4}} {{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["身体不好，留在把身体做好的地方"],
  literal: "the body is not well, stay in the place that makes the body well",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["being-affected"],
  proposed: true,
});
