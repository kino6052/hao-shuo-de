import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6492,
  phase: 4,
  zh: "失业",
  py: "shīyè",
  en: "lose one's job; unemployment",
  ru: "потерять работу; безработица",
  pos: "verb",
  hsd: [
    "{{word:mei2}}-{{word:you3}} {{word:gong1}}-{{word:zuo4}} {{word:le}}",
    "{{word:yi3}}-{{word:qian2}} {{word:you3}} {{word:gong1}}-{{word:zuo4}}, {{word:xian4}}-{{word:zai4}} {{word:mei2}}-{{word:you3}}",
  ],
  tts: ["没有工作了", "以前有工作，现在没有"],
  literal: "no longer have work",
  fit: "plain",
  topics: ["working-life"],
  isA: ["receiving"],
  proposed: true,
});
