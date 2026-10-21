import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6501,
  phase: 4,
  zh: "收集",
  py: "shōují",
  en: "collect; gather",
  ru: "собирать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:hen3}} {{word:duo1}} X {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
    "{{word:yi1}}-{{light:ge4}} {{word:yi1}}-{{light:ge4}} {{word:na2}}-{{word:lai2}}, {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["把很多X放在一起", "一个一个拿来，放在一起"],
  literal: "put many X together",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  proposed: true,
});
