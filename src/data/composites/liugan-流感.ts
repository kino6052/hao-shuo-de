import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6969,
  phase: 4,
  zh: "流感",
  py: "liúgǎn",
  en: "flu",
  ru: "грипп",
  pos: "noun",
  hsd: [
    "{{word:bie2}}-{{word:ren2}} {{word:ye3}} {{word:hui4}} {{word:you3}}-{{word:de}} {{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}",
    "{{word:shen1ti3}} {{word:hen3}} {{word:re4}}, {{word:tou2}} {{word:tong4}}-{{word:de}} {{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}",
  ],
  tts: ["别人也会有的身体不好", "身体很热，头痛的身体不好"],
  literal: "the body-not-well that other people can get too / the body-not-well with a hot body and a sore head",
  fit: "plain",
  topics: ["illness"],
  isA: ["state-name"],
  proposed: true,
});
