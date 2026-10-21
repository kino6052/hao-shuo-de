import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8876,
  phase: 4,
  zh: "预料",
  py: "yùliào",
  en: "expect; anticipate; foresee",
  ru: "предвидеть; ожидать; предполагать",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} X {{word:hui4}} {{word:fa1}}-{{word:sheng1}}",
    "{{word:xiang3}}-{{word:dao4}} {{word:yi3}}-{{word:hou4}} {{word:hui4}} {{word:zen3me}} {{word:yang4}}",
  ],
  tts: ["想X会发生", "想到以后会怎么样"],
  literal: "think X will happen / think of how it will turn out later",
  fit: "plain",
  topics: ["opinions-and-guesses"],
  isA: ["thinking-action"],
  proposed: true,
});
