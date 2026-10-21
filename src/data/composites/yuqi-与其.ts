import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8479,
  phase: 4,
  zh: "与其",
  py: "yǔqí",
  en: "rather than; instead of",
  ru: "чем ...; лучше уж",
  pos: "conjunction",
  hsd: [
    "X {{word:bu4}} {{word:hao3}}, Y {{word:bi3}} X {{word:hao3}}",
    "X {{word:mei2}}-{{word:you3}} Y {{word:hao3}}",
  ],
  tts: ["X不好，Y比X好", "X没有Y好"],
  literal: "X is not good, Y is better than X / X is not as good as Y",
  fit: "plain",
  topics: ["but-and-although"],
  isA: ["conjunction"],
  proposed: true,
});
