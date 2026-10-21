import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8258,
  phase: 4,
  zh: "欺骗",
  py: "qīpiàn",
  en: "deceive; cheat; trick",
  ru: "обманывать",
  pos: "verb",
  hsd: [
    "{{word:dui4}} X {{word:shuo1}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:hua4}}",
    "{{word:ba3}} {{word:bu4}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:hua4}} {{word:shuo1}} {{word:gei3}} X {{word:ting1}}",
  ],
  tts: ["对X说不是真的话", "把不是真的话说给X听"],
  literal: "say untrue words to X / tell X untrue words",
  fit: "plain",
  topics: ["manners"],
  isA: ["social-action"],
  proposed: true,
});
