import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8641,
  phase: 4,
  zh: "截止",
  py: "jiézhǐ",
  en: "cut off; end at (a deadline)",
  ru: "заканчиваться (в срок); крайний срок",
  pos: "verb",
  hsd: [
    "{{word:dao4}} X {{word:jiu4}} {{word:wan2}} {{word:le}}",
    "{{word:dao4}} X {{word:jiu4}} {{word:mei2}}-{{word:you3}} {{word:le}}",
  ],
  tts: ["到X就完了", "到X就没有了"],
  literal: "at X it is finished / at X there is no more",
  fit: "plain",
  topics: ["before-and-after"],
  isA: ["starting-and-stopping"],
  proposed: true,
});
