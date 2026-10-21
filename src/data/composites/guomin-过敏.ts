import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7726,
  phase: 4,
  zh: "过敏",
  py: "guòmǐn",
  en: "be allergic; have an allergy",
  ru: "иметь аллергию",
  pos: "verb",
  hsd: [
    "{{word:yi1}} {{word:chi1}} X, {{word:shen1ti3}} {{word:jiu4}} {{word:bu4}} {{word:hao3}}",
    "{{word:shen1ti3}} {{word:dui4}} X {{word:hui4}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["一吃X，身体就不好", "身体对X会不好"],
  literal: "as soon as you eat X the body is not well / the body will be bad to X",
  fit: "plain",
  topics: ["germs-poison-and-allergy"],
  isA: ["being-affected"],
  proposed: true,
});
