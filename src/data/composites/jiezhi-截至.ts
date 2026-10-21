import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9322,
  phase: 4,
  zh: "截至",
  py: "jiézhì",
  en: "up to (a time); as of",
  ru: "по состоянию на; вплоть до",
  pos: "verb",
  hsd: [
    "{{word:dao4}} X-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:dao4}} X {{word:jiu4}} {{word:wan2}} {{word:le}}",
  ],
  tts: ["到X的时间", "到X就完了"],
  literal: "up to the time of X / up to X and then it is over",
  fit: "plain",
  topics: ["now-and-recently"],
  isA: ["time-order"],
  proposed: true,
});
