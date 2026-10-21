import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7503,
  phase: 4,
  zh: "预测",
  py: "yùcè",
  en: "predict; forecast",
  ru: "предсказывать; прогноз",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} {{word:yi3}}-{{word:hou4}} {{word:hui4}} {{word:zen3me}}-{{word:yang4}}",
    "{{word:zai4}} X {{word:fa1}}-{{word:sheng1}} {{word:yi3}}-{{word:qian2}}, {{word:xiang3}} X {{word:hui4}} {{word:zen3me}}-{{word:yang4}}",
  ],
  tts: ["想以后会怎么样", "在X发生以前，想X会怎么样"],
  literal: "think how it will be later / before X happens, think how X will be",
  fit: "plain",
  topics: ["opinions-and-guesses"],
  isA: ["thinking-action"],
  proposed: true,
});
