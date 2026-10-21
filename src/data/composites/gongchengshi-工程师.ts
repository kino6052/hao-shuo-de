import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6380,
  phase: 4,
  zh: "工程师",
  py: "gōngchéngshī",
  en: "engineer",
  ru: "инженер",
  pos: "noun",
  hsd: [
    "{{word:zhi1dao4}} {{word:zen3me}} {{word:zuo4}} {{word:da4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}}",
    "{{word:zuo4}} {{word:hen3}} {{word:da4}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["知道怎么做大的东西的人", "做很大的工作的人"],
  literal: "a person who knows how to make big things",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
