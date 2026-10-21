import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9090,
  phase: 4,
  zh: "还原",
  py: "huányuán",
  en: "restore; return to the original state",
  ru: "восстанавливать; возвращать в исходное состояние",
  pos: "verb",
  hsd: [
    "{{word:bian4}} {{word:hui2}} {{word:yi3}}-{{word:qian2}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
    "{{word:rang4}} X {{word:bian4}} {{word:hui2}} {{word:yi3}}-{{word:qian2}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
  ],
  tts: ["变回以前的样子", "让X变回以前的样子"],
  literal: "change back to the way it was before / let X change back to the way it was before",
  fit: "plain",
  topics: ["changing"],
  isA: ["becoming"],
  proposed: true,
});
