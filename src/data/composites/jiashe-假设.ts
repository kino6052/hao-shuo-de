import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8588,
  phase: 4,
  zh: "假设",
  py: "jiǎshè",
  en: "suppose; assume; hypothesis",
  ru: "предположим; допускать; гипотеза",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} X {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:xiang3}}-{{word:yi1}}-{{word:xiang3}}, X {{word:shi4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["想X是真的", "想一想，X是真的"],
  literal: "think X is true / think for a moment: X is true",
  fit: "plain",
  topics: ["reasons-and-logic"],
  isA: ["thinking-action"],
  proposed: true,
});
