import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8705,
  phase: 4,
  zh: "归还",
  py: "guīhuán",
  en: "return (something borrowed); give back",
  ru: "возвращать (взятое)",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:gei3}} {{word:hui2}}-{{word:qu4}}",
    "{{word:ba3}} X {{word:na2}} {{word:hui2}}-{{word:qu4}}, {{word:gei3}} {{word:ta1}}",
  ],
  tts: ["把X给回去", "把X拿回去，给他"],
  literal: "give X back / take X back and give it to him",
  fit: "plain",
  topics: ["spending-trading-and-returning"],
  isA: ["handling-action"],
  proposed: true,
});
