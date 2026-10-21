import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8651,
  phase: 4,
  zh: "率",
  py: "lǜ",
  en: "rate; ratio (as a suffix: -rate)",
  ru: "норма; коэффициент; доля (суффикс)",
  pos: "suffix",
  hsd: [
    "X {{word:bi3}} Y {{word:duo1}}-{{word:shao3}}",
    "{{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:li3}} {{word:you3}} {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["X比Y多少", "一零零里有多少"],
  literal: "how much X is compared with Y / out of a hundred how many there are",
  fit: "plain",
  topics: ["sums"],
  isA: ["how-much"],
  proposed: true,
});
