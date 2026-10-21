import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9000,
  phase: 4,
  zh: "撤销",
  py: "chèxiāo",
  en: "revoke; cancel; undo",
  ru: "отменять; аннулировать",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:mei2}}-{{word:you3}} {{word:le}}",
    "{{word:ba3}} {{word:you3}}-{{word:de}} X {{word:na2}}-{{word:zou3}}",
  ],
  tts: ["让X没有了", "把有的X拿走"],
  literal: "let X be gone / take away the X that there is",
  fit: "plain",
  topics: ["breaking-and-taking-apart"],
  isA: ["doing"],
  proposed: true,
});
