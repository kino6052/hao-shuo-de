import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8602,
  phase: 4,
  zh: "重建",
  py: "chóngjiàn",
  en: "rebuild; reconstruct",
  ru: "перестроить; восстанавливать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:huai4}} {{word:le}}-{{word:de}} X {{word:you4}} {{word:zuo4}} {{word:yi1}}-{{word:ci4}}",
    "{{word:ba3}} {{word:huai4}} {{word:le}}-{{word:de}} X {{word:zuo4}} {{word:yi1}}-{{light:ge4}} {{word:xin1#new}}-{{word:de}}",
  ],
  tts: ["把坏了的X又做一次", "把坏了的X做一个新的"],
  literal: "make the broken X one more time / make a new one of the broken X",
  fit: "plain",
  topics: ["making-and-doing"],
  isA: ["making"],
  proposed: true,
});
