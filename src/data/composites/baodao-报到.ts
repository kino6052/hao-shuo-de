import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6856,
  phase: 4,
  zh: "报到",
  py: "bàodào",
  en: "report in; check in; register one's arrival",
  ru: "являться, регистрироваться по прибытии",
  pos: "verb",
  hsd: [
    "{{word:qu4}} {{word:dui4}} X {{word:shuo1}} {{word:wo3}} {{word:dao4}} {{word:le}}",
    "{{word:dao4}} {{word:le}} {{word:yi3}}-{{word:hou4}} {{word:shuo1}} {{word:wo3}} {{word:shi4}} {{word:shei2}}",
  ],
  tts: ["去对X说我到了", "到了以后说我是谁"],
  literal: "go and tell X I have arrived / after arriving say who I am",
  fit: "plain",
  topics: ["meeting-and-parting"],
  isA: ["social-action"],
  proposed: true,
});
