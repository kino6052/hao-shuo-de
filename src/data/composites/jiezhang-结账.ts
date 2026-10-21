import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6920,
  phase: 4,
  zh: "结账",
  py: "jiézhàng",
  en: "pay the bill; check out",
  ru: "рассчитаться, оплатить счёт",
  pos: "verb",
  hsd: [
    "{{word:gei3}} {{word:yao4}}-{{word:de}} {{word:jin1}}",
    "{{word:chi1}}-{{word:wan2}}, {{word:gei3}} {{word:jin1}}",
  ],
  tts: ["给要的金", "吃完，给金"],
  literal: "give the money that is asked for / finish eating, give money",
  fit: "plain",
  topics: ["paying-and-spending"],
  isA: ["trade-action"],
  proposed: true,
});
