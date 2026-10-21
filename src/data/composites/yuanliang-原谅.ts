import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6782,
  phase: 4,
  zh: "原谅",
  py: "yuánliàng",
  en: "forgive",
  ru: "прощать",
  pos: "verb",
  hsd: [
    "{{word:dui4}} X {{word:shuo1}} {{word:mei2}}-{{word:you3}} {{word:guan1xi}}",
    "{{word:bu4}} {{word:shuo1}} X {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["对X说没有关系", "不说X不好"],
  literal: "tell X it does not matter / do not say X is bad",
  fit: "plain",
  topics: ["manners"],
  isA: ["social-action"],
  proposed: true,
});
