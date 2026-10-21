import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6251,
  phase: 4,
  zh: "限制",
  py: "xiànzhì",
  en: "restrict; limit",
  ru: "ограничивать; ограничение",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:rang4}} X {{word:bi3}} Y {{word:duo1}}",
    "{{word:bu4}} {{word:rang4}} X {{word:zuo4}}",
  ],
  tts: ["不让X比Y多", "不让X做"],
  literal: "not let X be more than Y; not let X do it",
  fit: "plain",
  topics: ["punishing-and-forbidding"],
  isA: ["social-action"],
  proposed: true,
});
