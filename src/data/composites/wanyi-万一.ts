import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6821,
  phase: 4,
  zh: "万一",
  py: "wànyī",
  en: "just in case; if by any chance",
  ru: "а вдруг, на случай если",
  pos: "conjunction",
  hsd: [
    "{{word:ru2guo3}}",
    "{{word:ru2guo3}} {{word:you3}} {{word:yi1}}-{{word:tian1}}, X {{word:jiu4}} Y",
  ],
  tts: ["如果", "如果有一天，X就Y"],
  fit: "natural",
  topics: ["if-unless-and-even-if"],
  isA: ["conjunction"],
  proposed: true,
});
