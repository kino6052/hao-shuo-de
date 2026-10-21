import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6778,
  phase: 4,
  zh: "欠",
  py: "qiàn",
  en: "owe",
  ru: "быть должным",
  pos: "verb",
  hsd: [
    "{{word:yao4}} {{word:gei3}} X, {{word:dan4}} {{word:hai2}} {{word:mei2}} {{word:gei3}}",
    "{{word:mei2}} {{word:gei3}}-{{word:de}}",
  ],
  tts: ["要给X，但还没给", "没给的"],
  literal: "should give X but still have not given / not given",
  fit: "plain",
  topics: ["paying-and-spending"],
  isA: ["owning"],
  proposed: true,
});
