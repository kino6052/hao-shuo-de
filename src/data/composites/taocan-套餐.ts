import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8076,
  phase: 4,
  zh: "套餐",
  py: "tàocān",
  en: "set meal; combo meal",
  ru: "комплексный обед; сет",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:qi3}} {{word:mai3}}-{{word:de}} {{word:fan4}}",
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:zhong3}} {{word:chi1}}-{{word:de}}, {{word:yi1}}-{{word:qi3}} {{word:mai3}}-{{word:de}} {{word:fan4}}",
  ],
  tts: ["一起买的饭", "有很多种吃的，一起买的饭"],
  literal: "a meal bought together / a meal of many kinds of food, bought together",
  fit: "plain",
  topics: ["at-a-restaurant"],
  isA: ["dish"],
  proposed: true,
});
