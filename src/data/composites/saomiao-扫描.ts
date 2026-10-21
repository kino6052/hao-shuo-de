import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9120,
  phase: 4,
  zh: "扫描",
  py: "sǎomiáo",
  en: "scan",
  ru: "сканировать",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:ji1}} {{word:kan4}} X, {{word:ba3}} X {{word:fang4}}-{{word:jin4}} {{word:suan4}}-{{word:de}} {{word:ji1}}",
    "{{word:yong4}} {{word:ji1}} {{word:yi1}}-{{word:dian3}} {{word:yi1}}-{{word:dian3}} {{word:kan4}} X",
  ],
  tts: ["用机看X，把X放进算的机", "用机一点一点看X"],
  literal: "look at X with a machine and put X into a computer / look at X little by little with a machine",
  fit: "plain",
  topics: ["smart-and-digital-technology"],
  isA: ["perceiving"],
  proposed: true,
});
