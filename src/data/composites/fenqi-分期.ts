import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9079,
  phase: 4,
  zh: "分期",
  py: "fēnqī",
  en: "pay in instalments; divide into stages",
  ru: "платить в рассрочку; делить на этапы",
  pos: "verb",
  hsd: [
    "{{word:fen1}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:gei3}} {{word:jin1}}",
    "{{word:mai3}} {{word:dong1}}-{{light:xi1}}, {{word:yi1}}-{{word:ci4}} {{word:gei3}} {{word:yi1}}-{{word:dian3}} {{word:jin1}}",
  ],
  tts: ["分很多次给金", "买东西，一次给一点金"],
  literal: "split into many times and pay money / buy something, pay a little money each time",
  fit: "plain",
  topics: ["paying-and-spending"],
  isA: ["trade-action"],
  proposed: true,
});
