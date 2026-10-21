import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7936,
  phase: 4,
  zh: "后年",
  py: "hòunián",
  en: "the year after next",
  ru: "послезавтрашний год; через два года",
  pos: "noun",
  hsd: [
    "{{word:hou4}}-{{word:nian2}}",
    "{{word:ming2}}-{{word:nian2}}-{{word:de}} {{word:ming2}}-{{word:nian2}}",
  ],
  tts: ["后年", "明年的明年"],
  fit: "natural",
  topics: ["calendar"],
  isA: ["time-point"],
  proposed: true,
});
