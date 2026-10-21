import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8993,
  phase: 4,
  zh: "测量",
  py: "cèliáng",
  en: "measure",
  ru: "измерять",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:kan4}} X {{word:you3}} {{word:duo1}} {{word:da4}}",
    "{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:kan4}} X {{word:you3}} {{word:duo1}} {{word:chang2}}",
  ],
  tts: ["用工具看X有多大", "用工具看X有多长"],
  literal: "use a tool to see how big X is / use a tool to see how long X is",
  fit: "plain",
  topics: ["measures"],
  isA: ["doing"],
  proposed: true,
});
