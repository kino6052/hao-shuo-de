import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6522,
  phase: 4,
  zh: "投",
  py: "tóu",
  en: "throw; cast; put in",
  ru: "бросать; опускать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:na2}}-{{word:qi3}}-{{word:lai2}}, {{word:rang4}} X {{word:fei1}}-{{word:dao4}} Y",
    "{{word:ba3}} X {{word:fang4}}-{{word:jin4}} Y",
  ],
  tts: ["把X拿起来，让X飞到Y", "把X放进Y"],
  literal: "pick X up and make it fly to Y",
  fit: "plain",
  topics: ["throwing-spilling-and-cutting"],
  isA: ["handling-action"],
  proposed: true,
});
