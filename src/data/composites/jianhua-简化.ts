import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8726,
  phase: 4,
  zh: "简化",
  py: "jiǎnhuà",
  en: "simplify",
  ru: "упрощать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:bian4}} {{word:bu4}} {{word:nan2}}",
    "{{word:ba3}} X-{{word:de}} {{word:nan2}}-{{word:de}} {{word:bu4}}-{{light:fen1}} {{word:na2}}-{{word:zou3}}",
  ],
  tts: ["让X变不难", "把X的难的部分拿走"],
  literal: "make X become not hard / take away the hard parts of X",
  fit: "plain",
  topics: ["becoming-and-turning-into"],
  isA: ["making"],
  proposed: true,
});
