import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9200,
  phase: 4,
  zh: "再生",
  py: "zàishēng",
  en: "regenerate; be reborn; recycle (reuse)",
  ru: "возрождаться; вторичный (переработанный)",
  pos: "verb",
  hsd: [
    "{{word:you4}} {{word:huo2}}-{{word:guo4}}-{{word:lai2}}",
    "{{word:ba3}} {{word:yong4}}-{{word:guo4}}-{{word:de}} X {{word:you4}} {{word:yong4}}",
  ],
  tts: ["又活过来", "把用过的X又用"],
  literal: "come alive again / use the used X again",
  fit: "plain",
  topics: ["becoming-and-turning-into"],
  isA: ["becoming"],
  proposed: true,
});
