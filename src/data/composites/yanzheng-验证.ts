import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8862,
  phase: 4,
  zh: "验证",
  py: "yànzhèng",
  en: "verify; check; validate (a claim)",
  ru: "проверять; подтверждать; верифицировать",
  pos: "verb",
  hsd: [
    "{{word:kan4}} X {{word:shi4}} {{word:bu4}} {{word:shi4}} {{word:dui4}}-{{word:de}}",
    "{{word:kan4}} X {{word:shi4}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:zuo4}} {{word:yi1}}-{{word:xia4}}, {{word:kan4}} X {{word:shi4}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["看X是不是对的", "看X是不是真的", "做一下，看X是不是真的"],
  literal: "see whether X is right / see whether X is true / try it and see whether X is true",
  fit: "plain",
  topics: ["looking-and-checking"],
  isA: ["thinking-action"],
  proposed: true,
});
