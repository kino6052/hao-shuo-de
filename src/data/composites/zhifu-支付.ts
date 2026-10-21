import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6221,
  phase: 4,
  zh: "支付",
  py: "zhīfù",
  en: "pay",
  ru: "платить",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:jin1}}", "{{word:gei3}} X {{word:jin1}}"],
  tts: ["给金", "给X金"],
  fit: "natural",
  topics: ["paying-and-spending"],
  isA: ["trade-action"],
  proposed: true,
});
