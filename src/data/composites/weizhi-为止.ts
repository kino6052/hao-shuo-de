import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8285,
  phase: 4,
  zh: "为止",
  py: "wéizhǐ",
  en: "until; up to; as of",
  ru: "до (какого-то момента)",
  pos: "phrase",
  hsd: [
    "{{word:dao4}} X {{word:jiu4}} {{word:wan2}} {{word:le}}",
    "{{word:dao4}} X {{word:jiu4}} {{word:bu4}} {{word:zuo4}} {{word:le}}",
  ],
  tts: ["到X就完了", "到X就不做了"],
  literal: "up to X, then it is finished / up to X, then stop doing it",
  fit: "plain",
  topics: ["now-and-recently"],
  isA: ["time-order"],
  proposed: true,
});
