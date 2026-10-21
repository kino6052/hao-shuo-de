import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9035,
  phase: 4,
  zh: "基金",
  py: "jījīn",
  en: "fund (money set aside)",
  ru: "фонд",
  pos: "noun",
  hsd: [
    "{{word:wei4}} X {{word:fang4}} {{word:hao3}}-{{word:de}} {{word:jin1}}",
    "{{word:fang4}} {{word:hao3}}, {{word:yi3}}-{{word:hou4}} {{word:wei4}} X {{word:yong4}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["为X放好的金", "放好，以后为X用的金"],
  literal: "money put away for X / money put away to be used later for X",
  fit: "plain",
  topics: ["money-and-cards"],
  isA: ["money-thing"],
  proposed: true,
});
