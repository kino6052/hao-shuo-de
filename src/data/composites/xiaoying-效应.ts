import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8662,
  phase: 4,
  zh: "效应",
  py: "xiàoyìng",
  en: "effect (a result that one event causes)",
  ru: "эффект; следствие",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} X {{word:hou4}} {{word:de2}}-{{word:dao4}}-{{word:de}} {{word:jie2}}-{{word:guo3}}",
    "X {{word:fa1}}-{{word:sheng1}} {{word:le}}, Y {{word:jiu4}} {{word:fa1}}-{{word:sheng1}}",
  ],
  tts: ["做X后得到的结果", "X发生了，Y就发生"],
  literal: "the result got after doing X / X happened, then Y happens",
  fit: "plain",
  topics: ["causes-and-results"],
  isA: ["cause-and-effect"],
  proposed: true,
});
